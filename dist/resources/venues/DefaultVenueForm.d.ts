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
export declare const DefaultVenueForm: ({ children, extraFields }: DefaultVenueFormProps) => import("react/jsx-runtime").JSX.Element;
export {};
