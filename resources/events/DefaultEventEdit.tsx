import { Edit } from 'react-admin';
import { DefaultEventForm } from './DefaultEventForm';
import { ComponentType } from 'react';

/**
 * DefaultEventEdit component for the Events Plugin
 * Provides the default edit view for events
 * Can be overridden by clients via the overrides.EventEdit prop
 */

interface DefaultEventEditProps {
  FormComponent?: ComponentType<any>;
  extraFields?: string[];
}

export const DefaultEventEdit = ({ FormComponent = DefaultEventForm, extraFields = [] }: DefaultEventEditProps = {}) => {
  return (
    <Edit>
      <FormComponent extraFields={extraFields} />
    </Edit>
  );
};
