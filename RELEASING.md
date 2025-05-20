# Semantic Release

This project uses [semantic-release](https://semantic-release.gitbook.io/) for automated versioning and publishing to npm and GitHub releases.

## How it works
- On every push to `main`, semantic-release analyzes commits, updates the version, generates a changelog, publishes to npm, and creates a GitHub release.

## Manual Release
To run a release locally, ensure the following environment variables are set:
- `NPM_TOKEN`: An npm authentication token with publish access to the package.
- `GH_TOKEN`: A GitHub personal access token with `repo` scope for creating releases.

Once these are configured, you can run:

```
pnpm run release
```

## GitHub Actions
Automated releases are typically handled by CI. See `.github/workflows/release.yml` for details.
