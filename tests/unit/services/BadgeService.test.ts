import { describe, it, expect, vi } from 'vitest';
import { BadgeService } from '@services/BadgeService';
import type { OB2, OB3, BadgeDisplayData } from '@/types';
import { createIRI, createDateTime } from '@utils/type-helpers';
import { isOB2Assertion, isOB3VerifiableCredential } from '@utils/type-helpers';

describe('BadgeService', () => {
  describe('isOB2Assertion', () => {
    it('should return true for valid OB2 Assertion', () => {
      const ob2Assertion = {
        type: 'Assertion',
        id: 'http://example.org/badge1',
        recipient: {
          identity: 'test@example.org',
          type: 'email',
          hashed: false,
        },
        badge: {
          type: 'BadgeClass',
          id: 'http://example.org/badgeclass1',
          name: 'Test Badge',
          description: 'A test badge',
          image: 'http://example.org/badge.png',
          issuer: {
            type: 'Profile',
            id: 'http://example.org/issuer',
            name: 'Test Issuer',
          },
        },
        issuedOn: '2023-01-01T00:00:00Z',
        verification: {
          type: 'hosted',
        },
      } as OB2.Assertion;

      expect(isOB2Assertion(ob2Assertion)).toBe(true);
    });

    it('should return false for non-OB2 objects', () => {
      expect(isOB2Assertion(null)).toBe(false);
      expect(isOB2Assertion({})).toBe(false);
      expect(isOB2Assertion({ type: 'NotAssertion' })).toBe(false);
    });
  });

  describe('isOB3VerifiableCredential', () => {
    it('should return true for valid OB3 VerifiableCredential', () => {
      const ob3VC = {
        '@context': ['https://www.w3.org/2018/credentials/v1'],
        type: ['VerifiableCredential', 'OpenBadgeCredential'],
        id: 'http://example.org/credentials/123',
        issuer: {
          id: 'http://example.org/issuers/1',
          name: 'Test Issuer',
        },
        issuanceDate: '2023-01-01T00:00:00Z',
        credentialSubject: {
          id: 'did:example:123',
          achievement: {
            id: 'http://example.org/achievements/1',
            name: 'Test Achievement',
            description: 'A test achievement',
            image: 'http://example.org/badge.png',
          },
        },
      } as OB3.VerifiableCredential;

      expect(isOB3VerifiableCredential(ob3VC)).toBe(true);
    });

    it('should return false for non-OB3 objects', () => {
      expect(isOB3VerifiableCredential(null)).toBe(false);
      expect(isOB3VerifiableCredential({})).toBe(false);
      expect(isOB3VerifiableCredential({ type: ['NotVerifiableCredential'] })).toBe(false);
    });
  });

  describe('createBadgeClassTemplate', () => {
    it('should create a valid BadgeClass template', () => {
      const template = BadgeService.createBadgeClassTemplate();

      expect(template).toHaveProperty('@context', 'https://w3id.org/openbadges/v2');
      expect(template).toHaveProperty('type', 'BadgeClass');
      expect(template).toHaveProperty('name', '');
      expect(template).toHaveProperty('description', '');
      expect(template).toHaveProperty('image');
      expect(template).toHaveProperty('criteria');
      expect(template).toHaveProperty('issuer');
      expect(template.issuer).toHaveProperty('name', '');
    });
  });

  describe('createAssertionTemplate', () => {
    it('should create a valid Assertion template', () => {
      const badgeClass = BadgeService.createBadgeClassTemplate();
      badgeClass.name = 'Test Badge';

      const template = BadgeService.createAssertionTemplate(badgeClass, 'test@example.org');

      expect(template).toHaveProperty('@context', 'https://w3id.org/openbadges/v2');
      expect(template).toHaveProperty('type', 'Assertion');
      expect(template).toHaveProperty('recipient');
      expect(template.recipient).toHaveProperty('identity', 'test@example.org');
      expect(template).toHaveProperty('badge', badgeClass);
      expect(template).toHaveProperty('issuedOn');
      expect(template).toHaveProperty('verification');
      expect(template.verification).toHaveProperty('type', 'hosted');
    });
  });

  describe('validateBadgeClass', () => {
    it('should return no errors for valid BadgeClass', () => {
      const badgeClass: OB2.BadgeClass = {
        '@context': 'https://w3id.org/openbadges/v2',
        id: createIRI('http://example.org/badgeclass1'),
        type: 'BadgeClass',
        name: 'Test Badge',
        description: 'A test badge',
        image: createIRI('http://example.org/badge.png'),
        criteria: { narrative: 'Test criteria' },
        issuer: {
          id: createIRI('http://example.org/issuer'),
          type: 'Profile',
          name: 'Test Issuer',
        },
      };

      const errors = BadgeService.validateBadgeClass(badgeClass);
      expect(errors).toHaveLength(0);
    });

    it('should return errors for invalid BadgeClass', () => {
      const badgeClass = {
        '@context': 'https://w3id.org/openbadges/v2',
        id: 'http://example.org/badgeclass1',
        type: 'BadgeClass',
        // Missing name
        description: 'A test badge',
        // Missing image
        criteria: { narrative: 'Test criteria' },
        // Missing issuer
      } as OB2.BadgeClass;

      const errors = BadgeService.validateBadgeClass(badgeClass);
      expect(errors.length).toBeGreaterThan(0);
      expect(errors).toContain('Badge name is required');
      expect(errors).toContain('Badge image is required');
      expect(errors).toContain('Issuer is required');
    });
  });

  describe('normalizeBadge', () => {
    it('should normalize an OB2 Assertion', () => {
      const ob2Assertion = {
        '@context': 'https://w3id.org/openbadges/v2',
        type: 'Assertion',
        id: createIRI('http://example.org/badge1'),
        recipient: {
          identity: 'test@example.org',
          type: 'email',
          hashed: false,
        },
        badge: {
          type: 'BadgeClass',
          id: createIRI('http://example.org/badgeclass1'),
          name: 'Test Badge',
          description: 'A test badge',
          image: createIRI('http://example.org/badge.png'),
          criteria: {
            narrative: 'Test criteria'
          },
          issuer: {
            type: 'Profile',
            id: createIRI('http://example.org/issuer'),
            name: 'Test Issuer',
            url: createIRI('http://example.org'),
          },
        },
        issuedOn: createDateTime('2023-01-01T00:00:00Z'),
        expirationDate: createDateTime('2024-01-01T00:00:00Z'),
        verification: {
          type: 'hosted',
        },
      } as OB2.Assertion;

      const normalized = BadgeService.normalizeBadge(ob2Assertion);

      expect(normalized).toHaveProperty('id', 'http://example.org/badge1');
      expect(normalized).toHaveProperty('name', 'Test Badge');
      expect(normalized).toHaveProperty('description', 'A test badge');
      expect(normalized).toHaveProperty('image', 'http://example.org/badge.png');
      expect(normalized).toHaveProperty('issuer');
      expect(normalized.issuer).toHaveProperty('name', 'Test Issuer');
      expect(normalized.issuer).toHaveProperty('url', 'http://example.org');
      expect(normalized).toHaveProperty('issuedOn', '2023-01-01T00:00:00Z');
      expect(normalized).toHaveProperty('expires', '2024-01-01T00:00:00Z');
    });

    it('should normalize an OB3 VerifiableCredential', () => {
      const ob3VC = {
        '@context': ['https://www.w3.org/2018/credentials/v1'],
        type: ['VerifiableCredential', 'OpenBadgeCredential'],
        id: 'http://example.org/credentials/123',
        issuer: {
          id: 'http://example.org/issuers/1',
          name: 'Test Issuer',
          url: 'http://example.org',
        },
        issuanceDate: '2023-01-01T00:00:00Z',
        expirationDate: '2024-01-01T00:00:00Z',
        credentialSubject: {
          id: 'did:example:123',
          achievement: {
            id: 'http://example.org/achievements/1',
            name: 'Test Achievement',
            description: 'A test achievement',
            image: 'http://example.org/badge.png',
          },
        },
      } as OB3.VerifiableCredential;

      const normalized = BadgeService.normalizeBadge(ob3VC);

      expect(normalized).toHaveProperty('id', 'http://example.org/credentials/123');
      expect(normalized).toHaveProperty('name', 'Test Achievement');
      expect(normalized).toHaveProperty('description', 'A test achievement');
      expect(normalized).toHaveProperty('image', 'http://example.org/badge.png');
      expect(normalized).toHaveProperty('issuer');
      expect(normalized.issuer).toHaveProperty('name', 'Test Issuer');
      expect(normalized.issuer).toHaveProperty('url', 'http://example.org');
      expect(normalized).toHaveProperty('issuedOn', '2023-01-01T00:00:00Z');
      expect(normalized).toHaveProperty('expires', '2024-01-01T00:00:00Z');
    });

    it('should normalize BadgeDisplayData correctly', () => {
      const badgeData: BadgeDisplayData = {
        id: 'preview-badge',
        name: 'Preview Badge',
        description: 'This is a preview badge',
        image: 'https://example.com/preview.png',
        issuer: {
          name: 'Preview Issuer',
          url: 'https://example.com',
        },
        issuedDate: '2023-06-01T00:00:00Z',
        expiryDate: '2024-06-01T00:00:00Z',
      };

      const normalized = BadgeService.normalizeBadge(badgeData);

      expect(normalized).toHaveProperty('id', 'preview-badge');
      expect(normalized).toHaveProperty('name', 'Preview Badge');
      expect(normalized).toHaveProperty('description', 'This is a preview badge');
      expect(normalized).toHaveProperty('image', 'https://example.com/preview.png');
      expect(normalized).toHaveProperty('issuer');
      expect(normalized.issuer).toHaveProperty('name', 'Preview Issuer');
      expect(normalized.issuer).toHaveProperty('url', 'https://example.com');
      expect(normalized).toHaveProperty('issuedOn', '2023-06-01T00:00:00Z');
      expect(normalized).toHaveProperty('expires', '2024-06-01T00:00:00Z');
    });

    it('should handle minimal BadgeDisplayData', () => {
      // Freeze time to make issuedOn deterministic
      const fixedNow = new Date('2024-02-03T04:05:06Z');
      vi.useFakeTimers();
      vi.setSystemTime(fixedNow);
      
      const minimalData: BadgeDisplayData = {
        name: 'Minimal Badge',
      };

      const normalized = BadgeService.normalizeBadge(minimalData);

      expect(normalized).toHaveProperty('id', 'badge-preview');
      expect(normalized).toHaveProperty('name', 'Minimal Badge');
      expect(normalized).toHaveProperty('description', '');
      expect(normalized).toHaveProperty('image', '');
      expect(normalized).toHaveProperty('issuer');
      expect(normalized.issuer).toHaveProperty('name', 'Unknown Issuer');
      expect(normalized).toHaveProperty('issuedOn', fixedNow.toISOString());
      
      vi.useRealTimers();
    });

    it('should normalize OB2 BadgeClass correctly', () => {
      // Freeze time to make issuedOn deterministic 
      const fixedNow = new Date('2024-02-03T04:05:06Z');
      vi.useFakeTimers();
      vi.setSystemTime(fixedNow);
      
      const badgeClass: OB2.BadgeClass = {
        '@context': 'https://w3id.org/openbadges/v2',
        type: 'BadgeClass',
        id: createIRI('http://example.org/badgeclass1'),
        name: 'Test Badge Class',
        description: 'A test badge class',
        image: createIRI('http://example.org/badge.png'),
        criteria: {
          narrative: 'Test criteria',
        },
        issuer: {
          type: 'Profile',
          id: createIRI('http://example.org/issuer'),
          name: 'Test Issuer',
          url: createIRI('http://example.org'),
        },
      };

      const normalized = BadgeService.normalizeBadge(badgeClass);

      expect(normalized).toHaveProperty('id', 'http://example.org/badgeclass1');
      expect(normalized).toHaveProperty('name', 'Test Badge Class');
      expect(normalized).toHaveProperty('description', 'A test badge class');
      expect(normalized).toHaveProperty('image', 'http://example.org/badge.png');
      expect(normalized).toHaveProperty('issuer');
      expect(normalized.issuer).toHaveProperty('name', 'Test Issuer');
      expect(normalized.issuer).toHaveProperty('url', 'http://example.org');
      expect(normalized).toHaveProperty('issuedOn', fixedNow.toISOString());
      expect(normalized).toHaveProperty('expires', undefined);
      
      vi.useRealTimers();
    });

    it('should handle unknown badge formats', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const unknownBadge = { foo: 'bar' } as any;

      const normalized = BadgeService.normalizeBadge(unknownBadge);

      expect(normalized).toHaveProperty('id', 'unknown');
      expect(normalized).toHaveProperty('name', 'Unknown Badge');
      expect(normalized).toHaveProperty('description', 'Badge format not recognized');
      expect(normalized).toHaveProperty('issuer');
      expect(normalized.issuer).toHaveProperty('name', 'Unknown Issuer');
    });
  });
});
