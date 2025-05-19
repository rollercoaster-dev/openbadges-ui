import { aq as defineComponent, ar as ref, as as resolveComponent, at as openBlock, au as createBlock, av as withCtx, ax as createBaseVNode, ay as createTextVNode, aw as createVNode } from "./vendor-0a8d26a3.js";
import { A as AccessibilitySettings } from "./AccessibilitySettings-2421db8e.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "./FontSelector-c88e3481.js";
import "./ThemeSelector-3b377edb.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AccessibilitySettings.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const selectedTheme = ref("default");
    const selectedFont = ref("system");
    const isOpen = ref(true);
    const showMotionReduction = ref(true);
    const showFocusMode = ref(true);
    function onThemeChange(value) {
      console.log("Theme changed:", value);
      selectedTheme.value = value;
    }
    function onFontChange(value) {
      console.log("Font changed:", value);
      selectedFont.value = value;
    }
    function onOpenChange(value) {
      console.log("Open state changed:", value);
      isOpen.value = value;
    }
    function onMotionReductionChange(value) {
      console.log("Motion reduction changed:", value);
    }
    function onFocusModeChange(value) {
      console.log("Focus mode changed:", value);
    }
    function onFontSizeChange(value) {
      console.log("Font size changed:", value);
    }
    function onTextSpacingChange(value) {
      console.log("Text spacing changed:", value);
    }
    function onResetSettings() {
      console.log("Settings reset");
      selectedTheme.value = "default";
      selectedFont.value = "system";
    }
    const __returned__ = { selectedTheme, selectedFont, isOpen, showMotionReduction, showFocusMode, onThemeChange, onFontChange, onOpenChange, onMotionReductionChange, onFocusModeChange, onFontSizeChange, onTextSpacingChange, onResetSettings, AccessibilitySettings };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { style: { "display": "flex", "justify-content": "flex-end", "padding": "1rem", "border": "1px solid #e2e8f0", "border-radius": "8px", "margin-bottom": "450px" } };
