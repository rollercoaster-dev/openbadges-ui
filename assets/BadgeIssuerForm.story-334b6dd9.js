import { aq as defineComponent, ar as ref, as as resolveComponent, at as openBlock, au as createBlock, av as withCtx, aw as createVNode, ax as createBaseVNode } from "./vendor-0a8d26a3.js";
import { B as BadgeIssuerForm } from "./BadgeIssuerForm-16a8fc60.js";
import { c as mockBadgeClasses } from "./mockData-72c9d2de.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "./BadgeService-6d49e27e.js";
const BadgeIssuerForm_story_vue_vue_type_style_index_0_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BadgeIssuerForm.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const state = ref({
      initialBadgeClass: {},
      initialRecipientEmail: ""
    });
    const prefilledState = {
      initialBadgeClass: {
        ...mockBadgeClasses[0],
        name: "Programming Excellence",
        description: "Awarded for demonstrating exceptional programming skills",
        issuer: {
          id: "https://example.org/issuer",
          type: "Profile",
          name: "Rollercoaster.dev"
        }
      },
      initialRecipientEmail: "recipient@example.org"
    };
    const validationErrorState = {
      initialBadgeClass: {
        name: "",
        // Empty name to trigger validation error
        description: "This badge will show validation errors",
        issuer: {
          id: "https://example.org/issuer",
          type: "Profile",
          name: "Rollercoaster.dev"
        }
      },
      initialRecipientEmail: "invalid-email"
      // Invalid email to trigger validation error
    };
    function onBadgeIssued(assertion) {
      console.log("Badge issued:", assertion);
    }
    function onReset() {
      console.log("Form reset");
    }
    const __returned__ = { state, prefilledState, validationErrorState, onBadgeIssued, onReset, BadgeIssuerForm };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Components/Issuing/BadgeIssuerForm",
    layout: { type: "single", iframe: true }
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Empty" }, {
        default: withCtx(() => [
          createVNode($setup["BadgeIssuerForm"], {
            "initial-badge-class": $setup.state.initialBadgeClass,
            "initial-recipient-email": $setup.state.initialRecipientEmail,
            onBadgeIssued: $setup.onBadgeIssued,
            onReset: $setup.onReset
          }, null, 8, ["initial-badge-class", "initial-recipient-email"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Prefilled" }, {
        default: withCtx(() => [
          createVNode($setup["BadgeIssuerForm"], {
            "initial-badge-class": $setup.prefilledState.initialBadgeClass,
            "initial-recipient-email": $setup.prefilledState.initialRecipientEmail,
            onBadgeIssued: $setup.onBadgeIssued,
            onReset: $setup.onReset
          }, null, 8, ["initial-badge-class", "initial-recipient-email"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "With Validation Errors" }, {
        default: withCtx(() => [
          _cache[0] || (_cache[0] = createBaseVNode(
            "div",
            { class: "story-description" },
            " This story demonstrates the form with validation errors. ",
            -1
            /* HOISTED */
          )),
          createVNode($setup["BadgeIssuerForm"], {
            "initial-badge-class": $setup.validationErrorState.initialBadgeClass,
            "initial-recipient-email": $setup.validationErrorState.initialRecipientEmail,
            onBadgeIssued: $setup.onBadgeIssued,
            onReset: $setup.onReset
          }, null, 8, ["initial-badge-class", "initial-recipient-email"])
        ]),
        _: 1,
        __: [0]
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/issuing/BadgeIssuerForm.story.vue";
const BadgeIssuerForm_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/openbadges-ui/openbadges-ui/src/components/issuing/BadgeIssuerForm.story.vue"]]);
export {
  BadgeIssuerForm_story as default
};
//# sourceMappingURL=BadgeIssuerForm.story-334b6dd9.js.map
