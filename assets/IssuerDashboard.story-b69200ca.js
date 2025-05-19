import { aq as defineComponent, ar as ref, aE as computed, az as watch, aJ as onMounted, at as openBlock, aA as createElementBlock, aD as createCommentVNode, ax as createBaseVNode, aF as normalizeClass, aK as withDirectives, aL as vShow, aw as createVNode, aM as vModelText, aN as vModelSelect, as as resolveComponent, au as createBlock, av as withCtx } from "./vendor-0a8d26a3.js";
import { B as BadgeIssuerForm } from "./BadgeIssuerForm-16a8fc60.js";
import { B as BadgeList } from "./BadgeList-fcc65b20.js";
import { B as BadgeService } from "./BadgeService-6d49e27e.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { m as mockAssertions } from "./mockData-72c9d2de.js";
import "./BadgeDisplay-32bf2458.js";
import "./BadgeVerification-2d670e4c.js";
const IssuerDashboard_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "IssuerDashboard",
  props: {
    issuerProfile: { type: Object, required: false, default: void 0 },
    initialBadges: { type: Array, required: false, default: () => [] },
    loading: { type: Boolean, required: false, default: false }
  },
  emits: ["badge-issued", "badge-click"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const activeTab = ref("issue");
    const badges = ref([...props.initialBadges]);
    const filterText = ref("");
    const sortOption = ref("newest");
    const initialBadgeClass = computed(() => {
      if (!props.issuerProfile) {
        return {};
      }
      return {
        issuer: {
          id: props.issuerProfile.id,
          type: "Profile",
          name: props.issuerProfile.name,
          url: props.issuerProfile.url,
          email: props.issuerProfile.email,
          image: props.issuerProfile.image
        }
      };
    });
    const filteredBadges = computed(() => {
      let result = [...badges.value];
      if (filterText.value) {
        const searchTerm = filterText.value.toLowerCase();
        result = result.filter((badge) => {
          const nb = BadgeService.normalizeBadge(badge);
          return nb.name.toLowerCase().includes(searchTerm) || nb.description.toLowerCase().includes(searchTerm) || nb.issuer.name.toLowerCase().includes(searchTerm);
        });
      }
      result.sort((a, b) => {
        if (sortOption.value === "newest" || sortOption.value === "oldest") {
          const getDateValue = (badge) => {
            if ("issuedOn" in badge && badge.issuedOn) {
              return new Date(badge.issuedOn).getTime();
            } else if ("issuanceDate" in badge && badge.issuanceDate) {
              return new Date(badge.issuanceDate).getTime();
            }
            return 0;
          };
          const dateA = getDateValue(a);
          const dateB = getDateValue(b);
          return sortOption.value === "newest" ? dateB - dateA : dateA - dateB;
        } else {
          const nameA = BadgeService.normalizeBadge(a).name;
          const nameB = BadgeService.normalizeBadge(b).name;
          return sortOption.value === "name-asc" ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
        }
      });
      return result;
    });
    watch(
      () => props.initialBadges,
      (newBadges) => {
        badges.value = [...newBadges];
      },
      { deep: true }
    );
    const setActiveTab = (tab) => {
      activeTab.value = tab;
    };
    const handleBadgeIssued = (assertion) => {
      badges.value.unshift(assertion);
      setActiveTab("badges");
      emit("badge-issued", assertion);
    };
    const handleFormReset = () => {
    };
    const handleBadgeClick = (badge) => {
      emit("badge-click", badge);
    };
    onMounted(() => {
      if (badges.value.length > 0) {
        setActiveTab("badges");
      }
    });
    const __returned__ = { props, emit, activeTab, badges, filterText, sortOption, initialBadgeClass, filteredBadges, setActiveTab, handleBadgeIssued, handleFormReset, handleBadgeClick, BadgeIssuerForm, BadgeList };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "manus-issuer-dashboard" };
