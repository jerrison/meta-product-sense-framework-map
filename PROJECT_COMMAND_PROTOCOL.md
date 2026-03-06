# Project Command Protocol

This file defines the required workflow for any agent working in this repository.

## Mandatory Rule

Before executing any project command, treat the following checklist as required:

1. Confirm the project is a git repository. If it is not, initialize git with `main`.
2. Confirm the GitHub repository `jerrison/meta-product-sense-framework-map` exists. If it does not, create it and set `origin`.
3. Confirm the required markdown instruction files exist and are current:
   - `README.md`
   - `AGENTS.md`
   - `CLAUDE.md`
   - `GEMINI.md`
   - `GPT.md`
   - `PROJECT_COMMAND_PROTOCOL.md`
4. Keep the deployment bundle in `cf-pages-dist/` synchronized with the root site files before any release action.
5. After any state-changing work is complete, commit the changes, push `main` to GitHub, and deploy the latest `cf-pages-dist/` build to Cloudflare Pages.

## GitHub Target

- Owner: `jerrison`
- Repository: `meta-product-sense-framework-map`
- Branch: `main`

## Cloudflare Target

- Pages project: `meta-product-sense-framework-map`
- Deploy directory: `cf-pages-dist`

## Release Steps

Use this sequence for any meaningful update:

```bash
npm run sync:pages
git status --short
git add .
git commit -m "your message"
git push -u origin main
npm run deploy
```

## Notes

- Read-only inspection commands are allowed, but they do not replace this protocol.
- If the instruction files or other markdown docs are missing, create them before continuing.
- If deployment configuration drifts, fix the configuration first and then deploy.
