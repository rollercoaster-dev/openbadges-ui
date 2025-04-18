// src/components/issuing/BadgeIssuerForm.stories.ts
import type { Meta, StoryObj } from '@storybook/vue3';
import BadgeIssuerForm from './BadgeIssuerForm.vue';
import { mockBadgeClasses } from '../../services/mockData';

const meta: Meta = {
  title: 'Components/Issuing/BadgeIssuerForm',
  component: BadgeIssuerForm,
  tags: ['autodocs'],
  argTypes: {
    initialBadgeClass: { control: 'object' },
    initialRecipientEmail: { control: 'text' },
    onBadgeIssued: { action: 'badge-issued' },
    onReset: { action: 'reset' }
  },
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof BadgeIssuerForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    initialBadgeClass: {},
    initialRecipientEmail: ''
  },
};

export const Prefilled: Story = {
  args: {
    initialBadgeClass: {
      ...mockBadgeClasses[0],
      name: 'Programming Excellence',
      description: 'Awarded for demonstrating exceptional programming skills',
      issuer: {
        id: 'https://example.org/issuer',
        type: 'Profile',
        name: 'Manus AI Academy'
      }
    },
    initialRecipientEmail: 'recipient@example.org'
  },
};

export const WithValidationErrors: Story = {
  args: {
    initialBadgeClass: {
      name: '', // Empty name to trigger validation error
      description: 'This badge will show validation errors',
      issuer: {
        id: 'https://example.org/issuer',
        type: 'Profile',
        name: 'Manus AI Academy'
      }
    },
    initialRecipientEmail: 'invalid-email' // Invalid email to trigger validation error
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates the form with validation errors.'
      }
    }
  }
};
