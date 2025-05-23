<script setup lang="ts">
import { ref, computed, watch } from 'vue';

/**
 * Props for the ThemeSelector component
 */
interface ThemeSelectorProps {
  /**
   * The currently selected theme
   * @default 'default'
   */
  modelValue?: string;

  /**
   * The available theme options to display
   * @default all themes
   */
  availableThemes?: Array<{
    id: string;
    name: string;
    description?: string;
    className: string;
  }>;

  /**
   * The label for the theme selector
   * @default 'Theme'
   */
  themeLabel?: string;
}

const props = withDefaults(defineProps<ThemeSelectorProps>(), {
  modelValue: 'default',
  themeLabel: 'Theme',
  availableThemes: () => [
    {
      id: 'default',
      name: 'Default Theme',
      description: 'Standard theme with balanced colors and spacing',
      className: 'ob-default-theme',
    },
    {
      id: 'dyslexia',
      name: 'Dyslexia-Friendly',
      description: 'Optimized for readers with dyslexia, with improved spacing and readability',
      className: 'ob-dyslexia-friendly-theme',
    },
    {
      id: 'low-vision',
      name: 'Low Vision',
      description: 'High contrast theme with larger text for low vision users',
      className: 'ob-low-vision-theme',
    },
    {
      id: 'low-info',
      name: 'Low Information Density',
      description: 'Reduced visual complexity for easier focus',
      className: 'ob-low-info-theme',
    },
    {
      id: 'autism',
      name: 'Autism-Friendly',
      description: 'Predictable layouts with reduced sensory stimulation',
      className: 'ob-autism-friendly-theme',
    },
    {
      id: 'dark',
      name: 'Dark Theme',
      description: 'Reduced light emission for comfortable viewing in low light',
      className: 'ob-dark-theme',
    },
    {
      id: 'high-contrast',
      name: 'High Contrast',
      description: 'Maximum contrast for better visibility',
      className: 'ob-high-contrast-theme',
    },
  ],
});

/**
 * Emits for the ThemeSelector component
 */
const emit = defineEmits<{
  /**
   * Emitted when the selected theme changes
   * @param value The new theme value
   */
  (e: 'update:modelValue', value: string): void;
}>();

// Internal state
const selectedTheme = ref(props.modelValue);

// Computed properties
const currentThemeClass = computed(() => {
  const theme = props.availableThemes.find((t) => t.id === selectedTheme.value);
  return theme ? theme.className : 'ob-default-theme';
});

const currentThemeDescription = computed(() => {
  const theme = props.availableThemes.find((t) => t.id === selectedTheme.value);
  return theme?.description || '';
});

// Watch for changes in props
watch(
  () => props.modelValue,
  (newValue) => {
    selectedTheme.value = newValue;
  }
);

// Methods
const handleThemeChange = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  selectedTheme.value = target.value;
  emit('update:modelValue', target.value);
};
</script>

<template>
  <div class="ob-theme-selector">
    <div class="ob-theme-selector-group">
      <label
        :for="'ob-theme-select'"
        class="ob-theme-selector-label"
      >{{ themeLabel }}</label>
      <select
        :id="'ob-theme-select'"
        class="ob-theme-selector-select"
        :value="selectedTheme"
        @change="handleThemeChange"
      >
        <option
          v-for="theme in availableThemes"
          :key="theme.id"
          :value="theme.id"
        >
          {{ theme.name }}
        </option>
      </select>
      <p
        v-if="currentThemeDescription"
        class="ob-theme-selector-description"
      >
        {{ currentThemeDescription }}
      </p>
    </div>

    <div
      class="ob-theme-selector-preview"
      :class="currentThemeClass"
    >
      <div class="ob-theme-preview-header">
        Theme Preview
      </div>
      <div class="ob-theme-preview-content">
        <div class="ob-theme-preview-text">
          <h3 class="ob-theme-preview-title">
            Sample Badge
          </h3>
          <p class="ob-theme-preview-description">
            This is how content will appear with this theme.
          </p>
        </div>
        <div class="ob-theme-preview-button">
          View
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.ob-theme-selector {
  display: flex;
  flex-direction: column;
  gap: var(--ob-space-4, 1rem);
  padding: var(--ob-space-4, 1rem);
  border: 1px solid var(--ob-border-color, #e2e8f0);
  border-radius: var(--ob-border-radius-md, 4px);
  background-color: var(--ob-bg-secondary, #f8f9fa);
}

.ob-theme-selector-group {
  display: flex;
  flex-direction: column;
  gap: var(--ob-space-2, 0.5rem);
}

.ob-theme-selector-label {
  font-weight: var(--ob-font-weight-medium, 500);
  color: var(--ob-text-primary, #1a202c);
}

.ob-theme-selector-select {
  padding: var(--ob-space-2, 0.5rem);
  border: 1px solid var(--ob-border-color, #e2e8f0);
  border-radius: var(--ob-border-radius-md, 4px);
  background-color: var(--ob-bg-primary, #ffffff);
  min-height: 44px; /* Minimum touch target size */
}

.ob-theme-selector-description {
  font-size: var(--ob-font-size-sm, 0.875rem);
  color: var(--ob-text-secondary, #4a5568);
  margin: 0;
}

.ob-theme-selector-preview {
  margin-top: var(--ob-space-2, 0.5rem);
  border: 1px solid var(--ob-border-color, #e2e8f0);
  border-radius: var(--ob-border-radius-md, 4px);
  overflow: hidden;
}

.ob-theme-preview-header {
  padding: var(--ob-space-2, 0.5rem) var(--ob-space-4, 1rem);
  background-color: var(--ob-primary, #3182ce);
  color: white;
  font-weight: var(--ob-font-weight-medium, 500);
}

.ob-theme-preview-content {
  padding: var(--ob-space-4, 1rem);
  background-color: var(--ob-bg-primary, #ffffff);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.ob-theme-preview-title {
  margin: 0 0 var(--ob-space-2, 0.5rem) 0;
  font-size: var(--ob-font-size-md, 1rem);
  color: var(--ob-text-primary, #1a202c);
}

.ob-theme-preview-description {
  margin: 0;
  font-size: var(--ob-font-size-sm, 0.875rem);
  color: var(--ob-text-secondary, #4a5568);
}

.ob-theme-preview-button {
  padding: var(--ob-space-2, 0.5rem) var(--ob-space-4, 1rem);
  background-color: var(--ob-primary, #3182ce);
  color: white;
  border-radius: var(--ob-border-radius-md, 4px);
  font-weight: var(--ob-font-weight-medium, 500);
  cursor: pointer;
}
</style>
