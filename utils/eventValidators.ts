import { Validator } from 'react-admin';
import { RRule } from 'rrule';

/**
 * Event-specific validators for the Events Plugin
 */

export const validateEventDates: Validator = (_value, allValues: any) => {
  if (!allValues.startDate || !allValues.endDate) return undefined;

  const start = new Date(allValues.startDate);
  const end = new Date(allValues.endDate);

  if (end < start) {
    return 'End date must be after start date';
  }

  return undefined;
};

export const validateRecurrence: Validator = (value) => {
  if (!value) return undefined;

  try {
    RRule.fromString(value);
    return undefined;
  } catch (error) {
    return 'Invalid recurrence rule format';
  }
};

export const validateSessionDuration: Validator = (value) => {
  if (!value) return undefined;

  const duration = parseInt(value, 10);

  if (isNaN(duration) || duration <= 0) {
    return 'Duration must be a positive number';
  }

  if (duration > 480) {
    return 'Duration cannot exceed 8 hours (480 minutes)';
  }

  return undefined;
};

export const validateVenueCapacity: Validator = (value) => {
  if (!value) return undefined;

  const capacity = parseInt(value, 10);

  if (isNaN(capacity) || capacity <= 0) {
    return 'Capacity must be a positive number';
  }

  return undefined;
};
