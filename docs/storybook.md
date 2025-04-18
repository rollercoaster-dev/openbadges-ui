## Storybook Integration

The Manus AI Open Badges Component Library includes Storybook integration for component development, testing, and documentation. Storybook provides an isolated environment to develop and showcase UI components.

### Running Storybook

To start the Storybook development server:

```bash
npm run storybook
```

This will launch Storybook on port 6006. Open your browser to http://localhost:6006 to view the component stories.

### Building Storybook

To build a static version of Storybook for deployment:

```bash
npm run build-storybook
```

This will create a `storybook-static` directory with the built Storybook that can be deployed to any static hosting service.

### Available Stories

The following components have Storybook stories:

1. **Badge Display Components**
   - BadgeDisplay: Shows different badge display variations
   - BadgeList: Demonstrates grid and list layouts with pagination
   - ProfileViewer: Shows profiles for both issuers and recipients

2. **Badge Issuing Components**
   - BadgeIssuerForm: Shows form states including validation
   - IssuerDashboard: Demonstrates the complete issuer interface

### Theme Switching

Storybook includes theme switching capabilities to preview components with different themes:
- Default theme
- Dark theme
- High contrast theme
- Large text theme
- Dyslexia-friendly theme

Use the "Themes" addon in the Storybook toolbar to switch between themes.

### Accessibility Testing

The Storybook integration includes the accessibility (a11y) addon, which can be used to check components for accessibility issues. Use the "Accessibility" tab in the Storybook addon panel to run accessibility checks on each component.
