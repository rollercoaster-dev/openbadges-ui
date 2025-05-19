import { aq as defineComponent, ar as ref, as as resolveComponent, at as openBlock, au as createBlock, av as withCtx, ax as createBaseVNode, ay as createTextVNode, aw as createVNode } from "./vendor-0a8d26a3.js";
import { B as BadgeDisplay } from "./BadgeDisplay-32bf2458.js";
import { m as mockAssertions, a as mockOB3Credential } from "./mockData-72c9d2de.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "./BadgeService-6d49e27e.js";
import "./BadgeVerification-2d670e4c.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BadgeDisplay.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const state = ref({
      badge: mockAssertions[0],
      showDescription: true,
      showIssuedDate: true,
      showExpiryDate: false,
      interactive: false,
      showVerification: false,
      autoVerify: false,
      // Neurodiversity enhancements
      contentDensity: "normal",
      simplifiedView: false
    });
    const badgeWithExpiry = {
      ...mockAssertions[0],
      expires: "2026-01-15T12:00:00Z"
    };
    function onBadgeClick(badge) {
      console.log("Badge clicked:", badge);
    }
    function onVerified(isValid) {
      console.log("Badge verified:", isValid);
    }
    const __returned__ = { state, badgeWithExpiry, onBadgeClick, onVerified, BadgeDisplay, get mockOB3Credential() {
      return mockOB3Credential;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_HstSelect = resolveComponent("HstSelect");
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Components/Badges/BadgeDisplay",
    layout: { type: "single", iframe: true }
  }, {
    docs: withCtx(() => _cache[8] || (_cache[8] = [
      createBaseVNode(
        "div",
        { class: "histoire-docs" },
        [
          createBaseVNode("h1", null, "BadgeDisplay"),
          createBaseVNode("p", null, [
            createTextVNode(" The "),
            createBaseVNode("code", null, "BadgeDisplay"),
            createTextVNode(" component renders a single badge with its image, name, description, issuer information, and dates. ")
          ]),
          createBaseVNode("h2", null, "When To Use"),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, "When you need to display a single badge with its details"),
            createBaseVNode("li", null, "When you want to show badge information in a consistent format"),
            createBaseVNode("li", null, "When you need to display badges from different formats (OB2 and OB3)")
          ]),
          createBaseVNode("h2", null, "Examples"),
          createBaseVNode("p", null, "Use the controls in the right panel to customize the component behavior."),
          createBaseVNode("h3", null, "Basic Usage"),
          createBaseVNode("pre", null, [
            createBaseVNode("code", null, '<BadgeDisplay :badge="myBadge" />')
          ]),
          createBaseVNode("h3", null, "Interactive Badge"),
          createBaseVNode("pre", null, [
            createBaseVNode("code", null, '<BadgeDisplay :badge="myBadge" :interactive="true" @click="handleBadgeClick" />')
          ]),
          createBaseVNode("h3", null, "With Verification"),
          createBaseVNode("pre", null, [
            createBaseVNode("code", null, '<BadgeDisplay\n  :badge="myBadge"\n  :show-verification="true"\n  :auto-verify="true"\n  @verified="handleVerified"\n/>')
          ]),
          createBaseVNode("h3", null, "Custom Display Options"),
          createBaseVNode("pre", null, [
            createBaseVNode("code", null, '<BadgeDisplay\n  :badge="myBadge"\n  :show-description="true"\n  :show-issued-date="true"\n  :show-expiry-date="true"\n/>')
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
                  createBaseVNode("code", null, "badge")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "OB2.Assertion | OB3.VerifiableCredential")
                ]),
                createBaseVNode("td", null, "Required"),
                createBaseVNode("td", null, "The badge to display")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "showDescription")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "boolean")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "true")
                ]),
                createBaseVNode("td", null, "Whether to show the badge description")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "showIssuedDate")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "boolean")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "true")
                ]),
                createBaseVNode("td", null, "Whether to show the badge issue date")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "showExpiryDate")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "boolean")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "false")
                ]),
                createBaseVNode("td", null, "Whether to show the badge expiry date")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "interactive")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "boolean")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "false")
                ]),
                createBaseVNode("td", null, "Whether the badge is clickable")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "showVerification")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "boolean")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "false")
                ]),
                createBaseVNode("td", null, "Whether to show badge verification controls")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "autoVerify")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "boolean")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "false")
                ]),
                createBaseVNode("td", null, "Whether to automatically verify the badge")
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
                  createBaseVNode("code", null, "click")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "OB2.Assertion | OB3.VerifiableCredential")
                ]),
                createBaseVNode("td", null, "Emitted when the badge is clicked (if interactive is true)")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "verified")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "boolean")
                ]),
                createBaseVNode("td", null, "Emitted when a badge has been verified")
              ])
            ])
          ]),
          createBaseVNode("h2", null, "Slots"),
          createBaseVNode("table", null, [
            createBaseVNode("thead", null, [
              createBaseVNode("tr", null, [
                createBaseVNode("th", null, "Name"),
                createBaseVNode("th", null, "Description")
              ])
            ]),
            createBaseVNode("tbody", null, [
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "badge-actions")
                ]),
                createBaseVNode("td", null, "Additional actions to display below the badge content")
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
                  createBaseVNode("code", null, "--badge-border-color")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "#e2e8f0")
                ]),
                createBaseVNode("td", null, "The color of the badge border")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "--badge-border-radius")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "8px")
                ]),
                createBaseVNode("td", null, "The border radius of the badge")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "--badge-background")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "#ffffff")
                ]),
                createBaseVNode("td", null, "The background color of the badge")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "--badge-title-color")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "#1a202c")
                ]),
                createBaseVNode("td", null, "The color of the badge title")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "--badge-text-color")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "#4a5568")
                ]),
                createBaseVNode("td", null, "The color of the badge text")
              ])
            ])
          ]),
          createBaseVNode("h2", null, "Accessibility"),
          createBaseVNode("p", null, "The component includes several accessibility features:"),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createTextVNode("When interactive, the component receives a "),
              createBaseVNode("code", null, 'tabindex="0"'),
              createTextVNode(" attribute")
            ]),
            createBaseVNode("li", null, "The component responds to both click and Enter key events when interactive"),
            createBaseVNode("li", null, "Badge images have descriptive alt text"),
            createBaseVNode("li", null, "Dates are formatted in a readable format"),
            createBaseVNode("li", null, "Focus states are visually indicated with an outline")
          ])
        ],
        -1
        /* HOISTED */
      )
    ])),
    controls: withCtx(() => [
      createVNode(_component_HstCheckbox, {
        modelValue: $setup.state.showDescription,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.state.showDescription = $event),
        title: "Show Description"
      }, null, 8, ["modelValue"]),
      createVNode(_component_HstCheckbox, {
        modelValue: $setup.state.showIssuedDate,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.state.showIssuedDate = $event),
        title: "Show Issued Date"
      }, null, 8, ["modelValue"]),
      createVNode(_component_HstCheckbox, {
        modelValue: $setup.state.showExpiryDate,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.state.showExpiryDate = $event),
        title: "Show Expiry Date"
      }, null, 8, ["modelValue"]),
      createVNode(_component_HstCheckbox, {
        modelValue: $setup.state.interactive,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.state.interactive = $event),
        title: "Interactive"
      }, null, 8, ["modelValue"]),
      createVNode(_component_HstCheckbox, {
        modelValue: $setup.state.showVerification,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.state.showVerification = $event),
        title: "Show Verification"
      }, null, 8, ["modelValue"]),
      createVNode(_component_HstCheckbox, {
        modelValue: $setup.state.autoVerify,
        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.state.autoVerify = $event),
        title: "Auto Verify"
      }, null, 8, ["modelValue"]),
      createVNode(_component_HstSelect, {
        modelValue: $setup.state.contentDensity,
        "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.state.contentDensity = $event),
        title: "Content Density",
        options: [
          { label: "Normal", value: "normal" },
          { label: "Compact", value: "compact" },
          { label: "Spacious", value: "spacious" }
        ]
      }, null, 8, ["modelValue"]),
      createVNode(_component_HstCheckbox, {
        modelValue: $setup.state.simplifiedView,
        "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.state.simplifiedView = $event),
        title: "Simplified View"
      }, null, 8, ["modelValue"])
    ]),
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createVNode($setup["BadgeDisplay"], {
            badge: $setup.state.badge,
            "show-description": $setup.state.showDescription,
            "show-issued-date": $setup.state.showIssuedDate,
            "show-expiry-date": $setup.state.showExpiryDate,
            interactive: $setup.state.interactive,
            "show-verification": $setup.state.showVerification,
            "auto-verify": $setup.state.autoVerify,
            "content-density": $setup.state.contentDensity,
            "simplified-view": $setup.state.simplifiedView,
            onClick: $setup.onBadgeClick,
            onVerified: $setup.onVerified
          }, null, 8, ["badge", "show-description", "show-issued-date", "show-expiry-date", "interactive", "show-verification", "auto-verify", "content-density", "simplified-view"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Interactive" }, {
        default: withCtx(() => [
          createVNode($setup["BadgeDisplay"], {
            badge: $setup.state.badge,
            "show-description": $setup.state.showDescription,
            "show-issued-date": $setup.state.showIssuedDate,
            "show-expiry-date": $setup.state.showExpiryDate,
            interactive: "",
            "show-verification": $setup.state.showVerification,
            "auto-verify": $setup.state.autoVerify,
            "content-density": $setup.state.contentDensity,
            "simplified-view": $setup.state.simplifiedView,
            onClick: $setup.onBadgeClick,
            onVerified: $setup.onVerified
          }, null, 8, ["badge", "show-description", "show-issued-date", "show-expiry-date", "show-verification", "auto-verify", "content-density", "simplified-view"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Without Description" }, {
        default: withCtx(() => [
          createVNode($setup["BadgeDisplay"], {
            badge: $setup.state.badge,
            "show-description": false,
            "show-issued-date": $setup.state.showIssuedDate,
            "show-expiry-date": $setup.state.showExpiryDate,
            interactive: $setup.state.interactive,
            "show-verification": $setup.state.showVerification,
            "auto-verify": $setup.state.autoVerify,
            "content-density": $setup.state.contentDensity,
            "simplified-view": $setup.state.simplifiedView,
            onClick: $setup.onBadgeClick,
            onVerified: $setup.onVerified
          }, null, 8, ["badge", "show-issued-date", "show-expiry-date", "interactive", "show-verification", "auto-verify", "content-density", "simplified-view"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "With Expiry Date" }, {
        default: withCtx(() => [
          createVNode($setup["BadgeDisplay"], {
            badge: $setup.badgeWithExpiry,
            "show-description": $setup.state.showDescription,
            "show-issued-date": $setup.state.showIssuedDate,
            "show-expiry-date": "",
            interactive: $setup.state.interactive,
            "show-verification": $setup.state.showVerification,
            "auto-verify": $setup.state.autoVerify,
            "content-density": $setup.state.contentDensity,
            "simplified-view": $setup.state.simplifiedView,
            onClick: $setup.onBadgeClick,
            onVerified: $setup.onVerified
          }, null, 8, ["show-description", "show-issued-date", "interactive", "show-verification", "auto-verify", "content-density", "simplified-view"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "OB3 Format" }, {
        default: withCtx(() => [
          createVNode($setup["BadgeDisplay"], {
            badge: $setup.mockOB3Credential,
            "show-description": $setup.state.showDescription,
            "show-issued-date": $setup.state.showIssuedDate,
            "show-expiry-date": $setup.state.showExpiryDate,
            interactive: $setup.state.interactive,
            "show-verification": $setup.state.showVerification,
            "auto-verify": $setup.state.autoVerify,
            "content-density": $setup.state.contentDensity,
            "simplified-view": $setup.state.simplifiedView,
            onClick: $setup.onBadgeClick,
            onVerified: $setup.onVerified
          }, null, 8, ["badge", "show-description", "show-issued-date", "show-expiry-date", "interactive", "show-verification", "auto-verify", "content-density", "simplified-view"])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/badges/BadgeDisplay.story.vue";
const BadgeDisplay_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/openbadges-ui/openbadges-ui/src/components/badges/BadgeDisplay.story.vue"]]);
export {
  BadgeDisplay_story as default
};
//# sourceMappingURL=BadgeDisplay.story-e2987309.js.map
