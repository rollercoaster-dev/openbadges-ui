// tests/integration/composables/useBadgeVerificationService.test.ts

import { vi, describe, it, expect, beforeEach } from 'vitest';
import { nextTick } from 'vue';

// Mock must be defined before importing the module
vi.mock('@/services/BadgeVerificationService', () => {
  return {
    BadgeVerificationService: {
      verifyBadge: vi.fn(),
    },
  };
});

// Now import the mocked module and other modules
import { BadgeVerificationService } from '@/services/BadgeVerificationService';
import { useBadgeVerification } from '@/composables/useBadgeVerification';
import { createMockOB2Badge, createMockOB3Badge } from '../utils';

describe('useBadgeVerification and BadgeVerificationService Integration', () => {
  const mockOB2Badge = createMockOB2Badge();
  const mockOB3Badge = createMockOB3Badge();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should call BadgeVerificationService.verifyBadge when verifyBadge is called', async () => {
    // Mock a successful verification
    BadgeVerificationService.verifyBadge.mockResolvedValueOnce({
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

    // Use the composable
    const { verifyBadge, state } = useBadgeVerification();

    // Call verifyBadge
    const result = await verifyBadge(mockOB2Badge);

    // Check that BadgeVerificationService.verifyBadge was called with the correct badge
    expect(BadgeVerificationService.verifyBadge).toHaveBeenCalledWith(mockOB2Badge);

    // Check that the result is correct
    expect(result.isValid).toBe(true);
    expect(result.errors).toEqual([]);
    expect(result.warnings).toEqual([]);
    expect(result.verificationMethod).toBe('hosted');
    expect(result.expirationStatus).toBe('valid');
    expect(result.revocationStatus).toBe('valid');

    // Check that the state was updated correctly
    expect(state.value.isVerifying).toBe(false);
    expect(state.value.badge).toEqual(mockOB2Badge);
    expect(state.value.result).toEqual(result);
    expect(state.value.lastVerified).toBeInstanceOf(Date);
  });

  it('should update computed properties based on verification result', async () => {
    // Mock a successful verification
    BadgeVerificationService.verifyBadge.mockResolvedValueOnce({
      isValid: true,
      errors: [],
      warnings: ['Test warning'],
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

    // Use the composable
    const {
      verifyBadge,
      isValid,
      errors,
      warnings,
      verificationMethod,
      expirationStatus,
      revocationStatus,
      hasBeenVerified,
    } = useBadgeVerification();

    // Initially, computed properties should have default values
    expect(isValid.value).toBe(false);
    expect(errors.value).toEqual([]);
    expect(warnings.value).toEqual([]);
    expect(verificationMethod.value).toBeUndefined();
    expect(expirationStatus.value).toBeUndefined();
    expect(revocationStatus.value).toBeUndefined();
    expect(hasBeenVerified.value).toBe(false);

    // Call verifyBadge
    await verifyBadge(mockOB2Badge);

    // Wait for Vue to update computed properties
    await nextTick();

    // Check that computed properties were updated correctly
    expect(isValid.value).toBe(true);
    expect(errors.value).toEqual([]);
    expect(warnings.value).toEqual(['Test warning']);
    expect(verificationMethod.value).toBe('hosted');
    expect(expirationStatus.value).toBe('valid');
    expect(revocationStatus.value).toBe('valid');
    expect(hasBeenVerified.value).toBe(true);
  });

  it('should handle verification failure correctly', async () => {
    // Mock a failed verification
    BadgeVerificationService.verifyBadge.mockResolvedValueOnce({
      isValid: false,
      errors: ['Invalid badge format'],
      warnings: [],
      verificationMethod: 'hosted',
      expirationStatus: 'expired',
      revocationStatus: 'revoked',
      structureValidation: {
        isValid: false,
        errors: ['Invalid badge format'],
        warnings: [],
      },
      contentValidation: {
        isValid: true,
        errors: [],
        warnings: [],
      },
    });

    // Use the composable
    const { verifyBadge, isValid, errors, warnings, expirationStatus, revocationStatus } =
      useBadgeVerification();

    // Call verifyBadge
    const result = await verifyBadge(mockOB2Badge);

    // Wait for Vue to update computed properties
    await nextTick();

    // Check that computed properties were updated correctly
    expect(isValid.value).toBe(false);
    expect(errors.value).toEqual(['Invalid badge format']);
    expect(warnings.value).toEqual([]);
    expect(expirationStatus.value).toBe('expired');
    expect(revocationStatus.value).toBe('revoked');

    // Check that the result is correct
    expect(result.isValid).toBe(false);
    expect(result.errors).toEqual(['Invalid badge format']);
  });

  it('should handle service exceptions correctly', async () => {
    // Mock an exception in the service
    BadgeVerificationService.verifyBadge.mockRejectedValueOnce(new Error('Network error'));

    // Use the composable
    const { verifyBadge, isValid, errors, state } = useBadgeVerification();

    // Call verifyBadge
    const result = await verifyBadge(mockOB2Badge);

    // Wait for Vue to update computed properties
    await nextTick();

    // Check that the error was handled correctly
    expect(isValid.value).toBe(false);
    expect(errors.value).toEqual(['Verification failed: Network error']);
    expect(state.value.isVerifying).toBe(false);

    // Check that the result is correct
    expect(result.isValid).toBe(false);
    expect(result.errors).toEqual(['Verification failed: Network error']);
  });

  it('should verify OB3 badges correctly', async () => {
    // Mock a successful verification for OB3
    BadgeVerificationService.verifyBadge.mockResolvedValueOnce({
      isValid: true,
      errors: [],
      warnings: ['Full cryptographic verification of OB3 credentials is not yet implemented'],
      verificationMethod: 'signed',
      expirationStatus: 'valid',
      revocationStatus: 'unknown',
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

    // Use the composable
    const { verifyBadge, isValid, warnings, verificationMethod } = useBadgeVerification();

    // Call verifyBadge with an OB3 badge
    await verifyBadge(mockOB3Badge);

    // Wait for Vue to update computed properties
    await nextTick();

    // Check that BadgeVerificationService.verifyBadge was called with the correct badge
    expect(BadgeVerificationService.verifyBadge).toHaveBeenCalledWith(mockOB3Badge);

    // Check that computed properties were updated correctly
    expect(isValid.value).toBe(true);
    expect(warnings.value).toContain(
      'Full cryptographic verification of OB3 credentials is not yet implemented'
    );
    expect(verificationMethod.value).toBe('signed');
  });

  it('should clear verification state correctly', async () => {
    // Mock a successful verification
    BadgeVerificationService.verifyBadge.mockResolvedValueOnce({
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

    // Use the composable
    const { verifyBadge, clearVerification, isValid, hasBeenVerified, state } =
      useBadgeVerification();

    // Call verifyBadge
    await verifyBadge(mockOB2Badge);

    // Wait for Vue to update computed properties
    await nextTick();

    // Check that verification was performed
    expect(isValid.value).toBe(true);
    expect(hasBeenVerified.value).toBe(true);
    expect(state.value.badge).toEqual(mockOB2Badge);
    expect(state.value.result).not.toBeNull();
    expect(state.value.lastVerified).not.toBeNull();

    // Clear verification state
    clearVerification();

    // Wait for Vue to update computed properties
    await nextTick();

    // Check that state was cleared
    expect(isValid.value).toBe(false);
    expect(hasBeenVerified.value).toBe(false);
    expect(state.value.badge).toBeNull();
    expect(state.value.result).toBeNull();
    expect(state.value.lastVerified).toBeNull();
    expect(state.value.isVerifying).toBe(false);
  });

  it('should handle multiple verification calls correctly', async () => {
    // Mock first verification (success)
    BadgeVerificationService.verifyBadge.mockResolvedValueOnce({
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

    // Use the composable
    const { verifyBadge, isValid, state } = useBadgeVerification();

    // First verification
    await verifyBadge(mockOB2Badge);

    // Wait for Vue to update computed properties
    await nextTick();

    // Check first verification result
    expect(isValid.value).toBe(true);
    expect(state.value.badge).toEqual(mockOB2Badge);

    // Mock second verification (failure)
    BadgeVerificationService.verifyBadge.mockResolvedValueOnce({
      isValid: false,
      errors: ['Invalid badge'],
      warnings: [],
      verificationMethod: 'hosted',
      expirationStatus: 'expired',
      revocationStatus: 'valid',
      structureValidation: {
        isValid: false,
        errors: ['Invalid badge'],
        warnings: [],
      },
      contentValidation: {
        isValid: true,
        errors: [],
        warnings: [],
      },
    });

    // Second verification with a different badge
    await verifyBadge(mockOB3Badge);

    // Wait for Vue to update computed properties
    await nextTick();

    // Check second verification result
    expect(isValid.value).toBe(false);
    expect(state.value.badge).toEqual(mockOB3Badge);

    // Check that BadgeVerificationService.verifyBadge was called twice with different badges
    expect(BadgeVerificationService.verifyBadge).toHaveBeenCalledTimes(2);
    expect(BadgeVerificationService.verifyBadge).toHaveBeenNthCalledWith(1, mockOB2Badge);
    expect(BadgeVerificationService.verifyBadge).toHaveBeenNthCalledWith(2, mockOB3Badge);
  });
});
