# TLC2Chrom — Website

Official multilingual promotional and documentation website for the **TLC2Chrom** Streamlit application: https://tlc2chrom.streamlit.app/

## Features

- Portuguese, English, and Spanish content (PT / EN / ES)
- Home, Methodology, Tutorial, Examples, FAQ, Citation & Contact
- Scientific caveats based on the supplied TLC2Chrom Python source
- Official supplied logo (`public/images/tlc2chrom-logo.jpeg`)
- Responsive layout, no backend or API keys
- Automatic GitHub Pages deployment

## Publish with GitHub Pages

1. Create a **public** GitHub repository named `TLC2Chrom-Website` (or another name).
2. Upload **all the files in this project**, including the hidden `.github/workflows/deploy.yml` directory, to the repository root. Use the `main` branch.
3. Open the repository **Settings → Pages → Build and deployment** and choose **GitHub Actions** as the source.
4. Under **Actions**, wait for the `Deploy TLC2Chrom website` workflow to complete. If necessary, run it manually using **Run workflow**.
5. Visit `https://YOUR-USERNAME.github.io/TLC2Chrom-Website/` (replace the username and repository name).

The workflow automatically uses the repository's actual name as the Vite `base` path, so renaming the repository requires no source changes. Each push to `main` rebuilds and redeploys the site.

**Custom domain / user-site repository:** Change `VITE_BASE_PATH` in `.github/workflows/deploy.yml` to `/` when publishing at a domain root (for example `tlc2chrom.org` or `YOUR-USERNAME.github.io`). Configure the custom domain in GitHub Pages and your DNS provider.

**Navigation:** URLs use hash-based routes such as `#/en/tutorial` and `#/pt/method`, which are compatible with GitHub Pages without server-side rewrite rules. All three languages are reachable from every page.

## Local development

Requires Node.js 20+.

```bash
npm install
npm run dev
```

To test a production build:

```bash
npm run build
npm run preview
```

The workflow uses `npm install` to resolve dependencies. Commit the generated `package-lock.json` after running `npm install` locally, then optionally change the workflow to `npm ci` for reproducible installs.

## Editing the site

- **Content and translations:** `src/main.tsx`, in the `copy` object (`pt`, `en`, `es`). All user-facing scientific descriptions should remain synchronized.
- **Styling:** `src/style.css`.
- **Logo:** replace `public/images/tlc2chrom-logo.jpeg` with an approved updated logo; update the image reference in `src/main.tsx` if the filename changes.
- **Application URL:** update `appUrl` at the beginning of `src/main.tsx`.
- **Scientific publication and contacts:** replace the explicitly marked placeholders on the Citation & Contact page once verified.

## Scientific scope

Based on the supplied Python application, TLC2Chrom offers manual lane selection, grayscale mean-intensity profiles, normalized vertical Rf coordinates, trapezoidal region integration, area ratios/fractions, and RGB/HSV/CIELAB/HEX color extraction with CSV export for the color table.

Important limitations: Rf requires correct alignment with solvent front and origin; integration is not baseline-corrected; the app's `Keq` label refers to an area ratio rather than a validated equilibrium constant; colors are sensitive to imaging conditions. The illustrative example is not a measured dataset.

## License

**No license has been assigned yet.** Add a `LICENSE` file after deciding on a license. A public repository does not automatically grant reuse rights.
