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

## Core Principles

### 1. Zero Configuration

**Goal**: Plugin should work immediately after installation with `<EventsPlugin />`.

**Implementation**:
- Self-contained Resource components with all routes
- Default components provided out-of-the-box
- Peer dependencies ensure environment consistency
- No required props on the plugin component

```typescript
// This is all you need!
<Admin dataProvider={dataProvider}>
  <EventsPlugin />
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
│   ├── EventsPlugin.tsx       # Main registration component
│   ├── index.ts               # Public API exports
│   ├── types/                 # TypeScript definitions
│   │   ├── resources.ts       # Event, Speaker, Venue, Session types
│   │   ├── config.ts          # Plugin configuration types
│   │   └── components.ts      # Component prop types
│   ├── components/            # Shared components
│   │   └── RecurrenceInput.tsx
│   ├── resources/             # Resource modules
│   │   ├── events/
│   │   │   ├── index.tsx      # EventResource component
│   │   │   ├── DefaultEventList.tsx
│   │   │   ├── DefaultEventEdit.tsx
│   │   │   ├── DefaultEventCreate.tsx
│   │   │   └── DefaultEventForm.tsx
│   │   ├── speakers/
│   │   ├── venues/
│   │   └── schedule/
│   ├── context/               # Configuration contexts
│   │   ├── OverridesContext.tsx
│   │   ├── PermissionsContext.tsx
│   │   └── ExtraFieldsContext.tsx
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

**Solution**: Return React Fragment with Resource components

**Why This Approach?**

React Admin's `<Admin>` component uses `React.Children.map()` to discover `<Resource>` components at mount time. It cannot see Resources wrapped in custom provider components.

**Implementation**:
```typescript
// EventsPlugin.tsx
export const EventsPlugin = (props: EventsPluginProps) => {
  // Initialize configuration contexts
  return (
    <OverridesProvider overrides={props.overrides || {}}>
      <PermissionsProvider permissions={props.permissions || {}}>
        <ExtraFieldsProvider extraFields={props.extraFields || {}}>
          {/* Resources must be direct children of React Fragment */}
          <Resource name="events" {...EventResourceConfig} />
          <Resource name="speakers" {...SpeakerResourceConfig} />
          <Resource name="venues" {...VenueResourceConfig} />
          <CustomRoutes>
            <Route path="/schedule/:eventId" element={<ScheduleBuilder />} />
          </CustomRoutes>
        </ExtraFieldsProvider>
      </PermissionsProvider>
    </OverridesProvider>
  );
};
```

**Alternatives Considered**:
- ❌ HOC wrapper: Breaks React Admin's child inspection
- ❌ Imperative registration API: Not idiomatic for React Admin
- ❌ Plugin hook: Requires changes to host App structure

**Trade-offs**:
- ✅ Works seamlessly with React Admin
- ✅ Declarative and familiar
- ⚠️ Resources must be declared at plugin definition time

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

### Decision 3: Context-Based Component Overrides

**Problem**: How should custom components flow from plugin registration to usage?

**Solution**: React Context pattern with `useOverride()` hook

**Why This Approach?**

Overrides need to be accessible deep in the component tree without prop drilling. React Context provides clean access pattern while maintaining type safety.

**Implementation**:
```typescript
// OverridesContext.tsx
const OverridesContext = createContext<OverridesConfig>({});

export const useOverride = <T extends ComponentType<any>>(
  key: keyof OverridesConfig,
  defaultComponent: T
): T => {
  const overrides = useContext(OverridesContext);
  return (overrides[key] as T) || defaultComponent;
};

