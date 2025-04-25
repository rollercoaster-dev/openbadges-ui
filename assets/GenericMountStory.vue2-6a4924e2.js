import { Q as defineAsyncComponent, R as createRouter, S as createWebHistory, U as createWebHashHistory, V as useDark, W as useToggle, k as watch, X as markRaw, E as reactive, d as defineComponent, r as ref, Y as watchEffect, o as openBlock, q as createBlock, Z as mergeProps, _ as resolveDynamicComponent, h as createCommentVNode } from "./vendor-6808bd13.js";
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "/openbadges-ui/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  const links = document.getElementsByTagName("link");
  return Promise.all(deps.map((dep) => {
    dep = assetsURL(dep);
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    const isBaseRelative = !!importerUrl;
    if (isBaseRelative) {
      for (let i = links.length - 1; i >= 0; i--) {
        const link2 = links[i];
        if (link2.href === dep && (!isCss || link2.rel === "stylesheet")) {
          return;
        }
      }
    } else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
      });
    }
  })).then(() => baseModule()).catch((err) => {
    const e = new Event("vite:preloadError", { cancelable: true });
    e.payload = err;
    window.dispatchEvent(e);
    if (!e.defaultPrevented) {
      throw err;
    }
  });
};
const Comp0 = defineAsyncComponent(() => __vitePreload(() => import("./BadgeDisplay.story-8a4c5152.js"), true ? ["assets/BadgeDisplay.story-8a4c5152.js","assets/vendor-6808bd13.js","assets/BadgeDisplay-d6583be8.js","assets/mockData-2abc48a9.js"] : void 0));
const Comp1 = defineAsyncComponent(() => __vitePreload(() => import("./BadgeList.story-432152f7.js"), true ? ["assets/BadgeList.story-432152f7.js","assets/vendor-6808bd13.js","assets/BadgeList-09055bf6.js","assets/mockData-2abc48a9.js","assets/BadgeDisplay-d6583be8.js"] : void 0));
const Comp2 = defineAsyncComponent(() => __vitePreload(() => import("./ProfileViewer.story-cfcca26d.js"), true ? ["assets/ProfileViewer.story-cfcca26d.js","assets/vendor-6808bd13.js","assets/BadgeList-09055bf6.js","assets/mockData-2abc48a9.js","assets/BadgeDisplay-d6583be8.js"] : void 0));
const Comp3 = defineAsyncComponent(() => __vitePreload(() => import("./BadgeIssuerForm.story-485a6b1a.js"), true ? ["assets/BadgeIssuerForm.story-485a6b1a.js","assets/vendor-6808bd13.js","assets/BadgeIssuerForm-93f4db2b.js","assets/mockData-2abc48a9.js"] : void 0));
const Comp4 = defineAsyncComponent(() => __vitePreload(() => import("./IssuerDashboard.story-e58b9804.js"), true ? ["assets/IssuerDashboard.story-e58b9804.js","assets/vendor-6808bd13.js","assets/BadgeIssuerForm-93f4db2b.js","assets/mockData-2abc48a9.js","assets/BadgeList-09055bf6.js","assets/BadgeDisplay-d6583be8.js"] : void 0));
let files = [
  { "id": "src-components-badges-badgedisplay-story-vue", "path": ["Components", "Badges", "BadgeDisplay"], "filePath": "src/components/badges/BadgeDisplay.story.vue", "story": { "id": "src-components-badges-badgedisplay-story-vue", "title": "BadgeDisplay", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "src-components-badges-badgedisplay-story-vue-0", "title": "Default" }, { "id": "src-components-badges-badgedisplay-story-vue-1", "title": "Interactive" }, { "id": "src-components-badges-badgedisplay-story-vue-2", "title": "Without Description" }, { "id": "src-components-badges-badgedisplay-story-vue-3", "title": "With Expiry Date" }, { "id": "src-components-badges-badgedisplay-story-vue-4", "title": "OB3 Format" }] }, "supportPluginId": "vue3", "index": 0, component: Comp0, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-components-badges-badgedisplay-story-vue-11075bbf.js"), true ? [] : void 0) },
  { "id": "src-components-badges-badgelist-story-vue", "path": ["Components", "Badges", "BadgeList"], "filePath": "src/components/badges/BadgeList.story.vue", "story": { "id": "src-components-badges-badgelist-story-vue", "title": "BadgeList", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "src-components-badges-badgelist-story-vue-0", "title": "Grid Layout" }, { "id": "src-components-badges-badgelist-story-vue-1", "title": "List Layout" }, { "id": "src-components-badges-badgelist-story-vue-2", "title": "With Pagination" }, { "id": "src-components-badges-badgelist-story-vue-3", "title": "Loading" }, { "id": "src-components-badges-badgelist-story-vue-4", "title": "Empty" }] }, "supportPluginId": "vue3", "index": 1, component: Comp1, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-components-badges-badgelist-story-vue-dd8a3a5a.js"), true ? [] : void 0) },
  { "id": "src-components-badges-profileviewer-story-vue", "path": ["Components", "Badges", "ProfileViewer"], "filePath": "src/components/badges/ProfileViewer.story.vue", "story": { "id": "src-components-badges-profileviewer-story-vue", "title": "ProfileViewer", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "src-components-badges-profileviewer-story-vue-0", "title": "Recipient Profile" }, { "id": "src-components-badges-profileviewer-story-vue-1", "title": "Issuer Profile" }, { "id": "src-components-badges-profileviewer-story-vue-2", "title": "With List Layout" }, { "id": "src-components-badges-profileviewer-story-vue-3", "title": "With Pagination" }, { "id": "src-components-badges-profileviewer-story-vue-4", "title": "Loading" }] }, "supportPluginId": "vue3", "index": 2, component: Comp2, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-components-badges-profileviewer-story-vue-7e84c559.js"), true ? [] : void 0) },
  { "id": "src-components-issuing-badgeissuerform-story-vue", "path": ["Components", "Issuing", "BadgeIssuerForm"], "filePath": "src/components/issuing/BadgeIssuerForm.story.vue", "story": { "id": "src-components-issuing-badgeissuerform-story-vue", "title": "BadgeIssuerForm", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "src-components-issuing-badgeissuerform-story-vue-0", "title": "Empty" }, { "id": "src-components-issuing-badgeissuerform-story-vue-1", "title": "Prefilled" }, { "id": "src-components-issuing-badgeissuerform-story-vue-2", "title": "With Validation Errors" }] }, "supportPluginId": "vue3", "index": 3, component: Comp3, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-components-issuing-badgeissuerform-story-vue-97869007.js"), true ? [] : void 0) },
  { "id": "src-components-issuing-issuerdashboard-story-vue", "path": ["Components", "Issuing", "IssuerDashboard"], "filePath": "src/components/issuing/IssuerDashboard.story.vue", "story": { "id": "src-components-issuing-issuerdashboard-story-vue", "title": "IssuerDashboard", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "src-components-issuing-issuerdashboard-story-vue-0", "title": "Default" }, { "id": "src-components-issuing-issuerdashboard-story-vue-1", "title": "Empty Badges" }] }, "supportPluginId": "vue3", "index": 4, component: Comp4, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-components-issuing-issuerdashboard-story-vue-bfea8438.js"), true ? [] : void 0) }
];
let tree = [{ "group": true, "id": "components", "title": "Components", "children": [] }, { "group": true, "id": "badges", "title": "Badges", "children": [{ "title": "Components", "children": [{ "title": "Badges", "children": [{ "title": "BadgeDisplay", "index": 0 }, { "title": "BadgeList", "index": 1 }, { "title": "ProfileViewer", "index": 2 }] }] }] }, { "group": true, "id": "issuing", "title": "Issuing", "children": [{ "title": "Components", "children": [{ "title": "Issuing", "children": [{ "title": "BadgeIssuerForm", "index": 3 }, { "title": "IssuerDashboard", "index": 4 }] }] }] }];
const config = { "plugins": [{ "name": "builtin:tailwind-tokens" }, { "name": "builtin:vanilla-support", "supportPlugin": { "id": "vanilla", "moduleName": "/home/runner/work/openbadges-ui/openbadges-ui/node_modules/.pnpm/histoire@0.17.17_terser@5.39.0_vite@4.5.13/node_modules/histoire/dist/node/builtin-plugins/vanilla-support", "setupFn": "setupVanilla" } }, { "name": "@histoire/plugin-vue", "supportPlugin": { "id": "vue3", "moduleName": "@histoire/plugin-vue", "setupFn": "setupVue3", "importStoriesPrepend": "import { defineAsyncComponent as defineAsyncComponentVue3 } from 'vue'" }, "commands": [{ "id": "histoire:plugin-vue:generate-story", "label": "Generate Vue 3 story from component", "icon": "https://vuejs.org/logo.svg", "searchText": "generate create", "clientSetupFile": "@histoire/plugin-vue/dist/commands/generate-story.client.js" }] }], "outDir": "/home/runner/work/openbadges-ui/openbadges-ui/histoire-dist", "storyMatch": ["**/*.story.vue", "**/*.story.svelte"], "storyIgnored": ["**/node_modules/**", "**/dist/**"], "supportMatch": [{ "id": "vanilla", "patterns": ["**/*.js"], "pluginIds": ["vanilla"] }, { "id": "vue", "patterns": ["**/*.vue"], "pluginIds": ["vue3"] }], "tree": { "file": "title", "order": "asc", "groups": [{ "id": "components", "title": "Components" }, { "id": "badges", "title": "Badges" }, { "id": "issuing", "title": "Issuing" }] }, "theme": { "title": "OpenBadges UI", "colors": { "primary": { "50": "#eef2ff", "100": "#e0e7ff", "200": "#c7d2fe", "300": "#a5b4fc", "400": "#818cf8", "500": "#6366f1", "600": "#4f46e5", "700": "#4338ca", "800": "#3730a3", "900": "#312e81" }, "gray": { "50": "#fafafa", "100": "#f4f4f5", "200": "#e4e4e7", "300": "#d4d4d8", "400": "#a1a1aa", "500": "#71717a", "600": "#52525b", "700": "#3f3f46", "750": "#323238", "800": "#27272a", "850": "#1f1f21", "900": "#18181b", "950": "#101012" } }, "defaultColorScheme": "auto", "storeColorScheme": true, "darkClass": "dark" }, "responsivePresets": [{ "label": "Mobile (Small)", "width": 320, "height": 560 }, { "label": "Mobile (Medium)", "width": 360, "height": 640 }, { "label": "Mobile (Large)", "width": 414, "height": 896 }, { "label": "Tablet", "width": 768, "height": 1024 }, { "label": "Laptop (Small)", "width": 1024, "height": null }, { "label": "Laptop (Large)", "width": 1366, "height": null }, { "label": "Desktop", "width": 1920, "height": null }, { "label": "4K", "width": 3840, "height": null }], "backgroundPresets": [{ "label": "Transparent", "color": "transparent", "contrastColor": "#333" }, { "label": "White", "color": "#fff", "contrastColor": "#333" }, { "label": "Light gray", "color": "#aaa", "contrastColor": "#000" }, { "label": "Dark gray", "color": "#333", "contrastColor": "#fff" }, { "label": "Black", "color": "#000", "contrastColor": "#eee" }], "sandboxDarkClass": "dark", "routerMode": "hash", "build": { "excludeFromVendorsChunk": [] }, "viteIgnorePlugins": [], "setupFile": "./histoire.setup.ts" };
const logos = {};
const histoireConfig = config;
const customLogos = logos;
const base = "/openbadges-ui/";
function createRouterHistory() {
  switch (histoireConfig.routerMode) {
    case "hash":
      return createWebHashHistory(base);
    case "history":
    default:
      return createWebHistory(base);
  }
}
const router = createRouter({
  history: createRouterHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => __vitePreload(() => import("./HomeView.vue-f279eae5.js"), true ? ["assets/HomeView.vue-f279eae5.js","assets/story-4cc4071f.js","assets/vendor-6808bd13.js"] : void 0)
    },
    {
      path: "/story/:storyId",
      name: "story",
      component: () => __vitePreload(() => import("./StoryView.vue-6991bed1.js"), true ? ["assets/StoryView.vue-6991bed1.js","assets/vendor-6808bd13.js","assets/story-4cc4071f.js","assets/MobileOverlay.vue2-cddea04b.js","assets/BaseEmpty.vue-18544997.js","assets/state-1f849bf6.js"] : void 0)
    }
  ]
});
const isDark = useDark({
  valueDark: "htw-dark",
  initialValue: histoireConfig.theme.defaultColorScheme,
  storageKey: "histoire-color-scheme",
  storage: histoireConfig.theme.storeColorScheme ? localStorage : sessionStorage
});
const toggleDark = useToggle(isDark);
function applyDarkToControls() {
  var _a;
  (_a = window.__hst_controls_dark) == null ? void 0 : _a.forEach((ref2) => {
    ref2.value = isDark.value;
  });
}
watch(isDark, () => {
  applyDarkToControls();
}, {
  immediate: true
});
window.__hst_controls_dark_ready = () => {
  applyDarkToControls();
};
const copiedFromExistingVariant = [
  "state",
  "slots",
  "source",
  "responsiveDisabled",
  "autoPropsDisabled",
  "setupApp",
  "configReady",
  "previewReady"
];
function mapFile(file, existingFile) {
  let result;
  if (existingFile) {
    result = existingFile;
    for (const key in file) {
      if (key === "story") {
        result.story = {
          ...result.story,
          ...file.story,
          file: markRaw(result),
          variants: file.story.variants.map((v) => mapVariant(v, existingFile.story.variants.find((item) => item.id === v.id)))
        };
      } else if (key !== "component") {
        result[key] = file[key];
      }
    }
  } else {
    result = {
      ...file,
      component: markRaw(file.component),
      story: {
        ...file.story,
        title: file.story.title,
        file: markRaw(file),
        variants: file.story.variants.map((v) => mapVariant(v)),
        slots: () => ({})
      }
    };
  }
  return result;
}
function mapVariant(variant, existingVariant) {
  let result;
  if (existingVariant) {
    result = existingVariant;
    for (const key in variant) {
      if (!copiedFromExistingVariant.includes(key)) {
        result[key] = variant[key];
      }
    }
  } else {
    result = {
      ...variant,
      state: reactive({
        _hPropState: {},
        _hPropDefs: {}
      }),
      setupApp: null,
      slots: () => ({}),
      previewReady: false
    };
  }
  return result;
}
const clientSupportPlugins = {
  "vanilla": () => __vitePreload(() => import("./vendor-6808bd13.js").then((n) => n.aU), true ? [] : void 0),
  "vue3": () => __vitePreload(() => import("./vendor-6808bd13.js").then((n) => n.aV), true ? [] : void 0)
};
const __default__ = {
  inheritAttrs: false
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "GenericMountStory",
  props: {
    story: {}
  },
  setup(__props) {
    const props = __props;
    const mountComponent = ref(null);
    watchEffect(async () => {
      var _a;
      const clientPlugin = clientSupportPlugins[(_a = props.story.file) == null ? void 0 : _a.supportPluginId];
      if (clientPlugin) {
        const pluginModule = await clientPlugin();
        mountComponent.value = markRaw(pluginModule.MountStory);
      }
    });
    return (_ctx, _cache) => {
      return mountComponent.value ? (openBlock(), createBlock(resolveDynamicComponent(mountComponent.value), mergeProps({
        key: 0,
        class: "histoire-generic-mount-story",
        story: _ctx.story
      }, _ctx.$attrs), null, 16, ["story"])) : createCommentVNode("", true);
    };
  }
});
export {
  __vitePreload as _,
  tree as a,
  _sfc_main as b,
  customLogos as c,
  clientSupportPlugins as d,
  base as e,
  files as f,
  histoireConfig as h,
  isDark as i,
  mapFile as m,
  router as r,
  toggleDark as t
};
//# sourceMappingURL=GenericMountStory.vue2-6a4924e2.js.map
