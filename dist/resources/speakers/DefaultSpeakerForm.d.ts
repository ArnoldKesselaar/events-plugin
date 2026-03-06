/**
 * DefaultSpeakerForm component for the Events Plugin
 * Provides the default form layout for creating/editing speakers
 * Can be overridden by clients via the overrides.SpeakerForm prop
 * Automatically renders extra fields configured via extraFields prop
 */
interface DefaultSpeakerFormProps {
    children?: React.ReactNode;
    extraFields?: string[];
}
export declare const DefaultSpeakerForm: ({ children, extraFields }: DefaultSpeakerFormProps) => import("react/jsx-runtime").JSX.Element;
export {};
