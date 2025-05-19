import { aq as defineComponent, ar as ref, az as watch, at as openBlock, aA as createElementBlock, ax as createBaseVNode, aB as createStaticVNode, aC as toDisplayString, aw as createVNode, aD as createCommentVNode } from "./vendor-0a8d26a3.js";
import { F as FontSelector } from "./FontSelector-c88e3481.js";
import { T as ThemeSelector } from "./ThemeSelector-3b377edb.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const AccessibilitySettings_vue_vue_type_style_index_0_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AccessibilitySettings",
  props: {
    theme: { type: String, required: false, default: "default" },
    font: { type: String, required: false, default: "system" },
    open: { type: Boolean, required: false, default: false },
    title: { type: String, required: false, default: "Accessibility Settings" },
    showMotionReduction: { type: Boolean, required: false, default: true },
    showFocusMode: { type: Boolean, required: false, default: true }
  },
  emits: ["update:theme", "update:font", "update:open", "motionReductionChange", "focusModeChange", "fontSizeChange", "textSpacingChange", "resetSettings"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const isOpen = ref(props.open);
    const selectedTheme = ref(props.theme);
    const selectedFont = ref(props.font);
    const reduceMotion = ref(false);
    const focusMode = ref(false);
    watch(
      () => props.open,
      (newValue) => {
        isOpen.value = newValue;
      }
    );
    watch(
      () => props.theme,
      (newValue) => {
        selectedTheme.value = newValue;
      }
    );
    watch(
      () => props.font,
      (newValue) => {
        selectedFont.value = newValue;
      }
    );
    const toggleOpen = () => {
      isOpen.value = !isOpen.value;
      emit("update:open", isOpen.value);
    };
    const handleThemeChange = (value) => {
      selectedTheme.value = value;
      emit("update:theme", value);
    };
    const handleFontChange = (value) => {
      selectedFont.value = value;
      emit("update:font", value);
    };
    const handleMotionReductionChange = (event) => {
      const target = event.target;
      reduceMotion.value = target.checked;
      emit("motionReductionChange", target.checked);
      if (reduceMotion.value) {
        document.body.classList.add("ob-animations-none");
      } else {
        document.body.classList.remove("ob-animations-none");
      }
    };
    const handleFocusModeChange = (event) => {
      const target = event.target;
      focusMode.value = target.checked;
      emit("focusModeChange", target.checked);
      if (focusMode.value) {
        document.body.classList.add("ob-focus-mode");
      } else {
        document.body.classList.remove("ob-focus-mode");
      }
    };
    const handleFontSizeChange = (value) => {
      emit("fontSizeChange", value);
    };
    const handleTextSpacingChange = (value) => {
      emit("textSpacingChange", value);
    };
    const resetSettings = () => {
      selectedTheme.value = "default";
      selectedFont.value = "system";
      reduceMotion.value = false;
      focusMode.value = false;
      document.body.classList.remove("ob-animations-none", "ob-focus-mode");
      emit("update:theme", "default");
      emit("update:font", "system");
      emit("motionReductionChange", false);
      emit("focusModeChange", false);
      emit("resetSettings");
    };
    const __returned__ = { props, emit, isOpen, selectedTheme, selectedFont, reduceMotion, focusMode, toggleOpen, handleThemeChange, handleFontChange, handleMotionReductionChange, handleFocusModeChange, handleFontSizeChange, handleTextSpacingChange, resetSettings, FontSelector, ThemeSelector };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "ob-accessibility-settings" };
