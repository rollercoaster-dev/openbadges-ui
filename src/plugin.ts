// src/plugin.ts
// OpenBadges UI Vue Plugin
import type { App } from 'vue';
import PrimeVue from 'primevue/config';

// Import components
import BadgeDisplay from './components/badges/BadgeDisplay.vue';
import BadgeList from './components/badges/BadgeList.vue';
import ProfileViewer from './components/badges/ProfileViewer.vue';
import BadgeVerification from './components/badges/BadgeVerification.vue';
import BadgeIssuerForm from './components/issuing/BadgeIssuerForm.vue';
import IssuerDashboard from './components/issuing/IssuerDashboard.vue';

// Import accessibility components
import FontSelector from './components/accessibility/FontSelector.vue';
import ThemeSelector from './components/accessibility/ThemeSelector.vue';
import AccessibilitySettings from './components/accessibility/AccessibilitySettings.vue';

export default {
  install: (app: App, options = {}): void => {
    // Configure PrimeVue in unstyled mode
    app.use(PrimeVue, {
      unstyled: true,
      ...options
    });

    // Register components globally
    app.component('BadgeDisplay', BadgeDisplay);
    app.component('BadgeList', BadgeList);
    app.component('ProfileViewer', ProfileViewer);
    app.component('BadgeVerification', BadgeVerification);
    app.component('BadgeIssuerForm', BadgeIssuerForm);
    app.component('IssuerDashboard', IssuerDashboard);

    // Register accessibility components
    app.component('FontSelector', FontSelector);
    app.component('ThemeSelector', ThemeSelector);
    app.component('AccessibilitySettings', AccessibilitySettings);
  }
};
