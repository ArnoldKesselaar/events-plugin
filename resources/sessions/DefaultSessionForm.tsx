import { SimpleForm, TextInput, NumberInput, SelectInput, ReferenceInput, required, ArrayInput, SimpleFormIterator } from 'react-admin';
import { useTheme } from '@mui/material';

/**
 * DefaultSessionForm component for the Events Plugin
 * Provides the default form layout for creating/editing sessions
 */

interface DefaultSessionFormProps {
  children?: React.ReactNode;
  extraFields?: string[];
}

export const DefaultSessionForm = ({ children, extraFields = [] }: DefaultSessionFormProps) => {
  const theme = useTheme(); // Ensures component adopts base project theme
  
  return (
    <SimpleForm sx={{ '& .MuiTextField-root': { color: theme.palette.text.primary } }}>
      <TextInput source="title" validate={required()} fullWidth />
      
      <TextInput source="description" multiline rows={4} fullWidth />
      
      <ReferenceInput source="eventId" reference="events" validate={required()}>
        <SelectInput optionText="name" fullWidth />
      </ReferenceInput>
      
      <SelectInput
        source="sessionType"
        choices={[
          { id: 'keynote', name: 'Keynote' },
          { id: 'workshop', name: 'Workshop' },
          { id: 'panel', name: 'Panel' },
          { id: 'talk', name: 'Talk' },
        ]}
        validate={required()}
        fullWidth
      />
      
      <NumberInput 
        source="duration" 
        label="Duration (minutes)" 
        validate={required()} 
        fullWidth 
      />
      
      <ReferenceInput source="venueId" reference="venues">
        <SelectInput optionText="name" fullWidth />
      </ReferenceInput>
      
      <TextInput source="trackId" label="Track ID" fullWidth />
      
      <ArrayInput source="speakerIds" label="Speakers">
        <SimpleFormIterator inline>
          <ReferenceInput source="" reference="speakers">
            <SelectInput optionText="name" />
          </ReferenceInput>
        </SimpleFormIterator>
      </ArrayInput>
      
      <ArrayInput source="tags">
        <SimpleFormIterator inline>
          <TextInput source="" label="Tag" helperText={false} />
        </SimpleFormIterator>
      </ArrayInput>
      
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
