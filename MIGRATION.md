# Migration Guide: Events Plugin

**Version**: 1.0.0  
**Last Updated**: March 6, 2026

This guide helps you upgrade the Events Plugin between versions safely and efficiently.

## Table of Contents

- [Version History](#version-history)
- [Upgrade Process](#upgrade-process)
- [Version 1.0.0 (Current)](#version-100-current)
- [Breaking Changes Policy](#breaking-changes-policy)
- [Deprecation Warnings](#deprecation-warnings)
- [Rollback Procedures](#rollback-procedures)

## Version History

| Version | Release Date | Type | Description |
|---------|-------------|------|-------------|
| 1.0.0 | March 6, 2026 | Major | Initial release |

## Upgrade Process

### General Steps

Follow these steps for any version upgrade:

1. **Review Release Notes**: Check [CHANGELOG.md](./CHANGELOG.md) for changes
2. **Check Breaking Changes**: Look for breaking changes in target version
3. **Update Dependencies**: Verify peer dependency compatibility
4. **Update Package**: Install new version
5. **Run Type Check**: Verify TypeScript compilation
6. **Test Locally**: Test all customizations and integrations
7. **Deploy**: Roll out to production

### Standard Upgrade Command

```bash
# Update to specific version
npm install @quicklaunch/events-plugin@<version>

# Update to latest version
npm install @quicklaunch/events-plugin@latest

# For workspace setup
cd external-package/@quicklaunch/events-plugin
git pull origin main
npm run build
```

### Verifying Upgrade

After upgrading, verify the installation:

```bash
# Check installed version
npm list @quicklaunch/events-plugin

# Run type check
npx tsc --noEmit

# Test in development
npm run dev
```

## Version 1.0.0 (Current)

**Release Date**: March 6, 2026  
**Type**: Initial Release

### What's Included

- ✨ Four resource modules: Events, Speakers, Venues, Schedule
- ✨ Zero-config installation with `<EventsPlugin />`
- ✨ Automatic theme inheritance via MUI `useTheme()`
- ✨ Three customization APIs: `overrides`, `permissions`, `extraFields`
- ✨ Full TypeScript support
- ✨ Recurring events with RRule integration
- ✨ Hot module reload support

### Installation

```bash
npm install @quicklaunch/events-plugin@1.0.0
```

### Basic Usage

```typescript
import { EventsPlugin } from '@quicklaunch/events-plugin';

<Admin dataProvider={dataProvider}>
  <EventsPlugin />
</Admin>
```

### Migration from Monolithic App

If you're migrating from a monolithic application with embedded event modules:

#### Step 1: Install Plugin

```bash
npm install @quicklaunch/events-plugin@1.0.0
```

#### Step 2: Remove Old Event Code

Delete or move the following from your base application:

```text
src/modules/events/          # All event-related modules
src/types/event.ts           # Event type definitions
src/utils/eventValidators.ts # Event validation utilities
src/utils/recurringEvents.ts # Recurring event utilities
src/components/RecurrenceInput.tsx # Recurrence input component
```

#### Step 3: Update Routes

Remove event routes from your routing configuration:

```typescript
// Before: src/routes/index.tsx
import { ScheduleBuilder } from '../modules/events/schedule/ScheduleBuilder';

<Route path="/schedule/:eventId" element={<ScheduleBuilder />} />

// After: Remove this route (plugin provides it)
```

#### Step 4: Update App.tsx

Replace resource declarations with plugin:

```typescript
// Before
import * as events from './modules/events/events';
import * as speakers from './modules/events/speakers';
import * as venues from './modules/events/venues';

<Admin dataProvider={dataProvider}>
  <Resource name="events" {...events} />
  <Resource name="speakers" {...speakers} />
  <Resource name="venues" {...venues} />
</Admin>

// After
import { EventsPlugin } from '@quicklaunch/events-plugin';

<Admin dataProvider={dataProvider}>
  <EventsPlugin />
</Admin>
```

#### Step 5: Migrate Customizations (if any)

If you had custom event forms or components:

```typescript
// Before: Custom code in monolithic app
const CustomEventForm = () => { /* ... */ };

// After: Pass as override to plugin
<EventsPlugin
  overrides={{
    EventForm: CustomEventForm
  }}
/>
```

#### Step 6: Test Migration

1. Start development server: `npm run dev`
2. Verify all four resources appear in menu
3. Test CRUD operations for each resource
4. Verify theme consistency
5. Test any custom overrides
6. Check that existing data loads correctly

#### Step 7: Clean Up package.json

Remove any event-specific dependencies that are now included in plugin:

```json
// Can be removed if only used by events module
{
  "dependencies": {
    "rrule": "^2.8.1",  // Now in plugin
    "date-fns": "^2.30.0"  // Shared, keep if used elsewhere
  }
}
```

## Breaking Changes Policy

The Events Plugin follows **Semantic Versioning (SemVer)**:

### Major Version (x.0.0)

**Breaking changes** - May require code modifications

Examples:
- Renamed props or exports
- Changed function signatures
- Removed deprecated features
- Changed default behavior
- Peer dependency major version bumps

**Migration**: Review release notes carefully and test thoroughly

### Minor Version (1.x.0)

**New features** - Backward compatible

Examples:
- New props or configuration options
- New exported components
- New utility functions
- Enhanced features (opt-in)
- Peer dependency minor version bumps

**Migration**: Update and test; no code changes required

### Patch Version (1.0.x)

**Bug fixes** - Backward compatible

Examples:
- Bug fixes
- Performance improvements
- Documentation updates
- Internal refactoring

**Migration**: Safe to update with minimal testing

## Deprecation Warnings

When features are deprecated, we follow this timeline:

### Deprecation Announcement (Minor Version)

```typescript
/**
 * @deprecated Since 1.5.0. Use `newProp` instead. Will be removed in 2.0.0.
 */
oldProp?: string;
```

- Feature marked as deprecated in code
- Documentation updated with migration path
- Console warnings added (if applicable)
- Feature still works normally

### Deprecation Period (1-2 Minor Versions)

- Deprecated feature continues working
- Warnings remain active
- Migration guides published
- Time to update your code

### Removal (Next Major Version)

- Feature removed from codebase
- Breaking change documented
- Migration required

### Example Timeline

```text
v1.3.0: Feature X introduced
v1.5.0: Feature Y added (better alternative)
       Feature X marked deprecated (console warnings)
v1.6.0-1.9.0: Both features work
v2.0.0: Feature X removed (breaking change)
```

## Rollback Procedures

If you encounter issues after upgrading, you can rollback:

### Rollback to Previous Version

```bash
# Install specific previous version
npm install @quicklaunch/events-plugin@<previous-version>

# Example
npm install @quicklaunch/events-plugin@1.0.0
```

### Using package.json Lock

```json
// Pin to specific version in package.json
{
  "dependencies": {
    "@quicklaunch/events-plugin": "1.0.0"
  }
}
```

### Git Revert (for workspace setup)

```bash
cd external-package/@quicklaunch/events-plugin
git log --oneline  # Find commit before upgrade
git checkout <commit-hash>
npm run build
```

### Reporting Rollback Issues

If you needed to rollback:

1. **Document the issue**: Error messages, screenshots, reproduction steps
2. **Check existing issues**: Search internal repository
3. **Report new issue**: Include version numbers, context, error logs
4. **Team communication**: Alert team via #quicklaunch-plugins

## Future Version Guides

As new versions are released, migration guides will be added here.

### Template for Future Versions

```markdown
## Version X.Y.Z

**Release Date**: [Date]
**Type**: [Major|Minor|Patch]

### Breaking Changes

- [List of breaking changes]

### New Features

- [List of new features]

### Bug Fixes

- [List of bug fixes]

### Migration Steps

1. [Step-by-step migration instructions]

### Deprecations

- [Features deprecated in this version]
```

## Best Practices for Smooth Upgrades

### 1. Pin Versions in Production

```json
{
  "dependencies": {
    "@quicklaunch/events-plugin": "1.0.0"  // Exact version, not ^1.0.0
  }
}
```

### 2. Test in Staging First

- Always test upgrades in non-production environment
- Verify all customizations still work
- Check integration with your data provider
- Test permission configurations

### 3. Review Change Logs

- Read [CHANGELOG.md](./CHANGELOG.md) before upgrading
- Check for breaking changes
- Review new features you might benefit from

### 4. Monitor Deprecation Warnings

```typescript
// Check browser console for warnings
console.warn('[Events Plugin] Feature X is deprecated...')
```

### 5. Keep TypeScript Updated

- Ensure TypeScript can resolve plugin types
- Run `npx tsc --noEmit` regularly
- Clear cache if needed: `rm -rf node_modules/.cache`

### 6. Automated Testing

Set up automated tests for your customizations:

```typescript
// Example: Test custom override still works
describe('Custom Event Form', () => {
  it('renders with custom fields', () => {
    render(
      <Admin dataProvider={dataProvider}>
        <EventsPlugin
          overrides={{ EventForm: CustomEventForm }}
        />
      </Admin>
    );
    
    expect(screen.getByLabelText('Budget Code')).toBeInTheDocument();
  });
});
```

### 7. Document Your Customizations

Keep a list of customizations you've made:

```typescript
// customizations/README.md
/**
 * Events Plugin Customizations
 * 
 * Overrides:
 * - EventForm: Added budget code and cost center fields
 * - EventList: Custom filtering by department
 * 
 * Extra Fields:
 * - events: budgetCode, costCenter, departmentId
 * 
 * Permissions:
 * - Only admins can create/delete events
 * - Editors can edit events they own
 */
```

## Version Compatibility Matrix

| Plugin Version | React Admin | MUI | React | TypeScript | Node |
|---------------|-------------|-----|-------|------------|------|
| 1.0.0 | ^4.16.0 | ^5.14.0 | ^18.0.0 | ^5.0.0 | >=16.0.0 |

## Getting Help

If you encounter issues during migration:

- **Documentation**: Check [README.md](./README.md), [API.md](./API.md), [ARCHITECTURE.md](./ARCHITECTURE.md)
- **Changelog**: Review [CHANGELOG.md](./CHANGELOG.md) for version-specific changes
- **Internal Support**: #quicklaunch-plugins Slack channel
- **Issues**: Report at internal repository

## Contributing to Migration Docs

Found an issue or have suggestions for improving migration guides?

1. Document the issue and resolution
2. Share with the team in #quicklaunch-plugins
3. Contribute updates to this guide

---

**Version**: 1.0.0  
**Last Updated**: March 6, 2026

**Next Review**: When version 1.1.0 or 2.0.0 is released