const _hoisted_2 = { class: "manus-dashboard-header" };
const _hoisted_3 = { class: "manus-dashboard-tabs" };
const _hoisted_4 = ["aria-selected"];
const _hoisted_5 = ["aria-selected"];
const _hoisted_6 = { class: "manus-dashboard-content" };
const _hoisted_7 = {
  id: "issue-tab-panel",
  class: "manus-tab-panel",
  role: "tabpanel",
  "aria-labelledby": "issue-tab",
  tabindex: "0"
};
const _hoisted_8 = {
  id: "badges-tab-panel",
  class: "manus-tab-panel",
  role: "tabpanel",
  "aria-labelledby": "badges-tab",
  tabindex: "0"
};
const _hoisted_9 = { class: "manus-dashboard-controls" };
const _hoisted_10 = { class: "manus-dashboard-filter" };
const _hoisted_11 = { class: "manus-dashboard-sort" };
const _hoisted_12 = {
  key: 0,
  class: "manus-dashboard-loading",
  role: "status",
  "aria-live": "polite"
};
const _hoisted_13 = {
  key: 1,
  class: "manus-dashboard-empty",
  role: "status"
};
const _hoisted_14 = { key: 0 };
const _hoisted_15 = { key: 1 };
const _hoisted_16 = { key: 2 };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createCommentVNode(" Dashboard Header "),
    createBaseVNode("header", _hoisted_2, [
      _cache[5] || (_cache[5] = createBaseVNode(
        "h1",
        { class: "manus-dashboard-title" },
        "Badge Issuer Dashboard",
        -1
        /* HOISTED */
      )),
      createBaseVNode("div", _hoisted_3, [
        createBaseVNode("button", {
          id: "issue-tab",
          class: normalizeClass(["manus-tab-button", { active: $setup.activeTab === "issue" }]),
          "aria-controls": "issue-tab-panel",
          "aria-selected": $setup.activeTab === "issue",
          role: "tab",
          onClick: _cache[0] || (_cache[0] = ($event) => $setup.setActiveTab("issue"))
        }, " Issue New Badge ", 10, _hoisted_4),
        createBaseVNode("button", {
          id: "badges-tab",
          class: normalizeClass(["manus-tab-button", { active: $setup.activeTab === "badges" }]),
          "aria-controls": "badges-tab-panel",
          "aria-selected": $setup.activeTab === "badges",
          role: "tab",
          onClick: _cache[1] || (_cache[1] = ($event) => $setup.setActiveTab("badges"))
        }, " My Badges ", 10, _hoisted_5)
      ])
    ]),
    createCommentVNode(" Tab Panels "),
    createBaseVNode("div", _hoisted_6, [
      createCommentVNode(" Issue New Badge Tab "),
      withDirectives(createBaseVNode(
        "div",
        _hoisted_7,
        [
          createVNode($setup["BadgeIssuerForm"], {
            "initial-badge-class": $setup.initialBadgeClass,
            onBadgeIssued: $setup.handleBadgeIssued,
            onReset: $setup.handleFormReset
          }, null, 8, ["initial-badge-class"])
        ],
        512
        /* NEED_PATCH */
      ), [
        [vShow, $setup.activeTab === "issue"]
      ]),
      createCommentVNode(" My Badges Tab "),
      withDirectives(createBaseVNode(
        "div",
        _hoisted_8,
        [
          createBaseVNode("div", _hoisted_9, [
            createBaseVNode("div", _hoisted_10, [
              _cache[6] || (_cache[6] = createBaseVNode(
                "label",
                {
                  for: "badge-filter",
                  class: "manus-filter-label"
                },
                "Filter:",
                -1
                /* HOISTED */
              )),
              withDirectives(createBaseVNode(
                "input",
                {
                  id: "badge-filter",
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.filterText = $event),
                  type: "text",
                  class: "manus-filter-input",
                  placeholder: "Search badges..."
                },
                null,
                512
                /* NEED_PATCH */
              ), [
                [vModelText, $setup.filterText]
              ])
            ]),
            createBaseVNode("div", _hoisted_11, [
              _cache[8] || (_cache[8] = createBaseVNode(
                "label",
                {
                  for: "badge-sort",
                  class: "manus-sort-label"
                },
                "Sort by:",
                -1
                /* HOISTED */
              )),
              withDirectives(createBaseVNode(
                "select",
                {
                  id: "badge-sort",
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.sortOption = $event),
                  class: "manus-sort-select"
                },
                _cache[7] || (_cache[7] = [
                  createBaseVNode(
                    "option",
                    { value: "newest" },
                    "Newest first",
                    -1
                    /* HOISTED */
                  ),
                  createBaseVNode(
                    "option",
                    { value: "oldest" },
                    "Oldest first",
                    -1
                    /* HOISTED */
                  ),
                  createBaseVNode(
                    "option",
                    { value: "name-asc" },
                    "Name (A-Z)",
                    -1
                    /* HOISTED */
                  ),
                  createBaseVNode(
                    "option",
                    { value: "name-desc" },
                    "Name (Z-A)",
                    -1
                    /* HOISTED */
                  )
                ]),
                512
                /* NEED_PATCH */
              ), [
                [vModelSelect, $setup.sortOption]
              ])
            ])
          ]),
          $props.loading ? (openBlock(), createElementBlock("div", _hoisted_12, _cache[9] || (_cache[9] = [
            createBaseVNode(
              "span",
              null,
              "Loading badges...",
              -1
              /* HOISTED */
            )
          ]))) : $setup.filteredBadges.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_13, [
            $setup.filterText ? (openBlock(), createElementBlock("p", _hoisted_14, "No badges match your search.")) : (openBlock(), createElementBlock("p", _hoisted_15, "You haven't issued any badges yet.")),
            createBaseVNode("button", {
              class: "manus-button manus-button-primary",
              onClick: _cache[4] || (_cache[4] = ($event) => $setup.setActiveTab("issue"))
            }, " Issue Your First Badge ")
          ])) : (openBlock(), createElementBlock("div", _hoisted_16, [
            createVNode($setup["BadgeList"], {
              badges: $setup.filteredBadges,
              layout: "grid",
              interactive: true,
              onBadgeClick: $setup.handleBadgeClick
            }, null, 8, ["badges"])
          ]))
        ],
        512
        /* NEED_PATCH */
      ), [
        [vShow, $setup.activeTab === "badges"]
      ])
    ])
  ]);
}
_sfc_main$1.__file = "src/components/issuing/IssuerDashboard.vue";
const IssuerDashboard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/openbadges-ui/openbadges-ui/src/components/issuing/IssuerDashboard.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "IssuerDashboard.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const state = ref({
      issuerProfile: {
        id: "https://example.org/issuer",
        name: "Rollercoaster.dev",
        url: "https://example.org",
        email: "badges@example.org",
        image: "https://ui-avatars.com/api/?name=Manus+AI&background=0D8ABC&color=fff"
      },
      initialBadges: mockAssertions,
      loading: false
    });
    function onBadgeIssued(assertion) {
      console.log("Badge issued:", assertion);
    }
    function onBadgeClick(badge) {
      console.log("Badge clicked:", badge);
    }
    const __returned__ = { state, onBadgeIssued, onBadgeClick, IssuerDashboard };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Components/Issuing/IssuerDashboard",
    layout: { type: "single", iframe: true }
  }, {
    controls: withCtx(() => [
      createVNode(_component_HstCheckbox, {
        modelValue: $setup.state.loading,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.state.loading = $event),
        title: "Loading"
      }, null, 8, ["modelValue"])
    ]),
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createVNode($setup["IssuerDashboard"], {
            "issuer-profile": $setup.state.issuerProfile,
            "initial-badges": $setup.state.initialBadges,
            loading: $setup.state.loading,
            onBadgeIssued: $setup.onBadgeIssued,
            onBadgeClick: $setup.onBadgeClick
          }, null, 8, ["issuer-profile", "initial-badges", "loading"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Empty Badges" }, {
        default: withCtx(() => [
          createVNode($setup["IssuerDashboard"], {
            "issuer-profile": $setup.state.issuerProfile,
            "initial-badges": [],
            loading: $setup.state.loading,
            onBadgeIssued: $setup.onBadgeIssued,
            onBadgeClick: $setup.onBadgeClick
          }, null, 8, ["issuer-profile", "loading"])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/issuing/IssuerDashboard.story.vue";
const IssuerDashboard_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/openbadges-ui/openbadges-ui/src/components/issuing/IssuerDashboard.story.vue"]]);
export {
  IssuerDashboard_story as default
};
//# sourceMappingURL=IssuerDashboard.story-b69200ca.js.map
