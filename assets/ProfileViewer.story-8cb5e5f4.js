import { aq as defineComponent, aE as computed, at as openBlock, aA as createElementBlock, aD as createCommentVNode, ax as createBaseVNode, aC as toDisplayString, ay as createTextVNode, aI as renderSlot, aw as createVNode, ar as ref, as as resolveComponent, au as createBlock, av as withCtx } from "./vendor-0a8d26a3.js";
import { B as BadgeList } from "./BadgeList-fcc65b20.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { b as mockProfiles } from "./mockData-72c9d2de.js";
import "./BadgeService-6d49e27e.js";
import "./BadgeDisplay-32bf2458.js";
import "./BadgeVerification-2d670e4c.js";
const ProfileViewer_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProfileViewer",
  props: {
    profile: { type: Object, required: true },
    badges: { type: Array, required: true },
    loading: { type: Boolean, required: false, default: false },
    badgesLayout: { type: String, required: false, default: "grid" },
    badgesInteractive: { type: Boolean, required: false, default: true },
    showPagination: { type: Boolean, required: false, default: false },
    pageSize: { type: Number, required: false, default: 6 }
  },
  emits: ["badge-click"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const badgesSectionTitle = computed(() => {
      if (props.profile.type === "Issuer") {
        return "Badges Offered";
      } else {
        return "Badges Earned";
      }
    });
    const getInitials = (name) => {
      return name.split(" ").map((part) => part.charAt(0)).join("").toUpperCase().substring(0, 2);
    };
    const formatUrl = (url) => {
      return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
    };
    const handleBadgeClick = (badge) => {
      emit("badge-click", badge);
    };
    const __returned__ = { props, emit, badgesSectionTitle, getInitials, formatUrl, handleBadgeClick, BadgeList };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "manus-profile-viewer" };
