<script setup lang="ts">
import { ref } from 'vue'
import BadgeList from './BadgeList.vue'
import { mockAssertions } from '../../services/mockData'

const state = ref({
  badges: mockAssertions,
  layout: 'grid',
  interactive: true,
  loading: false,
  pageSize: 9,
  currentPage: 1,
  showPagination: false,
  ariaLabel: 'List of badges'
})

function onBadgeClick(badge) {
  console.log('Badge clicked:', badge)
}

function onPageChange(page) {
  console.log('Page changed:', page)
  state.value.currentPage = page
}
</script>

<template>
  <Story title="Components/Badges/BadgeList" :layout="{ type: 'single', iframe: true }">
    <template #controls>
      <HstSelect v-model="state.layout" title="Layout">
        <option value="grid">Grid</option>
        <option value="list">List</option>
      </HstSelect>
      <HstCheckbox v-model="state.interactive" title="Interactive" />
      <HstCheckbox v-model="state.loading" title="Loading" />
      <HstCheckbox v-model="state.showPagination" title="Show Pagination" />
      <HstNumber v-model="state.pageSize" title="Page Size" />
      <HstNumber v-model="state.currentPage" title="Current Page" />
      <HstText v-model="state.ariaLabel" title="Aria Label" />
    </template>

    <Variant title="Grid Layout">
      <BadgeList
        :badges="state.badges"
        layout="grid"
        :interactive="state.interactive"
        :loading="state.loading"
        :page-size="state.pageSize"
        :current-page="state.currentPage"
        :show-pagination="state.showPagination"
        :aria-label="state.ariaLabel"
        @badge-click="onBadgeClick"
        @page-change="onPageChange"
      />
    </Variant>

    <Variant title="List Layout">
      <BadgeList
        :badges="state.badges"
        layout="list"
        :interactive="state.interactive"
        :loading="state.loading"
        :page-size="state.pageSize"
        :current-page="state.currentPage"
        :show-pagination="state.showPagination"
        :aria-label="state.ariaLabel"
        @badge-click="onBadgeClick"
        @page-change="onPageChange"
      />
    </Variant>

    <Variant title="With Pagination">
      <BadgeList
        :badges="state.badges"
        :layout="state.layout"
        :interactive="state.interactive"
        :loading="state.loading"
        :page-size="2"
        :current-page="state.currentPage"
        show-pagination
        :aria-label="state.ariaLabel"
        @badge-click="onBadgeClick"
        @page-change="onPageChange"
      />
    </Variant>

    <Variant title="Loading">
      <BadgeList
        :badges="[]"
        :layout="state.layout"
        :interactive="state.interactive"
        loading
        :page-size="state.pageSize"
        :current-page="state.currentPage"
        :show-pagination="state.showPagination"
        :aria-label="state.ariaLabel"
        @badge-click="onBadgeClick"
        @page-change="onPageChange"
      />
    </Variant>

    <Variant title="Empty">
      <BadgeList
        :badges="[]"
        :layout="state.layout"
        :interactive="state.interactive"
        :loading="false"
        :page-size="state.pageSize"
        :current-page="state.currentPage"
        :show-pagination="state.showPagination"
        :aria-label="state.ariaLabel"
        @badge-click="onBadgeClick"
        @page-change="onPageChange"
      />
    </Variant>
  </Story>
</template>
