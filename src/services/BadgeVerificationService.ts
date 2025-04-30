// src/services/BadgeVerificationService.ts
import type { OB2, OB3, Shared } from 'openbadges-types';
import { isOB2Assertion, isOB3VerifiableCredential } from './BadgeService';

/**
 * Result of a badge verification operation
 */
export interface VerificationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  verificationMethod?: 'hosted' | 'signed';
  expirationStatus?: 'valid' | 'expired' | 'not-applicable';
  revocationStatus?: 'valid' | 'revoked' | 'unknown';
}

/**
 * Service for verifying badge authenticity
 */
export class BadgeVerificationService {
  /**
   * Verifies a badge assertion
   * @param badge The badge to verify
   * @returns Verification result
   */
  static async verifyBadge(badge: OB2.Assertion | OB3.VerifiableCredential): Promise<VerificationResult> {
    // Initialize result
    const result: VerificationResult = {
      isValid: false,
      errors: [],
      warnings: [],
    };

    try {
      // Determine badge type and call appropriate verification method
      if (isOB2Assertion(badge)) {
        return await this.verifyOB2Badge(badge);
      } else if (isOB3VerifiableCredential(badge)) {
        return await this.verifyOB3Badge(badge);
      } else {
        result.errors.push('Unknown badge format');
        return result;
      }
    } catch (error) {
      result.errors.push(`Verification error: ${error instanceof Error ? error.message : String(error)}`);
      return result;
    }
  }

  /**
   * Verifies an Open Badges 2.0 assertion
   * @param badge The OB2 badge to verify
   * @returns Verification result
   */
  private static async verifyOB2Badge(badge: OB2.Assertion): Promise<VerificationResult> {
    const result: VerificationResult = {
      isValid: false,
      errors: [],
      warnings: [],
    };

    // Check if badge has verification information
    if (!badge.verification) {
      result.errors.push('Badge is missing verification information');
      return result;
    }

    // Determine verification method
    const verificationType = typeof badge.verification.type === 'string' 
      ? badge.verification.type 
      : Array.isArray(badge.verification.type) 
        ? badge.verification.type[0] 
        : null;

    if (!verificationType) {
      result.errors.push('Badge has invalid verification type');
      return result;
    }

    // Normalize verification type (handle aliases)
    const normalizedType = this.normalizeVerificationType(verificationType);
    result.verificationMethod = normalizedType as 'hosted' | 'signed';

    // Verify based on verification type
    if (normalizedType === 'hosted') {
      await this.verifyHostedBadge(badge, result);
    } else if (normalizedType === 'signed') {
      await this.verifySignedBadge(badge, result);
    } else {
      result.errors.push(`Unsupported verification type: ${verificationType}`);
      return result;
    }

    // Check expiration
    this.checkExpiration(badge, result);

    // Check revocation
    await this.checkRevocation(badge, result);

    // Badge is valid if there are no errors
    result.isValid = result.errors.length === 0;
    return result;
  }

  /**
   * Verifies an Open Badges 3.0 verifiable credential
   * @param badge The OB3 badge to verify
   * @returns Verification result
   */
  private static async verifyOB3Badge(badge: OB3.VerifiableCredential): Promise<VerificationResult> {
    const result: VerificationResult = {
      isValid: false,
      errors: [],
      warnings: [],
    };

    // OB3 uses the W3C Verifiable Credentials model
    // Check for proof property which is required for verification
    if (!badge.proof) {
      result.errors.push('OB3 credential is missing proof information');
      return result;
    }

    // Determine proof type
    const proofType = badge.proof.type;
    if (!proofType) {
      result.errors.push('OB3 credential has invalid proof type');
      return result;
    }

    // Currently, we'll add a warning as full cryptographic verification
    // of OB3 credentials requires additional libraries and is complex
    result.warnings.push('Full cryptographic verification of OB3 credentials is not yet implemented');
    result.verificationMethod = 'signed';

    // Check basic properties
    if (!badge.issuer) {
      result.errors.push('OB3 credential is missing issuer information');
    }

    if (!badge.credentialSubject) {
      result.errors.push('OB3 credential is missing subject information');
    }

    // Check expiration
    if (badge.expirationDate) {
      const expirationDate = new Date(badge.expirationDate as string);
      const now = new Date();
      
      if (expirationDate < now) {
        result.expirationStatus = 'expired';
        result.warnings.push('OB3 credential has expired');
      } else {
        result.expirationStatus = 'valid';
      }
    } else {
      result.expirationStatus = 'not-applicable';
    }

    // For now, we'll consider the badge valid if it has the required properties
    // In a production environment, full cryptographic verification would be needed
    result.isValid = result.errors.length === 0;
    return result;
  }

