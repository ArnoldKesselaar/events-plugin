import { ReactElement } from 'react';
import { EventsPluginConfig } from './types/config';

/**
 * EventsPlugin component (Primary API)
 *
 * Accepts configuration props and returns an array of Resource elements for React Admin.
 * Must be called as a function and spread into Admin children.
 *
 * @example
 * ```tsx
 * import { EventsPlugin } from '@quicklaunch/events-plugin';
 *
 * <Admin dataProvider={dataProvider}>
 *   {...EventsPlugin({
 *     overrides: { EventList: CustomEventList },
 *     extraFields: { events: ['customField1'] }
 *   })}
 * </Admin>
 * ```
 */
export declare const EventsPlugin: (props?: EventsPluginConfig) => ReactElement[];
export type { EventsPluginConfig } from './types/config';
export type { Event, Speaker, Venue, Session } from './types/resources';
export { validateEventDates } from './utils/eventValidators';
