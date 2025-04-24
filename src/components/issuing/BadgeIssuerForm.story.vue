<script setup lang="ts">
import { ref } from 'vue'
import BadgeIssuerForm from './BadgeIssuerForm.vue'
import { mockBadgeClasses } from '../../services/mockData'

const state = ref({
  initialBadgeClass: {},
  initialRecipientEmail: ''
})

const prefilledState = {
  initialBadgeClass: {
    ...mockBadgeClasses[0],
    name: 'Programming Excellence',
    description: 'Awarded for demonstrating exceptional programming skills',
    issuer: {
      id: 'https://example.org/issuer',
      type: 'Profile',
      name: 'Rollercoaster.dev'
    }
  },
  initialRecipientEmail: 'recipient@example.org'
}

const validationErrorState = {
  initialBadgeClass: {
    name: '', // Empty name to trigger validation error
    description: 'This badge will show validation errors',
    issuer: {
      id: 'https://example.org/issuer',
      type: 'Profile',
      name: 'Rollercoaster.dev'
    }
  },
  initialRecipientEmail: 'invalid-email' // Invalid email to trigger validation error
}

function onBadgeIssued(assertion) {
  console.log('Badge issued:', assertion)
}

function onReset() {
  console.log('Form reset')
}
</script>

<template>
  <Story title="Components/Issuing/BadgeIssuerForm" :layout="{ type: 'single', iframe: true }">
    <Variant title="Empty">
      <BadgeIssuerForm
        :initial-badge-class="state.initialBadgeClass"
        :initial-recipient-email="state.initialRecipientEmail"
        @badge-issued="onBadgeIssued"
        @reset="onReset"
      />
    </Variant>

    <Variant title="Prefilled">
      <BadgeIssuerForm
        :initial-badge-class="prefilledState.initialBadgeClass"
        :initial-recipient-email="prefilledState.initialRecipientEmail"
        @badge-issued="onBadgeIssued"
        @reset="onReset"
      />
    </Variant>

    <Variant title="With Validation Errors">
      <div class="story-description">
        This story demonstrates the form with validation errors.
      </div>
      <BadgeIssuerForm
        :initial-badge-class="validationErrorState.initialBadgeClass"
        :initial-recipient-email="validationErrorState.initialRecipientEmail"
        @badge-issued="onBadgeIssued"
        @reset="onReset"
      />
    </Variant>
  </Story>
</template>

<style>
.story-description {
  margin-bottom: 1rem;
  padding: 0.5rem;
  background-color: #f0f0f0;
  border-radius: 4px;
}
</style>
