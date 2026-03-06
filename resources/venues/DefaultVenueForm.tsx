import { SimpleForm, TextInput, NumberInput, ArrayInput, SimpleFormIterator, required } from 'react-admin';
import { useTheme } from '@mui/material';

/**
 * DefaultVenueForm component for the Events Plugin
 * Provides the default form layout for creating/editing venues
 * Can be overridden by clients via the overrides.VenueForm prop
 * Automatically renders extra fields configured via extraFields prop
 */

interface DefaultVenueFormProps {
  children?: React.ReactNode;
  extraFields?: string[];
}

export const DefaultVenueForm = ({ children, extraFields = [] }: DefaultVenueFormProps) => {
  const theme = useTheme(); // Ensures component adopts base project theme
  
  return (
    <SimpleForm sx={{ '& .MuiTextField-root': { color: theme.palette.text.primary } }}>
      <TextInput source="name" validate={required()} fullWidth />
      <NumberInput source="capacity" validate={required()} fullWidth />
      <TextInput source="location" validate={required()} fullWidth />
      <ArrayInput source="amenities">
        <SimpleFormIterator inline>
          <TextInput source="" label="Amenity" helperText={false} />
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
