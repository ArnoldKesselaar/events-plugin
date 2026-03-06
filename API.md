# API Reference: Events Plugin

**Version**: 1.0.0  
**Last Updated**: March 6, 2026

Complete API documentation for the `@quicklaunch/events-plugin` package.

## Table of Contents

- [Installation](#installation)
- [EventsPlugin Component](#eventsplugin-component)
- [Type Definitions](#type-definitions)
- [Exported Components](#exported-components)
- [Context Hooks](#context-hooks)
- [Utility Functions](#utility-functions)
- [Data Models](#data-models)

## Installation

```bash
npm install @quicklaunch/events-plugin
```

**Requirements**:
- React ^18.0.0
- React Admin ^4.16.0
- Material-UI ^5.14.0

## EventsPlugin Component

The main plugin registration component.

### Import

```typescript
import { EventsPlugin } from '@quicklaunch/events-plugin';
```

### Props

```typescript
interface EventsPluginProps {
  overrides?: OverridesConfig;
  permissions?: PermissionsConfig;
  extraFields?: ExtraFieldsConfig;
}
```

### Usage

```typescript
<Admin dataProvider={dataProvider}>
  <EventsPlugin
    overrides={overridesConfig}
    permissions={permissionsConfig}
    extraFields={extraFieldsConfig}
  />
</Admin>
```

### Prop: `overrides`

Replace default plugin components with custom implementations.

**Type**: `OverridesConfig`

```typescript
interface OverridesConfig {
  // Event resource components
  EventList?: ComponentType<ListProps>;
  EventEdit?: ComponentType<EditProps>;
  EventCreate?: ComponentType<CreateProps>;
  EventForm?: ComponentType<any>;
  
  // Speaker resource components
  SpeakerList?: ComponentType<ListProps>;
  SpeakerEdit?: ComponentType<EditProps>;
  SpeakerCreate?: ComponentType<CreateProps>;
  SpeakerForm?: ComponentType<any>;
  
  // Venue resource components
  VenueList?: ComponentType<ListProps>;
  VenueEdit?: ComponentType<EditProps>;
  VenueCreate?: ComponentType<CreateProps>;
  VenueForm?: ComponentType<any>;
  
  // Schedule components
  ScheduleBuilder?: ComponentType<any>;
}
```

**Example**:

```typescript
import { CustomEventForm, CustomEventList } from './customizations';

<EventsPlugin
  overrides={{
    EventForm: CustomEventForm,
    EventList: CustomEventList
  }}
/>
```

**Notes**:
- All overrides are optional
- Unspecified components use plugin defaults
- Custom components receive same props as defaults
- TypeScript provides autocomplete for valid keys

### Prop: `permissions`

Control visibility and access to resource actions.

**Type**: `PermissionsConfig`

```typescript
interface PermissionsConfig {
  events?: ResourcePermissions;
  speakers?: ResourcePermissions;
  venues?: ResourcePermissions;
  schedule?: ResourcePermissions;
}

type ResourcePermissions = boolean | {
  list?: PermissionCheck;
  create?: PermissionCheck;
  edit?: PermissionCheck;
  delete?: PermissionCheck;
  show?: PermissionCheck;
};

type PermissionCheck = 
  | boolean
  | ((user?: any, record?: any) => boolean);
```

**Example**:

```typescript
<EventsPlugin
  permissions={{
    events: {
      list: true,
      create: (user) => user?.role === 'admin',
      edit: (user, record) => {
        return user?.role === 'admin' || record?.ownerId === user?.id;
      },
      delete: (user) => user?.role === 'admin',
    },
    speakers: true, // All actions allowed
    venues: {
      create: false, // No one can create venues
      edit: (user) => user?.role === 'admin',
    }
  }}
/>
```

**Permission Check Signatures**:

```typescript
// Static permission (boolean)
list: true  // Always allowed
create: false  // Always denied

// Dynamic permission (function)
create: (user) => boolean
edit: (user, record) => boolean
delete: (user, record) => boolean
```

**Function Parameters**:
- `user`: Current user object (from React Admin auth context)
- `record`: The specific record being accessed (for edit/delete)

**Notes**:
- If permission check returns `false`, action UI is hidden
- Default is `true` (all actions allowed) if not specified
- Resource-level boolean applies to all actions
- Action-level checks override resource-level settings

### Prop: `extraFields`

Add custom fields to resources without overriding components.

**Type**: `ExtraFieldsConfig`

```typescript
interface ExtraFieldsConfig {
  events?: string[];
  speakers?: string[];
  venues?: string[];
  sessions?: string[];
}
```

**Example**:

```typescript
<EventsPlugin
  extraFields={{
    events: ['sponsorName', 'eventBudget', 'internalNotes'],
    speakers: ['linkedInUrl', 'twitterHandle', 'company'],
    venues: ['parkingInfo', 'wifiPassword', 'accessibilityNotes']
  }}
/>
```

**Behavior**:
- Fields are automatically included in data provider transforms
- Fields persist to backend via standard React Admin flow
- No form UI is generated automatically (use overrides for UI)
- Useful for metadata fields not displayed in default forms

**Common Pattern**: Combine with form overrides:

```typescript
// Add fields to data model
<EventsPlugin
  extraFields={{
    events: ['budgetCode', 'costCenter']
  }}
  overrides={{
    EventForm: (props) => (
      <>
        <DefaultEventForm {...props} />
        <TextInput source="budgetCode" label="Budget Code" />
        <TextInput source="costCenter" label="Cost Center" />
      </>
    )
  }}
/>
```

## Type Definitions

### Resource Types

#### Event

```typescript
interface Event {
  id: string | number;
  name: string;
  description?: string;
  startDate: string; // ISO 8601 datetime
  endDate: string;   // ISO 8601 datetime
  status: 'draft' | 'published' | 'cancelled';
  venueId?: string | number;
  speakerIds?: (string | number)[];
  isRecurring?: boolean;
  recurrenceRule?: string; // RRule format
  parentEventId?: string | number; // For recurring event instances
  [key: string]: any; // Supports extraFields
}
```

#### Speaker

```typescript
interface Speaker {
  id: string | number;
  name: string;
  email?: string;
  bio?: string;
  avatarUrl?: string;
  title?: string;
  company?: string;
  [key: string]: any; // Supports extraFields
}
```

#### Venue

```typescript
interface Venue {
  id: string | number;
  name: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;
  capacity?: number;
  [key: string]: any; // Supports extraFields
}
```

#### Session

```typescript
interface Session {
  id: string | number;
  eventId: string | number;
  title: string;
  description?: string;
  startTime: string; // ISO 8601 datetime
  endTime: string;   // ISO 8601 datetime
  speakerId?: string | number;
  venueId?: string | number;
  track?: string;
  [key: string]: any; // Supports extraFields
}
```

## Component Customization Pattern

The plugin uses a **full replacement** customization pattern. Default components are **not exported** from the plugin. To customize plugin components, you create your own components from scratch and pass them via the `overrides` prop.

**What IS Exported:**
- Types: `Event`, `Speaker`, `Venue`, `Session`, `EventsPluginConfig`
- Utilities: `validateEventDates`

**Customization Approach:**
```typescript
// Create your own custom component
import { List, Datagrid, TextField } from 'react-admin';

export const CustomEventList = () => (
  <List>
    <Datagrid>
      <TextField source="name" />
      {/* Your custom fields */}
    </Datagrid>
  </List>
);

// Pass it to the plugin via overrides
<EventsPlugin
  overrides={{
    EventList: CustomEventList
  }}
/>
```

### Default Component Reference

The following describes the default plugin components for reference. Use this as a guide when creating your own custom components.

#### DefaultEventList

List view for events with filtering and search.

**Props**: Standard React Admin `ListProps`

**Features**:
- Datagrid with event details
- Date range filtering
- Status filtering ('draft', 'published', 'cancelled')
- Search by name

#### DefaultEventEdit

Edit view for existing events.

**Features**:
- Form with validation
- Related resource selectors (venue, speakers)
- Recurring event configuration
- Status management

#### DefaultEventCreate

Create view for new events.

**Features**:
- Same as DefaultEventEdit
- Default values initialized

#### DefaultEventForm

Reusable form component used by Edit and Create.

**Features**:
- Name (required)
- Description
- Start date/time (required)
- End date/time (required)
- Status
- Venue selector
- Speaker multi-selector
- Recurring event configuration
- Automatic rendering of extra fields

**Override Example**:
```typescript
import { SimpleForm, TextInput, required } from 'react-admin';

export const CustomEventForm = () => (
  <SimpleForm>
    <TextInput source="name" validate={required()} />
    <TextInput source="description" multiline />
    {/* Add your custom fields */}
  </SimpleForm>
);
```

### Speaker Component Reference

#### DefaultSpeakerList

List view for speakers.

**Features**:
- Datagrid with speaker details
- Avatar display
- Email link
- Search by name

#### DefaultSpeakerEdit

Edit view for existing speakers.

#### DefaultSpeakerCreate

Create view for new speakers.

#### DefaultSpeakerForm

Reusable form component for speakers.

**Fields**:
- Neatures**:
- Name (required)
- Email
- Bio
- Avatar URL
- Title
- Company
- Automatic rendering of extra fields

### Venue Component Reference
#### DefaultVenueList

List view for venues.

**Features**:
- Datagrid with venue details
- Location information
- Capacity display
- Search by name/city

#### DefaultVenueEdit

Edit view for existing venues.

#### DefaultVenueCreate

Create view for new venues (if permissions allow).

#### DefaultVenueForm

Reusable form component for venues.

**Fields**:
- Name (required)
- Address
- City
- State
- Country
- Postal code
- Capacity
eatures**:
- Name (required)
- Address
- City
- State
- Country
- Postal code
- Capacity
- Automatic rendering of extra fields

### Schedule Component Referenceeatures**:
- Session timeline view
- Drag-and-drop session scheduling
- Speaker and venue assignment
- Conflict detection

### Shared Components

```typescript
import {
  RecurrenceInput,
} from '@quicevents/:id/schedule`

**Features**:
- Session timeline view
- Drag-and-drop session scheduling
- Speaker and venue assignment
- Conflict detection

**Override Example**:
```typescript
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
## Utility Functions

The plugin exports utility functions that can be used in your custom components:

**Usage**:

```typescript
import { useOverride } from '@quicklaunch/events-plugin/context';

const MyComponent = () => {
  const FormComponent = useOverride('EventForm', DefaultEventForm);
  return <FormComponent />;
};
```

**Note**: Primarily for internal plugin use. Client code typically doesn't need this.

### usePermissions

Check permissions for current resource.

```typescript
function usePermissions(resource: string): {
  checkPermission: (action: string, record?: any) => boolean;
  canList: boolean;
  canCreate: boolean;
  canEdit: (record?: any) => boolean;
  canDelete: (record?: any) => boolean;
}
```

**Usage**:

```typescript
import { usePermissions } from '@quicklaunch/events-plugin/context';

const MyList = () => {
  const { canCreate, checkPermission } = usePermissions('events');
  
  return (
    <List>
      <Datagrid>
        {/* ... fields ... */}
        {canCreate && <CreateButton />}
      </Datagrid>
    </List>
  );
};
```

### useExtraFields

Access extra fields configuration for a resource.

```typescript
function useExtraFields(resource: string): string[]
```

**Usage**:

```typescript
import { useExtraFields } from '@quicklaunch/events-plugin/context';

const MyForm = () => {
  const extraFields = useExtraFields('events');
  
  return (
    <SimpleForm>
      <TextInput source="name" />
      {/* Render extra fields dynamically */}
      {extraFields.map(field => (
        <TextInput key={field} source={field} label={field} />
      ))}
    </SimpleForm>
  );
};
```

## Utility Functions

### Event Validators

```typescript
import {
  validateEventDates,
  validateRecurrenceRule,
} from '@quicklaunch/events-plugin/utils';
```

#### validateEventDates

Validates that end date is after start date.

```typescript
function validateEventDates(values: {
  startDate: string;
  endDate: string;
}): Record<string, string> | undefined
```

**Returns**: Validation errors object or undefined if valid

**Example**:

```typescript
<SimpleForm validate={validateEventDates}>
  <DateTimeInput source="startDate" />
  <DateTimeInput source="endDate" />
</SimpleForm>
```

#### validateRecurrenceRule

Validates RRule format string.
 validateEventDates } from '@quicklaunch/events-plugin';
```

#### validateEventDates

Validates that end date is after start date. This is **exported** and can be used in custom components
```typescript
import {
  parseRecurrenceRule,
  generateEventInstances,
  formatRecurrenceText,
} from '@quicklaunch/events-plugin/utils';
```

#### parseRecurrenceRule

Parse RRule string into structured options.

```typescript
fuUsage in custom components**:

```typescript
import { validateEventDates } from '@quicklaunch/events-plugin';
import { SimpleForm, DateInput, required } from 'react-admin';

export const CustomEventForm = () => (
  <SimpleForm>
    <DateInput 
      source="startDate" 
      validate={[required(), validateEventDates]} 
    />
    <DateInput 
      source="endDate" 
      validate={[required(), validateEventDates]} 
    />
  </SimpleForm>
);
```

**Note**: Other utilities (recurring events, recurrence parsing, etc.) are currently internal to the plugin and not exported. If you need this functionality in custom components, you may need to implement it yourself.r backend should support CRUD operations for these resources with the data models described in [Resource Types](#resource-types).

## Examples

### Complete Integration Example

```typescript
import { Admin, Resource } from 'react-admin';
import { EventsPlugin, DefaultEventForm } from '@quicklaunch/events-plugin';
import { TextInput, BooleanInput } from 'react-admin';
import dataProvider from './dataProvider';

// Custom form that extends default
const CustomEventForm = (props) => (
  <>
    <DefaultEventForm {...props} />
    <TextInput source="budgetCode" label="Budget Code" />
    <BooleanInput source="requiresApproval" label="Requires Approval" />
  </>
);

// User object (from your auth provider)
interface User {
  id: string;
  role: 'admin' | 'editor' | 'viewer';
}

export const App = () => {
  const user: User = useAuth(); // Your auth hook
  
  return (
    <Admin dataProvider={dataProvider}>
      {/* Other resources */}
      <Resource name="dashboard" {...dashboard} />
      
      {/* Events plugin with full customization */}
      <EventsPlugin
        overrides={{
          EventForm: CustomEventForm,
        }}
        extraFields={{
          events: ['budgetCode', 'requiresApproval'],
          speakers: ['linkedInUrl'],
        }}
        permissions={{
          events: {
            list: true,
            create: (user) => user.role === 'admin',
            edit: (user) => ['admin', 'editor'].includes(user.role),
            delete: (user) => user.role === 'admin',
          },
          speakers: true,
          venues: {
            create: false,
            edit: (user) => user.role === 'admin',
          }
        }}
      />
    </Admin>
  );
};
```

## Migration Guide

For upgrading between versions, see [MIGRATION.md](./MIGRATION.md).

## Support

- **Documentation**: See `docs/` directory
- **Issues**: Report at internal repository
- **Internal Chat**: #quicklaunch-plugins

---

**Version**: 1.0.0  
**Last Updated**: March 6, 2026
