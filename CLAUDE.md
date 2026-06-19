# Personal Website

A personal portfolio and blog site built with React and TanStack Router, hosted on GitHub Pages.

## Stack

- **Framework**: React + TanStack Router (file-based routing)
- **Build tool**: Vite
- **Hosting**: GitHub Pages (static, no server)
- **Styling**: TBD

## Development

```bash
npm install        # install dependencies
npm run dev        # start dev server (also auto-generates src/routeTree.gen.ts)
npm run build      # production build → dist/ (generates routeTree.gen.ts then bundles)
npm run typecheck  # TypeScript type check (run after build so routeTree.gen.ts exists)
npm run preview    # preview the production build locally
```

## Deployment

The site deploys to GitHub Pages from the `dist/` output. The base path in `vite.config.ts` must match the GitHub Pages URL:

- Hosted at `https://mtj0712.github.io` (repo name `mtj0712.github.io`), so `base: '/'`

GitHub Pages doesn't support SPA routing natively — a `404.html` redirect trick or a custom domain with root hosting is required for TanStack Router to handle deep links correctly. See the [spa-github-pages](https://github.com/rafgraph/spa-github-pages) pattern.

## Site Sections

- **Home / About** — bio, photo, quick intro
- **Projects / Portfolio** — project cards with descriptions, links, and screenshots
- **Resume** — skills, experience, education
- **Blog** — articles and write-ups
- **Contact** — links to email and social profiles

## Architecture Notes

- This is a purely static SPA — no backend or database is currently planned. If a backend is added later, document it here.
- Keep all content (blog posts, project data) in local files (JSON or MDX) unless a CMS is introduced.
- Images go in `public/` so they're served at the root path without import overhead.
