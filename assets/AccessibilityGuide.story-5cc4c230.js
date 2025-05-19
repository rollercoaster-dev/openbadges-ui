import { aq as defineComponent, ar as ref, as as resolveComponent, at as openBlock, au as createBlock, av as withCtx, aw as createVNode, ax as createBaseVNode, ay as createTextVNode } from "./vendor-0a8d26a3.js";
import { F as FontSelector } from "./FontSelector-c88e3481.js";
import { T as ThemeSelector } from "./ThemeSelector-3b377edb.js";
import { A as AccessibilitySettings } from "./AccessibilitySettings-2421db8e.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const AccessibilityGuide_story_vue_vue_type_style_index_0_scoped_dbdc7932_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AccessibilityGuide.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const selectedFont = ref("system");
    const selectedTheme = ref("default");
    const isOpen = ref(true);
    const __returned__ = { selectedFont, selectedTheme, isOpen, FontSelector, ThemeSelector, AccessibilitySettings };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "guide-container" };
const _hoisted_2 = { class: "component-demo" };
const _hoisted_3 = { class: "guide-container" };
const _hoisted_4 = { class: "component-demo" };
const _hoisted_5 = { class: "guide-container" };
const _hoisted_6 = {
  class: "component-demo",
  style: { "display": "flex", "justify-content": "flex-end" }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Guides/Accessibility",
    layout: { type: "single", iframe: true, iframeHeight: 800 }
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Introduction" }, {
        default: withCtx(() => _cache[5] || (_cache[5] = [
          createBaseVNode(
            "div",
            { class: "guide-container" },
            [
              createBaseVNode("h1", null, "Accessibility Features Guide"),
              createBaseVNode("p", null, " The OpenBadges UI library includes a comprehensive set of accessibility features designed to make the components usable by as many people as possible, regardless of ability or circumstance. "),
              createBaseVNode("h2", null, "Key Accessibility Features"),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createBaseVNode("strong", null, "Accessible Fonts"),
                  createTextVNode(": Multiple font options including dyslexia-friendly and low vision fonts ")
                ]),
                createBaseVNode("li", null, [
                  createBaseVNode("strong", null, "Theme Options"),
                  createTextVNode(": Themes designed for various accessibility needs including dyslexia, low vision, and autism ")
                ]),
                createBaseVNode("li", null, [
                  createBaseVNode("strong", null, "Motion Controls"),
                  createTextVNode(": Options to reduce or eliminate animations and transitions ")
                ]),
                createBaseVNode("li", null, [
                  createBaseVNode("strong", null, "Focus Mode"),
                  createTextVNode(": Reduces visual distractions to help maintain focus")
                ]),
                createBaseVNode("li", null, [
                  createBaseVNode("strong", null, "Text Spacing"),
                  createTextVNode(": Adjustable letter spacing, word spacing, and line height ")
                ]),
                createBaseVNode("li", null, [
                  createBaseVNode("strong", null, "Font Size Controls"),
                  createTextVNode(": Easy adjustment of text size")
                ]),
                createBaseVNode("li", null, [
                  createBaseVNode("strong", null, "High Contrast Support"),
                  createTextVNode(": Compatible with high contrast mode")
                ]),
                createBaseVNode("li", null, [
                  createBaseVNode("strong", null, "Keyboard Navigation"),
                  createTextVNode(": Full keyboard accessibility")
                ]),
                createBaseVNode("li", null, [
                  createBaseVNode("strong", null, "Screen Reader Support"),
                  createTextVNode(": Proper ARIA attributes and semantic HTML")
                ])
              ]),
              createBaseVNode("p", null, "This guide demonstrates how to use these features in your application.")
            ],
            -1
            /* HOISTED */
          )
        ])),
        _: 1,
        __: [5]
      }),
      createVNode(_component_Variant, { title: "Accessible Fonts" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            _cache[6] || (_cache[6] = createBaseVNode(
              "h1",
              null,
              "Accessible Fonts",
              -1
              /* HOISTED */
            )),
            _cache[7] || (_cache[7] = createBaseVNode(
              "p",
              null,
              " The OpenBadges UI library includes several accessible font options designed to improve readability for users with different needs: ",
              -1
              /* HOISTED */
            )),
            _cache[8] || (_cache[8] = createBaseVNode(
              "ul",
              null,
              [
                createBaseVNode("li", null, [
                  createBaseVNode("strong", null, "Atkinson Hyperlegible"),
                  createTextVNode(": Designed specifically for low vision readers by the Braille Institute. It features distinct letterforms that are easy to differentiate. ")
                ]),
                createBaseVNode("li", null, [
                  createBaseVNode("strong", null, "OpenDyslexic"),
                  createTextVNode(": A typeface specifically designed for readers with dyslexia. It features weighted bottoms to the letters, which helps prevent them from flipping and swapping in the reader's mind. ")
                ]),
                createBaseVNode("li", null, [
                  createBaseVNode("strong", null, "Lexend"),
                  createTextVNode(": Designed to reduce visual stress and improve reading fluency. It features carefully adjusted letter spacing and shapes. ")
                ]),
                createBaseVNode("li", null, [
                  createBaseVNode("strong", null, "Inter"),
                  createTextVNode(": A modern, highly legible sans-serif font designed for computer screens. It features a tall x-height and open forms, making it highly readable at small sizes. ")
                ])
              ],
              -1
              /* HOISTED */
            )),
            _cache[9] || (_cache[9] = createBaseVNode(
              "h2",
              null,
              "Font Selector Component",
              -1
              /* HOISTED */
            )),
            _cache[10] || (_cache[10] = createBaseVNode(
              "p",
              null,
              [
                createTextVNode(" The "),
                createBaseVNode("code", null, "FontSelector"),
                createTextVNode(" component allows users to choose their preferred font, adjust font size, and enable enhanced text spacing: ")
              ],
              -1
              /* HOISTED */
            )),
            createBaseVNode("div", _hoisted_2, [
              createVNode($setup["FontSelector"], {
                modelValue: $setup.selectedFont,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.selectedFont = $event)
              }, null, 8, ["modelValue"])
            ]),
            _cache[11] || (_cache[11] = createBaseVNode(
              "h2",
              null,
              "Using Font Utility Classes",
              -1
              /* HOISTED */
            )),
            _cache[12] || (_cache[12] = createBaseVNode(
              "p",
              null,
              "You can also apply these fonts directly using utility classes:",
              -1
              /* HOISTED */
            )),
            _cache[13] || (_cache[13] = createBaseVNode(
              "div",
              { class: "font-examples" },
              [
                createBaseVNode("div", { class: "font-example ob-font-system" }, [
                  createBaseVNode("h3", null, "System Font"),
                  createBaseVNode("p", null, "The quick brown fox jumps over the lazy dog. 1234567890")
                ]),
                createBaseVNode("div", { class: "font-example ob-font-accessible" }, [
                  createBaseVNode("h3", null, "Atkinson Hyperlegible"),
                  createBaseVNode("p", null, "The quick brown fox jumps over the lazy dog. 1234567890")
                ]),
                createBaseVNode("div", { class: "font-example ob-font-dyslexic" }, [
                  createBaseVNode("h3", null, "OpenDyslexic"),
                  createBaseVNode("p", null, "The quick brown fox jumps over the lazy dog. 1234567890")
                ]),
                createBaseVNode("div", { class: "font-example ob-font-readable" }, [
                  createBaseVNode("h3", null, "Lexend"),
                  createBaseVNode("p", null, "The quick brown fox jumps over the lazy dog. 1234567890")
                ]),
                createBaseVNode("div", { class: "font-example ob-font-standard" }, [
                  createBaseVNode("h3", null, "Inter"),
                  createBaseVNode("p", null, "The quick brown fox jumps over the lazy dog. 1234567890")
                ])
              ],
              -1
              /* HOISTED */
            ))
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Accessible Themes" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_3, [
            _cache[14] || (_cache[14] = createBaseVNode(
              "h1",
              null,
              "Accessible Themes",
              -1
              /* HOISTED */
            )),
            _cache[15] || (_cache[15] = createBaseVNode(
              "p",
              null,
              " The OpenBadges UI library includes several themes designed to address specific accessibility needs: ",
              -1
              /* HOISTED */
            )),
            _cache[16] || (_cache[16] = createBaseVNode(
              "ul",
              null,
              [
                createBaseVNode("li", null, [
                  createBaseVNode("strong", null, "Default Theme"),
                  createTextVNode(": A balanced theme with good contrast and readability. ")
                ]),
                createBaseVNode("li", null, [
                  createBaseVNode("strong", null, "Dyslexia-Friendly Theme"),
                  createTextVNode(": Optimized for readers with dyslexia, featuring the OpenDyslexic font, increased spacing, and a cream background to reduce visual stress. ")
                ]),
                createBaseVNode("li", null, [
                  createBaseVNode("strong", null, "Low Vision Theme"),
                  createTextVNode(": Features the Atkinson Hyperlegible font, larger text sizes, and high contrast colors for better visibility. ")
                ]),
                createBaseVNode("li", null, [
                  createBaseVNode("strong", null, "Low Information Density Theme"),
                  createTextVNode(": Reduces visual complexity for easier focus, helpful for users with cognitive disabilities or ADHD. ")
                ]),
                createBaseVNode("li", null, [
                  createBaseVNode("strong", null, "Autism-Friendly Theme"),
                  createTextVNode(": Features predictable layouts with reduced sensory stimulation. ")
                ]),
                createBaseVNode("li", null, [
                  createBaseVNode("strong", null, "Dark Theme"),
                  createTextVNode(": Reduces light emission for comfortable viewing in low light and for users with light sensitivity. ")
                ]),
                createBaseVNode("li", null, [
                  createBaseVNode("strong", null, "High Contrast Theme"),
                  createTextVNode(": Maximizes contrast for better visibility, helpful for users with low vision. ")
                ])
              ],
              -1
              /* HOISTED */
            )),
            _cache[17] || (_cache[17] = createBaseVNode(
              "h2",
              null,
              "Theme Selector Component",
              -1
              /* HOISTED */
            )),
            _cache[18] || (_cache[18] = createBaseVNode(
              "p",
              null,
              [
                createTextVNode(" The "),
                createBaseVNode("code", null, "ThemeSelector"),
                createTextVNode(" component allows users to choose their preferred theme: ")
              ],
              -1
              /* HOISTED */
            )),
            createBaseVNode("div", _hoisted_4, [
              createVNode($setup["ThemeSelector"], {
                modelValue: $setup.selectedTheme,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.selectedTheme = $event)
              }, null, 8, ["modelValue"])
            ])
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Accessibility Settings" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_5, [
            _cache[19] || (_cache[19] = createBaseVNode(
              "h1",
              null,
              "Accessibility Settings Component",
              -1
              /* HOISTED */
            )),
            _cache[20] || (_cache[20] = createBaseVNode(
              "p",
              null,
              [
                createTextVNode(" The "),
                createBaseVNode("code", null, "AccessibilitySettings"),
                createTextVNode(" component combines font selection, theme selection, and additional accessibility options into a single, user-friendly interface: ")
              ],
              -1
              /* HOISTED */
            )),
            createBaseVNode("div", _hoisted_6, [
              createVNode($setup["AccessibilitySettings"], {
                theme: $setup.selectedTheme,
                "onUpdate:theme": _cache[2] || (_cache[2] = ($event) => $setup.selectedTheme = $event),
                font: $setup.selectedFont,
                "onUpdate:font": _cache[3] || (_cache[3] = ($event) => $setup.selectedFont = $event),
                open: $setup.isOpen,
                "onUpdate:open": _cache[4] || (_cache[4] = ($event) => $setup.isOpen = $event)
              }, null, 8, ["theme", "font", "open"])
            ]),
            _cache[21] || (_cache[21] = createBaseVNode(
              "h2",
              null,
              "Features",
              -1
              /* HOISTED */
            )),
            _cache[22] || (_cache[22] = createBaseVNode(
              "ul",
              null,
              [
                createBaseVNode("li", null, [
                  createBaseVNode("strong", null, "Theme Selection"),
                  createTextVNode(": Choose from various accessibility-focused themes ")
                ]),
                createBaseVNode("li", null, [
                  createBaseVNode("strong", null, "Font Selection"),
                  createTextVNode(": Choose from accessible font options")
                ]),
                createBaseVNode("li", null, [
                  createBaseVNode("strong", null, "Font Size Adjustment"),
                  createTextVNode(": Increase text size for better readability")
                ]),
                createBaseVNode("li", null, [
                  createBaseVNode("strong", null, "Text Spacing"),
                  createTextVNode(": Enable enhanced spacing for easier reading")
                ]),
                createBaseVNode("li", null, [
                  createBaseVNode("strong", null, "Motion Reduction"),
                  createTextVNode(": Minimize animations and transitions")
                ]),
                createBaseVNode("li", null, [
                  createBaseVNode("strong", null, "Focus Mode"),
                  createTextVNode(": Reduce visual distractions")
                ]),
                createBaseVNode("li", null, [
                  createBaseVNode("strong", null, "Reset Option"),
                  createTextVNode(": Return to default settings")
                ])
              ],
              -1
              /* HOISTED */
            )),
            _cache[23] || (_cache[23] = createBaseVNode(
              "h2",
              null,
              "Recommended Implementation",
              -1
              /* HOISTED */
            )),
            _cache[24] || (_cache[24] = createBaseVNode(
              "p",
              null,
              "For the best user experience, we recommend:",
              -1
              /* HOISTED */
            )),
            _cache[25] || (_cache[25] = createBaseVNode(
              "ol",
              null,
              [
                createBaseVNode("li", null, [
                  createTextVNode(" Placing the "),
                  createBaseVNode("code", null, "AccessibilitySettings"),
                  createTextVNode(" component in a consistent location across your application, such as in the header or footer. ")
                ]),
                createBaseVNode("li", null, "Persisting user preferences using localStorage or a similar mechanism."),
                createBaseVNode("li", null, "Applying the selected theme and font to the entire application."),
                createBaseVNode("li", null, "Ensuring that all custom components respect the theme variables.")
              ],
              -1
              /* HOISTED */
            ))
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Best Practices" }, {
        default: withCtx(() => _cache[26] || (_cache[26] = [
          createBaseVNode(
            "div",
            { class: "guide-container" },
            [
              createBaseVNode("h1", null, "Accessibility Best Practices"),
              createBaseVNode("p", null, " When implementing the OpenBadges UI components in your application, follow these best practices to ensure maximum accessibility: "),
              createBaseVNode("h2", null, "General Guidelines"),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createBaseVNode("strong", null, "Semantic HTML"),
                  createTextVNode(": Use appropriate HTML elements for their intended purpose. ")
                ]),
                createBaseVNode("li", null, [
                  createBaseVNode("strong", null, "Keyboard Navigation"),
                  createTextVNode(": Ensure all interactive elements are keyboard accessible. ")
                ]),
                createBaseVNode("li", null, [
                  createBaseVNode("strong", null, "Focus Management"),
                  createTextVNode(": Maintain a logical tab order and visible focus indicators. ")
                ]),
                createBaseVNode("li", null, [
                  createBaseVNode("strong", null, "Screen Reader Support"),
                  createTextVNode(": Use appropriate ARIA attributes and ensure meaningful text alternatives. ")
                ]),
                createBaseVNode("li", null, [
                  createBaseVNode("strong", null, "Color Contrast"),
                  createTextVNode(": Maintain sufficient contrast between text and background colors. ")
                ]),
                createBaseVNode("li", null, [
                  createBaseVNode("strong", null, "Text Resizing"),
                  createTextVNode(": Ensure the interface remains usable when text is resized up to 200%. ")
                ]),
                createBaseVNode("li", null, [
                  createBaseVNode("strong", null, "Responsive Design"),
                  createTextVNode(": Ensure the interface adapts to different screen sizes and orientations. ")
                ])
              ]),
              createBaseVNode("h2", null, "Font and Typography"),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, "Offer users a choice of fonts, including dyslexia-friendly options."),
                createBaseVNode("li", null, "Use a minimum font size of 16px (1rem) for body text."),
                createBaseVNode("li", null, "Maintain a line height of at least 1.5 for body text."),
                createBaseVNode("li", null, ' Avoid justified text, which can create uneven spacing and "rivers" of white space. '),
                createBaseVNode("li", null, "Limit line length to 80 characters or less for optimal readability."),
                createBaseVNode("li", null, "Use sufficient spacing between paragraphs.")
              ]),
              createBaseVNode("h2", null, "Color and Contrast"),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, " Ensure text has a contrast ratio of at least 4.5:1 against its background (WCAG AA). "),
                createBaseVNode("li", null, "Don't rely on color alone to convey information."),
                createBaseVNode("li", null, "Provide high contrast themes for users with low vision."),
                createBaseVNode("li", null, "Consider offering a dark theme for users with light sensitivity."),
                createBaseVNode("li", null, "Test your interface in high contrast mode.")
              ]),
              createBaseVNode("h2", null, "Motion and Animation"),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createTextVNode(" Respect the user's motion preferences ("),
                  createBaseVNode("code", null, "prefers-reduced-motion"),
                  createTextVNode(" media query). ")
                ]),
                createBaseVNode("li", null, "Provide options to reduce or disable animations."),
                createBaseVNode("li", null, "Avoid content that flashes more than three times per second."),
                createBaseVNode("li", null, "Ensure animations are subtle and purposeful.")
              ]),
              createBaseVNode("h2", null, "Forms and Interactive Elements"),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, "Use clear, descriptive labels for form fields."),
                createBaseVNode("li", null, "Provide helpful error messages that suggest how to fix the problem."),
                createBaseVNode("li", null, " Ensure form fields have sufficient size for touch interaction (minimum 44x44 pixels). "),
                createBaseVNode("li", null, "Group related form fields using fieldset and legend."),
                createBaseVNode("li", null, "Provide clear focus states for all interactive elements.")
              ]),
              createBaseVNode("h2", null, "Resources"),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, [
                  createBaseVNode("a", {
                    href: "https://www.w3.org/WAI/standards-guidelines/wcag/",
                    target: "_blank"
                  }, "Web Content Accessibility Guidelines (WCAG)")
                ]),
                createBaseVNode("li", null, [
                  createBaseVNode("a", {
                    href: "https://www.w3.org/WAI/ARIA/apg/",
                    target: "_blank"
                  }, "ARIA Authoring Practices Guide")
                ]),
                createBaseVNode("li", null, [
                  createBaseVNode("a", {
                    href: "https://webaim.org/",
                    target: "_blank"
                  }, "WebAIM")
                ]),
                createBaseVNode("li", null, [
                  createBaseVNode("a", {
                    href: "https://www.a11yproject.com/",
                    target: "_blank"
                  }, "The A11Y Project")
                ]),
                createBaseVNode("li", null, [
                  createBaseVNode("a", {
                    href: "https://www.bdadyslexia.org.uk/advice/employers/creating-a-dyslexia-friendly-workplace/dyslexia-friendly-style-guide",
                    target: "_blank"
                  }, "British Dyslexia Association Style Guide")
                ])
              ])
            ],
            -1
            /* HOISTED */
          )
        ])),
        _: 1,
        __: [26]
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/accessibility/AccessibilityGuide.story.vue";
const AccessibilityGuide_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-dbdc7932"], ["__file", "/home/runner/work/openbadges-ui/openbadges-ui/src/components/accessibility/AccessibilityGuide.story.vue"]]);
export {
  AccessibilityGuide_story as default
};
//# sourceMappingURL=AccessibilityGuide.story-5cc4c230.js.map
