# Repository Guidelines

This is an Astro 6 server-rendered app with SolidJS islands, Tailwind CSS v4, Supabase auth, and Cloudflare Workers deployment. Product and stack context lives in @context/foundation/prd.md and @context/foundation/tech-stack.md.

## Hard Rules

- Do not write under @context/archive/; archived changes are immutable.
- Treat Supabase env values as server-only secrets. Add or rename variables in @astro.config.mjs, and keep `.env`, `.dev.vars`, and @.env.example aligned.
- Do not invent a test command: no test runner or test config exists. For UI/auth changes, run `pnpm run dev` and manually verify the affected route or auth flow; otherwise state why no manual check was needed.

## Commands

- Use scripts from @package.json; Node version is fixed in @.nvmrc.
- Before handing off, run `pnpm run lint` and `pnpm run build` unless the change only touches docs; report skipped commands.
- CI in @.github/workflows/ci.yml uses `npm ci`, `npx astro sync`, `npm run lint`, and `npm run build`; account for both lockfiles when changing dependencies.

## Structure

- API endpoints live in `src/pages/api/**` and export `APIRoute` handlers.
- `src/components/` holds Astro components and Solid `.tsx` islands; shared primitives live in `src/components/ui/`.
- `src/lib/` holds reusable helpers such as `createClient` and `cn`.
- `src/middleware.ts` owns auth population and `PROTECTED_ROUTES`; add protected paths there.
- `supabase/` contains local Supabase config; @wrangler.jsonc owns Cloudflare runtime settings.

## Conventions

Use `@/` imports for `src` paths. Solid components use `PascalCase.tsx`, local interfaces named `Props`, `createSignal` local state, and default exports for page-level islands. API auth handlers redirect with query-string errors and call `createClient(context.request.headers, context.cookies)`; preserve the null-client path because auth is disabled when Supabase config is missing. UI variants follow the existing `cva` pattern in @src/components/ui/button.tsx.

## Git

Recent history uses short Conventional Commit prefixes, mainly `chore:` and `docs:`. Ensure the GitHub Actions CI gate can pass with required Supabase secrets.
