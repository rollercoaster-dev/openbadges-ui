# Open Badges Component Library - Release Checklist

This checklist helps ensure the library is ready for release.

## Pre-Release Checks

### Code Quality

- [x] All ESLint issues resolved
- [x] Code formatted with Prettier
- [x] TypeScript types are accurate and complete
- [x] No console.log statements or debugging code left in production code

### Functionality

- [x] All components render correctly
- [x] All composables function as expected
- [x] PrimeVue integration works in unstyled mode
- [x] Badge display components show badges correctly
- [x] Badge issuing components create valid Open Badges
- [x] Accessibility features work as expected
- [x] Theming system applies correctly

### Documentation

- [x] README.md is complete and accurate
- [x] Component documentation covers all features
- [x] Usage examples are clear and functional
- [x] Installation instructions are correct
- [x] API documentation is complete

### Build & Package

- [x] Build process completes without errors
- [x] UMD and ES module builds are generated
- [x] TypeScript declaration files are generated
- [x] CSS is properly included in the build
- [x] Package size is reasonable
- [x] All necessary files are included in the package

## Release Steps

1. Update version number in package.json
2. Build the library: `npm run build`
3. Test the build in a fresh project:
   ```
   npm pack
   cd ../test-project
   npm install ../openbadges-ui/openbadges-ui-0.1.0.tgz
   ```
4. Verify the library works in the test project
5. Commit all changes: `git commit -am "Prepare for v0.1.0 release"`
6. Create a git tag: `git tag v0.1.0`
7. Push changes and tags: `git push && git push --tags`
8. Publish to npm: `npm publish`

## Post-Release

- [ ] Verify the package is available on npm
- [ ] Test installation from npm in a new project
- [ ] Create GitHub release with release notes
- [ ] Update documentation site (if applicable)
- [ ] Announce release to relevant communities
