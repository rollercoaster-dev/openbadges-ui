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

// Flexible interface for badge display - supports any badge data structure
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
