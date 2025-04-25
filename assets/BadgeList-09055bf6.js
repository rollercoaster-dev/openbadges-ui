import { aq as defineComponent, ar as ref, aE as watch, ay as computed, at as openBlock, az as createElementBlock, ax as createBaseVNode, aD as renderSlot, aL as Fragment, aM as renderList, aB as toDisplayString, aA as createCommentVNode, aG as normalizeClass, aw as createVNode } from "./vendor-6808bd13.js";
import { _ as _export_sfc, B as BadgeService } from "./mockData-2abc48a9.js";
import { B as BadgeDisplay } from "./BadgeDisplay-d6583be8.js";
const BadgeList_vue_vue_type_style_index_0_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BadgeList",
  props: {
    badges: { type: Array, required: true },
    layout: { type: String, required: false, default: "grid" },
    interactive: { type: Boolean, required: false, default: true },
    loading: { type: Boolean, required: false, default: false },
    pageSize: { type: Number, required: false, default: 9 },
    currentPage: { type: Number, required: false, default: 1 },
    showPagination: { type: Boolean, required: false, default: false },
    ariaLabel: { type: String, required: false, default: "List of badges" }
  },
  emits: ["badge-click", "page-change"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const internalCurrentPage = ref(props.currentPage);
    watch(() => props.currentPage, (newPage) => {
      internalCurrentPage.value = newPage;
    });
    const totalPages = computed(() => {
      return Math.ceil(props.badges.length / props.pageSize);
    });
    const paginatedBadges = computed(() => {
      if (!props.showPagination) {
        return props.badges;
      }
      const start = (internalCurrentPage.value - 1) * props.pageSize;
      const end = start + props.pageSize;
      return props.badges.slice(start, end);
    });
    const normalizedBadges = computed(() => {
      return paginatedBadges.value.map((badge) => ({
        original: badge,
        ...BadgeService.normalizeBadge(badge)
      }));
    });
    const handleBadgeClick = (badge) => {
      emit("badge-click", badge);
    };
    const handlePageChange = (page) => {
      if (page < 1 || page > totalPages.value) {
        return;
      }
      internalCurrentPage.value = page;
      emit("page-change", page);
    };
    const __returned__ = { props, emit, internalCurrentPage, totalPages, paginatedBadges, normalizedBadges, handleBadgeClick, handlePageChange, BadgeDisplay };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = {
  key: 0,
  class: "manus-badge-list-loading",
  role: "status",
  "aria-live": "polite"
};
const _hoisted_2 = {
  key: 1,
  class: "manus-badge-list-empty",
  role: "status"
};
const _hoisted_3 = ["aria-label"];
const _hoisted_4 = {
  key: 3,
  class: "manus-badge-list-pagination"
};
const _hoisted_5 = ["disabled"];
const _hoisted_6 = { class: "manus-pagination-info" };
const _hoisted_7 = ["disabled"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(["manus-badge-list", { "grid-layout": $props.layout === "grid" }])
    },
    [
      $props.loading ? (openBlock(), createElementBlock("div", _hoisted_1, _cache[2] || (_cache[2] = [
        createBaseVNode(
          "span",
          null,
          "Loading badges...",
          -1
          /* HOISTED */
        )
      ]))) : $setup.normalizedBadges.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_2, [
        renderSlot(_ctx.$slots, "empty", {}, () => [
          _cache[3] || (_cache[3] = createBaseVNode(
            "p",
            null,
            "No badges found.",
            -1
            /* HOISTED */
          ))
        ])
      ])) : (openBlock(), createElementBlock("ul", {
        key: 2,
        class: "manus-badge-list-items",
        "aria-label": $props.ariaLabel
      }, [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList($setup.normalizedBadges, (badge) => {
            return openBlock(), createElementBlock("li", {
              key: badge.id,
              class: "manus-badge-list-item"
            }, [
              renderSlot(_ctx.$slots, "badge", {
                badge: badge.original,
                normalized: badge
              }, () => [
                createVNode($setup["BadgeDisplay"], {
                  badge: badge.original,
                  interactive: $props.interactive,
                  onClick: ($event) => $setup.handleBadgeClick(badge.original)
                }, null, 8, ["badge", "interactive", "onClick"])
              ])
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ], 8, _hoisted_3)),
      $props.showPagination && $setup.totalPages > 1 ? (openBlock(), createElementBlock("div", _hoisted_4, [
        createBaseVNode("button", {
          class: "manus-pagination-button",
          disabled: $props.currentPage === 1,
          "aria-label": "Previous page",
          onClick: _cache[0] || (_cache[0] = ($event) => $setup.handlePageChange($props.currentPage - 1))
        }, " Previous ", 8, _hoisted_5),
        createBaseVNode(
          "span",
          _hoisted_6,
          " Page " + toDisplayString($props.currentPage) + " of " + toDisplayString($setup.totalPages),
          1
          /* TEXT */
        ),
        createBaseVNode("button", {
          class: "manus-pagination-button",
          disabled: $props.currentPage === $setup.totalPages,
          "aria-label": "Next page",
          onClick: _cache[1] || (_cache[1] = ($event) => $setup.handlePageChange($props.currentPage + 1))
        }, " Next ", 8, _hoisted_7)
      ])) : createCommentVNode("v-if", true)
    ],
    2
    /* CLASS */
  );
}
_sfc_main.__file = "src/components/badges/BadgeList.vue";
const BadgeList = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/openbadges-ui/openbadges-ui/src/components/badges/BadgeList.vue"]]);
export {
  BadgeList as B
};
//# sourceMappingURL=BadgeList-09055bf6.js.map
