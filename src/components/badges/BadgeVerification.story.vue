<script setup lang="ts">
import { ref } from 'vue'
import BadgeVerification from './BadgeVerification.vue'
import { mockAssertions, mockOB3Credential } from '../../services/mockData'

/**
 * # BadgeVerification
 *
 * The `BadgeVerification` component displays verification status and details for a badge,
 * including verification method, expiration status, and revocation status. It supports both
 * Open Badges 2.0 (OB2) and Open Badges 3.0 (OB3) formats.
 *
 * ## Features
 *
 * - Verifies badge authenticity using hosted or signed verification methods
 * - Checks badge expiration status
 * - Checks badge revocation status
 * - Displays verification errors and warnings
 * - Supports both OB2 and OB3 badge formats
 *
 * ## Props
 *
 * | Name | Type | Default | Description |
 * |------|------|---------|-------------|
 * | `badge` | `OB2.Assertion \| OB3.VerifiableCredential` | Required | The badge to verify |
 * | `showStatus` | `boolean` | `true` | Whether to show verification status |
 * | `showDetails` | `boolean` | `true` | Whether to show verification details |
 * | `showLastVerified` | `boolean` | `true` | Whether to show when the badge was last verified |
 * | `autoVerify` | `boolean` | `false` | Whether to automatically verify the badge when mounted |
 *
 * ## Events
 *
 * | Name | Payload | Description |
 * |------|---------|-------------|
 * | `verified` | `boolean` | Emitted when verification is complete, with the verification result |
 *
 * ## Accessibility
 *
 * - The verification button is a proper button element with clear text
 * - The loading spinner has a `role="status"` attribute
 * - The loading spinner includes visually hidden text for screen readers
 * - Status changes are clearly indicated through both text and visual cues
 * - Color is not the only indicator of status (icons are also used)
 * - The component supports different themes, including high contrast
 */

const state = ref({
  badge: mockAssertions[0],
  showStatus: true,
  showDetails: true,
  showLastVerified: true,
  autoVerify: false
})

// Create a badge with expiration
const expiredBadge = {
  ...mockAssertions[0],
  expires: '2020-01-01T00:00:00Z' // Past date
}

// Create a badge with revocation
const revokedBadge = {
  ...mockAssertions[0],
  revoked: true,
  revocationReason: 'Badge was issued in error'
}

function onVerified(isValid) {
  console.log('Badge verified:', isValid)
}
</script>

<template>
  <Story title="Components/Badges/BadgeVerification" :layout="{ type: 'single', iframe: true }">
    <template #docs>
      <div class="histoire-docs">
        <h1>BadgeVerification</h1>

        <p>The <code>BadgeVerification</code> component displays verification status and details for a badge, including verification method, expiration status, and revocation status.</p>

        <h2>When To Use</h2>
        <ul>
          <li>When you need to verify the authenticity of a badge</li>
          <li>When you want to display verification status to users</li>
          <li>When you need to check if a badge has expired or been revoked</li>
        </ul>

        <h2>Examples</h2>
        <p>Use the controls in the right panel to customize the component behavior.</p>

        <h3>Basic Usage</h3>
        <pre><code>&lt;BadgeVerification :badge="myBadge" @verified="handleVerified" /&gt;</code></pre>

        <h3>Auto-Verify</h3>
        <pre><code>&lt;BadgeVerification :badge="myBadge" :auto-verify="true" @verified="handleVerified" /&gt;</code></pre>

        <h3>Custom Display Options</h3>
        <pre><code>&lt;BadgeVerification
  :badge="myBadge"
  :show-status="true"
  :show-details="true"
  :show-last-verified="false"
  @verified="handleVerified"
/&gt;</code></pre>

        <h2>Props</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>badge</code></td>
              <td><code>OB2.Assertion | OB3.VerifiableCredential</code></td>
              <td>Required</td>
              <td>The badge to verify</td>
            </tr>
            <tr>
              <td><code>showStatus</code></td>
              <td><code>boolean</code></td>
              <td><code>true</code></td>
              <td>Whether to show verification status</td>
            </tr>
            <tr>
              <td><code>showDetails</code></td>
              <td><code>boolean</code></td>
              <td><code>true</code></td>
              <td>Whether to show verification details</td>
            </tr>
            <tr>
              <td><code>showLastVerified</code></td>
              <td><code>boolean</code></td>
              <td><code>true</code></td>
              <td>Whether to show when the badge was last verified</td>
            </tr>
            <tr>
              <td><code>autoVerify</code></td>
              <td><code>boolean</code></td>
              <td><code>false</code></td>
              <td>Whether to automatically verify the badge when mounted</td>
            </tr>
          </tbody>
        </table>

        <h2>Events</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Payload</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>verified</code></td>
              <td><code>boolean</code></td>
              <td>Emitted when verification is complete, with the verification result</td>
            </tr>
          </tbody>
        </table>

        <h2>Verification Process</h2>
        <p>The verification process includes:</p>
        <ol>
          <li>Checking if the badge has valid verification information</li>
          <li>Determining the verification method (hosted or signed)</li>
          <li>Verifying the badge based on its verification method</li>
          <li>Checking expiration status</li>
          <li>Checking revocation status</li>
          <li>Reporting any errors or warnings</li>
        </ol>

        <h2>Accessibility</h2>
        <p>The component includes several accessibility features:</p>
        <ul>
          <li>The verification button is a proper button element with clear text</li>
          <li>The loading spinner has a <code>role="status"</code> attribute</li>
          <li>The loading spinner includes visually hidden text for screen readers</li>
          <li>Status changes are clearly indicated through both text and visual cues</li>
          <li>Color is not the only indicator of status (icons are also used)</li>
          <li>The component supports different themes, including high contrast</li>
        </ul>
      </div>
    </template>
    <template #controls>
      <HstCheckbox v-model="state.showStatus" title="Show Status" />
      <HstCheckbox v-model="state.showDetails" title="Show Details" />
      <HstCheckbox v-model="state.showLastVerified" title="Show Last Verified" />
      <HstCheckbox v-model="state.autoVerify" title="Auto Verify" />
    </template>

    <Variant title="Default">
      <BadgeVerification
        :badge="state.badge"
        :show-status="state.showStatus"
        :show-details="state.showDetails"
        :show-last-verified="state.showLastVerified"
        :auto-verify="state.autoVerify"
        @verified="onVerified"
      />
    </Variant>

    <Variant title="Expired Badge">
      <BadgeVerification
        :badge="expiredBadge"
        :show-status="state.showStatus"
        :show-details="state.showDetails"
        :show-last-verified="state.showLastVerified"
        :auto-verify="state.autoVerify"
        @verified="onVerified"
      />
    </Variant>

    <Variant title="Revoked Badge">
      <BadgeVerification
        :badge="revokedBadge"
        :show-status="state.showStatus"
        :show-details="state.showDetails"
        :show-last-verified="state.showLastVerified"
        :auto-verify="state.autoVerify"
        @verified="onVerified"
      />
    </Variant>

    <Variant title="OB3 Badge">
      <BadgeVerification
        :badge="mockOB3Credential"
        :show-status="state.showStatus"
        :show-details="state.showDetails"
        :show-last-verified="state.showLastVerified"
        :auto-verify="state.autoVerify"
        @verified="onVerified"
      />
    </Variant>
  </Story>
</template>
