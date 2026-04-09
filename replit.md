# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Structure

```text
artifacts-monorepo/
├── artifacts/              # Deployable applications
│   └── api-server/         # Express API server
├── lib/                    # Shared libraries
│   ├── api-spec/           # OpenAPI spec + Orval codegen config
│   ├── api-client-react/   # Generated React Query hooks
│   ├── api-zod/            # Generated Zod schemas from OpenAPI
│   └── db/                 # Drizzle ORM schema + DB connection
├── scripts/                # Utility scripts (single workspace package)
│   └── src/                # Individual .ts scripts, run via `pnpm --filter @workspace/scripts run <script>`
├── pnpm-workspace.yaml     # pnpm workspace (artifacts/*, lib/*, lib/integrations/*, scripts)
├── tsconfig.base.json      # Shared TS options (composite, bundler resolution, es2022)
├── tsconfig.json           # Root TS project references
└── package.json            # Root package with hoisted devDeps
```

## TypeScript & Composite Projects

Every package extends `tsconfig.base.json` which sets `composite: true`. The root `tsconfig.json` lists all packages as project references. This means:

- **Always typecheck from the root** — run `pnpm run typecheck` (which runs `tsc --build --emitDeclarationOnly`). This builds the full dependency graph so that cross-package imports resolve correctly. Running `tsc` inside a single package will fail if its dependencies haven't been built yet.
- **`emitDeclarationOnly`** — we only emit `.d.ts` files during typecheck; actual JS bundling is handled by esbuild/tsx/vite...etc, not `tsc`.
- **Project references** — when package A depends on package B, A's `tsconfig.json` must list B in its `references` array. `tsc --build` uses this to determine build order and skip up-to-date packages.

## Root Scripts

- `pnpm run build` — runs `typecheck` first, then recursively runs `build` in all packages that define it
- `pnpm run typecheck` — runs `tsc --build --emitDeclarationOnly` using project references

## Packages

### `artifacts/api-server` (`@workspace/api-server`)

Express 5 API server. Routes live in `src/routes/` and use `@workspace/api-zod` for request and response validation and `@workspace/db` for persistence.

- Entry: `src/index.ts` — reads `PORT`, starts Express
- App setup: `src/app.ts` — mounts CORS, JSON/urlencoded parsing, routes at `/api`
- Routes: `src/routes/index.ts` mounts sub-routers; `src/routes/health.ts` exposes `GET /health` (full path: `/api/health`)
- Depends on: `@workspace/db`, `@workspace/api-zod`
- `pnpm --filter @workspace/api-server run dev` — run the dev server
- `pnpm --filter @workspace/api-server run build` — production esbuild bundle (`dist/index.cjs`)
- Build bundles an allowlist of deps (express, cors, pg, drizzle-orm, zod, etc.) and externalizes the rest

### `lib/db` (`@workspace/db`)

Database layer using Drizzle ORM with PostgreSQL. Exports a Drizzle client instance and schema models.

- `src/index.ts` — creates a `Pool` + Drizzle instance, exports schema
- `src/schema/index.ts` — barrel re-export of all models
- `src/schema/<modelname>.ts` — table definitions with `drizzle-zod` insert schemas (no models definitions exist right now)
- `drizzle.config.ts` — Drizzle Kit config (requires `DATABASE_URL`, automatically provided by Replit)
- Exports: `.` (pool, db, schema), `./schema` (schema only)

Production migrations are handled by Replit when publishing. In development, we just use `pnpm --filter @workspace/db run push`, and we fallback to `pnpm --filter @workspace/db run push-force`.

### `lib/api-spec` (`@workspace/api-spec`)

Owns the OpenAPI 3.1 spec (`openapi.yaml`) and the Orval config (`orval.config.ts`). Running codegen produces output into two sibling packages:

1. `lib/api-client-react/src/generated/` — React Query hooks + fetch client
2. `lib/api-zod/src/generated/` — Zod schemas

Run codegen: `pnpm --filter @workspace/api-spec run codegen`

### `lib/api-zod` (`@workspace/api-zod`)

Generated Zod schemas from the OpenAPI spec (e.g. `HealthCheckResponse`). Used by `api-server` for response validation.

### `lib/api-client-react` (`@workspace/api-client-react`)

Generated React Query hooks and fetch client from the OpenAPI spec (e.g. `useHealthCheck`, `healthCheck`).

### `artifacts/ie-cash-offers` — Flask Website (GoDaddy cPanel)

**Inland Empire Home Source** — a Python 3.11 / Flask website built for deployment on GoDaddy cPanel shared hosting via Phusion Passenger.

**NOT a pnpm/Node.js package** — this artifact is a standalone Python Flask app. It has no `package.json` and does not participate in the TypeScript/pnpm workspace.

**Stack:**
- Python 3.11 + Flask 3.x
- Jinja2 templates (in `templates/`)
- Tailwind CSS Play CDN (no build step)
- Google Fonts: Playfair Display (serif headings)
- Font Awesome 6 CDN (icons)
- Contentful Python SDK (blog posts)
- Phusion Passenger WSGI entry via `passenger_wsgi.py`

**Key files:**
- `app.py` — Flask app with all routes and hardcoded city/situations data
- `passenger_wsgi.py` — GoDaddy cPanel entry point (`from app import app as application`)
- `requirements.txt` — `flask`, `contentful`, `python-dotenv`
- `.htaccess` — enables Phusion Passenger on GoDaddy
- `.env` — Contentful credentials (Space ID + Access Token)
- `templates/base.html` — shared layout with nav + footer
- `templates/index.html` — home page with hero, why-us, process, situations, reviews, FAQs
- `templates/cities.html` — city grid listing all 12 cities
- `templates/sell_fast.html` — dynamic city page (`/sell-my-house-fast-<slug>`)
- `templates/situations.html` — 8 home-selling situations
- `templates/blog.html` — Contentful blog posts
- `templates/contact.html` — contact page with FAQs and process steps
- `templates/privacy.html` — privacy policy
- `templates/404.html` — 404 error page
- `static/css/style.css` — custom styles (font-serif, hero overlay, FAQ accordion)
- `static/js/main.js` — FAQ accordion, mobile nav toggle, smooth scroll
- `static/images/cities/` — 12 city images (copied from src/assets)

**Routes:**
- `/` → home
- `/cities` → city grid
- `/sell-my-house-fast-<slug>` → city page (12 cities)
- `/we-buy-houses-any-condition-california` → situations page
- `/blog` → Contentful blog
- `/contact` → contact page
- `/privacy-policy` → privacy policy

**Contentful:** Space ID `brrcamjugrrm`, content type `pageBlogPost`, fields: title, slug, shortDescription, publishedDate, featuredImage

**GoDaddy deployment:** Upload contents of `ie-cash-offers-godaddy.zip` (at project root) to `public_html`. Install dependencies via SSH: `pip install -r requirements.txt`.

**Dev server:** `python app.py` (runs from `artifacts/ie-cash-offers/` directory, PORT from env)

**Phone:** (909) 202-6006 | **Cities:** Riverside, San Bernardino, Fontana, Moreno Valley, Rancho Cucamonga, Ontario, Corona, Victorville, Murrieta, Temecula, Rialto, Hesperia

### `scripts` (`@workspace/scripts`)

Utility scripts package. Each script is a `.ts` file in `src/` with a corresponding npm script in `package.json`. Run scripts via `pnpm --filter @workspace/scripts run <script>`. Scripts can import any workspace package (e.g., `@workspace/db`) by adding it as a dependency in `scripts/package.json`.
