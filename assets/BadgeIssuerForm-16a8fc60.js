import { aT as reactive, aE as computed, aq as defineComponent, ar as ref, az as watch, at as openBlock, aA as createElementBlock, ax as createBaseVNode, aD as createCommentVNode, aK as withDirectives, aM as vModelText, aF as normalizeClass, aG as Fragment, aH as renderList, aP as withModifiers, aC as toDisplayString } from "./vendor-0a8d26a3.js";
import { B as BadgeService } from "./BadgeService-6d49e27e.js";
import { f as createIRI } from "./mockData-72c9d2de.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
function useBadgeIssuer() {
  const state = reactive({
    badgeClass: BadgeService.createBadgeClassTemplate(),
    recipientEmail: "",
    isSubmitting: false,
    errors: [],
    success: false
  });
  const isValid = computed(() => {
    const badgeClassErrors = BadgeService.validateBadgeClass(state.badgeClass);
    return badgeClassErrors.length === 0 && !!state.recipientEmail;
  });
  const resetForm = () => {
    state.badgeClass = BadgeService.createBadgeClassTemplate();
    state.recipientEmail = "";
    state.errors = [];
    state.success = false;
  };
  const validateForm = () => {
    state.errors = [];
    const badgeClassErrors = BadgeService.validateBadgeClass(state.badgeClass);
    state.errors.push(...badgeClassErrors);
    if (!state.recipientEmail) {
      state.errors.push("Recipient email is required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.recipientEmail)) {
      state.errors.push("Invalid email format");
    }
    return state.errors.length === 0;
  };
  const issueBadge = async () => {
    state.isSubmitting = true;
    state.errors = [];
    state.success = false;
    try {
      if (!validateForm()) {
        state.isSubmitting = false;
        return null;
      }
      const assertion = BadgeService.createAssertionTemplate(
        state.badgeClass,
        state.recipientEmail
      );
      state.success = true;
      return assertion;
    } catch (error) {
      if (error instanceof Error) {
        state.errors.push(error.message);
      } else {
        state.errors.push("An unknown error occurred");
      }
      return null;
    } finally {
      state.isSubmitting = false;
    }
  };
  return {
    state,
    isValid,
    resetForm,
    validateForm,
    issueBadge
  };
}
const BadgeIssuerForm_vue_vue_type_style_index_0_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BadgeIssuerForm",
  props: {
    initialBadgeClass: { type: Object, required: false, default: () => ({}) },
    initialRecipientEmail: { type: String, required: false, default: "" }
  },
  emits: ["badge-issued", "reset"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const { state, resetForm: resetIssuerForm, issueBadge } = useBadgeIssuer();
    if (props.initialBadgeClass) {
      Object.assign(state.badgeClass, props.initialBadgeClass);
    }
    if (props.initialRecipientEmail) {
      state.recipientEmail = props.initialRecipientEmail;
    }
    const tagsInput = ref("");
    const criteriaText = ref("");
    const issuerName = ref("");
    const issuerUrl = ref("");
    const badgeImageUrl = ref("");
    if (state.badgeClass.tags && state.badgeClass.tags.length > 0) {
      tagsInput.value = state.badgeClass.tags.join(", ");
    }
    if (state.badgeClass.criteria && typeof state.badgeClass.criteria === "object" && "narrative" in state.badgeClass.criteria) {
      criteriaText.value = state.badgeClass.criteria.narrative;
    }
    if (typeof state.badgeClass.issuer === "object") {
      issuerName.value = state.badgeClass.issuer.name || "";
      issuerUrl.value = state.badgeClass.issuer.url || "";
    } else if (typeof state.badgeClass.issuer === "string") {
      issuerName.value = "Unknown Issuer";
    }
    if (state.badgeClass.image) {
      if (typeof state.badgeClass.image === "string") {
        badgeImageUrl.value = state.badgeClass.image;
      } else if (typeof state.badgeClass.image === "object" && "id" in state.badgeClass.image) {
        badgeImageUrl.value = state.badgeClass.image.id;
      }
    }
    watch(tagsInput, (newValue) => {
      if (newValue.trim()) {
        state.badgeClass.tags = newValue.split(",").map((tag) => tag.trim()).filter(Boolean);
      } else {
        state.badgeClass.tags = [];
      }
    });
    watch(criteriaText, (newValue) => {
      if (!state.badgeClass.criteria) {
        state.badgeClass.criteria = { narrative: "" };
      }
      if (typeof state.badgeClass.criteria === "object") {
        state.badgeClass.criteria.narrative = newValue;
      } else {
        state.badgeClass.criteria = { narrative: newValue };
      }
    });
    watch([issuerName, issuerUrl], ([newName, newUrl]) => {
      if (typeof state.badgeClass.issuer !== "object") {
        state.badgeClass.issuer = {
          id: createIRI(state.badgeClass.id.replace(/\/badge\/.*$/, "/issuer")),
          type: "Profile",
          name: ""
        };
      }
      if (typeof state.badgeClass.issuer === "object") {
        state.badgeClass.issuer.name = newName;
        if (newUrl) {
          state.badgeClass.issuer.url = createIRI(newUrl);
        }
      }
    });
    watch(badgeImageUrl, (newValue) => {
      if (newValue) {
        state.badgeClass.image = {
          id: createIRI(newValue),
          type: "Image"
        };
      } else {
        state.badgeClass.image = {
          id: createIRI(""),
          type: "Image"
        };
      }
    });
    const hasError = (field) => {
      return state.errors.some((error) => error.toLowerCase().includes(field.toLowerCase()));
    };
    const handleSubmit = async () => {
      const assertion = await issueBadge();
      if (assertion) {
        emit("badge-issued", assertion);
      }
    };
    const resetForm = () => {
      resetIssuerForm();
      tagsInput.value = "";
      criteriaText.value = "";
      issuerName.value = "";
      issuerUrl.value = "";
      badgeImageUrl.value = "";
      emit("reset");
    };
    const __returned__ = { props, emit, state, resetIssuerForm, issueBadge, tagsInput, criteriaText, issuerName, issuerUrl, badgeImageUrl, hasError, handleSubmit, resetForm };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "manus-badge-issuer-form" };
const _hoisted_2 = { class: "manus-form-section" };
const _hoisted_3 = { class: "manus-form-field" };
const _hoisted_4 = {
  key: 0,
  id: "badge-name-error",
  class: "manus-form-error",
  role: "alert"
};
const _hoisted_5 = { class: "manus-form-field" };
const _hoisted_6 = {
  key: 0,
  id: "badge-description-error",
  class: "manus-form-error",
  role: "alert"
};
const _hoisted_7 = { class: "manus-form-field" };
const _hoisted_8 = {
  key: 0,
  id: "badge-image-error",
  class: "manus-form-error",
  role: "alert"
};
const _hoisted_9 = { class: "manus-form-field" };
const _hoisted_10 = { class: "manus-form-field" };
const _hoisted_11 = { class: "manus-form-section" };
const _hoisted_12 = { class: "manus-form-field" };
const _hoisted_13 = {
  key: 0,
  id: "issuer-name-error",
  class: "manus-form-error",
  role: "alert"
};
const _hoisted_14 = { class: "manus-form-field" };
const _hoisted_15 = { class: "manus-form-section" };
const _hoisted_16 = { class: "manus-form-field" };
const _hoisted_17 = {
  key: 0,
  id: "recipient-email-error",
  class: "manus-form-error",
  role: "alert"
};
const _hoisted_18 = { class: "manus-form-actions" };
const _hoisted_19 = ["disabled"];
const _hoisted_20 = ["disabled"];
const _hoisted_21 = { key: 0 };
const _hoisted_22 = { key: 1 };
const _hoisted_23 = {
  key: 0,
  class: "manus-form-errors",
  role: "alert",
  "aria-live": "polite"
};
const _hoisted_24 = {
  key: 1,
  class: "manus-form-success",
  role: "status",
  "aria-live": "polite"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode(
      "form",
      {
        novalidate: "",
        onSubmit: withModifiers($setup.handleSubmit, ["prevent"])
      },
      [
        createBaseVNode("fieldset", _hoisted_2, [
          _cache[15] || (_cache[15] = createBaseVNode(
            "legend",
            { class: "manus-form-section-title" },
            " Badge Information ",
            -1
            /* HOISTED */
          )),
          createCommentVNode(" Badge Name "),
          createBaseVNode("div", _hoisted_3, [
            _cache[8] || (_cache[8] = createBaseVNode(
              "label",
              {
                for: "badge-name",
                class: "manus-form-label"
              },
              "Badge Name *",
              -1
              /* HOISTED */
            )),
            withDirectives(createBaseVNode(
              "input",
              {
                id: "badge-name",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.state.badgeClass.name = $event),
                type: "text",
                class: normalizeClass(["manus-form-input", { "manus-form-input-error": $setup.hasError("name") }]),
                required: "",
                "aria-describedby": "badge-name-error"
              },
              null,
              2
              /* CLASS */
            ), [
              [vModelText, $setup.state.badgeClass.name]
            ]),
            $setup.hasError("name") ? (openBlock(), createElementBlock("div", _hoisted_4, " Badge name is required ")) : createCommentVNode("v-if", true)
          ]),
          createCommentVNode(" Badge Description "),
          createBaseVNode("div", _hoisted_5, [
            _cache[9] || (_cache[9] = createBaseVNode(
              "label",
              {
                for: "badge-description",
                class: "manus-form-label"
              },
              "Description *",
              -1
              /* HOISTED */
            )),
            withDirectives(createBaseVNode(
              "textarea",
              {
                id: "badge-description",
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.state.badgeClass.description = $event),
                class: normalizeClass(["manus-form-textarea", { "manus-form-input-error": $setup.hasError("description") }]),
                rows: "3",
                required: "",
                "aria-describedby": "badge-description-error"
              },
              null,
              2
              /* CLASS */
            ), [
              [vModelText, $setup.state.badgeClass.description]
            ]),
            $setup.hasError("description") ? (openBlock(), createElementBlock("div", _hoisted_6, " Badge description is required ")) : createCommentVNode("v-if", true)
          ]),
          createCommentVNode(" Badge Image URL "),
          createBaseVNode("div", _hoisted_7, [
            _cache[10] || (_cache[10] = createBaseVNode(
              "label",
              {
                for: "badge-image",
                class: "manus-form-label"
              },
              "Image URL *",
              -1
              /* HOISTED */
            )),
            withDirectives(createBaseVNode(
              "input",
              {
                id: "badge-image",
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.badgeImageUrl = $event),
                type: "url",
                class: normalizeClass(["manus-form-input", { "manus-form-input-error": $setup.hasError("image") }]),
                placeholder: "https://example.com/badge-image.png",
                required: "",
                "aria-describedby": "badge-image-error badge-image-help"
              },
              null,
              2
              /* CLASS */
            ), [
              [vModelText, $setup.badgeImageUrl]
            ]),
            $setup.hasError("image") ? (openBlock(), createElementBlock("div", _hoisted_8, " Valid badge image URL is required ")) : createCommentVNode("v-if", true),
            _cache[11] || (_cache[11] = createBaseVNode(
              "div",
              {
                id: "badge-image-help",
                class: "manus-form-help"
              },
              " Provide a URL to an image for this badge (PNG, SVG, or JPEG recommended) ",
              -1
              /* HOISTED */
            ))
          ]),
          createCommentVNode(" Badge Criteria "),
          createBaseVNode("div", _hoisted_9, [
            _cache[12] || (_cache[12] = createBaseVNode(
              "label",
              {
                for: "badge-criteria",
                class: "manus-form-label"
              },
              "Criteria",
              -1
              /* HOISTED */
            )),
            withDirectives(createBaseVNode(
              "textarea",
              {
                id: "badge-criteria",
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.criteriaText = $event),
                class: "manus-form-textarea",
                rows: "3",
                placeholder: "Describe what someone must do to earn this badge"
              },
              null,
              512
              /* NEED_PATCH */
            ), [
              [vModelText, $setup.criteriaText]
            ])
          ]),
          createCommentVNode(" Badge Tags "),
          createBaseVNode("div", _hoisted_10, [
            _cache[13] || (_cache[13] = createBaseVNode(
              "label",
              {
                for: "badge-tags",
                class: "manus-form-label"
              },
              "Tags",
              -1
              /* HOISTED */
            )),
            withDirectives(createBaseVNode(
              "input",
              {
                id: "badge-tags",
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.tagsInput = $event),
                type: "text",
                class: "manus-form-input",
                placeholder: "Enter comma-separated tags",
                "aria-describedby": "badge-tags-help"
              },
              null,
              512
              /* NEED_PATCH */
            ), [
              [vModelText, $setup.tagsInput]
            ]),
            _cache[14] || (_cache[14] = createBaseVNode(
              "div",
              {
                id: "badge-tags-help",
                class: "manus-form-help"
              },
              " Optional: Add comma-separated tags to help categorize this badge ",
              -1
              /* HOISTED */
            ))
          ])
        ]),
        createBaseVNode("fieldset", _hoisted_11, [
          _cache[18] || (_cache[18] = createBaseVNode(
            "legend",
            { class: "manus-form-section-title" },
            " Issuer Information ",
            -1
            /* HOISTED */
          )),
          createCommentVNode(" Issuer Name "),
          createBaseVNode("div", _hoisted_12, [
            _cache[16] || (_cache[16] = createBaseVNode(
              "label",
              {
                for: "issuer-name",
                class: "manus-form-label"
              },
              "Issuer Name *",
              -1
              /* HOISTED */
            )),
            withDirectives(createBaseVNode(
              "input",
              {
                id: "issuer-name",
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.issuerName = $event),
                type: "text",
                class: normalizeClass(["manus-form-input", { "manus-form-input-error": $setup.hasError("issuer") }]),
                required: "",
                "aria-describedby": "issuer-name-error"
              },
              null,
              2
              /* CLASS */
            ), [
              [vModelText, $setup.issuerName]
            ]),
            $setup.hasError("issuer") ? (openBlock(), createElementBlock("div", _hoisted_13, " Issuer name is required ")) : createCommentVNode("v-if", true)
          ]),
          createCommentVNode(" Issuer URL "),
          createBaseVNode("div", _hoisted_14, [
            _cache[17] || (_cache[17] = createBaseVNode(
              "label",
              {
                for: "issuer-url",
                class: "manus-form-label"
              },
              "Issuer URL",
              -1
              /* HOISTED */
            )),
            withDirectives(createBaseVNode(
              "input",
              {
                id: "issuer-url",
                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.issuerUrl = $event),
                type: "url",
                class: "manus-form-input",
                placeholder: "https://example.org"
              },
              null,
              512
              /* NEED_PATCH */
            ), [
              [vModelText, $setup.issuerUrl]
            ])
          ])
        ]),
        createBaseVNode("fieldset", _hoisted_15, [
          _cache[20] || (_cache[20] = createBaseVNode(
            "legend",
            { class: "manus-form-section-title" },
            " Recipient Information ",
            -1
            /* HOISTED */
          )),
          createCommentVNode(" Recipient Email "),
          createBaseVNode("div", _hoisted_16, [
            _cache[19] || (_cache[19] = createBaseVNode(
              "label",
              {
                for: "recipient-email",
                class: "manus-form-label"
              },
              "Recipient Email *",
              -1
              /* HOISTED */
            )),
            withDirectives(createBaseVNode(
              "input",
              {
                id: "recipient-email",
                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.state.recipientEmail = $event),
                type: "email",
                class: normalizeClass(["manus-form-input", { "manus-form-input-error": $setup.hasError("recipient") }]),
                required: "",
                "aria-describedby": "recipient-email-error"
              },
              null,
              2
              /* CLASS */
            ), [
              [vModelText, $setup.state.recipientEmail]
            ]),
            $setup.hasError("recipient") ? (openBlock(), createElementBlock("div", _hoisted_17, " Valid recipient email is required ")) : createCommentVNode("v-if", true)
          ])
        ]),
        createCommentVNode(" Form Actions "),
        createBaseVNode("div", _hoisted_18, [
          createBaseVNode("button", {
            type: "button",
            class: "manus-button manus-button-secondary",
            disabled: $setup.state.isSubmitting,
            onClick: $setup.resetForm
          }, " Reset ", 8, _hoisted_19),
          createBaseVNode("button", {
            type: "submit",
            class: "manus-button manus-button-primary",
            disabled: $setup.state.isSubmitting
          }, [
            $setup.state.isSubmitting ? (openBlock(), createElementBlock("span", _hoisted_21, "Issuing...")) : (openBlock(), createElementBlock("span", _hoisted_22, "Issue Badge"))
          ], 8, _hoisted_20)
        ]),
        createCommentVNode(" Form Errors "),
        $setup.state.errors.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_23, [
          _cache[21] || (_cache[21] = createBaseVNode(
            "p",
            null,
            "Please correct the following errors:",
            -1
            /* HOISTED */
          )),
          createBaseVNode("ul", null, [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList($setup.state.errors, (error, index) => {
                return openBlock(), createElementBlock(
                  "li",
                  { key: index },
                  toDisplayString(error),
                  1
                  /* TEXT */
                );
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ])) : createCommentVNode("v-if", true),
        createCommentVNode(" Success Message "),
        $setup.state.success ? (openBlock(), createElementBlock("div", _hoisted_24, " Badge successfully issued! ")) : createCommentVNode("v-if", true)
      ],
      32
      /* NEED_HYDRATION */
    )
  ]);
}
_sfc_main.__file = "src/components/issuing/BadgeIssuerForm.vue";
const BadgeIssuerForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/openbadges-ui/openbadges-ui/src/components/issuing/BadgeIssuerForm.vue"]]);
export {
  BadgeIssuerForm as B
};
//# sourceMappingURL=BadgeIssuerForm-16a8fc60.js.map
