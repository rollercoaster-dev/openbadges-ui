import { describe, it, expect, vi as _vi } from 'vitest'; // eslint-disable-line @typescript-eslint/no-unused-vars
import { mount } from '@vue/test-utils';
import BadgeList from '../../../../src/components/badges/BadgeList.vue';
import BadgeDisplay from '../../../../src/components/badges/BadgeDisplay.vue';
import { createDateTime, createIRI, type OB2, type OB3 } from 'openbadges-types';

describe('BadgeList.vue', () => {
  // Mock OB2 badge
  const mockOB2Badge: OB2.Assertion = {
    '@context': 'https://w3id.org/openbadges/v2',
    type: 'Assertion',
    id: createIRI('http://example.org/badge1'),
    recipient: {
      identity: 'test@example.org',
      type: 'email',
      hashed: false,
    },
    badge: {
      type: 'BadgeClass',
      id: createIRI('http://example.org/badgeclass1'),
      name: 'Test Badge 1',
      description: 'A test badge description',
      image: createIRI('http://example.org/badge1.png'),
      criteria: {
        id: createIRI('http://example.org/criteria'),
        narrative: 'Test criteria narrative',
      },
      issuer: {
        type: 'Profile',
        id: createIRI('http://example.org/issuer'),
        name: 'Test Issuer',
      },
    },
    issuedOn: createDateTime('2023-01-01T00:00:00Z'),
    verification: {
      type: 'hosted',
    },
  };

  // Mock OB3 badge
  const mockOB3Badge: OB3.VerifiableCredential = {
    '@context': ['https://www.w3.org/2018/credentials/v1'],
    type: ['VerifiableCredential', 'OpenBadgeCredential'],
    id: createIRI('http://example.org/credentials/123'),
    issuer: {
      id: createIRI('http://example.org/issuers/1'),
      name: 'Test Issuer',
      type: 'Profile',
      url: createIRI('http://example.org/issuers/1'),
    },
    issuanceDate: createDateTime('2023-02-01T00:00:00Z'),
    credentialSubject: {
      id: createIRI('did:example:123'),
      achievement: {
        id: createIRI('http://example.org/achievements/1'),
        type: 'Achievement',
        name: 'Test Badge 2',
        description: 'Another test badge',
        image: createIRI('http://example.org/badge2.png'),
        criteria: {
          id: createIRI('http://example.org/criteria'),
          narrative: 'Test criteria narrative',
        },
      },
    },
  };

  // Create an array of badges for testing
  const mockBadges = [mockOB2Badge, mockOB3Badge];

  it('renders a list of badges correctly', () => {
    const wrapper = mount(BadgeList, {
      props: {
        badges: mockBadges,
      },
      global: {
        stubs: {
          BadgeDisplay: true,
        },
      },
    });

    // Check if the correct number of badges are rendered
    const badgeItems = wrapper.findAll('.manus-badge-list-item');
    expect(badgeItems.length).toBe(2);
  });

  it('displays a loading state when loading prop is true', () => {
    const wrapper = mount(BadgeList, {
      props: {
        badges: mockBadges,
        loading: true,
      },
    });

    // Check if loading message is displayed
    expect(wrapper.find('.manus-badge-list-loading').exists()).toBe(true);
    expect(wrapper.find('.manus-badge-list-loading').text()).toContain('Loading badges');
  });

  it('displays an empty state when no badges are provided', () => {
    const wrapper = mount(BadgeList, {
      props: {
        badges: [],
      },
    });

    // Check if empty message is displayed
    expect(wrapper.find('.manus-badge-list-empty').exists()).toBe(true);
    expect(wrapper.find('.manus-badge-list-empty').text()).toContain('No badges found');
  });

  it('uses the correct layout class based on layout prop', () => {
    // Test grid layout
    const gridWrapper = mount(BadgeList, {
      props: {
        badges: mockBadges,
        layout: 'grid',
      },
      global: {
        stubs: {
          BadgeDisplay: true,
        },
      },
    });
    expect(gridWrapper.classes()).toContain('grid-layout');

    // Test list layout
    const listWrapper = mount(BadgeList, {
      props: {
        badges: mockBadges,
        layout: 'list',
      },
      global: {
        stubs: {
          BadgeDisplay: true,
        },
      },
    });
    expect(listWrapper.classes()).not.toContain('grid-layout');
  });

  it('emits badge-click event when a badge is clicked', async () => {
    const wrapper = mount(BadgeList, {
      props: {
        badges: [mockOB2Badge],
        interactive: true,
      },
    });

    // Find the BadgeDisplay component and trigger a click
    const badgeDisplay = wrapper.findComponent(BadgeDisplay);
    await badgeDisplay.trigger('click');

    // Check if badge-click event was emitted with the correct badge
    expect(wrapper.emitted('badge-click')).toBeTruthy();
    expect(wrapper.emitted('badge-click')![0][0]).toEqual(mockOB2Badge);
  });

  it('shows pagination when showPagination is true and there are multiple pages', () => {
    const manyBadges = Array(15).fill(mockOB2Badge);

    const wrapper = mount(BadgeList, {
      props: {
        badges: manyBadges,
        pageSize: 5,
        showPagination: true,
      },
      global: {
        stubs: {
          BadgeDisplay: true,
        },
      },
    });

    // Check if pagination is displayed
    expect(wrapper.find('.manus-badge-list-pagination').exists()).toBe(true);

    // Check if page info is correct
    expect(wrapper.find('.manus-pagination-info').text()).toContain('Page 1 of 3');
  });

  it('does not show pagination when there is only one page', () => {
    const wrapper = mount(BadgeList, {
      props: {
        badges: mockBadges,
        pageSize: 5,
        showPagination: true,
      },
      global: {
        stubs: {
          BadgeDisplay: true,
        },
      },
    });

    // Check that pagination is not displayed
    expect(wrapper.find('.manus-badge-list-pagination').exists()).toBe(false);
  });

  it('emits page-change event when pagination buttons are clicked', async () => {
    const manyBadges = Array(15).fill(mockOB2Badge);

    const wrapper = mount(BadgeList, {
      props: {
        badges: manyBadges,
        pageSize: 5,
        showPagination: true,
        currentPage: 1,
      },
      global: {
        stubs: {
          BadgeDisplay: true,
        },
      },
    });

    // Click the next page button
    await wrapper.find('.manus-pagination-button:last-child').trigger('click');

    // Check if page-change event was emitted with the correct page number
    expect(wrapper.emitted('page-change')).toBeTruthy();
    expect(wrapper.emitted('page-change')![0][0]).toBe(2);
  });

  it('respects the pageSize prop for pagination', () => {
    const manyBadges = Array(10).fill(mockOB2Badge);

    // With pageSize 5, should have 2 pages
    const wrapper1 = mount(BadgeList, {
      props: {
        badges: manyBadges,
        pageSize: 5,
        showPagination: true,
      },
      global: {
        stubs: {
          BadgeDisplay: true,
        },
      },
    });

    expect(wrapper1.find('.manus-pagination-info').text()).toContain('Page 1 of 2');

    // With pageSize 10, should have 1 page
    const wrapper2 = mount(BadgeList, {
      props: {
        badges: manyBadges,
        pageSize: 10,
        showPagination: true,
      },
      global: {
        stubs: {
          BadgeDisplay: true,
        },
      },
    });

    // Pagination should not be displayed with only 1 page
    expect(wrapper2.find('.manus-badge-list-pagination').exists()).toBe(false);
  });

  it('uses the provided ariaLabel prop for accessibility', () => {
    const wrapper = mount(BadgeList, {
      props: {
        badges: mockBadges,
        ariaLabel: 'Custom badge list label',
      },
      global: {
        stubs: {
          BadgeDisplay: true,
        },
      },
    });

    const listElement = wrapper.find('.manus-badge-list-items');
    expect(listElement.attributes('aria-label')).toBe('Custom badge list label');
  });
});
