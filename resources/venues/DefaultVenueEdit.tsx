import { Edit } from 'react-admin';
import { DefaultVenueForm } from './DefaultVenueForm';
import { ComponentType } from 'react';

/**
 * DefaultVenueEdit component for the Events Plugin
 * Provides the default edit view for venues
 * Can be overridden by clients via the overrides.VenueEdit prop
 */

interface DefaultVenueEditProps {
  FormComponent?: ComponentType<any>;
  extraFields?: string[];
}

export const DefaultVenueEdit = ({ FormComponent = DefaultVenueForm, extraFields = [] }: DefaultVenueEditProps = {}) => {
  return (
    <Edit>
      <FormComponent extraFields={extraFields} />
    </Edit>
  );
};
