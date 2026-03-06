import { ComponentType } from 'react';

/**
 * DefaultSessionEdit component for the Events Plugin
 * Provides the default edit view for sessions
 */
interface DefaultSessionEditProps {
    FormComponent?: ComponentType<any>;
    extraFields?: string[];
}
export declare const DefaultSessionEdit: ({ FormComponent, extraFields }?: DefaultSessionEditProps) => import("react/jsx-runtime").JSX.Element;
export {};
