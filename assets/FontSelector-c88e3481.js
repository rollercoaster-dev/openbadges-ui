import { aq as defineComponent, ar as ref, aE as computed, az as watch, at as openBlock, aA as createElementBlock, ax as createBaseVNode, aC as toDisplayString, aF as normalizeClass, aG as Fragment, aH as renderList, aD as createCommentVNode } from "./vendor-0a8d26a3.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const FontSelector_vue_vue_type_style_index_0_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FontSelector",
  props: {
    modelValue: { type: String, required: false, default: "system" },
    showFontSize: { type: Boolean, required: false, default: true },
    showTextSpacing: { type: Boolean, required: false, default: true },
    availableFonts: { type: Array, required: false, default: () => [
      {
        id: "system",
        name: "System Font",
        description: "Your device's default font",
        className: "ob-font-system"
      },
      {
        id: "atkinson",
        name: "Atkinson Hyperlegible",
        description: "Designed for low vision readers",
        className: "ob-font-accessible"
      },
      {
        id: "opendyslexic",
        name: "OpenDyslexic",
        description: "Designed for readers with dyslexia",
        className: "ob-font-dyslexic"
      },
      {
        id: "lexend",
        name: "Lexend",
        description: "Designed for improved reading fluency",
        className: "ob-font-readable"
      },
      {
        id: "inter",
        name: "Inter",
        description: "Modern, highly legible sans-serif",
        className: "ob-font-standard"
      }
    ] },
    fontLabel: { type: String, required: false, default: "Font Family" },
    fontSizeLabel: { type: String, required: false, default: "Font Size" },
    textSpacingLabel: { type: String, required: false, default: "Text Spacing" }
  },
  emits: ["update:modelValue", "fontSizeChange", "textSpacingChange"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const selectedFont = ref(props.modelValue);
    const selectedFontSize = ref("base");
    const enhancedSpacing = ref(false);
    const currentFontClass = computed(() => {
      const font = props.availableFonts.find((f) => f.id === selectedFont.value);
      return font ? font.className : "ob-font-system";
    });
    const currentFontSizeClass = computed(() => {
      switch (selectedFontSize.value) {
        case "large":
          return "ob-text-size-large";
        case "xl":
          return "ob-text-size-xl";
        default:
          return "ob-text-size-base";
      }
    });
    const spacingClass = computed(() => {
      return enhancedSpacing.value ? "ob-text-spacing-enhanced" : "";
    });
    watch(
      () => props.modelValue,
      (newValue) => {
        selectedFont.value = newValue;
      }
    );
    const handleFontChange = (event) => {
      const target = event.target;
      selectedFont.value = target.value;
      emit("update:modelValue", target.value);
    };
    const handleFontSizeChange = (event) => {
      const target = event.target;
      selectedFontSize.value = target.value;
      emit("fontSizeChange", target.value);
    };
    const handleSpacingChange = (event) => {
      const target = event.target;
      enhancedSpacing.value = target.checked;
      emit("textSpacingChange", target.checked);
    };
    const __returned__ = { props, emit, selectedFont, selectedFontSize, enhancedSpacing, currentFontClass, currentFontSizeClass, spacingClass, handleFontChange, handleFontSizeChange, handleSpacingChange };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "ob-font-selector" };
