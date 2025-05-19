import { aq as defineComponent, ar as ref, as as resolveComponent, at as openBlock, au as createBlock, av as withCtx, ax as createBaseVNode, ay as createTextVNode, aw as createVNode } from "./vendor-0a8d26a3.js";
import { T as ThemeSelector } from "./ThemeSelector-3b377edb.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ThemeSelector.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const selectedTheme = ref("default");
    function onThemeChange(value) {
      console.log("Theme changed:", value);
    }
    const customThemes = ref([
      {
        id: "default",
        name: "Default Theme",
        description: "Standard theme with balanced colors and spacing",
        className: "ob-default-theme"
      },
      {
        id: "dyslexia",
        name: "Dyslexia-Friendly",
        description: "Optimized for readers with dyslexia",
        className: "ob-dyslexia-friendly-theme"
      },
      {
        id: "dark",
        name: "Dark Theme",
        description: "Reduced light emission for comfortable viewing",
        className: "ob-dark-theme"
      }
    ]);
    const __returned__ = { selectedTheme, onThemeChange, customThemes, ThemeSelector };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Components/Accessibility/ThemeSelector",
    layout: { type: "single", iframe: true }
  }, {
    docs: withCtx(() => _cache[3] || (_cache[3] = [
      createBaseVNode(
        "div",
        { class: "histoire-docs" },
        [
          createBaseVNode("h1", null, "ThemeSelector"),
          createBaseVNode("p", null, [
            createTextVNode(" The "),
            createBaseVNode("code", null, "ThemeSelector"),
            createTextVNode(" component allows users to choose from a selection of accessibility-focused themes, including options for dyslexia, low vision, and autism-friendly designs. ")
          ]),
          createBaseVNode("h2", null, "When To Use"),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, "When you want to provide users with accessible theme options"),
            createBaseVNode("li", null, "When you need to support users with different accessibility needs"),
            createBaseVNode("li", null, "When you want to give users control over the visual presentation"),
            createBaseVNode("li", null, "As part of a comprehensive accessibility settings panel")
          ]),
          createBaseVNode("h2", null, "Examples"),
          createBaseVNode("h3", null, "Basic Usage"),
          createBaseVNode("pre", null, [
            createBaseVNode("code", null, '<ThemeSelector v-model="selectedTheme" />')
          ]),
          createBaseVNode("h3", null, "With Custom Theme Options"),
          createBaseVNode("pre", null, [
            createBaseVNode("code", null, `<ThemeSelector
  v-model="selectedTheme"
  :available-themes="[
    {
      id: 'default',
      name: 'Default Theme',
      description: 'Standard theme with balanced colors and spacing',
      className: 'ob-default-theme'
    },
    {
      id: 'dark',
      name: 'Dark Theme',
      description: 'Reduced light emission for comfortable viewing',
      className: 'ob-dark-theme'
    }
  ]"
/>`)
          ]),
          createBaseVNode("h3", null, "With Custom Label"),
          createBaseVNode("pre", null, [
            createBaseVNode("code", null, '<ThemeSelector\n  v-model="selectedTheme"\n  theme-label="Color Theme"\n/>')
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
                  createBaseVNode("code", null, "'default'")
                ]),
                createBaseVNode("td", null, "The currently selected theme")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "availableThemes")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "Array<{id: string, name: string, description?: string, className: string}>")
                ]),
                createBaseVNode("td", null, "All themes"),
                createBaseVNode("td", null, "The available theme options to display")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "themeLabel")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "string")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "'Theme'")
                ]),
                createBaseVNode("td", null, "The label for the theme selector")
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
                createBaseVNode("td", null, "Emitted when the selected theme changes")
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
                  createBaseVNode("code", null, "--ob-primary")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "#3182ce")
                ]),
                createBaseVNode("td", null, "The primary accent color")
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
            createBaseVNode("li", null, "The select element has a proper label"),
            createBaseVNode("li", null, "The component uses semantic HTML elements"),
            createBaseVNode("li", null, "The preview section demonstrates the selected theme"),
            createBaseVNode("li", null, "Theme options include descriptions to help users understand their purpose"),
            createBaseVNode("li", null, "The component supports keyboard navigation")
          ]),
          createBaseVNode("h2", null, "Available Themes"),
          createBaseVNode("p", null, "The component includes the following accessibility-focused themes by default:"),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createBaseVNode("strong", null, "Default Theme"),
              createTextVNode(": Standard theme with balanced colors and spacing")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("strong", null, "Dyslexia-Friendly"),
              createTextVNode(": Optimized for readers with dyslexia, with improved spacing and readability ")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("strong", null, "Low Vision"),
              createTextVNode(": High contrast theme with larger text for low vision users ")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("strong", null, "Low Information Density"),
              createTextVNode(": Reduced visual complexity for easier focus ")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("strong", null, "Autism-Friendly"),
              createTextVNode(": Predictable layouts with reduced sensory stimulation ")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("strong", null, "Dark Theme"),
              createTextVNode(": Reduced light emission for comfortable viewing in low light ")
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("strong", null, "High Contrast"),
              createTextVNode(": Maximum contrast for better visibility")
            ])
          ])
        ],
        -1
        /* HOISTED */
      )
    ])),
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createVNode($setup["ThemeSelector"], {
            modelValue: $setup.selectedTheme,
            "onUpdate:modelValue": [
              _cache[0] || (_cache[0] = ($event) => $setup.selectedTheme = $event),
              $setup.onThemeChange
            ]
          }, null, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "With Custom Themes" }, {
        default: withCtx(() => [
          createVNode($setup["ThemeSelector"], {
            modelValue: $setup.selectedTheme,
            "onUpdate:modelValue": [
              _cache[1] || (_cache[1] = ($event) => $setup.selectedTheme = $event),
              $setup.onThemeChange
            ],
            "available-themes": $setup.customThemes
          }, null, 8, ["modelValue", "available-themes"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "With Custom Label" }, {
        default: withCtx(() => [
          createVNode($setup["ThemeSelector"], {
            modelValue: $setup.selectedTheme,
            "onUpdate:modelValue": [
              _cache[2] || (_cache[2] = ($event) => $setup.selectedTheme = $event),
              $setup.onThemeChange
            ],
            "theme-label": "Color Theme"
          }, null, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/accessibility/ThemeSelector.story.vue";
const ThemeSelector_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/openbadges-ui/openbadges-ui/src/components/accessibility/ThemeSelector.story.vue"]]);
export {
  ThemeSelector_story as default
};
//# sourceMappingURL=ThemeSelector.story-5efd64ed.js.map
