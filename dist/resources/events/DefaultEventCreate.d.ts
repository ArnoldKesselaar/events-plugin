import { ComponentType } from 'react';

/**
 * DefaultEventCreate component for the Events Plugin
 * Provides the default create view for events
 * Can be overridden by clients via the overrides.EventCreate prop
 */
interface DefaultEventCreateProps {
    FormComponent?: ComponentType<any>;
    extraFields?: string[];
}
export declare const DefaultEventCreate: ({ FormComponent, extraFields }?: DefaultEventCreateProps) => import("react/jsx-runtime").JSX.Element;
export {};
