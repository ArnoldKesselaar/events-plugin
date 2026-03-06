import { ComponentType } from 'react';

/**
 * DefaultSpeakerCreate component for the Events Plugin
 * Provides the default create view for speakers
 * Can be overridden by clients via the overrides.SpeakerCreate prop
 */
interface DefaultSpeakerCreateProps {
    FormComponent?: ComponentType<any>;
    extraFields?: string[];
}
export declare const DefaultSpeakerCreate: ({ FormComponent, extraFields }?: DefaultSpeakerCreateProps) => import("react/jsx-runtime").JSX.Element;
export {};
