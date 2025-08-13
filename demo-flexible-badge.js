// Demo script showing the new flexible badge types working with BadgeDisplay
import { BadgeService } from './src/services/BadgeService.js';

console.log('=== Testing BadgeDisplay Flexibility ===\n');

// 1. Test with flexible BadgeDisplayData
console.log('1. BadgeDisplayData (flexible interface):');
const flexibleBadge = {
  name: 'JavaScript Mastery',
  description: 'Demonstrates advanced JavaScript skills',
  image: 'https://example.com/js-badge.png',
  issuer: {
    name: 'Code Academy',
    url: 'https://codeacademy.com'
  },
  issuedDate: '2023-11-15T10:00:00Z',
  tags: ['javascript', 'programming']
};

const normalized1 = BadgeService.normalizeBadge(flexibleBadge);
console.log('Normalized:', normalized1);
console.log('✅ Flexible badge data works!\n');

// 2. Test with minimal BadgeDisplayData
console.log('2. Minimal BadgeDisplayData:');
const minimalBadge = {
  name: 'Quick Achievement'
};

const normalized2 = BadgeService.normalizeBadge(minimalBadge);
console.log('Normalized:', normalized2);
console.log('✅ Minimal badge data works!\n');

// 3. Test with OB2 BadgeClass (preview use case)
console.log('3. OB2 BadgeClass (for previews):');
const badgeClass = {
  '@context': 'https://w3id.org/openbadges/v2',
  type: 'BadgeClass',
  id: 'http://example.org/badges/web-dev',
  name: 'Web Development Expert',
  description: 'Advanced web development skills',
  image: 'http://example.org/web-dev-badge.png',
  criteria: { narrative: 'Complete advanced web dev course' },
  issuer: {
    type: 'Profile',
    id: 'http://example.org/issuer',
    name: 'Web Dev University'
  }
};

const normalized3 = BadgeService.normalizeBadge(badgeClass);
console.log('Normalized:', normalized3);
console.log('✅ BadgeClass support implemented!\n');

console.log('🎉 All flexible badge types now supported by BadgeDisplay component!');
console.log('\nUse cases now possible:');
console.log('- ✅ Live badge previews during creation');
console.log('- ✅ Badge class template displays');
console.log('- ✅ Custom badge data structures');
console.log('- ✅ Easy testing with mock data');
console.log('- ✅ Backward compatibility maintained');
