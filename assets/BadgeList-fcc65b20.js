import { aq as defineComponent, ar as ref, az as watch, aE as computed, at as openBlock, aA as createElementBlock, aD as createCommentVNode, ax as createBaseVNode, aK as withDirectives, aM as vModelText, aN as vModelSelect, aI as renderSlot, aG as Fragment, aH as renderList, aC as toDisplayString, aF as normalizeClass, aO as withKeys, aw as createVNode } from "./vendor-0a8d26a3.js";
import { B as BadgeService } from "./BadgeService-6d49e27e.js";
import { B as BadgeDisplay } from "./BadgeDisplay-32bf2458.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
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
    ariaLabel: { type: String, required: false, default: "List of badges" },
    density: { type: String, required: false, default: "normal" }
  },
  emits: ["badge-click", "page-change"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const internalCurrentPage = ref(props.currentPage);
    watch(
      () => props.currentPage,
      (newPage) => {
        internalCurrentPage.value = newPage;
      }
    );
    const filterText = ref("");
    const filterEarned = ref("all");
    const expandedBadges = ref(/* @__PURE__ */ new Set());
    const filteredBadges = computed(() => {
      let filtered = props.badges;
      if (filterText.value) {
        filtered = filtered.filter((badge) => {
          var _a;
          const name = ((_a = badge.badge) == null ? void 0 : _a.name) || badge.name || "";
          return name.toLowerCase().includes(filterText.value.toLowerCase());
        });
      }
      if (filterEarned.value !== "all") {
        filtered = filtered.filter((badge) => {
          if (filterEarned.value === "earned")
            return true;
          if (filterEarned.value === "not-earned")
            return false;
          return true;
        });
      }
      return filtered;
    });
    const totalPages = computed(() => {
      return Math.ceil(filteredBadges.value.length / props.pageSize);
    });
    const paginatedBadges = computed(() => {
      if (!props.showPagination) {
        return filteredBadges.value;
      }
      const start = (internalCurrentPage.value - 1) * props.pageSize;
      const end = start + props.pageSize;
      return filteredBadges.value.slice(start, end);
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
    const __returned__ = { props, emit, internalCurrentPage, filterText, filterEarned, expandedBadges, filteredBadges, totalPages, paginatedBadges, normalizedBadges, handleBadgeClick, handlePageChange, BadgeDisplay };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = {
  class: "manus-badge-list-controls",
  role: "region",
  "aria-label": "Badge list controls"
};
const _hoisted_2 = {
  key: 0,
  class: "manus-badge-list-loading",
  role: "status",
  "aria-live": "polite"
};
const _hoisted_3 = {
  key: 1,
  class: "manus-badge-list-empty",
  role: "status"
};
const _hoisted_4 = ["aria-label"];
const _hoisted_5 = ["onKeydown"];
const _hoisted_6 = ["onClick", "aria-expanded"];
const _hoisted_7 = ["aria-label"];
const _hoisted_8 = {
  key: 0,
  class: "badge-details",
  tabindex: "0"
};
const _hoisted_9 = {
  key: 3,
  class: "manus-badge-list-pagination",
  role: "navigation",
  "aria-label": "Pagination"
};
const _hoisted_10 = ["disabled"];
const _hoisted_11 = { class: "manus-pagination-info" };
const _hoisted_12 = ["disabled"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(["manus-badge-list", [`density-${$props.density}`, { "grid-layout": $props.layout === "grid" }]])
    },
    [
      createCommentVNode(" Neurodiversity filter and density controls "),
      createBaseVNode("div", _hoisted_1, [
        withDirectives(createBaseVNode(
          "input",
          {
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.filterText = $event),
            class: "manus-badge-list-filter-input",
            type: "search",
            placeholder: "Filter badges by keyword",
            "aria-label": "Filter badges by keyword"
          },
          null,
          512
          /* NEED_PATCH */
        ), [
          [vModelText, $setup.filterText]
        ]),
        withDirectives(createBaseVNode(
          "select",
          {
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.filterEarned = $event),
            class: "manus-badge-list-filter-select",
            "aria-label": "Filter by earned status"
          },
          _cache[5] || (_cache[5] = [
            createBaseVNode(
              "option",
              { value: "all" },
              "All",
              -1
              /* HOISTED */
            ),
            createBaseVNode(
              "option",
              { value: "earned" },
              "Earned",
              -1
              /* HOISTED */
            ),
            createBaseVNode(
              "option",
              { value: "not-earned" },
              "Not Earned",
              -1
              /* HOISTED */
            )
          ]),
          512
          /* NEED_PATCH */
        ), [
          [vModelSelect, $setup.filterEarned]
        ]),
        withDirectives(createBaseVNode(
          "select",
          {
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.props.density = $event),
            class: "manus-badge-list-density-select",
            "aria-label": "Display density"
          },
          _cache[6] || (_cache[6] = [
            createBaseVNode(
              "option",
              { value: "compact" },
              "Compact",
              -1
              /* HOISTED */
            ),
            createBaseVNode(
              "option",
              { value: "normal" },
              "Normal",
              -1
              /* HOISTED */
            ),
            createBaseVNode(
              "option",
              { value: "spacious" },
              "Spacious",
              -1
              /* HOISTED */
            )
          ]),
          512
          /* NEED_PATCH */
        ), [
          [vModelSelect, $setup.props.density]
        ])
      ]),
      $props.loading ? (openBlock(), createElementBlock("div", _hoisted_2, _cache[7] || (_cache[7] = [
        createBaseVNode(
          "span",
          null,
          "Loading badges...",
          -1
          /* HOISTED */
        )
      ]))) : $setup.normalizedBadges.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_3, [
        renderSlot(_ctx.$slots, "empty", {}, () => [
          _cache[8] || (_cache[8] = createBaseVNode(
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
              class: normalizeClass(["manus-badge-list-item", { "is-expanded": $setup.expandedBadges.has(badge.id) }]),
              tabindex: "0",
              onKeydown: withKeys(($event) => $setup.expandedBadges.has(badge.id) ? $setup.expandedBadges.delete(badge.id) : $setup.expandedBadges.add(badge.id), ["enter"])
            }, [
              createBaseVNode("div", {
                class: "badge-summary",
                onClick: ($event) => $setup.expandedBadges.has(badge.id) ? $setup.expandedBadges.delete(badge.id) : $setup.expandedBadges.add(badge.id),
                "aria-expanded": $setup.expandedBadges.has(badge.id),
                tabindex: "0"
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
                ]),
                createBaseVNode("button", {
                  class: "badge-expand-btn",
                  "aria-label": $setup.expandedBadges.has(badge.id) ? "Collapse details" : "Expand details"
                }, toDisplayString($setup.expandedBadges.has(badge.id) ? "Show Less" : "Show More"), 9, _hoisted_7)
              ], 8, _hoisted_6),
              $setup.expandedBadges.has(badge.id) ? (openBlock(), createElementBlock("div", _hoisted_8, [
                createCommentVNode(" Progressive disclosure: show more badge details here "),
                createBaseVNode(
                  "pre",
                  null,
                  toDisplayString(badge),
                  1
                  /* TEXT */
                )
              ])) : createCommentVNode("v-if", true)
            ], 42, _hoisted_5);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ], 8, _hoisted_4)),
      $props.showPagination && $setup.totalPages > 1 ? (openBlock(), createElementBlock("div", _hoisted_9, [
        createBaseVNode("button", {
          class: "manus-pagination-button",
          disabled: $props.currentPage === 1,
          "aria-label": "Previous page",
          onClick: _cache[3] || (_cache[3] = ($event) => $setup.handlePageChange($props.currentPage - 1)),
          tabindex: "0"
        }, " Previous ", 8, _hoisted_10),
        createBaseVNode(
          "span",
          _hoisted_11,
          " Page " + toDisplayString($props.currentPage) + " of " + toDisplayString($setup.totalPages),
          1
          /* TEXT */
        ),
        createBaseVNode("button", {
          class: "manus-pagination-button",
          disabled: $props.currentPage === $setup.totalPages,
          "aria-label": "Next page",
          onClick: _cache[4] || (_cache[4] = ($event) => $setup.handlePageChange($props.currentPage + 1)),
          tabindex: "0"
        }, " Next ", 8, _hoisted_12)
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
//# sourceMappingURL=BadgeList-fcc65b20.js.map
