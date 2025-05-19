function createIRI(url) {
  return url;
}
const OB2Guards = {
  isIdentityObject: (value) => {
    if (typeof value !== "object" || value === null) {
      return false;
    }
    const obj = value;
    return "type" in obj && "identity" in obj;
  },
  isVerificationObject: (value) => {
    if (typeof value !== "object" || value === null) {
      return false;
    }
    const obj = value;
    return "type" in obj;
  },
  isEvidence: (value) => {
    if (typeof value !== "object" || value === null) {
      return false;
    }
    return true;
  },
  isAlignmentObject: (value) => {
    if (typeof value !== "object" || value === null) {
      return false;
    }
    const obj = value;
    return "targetName" in obj && "targetUrl" in obj;
  },
  isImage: (value) => {
    if (typeof value !== "object" || value === null) {
      return false;
    }
    return true;
  },
  isCriteria: (value) => {
    if (typeof value !== "object" || value === null) {
      return false;
    }
    return true;
  }
};
const OB3Guards = {
  isProof: (value) => {
    if (typeof value !== "object" || value === null) {
      return false;
    }
    const obj = value;
    return "type" in obj;
  },
  isCredentialStatus: (value) => {
    if (typeof value !== "object" || value === null) {
      return false;
    }
    const obj = value;
    return "id" in obj && "type" in obj;
  },
  isIssuer: (value) => {
    if (typeof value !== "object" || value === null) {
      return false;
    }
    const obj = value;
    return "id" in obj && "type" in obj;
  },
  isCredentialSubject: (value) => {
    if (typeof value !== "object" || value === null) {
      return false;
    }
    const obj = value;
    return "id" in obj || "achievement" in obj;
  },
  isAchievement: (value) => {
    if (typeof value !== "object" || value === null) {
      return false;
    }
    const obj = value;
    return "id" in obj && "type" in obj;
  },
  isCriteria: (value) => {
    if (typeof value !== "object" || value === null) {
      return false;
    }
    const obj = value;
    return "narrative" in obj || "id" in obj;
  },
  isRefreshService: (value) => {
    if (typeof value !== "object" || value === null) {
      return false;
    }
    const obj = value;
    return "id" in obj && "type" in obj;
  },
  isTermsOfUse: (value) => {
    if (typeof value !== "object" || value === null) {
      return false;
    }
    const obj = value;
    return "type" in obj;
  },
  isEvidence: (value) => {
    if (typeof value !== "object" || value === null) {
      return false;
    }
    const obj = value;
    return "type" in obj || "id" in obj;
  }
};
function isOB2Assertion(badge) {
  if (typeof badge !== "object" || badge === null) {
    return false;
  }
  const obj = badge;
  return "type" in obj && obj.type === "Assertion" && "recipient" in obj && "badge" in obj && "verification" in obj && "issuedOn" in obj;
}
function isOB3VerifiableCredential(badge) {
  if (typeof badge !== "object" || badge === null) {
    return false;
  }
  const obj = badge;
  return "@context" in obj && "type" in obj && Array.isArray(obj.type) && obj.type.includes("VerifiableCredential") && "issuer" in obj && "issuanceDate" in obj && "credentialSubject" in obj;
}
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
  alice: {
    id: "https://example.org/recipients/alice",
    name: "Alice Johnson",
    image: "https://ui-avatars.com/api/?name=Alice+J&background=553C9A&color=fff",
    description: "AI researcher and machine learning enthusiast",
    email: "alice@example.org",
    type: "Recipient",
    badges: [mockAssertions[0], mockAssertions[2], mockOB3Credential]
  },
  bob: {
    id: "https://example.org/recipients/bob",
    name: "Bob Smith",
    image: "https://ui-avatars.com/api/?name=Bob+S&background=2B6CB0&color=fff",
    description: "Data scientist specializing in neural networks",
    email: "bob@example.org",
    type: "Recipient",
    badges: [mockAssertions[1]]
  },
  manus: {
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
  OB2Guards as O,
  mockOB3Credential as a,
  mockProfiles as b,
  mockBadgeClasses as c,
  isOB3VerifiableCredential as d,
  OB3Guards as e,
  createIRI as f,
  isOB2Assertion as i,
  mockAssertions as m
};
//# sourceMappingURL=mockData-72c9d2de.js.map