const _hoisted_2 = { style: { "display": "flex", "justify-content": "flex-end", "padding": "1rem", "border": "1px solid #e2e8f0", "border-radius": "8px", "margin-bottom": "450px" } };
const _hoisted_3 = { style: { "display": "flex", "justify-content": "flex-end", "padding": "1rem", "border": "1px solid #e2e8f0", "border-radius": "8px", "margin-bottom": "450px" } };
const _hoisted_4 = { style: { "display": "flex", "justify-content": "flex-end", "padding": "1rem", "border": "1px solid #e2e8f0", "border-radius": "8px", "margin-bottom": "450px" } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Components/Accessibility/AccessibilitySettings",
    layout: { type: "single", iframe: true, iframeHeight: 600 }
  }, {
    docs: withCtx(() => _cache[15] || (_cache[15] = [
      createBaseVNode(
        "div",
        { class: "histoire-docs" },
        [
          createBaseVNode("h1", null, "AccessibilitySettings"),
          createBaseVNode("p", null, [
            createTextVNode(" The "),
            createBaseVNode("code", null, "AccessibilitySettings"),
            createTextVNode(" component provides a comprehensive interface for users to customize accessibility options, including font selection, theme selection, motion reduction, and focus mode. ")
          ]),
          createBaseVNode("h2", null, "When To Use"),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, "When you want to provide users with a complete set of accessibility options"),
            createBaseVNode("li", null, "When you need to support users with different accessibility needs"),
            createBaseVNode("li", null, "When you want to give users control over the visual presentation and behavior"),
            createBaseVNode("li", null, "In applications that prioritize accessibility and user customization")
          ]),
          createBaseVNode("h2", null, "Examples"),
          createBaseVNode("h3", null, "Basic Usage"),
          createBaseVNode("pre", null, [
            createBaseVNode("code", null, '<AccessibilitySettings\n  v-model:theme="selectedTheme"\n  v-model:font="selectedFont"\n  v-model:open="isOpen"\n/>')
          ]),
          createBaseVNode("h3", null, "Without Motion Reduction Option"),
          createBaseVNode("pre", null, [
            createBaseVNode("code", null, '<AccessibilitySettings\n  v-model:theme="selectedTheme"\n  v-model:font="selectedFont"\n  v-model:open="isOpen"\n  :show-motion-reduction="false"\n/>')
          ]),
          createBaseVNode("h3", null, "Without Focus Mode Option"),
          createBaseVNode("pre", null, [
            createBaseVNode("code", null, '<AccessibilitySettings\n  v-model:theme="selectedTheme"\n  v-model:font="selectedFont"\n  v-model:open="isOpen"\n  :show-focus-mode="false"\n/>')
          ]),
          createBaseVNode("h3", null, "With Custom Title"),
          createBaseVNode("pre", null, [
            createBaseVNode("code", null, '<AccessibilitySettings\n  v-model:theme="selectedTheme"\n  v-model:font="selectedFont"\n  v-model:open="isOpen"\n  title="Display Settings"\n/>')
          ]),
          createBaseVNode("h2", null, "Props"),
          createBaseVNode("table", null, [
            createBaseVNode("thead", null, [
              createBaseVNode("tr", null, [
                createBaseVNode("th", null, "Name"),
                createBaseVNode("th", null, "Type"),
                createBaseVNode("th", null, "Default"),
                createBaseVNode("th", null, "Description")
              ])
            ]),
            createBaseVNode("tbody", null, [
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "theme")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "string")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "'default'")
                ]),
                createBaseVNode("td", null, "The currently selected theme")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "font")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "string")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "'system'")
                ]),
                createBaseVNode("td", null, "The currently selected font")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "open")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "boolean")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "false")
                ]),
                createBaseVNode("td", null, "Whether the settings panel is open")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "title")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "string")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "'Accessibility Settings'")
                ]),
                createBaseVNode("td", null, "The title of the settings panel")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "showMotionReduction")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "boolean")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "true")
                ]),
                createBaseVNode("td", null, "Whether to show the motion reduction option")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "showFocusMode")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "boolean")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "true")
                ]),
                createBaseVNode("td", null, "Whether to show the focus mode option")
              ])
            ])
          ]),
          createBaseVNode("h2", null, "Events"),
          createBaseVNode("table", null, [
            createBaseVNode("thead", null, [
              createBaseVNode("tr", null, [
                createBaseVNode("th", null, "Name"),
                createBaseVNode("th", null, "Payload"),
                createBaseVNode("th", null, "Description")
              ])
            ]),
            createBaseVNode("tbody", null, [
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "update:theme")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "string")
                ]),
                createBaseVNode("td", null, "Emitted when the selected theme changes")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "update:font")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "string")
                ]),
                createBaseVNode("td", null, "Emitted when the selected font changes")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "update:open")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "boolean")
                ]),
                createBaseVNode("td", null, "Emitted when the open state changes")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "motionReductionChange")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "boolean")
                ]),
                createBaseVNode("td", null, "Emitted when the motion reduction setting changes")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "focusModeChange")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "boolean")
                ]),
                createBaseVNode("td", null, "Emitted when the focus mode setting changes")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "fontSizeChange")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "string")
                ]),
                createBaseVNode("td", null, "Emitted when the font size changes")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "textSpacingChange")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "boolean")
                ]),
                createBaseVNode("td", null, "Emitted when the text spacing changes")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "resetSettings")
                ]),
                createBaseVNode("td", null, "-"),
                createBaseVNode("td", null, "Emitted when all settings are reset to defaults")
              ])
            ])
          ]),
          createBaseVNode("h2", null, "CSS Variables"),
          createBaseVNode("p", null, " The component uses CSS variables for styling, which can be overridden to customize its appearance: "),
          createBaseVNode("table", null, [
            createBaseVNode("thead", null, [
              createBaseVNode("tr", null, [
                createBaseVNode("th", null, "Name"),
                createBaseVNode("th", null, "Default"),
                createBaseVNode("th", null, "Description")
              ])
            ]),
            createBaseVNode("tbody", null, [
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "--ob-border-color")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "#e2e8f0")
                ]),
                createBaseVNode("td", null, "The color of borders")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "--ob-border-radius-md")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "4px")
                ]),
                createBaseVNode("td", null, "The border radius of smaller elements")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "--ob-border-radius-lg")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "8px")
                ]),
                createBaseVNode("td", null, "The border radius of larger elements")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "--ob-bg-primary")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "#ffffff")
                ]),
                createBaseVNode("td", null, "The primary background color")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "--ob-bg-secondary")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "#f8f9fa")
                ]),
                createBaseVNode("td", null, "The secondary background color")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "--ob-primary")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "#3182ce")
                ]),
                createBaseVNode("td", null, "The primary accent color")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "--ob-primary-dark")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "#2c5282")
                ]),
                createBaseVNode("td", null, "The darker primary color for hover states")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "--ob-text-primary")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "#1a202c")
                ]),
                createBaseVNode("td", null, "The primary text color")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "--ob-text-secondary")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "#4a5568")
                ]),
                createBaseVNode("td", null, "The secondary text color")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "--ob-shadow-lg")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "0 10px 15px -3px rgba(0, 0, 0, 0.1)")
                ]),
                createBaseVNode("td", null, "The shadow for the panel")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "--ob-z-index-modal")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "1000")
                ]),
                createBaseVNode("td", null, "The z-index for the panel")
              ])
            ])
          ]),
          createBaseVNode("h2", null, "Accessibility"),
          createBaseVNode("p", null, "The component includes several accessibility features:"),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, "All form controls have proper labels"),
            createBaseVNode("li", null, "The component uses semantic HTML elements"),
            createBaseVNode("li", null, "The toggle button has appropriate ARIA attributes"),
            createBaseVNode("li", null, "The panel has a proper heading structure"),
            createBaseVNode("li", null, "The component supports keyboard navigation"),
            createBaseVNode("li", null, "The close button has an accessible label")
          ])
        ],
        -1
        /* HOISTED */
      )
    ])),
    controls: withCtx(() => [
      createVNode(_component_HstCheckbox, {
        modelValue: $setup.showMotionReduction,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.showMotionReduction = $event),
        title: "Show Motion Reduction Option"
      }, null, 8, ["modelValue"]),
      createVNode(_component_HstCheckbox, {
        modelValue: $setup.showFocusMode,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.showFocusMode = $event),
        title: "Show Focus Mode Option"
      }, null, 8, ["modelValue"]),
      createVNode(_component_HstCheckbox, {
        modelValue: $setup.isOpen,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.isOpen = $event),
        title: "Panel Open"
      }, null, 8, ["modelValue"])
    ]),
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode($setup["AccessibilitySettings"], {
              theme: $setup.selectedTheme,
              "onUpdate:theme": [
                _cache[3] || (_cache[3] = ($event) => $setup.selectedTheme = $event),
                $setup.onThemeChange
              ],
              font: $setup.selectedFont,
              "onUpdate:font": [
                _cache[4] || (_cache[4] = ($event) => $setup.selectedFont = $event),
                $setup.onFontChange
              ],
              open: $setup.isOpen,
              "onUpdate:open": [
                _cache[5] || (_cache[5] = ($event) => $setup.isOpen = $event),
                $setup.onOpenChange
              ],
              "show-motion-reduction": $setup.showMotionReduction,
              "show-focus-mode": $setup.showFocusMode,
              onMotionReductionChange: $setup.onMotionReductionChange,
              onFocusModeChange: $setup.onFocusModeChange,
              onFontSizeChange: $setup.onFontSizeChange,
              onTextSpacingChange: $setup.onTextSpacingChange,
              onResetSettings: $setup.onResetSettings
            }, null, 8, ["theme", "font", "open", "show-motion-reduction", "show-focus-mode"])
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Without Motion Reduction" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_2, [
            createVNode($setup["AccessibilitySettings"], {
              theme: $setup.selectedTheme,
              "onUpdate:theme": [
                _cache[6] || (_cache[6] = ($event) => $setup.selectedTheme = $event),
                $setup.onThemeChange
              ],
              font: $setup.selectedFont,
              "onUpdate:font": [
                _cache[7] || (_cache[7] = ($event) => $setup.selectedFont = $event),
                $setup.onFontChange
              ],
              open: $setup.isOpen,
              "onUpdate:open": [
                _cache[8] || (_cache[8] = ($event) => $setup.isOpen = $event),
                $setup.onOpenChange
              ],
              "show-motion-reduction": false,
              "show-focus-mode": $setup.showFocusMode,
              onFocusModeChange: $setup.onFocusModeChange,
              onFontSizeChange: $setup.onFontSizeChange,
              onTextSpacingChange: $setup.onTextSpacingChange,
              onResetSettings: $setup.onResetSettings
            }, null, 8, ["theme", "font", "open", "show-focus-mode"])
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Without Focus Mode" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_3, [
            createVNode($setup["AccessibilitySettings"], {
              theme: $setup.selectedTheme,
              "onUpdate:theme": [
                _cache[9] || (_cache[9] = ($event) => $setup.selectedTheme = $event),
                $setup.onThemeChange
              ],
              font: $setup.selectedFont,
              "onUpdate:font": [
                _cache[10] || (_cache[10] = ($event) => $setup.selectedFont = $event),
                $setup.onFontChange
              ],
              open: $setup.isOpen,
              "onUpdate:open": [
                _cache[11] || (_cache[11] = ($event) => $setup.isOpen = $event),
                $setup.onOpenChange
              ],
              "show-motion-reduction": $setup.showMotionReduction,
              "show-focus-mode": false,
              onMotionReductionChange: $setup.onMotionReductionChange,
              onFontSizeChange: $setup.onFontSizeChange,
              onTextSpacingChange: $setup.onTextSpacingChange,
              onResetSettings: $setup.onResetSettings
            }, null, 8, ["theme", "font", "open", "show-motion-reduction"])
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Custom Title" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_4, [
            createVNode($setup["AccessibilitySettings"], {
              theme: $setup.selectedTheme,
              "onUpdate:theme": [
                _cache[12] || (_cache[12] = ($event) => $setup.selectedTheme = $event),
                $setup.onThemeChange
              ],
              font: $setup.selectedFont,
              "onUpdate:font": [
                _cache[13] || (_cache[13] = ($event) => $setup.selectedFont = $event),
                $setup.onFontChange
              ],
              open: $setup.isOpen,
              "onUpdate:open": [
                _cache[14] || (_cache[14] = ($event) => $setup.isOpen = $event),
                $setup.onOpenChange
              ],
              title: "Display Settings",
              "show-motion-reduction": $setup.showMotionReduction,
              "show-focus-mode": $setup.showFocusMode,
              onMotionReductionChange: $setup.onMotionReductionChange,
              onFocusModeChange: $setup.onFocusModeChange,
              onFontSizeChange: $setup.onFontSizeChange,
              onTextSpacingChange: $setup.onTextSpacingChange,
              onResetSettings: $setup.onResetSettings
            }, null, 8, ["theme", "font", "open", "show-motion-reduction", "show-focus-mode"])
          ])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/accessibility/AccessibilitySettings.story.vue";
const AccessibilitySettings_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/openbadges-ui/openbadges-ui/src/components/accessibility/AccessibilitySettings.story.vue"]]);
export {
  AccessibilitySettings_story as default
};
//# sourceMappingURL=AccessibilitySettings.story-859eeeff.js.map
