# Personal Website

A personal portfolio and blog site built with React and TanStack Router, hosted on GitHub Pages.

## Stack

- **Framework**: React + TanStack Router (file-based routing)
- **Build tool**: Vite
- **Hosting**: GitHub Pages (static, no server)
- **Styling**: Tailwind CSS v4

## Development

```bash
npm install        # install dependencies
npm run dev        # start dev server (also auto-generates src/routeTree.gen.ts)
npm run build      # production build → dist/ (generates routeTree.gen.ts then bundles)
npm run typecheck  # TypeScript type check (run after build so routeTree.gen.ts exists)
npm run lint       # ESLint
npm run preview    # preview the production build locally
```

## Deployment

The site deploys to GitHub Pages from the `dist/` output. The base path in `vite.config.ts` must match the GitHub Pages URL:

- Hosted at `https://mtj0712.github.io` (repo name `mtj0712.github.io`), so `base: '/'`

GitHub Pages doesn't support SPA routing natively — a `404.html` redirect trick or a custom domain with root hosting is required for TanStack Router to handle deep links correctly. See the [spa-github-pages](https://github.com/rafgraph/spa-github-pages) pattern.

## Site Sections

- **Home / About** — bio, photo, quick intro
- **Projects / Portfolio** — rendered live from GitHub (see below)
- **Resume** — skills, experience, education
- **Blog** — articles and write-ups
- **Contact** — links to email and social profiles

## UI Pattern

All pages use the Jupyter notebook layout defined in `src/components/notebook.tsx`:

- `<Notebook filename="...">` — outer wrapper; renders a header bar (`filename.ipynb` + `Python 3`) and a divided body. Accepts `defaultOpen?: boolean` (default `true`) — when `false` the body is hidden and the header acts as a collapsed toggle.
- `<MdCell>` — prose cell with a blank left gutter.
- `<CodeCell n={n} code={...}>` — code cell with an `In [n]:` label.

The header bar is a full-width `<button>` — clicking anywhere on it toggles open/closed. New pages should follow this pattern.

## Projects Page — Live Notebook Rendering

`src/routes/projects.tsx` fetches `.ipynb` files at runtime from the public GitHub repo `mtj0712/research_replications`. No rebuild is needed when notebooks are added — the page re-fetches on every load.

**Fetch logic:**
1. `GET https://api.github.com/repos/mtj0712/research_replications/contents/` → list root directories
2. For each directory, list its contents and collect `*.ipynb` files
3. Fetch each notebook via its `download_url` and parse the JSON

**Expected repo structure:** one directory per project, one `.ipynb` file inside each directory.

**Rendering** is handled by `src/components/notebook-renderer.tsx` (`NotebookRenderer`), which accepts a parsed `IpynbData` object and renders each cell:
- `markdown` cells → `<MdCell>` with `react-markdown` (styled via `mdComponents`)
- `code` cells → `<CodeCell>` with sequential execution numbers
- Outputs → plain text (`stream`, `execute_result`, `display_data text/plain`), base64 PNG images (`image/png`), and error tracebacks (red box, ANSI codes stripped)

Each fetched notebook starts **collapsed** (`defaultOpen={false}`); the intro `projects.ipynb` block starts open.

## Theming

Colors are CSS custom properties defined in `src/index.css` (e.g. `--color-accent`, `--color-bg`, `--color-surface`). Reference them in Tailwind's arbitrary-value syntax: `text-[var(--color-accent)]`. Dark mode is class-based (`.dark` on `<html>`), toggled in `src/routes/__root.tsx` and persisted to `localStorage`. Do not use Tailwind's built-in color palette directly — always go through the CSS variables.

## Architecture Notes

- This is a purely static SPA — no backend or database is currently planned. If a backend is added later, document it here.
- Keep all content (blog posts, project data) in local files (JSON or MDX) unless a CMS is introduced.
- Images go in `public/` so they're served at the root path without import overhead.
