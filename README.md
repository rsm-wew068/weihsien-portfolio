# Wei-Hsien (Rachel) Wang · Portfolio

**People first. Then possibility.**

My path through design, psychology, marketing, and business analytics shapes how I build: understand the person, map the complete user journey, design the system around it, and test whether it delivers.

This portfolio brings that story together with selected AI projects and the thinking behind them.

## Inside the portfolio

- **My story:** four interactive chapters tracing the perspectives I bring to product building.
- **How I build:** a workflow that starts with user needs and brings AI collaborators into the technical design.
- **Selected work:** real interface screenshots and links to working project demos.
- **Contact:** a direct link to my LinkedIn profile.

The visual design pairs a warm rose palette with editorial typography, personal photography, and subtle motion. The layout adapts to desktop and mobile, with keyboard navigation for story chapters, visible focus indicators, and reduced-motion support.

## Selected projects

| Project | What it explores | Demo |
| --- | --- | --- |
| Eric’s Auto Care | An AI assistant for service questions and appointment booking at a small auto shop | [Open project](https://small-business-agent.vercel.app) |
| Live Suggestion Agent | Context-aware assistance during live conversations | [Open project](https://twinmind-live-suggestion-liart.vercel.app) |
| Email Intelligence | Turning email threads into structured tasks and relationships with GraphRAG | [Open project](https://huggingface.co/spaces/rsm-wew068/automated-task-manager) |

Project demos run independently of the portfolio. Their availability and access requirements depend on their respective hosts.

## Built with

**Next.js App Router · React · TypeScript · CSS · Vercel**

The home page is statically rendered, with a client component for the interactive story. Images use Next.js image optimization. This version needs no database, API keys, or environment variables.

## Run locally

Use a Node.js version supported by Next.js 16 (20.9 or later) and npm.

```sh
git clone https://github.com/rsm-wew068/weihsien-portfolio.git
cd weihsien-portfolio
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000).

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run typecheck` | Check TypeScript types |
| `npm run build` | Build the production app |
| `npm start` | Serve the production build locally |

Before publishing changes, run:

```sh
npm run typecheck
npm run build
```

## Project structure

```text
app/
  layout.tsx          Site metadata and root layout
  page.tsx            Introduction, story, workflow, projects, and contact
  globals.css         Visual styles, responsive layouts, and motion preferences
components/
  Journey.tsx         Interactive story chapters and keyboard controls
public/
  projects/           Screenshots of the project interfaces
  rachel-coast.jpg    Home-page portrait
  golden-gate.jpg     Contact-section landscape photo
```

To update the portfolio:

- Edit the introduction, project cards, or contact links in `app/page.tsx`.
- Edit the four story chapters in `components/Journey.tsx`.
- Adjust colors, spacing, and responsive styles in `app/globals.css`.
- Add photos and screenshots to `public/`, then reference their paths in the page.

## Deploy on Vercel

Import this repository into Vercel with these settings:

| Setting | Value |
| --- | --- |
| Framework | Next.js |
| Root directory | Repository root (`./`) |
| Build command | Default (`npm run build`) |
| Output directory | Default Next.js setting |
| Environment variables | None required |

With the GitHub integration connected, pushes to the configured production branch deploy automatically; other branches can be reviewed through preview deployments.

This repository is independent of the original GitHub Pages and Cloud Run portfolio. Changes here do not deploy that older site.

## Connect

[LinkedIn](https://www.linkedin.com/in/wei-hsien-wang-b21922230/) · [GitHub](https://github.com/rsm-wew068)
