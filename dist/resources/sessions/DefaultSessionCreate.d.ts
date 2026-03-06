import { ComponentType } from 'react';

/**
 * DefaultSessionCreate component for the Events Plugin
 * Provides the default create view for sessions
 */
interface DefaultSessionCreateProps {
    FormComponent?: ComponentType<any>;
    extraFields?: string[];
}
export declare const DefaultSessionCreate: ({ FormComponent, extraFields }?: DefaultSessionCreateProps) => import("react/jsx-runtime").JSX.Element;
export {};
