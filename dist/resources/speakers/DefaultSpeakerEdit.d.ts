import { ComponentType } from 'react';

/**
 * DefaultSpeakerEdit component for the Events Plugin
 * Provides the default edit view for speakers
 * Can be overridden by clients via the overrides.SpeakerEdit prop
 */
interface DefaultSpeakerEditProps {
    FormComponent?: ComponentType<any>;
    extraFields?: string[];
}
export declare const DefaultSpeakerEdit: ({ FormComponent, extraFields }?: DefaultSpeakerEditProps) => import("react/jsx-runtime").JSX.Element;
export {};
