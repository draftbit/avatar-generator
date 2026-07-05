# Personas by Draftbit

A delightful avatar generator by the folks at Draftbit. Try it online at [https://personas.draftbit.com](https://personas.draftbit.com)

![Personas](screenshot.png)

## Contributing

Personas is built with [ReScript](https://rescript-lang.org), React 18, and [Vite](https://vite.dev). You'll need Node 22+ (see `.nvmrc`) and Yarn 4 (via `corepack enable`).

- `yarn` installs dependencies
- `yarn re:watch` starts the ReScript compiler in watch mode
- `yarn dev` starts the Vite dev server (run alongside `re:watch`)
- `yarn build` produces a production build in `dist/`
- `yarn preview` serves the production build locally

## Deployment

The site deploys to [Cloudflare Workers](https://developers.cloudflare.com/workers/static-assets/) as a static-assets Worker. Pushes to `master` deploy automatically via GitHub Actions (`.github/workflows/deploy.yml`), which requires the `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` repo secrets. You can also deploy manually with `yarn deploy`.

## For LLMs & agents

Personas is fully addressable by URL — see [llms.txt](https://personas.draftbit.com/llms.txt) for the concise spec.

- **Avatar page**: `https://personas.draftbit.com/?hair=Mohawk&hairColor=F2C94C&eyes=Hearts` — style params (`hair`, `facialHair`, `body`, `eyes`, `mouth`, `nose`, `accessories`) and hex color params (`skinColor`, `hairColor`, `facialHairColor`, `bodyColor`, `accessoriesColor`, `bgColor`)
- **Valid options**: `GET /api/options` (JSON)
- **Avatar image**: `GET /api/avatar.svg?<same params>` (also `?code=<shortcode>` or `?random=1`)
- **MCP server**: `POST /mcp` — tools `list_avatar_options`, `generate_avatar`, `random_avatar` (e.g. `claude mcp add --transport http personas https://personas.draftbit.com/mcp`)
- Short share links (`personas.draftbit.com/<code>`) are a stateless base64url encoding of the avatar config, which makes the option arrays in `src/data/config.json` **append-only** — never remove or reorder entries, only append.

## Why

- We were exploring Reason/Rescript
- We wanted to put together an inclusive avatar generator for placeholders and profile photos
