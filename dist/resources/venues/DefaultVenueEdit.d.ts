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
export declare const DefaultVenueEdit: ({ FormComponent, extraFields }?: DefaultVenueEditProps) => import("react/jsx-runtime").JSX.Element;
export {};
