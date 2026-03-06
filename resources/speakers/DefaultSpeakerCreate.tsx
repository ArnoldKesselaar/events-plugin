import { Create } from 'react-admin';
import { DefaultSpeakerForm } from './DefaultSpeakerForm';
import { ComponentType } from 'react';

/**
 * DefaultSpeakerCreate component for the Events Plugin
 * Provides the default create view for speakers
 * Can be overridden by clients via the overrides.SpeakerCreate prop
 */

interface DefaultSpeakerCreateProps {
  FormComponent?: ComponentType<any>;
  extraFields?: string[];
}

export const DefaultSpeakerCreate = ({ FormComponent = DefaultSpeakerForm, extraFields = [] }: DefaultSpeakerCreateProps = {}) => {
  return (
    <Create>
      <FormComponent extraFields={extraFields} />
    </Create>
  );
};
