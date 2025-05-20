# Release Process for OpenBadges UI

This project uses [semantic-release](https://semantic-release.gitbook.io/) for automated versioning and publishing to npm and GitHub releases.

## How It Works

Semantic Release automates the entire package release workflow including:

1. Determining the next version number based on commit messages
2. Generating release notes
3. Publishing to npm
4. Creating GitHub releases with assets

## Commit Message Format

This project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification. Your commit messages should be structured as follows:

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

### Types

- `feat`: A new feature (triggers a minor version bump)
- `fix`: A bug fix (triggers a patch version bump)
- `docs`: Documentation changes
- `style`: Changes that don't affect the code's meaning (white-space, formatting, etc.)
- `refactor`: Code changes that neither fix a bug nor add a feature
- `perf`: Performance improvements
- `test`: Adding or correcting tests
- `chore`: Changes to the build process or auxiliary tools

### Breaking Changes

If your commit introduces a breaking change, add `BREAKING CHANGE:` in the footer followed by a description of the change. This will trigger a major version bump.

Example:

```
feat(api): change the parameters of the badge creation method

BREAKING CHANGE: The `createBadge` method now requires an issuer parameter
```

## Automated Release Process

On every push to `main`, the release workflow is triggered:

1. Tests are run to ensure the code is working correctly
2. The library is built
3. Semantic Release analyzes commits and determines the next version
4. A new version is published to npm
5. A GitHub release is created with release notes and assets
6. The CHANGELOG.md file is updated

**Note:** Before the first release, ensure that an empty `CHANGELOG.md` file is created and committed to the repository. This file is required for the changelog plugin to function correctly.

## Manual Release

To run a release locally, ensure the following environment variables are set:

- `NPM_TOKEN`: An npm authentication token with publish access to the package.
- `GITHUB_TOKEN`: A GitHub personal access token with `repo` scope for creating releases.

Once these are configured, you can run:

```
pnpm run release
```

## GitHub Actions

Automated releases are handled by CI. See `.github/workflows/release.yml` for details on the workflow configuration.
