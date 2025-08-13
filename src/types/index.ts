// src/types/index.ts
// Re-export types from openbadges-types package

// Re-export all types from the openbadges-types package
export * from 'openbadges-types';

// Utility types for the library
export type ProfileType = 'Issuer' | 'Recipient';

export interface Profile {
  id: string;
  name: string;
  image?: string;
  description?: string;
  url?: string;
  email?: string;
  type: ProfileType;
}

/**
 * Minimal, framework-agnostic badge shape consumed by UI components (e.g., BadgeDisplay).
 * - Only `name` is required; all other fields are optional.
 * - Dates (`issuedDate`, `expiryDate`) should be ISO 8601 strings.
 * - `image`/`issuer.image`/`issuer.url` are expected to be valid URLs/IRIs.
 */
export interface BadgeDisplayData {
  id?: string;
  name: string;
  description?: string;
  image?: string;
  issuer?: {
    name: string;
    url?: string;
    image?: string;
  };
  issuedDate?: string;
  expiryDate?: string;
  tags?: string[];
}
