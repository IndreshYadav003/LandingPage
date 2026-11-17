# PropStoxx

This Next.js app is configured for static export and GitHub Pages.

## Run locally

```bash
npm ci
npm run dev
```

## Deploy to GitHub Pages

The GitHub Actions workflow at `.github/workflows/pages.yml` builds the static site and publishes it when changes are pushed to `main`. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.

The repository is published as a project site at `/LandingPage`. If the repository name changes, update the `NEXT_PUBLIC_BASE_PATH` value in the workflow to match the new name.

To build the static site locally:

```powershell
$env:NEXT_PUBLIC_BASE_PATH="/LandingPage"
npm run build
```

The generated site is written to `out/`.
