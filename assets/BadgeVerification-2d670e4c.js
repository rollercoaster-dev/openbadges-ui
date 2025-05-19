import { aQ as validateBadge, aR as isBadge, aS as isProfile, ar as ref, aE as computed, aq as defineComponent, at as openBlock, aA as createElementBlock, ax as createBaseVNode, aD as createCommentVNode, aC as toDisplayString, aF as normalizeClass, aG as Fragment, aH as renderList } from "./vendor-0a8d26a3.js";
import { i as isOB2Assertion, d as isOB3VerifiableCredential, O as OB2Guards, e as OB3Guards } from "./mockData-72c9d2de.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
class BadgeVerificationService {
  /**
   * Verifies a badge assertion
   * @param badge The badge to verify
   * @returns Verification result
   */
  static async verifyBadge(badge) {
    const result = {
      isValid: false,
      errors: [],
      warnings: [],
      structureValidation: {
        isValid: false,
        errors: [],
        warnings: []
      },
      contentValidation: {
        isValid: false,
        errors: [],
        warnings: []
      }
    };
    try {
      const validationResult = validateBadge(badge);
      result.structureValidation = {
        isValid: validationResult.isValid,
        errors: validationResult.errors,
        warnings: validationResult.warnings
      };
      result.badgeVersion = validationResult.version;
      if (!validationResult.isValid) {
        result.errors.push("Badge structure validation failed");
        result.errors = result.errors.concat(validationResult.errors);
        result.warnings = result.warnings.concat(validationResult.warnings);
        return result;
      }
      if (isOB2Assertion(badge)) {
        return await this.verifyOB2Badge(badge, result);
      } else if (isOB3VerifiableCredential(badge)) {
        return await this.verifyOB3Badge(badge, result);
      } else {
        result.errors.push("Unknown badge format");
        return result;
      }
    } catch (error) {
      result.errors.push(
        `Verification error: ${error instanceof Error ? error.message : String(error)}`
      );
      return result;
    }
  }
  /**
   * Verifies an Open Badges 2.0 assertion
   * @param badge The OB2 badge to verify
   * @param result The verification result to update
   * @returns Verification result
   */
  static async verifyOB2Badge(badge, result) {
    var _a;
    result.badgeVersion = "OB2";
    result.contentValidation = {
      isValid: true,
      errors: [],
      warnings: []
    };
    this.validateOB2Components(badge, result);
    if (!badge.verification) {
      result.contentValidation.errors.push("Badge is missing verification information");
      result.contentValidation.isValid = false;
    } else {
      const verificationType = typeof badge.verification.type === "string" ? badge.verification.type : Array.isArray(badge.verification.type) ? badge.verification.type[0] : null;
      if (!verificationType) {
        result.contentValidation.errors.push("Badge has invalid verification type");
        result.contentValidation.isValid = false;
      } else {
        const normalizedType = this.normalizeVerificationType(verificationType);
        result.verificationMethod = normalizedType;
        if (normalizedType === "hosted") {
          await this.verifyHostedBadge(badge, result);
        } else if (normalizedType === "signed") {
          await this.verifySignedBadge(badge, result);
        } else {
          result.contentValidation.errors.push(
            `Unsupported verification type: ${verificationType}`
          );
          result.contentValidation.isValid = false;
        }
      }
    }
    this.checkExpiration(badge, result);
    await this.checkRevocation(badge, result);
    if (!result.contentValidation.isValid) {
      result.errors = result.errors.concat(result.contentValidation.errors);
      result.warnings = result.warnings.concat(result.contentValidation.warnings);
    }
    result.isValid = ((_a = result.structureValidation) == null ? void 0 : _a.isValid) === true && result.contentValidation.isValid === true && result.errors.length === 0;
    return result;
  }
  /**
   * Validates the components of an OB2 badge using type guards
   * @param badge The OB2 badge to validate
   * @param result The verification result to update
   */
  static validateOB2Components(badge, result) {
    if (typeof badge.badge === "object") {
      if (!isBadge(badge.badge)) {
        result.contentValidation.errors.push("Invalid BadgeClass structure");
        result.contentValidation.isValid = false;
      } else {
        if (!badge.badge.name || badge.badge.name.trim() === "") {
          result.contentValidation.errors.push("BadgeClass is missing a name");
          result.contentValidation.isValid = false;
        }
        if (!badge.badge.description || badge.badge.description.trim() === "") {
          result.contentValidation.errors.push("BadgeClass is missing a description");
          result.contentValidation.isValid = false;
        }
        if (!badge.badge.image) {
          result.contentValidation.errors.push("BadgeClass is missing an image");
          result.contentValidation.isValid = false;
        } else if (typeof badge.badge.image === "object" && !OB2Guards.isImage(badge.badge.image)) {
          result.contentValidation.errors.push("BadgeClass has an invalid image structure");
          result.contentValidation.isValid = false;
        }
        if (badge.badge.criteria && !OB2Guards.isCriteria(badge.badge.criteria)) {
          result.contentValidation.errors.push("BadgeClass has an invalid criteria structure");
          result.contentValidation.isValid = false;
        }
        if (!badge.badge.issuer) {
          result.contentValidation.errors.push("BadgeClass is missing an issuer");
          result.contentValidation.isValid = false;
        } else if (typeof badge.badge.issuer === "object" && !isProfile(badge.badge.issuer)) {
          result.contentValidation.errors.push("BadgeClass has an invalid issuer structure");
          result.contentValidation.isValid = false;
        } else if (typeof badge.badge.issuer === "object") {
          if (!badge.badge.issuer.name || badge.badge.issuer.name.trim() === "") {
            result.contentValidation.errors.push("Issuer is missing a name");
            result.contentValidation.isValid = false;
          }
          if (badge.badge.issuer.url && typeof badge.badge.issuer.url === "string") {
            try {
              new URL(badge.badge.issuer.url);
            } catch (e) {
              result.contentValidation.errors.push("Issuer has an invalid URL");
              result.contentValidation.isValid = false;
            }
          }
        }
        if (badge.badge.alignment) {
          if (Array.isArray(badge.badge.alignment)) {
            for (const alignment of badge.badge.alignment) {
              if (!OB2Guards.isAlignmentObject(alignment)) {
                result.contentValidation.errors.push(
                  "BadgeClass has an invalid alignment structure"
                );
                result.contentValidation.isValid = false;
                break;
              }
            }
          } else if (!OB2Guards.isAlignmentObject(badge.badge.alignment)) {
            result.contentValidation.errors.push("BadgeClass has an invalid alignment structure");
            result.contentValidation.isValid = false;
          }
        }
      }
    } else if (typeof badge.badge === "string") {
      try {
        new URL(badge.badge);
      } catch (e) {
        result.contentValidation.errors.push("BadgeClass reference is not a valid URL");
        result.contentValidation.isValid = false;
      }
    } else {
      result.contentValidation.errors.push("Badge is missing a BadgeClass");
      result.contentValidation.isValid = false;
    }
    if (!badge.recipient) {
      result.contentValidation.errors.push("Badge is missing a recipient");
      result.contentValidation.isValid = false;
    } else if (!OB2Guards.isIdentityObject(badge.recipient)) {
      result.contentValidation.errors.push("Badge has an invalid recipient structure");
      result.contentValidation.isValid = false;
    } else {
      if (!badge.recipient.identity) {
        result.contentValidation.errors.push("Recipient is missing an identity");
        result.contentValidation.isValid = false;
      }
      if (!badge.recipient.type) {
        result.contentValidation.errors.push("Recipient is missing a type");
        result.contentValidation.isValid = false;
      }
      if (badge.recipient.hashed === void 0) {
        result.contentValidation.warnings.push("Recipient is missing the hashed property");
      }
    }
    if (!badge.verification) {
      result.contentValidation.errors.push("Badge is missing verification information");
      result.contentValidation.isValid = false;
    } else if (!OB2Guards.isVerificationObject(badge.verification)) {
      result.contentValidation.errors.push("Badge has an invalid verification structure");
      result.contentValidation.isValid = false;
    }
    if (!badge.issuedOn) {
      result.contentValidation.errors.push("Badge is missing an issuedOn date");
      result.contentValidation.isValid = false;
    } else {
      try {
        new Date(badge.issuedOn);
      } catch (e) {
        result.contentValidation.errors.push("Badge has an invalid issuedOn date");
        result.contentValidation.isValid = false;
      }
    }
    if (badge.evidence) {
      if (Array.isArray(badge.evidence)) {
        for (const evidence of badge.evidence) {
          if (typeof evidence === "object" && !OB2Guards.isEvidence(evidence)) {
            result.contentValidation.errors.push("Badge has an invalid evidence structure");
            result.contentValidation.isValid = false;
            break;
          }
        }
      } else if (typeof badge.evidence === "object" && !OB2Guards.isEvidence(badge.evidence)) {
        result.contentValidation.errors.push("Badge has an invalid evidence structure");
        result.contentValidation.isValid = false;
      }
    }
  }
  /**
   * Verifies an Open Badges 3.0 verifiable credential
   * @param badge The OB3 badge to verify
   * @param result The verification result to update
   * @returns Verification result
   */
  static async verifyOB3Badge(badge, result) {
    var _a;
    result.badgeVersion = "OB3";
    result.contentValidation = {
      isValid: true,
      errors: [],
      warnings: []
    };
    this.validateOB3Components(badge, result);
    if (!badge.proof) {
      result.contentValidation.errors.push("OB3 credential is missing proof information");
      result.contentValidation.isValid = false;
    } else {
      const proofType = badge.proof.type;
      if (!proofType) {
        result.contentValidation.errors.push("OB3 credential has invalid proof type");
        result.contentValidation.isValid = false;
      } else {
        result.contentValidation.warnings.push(
          "Full cryptographic verification of OB3 credentials is not yet implemented"
        );
        result.verificationMethod = "signed";
        if (!OB3Guards.isProof(badge.proof)) {
          result.contentValidation.errors.push("OB3 credential has an invalid proof structure");
          result.contentValidation.isValid = false;
        } else {
          if (!badge.proof.created) {
            result.contentValidation.errors.push("Proof is missing a creation date");
            result.contentValidation.isValid = false;
          }
          if (!badge.proof.verificationMethod) {
            result.contentValidation.errors.push("Proof is missing a verification method");
            result.contentValidation.isValid = false;
          }
          if (!badge.proof.proofPurpose) {
            result.contentValidation.errors.push("Proof is missing a proof purpose");
            result.contentValidation.isValid = false;
          }
          if (!badge.proof.proofValue) {
            result.contentValidation.errors.push("Proof is missing a proof value");
            result.contentValidation.isValid = false;
          }
        }
      }
    }
    this.checkExpiration(badge, result);
    if (badge.credentialStatus) {
      if (!OB3Guards.isCredentialStatus(badge.credentialStatus)) {
        result.contentValidation.errors.push(
          "OB3 credential has an invalid credential status structure"
        );
        result.contentValidation.isValid = false;
      } else {
        if (!badge.credentialStatus.id) {
          result.contentValidation.errors.push("Credential status is missing an ID");
          result.contentValidation.isValid = false;
        }
        if (!badge.credentialStatus.type) {
          result.contentValidation.errors.push("Credential status is missing a type");
          result.contentValidation.isValid = false;
        }
        result.contentValidation.warnings.push(
          "Credential status checking requires network access to validate against the status endpoint"
        );
      }
    } else {
      result.contentValidation.warnings.push("OB3 credential does not specify a credential status");
    }
    if (!result.contentValidation.isValid) {
      result.errors = result.errors.concat(result.contentValidation.errors);
      result.warnings = result.warnings.concat(result.contentValidation.warnings);
    }
    result.isValid = ((_a = result.structureValidation) == null ? void 0 : _a.isValid) === true && result.contentValidation.isValid === true && result.errors.length === 0;
    return result;
  }
  /**
   * Validates the components of an OB3 badge using type guards
   * @param badge The OB3 badge to validate
   * @param result The verification result to update
   */
  static validateOB3Components(badge, result) {
    if (!badge["@context"] || !Array.isArray(badge["@context"])) {
      result.contentValidation.errors.push("OB3 credential is missing a valid context");
      result.contentValidation.isValid = false;
    } else {
      const hasW3CContext = badge["@context"].some(
        (ctx) => ctx === "https://www.w3.org/2018/credentials/v1" || ctx === "https://w3id.org/credentials/v1"
      );
      const hasOB3Context = badge["@context"].some(
        (ctx) => ctx === "https://purl.imsglobal.org/spec/ob/v3p0/context.json" || ctx === "https://w3id.org/openbadges/v3"
      );
      if (!hasW3CContext) {
        result.contentValidation.errors.push(
          "OB3 credential is missing the W3C Verifiable Credentials context"
        );
        result.contentValidation.isValid = false;
      }
      if (!hasOB3Context) {
        result.contentValidation.errors.push(
          "OB3 credential is missing the Open Badges v3 context"
        );
        result.contentValidation.isValid = false;
      }
    }
    if (!badge.type || !Array.isArray(badge.type)) {
      result.contentValidation.errors.push("OB3 credential is missing a valid type");
      result.contentValidation.isValid = false;
    } else {
      const hasVCType = badge.type.includes("VerifiableCredential");
      const hasOBType = badge.type.includes("OpenBadgeCredential");
      if (!hasVCType) {
        result.contentValidation.errors.push(
          "OB3 credential is missing the VerifiableCredential type"
        );
        result.contentValidation.isValid = false;
      }
      if (!hasOBType) {
        result.contentValidation.errors.push(
          "OB3 credential is missing the OpenBadgeCredential type"
        );
        result.contentValidation.isValid = false;
      }
    }
    if (!badge.issuer) {
      result.contentValidation.errors.push("OB3 credential is missing an issuer");
      result.contentValidation.isValid = false;
    } else if (!OB3Guards.isIssuer(badge.issuer)) {
      result.contentValidation.errors.push("OB3 credential has an invalid issuer structure");
      result.contentValidation.isValid = false;
    } else {
      if (!badge.issuer.id) {
        result.contentValidation.errors.push("Issuer is missing an ID");
        result.contentValidation.isValid = false;
      }
      if (!badge.issuer.type) {
        result.contentValidation.errors.push("Issuer is missing a type");
        result.contentValidation.isValid = false;
      }
      if (!badge.issuer.name) {
        result.contentValidation.warnings.push("Issuer is missing a name");
      }
    }
    if (!badge.issuanceDate) {
      result.contentValidation.errors.push("OB3 credential is missing an issuance date");
      result.contentValidation.isValid = false;
    } else {
      try {
        new Date(badge.issuanceDate);
      } catch (e) {
        result.contentValidation.errors.push("OB3 credential has an invalid issuance date");
        result.contentValidation.isValid = false;
      }
    }
    if (!badge.credentialSubject) {
      result.contentValidation.errors.push("OB3 credential is missing a credential subject");
      result.contentValidation.isValid = false;
    } else if (!OB3Guards.isCredentialSubject(badge.credentialSubject)) {
      result.contentValidation.errors.push(
        "OB3 credential has an invalid credential subject structure"
      );
      result.contentValidation.isValid = false;
    } else {
      if (!badge.credentialSubject.type) {
        result.contentValidation.errors.push("Credential subject is missing a type");
        result.contentValidation.isValid = false;
      }
      if (!badge.credentialSubject.achievement) {
        result.contentValidation.errors.push("Credential subject is missing an achievement");
        result.contentValidation.isValid = false;
      } else if (!OB3Guards.isAchievement(badge.credentialSubject.achievement)) {
        result.contentValidation.errors.push(
          "Credential subject has an invalid achievement structure"
        );
        result.contentValidation.isValid = false;
      } else {
        if (!badge.credentialSubject.achievement.id) {
          result.contentValidation.errors.push("Achievement is missing an ID");
          result.contentValidation.isValid = false;
        }
        if (!badge.credentialSubject.achievement.type) {
          result.contentValidation.errors.push("Achievement is missing a type");
          result.contentValidation.isValid = false;
        }
        if (!badge.credentialSubject.achievement.name) {
          result.contentValidation.errors.push("Achievement is missing a name");
          result.contentValidation.isValid = false;
        }
        if (badge.credentialSubject.achievement.criteria && !OB3Guards.isCriteria(badge.credentialSubject.achievement.criteria)) {
          result.contentValidation.errors.push("Achievement has an invalid criteria structure");
          result.contentValidation.isValid = false;
        }
        if (badge.credentialSubject.achievement.image) {
          if (typeof badge.credentialSubject.achievement.image === "object" && (!badge.credentialSubject.achievement.image.id || !badge.credentialSubject.achievement.image.type)) {
            result.contentValidation.errors.push("Achievement has an invalid image structure");
            result.contentValidation.isValid = false;
          }
        } else {
          result.contentValidation.warnings.push("Achievement is missing an image");
        }
      }
    }
    if (badge.refreshService && !OB3Guards.isRefreshService(badge.refreshService)) {
      result.contentValidation.errors.push(
        "OB3 credential has an invalid refresh service structure"
      );
      result.contentValidation.isValid = false;
    }
    if (badge.termsOfUse) {
      if (Array.isArray(badge.termsOfUse)) {
        for (const terms of badge.termsOfUse) {
          if (!OB3Guards.isTermsOfUse(terms)) {
            result.contentValidation.errors.push(
              "OB3 credential has an invalid terms of use structure"
            );
            result.contentValidation.isValid = false;
            break;
          }
        }
      } else if (!OB3Guards.isTermsOfUse(badge.termsOfUse)) {
        result.contentValidation.errors.push(
          "OB3 credential has an invalid terms of use structure"
        );
        result.contentValidation.isValid = false;
      }
    }
    if (badge.evidence) {
      if (Array.isArray(badge.evidence)) {
        for (const evidence of badge.evidence) {
          if (!OB3Guards.isEvidence(evidence)) {
            result.contentValidation.errors.push(
              "OB3 credential has an invalid evidence structure"
            );
            result.contentValidation.isValid = false;
            break;
          }
        }
      } else if (!OB3Guards.isEvidence(badge.evidence)) {
        result.contentValidation.errors.push("OB3 credential has an invalid evidence structure");
        result.contentValidation.isValid = false;
      }
    }
  }
  /**
   * Verifies a hosted badge by checking if it's accessible at its ID URL
   * @param badge The badge to verify
   * @param result The verification result to update
   */
  static async verifyHostedBadge(badge, result) {
    if (!badge.id || typeof badge.id !== "string" || !badge.id.startsWith("http")) {
      result.contentValidation.errors.push("Hosted badge must have an HTTP(S) ID URL");
      result.contentValidation.isValid = false;
      return;
    }
    result.contentValidation.warnings.push(
      "Hosted badge verification requires network access to validate against the hosted assertion"
    );
  }
  /**
   * Verifies a signed badge by checking its signature
   * @param badge The badge to verify
   * @param result The verification result to update
   */
  static async verifySignedBadge(badge, result) {
    const verification = badge.verification;
    if (!verification.creator && typeof badge.badge === "object" && badge.badge.issuer) {
      result.contentValidation.warnings.push(
        "Signed badge does not specify which key was used for signing"
      );
    }
    result.contentValidation.warnings.push(
      "Full signature verification requires cryptographic libraries"
    );
  }
  /**
   * Checks if a badge has expired
   * @param badge The badge to check
   * @param result The verification result to update
   */
  static checkExpiration(badge, result) {
    const expirationDate = isOB2Assertion(badge) ? badge.expires : badge.expirationDate;
    if (expirationDate) {
      const expDate = new Date(expirationDate);
      const now = /* @__PURE__ */ new Date();
      if (expDate < now) {
        result.expirationStatus = "expired";
        result.contentValidation.errors.push("Badge has expired");
        result.contentValidation.isValid = false;
      } else {
        result.expirationStatus = "valid";
      }
    } else {
      result.expirationStatus = "not-applicable";
    }
  }
  /**
   * Checks if a badge has been revoked
   * @param badge The badge to check
   * @param result The verification result to update
   */
  static async checkRevocation(badge, result) {
    if (isOB2Assertion(badge)) {
      if (badge.revoked === true) {
        result.revocationStatus = "revoked";
        result.contentValidation.errors.push(
          badge.revocationReason ? `Badge has been revoked: ${badge.revocationReason}` : "Badge has been revoked"
        );
        result.contentValidation.isValid = false;
        return;
      }
      result.revocationStatus = "valid";
      return;
    }
    if (badge.credentialStatus) {
      result.contentValidation.warnings.push("Credential status checking requires network access");
      result.revocationStatus = "unknown";
    } else {
      result.revocationStatus = "unknown";
      result.contentValidation.warnings.push(
        "Revocation checking for OB3 credentials is not fully implemented"
      );
    }
  }
  /**
   * Normalizes verification type to handle aliases
   * @param type The verification type to normalize
   * @returns Normalized verification type
   */
  static normalizeVerificationType(type) {
    switch (type.toLowerCase()) {
      case "hosted":
      case "hostedbadge":
        return "hosted";
      case "signed":
      case "signedbadge":
        return "signed";
      default:
        return type;
    }
  }
}
function useBadgeVerification() {
  const state = ref({
    isVerifying: false,
    lastVerified: null,
    result: null,
    badge: null
  });
  const isValid = computed(() => {
    var _a;
    return ((_a = state.value.result) == null ? void 0 : _a.isValid) ?? false;
  });
  const errors = computed(() => {
    var _a;
    return ((_a = state.value.result) == null ? void 0 : _a.errors) ?? [];
  });
  const warnings = computed(() => {
    var _a;
    return ((_a = state.value.result) == null ? void 0 : _a.warnings) ?? [];
  });
  const verificationMethod = computed(() => {
    var _a;
    return (_a = state.value.result) == null ? void 0 : _a.verificationMethod;
  });
  const expirationStatus = computed(() => {
    var _a;
    return (_a = state.value.result) == null ? void 0 : _a.expirationStatus;
  });
  const revocationStatus = computed(() => {
    var _a;
    return (_a = state.value.result) == null ? void 0 : _a.revocationStatus;
  });
  const hasBeenVerified = computed(() => state.value.lastVerified !== null);
  const verifyBadge = async (badge) => {
    state.value.isVerifying = true;
    state.value.badge = badge;
    try {
      const result = await BadgeVerificationService.verifyBadge(badge);
      state.value.result = result;
      state.value.lastVerified = /* @__PURE__ */ new Date();
      return result;
    } catch (error) {
      const errorMessage = `Verification failed: ${error instanceof Error ? error.message : String(error)}`;
      const errorResult = {
        isValid: false,
        errors: [errorMessage],
        warnings: [],
        structureValidation: {
          isValid: false,
          errors: [errorMessage],
          warnings: []
        },
        contentValidation: {
          isValid: false,
          errors: [errorMessage],
          warnings: []
        }
      };
      state.value.result = errorResult;
      return errorResult;
    } finally {
      state.value.isVerifying = false;
    }
  };
  const clearVerification = () => {
    state.value = {
      isVerifying: false,
      lastVerified: null,
      result: null,
      badge: null
    };
  };
  return {
    // State
    state,
    // Computed
    isValid,
    errors,
    warnings,
    verificationMethod,
    expirationStatus,
    revocationStatus,
    hasBeenVerified,
    // Methods
    verifyBadge,
    clearVerification
  };
}
class AccessibilityService {
  /**
   * Generates accessible alt text for badge images
   * @param badgeName The name of the badge
   * @returns Formatted alt text
   */
  static generateBadgeAltText(badgeName) {
    return `Badge: ${badgeName}`;
  }
  /**
   * Formats a date for display in an accessible way
   * @param dateString ISO date string
   * @returns Formatted date string
   */
  static formatDate(dateString) {
    try {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      }).format(date);
    } catch (e) {
      return dateString;
    }
  }
  /**
   * Gets initials from a name for avatar placeholders
   * @param name Full name
   * @param maxLength Maximum number of characters to return
   * @returns Uppercase initials
   */
  static getInitials(name, maxLength = 2) {
    return name.split(" ").map((part) => part.charAt(0)).join("").toUpperCase().substring(0, maxLength);
  }
  /**
   * Truncates text with ellipsis if it exceeds maxLength
   * @param text Text to truncate
   * @param maxLength Maximum length before truncation
   * @returns Truncated text with ellipsis if needed
   */
  static truncateText(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + "…";
  }
  /**
   * Checks if a color has sufficient contrast against white or black
   * Simple implementation - for production use a full WCAG contrast checker
   * @param hexColor Hex color code (e.g., "#3182ce")
   * @returns Whether the color likely has sufficient contrast
   */
  static hasGoodContrast(hexColor) {
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    return luminance > 128;
  }
  /**
   * Applies a theme to the document by adding a class to the body
   * @param themeName Name of the theme to apply
   */
  static applyTheme(themeName) {
    document.body.classList.remove(
      "ob-dark-theme",
      "ob-high-contrast-theme",
      "ob-large-text-theme",
      "ob-dyslexia-friendly-theme",
      "ob-adhd-friendly-theme",
      "ob-autism-friendly-theme"
    );
    if (themeName !== "default") {
      document.body.classList.add(`ob-${themeName}-theme`);
    }
  }
  /**
   * Checks if reduced motion is preferred
   * @returns Whether reduced motion is preferred
   */
  static prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }
  /**
   * Simplifies text for better readability
   * Useful for users with cognitive disabilities, dyslexia, or ADHD
   * @param text The text to simplify
   * @param level The level of simplification (1-3, where 3 is most simplified)
   * @returns Simplified text
   */
  static simplifyText(text, level = 1) {
    if (level === 1) {
      return text.replace(/\b(utilize|utilise)\b/g, "use").replace(/\b(implement|implementation)\b/g, "use").replace(/\b(additional)\b/g, "more").replace(/\b(sufficient)\b/g, "enough").replace(/\b(approximately)\b/g, "about").replace(/\b(subsequently)\b/g, "later").replace(/\b(nevertheless|nonetheless)\b/g, "however");
    } else if (level === 2) {
      const simplified = text.replace(/\b(utilize|utilise)\b/g, "use").replace(/\b(implement|implementation)\b/g, "use").replace(/\b(additional)\b/g, "more").replace(/\b(sufficient)\b/g, "enough").replace(/\b(approximately)\b/g, "about").replace(/\b(subsequently)\b/g, "later").replace(/\b(nevertheless|nonetheless)\b/g, "however");
      return simplified.replace(/([.!?])\s+([A-Z])/g, "$1<br>$2");
    } else {
      const simplified = text.replace(/\b(utilize|utilise)\b/g, "use").replace(/\b(implement|implementation)\b/g, "use").replace(/\b(additional)\b/g, "more").replace(/\b(sufficient)\b/g, "enough").replace(/\b(approximately)\b/g, "about").replace(/\b(subsequently)\b/g, "later").replace(/\b(nevertheless|nonetheless)\b/g, "however").replace(/\b(therefore)\b/g, "so").replace(/\b(regarding)\b/g, "about").replace(/\b(concerning)\b/g, "about").replace(/\b(accordingly)\b/g, "so");
      return simplified.replace(/([.!?])\s+([A-Z])/g, "$1<br><br>$2");
    }
  }
  /**
   * Sets content density preference
   * Useful for users with ADHD, autism, or cognitive processing differences
   * @param density The content density preference
   */
  static setContentDensity(density) {
    document.body.classList.remove(
      "ob-density-compact",
      "ob-density-normal",
      "ob-density-spacious"
    );
    document.body.classList.add(`ob-density-${density}`);
  }
  /**
   * Enables focus mode to reduce distractions
   * Particularly helpful for users with ADHD
   * @param enabled Whether focus mode is enabled
   */
  static setFocusMode(enabled) {
    if (enabled) {
      document.body.classList.add("ob-focus-mode");
    } else {
      document.body.classList.remove("ob-focus-mode");
    }
  }
  /**
   * Controls animation and motion settings
   * Important for users with vestibular disorders, autism, ADHD
   * @param level The level of animation (none, minimal, full)
   */
  static setAnimationLevel(level) {
    document.body.classList.remove(
      "ob-animations-none",
      "ob-animations-minimal",
      "ob-animations-full"
    );
    document.body.classList.add(`ob-animations-${level}`);
  }
  /**
   * Sets reading mode for improved text readability
   * Helpful for users with dyslexia, visual processing issues
   * @param mode The reading mode to apply
   */
  static setReadingMode(mode) {
    document.body.classList.remove(
      "ob-reading-bionic",
      "ob-reading-ruler",
      "ob-reading-paragraph-focus"
    );
    if (mode !== "default") {
      document.body.classList.add(`ob-reading-${mode}`);
    }
  }
  /**
   * Formats numbers in a way that's easier to read for people with dyscalculia
   * @param value The number to format
   * @param options Formatting options
   * @returns Formatted number string
   */
  static formatNumber(value, options = {}) {
    const { useGrouping = true, addVisualSeparators = false, highlightDigits = false } = options;
    let formatted = value.toLocaleString(void 0, {
      useGrouping
    });
    if (addVisualSeparators) {
      formatted = formatted.replace(/,/g, '<span class="ob-number-separator">,</span>');
    }
    if (highlightDigits) {
      let result = "";
      for (let i = 0; i < formatted.length; i++) {
        const char = formatted[i];
        if (/\d/.test(char) && i % 2 === 0) {
          result += `<span class="ob-number-highlight">${char}</span>`;
        } else {
          result += char;
        }
      }
      formatted = result;
    }
    return formatted;
  }
}
const BadgeVerification_vue_vue_type_style_index_0_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BadgeVerification",
  props: {
    badge: { type: Object, required: true },
    showStatus: { type: Boolean, required: false, default: true },
    showDetails: { type: Boolean, required: false, default: true },
    showLastVerified: { type: Boolean, required: false, default: true },
    autoVerify: { type: Boolean, required: false, default: false }
  },
  emits: ["verified"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const {
      state,
      isValid,
      errors,
      warnings,
      verificationMethod,
      expirationStatus,
      revocationStatus,
      hasBeenVerified,
      verifyBadge
      // clearVerification is imported but not used
    } = useBadgeVerification();
    const isVerifying = computed(() => state.value.isVerifying);
    const lastVerified = computed(() => state.value.lastVerified);
    const formatVerificationMethod = (method) => {
      return method.charAt(0).toUpperCase() + method.slice(1);
    };
    const formatDate = (date) => {
      return AccessibilityService.formatDate(date.toISOString());
    };
    const handleVerify = async () => {
      const result = await verifyBadge(props.badge);
      emit("verified", result.isValid);
    };
    if (props.autoVerify) {
      handleVerify();
    }
    const __returned__ = { props, emit, state, isValid, errors, warnings, verificationMethod, expirationStatus, revocationStatus, hasBeenVerified, verifyBadge, isVerifying, lastVerified, formatVerificationMethod, formatDate, handleVerify };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = {
  key: 0,
  class: "ob-badge-verification-status"
};
const _hoisted_2 = {
  key: 0,
  class: "ob-badge-verification-loading",
  role: "status"
};
const _hoisted_3 = {
  key: 1,
  class: "ob-badge-verification-result"
};
const _hoisted_4 = {
  key: 0,
  class: "ob-badge-verification-valid"
};
const _hoisted_5 = {
  key: 1,
  class: "ob-badge-verification-invalid"
};
const _hoisted_6 = ["disabled"];
const _hoisted_7 = {
  key: 1,
  class: "ob-badge-verification-details"
};
const _hoisted_8 = {
  key: 0,
  class: "ob-badge-verification-method"
};
const _hoisted_9 = { class: "ob-badge-verification-value" };
const _hoisted_10 = {
  key: 1,
  class: "ob-badge-verification-expiration"
};
const _hoisted_11 = {
  key: 2,
  class: "ob-badge-verification-revocation"
};
const _hoisted_12 = {
  key: 3,
  class: "ob-badge-verification-errors"
};
const _hoisted_13 = {
  key: 4,
  class: "ob-badge-verification-warnings"
};
const _hoisted_14 = {
  key: 5,
  class: "ob-badge-verification-timestamp"
};
const _hoisted_15 = { class: "ob-badge-verification-value" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(["ob-badge-verification", {
        "is-valid": $setup.isValid,
        "is-invalid": !$setup.isValid && $setup.hasBeenVerified,
        "is-verifying": $setup.isVerifying,
        "is-expired": $setup.expirationStatus === "expired",
        "is-revoked": $setup.revocationStatus === "revoked"
      }])
    },
    [
      $props.showStatus ? (openBlock(), createElementBlock("div", _hoisted_1, [
        $setup.isVerifying ? (openBlock(), createElementBlock("div", _hoisted_2, _cache[0] || (_cache[0] = [
          createBaseVNode(
            "span",
            { class: "ob-visually-hidden" },
            "Verifying badge...",
            -1
            /* HOISTED */
          ),
          createBaseVNode(
            "div",
            { class: "ob-badge-verification-spinner" },
            null,
            -1
            /* HOISTED */
          )
        ]))) : $setup.hasBeenVerified ? (openBlock(), createElementBlock("div", _hoisted_3, [
          $setup.isValid ? (openBlock(), createElementBlock("div", _hoisted_4, _cache[1] || (_cache[1] = [
            createBaseVNode(
              "span",
              { class: "ob-badge-verification-icon" },
              "✓",
              -1
              /* HOISTED */
            ),
            createBaseVNode(
              "span",
              null,
              "Verified",
              -1
              /* HOISTED */
            )
          ]))) : (openBlock(), createElementBlock("div", _hoisted_5, _cache[2] || (_cache[2] = [
            createBaseVNode(
              "span",
              { class: "ob-badge-verification-icon" },
              "✗",
              -1
              /* HOISTED */
            ),
            createBaseVNode(
              "span",
              null,
              "Invalid",
              -1
              /* HOISTED */
            )
          ])))
        ])) : createCommentVNode("v-if", true),
        !$setup.isVerifying ? (openBlock(), createElementBlock("button", {
          key: 2,
          disabled: $setup.isVerifying,
          class: "ob-badge-verification-button",
          onClick: $setup.handleVerify
        }, toDisplayString($setup.hasBeenVerified ? "Verify Again" : "Verify Badge"), 9, _hoisted_6)) : createCommentVNode("v-if", true)
      ])) : createCommentVNode("v-if", true),
      $props.showDetails && $setup.hasBeenVerified ? (openBlock(), createElementBlock("div", _hoisted_7, [
        $setup.verificationMethod ? (openBlock(), createElementBlock("div", _hoisted_8, [
          _cache[3] || (_cache[3] = createBaseVNode(
            "span",
            { class: "ob-badge-verification-label" },
            "Verification Method:",
            -1
            /* HOISTED */
          )),
          createBaseVNode(
            "span",
            _hoisted_9,
            toDisplayString($setup.formatVerificationMethod($setup.verificationMethod)),
            1
            /* TEXT */
          )
        ])) : createCommentVNode("v-if", true),
        $setup.expirationStatus !== "not-applicable" ? (openBlock(), createElementBlock("div", _hoisted_10, [
          _cache[4] || (_cache[4] = createBaseVNode(
            "span",
            { class: "ob-badge-verification-label" },
            "Expiration Status:",
            -1
            /* HOISTED */
          )),
          createBaseVNode(
            "span",
            {
              class: normalizeClass(["ob-badge-verification-value", { "is-expired": $setup.expirationStatus === "expired" }])
            },
            toDisplayString($setup.expirationStatus === "expired" ? "Expired" : "Valid"),
            3
            /* TEXT, CLASS */
          )
        ])) : createCommentVNode("v-if", true),
        $setup.revocationStatus !== "unknown" ? (openBlock(), createElementBlock("div", _hoisted_11, [
          _cache[5] || (_cache[5] = createBaseVNode(
            "span",
            { class: "ob-badge-verification-label" },
            "Revocation Status:",
            -1
            /* HOISTED */
          )),
          createBaseVNode(
            "span",
            {
              class: normalizeClass(["ob-badge-verification-value", { "is-revoked": $setup.revocationStatus === "revoked" }])
            },
            toDisplayString($setup.revocationStatus === "revoked" ? "Revoked" : "Valid"),
            3
            /* TEXT, CLASS */
          )
        ])) : createCommentVNode("v-if", true),
        $setup.errors.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_12, [
          _cache[6] || (_cache[6] = createBaseVNode(
            "h4",
            { class: "ob-badge-verification-section-title" },
            " Errors: ",
            -1
            /* HOISTED */
          )),
          createBaseVNode("ul", null, [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList($setup.errors, (error, index) => {
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
        $setup.warnings.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_13, [
          _cache[7] || (_cache[7] = createBaseVNode(
            "h4",
            { class: "ob-badge-verification-section-title" },
            " Warnings: ",
            -1
            /* HOISTED */
          )),
          createBaseVNode("ul", null, [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList($setup.warnings, (warning, index) => {
                return openBlock(), createElementBlock(
                  "li",
                  { key: index },
                  toDisplayString(warning),
                  1
                  /* TEXT */
                );
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ])) : createCommentVNode("v-if", true),
        $props.showLastVerified && $setup.lastVerified ? (openBlock(), createElementBlock("div", _hoisted_14, [
          _cache[8] || (_cache[8] = createBaseVNode(
            "span",
            { class: "ob-badge-verification-label" },
            "Last Verified:",
            -1
            /* HOISTED */
          )),
          createBaseVNode(
            "span",
            _hoisted_15,
            toDisplayString($setup.formatDate($setup.lastVerified)),
            1
            /* TEXT */
          )
        ])) : createCommentVNode("v-if", true)
      ])) : createCommentVNode("v-if", true)
    ],
    2
    /* CLASS */
  );
}
_sfc_main.__file = "src/components/badges/BadgeVerification.vue";
const BadgeVerification = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/openbadges-ui/openbadges-ui/src/components/badges/BadgeVerification.vue"]]);
export {
  BadgeVerification as B
};
//# sourceMappingURL=BadgeVerification-2d670e4c.js.map
