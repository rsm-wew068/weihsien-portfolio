# Wei-Hsien (Rachel) Wang · Portfolio

| Project | Problem | Stack | Demo / source |
| --- | --- | --- | --- |
| BlindSpot AI | Controller builders need reproducible failure investigations around an obstructed crosswalk. | Python, JavaScript, Three.js, NVIDIA Nemotron | [Source](https://github.com/rsm-wew068/blindspot-ai) |
| Live Suggestion Agent | People need relevant assistance during conversations without losing the thread. | Next.js, Groq Whisper, GPT-OSS, Vercel | [Demo](https://twinmind-live-suggestion-liart.vercel.app) · [Source](https://github.com/rsm-wew068/live-suggestion-agent) |
| Eric’s Auto Care | Customers need service answers and booking help while shop staff are busy with repairs. | React, Python, Groq / LLaMA, Supabase | [Demo](https://small-business-agent.vercel.app) · [Source](https://github.com/rsm-wew068/small_business_agent) |
| Muse.AI | Listeners need to translate a photo’s mood into relevant music discoveries. | Python, LangGraph, Gemini, Spotify API | [Source](https://github.com/rsm-wew068/muse-ai) |
| Email Intelligence | Obligations and dependencies are difficult to track across long email threads. | Python, LangGraph, Neo4j, FAISS, Streamlit | [Demo](https://huggingface.co/spaces/rsm-wew068/automated-task-manager) · [Source](https://github.com/rsm-wew068/graph-ai-task-manager) |
| Experimentation & Customer Analytics | Product teams need to separate incremental impact from predicted behavior when evaluating interventions and churn risk. | Python, Scikit-learn, XGBoost, Jupyter | [Case studies](https://github.com/rsm-wew068/mgta495-customer-analytics) |

**People first. Then possibility.**

I’m a product-minded builder and analyst: I build and test AI products, from experiment design to shipping. My portfolio connects user problems to system choices, interface decisions, and the evidence used to evaluate them.

Selected work initially shows BlindSpot AI, Live Suggestion Agent, and Eric’s Auto Care in one desktop row. **Show more** reveals Muse.AI, Email Intelligence, and Customer Analytics in that order; **Show less** collapses them again.

## What the work demonstrates

The AI project cards describe a user problem and stack, with explicit prompts for the key decision, testing, and UX change. Those prompts are unfinished author notes—not claims of completed validation.

Experimentation & Customer Analytics is a team course project covering A/B testing analysis, uplift modeling, return on marketing expenditure (ROME) analysis, and churn prediction. **These analyses use course case-study datasets; they are not live experiments.** Findings and individual contributions remain to be filled in.

The story traces four perspectives—design, psychology, marketing, and analytics—with an emphasis on finding pain points, testing assumptions, and validating with data before building.

## Author notes to complete

For each of **BlindSpot AI**, **Live Suggestion Agent**, **Eric’s Auto Care**, **Muse.AI**, and **Email Intelligence**:

- **Key decision:** architecture or design choice, alternative considered, and reason for the choice.
- **How I tested it:** checks performed, one failure case found, and the change made.
- **UX decision:** user goal, concrete interface or flow choice, sticking point, and the change made.

For **Experimentation & Customer Analytics**:

- **What I found:** a supported finding, evaluation metric, and limitation.
- **My role:** personal contribution to the team project, distinguished from teammates’ work.

All 17 `[TODO]` placeholders are in `app/page.tsx`. Replace them with evidence from the projects before treating the cards as finished case studies.

## Portfolio experience

Built with Next.js App Router, React, TypeScript, and CSS. The existing warm rose palette, project screenshots, personal photography, and responsive design accompany keyboard-accessible story chapters, visible focus indicators, contrast fixes, and reduced-motion support.

Project demos run independently; availability and access requirements depend on their hosts.

[LinkedIn](https://www.linkedin.com/in/wei-hsien-wang-b21922230/) · [GitHub](https://github.com/rsm-wew068)

<details>
<summary><strong>Development</strong> — local setup, structure, and deployment</summary>

### Run locally

Use a Node.js version compatible with Next.js 16 and npm.

```sh
git clone https://github.com/rsm-wew068/weihsien-portfolio.git
cd weihsien-portfolio
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000). Before publishing, run:

```sh
npm run typecheck
npm run build
```

`npm start` serves the production build locally.

### Structure

| File / folder | Purpose |
| --- | --- |
| `app/page.tsx` | Hero, project content and placeholders, workflow, contact |
| `app/layout.tsx` | Root layout and site metadata |
| `app/globals.css` | Palette, responsive styling, focus states, motion preferences |
| `components/Journey.tsx` | Story chapters and keyboard controls |
| `components/SelectedWork.tsx` | Project cards and accessible Show more / Show less control |
| `public/` | Portrait, landscape photo, and project screenshots |

### Vercel

Import this repository, select **Next.js**, and use the repository root (`./`). Leave build and output settings at their Next.js defaults. No API keys, database, or environment variables are required for this version.

With the GitHub integration connected, pushes to the configured production branch deploy automatically, and other branches can receive preview deployments. This repo is independent of the older GitHub Pages / Cloud Run portfolio.

</details>
