import { aq as defineComponent, ar as ref, as as resolveComponent, at as openBlock, au as createBlock, av as withCtx, ax as createBaseVNode, ay as createTextVNode, aw as createVNode } from "./vendor-0a8d26a3.js";
import { F as FontSelector } from "./FontSelector-c88e3481.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FontSelector.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const selectedFont = ref("system");
    const showFontSize = ref(true);
    const showTextSpacing = ref(true);
    function onFontChange(value) {
      console.log("Font changed:", value);
    }
    function onFontSizeChange(value) {
      console.log("Font size changed:", value);
    }
    function onTextSpacingChange(value) {
      console.log("Text spacing changed:", value);
    }
    const __returned__ = { selectedFont, showFontSize, showTextSpacing, onFontChange, onFontSizeChange, onTextSpacingChange, FontSelector };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Components/Accessibility/FontSelector",
    layout: { type: "single", iframe: true }
  }, {
    docs: withCtx(() => _cache[6] || (_cache[6] = [
      createBaseVNode(
        "div",
        { class: "histoire-docs" },
        [
          createBaseVNode("h1", null, "FontSelector"),
          createBaseVNode("p", null, [
            createTextVNode(" The "),
            createBaseVNode("code", null, "FontSelector"),
            createTextVNode(" component allows users to choose from a selection of accessible fonts, adjust font size, and enable enhanced text spacing for improved readability. ")
          ]),
          createBaseVNode("h2", null, "When To Use"),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, "When you want to provide users with accessible font options"),
            createBaseVNode("li", null, "When you need to support users with dyslexia or visual impairments"),
            createBaseVNode("li", null, "When you want to give users control over text presentation"),
            createBaseVNode("li", null, "As part of a comprehensive accessibility settings panel")
          ]),
          createBaseVNode("h2", null, "Examples"),
          createBaseVNode("p", null, "Use the controls in the right panel to customize the component behavior."),
          createBaseVNode("h3", null, "Basic Usage"),
          createBaseVNode("pre", null, [
            createBaseVNode("code", null, '<FontSelector v-model="selectedFont" />')
          ]),
          createBaseVNode("h3", null, "Without Font Size Controls"),
          createBaseVNode("pre", null, [
            createBaseVNode("code", null, '<FontSelector v-model="selectedFont" :show-font-size="false" />')
          ]),
          createBaseVNode("h3", null, "Without Text Spacing Controls"),
          createBaseVNode("pre", null, [
            createBaseVNode("code", null, '<FontSelector v-model="selectedFont" :show-text-spacing="false" />')
          ]),
          createBaseVNode("h3", null, "With Custom Font Options"),
          createBaseVNode("pre", null, [
            createBaseVNode("code", null, `<FontSelector
  v-model="selectedFont"
  :available-fonts="[
    {
      id: 'system',
      name: 'System Font',
      description: 'Your device\\'s default font',
      className: 'ob-font-system'
    },
    {
      id: 'dyslexic',
      name: 'OpenDyslexic',
      description: 'Designed for readers with dyslexia',
      className: 'ob-font-dyslexic'
    }
  ]"
/>`)
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
                  createBaseVNode("code", null, "modelValue")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "string")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "'system'")
                ]),
                createBaseVNode("td", null, "The currently selected font family")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "showFontSize")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "boolean")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "true")
                ]),
                createBaseVNode("td", null, "Whether to show the font size controls")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "showTextSpacing")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "boolean")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "true")
                ]),
                createBaseVNode("td", null, "Whether to show the text spacing controls")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "availableFonts")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "Array<{id: string, name: string, description?: string, className: string}>")
                ]),
                createBaseVNode("td", null, "All fonts"),
                createBaseVNode("td", null, "The available font options to display")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "fontLabel")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "string")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "'Font Family'")
                ]),
                createBaseVNode("td", null, "The label for the font selector")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "fontSizeLabel")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "string")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "'Font Size'")
                ]),
                createBaseVNode("td", null, "The label for the font size selector")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "textSpacingLabel")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "string")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "'Text Spacing'")
                ]),
                createBaseVNode("td", null, "The label for the text spacing selector")
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
                  createBaseVNode("code", null, "update:modelValue")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "string")
                ]),
                createBaseVNode("td", null, "Emitted when the selected font changes")
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
                createBaseVNode("td", null, "The border radius of elements")
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
              ])
            ])
          ]),
          createBaseVNode("h2", null, "Accessibility"),
          createBaseVNode("p", null, "The component includes several accessibility features:"),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, "All form controls have proper labels"),
            createBaseVNode("li", null, "The component uses semantic HTML elements"),
            createBaseVNode("li", null, "The preview section demonstrates the selected font settings"),
            createBaseVNode("li", null, "Font options include descriptions to help users understand their purpose"),
            createBaseVNode("li", null, "The component supports keyboard navigation")
          ]),
          createBaseVNode("h2", null, "Available Fonts"),
          createBaseVNode("p", null, "The component includes the following accessible fonts by default:"),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createBaseVNode("strong", null, "System Font"),
              createTextVNode(": Your device's default font")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("strong", null, "Atkinson Hyperlegible"),
              createTextVNode(": Designed for low vision readers by the Braille Institute ")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("strong", null, "OpenDyslexic"),
              createTextVNode(": Designed specifically for readers with dyslexia")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("strong", null, "Lexend"),
              createTextVNode(": Designed to reduce visual stress and improve reading fluency ")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("strong", null, "Inter"),
              createTextVNode(": Modern, highly legible sans-serif font")
            ])
          ])
        ],
        -1
        /* HOISTED */
      )
    ])),
    controls: withCtx(() => [
      createVNode(_component_HstCheckbox, {
        modelValue: $setup.showFontSize,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.showFontSize = $event),
        title: "Show Font Size Controls"
      }, null, 8, ["modelValue"]),
      createVNode(_component_HstCheckbox, {
        modelValue: $setup.showTextSpacing,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.showTextSpacing = $event),
        title: "Show Text Spacing Controls"
      }, null, 8, ["modelValue"])
    ]),
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createVNode($setup["FontSelector"], {
            modelValue: $setup.selectedFont,
            "onUpdate:modelValue": [
              _cache[2] || (_cache[2] = ($event) => $setup.selectedFont = $event),
              $setup.onFontChange
            ],
            "show-font-size": $setup.showFontSize,
            "show-text-spacing": $setup.showTextSpacing,
            onFontSizeChange: $setup.onFontSizeChange,
            onTextSpacingChange: $setup.onTextSpacingChange
          }, null, 8, ["modelValue", "show-font-size", "show-text-spacing"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Without Font Size Controls" }, {
        default: withCtx(() => [
          createVNode($setup["FontSelector"], {
            modelValue: $setup.selectedFont,
            "onUpdate:modelValue": [
              _cache[3] || (_cache[3] = ($event) => $setup.selectedFont = $event),
              $setup.onFontChange
            ],
            "show-font-size": false,
            "show-text-spacing": $setup.showTextSpacing,
            onTextSpacingChange: $setup.onTextSpacingChange
          }, null, 8, ["modelValue", "show-text-spacing"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Without Text Spacing Controls" }, {
        default: withCtx(() => [
          createVNode($setup["FontSelector"], {
            modelValue: $setup.selectedFont,
            "onUpdate:modelValue": [
              _cache[4] || (_cache[4] = ($event) => $setup.selectedFont = $event),
              $setup.onFontChange
            ],
            "show-font-size": $setup.showFontSize,
            "show-text-spacing": false,
            onFontSizeChange: $setup.onFontSizeChange
          }, null, 8, ["modelValue", "show-font-size"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Limited Font Options" }, {
        default: withCtx(() => [
          createVNode($setup["FontSelector"], {
            modelValue: $setup.selectedFont,
            "onUpdate:modelValue": [
              _cache[5] || (_cache[5] = ($event) => $setup.selectedFont = $event),
              $setup.onFontChange
            ],
            "show-font-size": $setup.showFontSize,
            "show-text-spacing": $setup.showTextSpacing,
            "available-fonts": [
              {
                id: "system",
                name: "System Font",
                description: "Your device's default font",
                className: "ob-font-system"
              },
              {
                id: "opendyslexic",
                name: "OpenDyslexic",
                description: "Designed for readers with dyslexia",
                className: "ob-font-dyslexic"
              }
            ],
            onFontSizeChange: $setup.onFontSizeChange,
            onTextSpacingChange: $setup.onTextSpacingChange
          }, null, 8, ["modelValue", "show-font-size", "show-text-spacing"])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/accessibility/FontSelector.story.vue";
const FontSelector_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/openbadges-ui/openbadges-ui/src/components/accessibility/FontSelector.story.vue"]]);
export {
  FontSelector_story as default
};
//# sourceMappingURL=FontSelector.story-58820176.js.map
