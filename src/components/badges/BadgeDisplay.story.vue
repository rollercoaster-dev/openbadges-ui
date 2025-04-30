<script setup lang="ts">
import { ref } from 'vue'
import BadgeDisplay from './BadgeDisplay.vue'
import { mockAssertions, mockOB3Credential } from '../../services/mockData'

const state = ref({
  badge: mockAssertions[0],
  showDescription: true,
  showIssuedDate: true,
  showExpiryDate: false,
  interactive: false,
  showVerification: false,
  autoVerify: false
})

const badgeWithExpiry = {
  ...mockAssertions[0],
  expires: '2026-01-15T12:00:00Z'
}

function onBadgeClick(badge) {
  console.log('Badge clicked:', badge)
}

function onVerified(isValid) {
  console.log('Badge verified:', isValid)
}
</script>

<template>
  <Story title="Components/Badges/BadgeDisplay">
    <template #controls>
      <HstCheckbox v-model="state.showDescription" title="Show Description" />
      <HstCheckbox v-model="state.showIssuedDate" title="Show Issued Date" />
      <HstCheckbox v-model="state.showExpiryDate" title="Show Expiry Date" />
      <HstCheckbox v-model="state.interactive" title="Interactive" />
      <HstCheckbox v-model="state.showVerification" title="Show Verification" />
      <HstCheckbox v-model="state.autoVerify" title="Auto Verify" />
    </template>

    <Variant title="Default">
      <BadgeDisplay
        :badge="state.badge"
        :show-description="state.showDescription"
        :show-issued-date="state.showIssuedDate"
        :show-expiry-date="state.showExpiryDate"
        :interactive="state.interactive"
        :show-verification="state.showVerification"
        :auto-verify="state.autoVerify"
        @click="onBadgeClick"
        @verified="onVerified"
      />
    </Variant>

    <Variant title="Interactive">
      <BadgeDisplay
        :badge="state.badge"
        :show-description="state.showDescription"
        :show-issued-date="state.showIssuedDate"
        :show-expiry-date="state.showExpiryDate"
        interactive
        :show-verification="state.showVerification"
        :auto-verify="state.autoVerify"
        @click="onBadgeClick"
        @verified="onVerified"
      />
    </Variant>

    <Variant title="Without Description">
      <BadgeDisplay
        :badge="state.badge"
        :show-description="false"
        :show-issued-date="state.showIssuedDate"
        :show-expiry-date="state.showExpiryDate"
        :interactive="state.interactive"
        :show-verification="state.showVerification"
        :auto-verify="state.autoVerify"
        @click="onBadgeClick"
        @verified="onVerified"
      />
    </Variant>

    <Variant title="With Expiry Date">
      <BadgeDisplay
        :badge="badgeWithExpiry"
        :show-description="state.showDescription"
        :show-issued-date="state.showIssuedDate"
        show-expiry-date
        :interactive="state.interactive"
        :show-verification="state.showVerification"
        :auto-verify="state.autoVerify"
        @click="onBadgeClick"
        @verified="onVerified"
      />
    </Variant>

    <Variant title="OB3 Format">
      <BadgeDisplay
        :badge="mockOB3Credential"
        :show-description="state.showDescription"
        :show-issued-date="state.showIssuedDate"
        :show-expiry-date="state.showExpiryDate"
        :interactive="state.interactive"
        :show-verification="state.showVerification"
        :auto-verify="state.autoVerify"
        @click="onBadgeClick"
        @verified="onVerified"
      />
    </Variant>
  </Story>
</template>
