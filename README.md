# Meta Product Sense Framework Map

Interactive static site for reviewing the Meta product sense framework as an expandable study map.

## Project Structure

- Root files (`index.html`, `styles.css`, `app.js`, `favicon.ico`) are the editable source of truth.
- `cf-pages-dist/` is the Cloudflare Pages deployment bundle.

## Deployment

This project deploys to the Cloudflare Pages project `meta-product-sense-framework-map`.

```bash
npm run sync:pages
npm run deploy
```

## Agent Workflow

Project agents must follow [PROJECT_COMMAND_PROTOCOL.md](./PROJECT_COMMAND_PROTOCOL.md).
