// src/utils/type-helpers.ts
import type { OB2, OB3, Shared } from 'openbadges-types';

// Helper function to convert string to IRI branded type
export function createIRI(url: string): Shared.IRI {
  return url as Shared.IRI;
}

// Helper function to convert string to DateTime branded type
export function createDateTime(dateTimeString: string): Shared.DateTime {
  return dateTimeString as Shared.DateTime;
}

// Type guards for runtime type checking
export function isOB2Assertion(badge: unknown): badge is OB2.Assertion {
  return !!badge && typeof badge === 'object' && 'type' in badge && badge.type === 'Assertion';
}

export function isOB3VerifiableCredential(badge: unknown): badge is OB3.VerifiableCredential {
  return (
    !!badge &&
    typeof badge === 'object' &&
    '@context' in badge &&
    'type' in badge &&
    Array.isArray(badge.type) &&
    badge.type.includes('VerifiableCredential')
  );
}

// Export a dummy value to make the module recognized
export const __moduleMarker = true;
