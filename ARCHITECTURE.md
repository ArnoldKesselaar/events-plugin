# Architecture Guide: Events Plugin

**Version**: 1.0.0  
**Last Updated**: March 6, 2026

This document explains the architectural decisions, design patterns, and technical rationale behind the Events Plugin implementation.

## Table of Contents

- [Overview](#overview)
- [Core Principles](#core-principles)
- [Plugin Architecture](#plugin-architecture)
- [Key Design Decisions](#key-design-decisions)
- [Integration Patterns](#integration-patterns)
- [Component Structure](#component-structure)
- [Customization System](#customization-system)
- [Performance Considerations](#performance-considerations)
- [Common Misconceptions & Anti-Patterns](#common-misconceptions--anti-patterns)
- [Troubleshooting](#troubleshooting)

## Overview

The Events Plugin extracts event management functionality from a monolithic React Admin application into a reusable, self-contained plugin. It demonstrates how to build plugins that:

- Register themselves with zero configuration
- Inherit host application themes automatically
- Provide flexible customization without forking
- Maintain type safety across plugin boundaries
- Support versioned upgrades

### Implementation Approach

The plugin is implemented as a **function that returns an array of Resource elements**, not as a React component. This design is essential for compatibility with React Admin's architecture:

```typescript
// Plugin returns an array of ReactElement (Resource components)
export const EventsPlugin = (props?: EventsPluginConfig): ReactElement[] => {
  // ... configuration and override resolution
  return [/* Resource elements */];
};

// Used with spread operator in host app
<Admin dataProvider={dataProvider}>
  {...EventsPlugin({ overrides, extraFields })}
</Admin>
```

**Why this matters**: React Admin discovers resources by inspecting direct children of the `<Admin>` component. Wrapping resources in a function component would hide them from React Admin's discovery mechanism, causing routing errors. By returning an array that gets spread into Admin's children, the Resources become direct children and are properly registered.

## Core Principles

### 1. Zero Configuration

**Goal**: Plugin should work immediately after installation with minimal code.

**Implementation**:
- Self-contained Resource components with all routes
- Default components provided out-of-the-box
- Peer dependencies ensure environment consistency
- No required configuration parameters

```typescript
// This is all you need!
<Admin dataProvider={dataProvider}>
  {...EventsPlugin()}
</Admin>
```

### 2. Theme Independence

**Goal**: Plugin components automatically adopt host theme without configuration.

**Implementation**:
- All plugin components use MUI's `useTheme()` hook
- No hardcoded colors, spacing, or typography
- Theme values accessed via `theme.palette.*`, `theme.spacing()`, `theme.typography.*`
- Supports runtime theme switching (light/dark mode)

**Benefits**:
- Plugin UI always matches host application
- Theme changes don't require plugin rebuild
- No theme configuration in plugin API
- Zero coupling between plugin and host theme files

### 3. Non-Breaking Customization

**Goal**: Clients can extend functionality without forking plugin code.

**Implementation**:
- **Overrides API**: Replace any component
- **ExtraFields API**: Add custom fields to resources
- **Permissions API**: Control action visibility

**Benefits**:
- Customization doesn't block plugin upgrades
- Changes isolated to host application code
- Plugin remains upgrade-safe

### 4. Complete Isolation

**Goal**: Plugin can be completely removed without affecting host application.

**Implementation**:
- Plugin is separate npm package
- No shared state with host (except React Admin context)
- All dependencies declared as peer deps or bundled
- Removal = uninstall + delete one line

## Plugin Architecture

### Package Structure

```text
@quicklaunch/events-plugin/
├── src/
│   ├── index.ts               # Main plugin entry - exports EventsPlugin function
│   ├── types/                 # TypeScript definitions
│   │   ├── resources.ts       # Event, Speaker, Venue, Session types
│   │   ├── config.ts          # Plugin configuration types
│   │   └── components.ts      # Component prop types
│   ├── components/            # Shared components
│   │   └── RecurrenceInput.tsx
│   ├── resources/             # Resource modules
│   │   ├── events/
│   │   │   ├── DefaultEventList.tsx
│   │   │   ├── DefaultEventEdit.tsx
│   │   │   ├── DefaultEventCreate.tsx
│   │   │   └── DefaultEventForm.tsx
│   │   ├── speakers/
│   │   ├── venues/
│   │   └── schedule/
│   └── utils/                 # Utilities
│       ├── eventValidators.ts
│       └── recurringEvents.ts
└── docs/
    ├── README.md
    ├── ARCHITECTURE.md (this file)
    ├── API.md
    └── MIGRATION.md
```

### Build Configuration

**Tool**: Vite in library mode

**Output Formats**: ESM (`.js`) and CommonJS (`.cjs`)

**Why Dual Formats?**
- ESM for modern bundlers (tree-shaking)
- CJS for backward compatibility

**Externalized Dependencies**:
- `react`, `react-dom` - Peer dependencies (must be single instance)
- `react-admin` - Peer dependency (context sharing required)
- `@mui/material` - Peer dependency (theme sharing required)

**Bundled Dependencies**:
- `rrule` - Recurring event logic
- `date-fns` - Date utilities

**Configuration** (vite.config.ts):
```typescript
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react-admin', '@mui/material']
    }
  }
});
```

## Key Design Decisions

### Decision 1: Function-Based Resource Registration

**Problem**: How should plugin register its resources with React Admin?

**Solution**: Return array of Resource elements that must be spread into Admin children

**Why This Approach?**

React Admin's `<Admin>` component uses `React.Children.map()` to discover `<Resource>` components as **direct children** at mount time. It cannot see Resources wrapped in component functions or custom provider components. The plugin must return an array of Resource elements that can be spread directly into the Admin's children.

**Implementation**:
```typescript
// index.ts
export const EventsPlugin = (props?: EventsPluginConfig): ReactElement[] => {
  const {
    overrides = {},
    extraFields = {},
    permissions = {},
  } = props || {};
  
  // Apply component overrides and configuration
  const EventListComponent = overrides.EventList || DefaultEventList;
  // ... other component resolutions
  
  // Return array of Resource elements
  return [
    React.createElement(Resource, {
      key: "events",
      name: "events",
      list: EventListComponent,
      edit: EventEditComponent,
      create: EventCreateComponent,
      icon: EventIcon
    }),
    React.createElement(Resource, {
      key: "speakers",
      name: "speakers",
      list: SpeakerListComponent,
      edit: SpeakerEditComponent,
      create: SpeakerCreateComponent,
      icon: PersonIcon
    }),
    // ... other resources
  ];
};
```

**Usage in Host App**:
```typescript
// App.tsx
<Admin dataProvider={dataProvider} theme={theme}>
  {/* Spread the array returned by EventsPlugin */}
  {...EventsPlugin({
    overrides: { EventList: CustomEventList },
    extraFields: { events: ['customField'] }
  })}
</Admin>
```

**Critical Implementation Details**:
- Plugin returns `ReactElement[]` (array of elements), not a component
- Each Resource must have a unique `key` prop
- Array must be spread using `{...EventsPlugin()}` syntax in Admin children
- Cannot wrap in React Fragment or component - breaks React Admin's child discovery

**Alternatives Considered**:
- ❌ Component wrapper (`<EventsPlugin />`): React Admin cannot discover Resources inside function components
- ❌ React Fragment return: Still wrapped in component, doesn't expose Resources as direct children
- ❌ HOC wrapper: Breaks React Admin's child inspection
- ❌ Imperative registration API: Not idiomatic for React Admin
- ❌ Plugin hook: Requires changes to host App structure

**Trade-offs**:
- ✅ Works seamlessly with React Admin's child discovery
- ✅ Declarative and type-safe
- ✅ Supports configuration via function parameters
- ⚠️ Requires spread operator syntax (not JSX component syntax)
- ⚠️ Resources must be declared at plugin call time

### Decision 2: Theme Inheritance via useTheme()

**Problem**: How should plugin components access host theme?

**Solution**: Use Material-UI's `useTheme()` hook in every component

**Why This Approach?**

Material-UI provides theme via React Context (`ThemeProvider`). Using `useTheme()` gives plugin components automatic access to the current theme, including runtime updates.

**Implementation**:
```typescript
import { useTheme } from '@mui/material';

const EventCard = () => {
  const theme = useTheme();
  
  return (
    <Box
      sx={{
        bgcolor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        p: theme.spacing(2),
        borderRadius: theme.shape.borderRadius,
      }}
    >
      <Typography variant="h6">Event Title</Typography>
    </Box>
  );
};
```

**Benefits**:
- ✅ Zero configuration required
- ✅ Supports runtime theme switching
- ✅ Always synchronized with host theme
- ✅ No prop drilling
- ✅ Standard MUI pattern

**Alternatives Considered**:
- ❌ Direct theme import: Creates coupling, no runtime updates
- ❌ Theme prop: Redundant, requires prop drilling
- ❌ CSS variables: Loses TypeScript safety

### Decision 3: Props-Based Component Overrides

**Problem**: How should custom components flow from plugin registration to Resource elements?

**Solution**: Direct resolution from function props

**Why This Approach?**

Since `EventsPlugin` is a function (not a component tree), we can directly access the `overrides` prop and resolve component overrides immediately when creating Resource elements. This is simpler than context and has no performance overhead.

**Implementation**:
```typescript
// index.ts
export const EventsPlugin = (props?: EventsPluginConfig): ReactElement[] => {
  const {
    overrides = {},
    extraFields = {},
    permissions = {},
  } = props || {};
  
  // Direct component resolution from props
  const EventListComponent = overrides.EventList || DefaultEventList;
  const EventFormComponent = overrides.EventForm || DefaultEventForm;
  const EventEditComponent = overrides.EventEdit || DefaultEventEdit;
  
  // Create wrapper components that inject extraFields
  const EventEditWithConfig = () => 
    React.createElement(DefaultEventEdit, { 
      FormComponent: EventFormComponent, 
      extraFields: extraFields.events || [] 
    });
  
  return [
    React.createElement(Resource, {
      key: "events",
      name: "events",
      list: EventListComponent,
      edit: EventEditWithConfig,
      // ... other actions
    }),
    // ... other resources
  ];
};
```

**Benefits**:
- ✅ Simple and direct - no context needed
- ✅ Type-safe override keys via TypeScript interface
- ✅ Fallback to defaults with `||` operator
- ✅ No React Context overhead
- ✅ Easy to test and debug

**Alternatives Considered**:
- ❌ React Context: Unnecessary complexity when we have direct prop access
- ❌ Props drilling: Not needed since we resolve at registration time
- ❌ Module-level configuration: Breaks with multiple plugin instances
- ❌ Registry pattern: Over-engineered for current needs

**Why Not Context?**

Context is valuable when you need to share state across a component tree. Since `EventsPlugin` returns an array of elements rather than rendering a tree, we don't need Context's propagation mechanism. Direct prop resolution is simpler and more efficient.

### Decision 4: ExtraFields via Component Props

**Problem**: How should custom fields integrate with resource schemas?

**Solution**: Pass extra fields directly as props to wrapper components

**Why This Approach?**

Since we're creating Resource elements directly in the plugin function, we can create wrapper components that inject extra fields as props to the default Edit/Create components. The default components then handle rendering these fields.

**Implementation**:
```typescript
// index.ts
export const EventsPlugin = (props?: EventsPluginConfig): ReactElement[] => {
  const { extraFields = {} } = props || {};
  const eventExtraFields = extraFields.events || [];
  
  // Create wrapper components that pass extraFields to default components
  const EventEditComponent = () => 
    React.createElement(DefaultEventEdit, { 
      FormComponent: EventFormComponent, 
      extraFields: eventExtraFields 
    });
  
  const EventCreateComponent = () => 
    React.createElement(DefaultEventCreate, { 
      FormComponent: EventFormComponent, 
      extraFields: eventExtraFields 
    });
  
  return [
    React.createElement(Resource, {
      key: "events",
      name: "events",
      list: EventListComponent,
      edit: EventEditComponent,  // Wrapper that injects extraFields
      create: EventCreateComponent,  // Wrapper that injects extraFields
      icon: EventIcon
    }),
    // ... other resources
  ];
};

// DefaultEventEdit.tsx
interface DefaultEventEditProps {
  FormComponent?: ComponentType<any>;
  extraFields?: string[];
}

export const DefaultEventEdit = ({ 
  FormComponent = DefaultEventForm, 
  extraFields = [] 
}: DefaultEventEditProps) => {
  return (
    <Edit>
      <FormComponent extraFields={extraFields} />
    </Edit>
  );
};
```

**Benefits**:
- ✅ Simple prop passing - no context needed
- ✅ Type-safe with TypeScript interfaces
- ✅ Clear data flow from plugin config → wrapper → default components
- ✅ Works with any form structure
- ✅ Doesn't require form knowledge
- ✅ Clean separation of concerns

### Decision 5: Permission-Based Action Filtering

**Problem**: How should permissions control resource actions?

**Solution**: Function-based permission checks with conditional rendering

**Why This Approach?**

Permissions may depend on runtime data (user role, resource ownership). Function-based checks provide maximum flexibility while keeping API simple.

**Implementation**:
```typescript
// Permissions configuration
{...EventsPlugin({
  permissions: {
    events: {
      create: (user) => user.role === 'admin',
      edit: (user, record) => user.role === 'admin' || record.ownerId === user.id,
      delete: (user) => user.role === 'admin',
      list: true
    }
  }
})}

// Permission check in component
const EventList = (props) => {
  const { checkPermission } = usePermissions('events');
  const canCreate = checkPermission('create');
  
  return (
    <List {...props}>
      <Datagrid>
        {/* ... fields ... */}
        {canCreate && <CreateButton />}
      </Datagrid>
    </List>
  );
};
```

**Benefits**:
- ✅ Flexible: Boolean or function
- ✅ Runtime data access
- ✅ Composable checks
- ✅ Type-safe

## Integration Patterns

### Workspace Development Setup

For optimal development experience, use npm workspaces:

```json
// Root package.json
{
  "private": true,
  "workspaces": ["src", "external-package/@quicklaunch/*"]
}

// Host app package.json
{
  "dependencies": {
    "@quicklaunch/events-plugin": "workspace:*"
  }
}
```

**Benefits**:
- Hot module reload
- Shared dependencies
- Type resolution across packages
- Easy debugging

### Production Distribution

For production, publish as scoped npm package:

```json
{
  "name": "@quicklaunch/events-plugin",
  "version": "1.0.0",
  "main": "./dist/index.cjs",
  "module": "./dist/index.js",
  "types": "./dist/index.d.ts"
}
```

## Component Structure

### Resource Component Pattern

Resources are registered directly within the `EventsPlugin` function:

```typescript
// index.ts
export const EventsPlugin = (props?: EventsPluginConfig): ReactElement[] => {
  const {
    overrides = {},
    extraFields = {},
    permissions = {},
  } = props || {};
  
  // Apply component overrides
  const EventListComponent = overrides.EventList || DefaultEventList;
  const EventEditComponent = overrides.EventEdit || DefaultEventEdit;
  const EventCreateComponent = overrides.EventCreate || DefaultEventCreate;
  
  // Return array of Resource elements
  return [
    React.createElement(Resource, {
      key: "events",
      name: "events",
      list: EventListComponent,
      edit: EventEditComponent,
      create: EventCreateComponent,
      icon: EventIcon
    }),
    // ... other resources
  ];
};
```

**Why This Pattern?**
- Direct registration with React Admin
- Simple override resolution (no context needed)
- Type-safe component resolution
- Efficient - no intermediate components
- Clear control flow from props to resources

### Default Component Exports

All default components are exported for client extension:

```typescript
// index.ts
export { EventsPlugin } from './EventsPlugin';
export { DefaultEventForm } from './resources/events/DefaultEventForm';
export { DefaultEventList } from './resources/events/DefaultEventList';
export { DefaultEventEdit } from './resources/events/DefaultEventEdit';
// ... all other defaults
```

**Use Case**: Clients can import and extend defaults rather than replacing entirely:

```typescript
import { DefaultEventForm } from '@quicklaunch/events-plugin';

const CustomEventForm = (props) => (
  <>
    <DefaultEventForm {...props} />
    <TextInput source="customField" />
  </>
);
```

## Customization System

### Three Customization Layers

1. **Overrides**: Replace entire components
2. **ExtraFields**: Add fields without replacing components
3. **Permissions**: Control action visibility

### Override Priority and Fallbacks

```typescript
// Plugin always provides defaults
const FormComponent = useOverride('EventForm', DefaultEventForm);

// Priority:
// 1. Client override (if provided)
// 2. Default component (always available)
```

### Type Safety in Overrides

```typescript
// types/config.ts
export interface OverridesConfig {
  EventList?: ComponentType<any>;
  EventForm?: ComponentType<any>;
  EventEdit?: ComponentType<any>;
  EventCreate?: ComponentType<any>;
  // ... other overrideable components
}

export interface EventsPluginConfig {
  overrides?: OverridesConfig;
  extraFields?: ExtraFieldsConfig;
  permissions?: PermissionsConfig;
}

// index.ts
export const EventsPlugin = (props?: EventsPluginConfig): ReactElement[] => {
  // Implementation
};

// TypeScript ensures only valid keys
{...EventsPlugin({
  overrides: {
    EventForm: CustomEventForm,
    // @ts-error: Invalid key
    InvalidKey: SomeComponent
  }
})}
```

## Performance Considerations

### Bundle Size

- **Plugin size**: ~150KB (minified, uncompressed)
- **Peer deps** (provided by host): react-admin (~500KB), MUI (~350KB)
- **Bundled deps**: rrule (~50KB), date-fns (~20KB)

### Code Splitting

React Admin lazy-loads Resource components by default. Plugin resources only load when accessed.

### Re-render Optimization

Plugin function is pure and creates elements only once at mount:

```typescript
// Called once when Admin mounts
const resources = EventsPlugin({ overrides, extraFields });

// Resources are stable - no re-renders unless Admin re-mounts
<Admin>
  {...resources}
</Admin>
```

**Benefits**:
- No context re-renders
- Resources created once at mount time
- Component overrides resolved immediately
- Minimal runtime overhead

### Tree Shaking

Plugin exports are ESM-compatible for tree-shaking:

```typescript
// Only imports EventsPlugin code, not Speaker/Venue defaults
import { EventsPlugin } from '@quicklaunch/events-plugin';
```

## Common Misconceptions & Anti-Patterns

### Anti-Pattern: Behavior Injection Hooks

**❌ Incorrect Approach:**

```typescript
// DON'T DO THIS - Not a real React hook
export const useEventForm = (defaultBehavior, overrides?) => {
  return overrides?.onSave || defaultBehavior;
};

// Usage (problematic)
const MyForm = () => {
  const handleSave = useEventForm(defaultSave, { onSave: customSave });
  return <SimpleForm onSubmit={handleSave}>...</SimpleForm>;
};
```

**Why This Doesn't Work:**

1. **Not a Real Hook**: Doesn't use any React hooks internally (`useState`, `useEffect`, `useContext`)
2. **Violates Rules of Hooks**: Just returns a value - this is a utility function, not a hook
3. **Lacks Type Safety**: No TypeScript types for `defaultBehavior` or `overrides`
4. **Too Limited**: Only handles one behavior (`onSave`) - doesn't provide access to form state, validation, or React Admin APIs
5. **Doesn't Fit Architecture**: Plugin uses component-level overrides, not behavior injection

**✅ Correct Approaches:**

#### Option 1: Component Override with Transform (Recommended)

```typescript
// src/customizations/CustomEventForm.tsx
import { SimpleForm, TextInput, useNotify } from 'react-admin';

export const CustomEventForm = () => {
  const notify = useNotify();
  
  // Custom logic via transform prop
  const handleTransform = (data: any) => {
    notify('Saving with custom logic!');
    return {
      ...data,
      processedAt: new Date().toISOString(),
      customField: 'processed'
    };
  };
  
  return (
    <SimpleForm transform={handleTransform}>
      <TextInput source="name" />
      <TextInput source="description" />
      {/* Your custom fields */}
    </SimpleForm>
  );
};

// src/App.tsx
{EventsPlugin({
  overrides: {
    EventForm: CustomEventForm  // Full component replacement
  }
})}
```

#### Option 2: Use React Admin's Built-in Hooks

```typescript
import { SimpleForm, useDataProvider, useNotify, useRedirect } from 'react-admin';

export const CustomEventForm = () => {
  const dataProvider = useDataProvider();
  const notify = useNotify();
  const redirect = useRedirect();
  
  const handleSave = async (data: any) => {
    try {
      // Custom save logic with full control
      const result = await dataProvider.create('events', { data });
      notify('Event created successfully');
      redirect('list', 'events');
    } catch (error) {
      notify('Error: ' + error.message, { type: 'error' });
    }
  };
  
  return (
    <SimpleForm onSubmit={handleSave}>
      <TextInput source="name" />
    </SimpleForm>
  );
};
```

#### Option 3: Utility Functions (Not Hooks)

```typescript
// utils/formHelpers.ts - Utility function, not a hook
export const createEventTransform = (customLogic?: (data: any) => any) => {
  return (data: any) => {
    const processed = customLogic ? customLogic(data) : data;
    return {
      ...processed,
      timestamp: new Date().toISOString()
    };
  };
};

// Client usage
import { createEventTransform } from '@quicklaunch/events-plugin';

const transform = createEventTransform((data) => ({
  ...data,
  customField: 'my-value'
}));

const CustomEventForm = () => (
  <SimpleForm transform={transform}>
    <TextInput source="name" />
  </SimpleForm>
);
```

**Key Takeaway**: The plugin's architecture is built around **component replacement**, not **behavior injection**. Custom logic should be implemented within custom components using React Admin's built-in APIs (`transform`, `onSubmit`, hooks like `useDataProvider`, `useNotify`, etc.).

## Troubleshooting

### Plugin Resources Not Appearing

**Cause**: Plugin array not spread correctly into `<Admin>` children

**Solution**:
```typescript
// ✅ Correct - Use spread operator
<Admin dataProvider={dataProvider}>
  {...EventsPlugin()}
</Admin>

// ❌ Incorrect - Missing spread operator
<Admin dataProvider={dataProvider}>
  {EventsPlugin()}  {/* Returns array, not valid JSX */}
</Admin>

// ❌ Incorrect - Trying to use as component
<Admin dataProvider={dataProvider}>
  <EventsPlugin />  {/* Not a component, it's a function */}
</Admin>
```

### Theme Not Inherited

**Cause**: Theme not passed to `<Admin>` component

**Solution**:
```typescript
<Admin theme={myTheme} dataProvider={dataProvider}>
  <EventsPlugin />
</Admin>
```

### TypeScript Errors on Plugin Props

**Cause**: Type definitions not found

**Solution**:
1. Ensure plugin is properly installed
2. Clear TypeScript cache: `rm -rf node_modules/.cache`
3. Restart TypeScript server in IDE

### Peer Dependency Conflicts

**Cause**: Incompatible package versions

**Solution**: Match peer dependency requirements:
```json
{
  "react": "^18.0.0",
  "react-admin": "^4.16.0",
  "@mui/material": "^5.14.0"
}
```

## Versioning Strategy

Plugin follows Semantic Versioning (semver):

- **Major (x.0.0)**: Breaking changes (API changes, removed features)
- **Minor (1.x.0)**: New features (backward compatible)
- **Patch (1.0.x)**: Bug fixes (backward compatible)

See [MIGRATION.md](./MIGRATION.md) for upgrade guidance.

## References

- [Architecture Decision Records](../specs/001-events-plugin/adr/) - Detailed ADRs for key decisions
- [API Reference](./API.md) - Complete API documentation
- [React Admin Documentation](https://marmelab.com/react-admin/) - React Admin patterns
- [Material-UI Theming](https://mui.com/material-ui/customization/theming/) - MUI theme system

---

**Last Updated**: March 6, 2026  
**Version**: 1.0.0
