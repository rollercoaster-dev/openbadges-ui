# Open Badges Component Library

A Vue 3 component library for implementing Open Badges functionality, with a focus on accessibility and customization.

## Features

- **Open Badges Compliant**: Supports both Open Badges 2.0 and 3.0 specifications
- **Framework-Agnostic Core Logic**: Business logic is decoupled from UI components
- **Accessibility First**: Follows WCAG guidelines with support for various accessibility needs
- **Themeable**: Uses CSS variables for easy customization
- **PrimeVue Integration**: Built on PrimeVue in unstyled mode for maximum flexibility
- **Storybook Integration**: Includes Storybook for component development and documentation

## Installation

```bash
npm install manus-ai-components
```

## Quick Start

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import { ManusAIPlugin } from 'manus-ai-components'

// Import styles
import 'manus-ai-components/dist/style.css'

const app = createApp(App)

// Use the plugin (configures PrimeVue in unstyled mode)
app.use(ManusAIPlugin)

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

To apply a theme:

```javascript
import { AccessibilityService } from 'manus-ai-components'

// Apply dark theme
AccessibilityService.applyTheme('dark')
```

Or use CSS classes directly:

```html
<body class="manus-dark-theme">
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

## Storybook

The library includes Storybook integration for component development and documentation:

```bash
# Run Storybook development server
npm run storybook

# Build static Storybook site
npm run build-storybook
```

Storybook provides interactive examples of all components with different configurations and themes. See the [Storybook documentation](./docs/storybook.md) for more details.
