// Component prop types for plugin components

import { Event, Speaker, Venue, Session } from './resources';

export interface EventFormProps {
  record?: Event;
  [key: string]: any;
}

export interface SpeakerFormProps {
  record?: Speaker;
  [key: string]: any;
}

export interface VenueFormProps {
  record?: Venue;
  [key: string]: any;
}

export interface SessionFormProps {
  record?: Session;
  [key: string]: any;
}

export interface ScheduleBuilderProps {
  eventId: string;
  [key: string]: any;
}
