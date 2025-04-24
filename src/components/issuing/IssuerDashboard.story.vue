<script setup lang="ts">
import { ref } from 'vue'
import IssuerDashboard from './IssuerDashboard.vue'
import { mockAssertions } from '../../services/mockData'

const state = ref({
  issuerProfile: {
    id: 'https://example.org/issuer',
    name: 'Rollercoaster.dev',
    url: 'https://example.org',
    email: 'badges@example.org',
    image: 'https://ui-avatars.com/api/?name=Manus+AI&background=0D8ABC&color=fff'
  },
  initialBadges: mockAssertions,
  loading: false
})

function onBadgeIssued(assertion) {
  console.log('Badge issued:', assertion)
}

function onBadgeClick(badge) {
  console.log('Badge clicked:', badge)
}
</script>

<template>
  <Story title="Components/Issuing/IssuerDashboard" :layout="{ type: 'single', iframe: true }">
    <template #controls>
      <HstCheckbox v-model="state.loading" title="Loading" />
    </template>

    <Variant title="Default">
      <IssuerDashboard
        :issuer-profile="state.issuerProfile"
        :initial-badges="state.initialBadges"
        :loading="state.loading"
        @badge-issued="onBadgeIssued"
        @badge-click="onBadgeClick"
      />
    </Variant>

    <Variant title="Empty Badges">
      <IssuerDashboard
        :issuer-profile="state.issuerProfile"
        :initial-badges="[]"
        :loading="state.loading"
        @badge-issued="onBadgeIssued"
        @badge-click="onBadgeClick"
      />
    </Variant>
  </Story>
</template>
