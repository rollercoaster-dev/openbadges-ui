<script setup lang="ts">
import { ref } from 'vue'
import BadgeVerification from './BadgeVerification.vue'
import { mockAssertions, mockOB3Credential } from '../../services/mockData'

const state = ref({
  badge: mockAssertions[0],
  showStatus: true,
  showDetails: true,
  showLastVerified: true,
  autoVerify: false
})

// Create a badge with expiration
const expiredBadge = {
  ...mockAssertions[0],
  expires: '2020-01-01T00:00:00Z' // Past date
}

// Create a badge with revocation
const revokedBadge = {
  ...mockAssertions[0],
  revoked: true,
  revocationReason: 'Badge was issued in error'
}

function onVerified(isValid) {
  console.log('Badge verified:', isValid)
}
</script>

<template>
  <Story title="Components/Badges/BadgeVerification">
    <template #controls>
      <HstCheckbox v-model="state.showStatus" title="Show Status" />
      <HstCheckbox v-model="state.showDetails" title="Show Details" />
      <HstCheckbox v-model="state.showLastVerified" title="Show Last Verified" />
      <HstCheckbox v-model="state.autoVerify" title="Auto Verify" />
    </template>

    <Variant title="Default">
      <BadgeVerification
        :badge="state.badge"
        :show-status="state.showStatus"
        :show-details="state.showDetails"
        :show-last-verified="state.showLastVerified"
        :auto-verify="state.autoVerify"
        @verified="onVerified"
      />
    </Variant>

    <Variant title="Expired Badge">
      <BadgeVerification
        :badge="expiredBadge"
        :show-status="state.showStatus"
        :show-details="state.showDetails"
        :show-last-verified="state.showLastVerified"
        :auto-verify="state.autoVerify"
        @verified="onVerified"
      />
    </Variant>

    <Variant title="Revoked Badge">
      <BadgeVerification
        :badge="revokedBadge"
        :show-status="state.showStatus"
        :show-details="state.showDetails"
        :show-last-verified="state.showLastVerified"
        :auto-verify="state.autoVerify"
        @verified="onVerified"
      />
    </Variant>

    <Variant title="OB3 Badge">
      <BadgeVerification
        :badge="mockOB3Credential"
        :show-status="state.showStatus"
        :show-details="state.showDetails"
        :show-last-verified="state.showLastVerified"
        :auto-verify="state.autoVerify"
        @verified="onVerified"
      />
    </Variant>
  </Story>
</template>
