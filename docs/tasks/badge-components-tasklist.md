# OpenBadges Demo – Badge Components Tasklist

Generated: 2025-08-13
Scope: Badge-related UI gaps identified from the running OpenBadges Demo (http://localhost:7777) using the openbadges-ui library. Excludes issuer/auth/nav unless integral to badge workflows.

## Legend
- Priority: High | Medium | Low
- Routes refer to the Demo app; components live in this repo under src/components/

---

## High Priority – Badge Management Components (for /badges/issued)

### [ ] AssertionsTable.vue (src/components/badges/AssertionsTable.vue)
- Purpose: Paginated, filterable table/list of badge assertions (recipient, badge name, issuer, status, issue/expiry). Supports selection for batch ops.
- Routes/Parents: /badges/issued (within IssuedBadgesView)
- Key Props/Functionality:
  - props: assertions, loading, pageSize, currentPage, filters { recipient, badgeClass, dateRange, status }, selectable, modelValue (selectedIds via v-model)
  - emits: page-change, update:modelValue (selection-change), assertion-click
  - features: normalization via BadgeService, status chip, sort, empty state, keyboard nav, row selection
- Dependencies: BadgeService.normalizeBadge, BadgeVerification (for status chip)
- Subtasks:
  - [ ] Scaffold component and types (OB2/OB3 Assertion)
  - [ ] Render table/list with accessible semantics and keyboard support
  - [ ] Implement selection (checkbox, select-all) and v-model binding
  - [ ] Add pagination and sorting hooks
  - [ ] Integrate status chip (verified/pending/invalid)
  - [ ] Loading/empty/error states
  - [ ] Unit tests (rendering, selection, events)
  - [ ] Histoire story (table variants)

### [ ] IssuedBadgesFilters.vue (src/components/badges/IssuedBadgesFilters.vue)
- Purpose: Filter/search controls for assertions list.
- Routes/Parents: /badges/issued (within IssuedBadgesView)
- Key Props/Functionality:
  - props: modelValue (v-model: { search, recipient, badgeClass, dateRange, status }), issuers, badgeClasses, loading
  - emits: update:modelValue, apply, reset
  - features: debounced search, presets, clear-all, accessible form
- Dependencies: (optional) BadgeService types
- Subtasks:
  - [ ] Scaffold component and v-model contract
  - [ ] Inputs: search, selects for recipient/badge/status, date range
  - [ ] Debounce search input; apply/reset buttons
  - [ ] A11y labels, descriptions, focus order
  - [ ] Unit tests; Histoire story

### [ ] BatchOperationsBar.vue (src/components/badges/BatchOperationsBar.vue)
- Purpose: Batch actions for selected assertions (revoke, export, update status).
- Routes/Parents: /badges/issued (within IssuedBadgesView)
- Key Props/Functionality:
  - props: selectedCount, disabled, exporting
  - emits: revoke, export, update-status(status)
  - features: confirm dialogs for revoke, export progress, status menu
- Dependencies: none (parent wires API)
- Subtasks:
  - [ ] Scaffold actions bar with buttons/menus
  - [ ] Confirm modal for destructive actions
  - [ ] Disabled states; live regions for progress
  - [ ] Unit tests; Histoire story

### [ ] AssertionDetailDrawer.vue (src/components/badges/AssertionDetailDrawer.vue)
- Purpose: Side drawer with full details, verification, and raw JSON.
- Routes/Parents: /badges/issued (opened from AssertionsTable)
- Key Props/Functionality:
  - props: assertion, open, loading
  - emits: close, verify
  - features: BadgeDisplay + BadgeVerification; metadata (recipient, evidence, criteria); copy JSON
- Dependencies: BadgeDisplay, BadgeVerification, BadgeService
- Subtasks:
  - [ ] Scaffold drawer with focus trap and ESC/close
  - [ ] Render BadgeDisplay and verification panel
  - [ ] Metadata sections (recipient, evidence, criteria)
  - [ ] Raw JSON toggle with copy-to-clipboard
  - [ ] Unit tests; Histoire story

### [ ] IssuedBadgesView.vue (src/components/badges/IssuedBadgesView.vue)
- Purpose: Orchestrator for /badges/issued combining filters, table, batch bar, and detail drawer.
- Routes/Parents: /badges/issued (route component)
- Key Props/Functionality:
  - state: assertions, selection, filters, pagination
  - actions: fetch, apply filters, batch revoke/export/update, open details, verify
- Dependencies: AssertionsTable, IssuedBadgesFilters, BatchOperationsBar, AssertionDetailDrawer, BadgeService
- Subtasks:
  - [ ] Page state & data fetching skeleton (handle 401/auth errors)
  - [ ] Wire child components and events
  - [ ] Batch action handlers; toast/alerts
  - [ ] Empty/loading/error states
  - [ ] Route integration in demo app (openbadges-system)
  - [ ] Unit/integration tests (mock services); Histoire story (composed)

---

## High Priority – Badge Backpack/Collection Components (for /backpack)

### [ ] BackpackView.vue (src/components/badges/BackpackView.vue)
- Purpose: Orchestrates stats, filters, toolbar, and BadgeList for user’s backpack; handles data, auth errors, empty states.
- Routes/Parents: /backpack (route component)
- Key Props/Functionality: page-level state; pagination; view toggles
- Dependencies: BackpackStats, BackpackFilters, BackpackToolbar, BadgeList, BadgeService
- Subtasks:
  - [ ] Page state & data fetching (handle 401/auth)
  - [ ] Compose stats/filters/toolbar/BadgeList
  - [ ] Empty/loading/error states
  - [ ] Route integration in demo app
  - [ ] Unit/integration tests; Histoire story

### [ ] BackpackStats.vue (src/components/badges/BackpackStats.vue)
- Purpose: Display totals (total, this month, issuers, verified)
- Routes/Parents: BackpackView
- Key Props/Functionality: props totals { total, month, issuers, verified }, loading
- Dependencies: none
- Subtasks:
  - [ ] Stat cards with icons; accessible
  - [ ] Loading skeletons
  - [ ] Unit tests; Histoire story

### [ ] BackpackFilters.vue (src/components/badges/BackpackFilters.vue)
- Purpose: Search/filter/sort/view controls for backpack
- Routes/Parents: BackpackView
- Key Props/Functionality:
  - props: modelValue (v-model: { search, issuerId, sort, view }), issuers, disabled
  - emits: update:modelValue, apply, reset
- Dependencies: none
- Subtasks:
  - [ ] Inputs for search/selects; debounced search
  - [ ] Apply/reset actions; accessible labels
  - [ ] Unit tests; Histoire story

### [ ] BackpackToolbar.vue (src/components/badges/BackpackToolbar.vue)
- Purpose: Share and Export actions
- Routes/Parents: BackpackView
- Key Props/Functionality: props canShare, canExport, disabled; emits share, export
- Dependencies: none
- Subtasks:
  - [ ] Toolbar buttons with tooltips/labels
  - [ ] Guard rails and progress feedback
  - [ ] Unit tests; Histoire story

---

## Medium Priority – Badge Verification Components

### [ ] BadgeVerifyView.vue (src/components/badges/BadgeVerifyView.vue)
- Purpose: Standalone verification page with input (URL/JSON) and results panel
- Routes/Parents: /badges/verify (route component)
- Key Props/Functionality: integrate BadgeVerification; parse input; error handling
- Dependencies: BadgeVerification, useBadgeVerification
- Subtasks:
  - [ ] Input form (URL/JSON), parse/validate
  - [ ] Trigger verification and show results
  - [ ] Empty/loading/error states
  - [ ] Route integration in demo app; tests; Histoire story

### [ ] VerificationResultCard.vue (src/components/badges/VerificationResultCard.vue)
- Purpose: Rich verification outcome display
- Routes/Parents: BadgeVerifyView; AssertionDetailDrawer
- Key Props/Functionality: props result { status, messages, lastVerified, evidence? }, compact?
- Dependencies: BadgeVerification state shape
- Subtasks:
  - [ ] Status visuals and summary
  - [ ] Expandable details (issuer/signature/timestamps)
  - [ ] Unit tests; Histoire story

---

## Medium Priority – Badge Details/Deep View Components

### [ ] BadgeDetailView.vue (src/components/badges/BadgeDetailView.vue)
- Purpose: Detailed view for BadgeClass/Assertion with full metadata and optional verification
- Routes/Parents: /badges/:id; modal/drawer reuse
- Key Props/Functionality: props badge or fetch by id param; includes BadgeDisplay, BadgeMetadataPanel, BadgeVerification
- Dependencies: BadgeDisplay, BadgeVerification, BadgeService
- Subtasks:
  - [ ] Route param handling & data fetching
  - [ ] Compose display + metadata + verification
  - [ ] Empty/loading/error states; tests; Histoire story

### [ ] AssertionDetailView.vue (src/components/badges/AssertionDetailView.vue)
- Purpose: Detailed view for one Assertion with recipient/evidence and raw JSON toggle
- Routes/Parents: /assertions/:id; linked from /badges/issued
- Key Props/Functionality: props assertion or fetch by id param; includes BadgeDisplay, BadgeVerification
- Dependencies: BadgeDisplay, BadgeVerification, BadgeService
- Subtasks:
  - [ ] Route/data handling; evidence rendering
  - [ ] Raw JSON toggle; copy to clipboard
  - [ ] States; tests; Histoire story

#### Context & Background
- Routes observed: /badges/issued shows assertion management but no detail route
- Integrates with: BadgeDisplay, BadgeVerification, BadgeMetadataPanel; linked from AssertionsTable
- Journey fit: Deep dive into specific assertion for verification, evidence review, troubleshooting

#### Research Requirements
- Study OB2/OB3 Assertion structure for recipient, evidence, verification fields
- Review existing drawer/modal patterns for consistency (AssertionDetailDrawer)
- Check clipboard API usage patterns in the library

#### Technical Specifications
- Props (TS):
  - assertion?: OB2.Assertion | OB3.VerifiableCredential; assertionId?: string
- Events: none (page-level component)
- Integration: Fetch by ID if needed; use BadgeDisplay + BadgeVerification + metadata sections
- Tests: renders assertion; fetches by ID; shows/hides JSON; copy to clipboard; verification flow
- New utils: useClipboard composable (if not exists)

#### Acceptance Criteria
- Shows BadgeDisplay, recipient info, evidence list, verification status, and raw JSON toggle
- Copy JSON to clipboard with success feedback; handles fetch errors gracefully
- Accessible headings, focus management, keyboard navigation
- Histoire stories: loaded assertion, loading state, error state, JSON toggle

### [ ] BadgeMetadataPanel.vue (src/components/badges/BadgeMetadataPanel.vue)
- Purpose: Reusable panel to render normalized metadata fields
- Routes/Parents: BadgeDetailView, AssertionDetailView
- Key Props/Functionality: props normalizedBadge, sections
- Dependencies: BadgeService.normalizeBadge
- Subtasks:
  - [ ] Render criteria, tags, issuer, alignment, evidence
  - [ ] Accessibility and responsive layout
  - [ ] Tests; Histoire story

#### Context & Background
- Routes observed: No current deep-detail routes; needed for /badges/:id and /assertions/:id
- Integrates with: BadgeDetailView, AssertionDetailView (shared metadata rendering)
- Journey fit: Consistent metadata display across detail views; reduces duplication

#### Research Requirements
- Study BadgeService.normalizeBadge output structure for all metadata fields
- Review existing detail patterns in library for layout consistency
- Check OB2/OB3 spec for all possible metadata fields (criteria, alignment, evidence, etc.)

#### Technical Specifications
- Props (TS):
  - normalizedBadge: BadgeDisplayData; sections?: string[] (which sections to show)
- Events: none (pure display)
- Integration: Use normalized badge from BadgeService; responsive layout with headings/lists
- Tests: renders all sections; respects sections filter; handles missing fields; responsive layout
- New utils: none required

#### Acceptance Criteria
- Renders criteria (narrative/URL), tags, issuer details, alignment, evidence as structured sections
- Sections can be selectively shown/hidden via sections prop
- Accessible headings (h3/h4), lists, and links; responsive on mobile
- Histoire stories: all sections, filtered sections, missing data, mobile layout

---

## Low Priority – Missing Integration Components

### [ ] BadgePreviewPanel.vue (src/components/badges/BadgePreviewPanel.vue)
- Purpose: Live preview of BadgeClass during editing/issuing
- Routes/Parents: /badges/create (next to BadgeIssuerForm)
- Key Props/Functionality: props badge (partial BadgeClass), loading; listens for form update events
- Dependencies: BadgeDisplay, BadgeService.normalizeBadge
- Subtasks:
  - [ ] Subscribe to BadgeIssuerForm update; render preview
  - [ ] Handle missing/invalid fields gracefully
  - [ ] Tests; Histoire story

#### Context & Background
- Routes observed: /badges/create shows "Preview" section but no live preview component
- Integrates with: BadgeIssuerForm (listens to 'update' events); BadgeDisplay (renders preview)
- Journey fit: Provides immediate visual feedback while creating badges; reduces errors

#### Research Requirements
- Study BadgeIssuerForm's 'update' event payload structure and debouncing
- Review BadgeService.normalizeBadge to handle partial/incomplete badge data
- Check existing preview patterns in the library for consistency

#### Technical Specifications
- Props (TS):
  - badge: Partial<OB2.BadgeClass>; loading?: boolean
- Events: none (pure display component)
- Integration: Listen to parent's BadgeIssuerForm update events; use BadgeService.normalizeBadge with fallbacks
- Tests: renders with partial data; updates on prop changes; handles missing fields gracefully
- New utils: none required

#### Acceptance Criteria
- Updates in real-time as form fields change (via parent event handling)
- Shows placeholder/fallback for missing required fields (name, image, description)
- Maintains BadgeDisplay accessibility patterns; loading state support
- Histoire stories: empty state, partial data, complete data, loading state

### [ ] MasonryBadgeGallery.vue (src/components/badges/MasonryBadgeGallery.vue)
- Purpose: Alternative dense gallery layout for large badge sets
- Routes/Parents: /badges; optionally /backpack
- Key Props/Functionality: props badges, columnCount?, gap?, interactive?; emits badge-click
- Dependencies: BadgeDisplay
- Subtasks:
  - [ ] Responsive columns; virtualization (optional)
  - [ ] Keyboard navigation; focus management
  - [ ] Tests; Histoire story


#### Context & Background
- Routes observed: /badges (directory), /backpack (large collections)
- Integrates with: BadgeDisplay; alternative to BadgeList for dense grids
- Journey fit: Helps users browse many badges efficiently when collections are large

#### Research Requirements
- Investigate performance constraints and virtualization needs (large lists)
- Review existing BadgeList a11y and keyboard patterns for consistency
- Check design tokens/spacing to define default gap and column rules

#### Technical Specifications
- Props (TS):
  - badges: (OB2.Assertion | OB3.VerifiableCredential)[]
  - columnCount?: number; gap?: number | string; interactive?: boolean
- Emits: 'badge-click' (badge)
- Integration: Wrap BadgeDisplay; ensure focus order row-major; responsive columns via CSS grid/masonry
- Tests: render N badges; keyboard focus traversal; click/enter fires 'badge-click'; responsive columns at sm/md/lg
- New utils (optional): useMasonryLayout for column calc

#### Acceptance Criteria
- Renders badges in masonry with responsive columns (>=1 at xs, >=2 at sm, >=3 at md, >=4 at lg)
- Keyboard navigation left/right/up/down between items; tab order logical; SR labels include badge name
- Works with 1000+ items without jank (document limits or apply virtualization)
- Histoire stories: basic (grid sizes), interactive on/off, large dataset performance
---

## Exclusions / Non-goals
- Issuer management (beyond what’s integral to issuance flows already present)
- Authentication components
- Global navigation/layout components

## References (existing building blocks)
- BadgeDisplay (src/components/badges/BadgeDisplay.vue)
- BadgeList (src/components/badges/BadgeList.vue)
- BadgeVerification (src/components/badges/BadgeVerification.vue)
- BadgeIssuerForm (src/components/issuing/BadgeIssuerForm.vue)
- IssuerDashboard (src/components/issuing/IssuerDashboard.vue)
- BadgeService (src/services/BadgeService)
- useBadgeVerification (src/composables/useBadgeVerification)

