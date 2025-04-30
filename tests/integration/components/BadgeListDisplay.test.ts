// tests/integration/components/BadgeListDisplay.test.ts
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { mount, flushPromises } from '@vue/test-utils';
import BadgeList from '../../../src/components/badges/BadgeList.vue';
import BadgeDisplay from '../../../src/components/badges/BadgeDisplay.vue';
import { createMockOB2Badge, createMockOB3Badge } from '../utils';

describe('BadgeList and BadgeDisplay Integration', () => {
  // Create mock badges for testing
  const mockOB2Badge = createMockOB2Badge();
  const mockOB3Badge = createMockOB3Badge();
  const mockBadges = [mockOB2Badge, mockOB3Badge];

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render BadgeDisplay components for each badge', () => {
    const wrapper = mount(BadgeList, {
      props: {
        badges: mockBadges
      }
    });

    // Check that the correct number of BadgeDisplay components are rendered
    const badgeDisplays = wrapper.findAllComponents(BadgeDisplay);
    expect(badgeDisplays.length).toBe(2);
  });

  it('should pass badges correctly to BadgeDisplay components', () => {
    const wrapper = mount(BadgeList, {
      props: {
        badges: mockBadges
      }
    });

    // Get all BadgeDisplay components
    const badgeDisplays = wrapper.findAllComponents(BadgeDisplay);
    
    // Check that each BadgeDisplay received the correct badge
    expect(badgeDisplays[0].props('badge')).toEqual(mockOB2Badge);
    expect(badgeDisplays[1].props('badge')).toEqual(mockOB3Badge);
  });

  it('should pass interactive prop from BadgeList to BadgeDisplay', () => {
    // Test with interactive=true
    const interactiveWrapper = mount(BadgeList, {
      props: {
        badges: mockBadges,
        interactive: true
      }
    });

    // Check that all BadgeDisplay components have interactive=true
    const interactiveBadgeDisplays = interactiveWrapper.findAllComponents(BadgeDisplay);
    interactiveBadgeDisplays.forEach(display => {
      expect(display.props('interactive')).toBe(true);
    });

    // Test with interactive=false
    const nonInteractiveWrapper = mount(BadgeList, {
      props: {
        badges: mockBadges,
        interactive: false
      }
    });

    // Check that all BadgeDisplay components have interactive=false
    const nonInteractiveBadgeDisplays = nonInteractiveWrapper.findAllComponents(BadgeDisplay);
    nonInteractiveBadgeDisplays.forEach(display => {
      expect(display.props('interactive')).toBe(false);
    });
  });

  it('should propagate click events from BadgeDisplay to BadgeList', async () => {
    const wrapper = mount(BadgeList, {
      props: {
        badges: [mockOB2Badge],
        interactive: true
      }
    });

    // Get the BadgeDisplay component
    const badgeDisplay = wrapper.findComponent(BadgeDisplay);
    
    // Trigger a click on the BadgeDisplay
    await badgeDisplay.trigger('click');
    
    // Check that BadgeList emitted the badge-click event with the correct badge
    expect(wrapper.emitted('badge-click')).toBeTruthy();
    expect(wrapper.emitted('badge-click')![0][0]).toEqual(mockOB2Badge);
  });

  it('should handle pagination correctly', async () => {
    // Create an array of 5 badges
    const manyBadges = Array(5).fill(null).map((_, index) => 
      createMockOB2Badge({ id: `http://example.org/badge${index + 1}` })
    );
    
    const wrapper = mount(BadgeList, {
      props: {
        badges: manyBadges,
        pageSize: 2,
        showPagination: true,
        currentPage: 1
      }
    });

    // Initially, only the first 2 badges should be displayed
    let badgeDisplays = wrapper.findAllComponents(BadgeDisplay);
    expect(badgeDisplays.length).toBe(2);
    expect(badgeDisplays[0].props('badge').id).toBe('http://example.org/badge1');
    expect(badgeDisplays[1].props('badge').id).toBe('http://example.org/badge2');
    
    // Click the next page button
    await wrapper.find('.manus-pagination-button:last-child').trigger('click');
    
    // Check that the page-change event was emitted
    expect(wrapper.emitted('page-change')).toBeTruthy();
    expect(wrapper.emitted('page-change')![0][0]).toBe(2);
    
    // Update the currentPage prop to simulate the parent component responding to the event
    await wrapper.setProps({ currentPage: 2 });
    
    // Now the next 2 badges should be displayed
    badgeDisplays = wrapper.findAllComponents(BadgeDisplay);
    expect(badgeDisplays.length).toBe(2);
    expect(badgeDisplays[0].props('badge').id).toBe('http://example.org/badge3');
    expect(badgeDisplays[1].props('badge').id).toBe('http://example.org/badge4');
  });

  it('should handle empty badge list correctly', () => {
    const wrapper = mount(BadgeList, {
      props: {
        badges: []
      }
    });

    // Check that the empty message is displayed
    expect(wrapper.find('.manus-badge-list-empty').exists()).toBe(true);
    expect(wrapper.find('.manus-badge-list-empty').text()).toContain('No badges found');
    
    // No BadgeDisplay components should be rendered
    const badgeDisplays = wrapper.findAllComponents(BadgeDisplay);
    expect(badgeDisplays.length).toBe(0);
  });

  it('should handle loading state correctly', () => {
    const wrapper = mount(BadgeList, {
      props: {
        badges: mockBadges,
        loading: true
      }
    });

    // Check that the loading message is displayed
    expect(wrapper.find('.manus-badge-list-loading').exists()).toBe(true);
    expect(wrapper.find('.manus-badge-list-loading').text()).toContain('Loading badges');
    
    // No BadgeDisplay components should be rendered when loading
    const badgeDisplays = wrapper.findAllComponents(BadgeDisplay);
    expect(badgeDisplays.length).toBe(0);
  });

  it('should apply the correct layout class', () => {
    // Test grid layout
    const gridWrapper = mount(BadgeList, {
      props: {
        badges: mockBadges,
        layout: 'grid'
      }
    });
    expect(gridWrapper.classes()).toContain('grid-layout');

    // Test list layout
    const listWrapper = mount(BadgeList, {
      props: {
        badges: mockBadges,
        layout: 'list'
      }
    });
    expect(listWrapper.classes()).not.toContain('grid-layout');
  });

  it('should use the slot for customizing badge display', () => {
    const wrapper = mount(BadgeList, {
      props: {
        badges: [mockOB2Badge]
      },
      slots: {
        badge: `
          <template #badge="{ badge, normalized }">
            <div class="custom-badge">
              <h4>{{ normalized.name }}</h4>
              <p>Custom badge display</p>
            </div>
          </template>
        `
      }
    });

    // Check that the custom slot content is rendered
    expect(wrapper.find('.custom-badge').exists()).toBe(true);
    expect(wrapper.find('.custom-badge h4').text()).toBe('Test Badge');
    expect(wrapper.find('.custom-badge p').text()).toBe('Custom badge display');
    
    // No BadgeDisplay components should be rendered when using a custom slot
    const badgeDisplays = wrapper.findAllComponents(BadgeDisplay);
    expect(badgeDisplays.length).toBe(0);
  });
});
