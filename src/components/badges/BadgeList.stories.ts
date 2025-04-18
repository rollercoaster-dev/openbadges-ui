// src/components/badges/BadgeList.stories.ts
import type { Meta, StoryObj } from '@storybook/vue3';
import BadgeList from './BadgeList.vue';
import { mockAssertions } from '../../services/mockData';

const meta: Meta = {
  title: 'Components/Badges/BadgeList',
  component: BadgeList,
  tags: ['autodocs'],
  argTypes: {
    badges: { control: 'object' },
    layout: { control: 'select', options: ['grid', 'list'] },
    interactive: { control: 'boolean' },
    loading: { control: 'boolean' },
    pageSize: { control: 'number' },
    currentPage: { control: 'number' },
    showPagination: { control: 'boolean' },
    ariaLabel: { control: 'text' },
    onBadgeClick: { action: 'badge-click' },
    onPageChange: { action: 'page-change' }
  },
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof BadgeList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GridLayout: Story = {
  args: {
    badges: mockAssertions,
    layout: 'grid',
    interactive: true,
    loading: false,
    showPagination: false,
    ariaLabel: 'List of badges'
  },
};

export const ListLayout: Story = {
  args: {
    badges: mockAssertions,
    layout: 'list',
    interactive: true,
    loading: false,
    showPagination: false,
    ariaLabel: 'List of badges'
  },
};

export const WithPagination: Story = {
  args: {
    badges: mockAssertions,
    layout: 'grid',
    interactive: true,
    loading: false,
    pageSize: 2,
    currentPage: 1,
    showPagination: true,
    ariaLabel: 'List of badges'
  },
};

export const Loading: Story = {
  args: {
    badges: [],
    layout: 'grid',
    interactive: true,
    loading: true,
    showPagination: false,
    ariaLabel: 'List of badges'
  },
};

export const Empty: Story = {
  args: {
    badges: [],
    layout: 'grid',
    interactive: true,
    loading: false,
    showPagination: false,
    ariaLabel: 'List of badges'
  },
  parameters: {
    docs: {
      description: {
        story: 'When no badges are available, an empty state is displayed.'
      }
    }
  }
};
