---
bootstrapped_at: 2026-05-24T16:46:52Z
starter_id: 10x-astro-starter
starter_name: "10x Astro Starter (Astro + Supabase + Cloudflare)"
project_name: 10x-new-flat
language_family: js
package_manager: pnpm
cwd_strategy: git-clone
bootstrapper_confidence: first-class
phase_3_status: ok
audit_command: "npm audit --json"
---

## Hand-off

```yaml
---
starter_id: 10x-astro-starter
package_manager: pnpm
project_name: 10x-new-flat
hints:
  language_family: js
  team_size: solo
  deployment_target: cloudflare-pages
  ci_provider: github-actions
  ci_default_flow: manual-promotion
  bootstrapper_confidence: first-class
  path_taken: standard
  quality_override: false
  self_check_answers: null
  has_auth: true
  has_payments: false
  has_realtime: false
  has_ai: true
  has_background_jobs: false
---
```

### Why this stack

10xNewFlat is a small, after-hours web app MVP with login, saved offer entries, and offer-content extraction, so the registry-compatible 10x Astro Starter gives the fastest path to auth, database, TypeScript contracts, and Cloudflare deployment. The selected starter is React-based, but the project preference is to replace React islands with SolidJS after bootstrap while keeping the starter's Supabase, Cloudflare, and project structure. GitHub Actions with auto-deploy-on-merge keeps the release path simple for a solo build.

## Pre-scaffold verification

| Signal | Value | Severity | Notes |
| --- | --- | --- | --- |
| npm package | not run | n/a | cmd_template starts with `git clone`; no create-* npm CLI to check |
| GitHub repo | `przeprogramowani/10x-astro-starter` last pushed 2026-05-17T10:33:39Z | fresh | from card.docs_url |

## Scaffold log

**Resolved invocation**: `git clone https://github.com/przeprogramowani/10x-astro-starter .bootstrap-scaffold && cd .bootstrap-scaffold && pnpm install`
**Strategy**: git-clone
**Exit code**: 0 after install-policy recovery
**Files moved**: 23 top-level entries
**Conflicts (.scaffold siblings)**: none
**.gitignore handling**: append-merged
**.bootstrap-scaffold cleanup**: deleted

Notes:

- The cloned starter `.git/` directory was deleted before move-up.
- `pnpm install` initially exited non-zero because pnpm required explicit build-script approval for `esbuild`, `sharp`, and `workerd`.
- Approved only those reported packages, then reran install with non-interactive module purge confirmation disabled.
- Removed generated `.pnpm-store/` cache from the project root and added it to `.gitignore`.
- Smoke check after log creation: `pnpm.cmd build` passed. Astro warned that sitemap generation needs `site` in `astro.config`, which is expected before deployment config is filled in.
- Local browser check after smoke test: `http://127.0.0.1:4321/` returned HTTP 200 and rendered title `10x Astro Starter`.

Moved top-level entries:

`.github`, `.husky`, `.vscode`, `node_modules`, `public`, `src`, `supabase`, `.env.example`, `.gitignore`, `.nvmrc`, `.prettierrc.json`, `astro.config.mjs`, `CLAUDE.md`, `components.json`, `eslint.config.js`, `package-lock.json`, `package.json`, `pnpm-lock.yaml`, `pnpm-workspace.yaml`, `README.md`, `tsconfig.json`, `wrangler.jsonc`.

## Post-scaffold audit

**Tool**: `npm audit --json`
**Summary**: 0 CRITICAL, 1 HIGH, 9 MODERATE, 0 LOW
**Direct vs transitive**: 0/0/2/0 direct of total 0/1/9/0

### CRITICAL findings

None.

### HIGH findings

- `devalue` (transitive), range `5.6.3 - 5.8.0`: GHSA-77vg-94rm-hx3p, Svelte devalue DoS via sparse array deserialization. Fix available.

### MODERATE findings

- `@astrojs/check` (direct), range `>=0.9.3`: via `@astrojs/language-server`. Fix available: `@astrojs/check@0.9.2` marked semver-major by npm audit.
- `@astrojs/language-server` (transitive), range `>=2.14.0`: via `volar-service-yaml`.
- `@cloudflare/vite-plugin` (transitive), range `<=0.0.0-fff677e35 || 0.0.7 - 1.37.2`: via `miniflare`, `wrangler`, and `ws`. Fix available.
- `miniflare` (transitive), range `<=0.0.0-fff677e35 || 3.20250204.0 - 4.20260518.0`: via `ws`. Fix available.
- `volar-service-yaml` (transitive), range `<=0.0.70`: via `yaml-language-server`.
- `wrangler` (direct), range `<=0.0.0-kickoff-demo || 3.108.0 - 4.93.0`: via `miniflare`. Fix available.
- `ws` (transitive), range `8.0.0 - 8.20.0`: GHSA-58qx-3vcg-4xpx, uninitialized memory disclosure. Fix available.
- `yaml` (transitive), range `2.0.0 - 2.8.2`: GHSA-48c2-rrv3-qjmp, stack overflow via deeply nested YAML collections.
- `yaml-language-server` (transitive), range `1.11.1-08d5f7b.0 - 1.21.1-f1f5a94.0 || 1.22.1-0ae5603.0 - 1.22.1-fc5f874.0`: via `yaml`.

### LOW / INFO findings

None.

## Hints recorded but not acted on

| Hint | Value |
| --- | --- |
| bootstrapper_confidence | first-class |
| quality_override | false |
| path_taken | standard |
| self_check_answers | null |
| team_size | solo |
| deployment_target | cloudflare-pages |
| ci_provider | github-actions |
| ci_default_flow | manual-promotion |
| has_auth | true |
| has_payments | false |
| has_realtime | false |
| has_ai | true |
| has_background_jobs | false |

## Next steps

Next: a future skill will set up agent context (CLAUDE.md, AGENTS.md). For now, your project is scaffolded and verified.

Useful manual steps in the meantime:

- Review audit findings per project risk tolerance.
- Review generated starter docs in `README.md` and `CLAUDE.md`.
- Commit the scaffold once the generated files look right.
