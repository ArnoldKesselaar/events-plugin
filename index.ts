// Main plugin entry point
// @quicklaunch/events-plugin - Events management plugin for React Admin

import React, { type ReactElement } from 'react';
import { Resource, CustomRoutes } from 'react-admin';
import { Route } from 'react-router-dom';
import EventIcon from '@mui/icons-material/Event';
import PersonIcon from '@mui/icons-material/Person';
import PlaceIcon from '@mui/icons-material/Place';
import ScheduleIcon from '@mui/icons-material/Schedule';
import { EventsPluginConfig } from './types/config';
import { DefaultEventList } from './resources/events/DefaultEventList';
import { DefaultEventEdit } from './resources/events/DefaultEventEdit';
import { DefaultEventCreate } from './resources/events/DefaultEventCreate';
import { DefaultEventForm } from './resources/events/DefaultEventForm';
import { DefaultSpeakerList } from './resources/speakers/DefaultSpeakerList';
import { DefaultSpeakerEdit } from './resources/speakers/DefaultSpeakerEdit';
import { DefaultSpeakerCreate } from './resources/speakers/DefaultSpeakerCreate';
import { DefaultSpeakerForm } from './resources/speakers/DefaultSpeakerForm';
import { DefaultVenueList } from './resources/venues/DefaultVenueList';
import { DefaultVenueEdit } from './resources/venues/DefaultVenueEdit';
import { DefaultVenueForm } from './resources/venues/DefaultVenueForm';
import { DefaultSessionList } from './resources/sessions/DefaultSessionList';
import { DefaultSessionEdit } from './resources/sessions/DefaultSessionEdit';
import { DefaultSessionCreate } from './resources/sessions/DefaultSessionCreate';
import { DefaultSessionForm } from './resources/sessions/DefaultSessionForm';
import { DefaultScheduleBuilder } from './resources/schedule/DefaultScheduleBuilder';

// ============================================================================
// PLUGIN REGISTRATION
// ============================================================================

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
export const EventsPlugin = (props?: EventsPluginConfig): ReactElement[] => {
  const {
    overrides = {},
    extraFields = {},
    permissions = {},
  } = props || {};
  
  // Validate permissions configuration if provided (development helper)
  if (Object.keys(permissions).length > 0) {
    console.info('[EventsPlugin] Permissions configuration accepted. Enforcement delegated to React Admin authProvider.');
  }

  // Apply component overrides
  const EventListComponent = overrides.EventList || DefaultEventList;
  const SpeakerListComponent = overrides.SpeakerList || DefaultSpeakerList;
  const VenueListComponent = overrides.VenueList || DefaultVenueList;
  const SessionListComponent = overrides.SessionList || DefaultSessionList;
  const ScheduleBuilderComponent = overrides.ScheduleBuilder || DefaultScheduleBuilder;

  // Get extra fields for each resource
  const eventExtraFields = extraFields.events || [];
  const speakerExtraFields = extraFields.speakers || [];
  const venueExtraFields = extraFields.venues || [];
  const sessionExtraFields = extraFields.sessions || [];

  // Get form overrides
  const EventFormComponent = overrides.EventForm || DefaultEventForm;
  const SpeakerFormComponent = overrides.SpeakerForm || DefaultSpeakerForm;
  const VenueFormComponent = overrides.VenueForm || DefaultVenueForm;
  const SessionFormComponent = overrides.SessionForm || DefaultSessionForm;

  // Note: Permissions are accepted but enforcement is delegated to React Admin's authProvider
  // The permissions prop serves as documentation and can be used by custom components

  // Create wrapped Edit/Create components that pass config to Default components
  // These wrapper components capture the form component and extraFields in their closure
  const EventEditComponent = overrides.EventEdit || (() => 
    React.createElement(DefaultEventEdit as any, { FormComponent: EventFormComponent, extraFields: eventExtraFields })
  );
  
  const EventCreateComponent = overrides.EventCreate || (() => 
    React.createElement(DefaultEventCreate as any, { FormComponent: EventFormComponent, extraFields: eventExtraFields })
  );
  
  const SpeakerEditComponent = overrides.SpeakerEdit  || (() => 
    React.createElement(DefaultSpeakerEdit as any, { FormComponent: SpeakerFormComponent, extraFields: speakerExtraFields })
  );
  
  const SpeakerCreateComponent = overrides.SpeakerCreate || (() => 
    React.createElement(DefaultSpeakerCreate as any, { FormComponent: SpeakerFormComponent, extraFields: speakerExtraFields })
  );
  
  const VenueEditComponent = overrides.VenueEdit || (() => 
    React.createElement(DefaultVenueEdit as any, { FormComponent: VenueFormComponent, extraFields: venueExtraFields })
  );
  
  const SessionEditComponent = overrides.SessionEdit || (() => 
    React.createElement(DefaultSessionEdit as any, { FormComponent: SessionFormComponent, extraFields: sessionExtraFields })
  );
  
  const SessionCreateComponent = overrides.SessionCreate || (() => 
    React.createElement(DefaultSessionCreate as any, { FormComponent: SessionFormComponent, extraFields: sessionExtraFields })
  );

  // Return Resource elements with applied overrides as an array for direct JSX spread
  return [
    React.createElement(Resource, {
      key: "events",
      name: "events",
      list: EventListComponent,
      edit: EventEditComponent,
      create: EventCreateComponent,
      icon: EventIcon
    }),
    React.createElement(Resource, {
      key: "speakers",
      name: "speakers",
      list: SpeakerListComponent,
      edit: SpeakerEditComponent,
      create: SpeakerCreateComponent,
      icon: PersonIcon
    }),
    React.createElement(Resource, {
      key: "venues",
      name: "venues",
      list: VenueListComponent,
      edit: VenueEditComponent,
      icon: PlaceIcon
    }),
    React.createElement(Resource, {
      key: "sessions",
      name: "sessions",
      list: SessionListComponent,
      edit: SessionEditComponent,
      create: SessionCreateComponent,
      icon: ScheduleIcon
    })
  ];
};

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type { EventsPluginConfig } from './types/config';

// Export all resource types
export type {
  Event,
  Speaker,
  Venue,
  Session
} from './types/resources';

// ============================================================================
// UTILITY EXPORTS
// ============================================================================

// Export utility functions for client use
export { validateEventDates } from './utils/eventValidators';