const _hoisted_2 = ["aria-expanded", "aria-label"];
const _hoisted_3 = {
  key: 0,
  class: "ob-accessibility-panel"
};
const _hoisted_4 = { class: "ob-accessibility-panel-header" };
const _hoisted_5 = { class: "ob-accessibility-panel-title" };
const _hoisted_6 = { class: "ob-accessibility-panel-content" };
const _hoisted_7 = {
  key: 0,
  class: "ob-accessibility-options"
};
const _hoisted_8 = {
  key: 0,
  class: "ob-accessibility-option"
};
const _hoisted_9 = { class: "ob-accessibility-checkbox-group" };
const _hoisted_10 = ["checked"];
const _hoisted_11 = {
  key: 1,
  class: "ob-accessibility-option"
};
const _hoisted_12 = { class: "ob-accessibility-checkbox-group" };
const _hoisted_13 = ["checked"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("button", {
      class: "ob-accessibility-toggle",
      "aria-expanded": $setup.isOpen,
      "aria-label": $setup.isOpen ? "Close accessibility settings" : "Open accessibility settings",
      onClick: $setup.toggleOpen
    }, _cache[2] || (_cache[2] = [
      createStaticVNode('<span class="ob-accessibility-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg></span><span class="ob-accessibility-toggle-text">Accessibility</span>', 2)
    ]), 8, _hoisted_2),
    $setup.isOpen ? (openBlock(), createElementBlock("div", _hoisted_3, [
      createBaseVNode("div", _hoisted_4, [
        createBaseVNode(
          "h2",
          _hoisted_5,
          toDisplayString($props.title),
          1
          /* TEXT */
        ),
        createBaseVNode("button", {
          class: "ob-accessibility-panel-close",
          "aria-label": "Close accessibility settings",
          onClick: $setup.toggleOpen
        }, _cache[3] || (_cache[3] = [
          createBaseVNode(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            },
            [
              createBaseVNode("line", {
                x1: "18",
                y1: "6",
                x2: "6",
                y2: "18"
              }),
              createBaseVNode("line", {
                x1: "6",
                y1: "6",
                x2: "18",
                y2: "18"
              })
            ],
            -1
            /* HOISTED */
          )
        ]))
      ]),
      createBaseVNode("div", _hoisted_6, [
        createVNode($setup["ThemeSelector"], {
          modelValue: $setup.selectedTheme,
          "onUpdate:modelValue": [
            _cache[0] || (_cache[0] = ($event) => $setup.selectedTheme = $event),
            $setup.handleThemeChange
          ]
        }, null, 8, ["modelValue"]),
        createVNode($setup["FontSelector"], {
          modelValue: $setup.selectedFont,
          "onUpdate:modelValue": [
            _cache[1] || (_cache[1] = ($event) => $setup.selectedFont = $event),
            $setup.handleFontChange
          ],
          onFontSizeChange: $setup.handleFontSizeChange,
          onTextSpacingChange: $setup.handleTextSpacingChange
        }, null, 8, ["modelValue"]),
        $props.showMotionReduction || $props.showFocusMode ? (openBlock(), createElementBlock("div", _hoisted_7, [
          _cache[8] || (_cache[8] = createBaseVNode(
            "h3",
            { class: "ob-accessibility-options-title" },
            "Additional Options",
            -1
            /* HOISTED */
          )),
          $props.showMotionReduction ? (openBlock(), createElementBlock("div", _hoisted_8, [
            createBaseVNode("div", _hoisted_9, [
              createBaseVNode("input", {
                id: "ob-reduce-motion",
                type: "checkbox",
                class: "ob-accessibility-checkbox",
                checked: $setup.reduceMotion,
                onChange: $setup.handleMotionReductionChange
              }, null, 40, _hoisted_10),
              _cache[4] || (_cache[4] = createBaseVNode(
                "label",
                {
                  for: "ob-reduce-motion",
                  class: "ob-accessibility-checkbox-label"
                },
                " Reduce Motion ",
                -1
                /* HOISTED */
              ))
            ]),
            _cache[5] || (_cache[5] = createBaseVNode(
              "p",
              { class: "ob-accessibility-option-description" },
              " Minimizes animations and transitions for users with vestibular disorders ",
              -1
              /* HOISTED */
            ))
          ])) : createCommentVNode("v-if", true),
          $props.showFocusMode ? (openBlock(), createElementBlock("div", _hoisted_11, [
            createBaseVNode("div", _hoisted_12, [
              createBaseVNode("input", {
                id: "ob-focus-mode",
                type: "checkbox",
                class: "ob-accessibility-checkbox",
                checked: $setup.focusMode,
                onChange: $setup.handleFocusModeChange
              }, null, 40, _hoisted_13),
              _cache[6] || (_cache[6] = createBaseVNode(
                "label",
                {
                  for: "ob-focus-mode",
                  class: "ob-accessibility-checkbox-label"
                },
                " Focus Mode ",
                -1
                /* HOISTED */
              ))
            ]),
            _cache[7] || (_cache[7] = createBaseVNode(
              "p",
              { class: "ob-accessibility-option-description" },
              " Reduces visual distractions to help maintain focus ",
              -1
              /* HOISTED */
            ))
          ])) : createCommentVNode("v-if", true)
        ])) : createCommentVNode("v-if", true),
        createBaseVNode("div", { class: "ob-accessibility-panel-footer" }, [
          createBaseVNode("button", {
            class: "ob-accessibility-reset-button",
            onClick: $setup.resetSettings
          }, " Reset to Defaults ")
        ])
      ])
    ])) : createCommentVNode("v-if", true)
  ]);
}
_sfc_main.__file = "src/components/accessibility/AccessibilitySettings.vue";
const AccessibilitySettings = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/openbadges-ui/openbadges-ui/src/components/accessibility/AccessibilitySettings.vue"]]);
export {
  AccessibilitySettings as A
};
//# sourceMappingURL=AccessibilitySettings-2421db8e.js.map
