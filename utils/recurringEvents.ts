import { RRule } from 'rrule';
import { parseISO } from 'date-fns';

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
export const expandRecurringEvents = (
  events: RecurringEvent[],
  startDate: Date,
  endDate: Date
): ExpandedEvent[] => {
  const expanded: ExpandedEvent[] = [];

  events.forEach((event) => {
    if (!event.recurrence) {
      // Non-recurring event
      expanded.push({
        id: event.id,
        originalId: event.id,
        startTime: event.startTime,
        endTime: event.endTime,
        isRecurring: false,
      });
    } else {
      // Recurring event - expand occurrences
      try {
        const rule = RRule.fromString(event.recurrence.rule);
        const occurrences = rule.between(startDate, endDate, true);

        occurrences.forEach((occurrence, index) => {
          const eventStart = parseISO(event.startTime);
          const eventEnd = parseISO(event.endTime);
          const duration = eventEnd.getTime() - eventStart.getTime();

          const occurrenceStart = new Date(occurrence);
          occurrenceStart.setHours(eventStart.getHours());
          occurrenceStart.setMinutes(eventStart.getMinutes());

          const occurrenceEnd = new Date(occurrenceStart.getTime() + duration);

          expanded.push({
            id: `${event.id}-${index}`,
            originalId: event.id,
            startTime: occurrenceStart.toISOString(),
            endTime: occurrenceEnd.toISOString(),
            isRecurring: true,
            occurrenceIndex: index,
          });
        });
      } catch (error) {
        console.error('Error parsing recurrence rule:', error);
        // Fall back to single occurrence
        expanded.push({
          id: event.id,
          originalId: event.id,
          startTime: event.startTime,
          endTime: event.endTime,
          isRecurring: false,
        });
      }
    }
  });

  return expanded;
};

/**
 * Generates RRule string from simple parameters
 */
export const generateRRule = (
  frequency: 'daily' | 'weekly' | 'monthly',
  interval: number = 1,
  count?: number,
  until?: Date
): string => {
  const options: any = {
    freq: frequency === 'daily' ? RRule.DAILY : frequency === 'weekly' ? RRule.WEEKLY : RRule.MONTHLY,
    interval,
  };

  if (count) {
    options.count = count;
  } else if (until) {
    options.until = until;
  }

  const rule = new RRule(options);
  return rule.toString();
};
