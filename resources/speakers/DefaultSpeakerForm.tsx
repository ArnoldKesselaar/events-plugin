import { SimpleForm, TextInput, required } from 'react-admin';
import { useTheme } from '@mui/material';

/**
 * DefaultSpeakerForm component for the Events Plugin
 * Provides the default form layout for creating/editing speakers
 * Can be overridden by clients via the overrides.SpeakerForm prop
 * Automatically renders extra fields configured via extraFields prop
 */

interface DefaultSpeakerFormProps {
  children?: React.ReactNode;
  extraFields?: string[];
}

export const DefaultSpeakerForm = ({ children, extraFields = [] }: DefaultSpeakerFormProps) => {
  const theme = useTheme(); // Ensures component adopts base project theme
  
  return (
    <SimpleForm sx={{ '& .MuiTextField-root': { color: theme.palette.text.primary } }}>
      <TextInput source="name" validate={required()} fullWidth />
      <TextInput source="bio" multiline rows={4} fullWidth />
      <TextInput source="company" fullWidth />
      <TextInput source="title" fullWidth />
      <TextInput source="photo" label="Photo URL" fullWidth />
      
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
