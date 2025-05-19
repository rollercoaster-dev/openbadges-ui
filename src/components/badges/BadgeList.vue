<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import type { OB2, OB3 } from '@/types';
import { BadgeService } from '@services/BadgeService';
import BadgeDisplay from '@components/badges/BadgeDisplay.vue';

interface Props {
  badges: (OB2.Assertion | OB3.VerifiableCredential)[];
  layout?: 'grid' | 'list';
  interactive?: boolean;
  loading?: boolean;
  pageSize?: number;
  currentPage?: number;
  showPagination?: boolean;
  ariaLabel?: string;
}

const props = withDefaults(defineProps<Props>(), {
  layout: 'grid',
  interactive: true,
  loading: false,
  pageSize: 9,
  currentPage: 1,
  showPagination: false,
  ariaLabel: 'List of badges',
});

const emit = defineEmits<{
  (e: 'badge-click', badge: OB2.Assertion | OB3.VerifiableCredential): void;
  (e: 'page-change', page: number): void;
}>();

// Internal state for pagination
const internalCurrentPage = ref(props.currentPage);

// Watch for external currentPage changes
watch(
  () => props.currentPage,
  (newPage) => {
    internalCurrentPage.value = newPage;
  }
);

// Compute total pages based on badges length and page size
const totalPages = computed(() => {
  return Math.ceil(props.badges.length / props.pageSize);
});

// Get current page of badges
const paginatedBadges = computed(() => {
  if (!props.showPagination) {
    return props.badges;
  }

  const start = (internalCurrentPage.value - 1) * props.pageSize;
  const end = start + props.pageSize;
  return props.badges.slice(start, end);
});

// Normalize badges for display
const normalizedBadges = computed(() => {
  return paginatedBadges.value.map((badge) => ({
    original: badge,
    ...BadgeService.normalizeBadge(badge),
  }));
});

// Handle badge click
const handleBadgeClick = (badge: OB2.Assertion | OB3.VerifiableCredential) => {
  emit('badge-click', badge);
};

// Handle page change
const handlePageChange = (page: number) => {
  if (page < 1 || page > totalPages.value) {
    return;
  }

  internalCurrentPage.value = page;
  emit('page-change', page);
};
</script>

<template>
  <div class="manus-badge-list" :class="{ 'grid-layout': layout === 'grid' }">
    <div v-if="loading" class="manus-badge-list-loading" role="status" aria-live="polite">
      <span>Loading badges...</span>
    </div>

    <div v-else-if="normalizedBadges.length === 0" class="manus-badge-list-empty" role="status">
      <slot name="empty">
        <p>No badges found.</p>
      </slot>
    </div>

    <ul v-else class="manus-badge-list-items" :aria-label="ariaLabel">
      <li v-for="badge in normalizedBadges" :key="badge.id" class="manus-badge-list-item">
        <slot name="badge" :badge="badge.original" :normalized="badge">
          <BadgeDisplay
            :badge="badge.original"
            :interactive="interactive"
            @click="handleBadgeClick(badge.original)"
          />
        </slot>
      </li>
    </ul>

    <div v-if="showPagination && totalPages > 1" class="manus-badge-list-pagination">
      <button
        class="manus-pagination-button"
        :disabled="currentPage === 1"
        aria-label="Previous page"
        @click="handlePageChange(currentPage - 1)"
      >
        Previous
      </button>

      <span class="manus-pagination-info"> Page {{ currentPage }} of {{ totalPages }} </span>

      <button
        class="manus-pagination-button"
        :disabled="currentPage === totalPages"
        aria-label="Next page"
        @click="handlePageChange(currentPage + 1)"
      >
        Next
      </button>
    </div>
  </div>
</template>

<style>
.manus-badge-list {
  --badge-list-gap: 16px;
  --badge-list-empty-color: #718096;
  --badge-list-pagination-gap: 8px;
  --badge-list-button-bg: #e2e8f0;
  --badge-list-button-color: #4a5568;
  --badge-list-button-hover-bg: #cbd5e0;
  --badge-list-button-disabled-bg: #edf2f7;
  --badge-list-button-disabled-color: #a0aec0;

  display: flex;
  flex-direction: column;
  gap: 24px;
}

.manus-badge-list-loading,
.manus-badge-list-empty {
  padding: 24px;
  text-align: center;
  color: var(--badge-list-empty-color);
}

.manus-badge-list-items {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--badge-list-gap);
}

.manus-badge-list.grid-layout .manus-badge-list-items {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--badge-list-gap);
}

.manus-badge-list-pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--badge-list-pagination-gap);
  margin-top: 16px;
}

.manus-pagination-button {
  padding: 8px 16px;
  background-color: var(--badge-list-button-bg);
  color: var(--badge-list-button-color);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.875rem;
}

.manus-pagination-button:hover:not(:disabled) {
  background-color: var(--badge-list-button-hover-bg);
}

.manus-pagination-button:disabled {
  background-color: var(--badge-list-button-disabled-bg);
  color: var(--badge-list-button-disabled-color);
  cursor: not-allowed;
}

.manus-pagination-info {
  font-size: 0.875rem;
  color: var(--badge-list-button-color);
}

/* Responsive adjustments */
@media (max-width: 639px) {
  .manus-badge-list.grid-layout .manus-badge-list-items {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 640px) and (max-width: 1023px) {
  .manus-badge-list.grid-layout .manus-badge-list-items {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
}
</style>
