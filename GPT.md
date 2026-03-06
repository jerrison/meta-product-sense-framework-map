# GPT.md

GPT-based agents must follow [PROJECT_COMMAND_PROTOCOL.md](./PROJECT_COMMAND_PROTOCOL.md) before running project commands in this repository.

## Required Workflow

1. Verify git and the GitHub remote are set up.
2. Create the GitHub repo `jerrison/meta-product-sense-framework-map` if missing.
3. Keep all project markdown instruction files present and synchronized.
4. After state-changing work, sync `cf-pages-dist/`, commit, push `main`, and deploy to Cloudflare Pages.
