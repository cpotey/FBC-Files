# FBC Files

FBC Files is a Next.js site for browsing Control collectibles and lore. Content
is managed in Contentful and rendered with the App Router.

## Requirements

- Node.js 22 or newer
- npm
- Contentful space ID and Content Delivery API access token

Copy `.env.example` to `.env.local` and add the Contentful credentials. The site
can build without credentials, but Contentful records will not be shown.

## Development

```sh
npm install
npm run dev
```

The development site runs at http://localhost:3000.

## Checks and production

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

Contentful-backed routes are statically generated and revalidated hourly.
