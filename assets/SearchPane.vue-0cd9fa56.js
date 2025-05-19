import { _ as __vitePreload } from "./GenericMountStory.vue2-30903d18.js";
import { r as ref, k as watch, c as computed, d as defineComponent, o as openBlock, b as createElementBlock, $ as renderSlot, n as normalizeClass, m as withKeys, q as createBlock, g as unref, I as Icon, e as createVNode, f as createBaseVNode, z as createTextVNode, t as toDisplayString, F as Fragment, p as renderList, h as createCommentVNode, u as useCssVars, ac as toRefs, ad as useRouter, w as withCtx, X as markRaw, aV as useFocus, aW as refDebounced, y as withDirectives, a6 as vModelText, a5 as withModifiers, aX as flexsearch_bundleExports } from "./vendor-0a8d26a3.js";
import { u as useStoryStore } from "./story-f2382c91.js";
import { B as BaseEmpty } from "./BaseEmpty.vue-74590193.js";
import { o as onKeyboardShortcut, u as useCommandStore } from "./bundle-main-9a01eb87.js";
import { _ as _export_sfc, u as useScrollOnActive, B as BaseListItemLink } from "./MobileOverlay.vue2-0ebb5b54.js";
function pipeline(a, b, c, d) {
  if (a && (b && (a = replace(a, b)), this.matcher && (a = replace(a, this.matcher)), this.stemmer && 1 < a.length && (a = replace(a, this.stemmer)), d && 1 < a.length && (a = collapse(a)), c || "" === c)) {
    const b2 = a.split(c);
    return this.filter ? filter$1(b2, this.filter) : b2;
  }
  return a;
}
const regex_whitespace = /[\p{Z}\p{S}\p{P}\p{C}]+/u;
const regex_normalize = /[\u0300-\u036f]/g;
function normalize(a) {
  return a.normalize && (a = a.normalize("NFD").replace(regex_normalize, "")), a;
}
function replace(a, b) {
  for (let c = 0, d = b.length; c < d && (a = a.replace(b[c], b[c + 1]), !!a); c += 2)
    ;
  return a;
}
function regex(a) {
  return new RegExp(a, "g");
}
function collapse(a) {
  let b = "", c = "";
  for (let d, e = 0, f = a.length; e < f; e++)
    (d = a[e]) !== c && (b += c = d);
  return b;
}
function filter$1(a, b) {
  const c = a.length, d = [];
  for (let e = 0, f = 0; e < c; e++) {
    const c2 = a[e];
    c2 && !b[c2] && (d[f++] = c2);
  }
  return d;
}
const regex_a = regex("[àáâãäå]"), regex_e = regex("[èéêë]"), regex_i = regex("[ìíîï]"), regex_o = regex("[òóôõöő]"), regex_u = regex("[ùúûüű]"), regex_y = regex("[ýŷÿ]"), regex_n = regex("ñ"), regex_c = regex("[çc]"), regex_s = regex("ß"), regex_and = regex(" & "), pairs$1 = [regex_a, "a", regex_e, "e", regex_i, "i", regex_o, "o", regex_u, "u", regex_y, "y", regex_n, "n", regex_c, "k", regex_s, "s", regex_and, " and "];
function encode$2(a) {
  return a = "" + a, pipeline.call(this, normalize(a).toLowerCase(), !a.normalize && pairs$1, regex_whitespace, false);
}
const regex_strip = /[^a-z0-9]+/, soundex = { b: "p", v: "f", w: "f", z: "s", x: "s", ß: "s", d: "t", n: "m", c: "k", g: "k", j: "k", q: "k", i: "e", y: "e", u: "o" };
function encode$1(a) {
  a = encode$2.call(this, a).join(" ");
  const b = [];
  if (a) {
    const c = a.split(regex_strip), d = c.length;
    for (let e, f = 0, g = 0; f < d; f++)
      if ((a = c[f]) && (!this.filter || !this.filter[a])) {
        e = a[0];
        let c2 = soundex[e] || e, d2 = c2;
        for (let b2 = 1; b2 < a.length; b2++) {
          e = a[b2];
          const f2 = soundex[e] || e;
          f2 && f2 !== d2 && (c2 += f2, d2 = f2);
        }
        b[g++] = c2;
      }
  }
  return b;
}
const charset = { encode, rtl: false, tokenize: "" };
const regex_ae = regex("ae"), regex_oe = regex("oe"), regex_sh = regex("sh"), regex_th = regex("th"), regex_ph = regex("ph"), regex_pf = regex("pf"), pairs = [regex_ae, "a", regex_oe, "o", regex_sh, "s", regex_th, "t", regex_ph, "f", regex_pf, "f", regex("(?![aeo])h(?![aeo])"), "", regex("(?!^[aeo])h(?!^[aeo])"), ""];
function encode(a, b) {
  return a && (a = encode$1.call(this, a).join(" "), 2 < a.length && (a = replace(a, pairs)), !b && (1 < a.length && (a = collapse(a)), a && (a = a.split(" ")))), a;
}
const filter = ["a", "about", "above", "after", "again", "against", "all", "also", "am", "an", "and", "any", "are", "aren't", "as", "at", "be", "because", "been", "before", "being", "below", "both", "but", "by", "can", "cannot", "can't", "come", "could", "couldn't", "did", "didn't", "do", "does", "doesn't", "doing", "dont", "down", "during", "each", "even", "few", "first", "for", "from", "further", "get", "go", "had", "hadn't", "has", "hasn't", "have", "haven't", "having", "he", "hed", "her", "here", "here's", "hers", "herself", "hes", "him", "himself", "his", "how", "how's", "i", "id", "if", "ill", "im", "in", "into", "is", "isn't", "it", "it's", "itself", "i've", "just", "know", "let's", "like", "make", "me", "more", "most", "mustn't", "my", "myself", "new", "no", "nor", "not", "now", "of", "off", "on", "once", "only", "or", "other", "ought", "our", "our's", "ourselves", "out", "over", "own", "same", "say", "see", "shan't", "she", "she'd", "shell", "shes", "should", "shouldn't", "so", "some", "such", "than", "that", "that's", "the", "their", "theirs", "them", "themselves", "then", "there", "there's", "these", "they", "they'd", "they'll", "they're", "they've", "this", "those", "through", "time", "to", "too", "until", "up", "us", "very", "want", "was", "wasn't", "way", "we", "wed", "well", "were", "weren't", "we've", "what", "what's", "when", "when's", "where", "where's", "which", "while", "who", "whom", "who's", "why", "why's", "will", "with", "won't", "would", "wouldn't", "you", "you'd", "you'll", "your", "you're", "your's", "yourself", "yourselves", "you've"];
const stemmer = { ational: "ate", iveness: "ive", fulness: "ful", ousness: "ous", ization: "ize", tional: "tion", biliti: "ble", icate: "ic", ative: "", alize: "al", iciti: "ic", entli: "ent", ousli: "ous", alism: "al", ation: "ate", aliti: "al", iviti: "ive", ement: "", enci: "ence", anci: "ance", izer: "ize", alli: "al", ator: "ate", logi: "log", ical: "ic", ance: "", ence: "", ness: "", able: "", ible: "", ment: "", eli: "e", bli: "ble", ful: "", ant: "", ent: "", ism: "", ate: "", iti: "", ous: "", ive: "", ize: "", al: "", ou: "", er: "", ic: "" };
const matcher = {};
const language = { filter, stemmer, matcher };
function useSelection(list) {
  const selectedIndex = ref(0);
  watch(list, () => {
    selectedIndex.value = 0;
  });
  function selectNext() {
    selectedIndex.value++;
    if (selectedIndex.value > list.value.length - 1) {
      selectedIndex.value = 0;
    }
  }
  function selectPrevious() {
    selectedIndex.value--;
    if (selectedIndex.value < 0) {
      selectedIndex.value = list.value.length - 1;
    }
  }
  return {
    selectedIndex: computed(() => selectedIndex.value),
    selectNext,
    selectPrevious
  };
}
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "BaseListItem",
  props: {
    isActive: { type: Boolean }
  },
  emits: ["navigate"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    function handleNavigate() {
      emit("navigate");
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("a", {
        class: normalizeClass(["istoire-base-list-ite htw-flex htw-items-center htw-gap-2 htw-text-gray-900 dark:htw-text-gray-100", [
          _ctx.$attrs.class,
          _ctx.isActive ? "active htw-bg-primary-500 hover:htw-bg-primary-600 htw-text-white dark:htw-text-black" : "hover:htw-bg-primary-100 dark:hover:htw-bg-primary-900"
        ]]),
        onClick: _cache[0] || (_cache[0] = ($event) => handleNavigate()),
        onKeyup: [
          _cache[1] || (_cache[1] = withKeys(($event) => handleNavigate(), ["enter"])),
          _cache[2] || (_cache[2] = withKeys(($event) => handleNavigate(), ["space"]))
        ]
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 34);
    };
  }
});
const _hoisted_1$3 = ["src", "alt"];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "BaseIcon",
  props: {
    icon: {}
  },
  setup(__props) {
    const props = __props;
    const isUrl = computed(() => props.icon.startsWith("http") || props.icon.startsWith("data:image") || props.icon.startsWith(".") || props.icon.startsWith("/"));
    return (_ctx, _cache) => {
      return isUrl.value ? (openBlock(), createElementBlock("img", {
        key: 0,
        src: _ctx.icon,
        alt: _ctx.icon,
        class: "histoire-base-icon"
      }, null, 8, _hoisted_1$3)) : (openBlock(), createBlock(unref(Icon), {
        key: 1,
        icon: _ctx.icon,
        class: "histoire-base-icon"
      }, null, 8, ["icon"]));
    };
  }
});
const BaseIcon = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-2114f510"]]);
const _hoisted_1$2 = { class: "htw-flex-1" };
const _hoisted_2 = { class: "htw-flex" };
const _hoisted_3 = { class: "htw-ml-auto htw-opacity-40" };
const _hoisted_4 = {
  key: 0,
  class: "htw-flex htw-items-center htw-gap-0.5 htw-opacity-60"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SearchItemContent",
  props: {
    result: {},
    selected: { type: Boolean }
  },
  setup(__props) {
    const defaultIcons = {
      story: "carbon:cube",
      variant: "carbon:cube"
    };
    const kindLabels = {
      story: "Story",
      variant: "Variant",
      command: "Command"
    };
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(BaseIcon, {
          icon: _ctx.result.icon ?? defaultIcons[_ctx.result.kind],
          class: normalizeClass(["htw-w-4 htw-h-4", [
            !_ctx.selected ? [
              _ctx.result.iconColor ? "bind-icon-color" : {
                "htw-text-primary-500": _ctx.result.kind === "story",
                "htw-text-gray-500": _ctx.result.kind === "variant"
              }
            ] : [],
            {
              "colorize-black": _ctx.selected
            }
          ]])
        }, null, 8, ["icon", "class"]),
        createBaseVNode("div", _hoisted_1$2, [
          createBaseVNode("div", _hoisted_2, [
            createTextVNode(toDisplayString(_ctx.result.title) + " ", 1),
            createBaseVNode("span", _hoisted_3, toDisplayString(kindLabels[_ctx.result.kind]), 1)
          ]),
          ((_a = _ctx.result.path) == null ? void 0 : _a.length) ? (openBlock(), createElementBlock("div", _hoisted_4, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.result.path, (p, index) => {
              return openBlock(), createElementBlock("div", {
                key: index,
                class: "htw-flex htw-items-center htw-gap-0.5"
              }, [
                index > 0 ? (openBlock(), createBlock(unref(Icon), {
                  key: 0,
                  icon: "carbon:chevron-right",
                  class: "htw-w-4 htw-h-4 htw-mt-0.5 htw-opacity-50"
                })) : createCommentVNode("", true),
                createBaseVNode("span", null, toDisplayString(p), 1)
              ]);
            }), 128))
          ])) : createCommentVNode("", true)
        ])
      ], 64);
    };
  }
});
const _hoisted_1$1 = ["data-selected"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SearchItem",
  props: {
    result: {
      type: Object,
      required: true
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    close: () => true
  },
  setup(__props, { emit: __emit }) {
    useCssVars((_ctx) => ({
      "ddaae392": __props.result.iconColor
    }));
    const props = __props;
    const emit = __emit;
    const el = ref();
    const { selected } = toRefs(props);
    useScrollOnActive(selected, el);
    const router = useRouter();
    onKeyboardShortcut(["enter"], () => {
      if (!props.selected)
        return;
      action();
    });
    function action(fromClick = false) {
      if ("route" in props.result && !fromClick) {
        router.push(props.result.route);
      }
      if ("onActivate" in props.result) {
        props.result.onActivate();
      }
      emit("close");
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "el",
        ref: el,
        class: "histoire-search-item",
        "data-test-id": "search-item",
        "data-selected": unref(selected) ? "" : void 0
      }, [
        "route" in __props.result ? (openBlock(), createBlock(BaseListItemLink, {
          key: 0,
          to: __props.result.route,
          "is-active": unref(selected),
          class: "htw-px-6 htw-py-4 htw-gap-4",
          onNavigate: _cache[0] || (_cache[0] = ($event) => action(true))
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$2, {
              result: __props.result,
              selected: unref(selected)
            }, null, 8, ["result", "selected"])
          ]),
          _: 1
        }, 8, ["to", "is-active"])) : createCommentVNode("", true),
        "onActivate" in __props.result ? (openBlock(), createBlock(_sfc_main$4, {
          key: 1,
          "is-active": unref(selected),
          class: "htw-px-6 htw-py-4 htw-gap-4",
          onNavigate: _cache[1] || (_cache[1] = ($event) => action(true))
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$2, {
              result: __props.result,
              selected: unref(selected)
            }, null, 8, ["result", "selected"])
          ]),
          _: 1
        }, 8, ["is-active"])) : createCommentVNode("", true)
      ], 8, _hoisted_1$1);
    };
  }
});
const SearchItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-d75a2748"]]);
let searchData$1 = { "index": { "reg": '{"0":1,"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":1,"27":1,"28":1,"29":1,"30":1,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"37":1,"38":1,"39":1,"40":1,"41":1,"42":1,"43":1,"44":1,"45":1,"46":1,"47":1,"48":1,"49":1,"50":1}', "text.cfg": '{"doc":0,"opt":1}', "text.map": '[{"a":[0,1,2,3,4,5,6,7,8,9,10],"ak":[0,1,2,3,4,5,6,7,8,9,10],"ake":[0,1,2,3,4,5,6,7,8,9,10],"akes":[0,1,2,3,4,5,6,7,8,9,10],"akese":[0,1,2,3,4,5,6,7,8,9,10],"akesep":[0,1,2,3,4,5,6,7,8,9,10],"akesepe":[0,1,2,3,4,5,6,7,8,9,10],"akesepel":[0,1,2,3,4,5,6,7,8,9,10],"akesepele":[0,1,2,3,4,5,6,7,8,9,10],"akesepelet":[0,1,2,3,4,5,6,7,8,9,10],"akesepelete":[0,1,2,3,4,5,6,7,8,9,10],"f":[11,12,13,14,15],"fo":[11,12,13,14,15],"fom":[11,12,13,14,15],"fomt":[11,12,13,14,15],"t":[16,17,18,19],"te":[16,17,18,19],"tem":[16,17,18,19],"teme":[16,17,18,19],"p":[20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47],"pa":[20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,44,45,46,47],"pat":[20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,44,45,46,47],"patk":[20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,44,45,46,47],"patke":[20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,44,45,46,47],"pr":[38,39,40,41,42,43],"pro":[38,39,40,41,42,43],"prof":[38,39,40,41,42,43],"profe":[38,39,40,41,42,43],"profel":[38,39,40,41,42,43],"profele":[38,39,40,41,42,43],"e":[48,49,50],"es":[48,49,50],"eso":[48,49,50],"esor":[48,49,50]},{"e":[1,44,45,46,47],"em":[1],"emt":[1],"emtr":[1],"emtro":[1],"emtrot":[1],"emtroto":[1],"emtrotok":[1],"emtrotokt":[1],"emtrotokte":[1],"emtrotokteo":[1],"emtrotokteom":[1],"akesepl":[2,3],"akeseple":[2,3],"p":[5],"pe":[5],"pes":[5],"pest":[5],"s":[6,7,8,9,10,11,12,13,14,15,16,17,18,19],"se":[6,7,8,9,10,11,12,13,14,15,16,17,18,19],"set":[6,7,8,9,10],"sete":[6,7,8,9,10],"setem":[6,7,8,9,10],"setemk":[6,7,8,9,10],"setemks":[6,7,8,9,10],"sel":[11,12,13,14,15,16,17,18,19],"sele":[11,12,13,14,15,16,17,18,19],"selek":[11,12,13,14,15,16,17,18,19],"selekt":[11,12,13,14,15,16,17,18,19],"selekto":[11,12,13,14,15,16,17,18,19],"selektor":[11,12,13,14,15,16,17,18,19],"t":[20,21,22,23,24,25,48,49,50],"te":[20,21,22,23,24,25],"tes":[20,21,22,23,24,25],"tesp":[20,21,22,23,24,25],"tespl":[20,21,22,23,24,25],"tespla":[20,21,22,23,24,25],"l":[26,27,28,29,30,31,32],"le":[26,27,28,29,30,31,32],"les":[26,27,28,29,30,31,32],"lest":[26,27,28,29,30,31,32],"f":[33,34,35,36,37,38,39,40,41,42,43],"fe":[33,34,35,36,37,38,39,40,41,42,43],"fer":[33,34,35,36,37],"fere":[33,34,35,36,37],"feref":[33,34,35,36,37],"ferefe":[33,34,35,36,37],"ferefek":[33,34,35,36,37],"ferefeka":[33,34,35,36,37],"ferefekat":[33,34,35,36,37],"ferefekate":[33,34,35,36,37],"ferefekateo":[33,34,35,36,37],"ferefekateom":[33,34,35,36,37],"fef":[38,39,40,41,42,43],"fefe":[38,39,40,41,42,43],"fefer":[38,39,40,41,42,43],"es":[44,45,46,47],"eso":[44,45,46,47],"esor":[44,45,46,47],"ta":[48,49,50],"tas":[48,49,50],"tasp":[48,49,50],"taspo":[48,49,50],"taspoa":[48,49,50],"taspoar":[48,49,50],"taspoart":[48,49,50]},{"f":[2,8,9,18,19,23,24,29,44,45,46,47],"fo":[2,44,45,46,47],"fom":[2],"fomt":[2],"fomts":[2],"t":[3,7,12,34],"te":[3,7,12,34,49],"tem":[3],"teme":[3],"temes":[3],"s":[4],"se":[4],"set":[4],"sete":[4],"setem":[4],"setemk":[4],"setemks":[4],"pr":[5],"pra":[5],"prak":[5],"prakt":[5],"prakte":[5],"praktek":[5],"prakteke":[5],"praktekes":[5],"tef":[7,12,17,21,34,49],"tefa":[7,12,17,21,34,49],"tefao":[7,12,17,21,34,49],"tefaol":[7,12,17,21,34,49],"tefaolt":[7,12,17,21,34,49],"fe":[8,9,13,14,18,19,23,24,29],"fet":[8,9,13,14,18,19,23,24,29,41,42],"feto":[8,9,13,14,23],"fetot":[8,9,13,14,23],"k":[10,27,32],"ko":[10],"kos":[10],"kost":[10],"kosto":[10],"kostom":[10],"l":[15,43],"le":[15],"lem":[15],"leme":[15],"lemet":[15],"lemete":[15],"lemetet":[15],"e":[22,31,35,40],"em":[22,31,50],"emt":[22],"emte":[22],"emter":[22],"emtera":[22],"emterak":[22],"emterakt":[22],"emterakte":[22],"emteraktef":[22],"emteraktefe":[22],"o":[25,37],"op":[25,37],"op3":[25,37],"kr":[27,32],"kre":[27,32],"kret":[27,32],"lo":[30,43],"loa":[30,43],"loat":[30,43],"loate":[30,43],"loatem":[30,43],"loatemk":[30,43],"emp":[31,50],"empt":[31,50],"empte":[31,50],"es":[35,40],"esp":[35],"espe":[35],"esper":[35],"espere":[35],"esperet":[35],"r":[36,39],"re":[36,39],"ref":[36],"refo":[36],"refok":[36],"refoke":[36],"refoket":[36],"rek":[39],"reke":[39],"rekep":[39],"rekepe":[39],"rekepem":[39],"rekepemt":[39],"eso":[40],"esor":[40],"for":[44,45,46,47],"form":[44,45,46,47]},{"m":[8],"mo":[8],"mot":[8],"mote":[8],"moteo":[8],"moteom":[8],"fo":[9,25],"fok":[9],"foko":[9],"fokos":[9],"t":[10,14],"te":[10,14],"tet":[10],"tetl":[10],"tetle":[10],"tes":[14],"test":[14],"k":[18,19],"ko":[18,19],"kos":[18,19],"kost":[18,19],"kosto":[18,19],"kostom":[18,19],"tesk":[23],"teskr":[23],"teskre":[23],"teskrep":[23],"teskrept":[23],"teskrepte":[23],"teskrepteo":[23],"teskrepteom":[23],"e":[24],"es":[24],"esp":[24],"espe":[24],"esper":[24],"espere":[24],"f":[25],"for":[25],"form":[25],"forma":[25],"format":[25],"la":[27,28,32],"lao":[27,28,32],"laot":[27,28,32],"pak":[29,42],"pake":[29,42],"pakem":[29,42],"pakema":[29,42],"pakemat":[29,42],"pakemate":[29,42],"pakemateo":[29,42],"pakemateom":[29,42],"l":[41],"le":[41],"les":[41],"lest":[41],"pa":[42,50],"em":[45],"emp":[45],"empt":[45],"empte":[45],"pr":[46],"pre":[46],"pref":[46],"prefe":[46],"prefel":[46],"prefele":[46],"prefelet":[46],"fe":[47],"fet":[47],"p":[50],"pat":[50],"patk":[50],"patke":[50],"patkes":[50]},{"r":[8],"re":[8],"ret":[8],"reto":[8],"retok":[8],"retokt":[8],"retokte":[8],"retokteo":[8],"retokteom":[8],"m":[9],"mo":[9],"mot":[9],"mote":[9],"ses":[13],"sese":[13],"sp":[14],"spa":[14],"spak":[14],"spake":[14],"spakem":[14],"spakemk":[14],"o":[15],"op":[15],"opt":[15],"opte":[15],"opteo":[15],"opteom":[15],"opteoms":[15],"temes":[18],"l":[19],"la":[19,41],"lap":[19],"lape":[19],"lapel":[19],"ta":[24],"tat":[24],"tate":[24],"f":[32],"fe":[32],"fet":[32],"lao":[41],"laot":[41],"fa":[47],"fal":[47],"fale":[47],"falet":[47],"faleta":[47],"faletat":[47],"faletate":[47],"faletateo":[47],"faletateom":[47]},{"k":[13,14],"ko":[13,14],"kom":[13,14],"komt":[13,14],"komtr":[13,14],"komtro":[13,14],"komtrol":[13,14],"komtrols":[13,14],"m":[32],"me":[32],"meo":[32],"meor":[32],"meoro":[32],"meorot":[32],"meorote":[32],"meorotef":[32],"meorotefe":[32],"meorotefer":[32],"meorotefers":[32],"meoroteferse":[32],"meoroteferset":[32],"meorotefersete":[32],"er":[47],"ero":[47],"eror":[47],"erors":[47]},{"ko":[32],"kom":[32],"komt":[32],"komtr":[32],"komtro":[32],"komtrol":[32],"komtrols":[32]},{},{}]', "text.ctx": "[{}]" }, "idMap": { "0": { "id": "src-components-accessibility-accessibilityguide-story-vue", "kind": "story" }, "1": { "id": "src-components-accessibility-accessibilityguide-story-vue:src-components-accessibility-accessibilityguide-story-vue-0", "kind": "variant" }, "2": { "id": "src-components-accessibility-accessibilityguide-story-vue:src-components-accessibility-accessibilityguide-story-vue-1", "kind": "variant" }, "3": { "id": "src-components-accessibility-accessibilityguide-story-vue:src-components-accessibility-accessibilityguide-story-vue-2", "kind": "variant" }, "4": { "id": "src-components-accessibility-accessibilityguide-story-vue:src-components-accessibility-accessibilityguide-story-vue-3", "kind": "variant" }, "5": { "id": "src-components-accessibility-accessibilityguide-story-vue:src-components-accessibility-accessibilityguide-story-vue-4", "kind": "variant" }, "6": { "id": "src-components-accessibility-accessibilitysettings-story-vue", "kind": "story" }, "7": { "id": "src-components-accessibility-accessibilitysettings-story-vue:src-components-accessibility-accessibilitysettings-story-vue-0", "kind": "variant" }, "8": { "id": "src-components-accessibility-accessibilitysettings-story-vue:src-components-accessibility-accessibilitysettings-story-vue-1", "kind": "variant" }, "9": { "id": "src-components-accessibility-accessibilitysettings-story-vue:src-components-accessibility-accessibilitysettings-story-vue-2", "kind": "variant" }, "10": { "id": "src-components-accessibility-accessibilitysettings-story-vue:src-components-accessibility-accessibilitysettings-story-vue-3", "kind": "variant" }, "11": { "id": "src-components-accessibility-fontselector-story-vue", "kind": "story" }, "12": { "id": "src-components-accessibility-fontselector-story-vue:src-components-accessibility-fontselector-story-vue-0", "kind": "variant" }, "13": { "id": "src-components-accessibility-fontselector-story-vue:src-components-accessibility-fontselector-story-vue-1", "kind": "variant" }, "14": { "id": "src-components-accessibility-fontselector-story-vue:src-components-accessibility-fontselector-story-vue-2", "kind": "variant" }, "15": { "id": "src-components-accessibility-fontselector-story-vue:src-components-accessibility-fontselector-story-vue-3", "kind": "variant" }, "16": { "id": "src-components-accessibility-themeselector-story-vue", "kind": "story" }, "17": { "id": "src-components-accessibility-themeselector-story-vue:src-components-accessibility-themeselector-story-vue-0", "kind": "variant" }, "18": { "id": "src-components-accessibility-themeselector-story-vue:src-components-accessibility-themeselector-story-vue-1", "kind": "variant" }, "19": { "id": "src-components-accessibility-themeselector-story-vue:src-components-accessibility-themeselector-story-vue-2", "kind": "variant" }, "20": { "id": "src-components-badges-badgedisplay-story-vue", "kind": "story" }, "21": { "id": "src-components-badges-badgedisplay-story-vue:src-components-badges-badgedisplay-story-vue-0", "kind": "variant" }, "22": { "id": "src-components-badges-badgedisplay-story-vue:src-components-badges-badgedisplay-story-vue-1", "kind": "variant" }, "23": { "id": "src-components-badges-badgedisplay-story-vue:src-components-badges-badgedisplay-story-vue-2", "kind": "variant" }, "24": { "id": "src-components-badges-badgedisplay-story-vue:src-components-badges-badgedisplay-story-vue-3", "kind": "variant" }, "25": { "id": "src-components-badges-badgedisplay-story-vue:src-components-badges-badgedisplay-story-vue-4", "kind": "variant" }, "26": { "id": "src-components-badges-badgelist-story-vue", "kind": "story" }, "27": { "id": "src-components-badges-badgelist-story-vue:src-components-badges-badgelist-story-vue-0", "kind": "variant" }, "28": { "id": "src-components-badges-badgelist-story-vue:src-components-badges-badgelist-story-vue-1", "kind": "variant" }, "29": { "id": "src-components-badges-badgelist-story-vue:src-components-badges-badgelist-story-vue-2", "kind": "variant" }, "30": { "id": "src-components-badges-badgelist-story-vue:src-components-badges-badgelist-story-vue-3", "kind": "variant" }, "31": { "id": "src-components-badges-badgelist-story-vue:src-components-badges-badgelist-story-vue-4", "kind": "variant" }, "32": { "id": "src-components-badges-badgelist-story-vue:src-components-badges-badgelist-story-vue-5", "kind": "variant" }, "33": { "id": "src-components-badges-badgeverification-story-vue", "kind": "story" }, "34": { "id": "src-components-badges-badgeverification-story-vue:src-components-badges-badgeverification-story-vue-0", "kind": "variant" }, "35": { "id": "src-components-badges-badgeverification-story-vue:src-components-badges-badgeverification-story-vue-1", "kind": "variant" }, "36": { "id": "src-components-badges-badgeverification-story-vue:src-components-badges-badgeverification-story-vue-2", "kind": "variant" }, "37": { "id": "src-components-badges-badgeverification-story-vue:src-components-badges-badgeverification-story-vue-3", "kind": "variant" }, "38": { "id": "src-components-badges-profileviewer-story-vue", "kind": "story" }, "39": { "id": "src-components-badges-profileviewer-story-vue:src-components-badges-profileviewer-story-vue-0", "kind": "variant" }, "40": { "id": "src-components-badges-profileviewer-story-vue:src-components-badges-profileviewer-story-vue-1", "kind": "variant" }, "41": { "id": "src-components-badges-profileviewer-story-vue:src-components-badges-profileviewer-story-vue-2", "kind": "variant" }, "42": { "id": "src-components-badges-profileviewer-story-vue:src-components-badges-profileviewer-story-vue-3", "kind": "variant" }, "43": { "id": "src-components-badges-profileviewer-story-vue:src-components-badges-profileviewer-story-vue-4", "kind": "variant" }, "44": { "id": "src-components-issuing-badgeissuerform-story-vue", "kind": "story" }, "45": { "id": "src-components-issuing-badgeissuerform-story-vue:src-components-issuing-badgeissuerform-story-vue-0", "kind": "variant" }, "46": { "id": "src-components-issuing-badgeissuerform-story-vue:src-components-issuing-badgeissuerform-story-vue-1", "kind": "variant" }, "47": { "id": "src-components-issuing-badgeissuerform-story-vue:src-components-issuing-badgeissuerform-story-vue-2", "kind": "variant" }, "48": { "id": "src-components-issuing-issuerdashboard-story-vue", "kind": "story" }, "49": { "id": "src-components-issuing-issuerdashboard-story-vue:src-components-issuing-issuerdashboard-story-vue-0", "kind": "variant" }, "50": { "id": "src-components-issuing-issuerdashboard-story-vue:src-components-issuing-issuerdashboard-story-vue-1", "kind": "variant" } } };
const searchData = markRaw(searchData$1);
const _hoisted_1 = {
  key: 1,
  class: "htw-max-h-[400px] htw-overflow-y-auto htw-rounded-b-lg"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SearchPane",
  props: {
    shown: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    close: () => true
  },
  setup(__props, { emit: __emit }) {
    const DocSearchData = () => __vitePreload(() => import("./search-docs-data-1575692c.js"), true ? ["assets/search-docs-data-1575692c.js","assets/vendor-0a8d26a3.js"] : void 0);
    const props = __props;
    const emit = __emit;
    function close() {
      emit("close");
    }
    const input = ref();
    const { focused } = useFocus(input, {
      initialValue: true
    });
    watch(() => props.shown, (value) => {
      if (value) {
        requestAnimationFrame(() => {
          focused.value = true;
          input.value.select();
        });
      }
    });
    const searchInputText = ref("");
    const rateLimitedSearch = refDebounced(searchInputText, 50);
    const storyStore = useStoryStore();
    let titleSearchIndex;
    let titleIdMap;
    function createIndex() {
      return new flexsearch_bundleExports.Document({
        preset: "match",
        document: {
          id: "id",
          index: [
            "text"
          ]
        },
        worker: true,
        charset,
        language,
        tokenize: "forward"
      });
    }
    async function loadSearchIndex(data) {
      titleSearchIndex = createIndex();
      for (const key of Object.keys(data.index)) {
        await titleSearchIndex.import(key, data.index[key]);
      }
      titleIdMap = data.idMap;
    }
    loadSearchIndex(searchData);
    let docSearchIndex;
    let docIdMap;
    async function loadDocSearchIndex() {
      async function load(data) {
        docSearchIndex = createIndex();
        for (const key of Object.keys(data.index)) {
          await docSearchIndex.import(key, data.index[key]);
        }
        docIdMap = data.idMap;
        if (rateLimitedSearch.value) {
          searchOnDocField(rateLimitedSearch.value);
        }
      }
      const searchDataModule = await DocSearchData();
      load(searchDataModule.searchData);
      searchDataModule.onUpdate((searchData2) => {
        load(searchData2);
      });
    }
    loadDocSearchIndex();
    const titleResults = ref([]);
    watch(rateLimitedSearch, async (value) => {
      const list = [];
      const raw = await titleSearchIndex.search(value);
      let rank = 0;
      for (const field of raw) {
        for (const id of field.result) {
          const idMapData = titleIdMap[id];
          if (!idMapData)
            continue;
          switch (idMapData.kind) {
            case "story": {
              list.push(storyResultFactory(storyStore.getStoryById(idMapData.id), rank));
              rank++;
              break;
            }
            case "variant": {
              const [storyId] = idMapData.id.split(":");
              const story = storyStore.getStoryById(storyId);
              const variant = storyStore.getVariantById(idMapData.id);
              list.push(variantResultFactory(story, variant, rank));
              rank++;
              break;
            }
          }
        }
      }
      titleResults.value = list;
    });
    const docsResults = ref([]);
    async function searchOnDocField(query) {
      if (docSearchIndex) {
        const list = [];
        const raw = await docSearchIndex.search(query);
        let rank = 0;
        for (const field of raw) {
          for (const id of field.result) {
            const idMapData = docIdMap[id];
            if (!idMapData)
              continue;
            switch (idMapData.kind) {
              case "story": {
                list.push(storyResultFactory(storyStore.getStoryById(idMapData.id), rank, "docs"));
                rank++;
                break;
              }
            }
          }
        }
        docsResults.value = list;
      }
    }
    watch(rateLimitedSearch, searchOnDocField);
    function storyResultFactory(story, rank, type = "title") {
      return {
        kind: "story",
        rank,
        id: `story:${story.id}`,
        title: story.title,
        route: {
          name: "story",
          params: {
            storyId: story.id
          },
          query: {
            ...type === "docs" ? { tab: "docs" } : {}
          }
        },
        path: story.file.path.slice(0, -1),
        icon: story.icon,
        iconColor: story.iconColor
      };
    }
    function variantResultFactory(story, variant, rank, type = "title") {
      return {
        kind: "variant",
        rank,
        id: `variant:${story.id}:${variant.id}`,
        title: variant.title,
        route: {
          name: "story",
          params: {
            storyId: story.id
          },
          query: {
            variantId: variant.id,
            ...type === "docs" ? { tab: "docs" } : {}
          }
        },
        path: [...story.file.path ?? [], story.title],
        icon: variant.icon,
        iconColor: variant.iconColor
      };
    }
    const commandResults = computed(() => {
      return [];
    });
    useCommandStore();
    const results = computed(() => {
      const list = [
        ...commandResults.value,
        ...titleResults.value
      ];
      const seen = {};
      for (const r of titleResults.value) {
        seen[r.id] = true;
      }
      for (const r of docsResults.value) {
        if (!seen[r.id]) {
          list.push(r);
        }
      }
      return list;
    });
    const {
      selectedIndex,
      selectNext,
      selectPrevious
    } = useSelection(results);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", {
          class: "histoire-search-pane htw-flex htw-items-center htw-gap-4 htw-pl-6 htw-border htw-border-transparent focus-visible:htw-border-primary-500",
          onClick: _cache[4] || (_cache[4] = ($event) => focused.value = true)
        }, [
          createVNode(unref(Icon), {
            icon: "carbon:search",
            class: "flex-none htw-w-4 htw-h-4"
          }),
          withDirectives(createBaseVNode("input", {
            ref_key: "input",
            ref: input,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchInputText.value = $event),
            placeholder: "Search for stories, variants...",
            class: "htw-bg-transparent htw-w-full htw-flex-1 htw-pl-0 htw-pr-6 htw-py-4 htw-outline-none",
            onKeydown: [
              _cache[1] || (_cache[1] = withKeys(withModifiers(($event) => unref(selectNext)(), ["prevent"]), ["down"])),
              _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => unref(selectPrevious)(), ["prevent"]), ["up"])),
              _cache[3] || (_cache[3] = withKeys(($event) => close(), ["escape"]))
            ]
          }, null, 544), [
            [vModelText, searchInputText.value]
          ])
        ]),
        unref(rateLimitedSearch) && !results.value.length ? (openBlock(), createBlock(BaseEmpty, {
          key: 0,
          class: "no-animation"
        }, {
          default: withCtx(() => [
            createTextVNode(" No results ")
          ]),
          _: 1
        })) : results.value.length ? (openBlock(), createElementBlock("div", _hoisted_1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(results.value, (result, index) => {
            return openBlock(), createBlock(SearchItem, {
              key: result.id,
              result,
              selected: index === unref(selectedIndex),
              onClose: _cache[5] || (_cache[5] = ($event) => close())
            }, null, 8, ["result", "selected"]);
          }), 128))
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=SearchPane.vue-0cd9fa56.js.map
