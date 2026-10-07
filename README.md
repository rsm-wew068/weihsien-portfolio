# Wei-Hsien (Rachel) Wang — Portfolio

A story-led portfolio built with Next.js, React, and TypeScript.

## Local development

```sh
npm ci
npm run dev
```

Open http://localhost:3000.

## Verification

```sh
npm run typecheck
npm run build
```

## Structure

- `app/page.tsx`: home page, building approach, projects, and contact.
- `components/Journey.tsx`: interactive story chapters with keyboard navigation.
- `app/globals.css`: responsive styling and reduced-motion support.
- `public/`: photos and screenshots of project interfaces.

## Vercel

Import `rsm-wew068/weihsien-portfolio` into Vercel. Select Next.js and use the repository root. The build command is `npm run build`; use the default Next.js output configuration, not `dist`.

No API keys or environment variables are required for this version. Project demos run on their existing external hosts.

The original GitHub Pages/Cloud Run repository is separate and can remain live during review of this portfolio.
