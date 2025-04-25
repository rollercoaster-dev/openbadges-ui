import { aq as defineComponent, ay as computed, at as openBlock, az as createElementBlock, ax as createBaseVNode, aB as toDisplayString, aA as createCommentVNode, aD as renderSlot, aG as normalizeClass, aN as withKeys } from "./vendor-6808bd13.js";
import { _ as _export_sfc, B as BadgeService } from "./mockData-2abc48a9.js";
const BadgeDisplay_vue_vue_type_style_index_0_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BadgeDisplay",
  props: {
    badge: { type: Object, required: true },
    showDescription: { type: Boolean, required: false, default: true },
    showIssuedDate: { type: Boolean, required: false, default: true },
    showExpiryDate: { type: Boolean, required: false, default: false },
    interactive: { type: Boolean, required: false, default: false }
  },
  emits: ["click"],
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
    const __returned__ = { props, emit, normalizedBadge, formatDate, generateAltText, handleClick };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = ["tabindex"];
const _hoisted_2 = { class: "manus-badge-image" };
const _hoisted_3 = ["src", "alt"];
const _hoisted_4 = { class: "manus-badge-content" };
const _hoisted_5 = { class: "manus-badge-title" };
const _hoisted_6 = {
  key: 0,
  class: "manus-badge-description"
};
const _hoisted_7 = { class: "manus-badge-issuer" };
const _hoisted_8 = {
  key: 1,
  class: "manus-badge-date"
};
const _hoisted_9 = {
  key: 2,
  class: "manus-badge-expiry"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["manus-badge-display", { "is-interactive": $props.interactive }]),
    tabindex: $props.interactive ? 0 : void 0,
    onClick: $setup.handleClick,
    onKeydown: withKeys($setup.handleClick, ["enter"])
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
      $props.showDescription ? (openBlock(), createElementBlock(
        "p",
        _hoisted_6,
        toDisplayString($setup.normalizedBadge.description),
        1
        /* TEXT */
      )) : createCommentVNode("v-if", true),
      createBaseVNode("div", _hoisted_7, [
        createBaseVNode(
          "span",
          null,
          "Issued by: " + toDisplayString($setup.normalizedBadge.issuer.name),
          1
          /* TEXT */
        )
      ]),
      $props.showIssuedDate ? (openBlock(), createElementBlock("div", _hoisted_8, [
        createBaseVNode(
          "span",
          null,
          "Issued: " + toDisplayString($setup.formatDate($setup.normalizedBadge.issuedOn)),
          1
          /* TEXT */
        )
      ])) : createCommentVNode("v-if", true),
      $props.showExpiryDate && $setup.normalizedBadge.expires ? (openBlock(), createElementBlock("div", _hoisted_9, [
        createBaseVNode(
          "span",
          null,
          "Expires: " + toDisplayString($setup.formatDate($setup.normalizedBadge.expires)),
          1
          /* TEXT */
        )
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
//# sourceMappingURL=BadgeDisplay-d6583be8.js.map
