import { aq as defineComponent, ar as ref, as as resolveComponent, at as openBlock, au as createBlock, av as withCtx, aw as createVNode } from "./vendor-0a8d26a3.js";
import { B as BadgeVerification } from "./BadgeVerification-2d670e4c.js";
import { m as mockAssertions, a as mockOB3Credential } from "./mockData-72c9d2de.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BadgeVerification.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const state = ref({
      badge: mockAssertions[0],
      showStatus: true,
      showDetails: true,
      showLastVerified: true,
      autoVerify: false
    });
    const expiredBadge = {
      ...mockAssertions[0],
      expires: "2020-01-01T00:00:00Z"
      // Past date
    };
    const revokedBadge = {
      ...mockAssertions[0],
      revoked: true,
      revocationReason: "Badge was issued in error"
    };
    function onVerified(isValid) {
      console.log("Badge verified:", isValid);
    }
    const __returned__ = { state, expiredBadge, revokedBadge, onVerified, BadgeVerification, get mockOB3Credential() {
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
  return openBlock(), createBlock(_component_Story, {
    title: "Components/Badges/BadgeVerification",
    layout: { type: "single", iframe: true }
  }, {
    controls: withCtx(() => [
      createVNode(_component_HstCheckbox, {
        modelValue: $setup.state.showStatus,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.state.showStatus = $event),
        title: "Show Status"
      }, null, 8, ["modelValue"]),
      createVNode(_component_HstCheckbox, {
        modelValue: $setup.state.showDetails,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.state.showDetails = $event),
        title: "Show Details"
      }, null, 8, ["modelValue"]),
      createVNode(_component_HstCheckbox, {
        modelValue: $setup.state.showLastVerified,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.state.showLastVerified = $event),
        title: "Show Last Verified"
      }, null, 8, ["modelValue"]),
      createVNode(_component_HstCheckbox, {
        modelValue: $setup.state.autoVerify,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.state.autoVerify = $event),
        title: "Auto Verify"
      }, null, 8, ["modelValue"])
    ]),
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createVNode($setup["BadgeVerification"], {
            badge: $setup.state.badge,
            "show-status": $setup.state.showStatus,
            "show-details": $setup.state.showDetails,
            "show-last-verified": $setup.state.showLastVerified,
            "auto-verify": $setup.state.autoVerify,
            onVerified: $setup.onVerified
          }, null, 8, ["badge", "show-status", "show-details", "show-last-verified", "auto-verify"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Expired Badge" }, {
        default: withCtx(() => [
          createVNode($setup["BadgeVerification"], {
            badge: $setup.expiredBadge,
            "show-status": $setup.state.showStatus,
            "show-details": $setup.state.showDetails,
            "show-last-verified": $setup.state.showLastVerified,
            "auto-verify": $setup.state.autoVerify,
            onVerified: $setup.onVerified
          }, null, 8, ["show-status", "show-details", "show-last-verified", "auto-verify"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Revoked Badge" }, {
        default: withCtx(() => [
          createVNode($setup["BadgeVerification"], {
            badge: $setup.revokedBadge,
            "show-status": $setup.state.showStatus,
            "show-details": $setup.state.showDetails,
            "show-last-verified": $setup.state.showLastVerified,
            "auto-verify": $setup.state.autoVerify,
            onVerified: $setup.onVerified
          }, null, 8, ["show-status", "show-details", "show-last-verified", "auto-verify"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "OB3 Badge" }, {
        default: withCtx(() => [
          createVNode($setup["BadgeVerification"], {
            badge: $setup.mockOB3Credential,
            "show-status": $setup.state.showStatus,
            "show-details": $setup.state.showDetails,
            "show-last-verified": $setup.state.showLastVerified,
            "auto-verify": $setup.state.autoVerify,
            onVerified: $setup.onVerified
          }, null, 8, ["badge", "show-status", "show-details", "show-last-verified", "auto-verify"])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/badges/BadgeVerification.story.vue";
const BadgeVerification_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/openbadges-ui/openbadges-ui/src/components/badges/BadgeVerification.story.vue"]]);
export {
  BadgeVerification_story as default
};
//# sourceMappingURL=BadgeVerification.story-11999b47.js.map
