import { aq as defineComponent, aE as computed, ar as ref, at as openBlock, aA as createElementBlock, ax as createBaseVNode, aC as toDisplayString, aD as createCommentVNode, aO as withKeys, aP as withModifiers, aw as createVNode, aI as renderSlot, aF as normalizeClass } from "./vendor-0a8d26a3.js";
import { B as BadgeService } from "./BadgeService-6d49e27e.js";
import { B as BadgeVerification } from "./BadgeVerification-2d670e4c.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const BadgeDisplay_vue_vue_type_style_index_0_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BadgeDisplay",
  props: {
    badge: { type: Object, required: true },
    showDescription: { type: Boolean, required: false, default: true },
    showIssuedDate: { type: Boolean, required: false, default: true },
    showExpiryDate: { type: Boolean, required: false, default: false },
    interactive: { type: Boolean, required: false, default: false },
    showVerification: { type: Boolean, required: false, default: false },
    autoVerify: { type: Boolean, required: false, default: false },
    contentDensity: { type: String, required: false, default: "normal" },
    simplifiedView: { type: Boolean, required: false, default: false }
  },
  emits: ["click", "verified"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const normalizedBadge = computed(() => {
      return BadgeService.normalizeBadge(props.badge);
    });
    const formatDate = (dateString) => {
      try {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric"
        }).format(date);
      } catch (e) {
        return dateString;
      }
    };
    const generateAltText = (badgeName) => {
      return `Badge: ${badgeName}`;
    };
    const handleClick = () => {
      if (props.interactive) {
        emit("click", props.badge);
      }
    };
    const handleVerified = (isValid) => {
      emit("verified", isValid);
    };
    const showVerificationDetails = ref(false);
    const toggleVerificationDetails = () => {
      showVerificationDetails.value = !showVerificationDetails.value;
    };
    const isFocused = ref(false);
    const onFocus = () => {
      isFocused.value = true;
    };
    const onBlur = () => {
      isFocused.value = false;
    };
    const densityClass = computed(() => {
      return `density-${props.contentDensity}`;
    });
    const __returned__ = { props, emit, normalizedBadge, formatDate, generateAltText, handleClick, handleVerified, showVerificationDetails, toggleVerificationDetails, isFocused, onFocus, onBlur, densityClass, BadgeVerification };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = ["tabindex", "onKeydown"];
const _hoisted_2 = { class: "manus-badge-image" };
const _hoisted_3 = ["src", "alt"];
const _hoisted_4 = { class: "manus-badge-content" };
const _hoisted_5 = { class: "manus-badge-title" };
const _hoisted_6 = {
  key: 0,
  class: "manus-badge-description"
};
const _hoisted_7 = {
  key: 1,
  class: "manus-badge-issuer"
};
const _hoisted_8 = {
  key: 2,
  class: "manus-badge-date"
};
const _hoisted_9 = {
  key: 3,
  class: "manus-badge-expiry"
};
const _hoisted_10 = {
  key: 4,
  class: "manus-badge-verification-toggle"
};
const _hoisted_11 = ["onKeydown"];
const _hoisted_12 = {
  key: 5,
  class: "manus-badge-verification-container"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["manus-badge-display", [$setup.densityClass, { "is-interactive": $props.interactive }]]),
    tabindex: $props.interactive ? 0 : void 0,
    onClick: $setup.handleClick,
    onKeydown: [
      withKeys($setup.handleClick, ["enter"]),
      withKeys(withModifiers($setup.handleClick, ["prevent"]), ["space"])
    ],
    onFocus: $setup.onFocus,
    onBlur: $setup.onBlur
  }, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("img", {
        src: $setup.normalizedBadge.image,
        alt: $setup.generateAltText($setup.normalizedBadge.name),
        class: "manus-badge-img"
      }, null, 8, _hoisted_3)
    ]),
    createBaseVNode("div", _hoisted_4, [
      createBaseVNode(
        "h3",
        _hoisted_5,
        toDisplayString($setup.normalizedBadge.name),
        1
        /* TEXT */
      ),
      $props.showDescription && !$props.simplifiedView ? (openBlock(), createElementBlock(
        "p",
        _hoisted_6,
        toDisplayString($setup.normalizedBadge.description),
        1
        /* TEXT */
      )) : createCommentVNode("v-if", true),
      !$props.simplifiedView ? (openBlock(), createElementBlock("div", _hoisted_7, [
        createBaseVNode(
          "span",
          null,
          "Issued by: " + toDisplayString($setup.normalizedBadge.issuer.name),
          1
          /* TEXT */
        )
      ])) : createCommentVNode("v-if", true),
      $props.showIssuedDate && !$props.simplifiedView ? (openBlock(), createElementBlock("div", _hoisted_8, [
        createBaseVNode(
          "span",
          null,
          "Issued: " + toDisplayString($setup.formatDate($setup.normalizedBadge.issuedOn)),
          1
          /* TEXT */
        )
      ])) : createCommentVNode("v-if", true),
      $props.showExpiryDate && $setup.normalizedBadge.expires && !$props.simplifiedView ? (openBlock(), createElementBlock("div", _hoisted_9, [
        createBaseVNode(
          "span",
          null,
          "Expires: " + toDisplayString($setup.formatDate($setup.normalizedBadge.expires)),
          1
          /* TEXT */
        )
      ])) : createCommentVNode("v-if", true),
      $props.showVerification && !$props.simplifiedView ? (openBlock(), createElementBlock("div", _hoisted_10, [
        createBaseVNode("button", {
          class: "manus-badge-verification-toggle-button",
          type: "button",
          onClick: $setup.toggleVerificationDetails,
          onKeydown: [
            withKeys(withModifiers($setup.toggleVerificationDetails, ["prevent"]), ["enter"]),
            withKeys(withModifiers($setup.toggleVerificationDetails, ["prevent"]), ["space"])
          ]
        }, toDisplayString($setup.showVerificationDetails ? "Hide Verification Details" : "Show Verification Details"), 41, _hoisted_11)
      ])) : createCommentVNode("v-if", true),
      $props.showVerification && $setup.showVerificationDetails && !$props.simplifiedView ? (openBlock(), createElementBlock("div", _hoisted_12, [
        createVNode($setup["BadgeVerification"], {
          badge: $props.badge,
          "auto-verify": $props.autoVerify,
          onVerified: $setup.handleVerified
        }, null, 8, ["badge", "auto-verify"])
      ])) : createCommentVNode("v-if", true),
      renderSlot(_ctx.$slots, "badge-actions")
    ])
  ], 42, _hoisted_1);
}
_sfc_main.__file = "src/components/badges/BadgeDisplay.vue";
const BadgeDisplay = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/openbadges-ui/openbadges-ui/src/components/badges/BadgeDisplay.vue"]]);
export {
  BadgeDisplay as B
};
//# sourceMappingURL=BadgeDisplay-32bf2458.js.map
