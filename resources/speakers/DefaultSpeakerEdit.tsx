import { Edit } from 'react-admin';
import { DefaultSpeakerForm } from './DefaultSpeakerForm';
import { ComponentType } from 'react';

/**
 * DefaultSpeakerEdit component for the Events Plugin
 * Provides the default edit view for speakers
 * Can be overridden by clients via the overrides.SpeakerEdit prop
 */

interface DefaultSpeakerEditProps {
  FormComponent?: ComponentType<any>;
  extraFields?: string[];
}

export const DefaultSpeakerEdit = ({ FormComponent = DefaultSpeakerForm, extraFields = [] }: DefaultSpeakerEditProps = {}) => {
  return (
    <Edit>
      <FormComponent extraFields={extraFields} />
    </Edit>
  );
};
