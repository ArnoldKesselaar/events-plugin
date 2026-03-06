import { List, Datagrid, TextField } from 'react-admin';

/**
 * DefaultSpeakerList component for the Events Plugin
 * Provides the default list view for speakers
 * Can be overridden by clients via the overrides.SpeakerList prop
 */

export const DefaultSpeakerList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="company" />
      <TextField source="title" />
    </Datagrid>
  </List>
);
