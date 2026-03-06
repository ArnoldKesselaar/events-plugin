import { ComponentType } from 'react';

/**
 * DefaultEventEdit component for the Events Plugin
 * Provides the default edit view for events
 * Can be overridden by clients via the overrides.EventEdit prop
 */
interface DefaultEventEditProps {
    FormComponent?: ComponentType<any>;
    extraFields?: string[];
}
export declare const DefaultEventEdit: ({ FormComponent, extraFields }?: DefaultEventEditProps) => import("react/jsx-runtime").JSX.Element;
export {};
