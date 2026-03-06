import { SimpleForm, TextInput, SelectInput, ArrayInput, SimpleFormIterator, required, DateInput } from 'react-admin';
import { Box, useTheme } from '@mui/material';
import { validateEventDates } from '../../utils/eventValidators';

/**
 * DefaultEventForm component for the Events Plugin
 * Provides the default form layout for creating/editing events
 * Can be overridden by clients via the overrides.EventForm prop
 * Automatically renders extra fields configured via extraFields prop
 */

interface DefaultEventFormProps {
  children?: React.ReactNode;
  extraFields?: string[];
}

export const DefaultEventForm = ({ children, extraFields = [] }: DefaultEventFormProps) => {
  const theme = useTheme(); // Ensures component adopts base project theme
  
  return (
    <SimpleForm>
      <TextInput source="name" validate={required()} fullWidth />

      <TextInput source="description" multiline rows={4} fullWidth />

      <Box sx={{ display: 'flex', gap: 2, width: '100%' }}>
        <DateInput 
          source="startDate" 
          validate={[required(), validateEventDates]} 
          sx={{ flex: 1, '& .MuiInputBase-root': { color: theme.palette.text.primary } }} 
        />
        <DateInput 
          source="endDate" 
          validate={[required(), validateEventDates]} 
          sx={{ flex: 1 }} 
        />
      </Box>

      <TextInput source="location" validate={required()} fullWidth />

      <TextInput source="coverImage" label="Cover Image URL" fullWidth />

      <SelectInput
        source="status"
        choices={[
          { id: 'draft', name: 'Draft' },
          { id: 'published', name: 'Published' },
        ]}
        validate={required()}
        defaultValue="draft"
        fullWidth
      />

      <ArrayInput source="tags">
        <SimpleFormIterator inline>
          <TextInput source="" label="Tag" helperText={false} />
        </SimpleFormIterator>
      </ArrayInput>

      {/* Automatically render extra fields */}
      {extraFields.map((fieldName) => (
        <TextInput 
          key={fieldName} 
          source={fieldName} 
          label={fieldName.charAt(0).toUpperCase() + fieldName.slice(1).replace(/([A-Z])/g, ' $1')}
          fullWidth 
        />
      ))}

      {children}
    </SimpleForm>
  );
};
