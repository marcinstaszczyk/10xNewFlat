# Rules for AI

## Critical Rules

- **SSR**: This is an Astro 6 server-rendered app deployed to Cloudflare Workers. Keep `output: "server"` in `astro.config.mjs`; API routes must export `const prerender = false`.
- **Auth/session source**: `src/middleware.ts` resolves the user on every request and stores it in `context.locals.user`. Use that value for protected server-rendered pages instead of client-side auth checks.
- **Supabase secrets**: create server clients through `src/lib/supabase.ts`; keep `SUPABASE_URL` and `SUPABASE_KEY` server-only via `astro:env/server`.
- **Database access**: new Supabase tables must enable RLS and define explicit SELECT, INSERT, UPDATE, and DELETE policies for each role that can access the table.
- **API routes**: use uppercase `GET`/`POST` exports, set `prerender = false`, and validate request input with zod.

## Project Shape

- **Stack**: Astro 6 SSR, SolidJS islands, Tailwind 4, Supabase auth, shadcn/ui components, Cloudflare Workers.
- **Auth files**: endpoints live in `src/pages/api/auth/{signin,signup,signout}.ts`; pages live in `src/pages/auth/{signin,signup,confirm-email}.astro`; protected page example is `src/pages/dashboard.astro`.
- **Path alias**: `@/*` maps to `./src/*`; see `@tsconfig.json`.
- **UI components**: components live in `src/components/ui/` and follow the existing shadcn-style "new-york" variant.
- **Shared types**: entities and DTOs go in `src/types.ts`.

## Coding Conventions

- Use Astro components for static content/layout; use SolidJS only when interactivity is needed.
- Use `cn()` from `@/lib/utils` for conditional or merged Tailwind classes; do not concatenate class strings manually.
- Use Solid signals for local state. Move Solid logic shared by 2+ components to `src/components/hooks/use<Name>.ts`; keep page-only signals local.
- Put cross-route/domain operations used by 2+ callers in `src/lib/services/<name>.ts`; keep single-use helpers beside the caller.
- Name Supabase migrations `YYYYMMDDHHmmss_short_description.sql` in `supabase/migrations/`.

## References

- Scripts and lint-staged config: `@package.json`.
- Setup, Supabase local dev, and deployment: `@README.md`.
- Node version: `@.nvmrc`.
- Env template: `@.env.example`.
- CI workflow: `@.github/workflows/ci.yml`.
