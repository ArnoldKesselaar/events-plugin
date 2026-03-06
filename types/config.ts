// Plugin configuration types
// Based on contracts/plugin-config.ts specification

import { ComponentType } from 'react';

/**
 * Permission function for dynamic permission evaluation
 */
export type PermissionCheck = (user?: any) => boolean | Promise<boolean>;

/**
 * Simplified permissions configuration
 * Apply permissions globally or per-resource
 */
export interface PluginPermissions {
  canCreate?: boolean | PermissionCheck;
  canEdit?: boolean | PermissionCheck;
  canDelete?: boolean | PermissionCheck;
}

/**
 * Main plugin configuration props with all options inlined
 */
export interface EventsPluginConfig {
  /**
   * Component overrides for customization
   * Replace default plugin components with custom implementations
   */
  overrides?: {
    // Event resource component overrides
    EventList?: ComponentType<any>;
    EventEdit?: ComponentType<any>;
    EventCreate?: ComponentType<any>;
    EventForm?: ComponentType<any>;
    
    // Speaker resource component overrides
    SpeakerList?: ComponentType<any>;
    SpeakerEdit?: ComponentType<any>;
    SpeakerCreate?: ComponentType<any>;
    SpeakerForm?: ComponentType<any>;
    
    // Venue resource component overrides
    VenueList?: ComponentType<any>;
    VenueEdit?: ComponentType<any>;
    VenueForm?: ComponentType<any>;
    
    // Session resource component overrides
    SessionList?: ComponentType<any>;
    SessionEdit?: ComponentType<any>;
    SessionCreate?: ComponentType<any>;
    SessionForm?: ComponentType<any>;
    
    // Schedule/Session component overrides
    ScheduleBuilder?: ComponentType<any>;
  };
  
  /**
   * Additional fields for plugin resources
   * Add custom fields to plugin entities
   */
  extraFields?: {
    events?: string[];
    speakers?: string[];
    venues?: string[];
    sessions?: string[];
  };

  /**
   * Permission checks for plugin actions
   * Can be applied globally to all resources
   */
  permissions?: PluginPermissions;
}

// ============================================================================
// INTERNAL TYPE ALIASES (for plugin implementation use only)
// ============================================================================

/**
 * @internal
 * Type alias for component overrides - used internally by plugin
 */
export type OverridesConfig = NonNullable<EventsPluginConfig['overrides']>;

/**
 * @internal
 * Type alias for extra fields config - used internally by plugin
 */
export type ExtraFieldsConfig = NonNullable<EventsPluginConfig['extraFields']>;
