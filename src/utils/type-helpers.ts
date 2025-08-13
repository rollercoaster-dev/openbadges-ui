// src/utils/type-helpers.ts
import type { OB2, OB3, Shared, BadgeDisplayData } from '@/types';

// Helper function to convert string to IRI branded type
export function createIRI(url: string): Shared.IRI {
  return url as Shared.IRI;
}

// Helper function to convert string to DateTime branded type
export function createDateTime(dateTimeString: string): Shared.DateTime {
  return dateTimeString as Shared.DateTime;
}

// Create namespaces to match the guards referenced in BadgeVerificationService.ts
// These namespaces mirror the guards available in the OB2 and OB3 modules
export const OB2Guards = {
  isIdentityObject: (value: unknown): value is OB2.IdentityObject => {
    if (typeof value !== 'object' || value === null) {return false;}
    const obj = value as Record<string, unknown>;
    return 'type' in obj && 'identity' in obj;
  },

  isVerificationObject: (value: unknown): value is OB2.VerificationObject => {
    if (typeof value !== 'object' || value === null) {return false;}
    const obj = value as Record<string, unknown>;
    return 'type' in obj;
  },

  isEvidence: (value: unknown): value is OB2.Evidence => {
    if (typeof value !== 'object' || value === null) {return false;}
    // OB2 Evidence is a flexible object with no strict required props
    return true;
  },

  isAlignmentObject: (value: unknown): value is OB2.AlignmentObject => {
    if (typeof value !== 'object' || value === null) {return false;}
    const obj = value as Record<string, unknown>;
    return 'targetName' in obj && 'targetUrl' in obj;
  },

  isImage: (value: unknown): value is OB2.Image => {
    if (typeof value !== 'object' || value === null) {return false;}
    // OB2 Image is a flexible object with no strict required props
    return true;
  },

  isCriteria: (value: unknown): value is OB2.Criteria => {
    if (typeof value !== 'object' || value === null) {return false;}
    // OB2 Criteria is a flexible object with no strict required props
    return true;
  },
};

export const OB3Guards = {
  isProof: (value: unknown): value is OB3.Proof => {
    if (typeof value !== 'object' || value === null) {return false;}
    const obj = value as Record<string, unknown>;
    return 'type' in obj;
  },

  isCredentialStatus: (value: unknown): value is OB3.CredentialStatus => {
    if (typeof value !== 'object' || value === null) {return false;}
    const obj = value as Record<string, unknown>;
    return 'id' in obj && 'type' in obj;
  },

  isIssuer: (value: unknown): value is OB3.Issuer => {
    if (typeof value !== 'object' || value === null) {return false;}
    const obj = value as Record<string, unknown>;
    return 'id' in obj && 'type' in obj;
  },

  isCredentialSubject: (value: unknown): value is OB3.CredentialSubject => {
    if (typeof value !== 'object' || value === null) {return false;}
    const obj = value as Record<string, unknown>;
    return 'id' in obj || 'achievement' in obj;
  },

  isAchievement: (value: unknown): value is OB3.Achievement => {
    if (typeof value !== 'object' || value === null) {return false;}
    const obj = value as Record<string, unknown>;
    return 'id' in obj && 'type' in obj;
  },

  isCriteria: (value: unknown): value is OB3.Criteria => {
    if (typeof value !== 'object' || value === null) {return false;}
    const obj = value as Record<string, unknown>;
    return 'narrative' in obj || 'id' in obj;
  },

  isRefreshService: (value: unknown): value is OB3.RefreshService => {
    if (typeof value !== 'object' || value === null) {return false;}
    const obj = value as Record<string, unknown>;
    return 'id' in obj && 'type' in obj;
  },

  isTermsOfUse: (value: unknown): value is OB3.TermsOfUse => {
    if (typeof value !== 'object' || value === null) {return false;}
    const obj = value as Record<string, unknown>;
    return 'type' in obj;
  },

  isEvidence: (value: unknown): value is OB3.Evidence => {
    if (typeof value !== 'object' || value === null) {return false;}
    const obj = value as Record<string, unknown>;
    return 'type' in obj || 'id' in obj;
  },
};

// Type guards for runtime type checking
export function isOB2Assertion(badge: unknown): badge is OB2.Assertion {
  if (typeof badge !== 'object' || badge === null) {return false;}
  const obj = badge as Record<string, unknown>;

  return (
    'type' in obj &&
    obj.type === 'Assertion' &&
    'recipient' in obj &&
    'badge' in obj &&
    'verification' in obj &&
    'issuedOn' in obj
  );
}

export function isOB2BadgeClass(badge: unknown): badge is OB2.BadgeClass {
  if (typeof badge !== 'object' || badge === null) {return false;}
  const obj = badge as Record<string, unknown>;

  return (
    'type' in obj &&
    obj.type === 'BadgeClass' &&
    'name' in obj &&
    'description' in obj &&
    'image' in obj &&
    'issuer' in obj
  );
}

export function isOB3VerifiableCredential(badge: unknown): badge is OB3.VerifiableCredential {
  if (typeof badge !== 'object' || badge === null) {return false;}
  const obj = badge as Record<string, unknown>;

  return (
    '@context' in obj &&
    'type' in obj &&
    Array.isArray(obj.type) &&
    obj.type.includes('VerifiableCredential') &&
    'issuer' in obj &&
    'issuanceDate' in obj &&
    'credentialSubject' in obj
  );
}

export function isBadgeDisplayData(badge: unknown): badge is BadgeDisplayData {
  if (typeof badge !== 'object' || badge === null) {return false;}
  const obj = badge as Record<string, unknown>;

  // Must have a name (required field)
  if (!('name' in obj) || typeof obj.name !== 'string') {
    return false;
  }

  // If it has an OpenBadges type field, it's not a BadgeDisplayData
  if ('type' in obj && (obj.type === 'Assertion' || obj.type === 'BadgeClass' || Array.isArray(obj.type))) {
    return false;
  }

  // Optional fields should have correct types if present
  if ('description' in obj && typeof obj.description !== 'string') {
    return false;
  }
  if ('image' in obj && typeof obj.image !== 'string') {
    return false;
  }
  if ('issuedDate' in obj && typeof obj.issuedDate !== 'string') {
    return false;
  }
  if ('expiryDate' in obj && typeof obj.expiryDate !== 'string') {
    return false;
  }
  if ('tags' in obj && !Array.isArray(obj.tags)) {
    return false;
  }
  if ('issuer' in obj) {
    const issuer = obj.issuer;
    if (typeof issuer !== 'object' || issuer === null) {
      return false;
    }
    const issuerObj = issuer as Record<string, unknown>;
    if (!('name' in issuerObj) || typeof issuerObj.name !== 'string') {
      return false;
    }
  }

  return true;
}

// Export a dummy value to make the module recognized
export const __moduleMarker = true;
