// src/components/badges/ProfileViewer.stories.ts
import type { Meta, StoryObj } from '@storybook/vue3';
import ProfileViewer from './ProfileViewer.vue';
import { mockProfiles } from '../../services/mockData';

const meta: Meta = {
  title: 'Components/Badges/ProfileViewer',
  component: ProfileViewer,
  tags: ['autodocs'],
  argTypes: {
    profile: { control: 'object' },
    badges: { control: 'object' },
    loading: { control: 'boolean' },
    badgesLayout: { control: 'select', options: ['grid', 'list'] },
    badgesInteractive: { control: 'boolean' },
    showPagination: { control: 'boolean' },
    pageSize: { control: 'number' },
    onBadgeClick: { action: 'badge-click' }
  },
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ProfileViewer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RecipientProfile: Story = {
  args: {
    profile: mockProfiles.alice,
    badges: mockProfiles.alice.badges,
    loading: false,
    badgesLayout: 'grid',
    badgesInteractive: true,
    showPagination: false,
    pageSize: 6
  },
};

export const IssuerProfile: Story = {
  args: {
    profile: mockProfiles.manus,
    badges: mockProfiles.manus.badges,
    loading: false,
    badgesLayout: 'grid',
    badgesInteractive: true,
    showPagination: false,
    pageSize: 6
  },
};

export const WithListLayout: Story = {
  args: {
    profile: mockProfiles.alice,
    badges: mockProfiles.alice.badges,
    loading: false,
    badgesLayout: 'list',
    badgesInteractive: true,
    showPagination: false,
    pageSize: 6
  },
};

export const WithPagination: Story = {
  args: {
    profile: mockProfiles.alice,
    badges: mockProfiles.alice.badges,
    loading: false,
    badgesLayout: 'grid',
    badgesInteractive: true,
    showPagination: true,
    pageSize: 2
  },
};

export const Loading: Story = {
  args: {
    profile: mockProfiles.alice,
    badges: [],
    loading: true,
    badgesLayout: 'grid',
    badgesInteractive: true,
    showPagination: false,
    pageSize: 6
  },
};
