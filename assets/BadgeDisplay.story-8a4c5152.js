import { aq as defineComponent, ar as ref, as as resolveComponent, at as openBlock, au as createBlock, av as withCtx, aw as createVNode } from "./vendor-6808bd13.js";
import { B as BadgeDisplay } from "./BadgeDisplay-d6583be8.js";
import { _ as _export_sfc, m as mockAssertions, a as mockOB3Credential } from "./mockData-2abc48a9.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BadgeDisplay.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const state = ref({
      badge: mockAssertions[0],
      showDescription: true,
      showIssuedDate: true,
      showExpiryDate: false,
      interactive: false
    });
    const badgeWithExpiry = {
      ...mockAssertions[0],
      expires: "2026-01-15T12:00:00Z"
    };
    function onBadgeClick(badge) {
      console.log("Badge clicked:", badge);
    }
    const __returned__ = { state, badgeWithExpiry, onBadgeClick, BadgeDisplay, get mockOB3Credential() {
      return mockOB3Credential;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Components/Badges/BadgeDisplay" }, {
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
            onClick: $setup.onBadgeClick
          }, null, 8, ["badge", "show-description", "show-issued-date", "show-expiry-date", "interactive"])
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
            onClick: $setup.onBadgeClick
          }, null, 8, ["badge", "show-description", "show-issued-date", "show-expiry-date"])
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
            onClick: $setup.onBadgeClick
          }, null, 8, ["badge", "show-issued-date", "show-expiry-date", "interactive"])
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
            onClick: $setup.onBadgeClick
          }, null, 8, ["show-description", "show-issued-date", "interactive"])
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
            onClick: $setup.onBadgeClick
          }, null, 8, ["badge", "show-description", "show-issued-date", "show-expiry-date", "interactive"])
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
//# sourceMappingURL=BadgeDisplay.story-8a4c5152.js.map
