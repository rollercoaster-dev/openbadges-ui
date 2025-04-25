import { aQ as v4 } from "./vendor-6808bd13.js";
function isOB2Assertion(badge) {
  return !!badge && typeof badge === "object" && "type" in badge && badge.type === "Assertion";
}
function isOB3VerifiableCredential(badge) {
  return !!badge && typeof badge === "object" && "@context" in badge && "type" in badge && Array.isArray(badge.type) && badge.type.includes("VerifiableCredential");
}
class BadgeService {
  /**
   * Creates a new BadgeClass template with default values
   */
  static createBadgeClassTemplate() {
    const id = `urn:uuid:${v4()}`;
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
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const mockIssuer = {
  "@context": "https://w3id.org/openbadges/v2",
  id: "https://example.org/issuer",
  type: "Profile",
  name: "Rollercoaster.dev",
  url: "https://example.org",
  email: "badges@example.org",
  description: "An organization dedicated to advancing AI education and certification.",
  image: {
    id: "https://ui-avatars.com/api/?name=Manus+AI&background=0D8ABC&color=fff",
    type: "Image"
  }
};
const mockBadgeClasses = [
  {
    "@context": "https://w3id.org/openbadges/v2",
    id: "https://example.org/badges/1",
    type: "BadgeClass",
    name: "AI Ethics Fundamentals",
    description: "Awarded for demonstrating understanding of core AI ethics principles and their application.",
    image: {
      id: "https://ui-avatars.com/api/?name=AI+Ethics&background=2A9D8F&color=fff",
      type: "Image"
    },
    criteria: {
      narrative: "Recipients must complete the AI Ethics course and pass the assessment with a score of 80% or higher."
    },
    issuer: mockIssuer,
    tags: ["ai", "ethics", "fundamentals"]
  },
  {
    "@context": "https://w3id.org/openbadges/v2",
    id: "https://example.org/badges/2",
    type: "BadgeClass",
    name: "Machine Learning Practitioner",
    description: "Recognizes proficiency in applying machine learning algorithms to solve real-world problems.",
    image: {
      id: "https://ui-avatars.com/api/?name=ML+Pro&background=E9C46A&color=000",
      type: "Image"
    },
    criteria: {
      narrative: "Recipients must complete three ML projects demonstrating data preprocessing, model selection, training, evaluation, and deployment."
    },
    issuer: mockIssuer,
    tags: ["machine learning", "data science", "advanced"]
  },
  {
    "@context": "https://w3id.org/openbadges/v2",
    id: "https://example.org/badges/3",
    type: "BadgeClass",
    name: "Neural Network Architect",
    description: "Awarded for expertise in designing and implementing neural network architectures.",
    image: {
      id: "https://ui-avatars.com/api/?name=NN+Arch&background=E76F51&color=fff",
      type: "Image"
    },
    criteria: {
      narrative: "Recipients must design and implement a custom neural network architecture that achieves state-of-the-art performance on a benchmark task."
    },
    issuer: mockIssuer,
    tags: ["neural networks", "deep learning", "expert"]
  }
];
const mockAssertions = [
  {
    "@context": "https://w3id.org/openbadges/v2",
    id: "https://example.org/assertions/1001",
    type: "Assertion",
    recipient: {
      identity: "alice@example.org",
      type: "email",
      hashed: false
    },
    badge: mockBadgeClasses[0],
    issuedOn: "2025-01-15T12:00:00Z",
    verification: {
      type: "hosted"
    }
  },
  {
    "@context": "https://w3id.org/openbadges/v2",
    id: "https://example.org/assertions/1002",
    type: "Assertion",
    recipient: {
      identity: "bob@example.org",
      type: "email",
      hashed: false
    },
    badge: mockBadgeClasses[1],
    issuedOn: "2025-02-20T14:30:00Z",
    verification: {
      type: "hosted"
    }
  },
  {
    "@context": "https://w3id.org/openbadges/v2",
    id: "https://example.org/assertions/1003",
    type: "Assertion",
    recipient: {
      identity: "alice@example.org",
      type: "email",
      hashed: false
    },
    badge: mockBadgeClasses[2],
    issuedOn: "2025-03-10T09:15:00Z",
    verification: {
      type: "hosted"
    }
  }
];
const mockOB3Achievement = {
  type: ["Achievement"],
  id: "https://example.org/achievements/4",
  name: "Responsible AI Developer",
  description: "Awarded for demonstrating expertise in developing AI systems that are ethical, fair, and transparent.",
  criteria: {
    narrative: "Recipients must complete the Responsible AI course and implement a project that addresses bias, fairness, and explainability."
  },
  image: {
    id: "https://ui-avatars.com/api/?name=Resp+AI&background=264653&color=fff",
    type: "Image"
  }
};
const mockOB3Credential = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://purl.imsglobal.org/spec/ob/v3p0/context.json"
  ],
  id: "https://example.org/credentials/2001",
  type: ["VerifiableCredential"],
  issuer: {
    id: "https://example.org/issuers/manus",
    type: ["Profile"],
    name: "Rollercoaster.dev",
    url: "https://example.org",
    image: {
      id: "https://ui-avatars.com/api/?name=Manus+AI&background=0D8ABC&color=fff",
      type: "Image"
    }
  },
  issuanceDate: "2025-04-01T10:00:00Z",
  credentialSubject: {
    id: "did:example:ebfeb1f712ebc6f1c276e12ec21",
    achievement: mockOB3Achievement
  }
};
const mockProfiles = {
  "alice": {
    id: "https://example.org/recipients/alice",
    name: "Alice Johnson",
    image: "https://ui-avatars.com/api/?name=Alice+J&background=553C9A&color=fff",
    description: "AI researcher and machine learning enthusiast",
    email: "alice@example.org",
    type: "Recipient",
    badges: [mockAssertions[0], mockAssertions[2], mockOB3Credential]
  },
  "bob": {
    id: "https://example.org/recipients/bob",
    name: "Bob Smith",
    image: "https://ui-avatars.com/api/?name=Bob+S&background=2B6CB0&color=fff",
    description: "Data scientist specializing in neural networks",
    email: "bob@example.org",
    type: "Recipient",
    badges: [mockAssertions[1]]
  },
  "manus": {
    id: "https://example.org/issuer",
    name: "Rollercoaster.dev",
    image: "https://ui-avatars.com/api/?name=Manus+AI&background=0D8ABC&color=fff",
    description: "An organization dedicated to advancing AI education and certification.",
    url: "https://example.org",
    email: "badges@example.org",
    type: "Issuer",
    badges: mockAssertions
  }
};
export {
  BadgeService as B,
  _export_sfc as _,
  mockOB3Credential as a,
  mockProfiles as b,
  mockBadgeClasses as c,
  mockAssertions as m
};
//# sourceMappingURL=mockData-2abc48a9.js.map
