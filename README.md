# Wei-Hsien (Rachel) Wang · Portfolio

| Project | Problem | Stack | Demo / source |
| --- | --- | --- | --- |
| BlindSpot AI | Controller builders need reproducible failure investigations around an obstructed crosswalk. | React / Vite, Three.js, Python / Waitress, NVIDIA Nemotron, Nebius Token Factory, Docker / Render | [Demo (login required)](https://blindspot-ai-p9jx.onrender.com/) · [Source](https://github.com/rsm-wew068/blindspot-ai) |
| Live Suggestion Agent | People need relevant assistance during conversations without losing the thread. | Next.js, Groq Whisper, GPT-OSS, Vercel | [Demo](https://twinmind-live-suggestion-liart.vercel.app) · [Source](https://github.com/rsm-wew068/live-suggestion-agent) |
| Auto Care Assistant | Customers need service answers and booking help while shop staff are busy with repairs. | React, Python, Groq / LLaMA, Supabase | [Demo](https://small-business-agent.vercel.app) · [Source](https://github.com/rsm-wew068/small_business_agent) |
| Muse.AI | Listeners need to translate a photo’s mood into relevant music discoveries. | Python, LangGraph, Gemini, Spotify API | [Source](https://github.com/rsm-wew068/muse-ai) |
| Email Intelligence | Obligations and dependencies are difficult to track across long email threads. | Python, LangGraph, Neo4j, FAISS, Streamlit | [Demo](https://huggingface.co/spaces/rsm-wew068/automated-task-manager) · [Source](https://github.com/rsm-wew068/graph-ai-task-manager) |

**People first. Then possibility.**

I’m a product-minded builder and analyst: I build and test AI products, from experiment design to shipping. I design the workflow and architecture, then build with AI tools. My portfolio connects user problems to system choices, interface decisions, and the evidence used to evaluate them.

Selected work sits directly after the hero, before the story chapters, and initially shows BlindSpot AI, Live Suggestion Agent, and Auto Care Assistant in one desktop row. **Show more** reveals Muse.AI and Email Intelligence in that order; **Show less** collapses them again.

## What the work demonstrates

I built the systems and completed the analyses presented here. Each AI card connects the user problem to an architectural choice, validation evidence, and a concrete interface decision.

- **BlindSpot AI:** an adaptive testing agent refines bounded scenarios from deterministic paired-controller outcomes. One 12-scenario AI run found 7 reactive-controller collision cases, versus 0.85 on average across 100 equal-scenario-budget, pedestrian-only random runs. The React/Three.js interface includes synchronized replays, collision feedback, and a local investigation notebook; 30 Python and 3 JavaScript tests cover backend and replay behavior. See the [benchmark and limitations](https://github.com/rsm-wew068/blindspot-ai/blob/main/BENCHMARK.md) and [verification log](https://github.com/rsm-wew068/blindspot-ai/blob/main/VALIDATION.md). These simulation results do not establish real-world safety or a general AI-search advantage. The Dockerized Python/Waitress app is hosted on Render; its latest authenticated deployment has not yet been verified.
- **Live Suggestion Agent:** structured suggestions, recent-context windowing, two-layer deduplication, and on-demand streaming answers. The repository includes 43 tests across eight suites.
- **Auto Care Assistant:** stateless conversation handling with persistent booking tools. Tests cover missing and blank tool fields; broader format validation remains future work.
- **Muse.AI:** photo interpretation → Spotify retrieval → contextual critique, with conversational refinement. The README’s mismatch scenarios illustrate the validation approach; measured recommendation-quality results are not published.
- **Email Intelligence:** semantic retrieval plus graph relationships, human review before storage, RAGAS assessment, and workflow tracing. Published benchmark scores are not available.


The story traces five perspectives: design, psychology, problem framing, analytics, and AI & Product, with an emphasis on finding pain points, testing assumptions, and validating with data before building.

## Portfolio experience

Built with Next.js App Router, React, TypeScript, and CSS. The existing warm rose palette, project screenshots, personal photography, and responsive design accompany keyboard-accessible story chapters, visible focus indicators, contrast fixes, and reduced-motion support.

Project demos run independently; availability and access requirements depend on their hosts.

[LinkedIn](https://www.linkedin.com/in/wei-hsien-wang-b21922230/) · [GitHub](https://github.com/rsm-wew068)

<details>
<summary><strong>Development</strong>: local setup, structure, and deployment</summary>

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
| `app/page.tsx` | Hero, project case studies, workflow, contact |
| `app/layout.tsx` | Root layout and site metadata |
| `app/globals.css` | Palette, responsive styling, focus states, motion preferences |
| `components/Journey.tsx` | Story chapters and keyboard controls |
| `components/SelectedWork.tsx` | Project cards and accessible Show more / Show less control |
| `public/` | Portrait, landscape photo, and project screenshots |

### Vercel

Import this repository, select **Next.js**, and use the repository root (`./`). Leave build and output settings at their Next.js defaults. No API keys, database, or environment variables are required for this version.

With the GitHub integration connected, pushes to the configured production branch deploy automatically, and other branches can receive preview deployments. This repo is independent of the older GitHub Pages / Cloud Run portfolio.

</details>
