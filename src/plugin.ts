// src/plugin.ts
// OpenBadges UI Vue Plugin
import type { App } from 'vue';
import PrimeVue from 'primevue/config';

// Import components
import BadgeDisplay from './components/badges/BadgeDisplay.vue';
import BadgeList from './components/badges/BadgeList.vue';
import ProfileViewer from './components/badges/ProfileViewer.vue';
import BadgeIssuerForm from './components/issuing/BadgeIssuerForm.vue';
import IssuerDashboard from './components/issuing/IssuerDashboard.vue';

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
    app.component('BadgeIssuerForm', BadgeIssuerForm);
    app.component('IssuerDashboard', IssuerDashboard);
  }
};
