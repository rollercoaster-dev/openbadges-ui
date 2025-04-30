// tests/integration/utils.ts
import { mount, VueWrapper } from '@vue/test-utils';
import type { Component } from 'vue';
import type { OB2, OB3 } from 'openbadges-types';

/**
 * Creates a test wrapper with the specified component and props
 * @param component The component to mount
 * @param props The props to pass to the component
 * @param options Additional mount options
 * @returns The mounted wrapper
 */
export function createWrapper<T extends Component>(
  component: T,
  props: Record<string, any> = {},
  options: Record<string, any> = {}
): VueWrapper {
  return mount(component, {
    props,
    ...options
  });
}

/**
 * Creates a mock OB2 badge assertion for testing
 * @param overrides Properties to override in the default mock badge
 * @returns A mock OB2 badge assertion
 */
export function createMockOB2Badge(overrides: Partial<OB2.Assertion> = {}): OB2.Assertion {
  return {
    '@context': 'https://w3id.org/openbadges/v2',
    type: 'Assertion',
    id: 'http://example.org/badge1',
    recipient: {
      identity: 'test@example.org',
      type: 'email',
      hashed: false
    },
    badge: {
      type: 'BadgeClass',
      id: 'http://example.org/badgeclass1',
      name: 'Test Badge',
      description: 'A test badge description',
      image: 'http://example.org/badge.png',
      issuer: {
        type: 'Profile',
        id: 'http://example.org/issuer',
        name: 'Test Issuer'
      }
    },
    issuedOn: '2023-01-01T00:00:00Z',
    verification: {
      type: 'hosted'
    },
    ...overrides
  };
}

/**
 * Creates a mock OB3 verifiable credential for testing
 * @param overrides Properties to override in the default mock credential
 * @returns A mock OB3 verifiable credential
 */
export function createMockOB3Badge(overrides: Partial<OB3.VerifiableCredential> = {}): OB3.VerifiableCredential {
  return {
    '@context': [
      'https://www.w3.org/2018/credentials/v1',
      'https://purl.imsglobal.org/spec/ob/v3p0/context.json'
    ],
    id: 'http://example.org/credentials/3732',
    type: ['VerifiableCredential', 'OpenBadgeCredential'],
    issuer: {
      id: 'http://example.org/issuers/1',
      type: 'Profile',
      name: 'Test Issuer'
    },
    issuanceDate: '2023-01-01T00:00:00Z',
    credentialSubject: {
      id: 'did:example:ebfeb1f712ebc6f1c276e12ec21',
      type: 'AchievementSubject',
      achievement: {
        id: 'http://example.org/achievements/1',
        type: 'Achievement',
        name: 'Test Badge',
        description: 'A test badge description',
        image: {
          id: 'http://example.org/badge.png',
          type: 'Image'
        }
      }
    },
    proof: {
      type: 'Ed25519Signature2020',
      created: '2023-01-01T00:00:00Z',
      verificationMethod: 'http://example.org/issuers/1#keys/1',
      proofPurpose: 'assertionMethod',
      proofValue: 'z58DAdFfa9SkqZMVPxAQpic6FPCsJWa6SpsfDLnfWE3SV8mZ9qqLH81imXXAiLnJwkoXkgZ1xQ24zQ6yVsQFKR29D'
    },
    ...overrides
  };
}

/**
 * Waits for a condition to be true
 * @param condition The condition to wait for
 * @param timeout The maximum time to wait in milliseconds
 * @returns A promise that resolves when the condition is true
 */
export async function waitFor(
  condition: () => boolean | Promise<boolean>,
  timeout = 1000
): Promise<void> {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    if (await condition()) {
      return;
    }
    await new Promise(resolve => setTimeout(resolve, 50));
  }
  throw new Error(`Timeout waiting for condition after ${timeout}ms`);
}
