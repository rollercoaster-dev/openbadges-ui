import { f as createIRI, i as isOB2Assertion, d as isOB3VerifiableCredential } from "./mockData-72c9d2de.js";
import { aU as v4 } from "./vendor-0a8d26a3.js";
class BadgeService {
  /**
   * Creates a new BadgeClass template with default values
   */
  static createBadgeClassTemplate() {
    const id = createIRI(`urn:uuid:${v4()}`);
    const emptyImage = {
      id,
      type: "Image"
    };
    return {
      "@context": "https://w3id.org/openbadges/v2",
      id,
      type: "BadgeClass",
      name: "",
      description: "",
      image: emptyImage,
      criteria: { narrative: "" },
      issuer: {
        id,
        type: "Profile",
        name: ""
      }
    };
  }
  /**
   * Creates a new Assertion template with default values
   */
  static createAssertionTemplate(badgeClass, recipientEmail) {
    const id = `urn:uuid:${v4()}`;
    const now = (/* @__PURE__ */ new Date()).toISOString();
    return {
      "@context": "https://w3id.org/openbadges/v2",
      id,
      type: "Assertion",
      recipient: {
        identity: recipientEmail,
        type: "email",
        hashed: false
      },
      badge: badgeClass,
      issuedOn: now,
      verification: {
        type: "hosted"
      }
    };
  }
  /**
   * Validates a BadgeClass object
   * @returns Array of validation errors, empty if valid
   */
  static validateBadgeClass(badgeClass) {
    const errors = [];
    if (!badgeClass.id) {
      errors.push("Badge ID is required");
    }
    if (!badgeClass.name) {
      errors.push("Badge name is required");
    }
    if (!badgeClass.description) {
      errors.push("Badge description is required");
    }
    if (!badgeClass.image) {
      errors.push("Badge image is required");
    }
    if (!badgeClass.issuer) {
      errors.push("Issuer is required");
    }
    if (typeof badgeClass.issuer === "object" && !badgeClass.issuer.name) {
      errors.push("Issuer name is required");
    }
    return errors;
  }
  /**
   * Validates an Assertion object
   * @returns Array of validation errors, empty if valid
   */
  static validateAssertion(assertion) {
    var _a;
    const errors = [];
    if (!assertion.id) {
      errors.push("Assertion ID is required");
    }
    if (!assertion.badge) {
      errors.push("Badge reference is required");
    }
    if (!assertion.issuedOn) {
      errors.push("Issue date is required");
    }
    if (!((_a = assertion.recipient) == null ? void 0 : _a.identity)) {
      errors.push("Recipient identity is required");
    }
    return errors;
  }
  /**
   * Normalizes a badge object (either OB2 or OB3) to a common format for display
   */
  static normalizeBadge(badge) {
    if (isOB2Assertion(badge)) {
      const badgeClass = typeof badge.badge === "string" ? { name: "Unknown Badge", description: "", image: "" } : badge.badge;
      let issuerName = "Unknown Issuer";
      let issuerUrl;
      let issuerImage;
      if (typeof badgeClass === "object" && "issuer" in badgeClass) {
        if (typeof badgeClass.issuer === "string") {
          issuerName = "Unknown Issuer";
        } else if (typeof badgeClass.issuer === "object") {
          issuerName = badgeClass.issuer.name;
          issuerUrl = typeof badgeClass.issuer.url === "string" ? badgeClass.issuer.url : void 0;
          if (badgeClass.issuer.image) {
            if (typeof badgeClass.issuer.image === "string") {
              issuerImage = badgeClass.issuer.image;
            } else if (typeof badgeClass.issuer.image === "object" && "id" in badgeClass.issuer.image) {
              issuerImage = badgeClass.issuer.image.id;
            }
          }
        }
      }
      let badgeImage = "";
      if (typeof badgeClass === "object" && "image" in badgeClass) {
        if (typeof badgeClass.image === "string") {
          badgeImage = badgeClass.image;
        } else if (typeof badgeClass.image === "object" && "id" in badgeClass.image) {
          badgeImage = badgeClass.image.id;
        }
      }
      return {
        id: badge.id,
        name: typeof badgeClass === "object" && "name" in badgeClass ? badgeClass.name : "Unknown Badge",
        description: typeof badgeClass === "object" && "description" in badgeClass ? badgeClass.description : "",
        image: badgeImage,
        issuer: {
          name: issuerName,
          url: issuerUrl,
          image: issuerImage
        },
        issuedOn: badge.issuedOn,
        expires: badge.expires
      };
    } else if (isOB3VerifiableCredential(badge)) {
      const achievement = badge.credentialSubject.achievement;
      const issuer = badge.issuer;
      let achievementName = "Unknown Badge";
      if (typeof achievement === "object") {
        if (Array.isArray(achievement)) {
          if (achievement.length > 0 && "name" in achievement[0]) {
            const name = achievement[0].name;
            achievementName = typeof name === "string" ? name : "Unknown Badge";
          }
        } else if ("name" in achievement) {
          const name = achievement.name;
          if (typeof name === "string") {
            achievementName = name;
          } else if (Array.isArray(name) && name.length > 0) {
            achievementName = typeof name[0] === "string" ? name[0] : "Unknown Badge";
          }
        }
      }
      let achievementDescription = "";
      if (typeof achievement === "object" && !Array.isArray(achievement) && "description" in achievement) {
        const description = achievement.description;
        if (typeof description === "string") {
          achievementDescription = description;
        }
      }
      let achievementImage = "";
      if (typeof achievement === "object" && !Array.isArray(achievement) && "image" in achievement) {
        const image = achievement.image;
        if (typeof image === "string") {
          achievementImage = image;
        } else if (typeof image === "object" && image && "id" in image) {
          achievementImage = image.id;
        }
      }
      let issuerName = "Unknown Issuer";
      let issuerUrl;
      let issuerImage;
      if (typeof issuer === "object") {
        if ("name" in issuer) {
          const name = issuer.name;
          issuerName = typeof name === "string" ? name : "Unknown Issuer";
        }
        if ("url" in issuer) {
          issuerUrl = issuer.url;
        }
        if ("image" in issuer) {
          const image = issuer.image;
          if (typeof image === "string") {
            issuerImage = image;
          } else if (typeof image === "object" && image && "id" in image) {
            issuerImage = image.id;
          }
        }
      }
      return {
        id: badge.id,
        name: achievementName,
        description: achievementDescription,
        image: achievementImage,
        issuer: {
          name: issuerName,
          url: issuerUrl,
          image: issuerImage
        },
        issuedOn: badge.issuanceDate,
        expires: badge.expirationDate
      };
    }
    return {
      id: "unknown",
      name: "Unknown Badge",
      description: "Badge format not recognized",
      image: "",
      issuer: {
        name: "Unknown Issuer"
      },
      issuedOn: (/* @__PURE__ */ new Date()).toISOString()
    };
  }
}
export {
  BadgeService as B
};
//# sourceMappingURL=BadgeService-6d49e27e.js.map
