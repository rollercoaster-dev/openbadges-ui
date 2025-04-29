# OpenBadges UI

A Vue 3 component library for implementing Open Badges functionality, with a focus on accessibility and customization. This library supports both Open Badges 2.0 and 3.0 specifications.

## Features

- **Open Badges Compliant**: Supports both Open Badges 2.0 and 3.0 specifications
- **Framework-Agnostic Core Logic**: Business logic is decoupled from UI components
- **Accessibility First**: Follows WCAG guidelines with support for various accessibility needs
- **Themeable**: Uses CSS variables for easy customization
- **PrimeVue Integration**: Built on PrimeVue in unstyled mode for maximum flexibility
- **Histoire Integration**: Includes Histoire for component development and documentation

## Installation

```bash
npm install openbadges-ui
```

## Quick Start

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import { OpenBadgesUIPlugin } from 'openbadges-ui'

// Import styles
import 'openbadges-ui/dist/style.css'

const app = createApp(App)

// Use the plugin (configures PrimeVue in unstyled mode)
app.use(OpenBadgesUIPlugin)

app.mount('#app')
```

## Components

### Badge Display Components

- **BadgeDisplay**: Renders a single badge with its image, name, description, and issuer information
- **BadgeList**: Displays a collection of badges with filtering and sorting capabilities
- **ProfileViewer**: Shows a profile (issuer or recipient) along with their badges

### Badge Issuing Components

- **BadgeIssuerForm**: Form for creating and issuing new badges
- **IssuerDashboard**: Dashboard interface for managing badge issuance

## Composables

- **useBadgeIssuer**: Manages badge creation and issuance logic
- **useBadges**: Provides functionality for filtering, sorting, and displaying badges
- **useProfile**: Handles profile data for issuers and recipients

## Theming

The library includes several built-in themes:

- Default theme
- Dark theme
- High contrast theme
- Large text theme
- Dyslexia-friendly theme
- ADHD-friendly theme
- Autism-friendly theme

To apply a theme:

```javascript
import { AccessibilityService } from 'openbadges-ui'

// Apply dark theme
AccessibilityService.applyTheme('dark')
```

Or use CSS classes directly:

```html
<body class="ob-dark-theme">
  <!-- Your app content -->
</body>
```

## Accessibility

This library prioritizes accessibility with:

- Keyboard navigation support
- Screen reader compatibility
- Reduced motion options
- High contrast mode
- Support for neurodivergent users

## Component Documentation

The library includes Histoire integration for component development and documentation:

```bash
# Run Histoire development server
npm run story:dev

# Build static Histoire site
npm run story:build

# Preview the built Histoire site
npm run story:preview
```

Histoire provides interactive examples of all components with different configurations and themes. See the [Histoire documentation](./docs/histoire.md) for more details.

### Live Component Documentation

You can view the live component documentation at [https://rollercoaster-dev.github.io/openbadges-ui/](https://rollercoaster-dev.github.io/openbadges-ui/)

## Testing

The library includes unit tests for components and services. To run the tests:

```bash
# Run tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## Examples

Check out the [examples directory](./examples) for sample applications demonstrating how to use the OpenBadges UI components.
