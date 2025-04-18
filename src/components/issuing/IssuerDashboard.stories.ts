// src/components/issuing/IssuerDashboard.stories.ts
import type { Meta, StoryObj } from '@storybook/vue3';
import IssuerDashboard from './IssuerDashboard.vue';
import { mockAssertions } from '../../services/mockData';

const meta: Meta = {
  title: 'Components/Issuing/IssuerDashboard',
  component: IssuerDashboard,
  tags: ['autodocs'],
  argTypes: {
    issuerProfile: { control: 'object' },
    initialBadges: { control: 'object' },
    loading: { control: 'boolean' },
    onBadgeIssued: { action: 'badge-issued' },
    onBadgeClick: { action: 'badge-click' }
  },
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof IssuerDashboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    issuerProfile: {
      id: 'https://example.org/issuer',
      name: 'Manus AI Academy',
      url: 'https://example.org',
      email: 'badges@example.org',
      image: 'https://ui-avatars.com/api/?name=Manus+AI&background=0D8ABC&color=fff'
    },
    initialBadges: mockAssertions,
    loading: false
  },
};

export const EmptyBadges: Story = {
  args: {
    issuerProfile: {
      id: 'https://example.org/issuer',
      name: 'Manus AI Academy',
      url: 'https://example.org',
      email: 'badges@example.org',
      image: 'https://ui-avatars.com/api/?name=Manus+AI&background=0D8ABC&color=fff'
    },
    initialBadges: [],
    loading: false
  },
};

export const Loading: Story = {
  args: {
    issuerProfile: {
      id: 'https://example.org/issuer',
      name: 'Manus AI Academy',
      url: 'https://example.org',
      email: 'badges@example.org',
      image: 'https://ui-avatars.com/api/?name=Manus+AI&background=0D8ABC&color=fff'
    },
    initialBadges: [],
    loading: true
  },
};

export const NoIssuerProfile: Story = {
  args: {
    issuerProfile: undefined,
    initialBadges: mockAssertions,
    loading: false
  },
  parameters: {
    docs: {
      description: {
        story: 'When no issuer profile is provided, the dashboard will use a default profile.'
      }
    }
  }
};
