# How to Fix Badge Verification Service Test Errors

The BadgeVerificationService tests are showing errors related to mocking the service. Since the service exports a static class with methods, we need to properly mock it for testing.

## Fix for Mock Method Errors

For test files that show errors like:

```
Property 'mockResolvedValueOnce' does not exist on type '(badge: Assertion | VerifiableCredential) => Promise<VerificationResult>'.
```

### Solution 1: Use Manual Mock with Vi

Create a manual mock for the BadgeVerificationService:

```typescript
// In your test file, before the tests
import { BadgeVerificationService, VerificationResult } from '@/services/BadgeVerificationService';
import { vi } from 'vitest';

// Create a mock for the static method
const originalVerifyBadge = BadgeVerificationService.verifyBadge;
BadgeVerificationService.verifyBadge = vi.fn() as any;

// After your tests, restore the original
afterAll(() => {
  BadgeVerificationService.verifyBadge = originalVerifyBadge;
});
```

### Solution 2: Use the Test Helper

An improved approach is to use the test helper we've created:

```typescript
import { mockBadgeVerificationService } from '@/utils/__tests__/test-helpers';
import { BadgeVerificationService } from '@/services/BadgeVerificationService';

describe('Badge Verification Test', () => {
  const { mockVerifyBadge, mockVerificationResult } = mockBadgeVerificationService();

  beforeEach(() => {
    // Replace the static method with our mock
    BadgeVerificationService.verifyBadge = mockVerifyBadge;
  });

  it('verifies a badge', async () => {
    // Set up the mock to return a specific value
    mockVerificationResult({
      isValid: true,
      badgeVersion: 'OB2',
    });

    // Your test code here
    // ...
  });

  afterAll(() => {
    // Clean up the mock
    vi.restoreAllMocks();
  });
});
```

## Fix for Branded Type Errors in Tests

For errors related to using string values where branded types (IRI, DateTime) are expected:

```
Type 'string' is not assignable to type 'IRI'.
Type 'string' is not assignable to type 'DateTime'.
```

### Solution: Use the Test Helper Functions

```typescript
import { createTestOB2Assertion, createTestOB3Credential } from '@/utils/__tests__/test-helpers';

describe('BadgeDisplay', () => {
  it('renders OB2 badge correctly', () => {
    const badge = createTestOB2Assertion({
      // Only specify the properties you want to override
      id: createIRI('http://example.org/custom-badge'),
    });

    // Use the properly typed badge in your test
    const wrapper = mount(BadgeDisplay, {
      props: {
        badge,
      },
    });

    // Test assertions...
  });
});
```

## Implementation Steps

1. Add the test-helpers.ts file to your project
2. Update the failing tests to use the helper functions
3. Run the tests to verify the fixes

The type errors should be resolved once these changes are implemented.
