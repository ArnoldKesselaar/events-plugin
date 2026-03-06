import { List, Datagrid, TextField, NumberField } from 'react-admin';

/**
 * DefaultVenueList component for the Events Plugin
 * Provides the default list view for venues
 * Can be overridden by clients via the overrides.VenueList prop
 */

export const DefaultVenueList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <NumberField source="capacity" />
      <TextField source="location" />
    </Datagrid>
  </List>
);
