# Changelog

All notable changes to the Events Plugin will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-03-06

### Added - Initial Release

#### Core Features
- **Zero-config Installation**: Single `<EventsPlugin />` component registration
- **Four Resource Modules**: 
  - Events: Full CRUD for conferences, meetups, and gatherings
  - Speakers: Speaker profile management
  - Venues: Event location management
  - Schedule: Session scheduling and timeline builder

#### Theme Integration
- **Automatic Theme Inheritance**: Uses MUI's `useTheme()` hook throughout
- **Dark Mode Support**: Seamlessly switches with host application theme
- **Custom Theming**: Respects all MUI theme customizations (colors, typography, spacing)

#### Customization APIs
- **Overrides API**: Replace any default component with custom implementation
  - `EventList`, `EventEdit`, `EventCreate`, `EventForm`
  - `SpeakerList`, `SpeakerEdit`, `SpeakerCreate`, `SpeakerForm`
  - `VenueList`, `VenueEdit`, `VenueCreate`, `VenueForm`
  - `ScheduleBuilder`
- **ExtraFields API**: Add custom fields to resources without component overrides
- **Permissions API**: Function-based permission checks for granular access control
  - Boolean and function-based permission checks
  - Per-action control (list, create, edit, delete, show)
  - User and record context for dynamic permissions

#### Recurring Events
- **RRule Integration**: Full support for recurring event patterns
- **RecurrenceInput Component**: User-friendly recurrence configuration UI
- **Event Instance Generation**: Automatic generation of recurring event instances
- **Recurrence Validation**: Built-in validation for recurrence rules

#### TypeScript Support
- **Full Type Definitions**: Complete TypeScript types for all APIs
- **Autocomplete Support**: IntelliSense for plugin props and exports
- **Type-Safe Overrides**: Typed component override keys
- **Strict Mode Compatible**: Works with TypeScript strict mode

#### Developer Experience
- **Hot Module Reload**: Instant updates during development with workspace setup
- **Comprehensive Documentation**: 
  - README.md - Quick start and basic usage
  - API.md - Complete API reference
  - ARCHITECTURE.md - Design decisions and patterns
  - MIGRATION.md - Version upgrade guidelines
- **Error Messages**: Clear error messages for common misconfigurations
- **JSDoc Comments**: Documentation in code for IDE support

#### Build & Distribution
- **Dual Output**: ESM and CommonJS formats for compatibility
- **Tree-Shakeable**: ESM format enables dead code elimination
- **Peer Dependencies**: React, React Admin, and MUI externalized
- **Minimal Bundle**: ~150KB minified (excluding peer deps)
- **Vite Build System**: Fast builds with library mode

#### Data Provider Integration
- **Provider Agnostic**: Works with any React Admin data provider
- **Standard Resources**: Uses React Admin's resource pattern
- **Tested Providers**:
  - JSON Server (ra-data-json-server)
  - Simple REST (ra-data-simple-rest)
  - GraphQL (ra-data-graphql-simple)

### Component Exports

All default components exported for reuse and extension:

**Events**:
- `DefaultEventList`
- `DefaultEventEdit`
- `DefaultEventCreate`
- `DefaultEventForm`

**Speakers**:
- `DefaultSpeakerList`
- `DefaultSpeakerEdit`
- `DefaultSpeakerCreate`
- `DefaultSpeakerForm`

**Venues**:
- `DefaultVenueList`
- `DefaultVenueEdit`
- `DefaultVenueCreate`
- `DefaultVenueForm`

**Schedule**:
- `DefaultScheduleBuilder`

**Shared Components**:
- `RecurrenceInput`

### Context Hooks

- `useOverride()` - Access component overrides
- `usePermissions()` - Check permissions
- `useExtraFields()` - Access extra fields configuration

### Utility Functions

- `validateEventDates()` - Validate event date ranges
- `validateRecurrenceRule()` - Validate RRule strings
- `parseRecurrenceRule()` - Parse RRule to options
- `generateEventInstances()` - Generate recurring event instances
- `formatRecurrenceText()` - Human-readable recurrence descriptions

### Data Models

- `Event` interface
- `Speaker` interface
- `Venue` interface
- `Session` interface
- `EventsPluginProps` interface
- `OverridesConfig` interface
- `PermissionsConfig` interface
- `ExtraFieldsConfig` interface

### Dependencies

**Peer Dependencies**:
- react ^18.0.0
- react-dom ^18.0.0
- react-admin ^4.16.0
- @mui/material ^5.14.0

**Bundled Dependencies**:
- @mui/icons-material ^5.14.0
- @emotion/react ^11.11.0
- @emotion/styled ^11.11.0
- date-fns ^2.30.0
- rrule ^2.8.1

**Dev Dependencies**:
- TypeScript ^5.1.6
- Vite ^5.0.0
- @vitejs/plugin-react ^4.2.0
- vite-plugin-dts ^3.7.0

### Known Limitations

- **No SSR Support**: Client-side only (standard for React Admin)
- **English Only**: No internationalization in v1.0.0 (can be added via overrides)
- **Basic Validation**: Custom validation logic requires overrides
- **No Built-in Search**: Advanced search requires custom implementation

## [Unreleased]

### Planned for Future Releases

#### Version 1.1.0 (Minor)
- [ ] Internationalization (i18n) support
- [ ] Advanced search and filtering options
- [ ] Bulk operations for events
- [ ] Event duplication feature
- [ ] Export functionality (CSV, PDF)

#### Version 1.2.0 (Minor)
- [ ] Calendar view for events
- [ ] Drag-and-drop schedule builder enhancements
- [ ] Email notification templates
- [ ] Event analytics dashboard

#### Version 2.0.0 (Major - Breaking)
- [ ] React Admin 5.x support
- [ ] MUI 6.x support
- [ ] Possible API refinements based on feedback

---

## Versioning Policy

This project follows [Semantic Versioning](https://semver.org/):

- **Major version (X.0.0)**: Breaking changes (API changes, removed features)
- **Minor version (1.X.0)**: New features (backward compatible)
- **Patch version (1.0.X)**: Bug fixes (backward compatible)

## Release Process

1. Update version in `package.json`
2. Update this CHANGELOG.md
3. Create git tag: `git tag -a v1.0.0 -m "Release version 1.0.0"`
4. Build distribution: `npm run build`
5. Internal distribution (no public npm registry)

## Links

- [Migration Guide](./MIGRATION.md) - Version upgrade instructions
- [API Reference](./API.md) - Complete API documentation
- [Architecture Guide](./ARCHITECTURE.md) - Design decisions

---

**Version Format**: [Major].[Minor].[Patch]  
**Example**: 1.0.0 = Major version 1, Minor version 0, Patch version 0

[1.0.0]: https://github.com/quicklaunch/events-plugin/releases/tag/v1.0.0
