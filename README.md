# @quicklaunch/events-plugin

A comprehensive events management plugin for React Admin applications in the Quicklaunch ecosystem. Provides full CRUD operations for events, speakers, venues, and schedule management with a customizable, theme-aware interface.

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](./CHANGELOG.md)
[![License](https://img.shields.io/badge/license-UNLICENSED-red.svg)]()

## Features

- 🎯 **Zero-config Installation**: Add `{EventsPlugin()}` and you're done
- 🎨 **Automatic Theme Inheritance**: Adopts your project's MUI theme (colors, typography, dark mode)
- 🔧 **Flexible Customization**: Override components, add custom fields, control permissions
- 📦 **Four Resource Modules**: Events, Speakers, Venues, Schedule Builder
- 🔄 **Recurring Events**: Built-in support for repeating events using RRule
- 🌐 **Data Provider Agnostic**: Works with any React Admin data provider
- 📘 **Full TypeScript Support**: Complete type definitions included
- 🚀 **Hot Module Reload**: Changes reflect instantly during development

## Quick Start

### Installation

**For published package:**
```bash
npm install @quicklaunch/events-plugin
```

**For workspace/monorepo setup:**
```json
// package.json
{
  "dependencies": {
    "@quicklaunch/events-plugin": "workspace:*"
  }
}
```

### Basic Usage

```typescript
// src/App.tsx
import { Admin } from 'react-admin';
import { EventsPlugin } from '@quicklaunch/events-plugin';
import dataProvider from './dataProvider';

export const App = () => (
  <Admin dataProvider={dataProvider}>
    {/* Your existing resources */}
    
    {/* Add the Events Plugin */}
    {EventsPlugin()}
  </Admin>
);
```

**That's it!** The plugin automatically registers four new resources:
- **Events** (`/events`) - Manage conferences, meetups, and gatherings
- **Speakers** (`/speakers`) - Manage event speakers and their profiles
- **Venues** (`/venues`) - Manage event locations
- **Sessions** (`/sessions`) - Manage individual event sessions

These will appear in your React Admin sidebar menu automatically.

### Running with JSON Server (Development)

For local development, start the JSON server backend:

```bash
# Terminal 1: Start the API server
npm run server

# Terminal 2: Start the React app
npm run dev
```

The plugin will connect to `http://localhost:3001` and work with the data in `db.json`.

## Documentation

- **[API Reference](./API.md)** - Complete API documentation with all configuration options
- **[Architecture Guide](./ARCHITECTURE.md)** - Design decisions, patterns, and ADRs
- **[Migration Guide](./MIGRATION.md)** - Upgrading between versions and breaking changes
- **[Changelog](./CHANGELOG.md)** - Version history and release notes

## Requirements

- React 18+
- React Admin 4.16+
- Material-UI 5.14+
- TypeScript 5.x (recommended)

## Basic Examples

### Theme Integration

The plugin automatically inherits your MUI theme:

```typescript
import { createTheme } from '@mui/material';
import { Admin } from 'react-admin';
import { EventsPlugin } from '@quicklaunch/events-plugin';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#1976d2' },
    secondary: { main: '#dc004e' },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export const App = () => (
  <Admin theme={theme} dataProvider={dataProvider}>
    {EventsPlugin()}
  </Admin>
);
```

All plugin components will automatically use your dark mode, colors, and typography.

### Custom Component Override

Replace the default Event form with your own:

```typescript
import { EventsPlugin, DefaultEventForm } from '@quicklaunch/events-plugin';
import { TextInput } from 'react-admin';

// Create a custom form that extends the default
const CustomEventForm = (props) => (
  <>
    <DefaultEventForm {...props} />
    <TextInput source="budgetCode" label="Budget Code" />
    <TextInput source="costCenter" label="Cost Center" />
  </>
);

export const App = () => (
  <Admin dataProvider={dataProvider}>
    {EventsPlugin({
      overrides: {
        EventForm: CustomEventForm
      },
      extraFields: {
        events: ['budgetCode', 'costCenter']
      }
    })}
  </Admin>
);
```

### Permission Control

Restrict actions based on user roles:

```typescript
{EventsPlugin({
  permissions: {
    events: {
      list: true,
      create: (user) => user.role === 'admin',
      edit: (user) => user.role === 'admin' || user.role === 'editor',
      delete: (user) => user.role === 'admin'
    },
    speakers: true, // All actions allowed
    venues: {
      create: false, // No one can create venues
      edit: (user) => user.role === 'admin'
    }
  }
})}
```

### Add Custom Fields

Add extra fields to any resource without forking:

```typescript
{EventsPlugin({
  extraFields: {
    events: ['sponsorName', 'eventBudget', 'internalNotes'],
    speakers: ['linkedInUrl', 'twitterHandle'],
    venues: ['parkingInfo', 'wifiPassword']
  }
})}
```

## Advanced Examples

These examples demonstrate production-ready customization patterns used in real-world implementations.

### Complete Custom Form Override

This example shows how to completely replace the default Event form with a custom implementation that includes:
- Custom branding and styling
- Enhanced validation logic
- Custom field rendering with Material-UI components
- Integration with extra fields
- Theme-aware design

```typescript
// src/customizations/CustomEventForm.tsx
import { SimpleForm, TextInput, DateInput, required, useRecordContext } from 'react-admin';
import { Box, Typography, Chip, useTheme } from '@mui/material';
import { validateEventDates } from '@quicklaunch/events-plugin';

export const CustomEventForm = () => {
  const theme = useTheme();
  const record = useRecordContext();
  
  return (
    <SimpleForm>
      {/* Custom branding header */}
      <Box sx={{ 
        mb: 3, 
        p: 2, 
        backgroundColor: theme.palette.primary.light,
        borderRadius: 1,
        color: theme.palette.primary.contrastText
      }}>
        <Typography variant="h6">
          🎉 Event Management - Premium Edition
        </Typography>
        <Typography variant="caption">
          Customized form with enhanced fields and validation
        </Typography>
      </Box>

      {/* Standard event fields with custom layout */}
      <TextInput 
        source="name" 
        validate={required()} 
        fullWidth 
        helperText="Enter a descriptive event name"
      />

      <TextInput 
        source="description" 
        multiline 
        rows={5} 
        fullWidth 
        helperText="Provide a detailed description of your event"
      />

      <Box sx={{ display: 'flex', gap: 2, width: '100%' }}>
        <DateInput 
          source="startDate" 
          validate={[required(), validateEventDates]} 
          sx={{ flex: 1 }} 
          helperText="Event start"
        />
        <DateInput 
          source="endDate" 
          validate={[required(), validateEventDates]} 
          sx={{ flex: 1 }} 
          helperText="Event end"
        />
      </Box>

      <TextInput 
        source="location" 
        validate={required()} 
        fullWidth 
        helperText="Where will this event take place?"
      />

      {/* Custom rendering of event status with chips */}
      {record && record.status && (
        <Box sx={{ mb: 2 }}>
          <Typography variant="caption" color="text.secondary">
            Event Status
          </Typography>
          <Box sx={{ mt: 1 }}>
            <Chip 
              label={record.status === 'published' ? 'Published' : 'Draft'} 
              color={record.status === 'published' ? 'success' : 'default'}
              size="small"
            />
          </Box>
        </Box>
      )}

      {/* Extra fields with custom styling */}
      <Box sx={{ 
        mt: 3, 
        p: 2, 
        border: `1px dashed ${theme.palette.divider}`,
        borderRadius: 1
      }}>
        <Typography variant="subtitle2" sx={{ mb: 2 }}>
          📊 Additional Event Information
        </Typography>
        
        <TextInput 
          source="sponsorName" 
          label="Primary Sponsor" 
          fullWidth 
          helperText="Name of the main sponsor for this event"
        />
        
        <TextInput 
          source="eventBudget" 
          label="Event Budget" 
          fullWidth 
          helperText="Estimated budget for this event (e.g., $10,000)"
        />
      </Box>

      {/* Custom validation message */}
      <Box sx={{ mt: 2, p: 1, backgroundColor: theme.palette.info.light, borderRadius: 1 }}>
        <Typography variant="caption" color="text.secondary">
          💡 Tip: All fields marked with * are required. Make sure dates are valid and end date is after start date.
        </Typography>
      </Box>
    </SimpleForm>
  );
};

// src/App.tsx
import { Admin } from 'react-admin';
import { EventsPlugin } from '@quicklaunch/events-plugin';
import { CustomEventForm } from './customizations/CustomEventForm';

export const App = () => (
  <Admin dataProvider={dataProvider} theme={theme}>
    {EventsPlugin({
      overrides: {
        EventForm: CustomEventForm
      },
      extraFields: {
        events: ['sponsorName', 'eventBudget']
      }
    })}
  </Admin>
);
```

**Key Benefits:**
- Full control over form layout and styling
- Custom validation beyond default rules
- Theme inheritance via `useTheme()` hook
- Seamless integration with extra fields
- Enhanced user experience with helper text and visual feedback

### Extra Fields with Custom Field Patterns

This example demonstrates how to add custom fields to plugin resources and use them throughout your application:

```typescript
// src/App.tsx
import { Admin } from 'react-admin';
import { EventsPlugin } from '@quicklaunch/events-plugin';
import { CustomEventForm } from './customizations/CustomEventForm';

export const App = () => (
  <Admin dataProvider={dataProvider} theme={theme}>
    {EventsPlugin({
      // Define extra fields for each resource
      extraFields: {
        // Add sponsor and budget tracking to events
        events: ['sponsorName', 'eventBudget'],
        
        // Add badge number for speaker check-in
        speakers: ['badgeNumber'],
        
        // Add parking information for venues
        venues: ['parkingSpaces']
      },
      
      // Override form to render the extra fields
      overrides: {
        EventForm: CustomEventForm  // Custom form that displays sponsorName and eventBudget
      
    })}
  </Admin>
);
```

**How Extra Fields Work:**

1. **Declaration**: List field names in the `extraFields` config
2. **Storage**: Plugin automatically persists these fields via your data provider
3. **Access**: Fields are available in all plugin components via `useRecordContext()`
4. **Display**: Add inputs in custom override components to render and edit them

**Custom Form Integration:**

```typescript
// Inside your CustomEventForm component
import { TextInput, useRecordContext } from 'react-admin';

export const CustomEventForm = () => {
  const record = useRecordContext();
  
  return (
    <SimpleForm>
      {/* Standard plugin fields */}
      <TextInput source="name" />
      <TextInput source="description" />
      
      {/* Extra fields - automatically saved by the plugin */}
      <TextInput 
        source="sponsorName" 
        label="Event Sponsor"
        helperText="Primary sponsor organization"
      />
      
      <TextInput 
        source="eventBudget" 
        label="Budget"
        helperText="Total event budget"
      />
    </SimpleForm>
  );
};
```

**Advanced Pattern - Conditional Fields:**

```typescript
// Show different extra fields based on event type
export const CustomEventForm = () => {
  const record = useRecordContext();
  
  return (
    <SimpleForm>
      <SelectInput 
        source="eventType" 
        choices={[
          { id: 'conference', name: 'Conference' },
          { id: 'workshop', name: 'Workshop' },
        ]}
      />
      
      {/* Conditional extra fields based on event type */}
      {record?.eventType === 'conference' && (
        <>
          <TextInput source="sponsorName" label="Main Sponsor" />
          <NumberInput source="attendeeCapacity" label="Max Attendees" />
        </>
      )}
      
      {record?.eventType === 'workshop' && (
        <>
          <TextInput source="instructorName" label="Lead Instructor" />
          <NumberInput source="materialsCount" label="Material Kits" />
        </>
      )}
    </SimpleForm>
  );
};
```

### Role-Based Permissions with Access Control

This example shows how to implement fine-grained, role-based access control across plugin resources:

```typescript
// src/App.tsx
import { Admin } from 'react-admin';
import { EventsPlugin } from '@quicklaunch/events-plugin';

export const App = () => (
  <Admin dataProvider={dataProvider} theme={theme}>
    {EventsPlugin({
      permissions: {
        // Fine-grained event permissions
        events: {
          list: true,  // Everyone can view events list
          create: (user) => user?.role === 'admin',  // Only admins create events
          edit: (user) => {
            // Admins and editors can edit events
            return user?.role === 'admin' || user?.role === 'editor';
          },
          delete: (user) => user?.role === 'admin',  // Only admins can delete
        },
        
        // Speaker permissions - more restrictive
        speakers: {
          list: true,  // Everyone can view speakers
          create: (user) => user?.role === 'admin',  // Only admins add speakers
          edit: (user) => user?.role === 'admin',    // Only admins edit speakers
          delete: false,  // No one can delete speakers (archive instead)
        },
        
        // Venue permissions - fully open
        venues: true,  // Boolean shorthand: all actions allowed for all users
      }
    })}
  </Admin>
);
```

**Permission Patterns:**

1. **Boolean**: `true` allows all actions, `false` denies all actions
   ```typescript
   speakers: true  // All CRUD operations allowed
   ```

2. **Object with Functions**: Fine-grained control per action
   ```typescript
   events: {
     list: (user) => true,  // Everyone can list
     create: (user) => user?.role === 'admin',  // Conditional
     edit: (user) => user?.id === record?.createdBy,  // Owner-based
     delete: false  // No one can delete
   }
   ```

3. **Mixed Patterns**: Combine static and dynamic permissions
   ```typescript
   venues: {
     list: true,  // Always allow
     create: (user) => user?.permissions?.includes('venue.create'),
     edit: (user) => user?.role === 'admin',
     delete: false  // Never allow
   }
   ```

**Advanced Example - Multi-Tenancy:**

```typescript
// Permissions for multi-tenant application
{EventsPlugin({
  permissions: {
    events: {
      // Users see only their organization's events
      list: (user) => user?.organizationId ? true : false,
      
      // Only org admins can create events
      create: (user) => {
        return user?.role === 'admin' && user?.organizationId;
      },
      
      // Users can edit events they created OR if they're org admin
      edit: (user, record) => {
        return (
          user?.id === record?.createdBy ||
          (user?.role === 'admin' && user?.organizationId === record?.organizationId)
        );
      },
      
      // Only super admins can delete
      delete: (user) => user?.role === 'superadmin',
    }
  }
})}
```

**Permission Function Signature:**

```typescript
type PermissionCheck = boolean | ((user: UserIdentity, record?: any) => boolean);

interface ResourcePermissions {
  list?: PermissionCheck;
  create?: PermissionCheck;
  edit?: PermissionCheck;
  delete?: PermissionCheck;
}
```

**Notes:**
- Permissions are evaluated on the client side for UI visibility
- You must also enforce permissions on your backend/API
- The `user` object comes from React Admin's `useAuthProvider()`
- Return `false` or `undefined` to hide buttons/actions
- Combine with `extraFields` to store ownership metadata

## Data Model

### Event Resource

```typescript
interface Event {
  id: string | number;
  name: string;
  description?: string;
  startDate: string; // ISO 8601
  endDate: string;   // ISO 8601
  status: 'draft' | 'published' | 'cancelled';
  venueId?: string | number;
  speakerIds?: (string | number)[];
  isRecurring?: boolean;
  recurrenceRule?: string; // RRule format
  // ... plus any extraFields
}
```

### Speaker Resource

```typescript
interface Speaker {
  id: string | number;
  name: string;
  email?: string;
  bio?: string;
  avatarUrl?: string;
  // ... plus any extraFields
}
```

### Venue Resource

```typescript
interface Venue {
  id: string | number;
  name: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  capacity?: number;
  // ... plus any extraFields
}
```

### Session Resource

```typescript
interface Session {
  id: string | number;
  eventId: string | number;
  title: string;
  description?: string;
  startTime: string; // ISO 8601
  endTime: string;   // ISO 8601
  speakerId?: string | number;
  venueId?: string | number;
  // ... plus any extraFields
}
```

## Data Provider Setup

The plugin is **data provider agnostic** and works with any React Admin data provider. You only need to ensure your data provider supports the four resources: `events`, `speakers`, `venues`, and `sessions`.

### Supported Data Providers

#### JSON Server (Recommended for Development)

```typescript
// src/dataProvider.ts
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('http://localhost:3001');
export default dataProvider;
```

**Start JSON Server:**
```bash
npm run server  # Serves db.json on port 3001
```

#### REST API (Production)

```typescript
// src/dataProvider.ts
import { fetchUtils } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

const httpClient = fetchUtils.fetchJson;
const dataProvider = simpleRestProvider('https://api.example.com', httpClient);
export default dataProvider;
```

#### GraphQL

```typescript
// src/dataProvider.ts
import buildGraphQLProvider from 'ra-data-graphql-simple';

const dataProvider = await buildGraphQLProvider({
  clientOptions: { uri: 'https://api.example.com/graphql' }
});
export default dataProvider;
```

**Note:** The plugin expects standard CRUD operations (`getList`, `getOne`, `create`, `update`, `delete`) for each resource. See [React Admin Data Provider documentation](https://marmelab.com/react-admin/DataProviders.html) for more details.

## Removing the Plugin

The plugin is designed to be completely removable without breaking your base application.

### Removal Steps

1. **Remove from App.tsx**:
   ```typescript
   // Before:
   import { EventsPlugin } from '@quicklaunch/events-plugin';
   
   export const App = () => (
     <Admin dataProvider={dataProvider}>
       {EventsPlugin()}  // ← Remove this line
     </Admin>
   );
   
   // After:
   export const App = () => (
     <Admin dataProvider={dataProvider}>
       {/* Other resources remain */}
     </Admin>
   );
   ```

2. **Uninstall the package**:
   ```bash
   npm uninstall @quicklaunch/events-plugin
   ```

3. **Remove any custom overrides** (if you created them):
   ```bash
   # Remove customization files like:
   rm -rf src/customizations/CustomEventForm.tsx
   rm -rf src/customizations/CustomEventList.tsx
   ```

4. **Clean up imports**:
   Search for any remaining imports from `@quicklaunch/events-plugin` and remove them.

5. **Verify**:
   ```bash
   npm run dev
   ```
   
   Your base app should work normally. Events-related menu items will disappear.

**Data Preservation:** Removing the plugin doesn't delete data from your backend. Event/speaker/venue data remains in your database.

## Development

### Working on the Plugin

If you're **developing the plugin itself** (not just using it), use these commands:

#### Build the Plugin

Compile TypeScript and bundle the plugin for production:

```bash
cd external-package/@quicklaunch/events-plugin
npm run build
```

This creates `dist/index.js` (ESM) and `dist/index.cjs` (CommonJS) bundles.

#### Watch Mode (Hot Reload)

Automatically rebuild on file changes during development:

```bash
cd external-package/@quicklaunch/events-plugin
npm run dev
```

Keep this running in a separate terminal while working on plugin code. Changes will reflect immediately in your consuming app.

#### Type Checking

Validate TypeScript without building:

```bash
cd external-package/@quicklaunch/events-plugin
npm run type-check
```

Useful for catching type errors before committing changes.

### Workspace Development Flow

Typical workflow when modifying the plugin:

```bash
# Terminal 1: Watch plugin for changes
cd external-package/@quicklaunch/events-plugin
npm run dev

# Terminal 2: Run JSON Server
cd ../../  # Back to root
npm run server

# Terminal 3: Run the React app
npm run dev
```

Now you can edit plugin files and see changes instantly in your app.

## Troubleshooting

### Plugin resources don't appear

**Symptom**: Events/Speakers/Venues menu items are missing

**Solution**: Verify plugin is registered inside `<Admin>`:
```typescript
<Admin dataProvider={dataProvider}>
  {EventsPlugin()} {/* Must be child of Admin */}
</Admin>
```

### TypeScript errors on plugin props

**Symptom**: Property errors on `overrides`, `extraFields`, or `permissions`

**Solution**: Ensure TypeScript can find type definitions:
```bash
npm list @quicklaunch/events-plugin
rm -rf node_modules/.cache
npx tsc --noEmit
```

### Theme not applying to plugin components

**Symptom**: Plugin uses default MUI theme instead of custom theme

**Solution**: Ensure theme is passed to `<Admin>`:
```typescript
<Admin theme={myCustomTheme} dataProvider={dataProvider}>
  {EventsPlugin()}
</Admin>
```

### Peer dependency warnings

**Symptom**: npm WARN peer dependency warnings

**Solution**: Ensure compatible versions:
```json
{
  "dependencies": {
    "react": "^18.0.0",
    "react-admin": "^4.16.0",
    "@mui/material": "^5.14.0"
  }
}
```

### Hot reload not working

**Symptom**: Changes require full page refresh

**Solution**: If using workspace setup, run build in watch mode:
```bash
cd external-package/@quicklaunch/events-plugin
npm run dev
```

## Support

Having trouble? Here's where to get help:

- **📖 Documentation**: Check the [API Reference](./API.md) for detailed configuration options
- **🔧 Troubleshooting**: See the Troubleshooting section above for common issues
- **🐛 Bug Reports**: Report issues at your organization's internal repository
- **💬 Questions**: Ask in #quicklaunch-plugins Slack channel
- **📚 Examples**: See the Advanced Examples section above for real-world patterns

## Next Steps

After installing the plugin:

1. **Customize the Theme** - See [Theme Integration](#theme-integration) to match your brand
2. **Add Custom Fields** - See [Extra Fields](#extra-fields-with-custom-field-patterns) to extend resources
3. **Configure Permissions** - See [Role-Based Permissions](#role-based-permissions-with-access-control) for access control
4. **Override Components** - See [Custom Component Override](#custom-component-override) to replace default UI
5. **Read the API Docs** - Review [API.md](./API.md) for complete configuration reference

## License

UNLICENSED - Internal use within Quicklaunch organization only.

## Version

Current version: **1.0.0** (Initial Release)

See [CHANGELOG.md](./CHANGELOG.md) for version history.
