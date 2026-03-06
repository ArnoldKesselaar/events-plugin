import { InputProps } from 'react-admin';

/**
 * RecurrenceInput component for the Events Plugin
 * Allows users to configure recurring event patterns
 */
interface RecurrenceInputProps extends Omit<InputProps, 'source'> {
    source: string;
}
export declare const RecurrenceInput: (props: RecurrenceInputProps) => import("react/jsx-runtime").JSX.Element;
export {};
