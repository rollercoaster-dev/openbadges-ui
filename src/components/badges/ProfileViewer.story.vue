<script setup lang="ts">
import { ref } from 'vue'
import ProfileViewer from './ProfileViewer.vue'
import { mockProfiles } from '../../services/mockData'

const state = ref({
  profile: mockProfiles.alice,
  badges: mockProfiles.alice.badges,
  loading: false,
  badgesLayout: 'grid',
  badgesInteractive: true,
  showPagination: false,
  pageSize: 6
})

function onBadgeClick(badge) {
  console.log('Badge clicked:', badge)
}
</script>

<template>
  <Story title="Components/Badges/ProfileViewer" :layout="{ type: 'single', iframe: true }">
    <template #controls>
      <HstSelect v-model="state.badgesLayout" title="Badges Layout">
        <option value="grid">Grid</option>
        <option value="list">List</option>
      </HstSelect>
      <HstCheckbox v-model="state.badgesInteractive" title="Badges Interactive" />
      <HstCheckbox v-model="state.loading" title="Loading" />
      <HstCheckbox v-model="state.showPagination" title="Show Pagination" />
      <HstNumber v-model="state.pageSize" title="Page Size" />
    </template>

    <Variant title="Recipient Profile">
      <ProfileViewer
        :profile="mockProfiles.alice"
        :badges="mockProfiles.alice.badges"
        :loading="state.loading"
        :badges-layout="state.badgesLayout"
        :badges-interactive="state.badgesInteractive"
        :show-pagination="state.showPagination"
        :page-size="state.pageSize"
        @badge-click="onBadgeClick"
      />
    </Variant>

    <Variant title="Issuer Profile">
      <ProfileViewer
        :profile="mockProfiles.manus"
        :badges="mockProfiles.manus.badges"
        :loading="state.loading"
        :badges-layout="state.badgesLayout"
        :badges-interactive="state.badgesInteractive"
        :show-pagination="state.showPagination"
        :page-size="state.pageSize"
        @badge-click="onBadgeClick"
      />
    </Variant>

    <Variant title="With List Layout">
      <ProfileViewer
        :profile="mockProfiles.alice"
        :badges="mockProfiles.alice.badges"
        :loading="state.loading"
        badges-layout="list"
        :badges-interactive="state.badgesInteractive"
        :show-pagination="state.showPagination"
        :page-size="state.pageSize"
        @badge-click="onBadgeClick"
      />
    </Variant>

    <Variant title="With Pagination">
      <ProfileViewer
        :profile="mockProfiles.alice"
        :badges="mockProfiles.alice.badges"
        :loading="state.loading"
        :badges-layout="state.badgesLayout"
        :badges-interactive="state.badgesInteractive"
        show-pagination
        :page-size="2"
        @badge-click="onBadgeClick"
      />
    </Variant>

    <Variant title="Loading">
      <ProfileViewer
        :profile="mockProfiles.alice"
        :badges="[]"
        loading
        :badges-layout="state.badgesLayout"
        :badges-interactive="state.badgesInteractive"
        :show-pagination="state.showPagination"
        :page-size="state.pageSize"
        @badge-click="onBadgeClick"
      />
    </Variant>
  </Story>
</template>
