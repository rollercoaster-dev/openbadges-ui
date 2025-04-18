// src/components/badges/BadgeDisplay.stories.ts
import type { Meta, StoryObj } from '@storybook/vue3';
import BadgeDisplay from './BadgeDisplay.vue';
import { mockAssertions, mockOB3Credential } from '../../services/mockData';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta = {
  title: 'Components/Badges/BadgeDisplay',
  component: BadgeDisplay,
  tags: ['autodocs'],
  argTypes: {
    badge: { control: 'object' },
    showDescription: { control: 'boolean' },
    showIssuedDate: { control: 'boolean' },
    showExpiryDate: { control: 'boolean' },
    interactive: { control: 'boolean' },
    onClick: { action: 'clicked' }
  },
  parameters: {
    // Optional parameter to center the component in the Canvas
    layout: 'centered',
  },
} satisfies Meta<typeof BadgeDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    badge: mockAssertions[0],
    showDescription: true,
    showIssuedDate: true,
    showExpiryDate: false,
    interactive: false,
  },
};

export const Interactive: Story = {
  args: {
    badge: mockAssertions[0],
    showDescription: true,
    showIssuedDate: true,
    showExpiryDate: false,
    interactive: true,
  },
};

export const WithoutDescription: Story = {
  args: {
    badge: mockAssertions[0],
    showDescription: false,
    showIssuedDate: true,
    showExpiryDate: false,
    interactive: false,
  },
};

export const WithExpiryDate: Story = {
  args: {
    badge: {
      ...mockAssertions[0],
      expires: '2026-01-15T12:00:00Z'
    },
    showDescription: true,
    showIssuedDate: true,
    showExpiryDate: true,
    interactive: false,
  },
};

export const OB3Format: Story = {
  args: {
    badge: mockOB3Credential,
    showDescription: true,
    showIssuedDate: true,
    showExpiryDate: false,
    interactive: false,
  },
};
