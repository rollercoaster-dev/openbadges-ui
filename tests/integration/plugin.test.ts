// tests/integration/plugin.test.ts
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { createApp } from 'vue';
import OpenBadgesUIPlugin from '../../src/plugin';
import BadgeDisplay from '../../src/components/badges/BadgeDisplay.vue';
import BadgeList from '../../src/components/badges/BadgeList.vue';
import ProfileViewer from '../../src/components/badges/ProfileViewer.vue';
import BadgeVerification from '../../src/components/badges/BadgeVerification.vue';
import BadgeIssuerForm from '../../src/components/issuing/BadgeIssuerForm.vue';
import IssuerDashboard from '../../src/components/issuing/IssuerDashboard.vue';

// Mock PrimeVue
vi.mock('primevue/config', () => ({
  default: {}
}));

describe('OpenBadgesUIPlugin', () => {
  let app;
  let componentSpy;

  beforeEach(() => {
    // Create a new Vue app for each test
    app = createApp({});

    // Spy on the component registration
    componentSpy = vi.spyOn(app, 'component');
  });

  it('should register all components when installed', () => {
    // Install the plugin
    app.use(OpenBadgesUIPlugin);

    // Check that all components were registered
    expect(componentSpy).toHaveBeenCalledWith('BadgeDisplay', BadgeDisplay);
    expect(componentSpy).toHaveBeenCalledWith('BadgeList', BadgeList);
    expect(componentSpy).toHaveBeenCalledWith('ProfileViewer', ProfileViewer);
    expect(componentSpy).toHaveBeenCalledWith('BadgeVerification', BadgeVerification);
    expect(componentSpy).toHaveBeenCalledWith('BadgeIssuerForm', BadgeIssuerForm);
    expect(componentSpy).toHaveBeenCalledWith('IssuerDashboard', IssuerDashboard);
  });



  it('should register all components with the correct names', () => {
    // Install the plugin
    app.use(OpenBadgesUIPlugin);

    // Check that all components were registered with the correct names
    const expectedComponents = [
      'BadgeDisplay',
      'BadgeList',
      'ProfileViewer',
      'BadgeVerification',
      'BadgeIssuerForm',
      'IssuerDashboard'
    ];

    expectedComponents.forEach(componentName => {
      expect(componentSpy).toHaveBeenCalledWith(componentName, expect.any(Object));
    });

    // Check the total number of component registrations
    expect(componentSpy).toHaveBeenCalledTimes(expectedComponents.length);
  });
});
