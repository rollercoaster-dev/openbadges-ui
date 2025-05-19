import { aq as defineComponent, ar as ref, as as resolveComponent, at as openBlock, au as createBlock, av as withCtx, ax as createBaseVNode, ay as createTextVNode, aw as createVNode } from "./vendor-0a8d26a3.js";
import { B as BadgeList } from "./BadgeList-fcc65b20.js";
import { m as mockAssertions } from "./mockData-72c9d2de.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "./BadgeService-6d49e27e.js";
import "./BadgeDisplay-32bf2458.js";
import "./BadgeVerification-2d670e4c.js";
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
      ariaLabel: "List of badges",
      density: "normal",
      filterText: "",
      filterEarned: "all"
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
  const _component_HstText = resolveComponent("HstText");
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_HstNumber = resolveComponent("HstNumber");
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Components/Badges/BadgeList",
    layout: { type: "single", iframe: true }
  }, {
    docs: withCtx(() => _cache[10] || (_cache[10] = [
      createBaseVNode(
        "div",
        { class: "histoire-docs" },
        [
          createBaseVNode("h1", null, "BadgeList"),
          createBaseVNode("p", null, [
            createTextVNode(" The "),
            createBaseVNode("code", null, "BadgeList"),
            createTextVNode(" component displays a collection of badges with filtering, neurodiversity-focused controls, progressive disclosure, and display density options. It supports both grid and list layouts, pagination, and loading states. ")
          ]),
          createBaseVNode("h2", null, "When To Use"),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, "When you need to display multiple badges in a collection"),
            createBaseVNode("li", null, "When you want to provide pagination for large collections of badges"),
            createBaseVNode("li", null, "When you need to show a loading state while badges are being fetched"),
            createBaseVNode("li", null, "When you want to provide different layout options (grid or list)"),
            createBaseVNode("li", null, "When you want to support neurodiversity-focused features")
          ]),
          createBaseVNode("h2", null, "Examples"),
          createBaseVNode("p", null, "Use the controls in the right panel to customize the component behavior."),
          createBaseVNode("h3", null, "Basic Usage"),
          createBaseVNode("pre", null, [
            createBaseVNode("code", null, '<BadgeList :badges="myBadges" />')
          ]),
          createBaseVNode("h3", null, "List Layout"),
          createBaseVNode("pre", null, [
            createBaseVNode("code", null, '<BadgeList :badges="myBadges" layout="list" />')
          ]),
          createBaseVNode("h3", null, "With Pagination"),
          createBaseVNode("pre", null, [
            createBaseVNode("code", null, '<BadgeList\n  :badges="myBadges"\n  :page-size="10"\n  :current-page="1"\n  :show-pagination="true"\n  @page-change="handlePageChange"\n/>')
          ]),
          createBaseVNode("h3", null, "Custom Empty State"),
          createBaseVNode("pre", null, [
            createBaseVNode("code", null, '<BadgeList :badges="[]">\n  <template #empty>\n    <p>No badges found. Earn your first badge!</p>\n  </template>\n</BadgeList>')
          ]),
          createBaseVNode("h3", null, "With Density and Neurodiversity Controls"),
          createBaseVNode("pre", null, [
            createBaseVNode("code", null, '<BadgeList\n  :badges="myBadges"\n  density="spacious"\n  :filter-text="filterText"\n  :filter-earned="filterEarned"\n/>')
          ]),
          createBaseVNode("h3", null, "Progressive Disclosure (Expand/Collapse)"),
          createBaseVNode("p", null, "Click a badge or press Enter to expand/collapse details for reduced cognitive load."),
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
                  createBaseVNode("code", null, "badges")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "(OB2.Assertion | OB3.VerifiableCredential)[]")
                ]),
                createBaseVNode("td", null, "Required"),
                createBaseVNode("td", null, "Array of badges to display")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "layout")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "'grid' | 'list'")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "'grid'")
                ]),
                createBaseVNode("td", null, "Layout mode for displaying badges")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "interactive")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "boolean")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "true")
                ]),
                createBaseVNode("td", null, "Whether badges are clickable")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "loading")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "boolean")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "false")
                ]),
                createBaseVNode("td", null, "Whether to show loading state")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "pageSize")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "number")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "9")
                ]),
                createBaseVNode("td", null, "Number of badges to display per page")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "currentPage")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "number")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "1")
                ]),
                createBaseVNode("td", null, "Current page number")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "showPagination")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "boolean")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "false")
                ]),
                createBaseVNode("td", null, "Whether to show pagination controls")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "ariaLabel")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "string")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "'List of badges'")
                ]),
                createBaseVNode("td", null, "Accessibility label for the badge list")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "density")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "'compact' | 'normal' | 'spacious'")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "'normal'")
                ]),
                createBaseVNode("td", null, "Controls the display density for neurodiversity support")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "filterText")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "string")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "''")
                ]),
                createBaseVNode("td", null, "Text to filter badges")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "filterEarned")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "'all' | 'earned' | 'not-earned'")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "'all'")
                ]),
                createBaseVNode("td", null, "Filter badges by earned status")
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
                  createBaseVNode("code", null, "badge-click")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "OB2.Assertion | OB3.VerifiableCredential")
                ]),
                createBaseVNode("td", null, "Emitted when a badge is clicked")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "page-change")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "number")
                ]),
                createBaseVNode("td", null, "Emitted when the current page changes")
              ])
            ])
          ]),
          createBaseVNode("h2", null, "Slots"),
          createBaseVNode("table", null, [
            createBaseVNode("thead", null, [
              createBaseVNode("tr", null, [
                createBaseVNode("th", null, "Name"),
                createBaseVNode("th", null, "Props"),
                createBaseVNode("th", null, "Description")
              ])
            ]),
            createBaseVNode("tbody", null, [
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "empty")
                ]),
                createBaseVNode("td", null, "None"),
                createBaseVNode("td", null, "Content to display when there are no badges")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "badge")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "{ badge, normalized }")
                ]),
                createBaseVNode("td", null, "Custom badge rendering")
              ])
            ])
          ]),
          createBaseVNode("h2", null, "Accessibility"),
          createBaseVNode("p", null, "The component includes several accessibility features:"),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, "The badge list has an appropriate ARIA label"),
            createBaseVNode("li", null, "Loading state is announced to screen readers"),
            createBaseVNode("li", null, "Empty state is announced to screen readers"),
            createBaseVNode("li", null, "Pagination controls are keyboard accessible"),
            createBaseVNode("li", null, "Progressive disclosure (expand/collapse) reduces cognitive load"),
            createBaseVNode("li", null, "Display density options for sensory needs"),
            createBaseVNode("li", null, "Simple, clear filtering for cognitive accessibility"),
            createBaseVNode("li", null, "Enhanced keyboard navigation and focus indicators")
          ])
        ],
        -1
        /* HOISTED */
      )
    ])),
    controls: withCtx(() => [
      createVNode(_component_HstSelect, {
        modelValue: $setup.state.layout,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.state.layout = $event),
        title: "Layout"
      }, {
        default: withCtx(() => _cache[11] || (_cache[11] = [
          createBaseVNode(
            "option",
            { value: "grid" },
            " Grid ",
            -1
            /* HOISTED */
          ),
          createBaseVNode(
            "option",
            { value: "list" },
            " List ",
            -1
            /* HOISTED */
          )
        ])),
        _: 1,
        __: [11]
      }, 8, ["modelValue"]),
      createVNode(_component_HstSelect, {
        modelValue: $setup.state.density,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.state.density = $event),
        title: "Density"
      }, {
        default: withCtx(() => _cache[12] || (_cache[12] = [
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
        ])),
        _: 1,
        __: [12]
      }, 8, ["modelValue"]),
      createVNode(_component_HstText, {
        modelValue: $setup.state.filterText,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.state.filterText = $event),
        title: "Filter Text"
      }, null, 8, ["modelValue"]),
      createVNode(_component_HstSelect, {
        modelValue: $setup.state.filterEarned,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.state.filterEarned = $event),
        title: "Earned Status"
      }, {
        default: withCtx(() => _cache[13] || (_cache[13] = [
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
        ])),
        _: 1,
        __: [13]
      }, 8, ["modelValue"]),
      createVNode(_component_HstCheckbox, {
        modelValue: $setup.state.interactive,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.state.interactive = $event),
        title: "Interactive"
      }, null, 8, ["modelValue"]),
      createVNode(_component_HstCheckbox, {
        modelValue: $setup.state.loading,
        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.state.loading = $event),
        title: "Loading"
      }, null, 8, ["modelValue"]),
      createVNode(_component_HstCheckbox, {
        modelValue: $setup.state.showPagination,
        "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.state.showPagination = $event),
        title: "Show Pagination"
      }, null, 8, ["modelValue"]),
      createVNode(_component_HstNumber, {
        modelValue: $setup.state.pageSize,
        "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.state.pageSize = $event),
        title: "Page Size"
      }, null, 8, ["modelValue"]),
      createVNode(_component_HstNumber, {
        modelValue: $setup.state.currentPage,
        "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $setup.state.currentPage = $event),
        title: "Current Page"
      }, null, 8, ["modelValue"]),
      createVNode(_component_HstText, {
        modelValue: $setup.state.ariaLabel,
        "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $setup.state.ariaLabel = $event),
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
      }),
      createVNode(_component_Variant, { title: "Grid Layout with Neurodiversity Controls" }, {
        default: withCtx(() => [
          createVNode($setup["BadgeList"], {
            badges: $setup.state.badges,
            layout: $setup.state.layout,
            interactive: $setup.state.interactive,
            loading: $setup.state.loading,
            "page-size": $setup.state.pageSize,
            "current-page": $setup.state.currentPage,
            "show-pagination": $setup.state.showPagination,
            "aria-label": $setup.state.ariaLabel,
            density: $setup.state.density,
            "filter-text": $setup.state.filterText,
            "filter-earned": $setup.state.filterEarned,
            onBadgeClick: $setup.onBadgeClick,
            onPageChange: $setup.onPageChange
          }, null, 8, ["badges", "layout", "interactive", "loading", "page-size", "current-page", "show-pagination", "aria-label", "density", "filter-text", "filter-earned"])
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
//# sourceMappingURL=BadgeList.story-773c21e4.js.map
