import { List, Datagrid, TextField, DateField, ReferenceField, SelectField, ChipField } from 'react-admin';

/**
 * DefaultSessionList component for the Events Plugin
 * Displays sessions in a list with event and speaker references
 */

export const DefaultSessionList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="title" />
        <ReferenceField source="eventId" reference="events">
          <TextField source="name" />
        </ReferenceField>
        <SelectField 
          source="sessionType" 
          choices={[
            { id: 'keynote', name: 'Keynote' },
            { id: 'workshop', name: 'Workshop' },
            { id: 'panel', name: 'Panel' },
            { id: 'talk', name: 'Talk' },
          ]}
        />
        <TextField source="duration" label="Duration (min)" />
        <ChipField source="status" />
        <DateField source="createdAt" showTime />
      </Datagrid>
    </List>
  );
};