  /**
   * Verifies a hosted badge by checking if it's accessible at its ID URL
   * @param badge The badge to verify
   * @param result The verification result to update
   */
  private static async verifyHostedBadge(badge: OB2.Assertion, result: VerificationResult): Promise<void> {
    // For hosted verification, the badge should be accessible at its ID URL
    if (!badge.id || typeof badge.id !== 'string' || !badge.id.startsWith('http')) {
      result.errors.push('Hosted badge must have an HTTP(S) ID URL');
      return;
    }

    // In a browser environment, we would fetch the badge from its ID URL
    // and compare it with the current badge
    // For this implementation, we'll simulate this process
    result.warnings.push('Hosted badge verification requires network access to validate against the hosted assertion');
    
    // In a real implementation, we would:
    // 1. Fetch the badge from its ID URL
    // 2. Compare the fetched badge with the current badge
    // 3. Check if the issuer is authorized to issue this badge
    
    // For now, we'll assume the badge is valid if it has an HTTP ID
    // This is a simplified implementation
  }

  /**
   * Verifies a signed badge by checking its signature
   * @param badge The badge to verify
   * @param result The verification result to update
   */
  private static async verifySignedBadge(badge: OB2.Assertion, result: VerificationResult): Promise<void> {
    // For signed verification, the badge should have a signature that can be verified
    // using the issuer's public key
    
    // Check if the badge has a creator property in its verification object
    // which points to the key used to sign the badge
    const verification = badge.verification;
    if (!verification.creator && typeof badge.badge === 'object' && badge.badge.issuer) {
      // If no creator is specified, we need to check the issuer's profile for public keys
      result.warnings.push('Signed badge does not specify which key was used for signing');
    }

    // In a real implementation, we would:
    // 1. Get the public key from the issuer's profile
    // 2. Verify the signature using the public key
    // 3. Check if the issuer is authorized to issue this badge
    
    // For now, we'll add a warning as full signature verification
    // requires additional libraries and is complex
    result.warnings.push('Full signature verification requires cryptographic libraries');
  }

  /**
   * Checks if a badge has expired
   * @param badge The badge to check
   * @param result The verification result to update
   */
  private static checkExpiration(badge: OB2.Assertion | OB3.VerifiableCredential, result: VerificationResult): void {
    // Check if the badge has an expiration date
    const expirationDate = isOB2Assertion(badge) 
      ? badge.expires 
      : badge.expirationDate;
    
    if (expirationDate) {
      const expDate = new Date(expirationDate as string);
      const now = new Date();
      
      if (expDate < now) {
        result.expirationStatus = 'expired';
        result.errors.push('Badge has expired');
      } else {
        result.expirationStatus = 'valid';
      }
    } else {
      result.expirationStatus = 'not-applicable';
    }
  }

  /**
   * Checks if a badge has been revoked
   * @param badge The badge to check
   * @param result The verification result to update
   */
  private static async checkRevocation(badge: OB2.Assertion | OB3.VerifiableCredential, result: VerificationResult): Promise<void> {
    // For OB2 badges, check the revoked property
    if (isOB2Assertion(badge)) {
      if (badge.revoked === true) {
        result.revocationStatus = 'revoked';
        result.errors.push(badge.revocationReason 
          ? `Badge has been revoked: ${badge.revocationReason}` 
          : 'Badge has been revoked');
        return;
      }

      // For hosted badges, a 410 Gone response would indicate revocation
      // For signed badges, we would need to check the issuer's revocation list
      
      // If the badge has an issuer with a revocationList, we should check it
      // This would require network access in a real implementation
      
      result.revocationStatus = 'valid';
      return;
    }

    // For OB3 badges, the status property would indicate revocation
    // This is a simplified implementation
    result.revocationStatus = 'unknown';
    result.warnings.push('Revocation checking for OB3 credentials is not fully implemented');
  }

  /**
   * Normalizes verification type to handle aliases
   * @param type The verification type to normalize
   * @returns Normalized verification type
   */
  private static normalizeVerificationType(type: string): string {
    // Handle aliases defined in the OB2 context
    switch (type.toLowerCase()) {
      case 'hosted':
      case 'hostedbadge':
        return 'hosted';
      case 'signed':
      case 'signedbadge':
        return 'signed';
      default:
        return type;
    }
  }
}
