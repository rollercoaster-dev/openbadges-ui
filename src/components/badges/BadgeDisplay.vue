<script setup lang="ts">
import { computed } from 'vue';
import type { OB2, OB3 } from 'openbadges-types';
import { BadgeService } from '../../services/BadgeService';

interface Props {
  badge: OB2.Assertion | OB3.VerifiableCredential;
  showDescription?: boolean;
  showIssuedDate?: boolean;
  showExpiryDate?: boolean;
  interactive?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  showDescription: true,
  showIssuedDate: true,
  showExpiryDate: false,
  interactive: false
});

const emit = defineEmits<{
  (e: 'click', badge: OB2.Assertion | OB3.VerifiableCredential): void;
}>();

// Normalize the badge for display
const normalizedBadge = computed(() => {
  return BadgeService.normalizeBadge(props.badge);
});

// Format date for display
const formatDate = (dateString: string): string => {
  try {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  } catch (e) {
    return dateString;
  }
};

// Generate accessible alt text for badge image
const generateAltText = (badgeName: string): string => {
  return `Badge: ${badgeName}`;
};

// Handle click events when badge is interactive
const handleClick = () => {
  if (props.interactive) {
    emit('click', props.badge);
  }
};
</script>

<template>
  <div 
    class="manus-badge-display"
    :class="{ 'is-interactive': interactive }"
    :tabindex="interactive ? 0 : undefined"
    @click="handleClick"
    @keydown.enter="handleClick"
  >
    <div class="manus-badge-image">
      <img 
        :src="normalizedBadge.image" 
        :alt="generateAltText(normalizedBadge.name)"
        class="manus-badge-img"
      >
    </div>
    <div class="manus-badge-content">
      <h3 class="manus-badge-title">
        {{ normalizedBadge.name }}
      </h3>
      <p
        v-if="showDescription"
        class="manus-badge-description"
      >
        {{ normalizedBadge.description }}
      </p>
      <div class="manus-badge-issuer">
        <span>Issued by: {{ normalizedBadge.issuer.name }}</span>
      </div>
      <div
        v-if="showIssuedDate"
        class="manus-badge-date"
      >
        <span>Issued: {{ formatDate(normalizedBadge.issuedOn) }}</span>
      </div>
      <div
        v-if="showExpiryDate && normalizedBadge.expires"
        class="manus-badge-expiry"
      >
        <span>Expires: {{ formatDate(normalizedBadge.expires) }}</span>
      </div>
      <slot name="badge-actions" />
    </div>
  </div>
</template>

<style>
.manus-badge-display {
  --badge-border-color: #e2e8f0;
  --badge-border-radius: 8px;
  --badge-padding: 16px;
  --badge-background: #ffffff;
  --badge-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  --badge-title-color: #1a202c;
  --badge-text-color: #4a5568;
  --badge-hover-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  --badge-focus-outline-color: #3182ce;
  
  display: flex;
  flex-direction: column;
  border: 1px solid var(--badge-border-color);
  border-radius: var(--badge-border-radius);
  padding: var(--badge-padding);
  background-color: var(--badge-background);
  box-shadow: var(--badge-shadow);
  transition: box-shadow 0.2s ease;
  max-width: 300px;
}

.manus-badge-display.is-interactive {
  cursor: pointer;
}

.manus-badge-display.is-interactive:hover {
  box-shadow: var(--badge-hover-shadow);
}

.manus-badge-display.is-interactive:focus {
  outline: 2px solid var(--badge-focus-outline-color);
  outline-offset: 2px;
}

.manus-badge-image {
  display: flex;
  justify-content: center;
  margin-bottom: 12px;
}

.manus-badge-img {
  max-width: 100%;
  height: auto;
  max-height: 150px;
  border-radius: 4px;
}

.manus-badge-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.manus-badge-title {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--badge-title-color);
}

.manus-badge-description {
  margin: 0;
  font-size: 0.875rem;
  color: var(--badge-text-color);
  line-height: 1.4;
}

.manus-badge-issuer,
.manus-badge-date,
.manus-badge-expiry {
  font-size: 0.75rem;
  color: var(--badge-text-color);
}

/* Responsive adjustments */
@media (min-width: 640px) {
  .manus-badge-display {
    flex-direction: row;
    max-width: 500px;
  }
  
  .manus-badge-image {
    flex: 0 0 120px;
    margin-right: 16px;
    margin-bottom: 0;
  }
  
  .manus-badge-content {
    flex: 1;
  }
}
</style>
