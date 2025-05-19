import { aq as defineComponent, ar as ref, aE as computed, az as watch, at as openBlock, aA as createElementBlock, ax as createBaseVNode, aC as toDisplayString, aG as Fragment, aH as renderList, aD as createCommentVNode, aB as createStaticVNode, aF as normalizeClass } from "./vendor-0a8d26a3.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const ThemeSelector_vue_vue_type_style_index_0_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ThemeSelector",
  props: {
    modelValue: { type: String, required: false, default: "default" },
    availableThemes: { type: Array, required: false, default: () => [
      {
        id: "default",
        name: "Default Theme",
        description: "Standard theme with balanced colors and spacing",
        className: "ob-default-theme"
      },
      {
        id: "dyslexia",
        name: "Dyslexia-Friendly",
        description: "Optimized for readers with dyslexia, with improved spacing and readability",
        className: "ob-dyslexia-friendly-theme"
      },
      {
        id: "low-vision",
        name: "Low Vision",
        description: "High contrast theme with larger text for low vision users",
        className: "ob-low-vision-theme"
      },
      {
        id: "low-info",
        name: "Low Information Density",
        description: "Reduced visual complexity for easier focus",
        className: "ob-low-info-theme"
      },
      {
        id: "autism",
        name: "Autism-Friendly",
        description: "Predictable layouts with reduced sensory stimulation",
        className: "ob-autism-friendly-theme"
      },
      {
        id: "dark",
        name: "Dark Theme",
        description: "Reduced light emission for comfortable viewing in low light",
        className: "ob-dark-theme"
      },
      {
        id: "high-contrast",
        name: "High Contrast",
        description: "Maximum contrast for better visibility",
        className: "ob-high-contrast-theme"
      }
    ] },
    themeLabel: { type: String, required: false, default: "Theme" }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const selectedTheme = ref(props.modelValue);
    const currentThemeClass = computed(() => {
      const theme = props.availableThemes.find((t) => t.id === selectedTheme.value);
      return theme ? theme.className : "ob-default-theme";
    });
    const currentThemeDescription = computed(() => {
      const theme = props.availableThemes.find((t) => t.id === selectedTheme.value);
      return (theme == null ? void 0 : theme.description) || "";
    });
    watch(
      () => props.modelValue,
      (newValue) => {
        selectedTheme.value = newValue;
      }
    );
    const handleThemeChange = (event) => {
      const target = event.target;
      selectedTheme.value = target.value;
      emit("update:modelValue", target.value);
    };
    const __returned__ = { props, emit, selectedTheme, currentThemeClass, currentThemeDescription, handleThemeChange };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "ob-theme-selector" };
const _hoisted_2 = { class: "ob-theme-selector-group" };
const _hoisted_3 = {
  for: "ob-theme-select",
  class: "ob-theme-selector-label"
};
const _hoisted_4 = ["value"];
const _hoisted_5 = ["value"];
const _hoisted_6 = {
  key: 0,
  class: "ob-theme-selector-description"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode(
        "label",
        _hoisted_3,
        toDisplayString($props.themeLabel),
        1
        /* TEXT */
      ),
      createBaseVNode("select", {
        id: "ob-theme-select",
        class: "ob-theme-selector-select",
        value: $setup.selectedTheme,
        onChange: $setup.handleThemeChange
      }, [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList($props.availableThemes, (theme) => {
            return openBlock(), createElementBlock("option", {
              key: theme.id,
              value: theme.id
            }, toDisplayString(theme.name), 9, _hoisted_5);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ], 40, _hoisted_4),
      $setup.currentThemeDescription ? (openBlock(), createElementBlock(
        "p",
        _hoisted_6,
        toDisplayString($setup.currentThemeDescription),
        1
        /* TEXT */
      )) : createCommentVNode("v-if", true)
    ]),
    createBaseVNode(
      "div",
      {
        class: normalizeClass(["ob-theme-selector-preview", $setup.currentThemeClass])
      },
      _cache[0] || (_cache[0] = [
        createStaticVNode('<div class="ob-theme-preview-header"> Theme Preview </div><div class="ob-theme-preview-content"><div class="ob-theme-preview-text"><h3 class="ob-theme-preview-title"> Sample Badge </h3><p class="ob-theme-preview-description"> This is how content will appear with this theme. </p></div><div class="ob-theme-preview-button"> View </div></div>', 2)
      ]),
      2
      /* CLASS */
    )
  ]);
}
_sfc_main.__file = "src/components/accessibility/ThemeSelector.vue";
const ThemeSelector = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/openbadges-ui/openbadges-ui/src/components/accessibility/ThemeSelector.vue"]]);
export {
  ThemeSelector as T
};
//# sourceMappingURL=ThemeSelector-3b377edb.js.map