// Usage in resource components
const EventEdit = (props) => {
  const FormComponent = useOverride('EventForm', DefaultEventForm);
  return (
    <Edit {...props}>
      <FormComponent />
    </Edit>
  );
};
```

**Benefits**:
- ✅ No prop drilling
- ✅ Type-safe override keys
- ✅ Fallback to defaults
- ✅ Easy to test

**Alternatives Considered**:
- ❌ Props drilling: Verbose, maintenance burden
- ❌ Module-level configuration: Breaks with multiple plugin instances
- ❌ Registry pattern: Over-engineered for current needs

### Decision 4: ExtraFields Schema Merging

**Problem**: How should custom fields integrate with resource schemas?

**Solution**: Merge extra fields into data provider transforms

**Why This Approach?**

React Admin's data provider pattern allows transformation of data before sending to backend. Merging extra fields at this layer ensures they persist without modifying default forms.

**Implementation**:
```typescript
const EventResource = () => {
  const extraFields = useExtraFields('events');
  
  // Merge extraFields into resource schema
  const transformData = (data) => ({
    ...data,
    ...extraFields.reduce((acc, field) => ({
      ...acc,
      [field]: data[field]
    }), {})
  });
  
  return (
    <Resource
      name="events"
      list={EventList}
      edit={(props) => <EventEdit transform={transformData} {...props} />}
      create={(props) => <EventCreate transform={transformData} {...props} />}
    />
  );
};
```

**Benefits**:
- ✅ Works with any form structure
- ✅ Doesn't require form knowledge
- ✅ Clean separation of concerns
- ✅ Backend-agnostic

### Decision 5: Permission-Based Action Filtering

**Problem**: How should permissions control resource actions?

**Solution**: Function-based permission checks with conditional rendering

**Why This Approach?**

Permissions may depend on runtime data (user role, resource ownership). Function-based checks provide maximum flexibility while keeping API simple.

**Implementation**:
```typescript
// Permissions configuration
<EventsPlugin
  permissions={{
    events: {
      create: (user) => user.role === 'admin',
      edit: (user, record) => user.role === 'admin' || record.ownerId === user.id,
      delete: (user) => user.role === 'admin',
      list: true
    }
  }}
/>

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

Each resource (Events, Speakers, Venues) follows this pattern:

```typescript
// resources/events/index.tsx
import { Resource } from 'react-admin';
import { useOverride } from '../../context/OverridesContext';
import DefaultEventList from './DefaultEventList';
import DefaultEventEdit from './DefaultEventEdit';
import DefaultEventCreate from './DefaultEventCreate';

export const EventResource = () => {
  const ListComponent = useOverride('EventList', DefaultEventList);
  const EditComponent = useOverride('EventEdit', DefaultEventEdit);
  const CreateComponent = useOverride('EventCreate', DefaultEventCreate);
  
  return (
    <Resource
      name="events"
      list={ListComponent}
      edit={EditComponent}
      create={CreateComponent}
    />
  );
};
```

**Why This Pattern?**
- Encapsulates resource configuration
- Cleanly integrates overrides
- Easy to test individual resources
- Maintains TypeScript safety

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

// TypeScript ensures only valid keys
<EventsPlugin
  overrides={{
    EventForm: CustomEventForm,
    // @ts-error: Invalid key
    InvalidKey: SomeComponent
  }}
/>
```

## Performance Considerations

### Bundle Size

- **Plugin size**: ~150KB (minified, uncompressed)
- **Peer deps** (provided by host): react-admin (~500KB), MUI (~350KB)
- **Bundled deps**: rrule (~50KB), date-fns (~20KB)

### Code Splitting

React Admin lazy-loads Resource components by default. Plugin resources only load when accessed.

### Re-render Optimization

Context providers use value memoization:

```typescript
const overridesValue = useMemo(() => overrides, [overrides]);

<OverridesContext.Provider value={overridesValue}>
  {children}
</OverridesContext.Provider>
```

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

**Cause**: Plugin not placed as direct child of `<Admin>`

**Solution**:
```typescript
// ✅ Correct
<Admin dataProvider={dataProvider}>
  <EventsPlugin />
</Admin>

// ❌ Incorrect
<Admin dataProvider={dataProvider}>
  <div>
    <EventsPlugin /> {/* Wrapped in div */}
  </div>
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
