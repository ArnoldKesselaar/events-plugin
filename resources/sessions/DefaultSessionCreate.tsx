import { Create } from 'react-admin';
import { DefaultSessionForm } from './DefaultSessionForm';
import { ComponentType } from 'react';

/**
 * DefaultSessionCreate component for the Events Plugin
 * Provides the default create view for sessions
 */

interface DefaultSessionCreateProps {
  FormComponent?: ComponentType<any>;
  extraFields?: string[];
}

export const DefaultSessionCreate = ({ FormComponent = DefaultSessionForm, extraFields = [] }: DefaultSessionCreateProps = {}) => {
  return (
    <Create>
      <FormComponent extraFields={extraFields} />
    </Create>
  );
};
