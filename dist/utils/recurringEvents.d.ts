/**
 * Utilities for handling recurring events in the Events Plugin
 */
export interface RecurringEvent {
    id: string;
    startTime: string;
    endTime: string;
    recurrence?: {
        rule: string;
        interval: number;
        frequency: 'daily' | 'weekly' | 'monthly';
    };
}
export interface ExpandedEvent {
    id: string;
    originalId: string;
    startTime: string;
    endTime: string;
    isRecurring: boolean;
    occurrenceIndex?: number;
}
/**
 * Expands recurring events into individual occurrences
 */
export declare const expandRecurringEvents: (events: RecurringEvent[], startDate: Date, endDate: Date) => ExpandedEvent[];
/**
 * Generates RRule string from simple parameters
 */
export declare const generateRRule: (frequency: "daily" | "weekly" | "monthly", interval?: number, count?: number, until?: Date) => string;
