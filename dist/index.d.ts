import { ReactElement } from 'react';
import { EventsPluginConfig } from './types/config';

/**
 * EventsPlugin component (Primary API)
 *
 * Accepts configuration props and returns Resource elements for React Admin.
 * Can be called as a function `EventsPlugin()` or rendered as JSX `<EventsPlugin />`.
 *
 * Note: React Admin doesn't execute function components as children, so this must
 * be called as a function to get JSX elements: `{EventsPlugin()}` or `{EventsPlugin({ overrides: ... })}`
 *
 * @example
 * ```tsx
 * import { EventsPlugin } from '@quicklaunch/events-plugin';
 *
 * <Admin dataProvider={dataProvider}>
 *   {EventsPlugin({
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