const _hoisted_2 = { class: "ob-font-selector-group" };
const _hoisted_3 = {
  for: "ob-font-family-select",
  class: "ob-font-selector-label"
};
const _hoisted_4 = ["value"];
const _hoisted_5 = ["value"];
const _hoisted_6 = {
  key: 0,
  class: "ob-font-selector-description"
};
const _hoisted_7 = {
  key: 0,
  class: "ob-font-selector-group"
};
const _hoisted_8 = {
  for: "ob-font-size-select",
  class: "ob-font-selector-label"
};
const _hoisted_9 = ["value"];
const _hoisted_10 = {
  key: 1,
  class: "ob-font-selector-group"
};
const _hoisted_11 = { class: "ob-font-selector-checkbox-group" };
const _hoisted_12 = ["checked"];
const _hoisted_13 = {
  for: "ob-text-spacing-checkbox",
  class: "ob-font-selector-checkbox-label"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _a, _b;
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode(
        "label",
        _hoisted_3,
        toDisplayString($props.fontLabel),
        1
        /* TEXT */
      ),
      createBaseVNode("select", {
        id: "ob-font-family-select",
        class: normalizeClass(["ob-font-selector-select", $setup.currentFontClass]),
        value: $setup.selectedFont,
        onChange: $setup.handleFontChange
      }, [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList($props.availableFonts, (font) => {
            return openBlock(), createElementBlock("option", {
              key: font.id,
              value: font.id,
              class: normalizeClass(font.className)
            }, toDisplayString(font.name), 11, _hoisted_5);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ], 42, _hoisted_4),
      $setup.selectedFont && ((_a = $props.availableFonts.find((f) => f.id === $setup.selectedFont)) == null ? void 0 : _a.description) ? (openBlock(), createElementBlock(
        "p",
        _hoisted_6,
        toDisplayString((_b = $props.availableFonts.find((f) => f.id === $setup.selectedFont)) == null ? void 0 : _b.description),
        1
        /* TEXT */
      )) : createCommentVNode("v-if", true)
    ]),
    $props.showFontSize ? (openBlock(), createElementBlock("div", _hoisted_7, [
      createBaseVNode(
        "label",
        _hoisted_8,
        toDisplayString($props.fontSizeLabel),
        1
        /* TEXT */
      ),
      createBaseVNode("select", {
        id: "ob-font-size-select",
        class: normalizeClass(["ob-font-selector-select", [$setup.currentFontClass, $setup.currentFontSizeClass]]),
        value: $setup.selectedFontSize,
        onChange: $setup.handleFontSizeChange
      }, _cache[0] || (_cache[0] = [
        createBaseVNode(
          "option",
          { value: "base" },
          " Normal ",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "option",
          { value: "large" },
          " Large ",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "option",
          { value: "xl" },
          " Extra Large ",
          -1
          /* HOISTED */
        )
      ]), 42, _hoisted_9)
    ])) : createCommentVNode("v-if", true),
    $props.showTextSpacing ? (openBlock(), createElementBlock("div", _hoisted_10, [
      createBaseVNode("div", _hoisted_11, [
        createBaseVNode("input", {
          id: "ob-text-spacing-checkbox",
          type: "checkbox",
          class: "ob-font-selector-checkbox",
          checked: $setup.enhancedSpacing,
          onChange: $setup.handleSpacingChange
        }, null, 40, _hoisted_12),
        createBaseVNode(
          "label",
          _hoisted_13,
          toDisplayString($props.textSpacingLabel),
          1
          /* TEXT */
        )
      ]),
      _cache[1] || (_cache[1] = createBaseVNode(
        "p",
        { class: "ob-font-selector-description" },
        " Increases letter spacing and line height for easier reading ",
        -1
        /* HOISTED */
      ))
    ])) : createCommentVNode("v-if", true),
    createBaseVNode(
      "div",
      {
        class: normalizeClass(["ob-font-selector-preview", [$setup.currentFontClass, $setup.currentFontSizeClass, $setup.spacingClass]])
      },
      _cache[2] || (_cache[2] = [
        createBaseVNode(
          "p",
          null,
          "The quick brown fox jumps over the lazy dog.",
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "p",
          null,
          "1234567890",
          -1
          /* HOISTED */
        )
      ]),
      2
      /* CLASS */
    )
  ]);
}
_sfc_main.__file = "src/components/accessibility/FontSelector.vue";
const FontSelector = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/openbadges-ui/openbadges-ui/src/components/accessibility/FontSelector.vue"]]);
export {
  FontSelector as F
};
//# sourceMappingURL=FontSelector-c88e3481.js.map