const _hoisted_2 = {
  class: "manus-profile-header",
  "aria-labelledby": "profile-title"
};
const _hoisted_3 = { class: "manus-profile-avatar" };
const _hoisted_4 = ["src", "alt"];
const _hoisted_5 = {
  key: 1,
  class: "manus-profile-image-placeholder",
  "aria-hidden": "true"
};
const _hoisted_6 = { class: "manus-profile-info" };
const _hoisted_7 = {
  id: "profile-title",
  class: "manus-profile-name"
};
const _hoisted_8 = {
  key: 0,
  class: "manus-profile-description"
};
const _hoisted_9 = { class: "manus-profile-details" };
const _hoisted_10 = {
  key: 0,
  class: "manus-profile-detail"
};
const _hoisted_11 = ["href"];
const _hoisted_12 = {
  key: 1,
  class: "manus-profile-detail"
};
const _hoisted_13 = ["href"];
const _hoisted_14 = {
  class: "manus-profile-badges",
  "aria-labelledby": "badges-title"
};
const _hoisted_15 = {
  id: "badges-title",
  class: "manus-section-title"
};
const _hoisted_16 = {
  key: 0,
  class: "manus-profile-loading",
  role: "status",
  "aria-live": "polite"
};
const _hoisted_17 = { key: 1 };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createCommentVNode(" Profile Header "),
    createBaseVNode("section", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, [
        $props.profile.image ? (openBlock(), createElementBlock("img", {
          key: 0,
          src: $props.profile.image,
          alt: `${$props.profile.name}'s avatar`,
          class: "manus-profile-image"
        }, null, 8, _hoisted_4)) : (openBlock(), createElementBlock(
          "div",
          _hoisted_5,
          toDisplayString($setup.getInitials($props.profile.name)),
          1
          /* TEXT */
        ))
      ]),
      createBaseVNode("div", _hoisted_6, [
        createBaseVNode(
          "h2",
          _hoisted_7,
          toDisplayString($props.profile.name),
          1
          /* TEXT */
        ),
        $props.profile.description ? (openBlock(), createElementBlock(
          "p",
          _hoisted_8,
          toDisplayString($props.profile.description),
          1
          /* TEXT */
        )) : createCommentVNode("v-if", true),
        createBaseVNode("div", _hoisted_9, [
          $props.profile.email ? (openBlock(), createElementBlock("div", _hoisted_10, [
            _cache[0] || (_cache[0] = createBaseVNode(
              "span",
              { class: "manus-profile-detail-label" },
              "Email:",
              -1
              /* HOISTED */
            )),
            createBaseVNode("a", {
              href: `mailto:${$props.profile.email}`,
              class: "manus-profile-detail-value"
            }, toDisplayString($props.profile.email), 9, _hoisted_11)
          ])) : createCommentVNode("v-if", true),
          $props.profile.url ? (openBlock(), createElementBlock("div", _hoisted_12, [
            _cache[2] || (_cache[2] = createBaseVNode(
              "span",
              { class: "manus-profile-detail-label" },
              "Website:",
              -1
              /* HOISTED */
            )),
            createBaseVNode("a", {
              href: $props.profile.url,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "manus-profile-detail-value"
            }, [
              createTextVNode(
                toDisplayString($setup.formatUrl($props.profile.url)) + " ",
                1
                /* TEXT */
              ),
              _cache[1] || (_cache[1] = createBaseVNode(
                "span",
                { class: "visually-hidden" },
                "(opens in a new tab)",
                -1
                /* HOISTED */
              ))
            ], 8, _hoisted_13)
          ])) : createCommentVNode("v-if", true)
        ])
      ])
    ]),
    createCommentVNode(" Badges Section "),
    createBaseVNode("section", _hoisted_14, [
      createBaseVNode(
        "h3",
        _hoisted_15,
        toDisplayString($setup.badgesSectionTitle),
        1
        /* TEXT */
      ),
      $props.loading ? (openBlock(), createElementBlock("div", _hoisted_16, _cache[3] || (_cache[3] = [
        createBaseVNode(
          "span",
          null,
          "Loading badges...",
          -1
          /* HOISTED */
        )
      ]))) : (openBlock(), createElementBlock("div", _hoisted_17, [
        renderSlot(_ctx.$slots, "badges-list", { badges: $props.badges }, () => [
          createVNode($setup["BadgeList"], {
            badges: $props.badges,
            layout: $props.badgesLayout,
            interactive: $props.badgesInteractive,
            "show-pagination": $props.showPagination,
            "page-size": $props.pageSize,
            "aria-label": $setup.badgesSectionTitle,
            onBadgeClick: $setup.handleBadgeClick
          }, null, 8, ["badges", "layout", "interactive", "show-pagination", "page-size", "aria-label"])
        ])
      ]))
    ])
  ]);
}
_sfc_main$1.__file = "src/components/badges/ProfileViewer.vue";
const ProfileViewer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/openbadges-ui/openbadges-ui/src/components/badges/ProfileViewer.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProfileViewer.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const state = ref({
      profile: mockProfiles.alice,
      badges: mockProfiles.alice.badges,
      loading: false,
      badgesLayout: "grid",
      badgesInteractive: true,
      showPagination: false,
      pageSize: 6
    });
    function onBadgeClick(badge) {
      console.log("Badge clicked:", badge);
    }
    const __returned__ = { state, onBadgeClick, ProfileViewer, get mockProfiles() {
      return mockProfiles;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_HstSelect = resolveComponent("HstSelect");
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_HstNumber = resolveComponent("HstNumber");
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Components/Badges/ProfileViewer",
    layout: { type: "single", iframe: true }
  }, {
    controls: withCtx(() => [
      createVNode(_component_HstSelect, {
        modelValue: $setup.state.badgesLayout,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.state.badgesLayout = $event),
        title: "Badges Layout"
      }, {
        default: withCtx(() => _cache[5] || (_cache[5] = [
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
        __: [5]
      }, 8, ["modelValue"]),
      createVNode(_component_HstCheckbox, {
        modelValue: $setup.state.badgesInteractive,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.state.badgesInteractive = $event),
        title: "Badges Interactive"
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
      }, null, 8, ["modelValue"])
    ]),
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Recipient Profile" }, {
        default: withCtx(() => [
          createVNode($setup["ProfileViewer"], {
            profile: $setup.mockProfiles.alice,
            badges: $setup.mockProfiles.alice.badges,
            loading: $setup.state.loading,
            "badges-layout": $setup.state.badgesLayout,
            "badges-interactive": $setup.state.badgesInteractive,
            "show-pagination": $setup.state.showPagination,
            "page-size": $setup.state.pageSize,
            onBadgeClick: $setup.onBadgeClick
          }, null, 8, ["profile", "badges", "loading", "badges-layout", "badges-interactive", "show-pagination", "page-size"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Issuer Profile" }, {
        default: withCtx(() => [
          createVNode($setup["ProfileViewer"], {
            profile: $setup.mockProfiles.manus,
            badges: $setup.mockProfiles.manus.badges,
            loading: $setup.state.loading,
            "badges-layout": $setup.state.badgesLayout,
            "badges-interactive": $setup.state.badgesInteractive,
            "show-pagination": $setup.state.showPagination,
            "page-size": $setup.state.pageSize,
            onBadgeClick: $setup.onBadgeClick
          }, null, 8, ["profile", "badges", "loading", "badges-layout", "badges-interactive", "show-pagination", "page-size"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "With List Layout" }, {
        default: withCtx(() => [
          createVNode($setup["ProfileViewer"], {
            profile: $setup.mockProfiles.alice,
            badges: $setup.mockProfiles.alice.badges,
            loading: $setup.state.loading,
            "badges-layout": "list",
            "badges-interactive": $setup.state.badgesInteractive,
            "show-pagination": $setup.state.showPagination,
            "page-size": $setup.state.pageSize,
            onBadgeClick: $setup.onBadgeClick
          }, null, 8, ["profile", "badges", "loading", "badges-interactive", "show-pagination", "page-size"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "With Pagination" }, {
        default: withCtx(() => [
          createVNode($setup["ProfileViewer"], {
            profile: $setup.mockProfiles.alice,
            badges: $setup.mockProfiles.alice.badges,
            loading: $setup.state.loading,
            "badges-layout": $setup.state.badgesLayout,
            "badges-interactive": $setup.state.badgesInteractive,
            "show-pagination": "",
            "page-size": 2,
            onBadgeClick: $setup.onBadgeClick
          }, null, 8, ["profile", "badges", "loading", "badges-layout", "badges-interactive"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Loading" }, {
        default: withCtx(() => [
          createVNode($setup["ProfileViewer"], {
            profile: $setup.mockProfiles.alice,
            badges: [],
            loading: "",
            "badges-layout": $setup.state.badgesLayout,
            "badges-interactive": $setup.state.badgesInteractive,
            "show-pagination": $setup.state.showPagination,
            "page-size": $setup.state.pageSize,
            onBadgeClick: $setup.onBadgeClick
          }, null, 8, ["profile", "badges-layout", "badges-interactive", "show-pagination", "page-size"])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/badges/ProfileViewer.story.vue";
const ProfileViewer_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/openbadges-ui/openbadges-ui/src/components/badges/ProfileViewer.story.vue"]]);
export {
  ProfileViewer_story as default
};
//# sourceMappingURL=ProfileViewer.story-8cb5e5f4.js.map
