// tests/integration/components/__mocks__/BadgeVerificationService.ts
import { vi } from 'vitest';
import type { VerificationResult } from '../../../../src/services/BadgeVerificationService';

export const BadgeVerificationService = {
  verifyBadge: vi.fn(),
};

// Helper function to set up default successful verification result
export function setupSuccessfulVerification() {
  BadgeVerificationService.verifyBadge.mockResolvedValue({
    isValid: true,
    errors: [],
    warnings: [],
    verificationMethod: 'hosted',
    expirationStatus: 'valid',
    revocationStatus: 'valid',
    structureValidation: {
      isValid: true,
      errors: [],
      warnings: [],
    },
    contentValidation: {
      isValid: true,
      errors: [],
      warnings: [],
    },
  });
}

// Helper function to set up a failed verification result
export function setupFailedVerification(errors: string[] = ['Invalid badge format']) {
  BadgeVerificationService.verifyBadge.mockResolvedValue({
    isValid: false,
    errors,
    warnings: [],
    verificationMethod: 'hosted',
    expirationStatus: 'valid',
    revocationStatus: 'valid',
    structureValidation: {
      isValid: false,
      errors,
      warnings: [],
    },
    contentValidation: {
      isValid: true,
      errors: [],
      warnings: [],
    },
  });
}

// Helper function to set up verification result with warnings
export function setupVerificationWithWarnings(warnings: string[] = ['Test warning']) {
  BadgeVerificationService.verifyBadge.mockResolvedValue({
    isValid: true,
    errors: [],
    warnings,
    verificationMethod: 'hosted',
    expirationStatus: 'valid',
    revocationStatus: 'valid',
    structureValidation: {
      isValid: true,
      errors: [],
      warnings: [],
    },
    contentValidation: {
      isValid: true,
      errors: [],
      warnings,
    },
  });
}

// Helper function to set up a custom verification result
export function setupCustomVerification(result: Partial<VerificationResult>) {
  const defaultResult = {
    isValid: true,
    errors: [],
    warnings: [],
    verificationMethod: 'hosted',
    expirationStatus: 'valid',
    revocationStatus: 'valid',
    structureValidation: {
      isValid: true,
      errors: [],
      warnings: [],
    },
    contentValidation: {
      isValid: true,
      errors: [],
      warnings: [],
    },
  };

  BadgeVerificationService.verifyBadge.mockResolvedValue({
    ...defaultResult,
    ...result,
  });
}
