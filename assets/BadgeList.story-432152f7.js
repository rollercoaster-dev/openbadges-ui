import { aq as defineComponent, ar as ref, as as resolveComponent, at as openBlock, au as createBlock, av as withCtx, aw as createVNode, ax as createBaseVNode } from "./vendor-6808bd13.js";
import { B as BadgeList } from "./BadgeList-09055bf6.js";
import { _ as _export_sfc, m as mockAssertions } from "./mockData-2abc48a9.js";
import "./BadgeDisplay-d6583be8.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BadgeList.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const state = ref({
      badges: mockAssertions,
      layout: "grid",
      interactive: true,
      loading: false,
      pageSize: 9,
      currentPage: 1,
      showPagination: false,
      ariaLabel: "List of badges"
    });
    function onBadgeClick(badge) {
      console.log("Badge clicked:", badge);
    }
    function onPageChange(page) {
      console.log("Page changed:", page);
      state.value.currentPage = page;
    }
    const __returned__ = { state, onBadgeClick, onPageChange, BadgeList };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_HstSelect = resolveComponent("HstSelect");
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_HstNumber = resolveComponent("HstNumber");
  const _component_HstText = resolveComponent("HstText");
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Components/Badges/BadgeList",
    layout: { type: "single", iframe: true }
  }, {
    controls: withCtx(() => [
      createVNode(_component_HstSelect, {
        modelValue: $setup.state.layout,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.state.layout = $event),
        title: "Layout"
      }, {
        default: withCtx(() => _cache[7] || (_cache[7] = [
          createBaseVNode(
            "option",
            { value: "grid" },
            "Grid",
            -1
            /* HOISTED */
          ),
          createBaseVNode(
            "option",
            { value: "list" },
            "List",
            -1
            /* HOISTED */
          )
        ])),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      createVNode(_component_HstCheckbox, {
        modelValue: $setup.state.interactive,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.state.interactive = $event),
        title: "Interactive"
      }, null, 8, ["modelValue"]),
      createVNode(_component_HstCheckbox, {
        modelValue: $setup.state.loading,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.state.loading = $event),
        title: "Loading"
      }, null, 8, ["modelValue"]),
      createVNode(_component_HstCheckbox, {
        modelValue: $setup.state.showPagination,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.state.showPagination = $event),
        title: "Show Pagination"
      }, null, 8, ["modelValue"]),
      createVNode(_component_HstNumber, {
        modelValue: $setup.state.pageSize,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.state.pageSize = $event),
        title: "Page Size"
      }, null, 8, ["modelValue"]),
      createVNode(_component_HstNumber, {
        modelValue: $setup.state.currentPage,
        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.state.currentPage = $event),
        title: "Current Page"
      }, null, 8, ["modelValue"]),
      createVNode(_component_HstText, {
        modelValue: $setup.state.ariaLabel,
        "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.state.ariaLabel = $event),
        title: "Aria Label"
      }, null, 8, ["modelValue"])
    ]),
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Grid Layout" }, {
        default: withCtx(() => [
          createVNode($setup["BadgeList"], {
            badges: $setup.state.badges,
            layout: "grid",
            interactive: $setup.state.interactive,
            loading: $setup.state.loading,
            "page-size": $setup.state.pageSize,
            "current-page": $setup.state.currentPage,
            "show-pagination": $setup.state.showPagination,
            "aria-label": $setup.state.ariaLabel,
            onBadgeClick: $setup.onBadgeClick,
            onPageChange: $setup.onPageChange
          }, null, 8, ["badges", "interactive", "loading", "page-size", "current-page", "show-pagination", "aria-label"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "List Layout" }, {
        default: withCtx(() => [
          createVNode($setup["BadgeList"], {
            badges: $setup.state.badges,
            layout: "list",
            interactive: $setup.state.interactive,
            loading: $setup.state.loading,
            "page-size": $setup.state.pageSize,
            "current-page": $setup.state.currentPage,
            "show-pagination": $setup.state.showPagination,
            "aria-label": $setup.state.ariaLabel,
            onBadgeClick: $setup.onBadgeClick,
            onPageChange: $setup.onPageChange
          }, null, 8, ["badges", "interactive", "loading", "page-size", "current-page", "show-pagination", "aria-label"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "With Pagination" }, {
        default: withCtx(() => [
          createVNode($setup["BadgeList"], {
            badges: $setup.state.badges,
            layout: $setup.state.layout,
            interactive: $setup.state.interactive,
            loading: $setup.state.loading,
            "page-size": 2,
            "current-page": $setup.state.currentPage,
            "show-pagination": "",
            "aria-label": $setup.state.ariaLabel,
            onBadgeClick: $setup.onBadgeClick,
            onPageChange: $setup.onPageChange
          }, null, 8, ["badges", "layout", "interactive", "loading", "current-page", "aria-label"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Loading" }, {
        default: withCtx(() => [
          createVNode($setup["BadgeList"], {
            badges: [],
            layout: $setup.state.layout,
            interactive: $setup.state.interactive,
            loading: "",
            "page-size": $setup.state.pageSize,
            "current-page": $setup.state.currentPage,
            "show-pagination": $setup.state.showPagination,
            "aria-label": $setup.state.ariaLabel,
            onBadgeClick: $setup.onBadgeClick,
            onPageChange: $setup.onPageChange
          }, null, 8, ["layout", "interactive", "page-size", "current-page", "show-pagination", "aria-label"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Empty" }, {
        default: withCtx(() => [
          createVNode($setup["BadgeList"], {
            badges: [],
            layout: $setup.state.layout,
            interactive: $setup.state.interactive,
            loading: false,
            "page-size": $setup.state.pageSize,
            "current-page": $setup.state.currentPage,
            "show-pagination": $setup.state.showPagination,
            "aria-label": $setup.state.ariaLabel,
            onBadgeClick: $setup.onBadgeClick,
            onPageChange: $setup.onPageChange
          }, null, 8, ["layout", "interactive", "page-size", "current-page", "show-pagination", "aria-label"])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/badges/BadgeList.story.vue";
const BadgeList_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/openbadges-ui/openbadges-ui/src/components/badges/BadgeList.story.vue"]]);
export {
  BadgeList_story as default
};
//# sourceMappingURL=BadgeList.story-432152f7.js.map
