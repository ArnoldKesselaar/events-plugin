/**
 * DefaultEventForm component for the Events Plugin
 * Provides the default form layout for creating/editing events
 * Can be overridden by clients via the overrides.EventForm prop
 * Automatically renders extra fields configured via extraFields prop
 */
interface DefaultEventFormProps {
    children?: React.ReactNode;
    extraFields?: string[];
}
export declare const DefaultEventForm: ({ children, extraFields }: DefaultEventFormProps) => import("react/jsx-runtime").JSX.Element;
export {};
