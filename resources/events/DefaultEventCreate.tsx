import { Create } from 'react-admin';
import { DefaultEventForm } from './DefaultEventForm';
import { ComponentType } from 'react';

/**
 * DefaultEventCreate component for the Events Plugin
 * Provides the default create view for events
 * Can be overridden by clients via the overrides.EventCreate prop
 */

interface DefaultEventCreateProps {
  FormComponent?: ComponentType<any>;
  extraFields?: string[];
}

export const DefaultEventCreate = ({ FormComponent = DefaultEventForm, extraFields = [] }: DefaultEventCreateProps = {}) => {
  return (
    <Create>
      <FormComponent extraFields={extraFields} />
    </Create>
  );
};
