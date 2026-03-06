# AGENTS.md

Codex/GPT agents working in this repository must follow [PROJECT_COMMAND_PROTOCOL.md](./PROJECT_COMMAND_PROTOCOL.md) before running project commands.

## Non-Negotiable Requirements

1. Ensure the git repository and GitHub remote exist.
2. Create the GitHub repo `jerrison/meta-product-sense-framework-map` if it does not exist yet.
3. Keep `README.md`, `AGENTS.md`, `CLAUDE.md`, `GEMINI.md`, `GPT.md`, and `PROJECT_COMMAND_PROTOCOL.md` present and current.
4. Commit and push completed work to `main`.
5. Deploy the synced `cf-pages-dist/` output to the Cloudflare Pages project `meta-product-sense-framework-map`.

If these instructions change, update the matching agent markdown files in the same commit.
