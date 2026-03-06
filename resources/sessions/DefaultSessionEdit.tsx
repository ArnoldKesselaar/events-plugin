import { Edit } from 'react-admin';
import { DefaultSessionForm } from './DefaultSessionForm';
import { ComponentType } from 'react';

/**
 * DefaultSessionEdit component for the Events Plugin
 * Provides the default edit view for sessions
 */

interface DefaultSessionEditProps {
  FormComponent?: ComponentType<any>;
  extraFields?: string[];
}

export const DefaultSessionEdit = ({ FormComponent = DefaultSessionForm, extraFields = [] }: DefaultSessionEditProps = {}) => {
  return (
    <Edit>
      <FormComponent extraFields={extraFields} />
    </Edit>
  );
};
