# Wei-Hsien (Rachel) Wang · Portfolio

| Project | Problem | Stack | Demo / source |
| --- | --- | --- | --- |
| BlindSpot AI | Controller builders need reproducible failure investigations around an obstructed crosswalk. | React / Vite, Three.js, Python / Waitress, NVIDIA Nemotron, Nebius Token Factory, Docker / Render | [Demo (login required)](https://blindspot-ai-p9jx.onrender.com/) · [Source](https://github.com/rsm-wew068/blindspot-ai) |
| Live Suggestion Agent | People need relevant assistance during conversations without losing the thread. | Next.js, Groq Whisper, GPT-OSS, Vercel | [Demo](https://twinmind-live-suggestion-liart.vercel.app) · [Source](https://github.com/rsm-wew068/live-suggestion-agent) |
| Auto Care Assistant | Customers need service answers and booking help while shop staff are busy with repairs. | React, Python, Groq / LLaMA, Supabase | [Demo](https://small-business-agent.vercel.app) · [Source](https://github.com/rsm-wew068/small_business_agent) |
| Muse.AI | Listeners need to translate a photo’s mood into relevant music discoveries. | Next.js, Python, LangGraph, Gemini, Spotify API, Cloud Run | [Demo](https://muse-frontend-2vu4yee5ha-uc.a.run.app/) · [Source](https://github.com/rsm-wew068/muse-ai) |
| NexusAI Email Intelligence | Corporate email threads bury cross-team deliverables, org bottlenecks, and schedule overlaps. | Python / FastAPI, Gemini 3.8 Flash, NetworkX, Pydantic v2, HTML5 Canvas, Docker / Cloud Run | [Demo](https://email-intelligence-system-249816165253.us-central1.run.app/) · [Source](https://github.com/rsm-wew068/email-intelligence-system) |
| AI Recruitment Hub | Recruiters juggle fragmented tools to draft JDs, parse resumes, match fit, schedule interviews, and generate offer PDFs. | Python / Shiny, Llama-3 & Gemini 2.0, PyMuPDF & FPDF, DuckDB / Scikit-learn, Calendly API, Hugging Face | [Demo](https://huggingface.co/spaces/rsm-wew068/recruitment-ai-system) · [Source](https://github.com/rsm-wew068/ai-recruitment-hub) |

**People first. Then possibility.**

I’m a product-minded builder and analyst: I build and test AI products, from experiment design to shipping. I design the workflow and architecture, then build with AI tools. My portfolio connects user problems to system choices, interface decisions, and the evidence used to evaluate them.

Structured as an interactive Studio workspace: a sticky Studio Passport pairs with a Bento Desk overview, an interactive 6-agent AI Work Lab (with playable sandboxes, interface previews, 4-step system flows, and 2×2 case study breakdowns), an interactive 5-chapter Story & Workflow deck, and a California Postcard contact studio.

## What the work demonstrates

I built the systems and completed the analyses presented here. Each AI card connects the user problem to an architectural choice, validation evidence, and a concrete interface decision.

- **BlindSpot AI:** an adaptive testing agent refines bounded scenarios from deterministic paired-controller outcomes. One 12-scenario AI run found 7 reactive-controller collision cases, versus 0.85 on average across 100 equal-scenario-budget, pedestrian-only random runs. The React/Three.js interface includes synchronized replays, collision feedback, and a local investigation notebook; 30 Python and 3 JavaScript tests cover backend and replay behavior. See the [benchmark and limitations](https://github.com/rsm-wew068/blindspot-ai/blob/main/BENCHMARK.md) and [verification log](https://github.com/rsm-wew068/blindspot-ai/blob/main/VALIDATION.md). These simulation results do not establish real-world safety or a general AI-search advantage. The Dockerized Python/Waitress app is hosted on Render; its latest authenticated deployment has not yet been verified.
- **Live Suggestion Agent:** structured suggestions, recent-context windowing, two-layer deduplication, and on-demand streaming answers. The repository includes 43 tests across eight suites.
- **Auto Care Assistant:** stateless conversation handling with persistent booking tools. Tests cover missing and blank tool fields; broader format validation remains future work.
- **Muse.AI:** photo interpretation → Spotify retrieval → contextual critique, with conversational refinement. The README’s mismatch scenarios illustrate the validation approach; measured recommendation-quality results are not published.
- **NexusAI Email Intelligence:** `<UNTRUSTED_EMAIL_CONTENT>` prompt-injection isolation, deterministic verbatim quote grounding (`verify_evidence_quote`), dual Gemini + local hybrid NLP extraction, NetworkX organizational/temporal MultiDiGraph (PageRank, betweenness, modularity), schedule conflict detection, and a 5-tool ReAct agent covered by 6 `pytest` + FastAPI `TestClient` integration suites.
- **AI Recruitment Hub:** 6-stage progressive hiring workflow connecting job creation, `PyMuPDF` resume parsing, Scikit-learn qualification fit correlation, dual `Llama-3` / `Gemini 2.0` routing (`llm_connect`), Calendly invite injection, shared MCP JSON context state, and Unicode-safe `FPDF` offer letter & contract export.


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
| `app/page.tsx` | Portfolio project definitions and Studio entrypoint |
| `app/layout.tsx` | Root layout, fonts, and site metadata |
| `app/globals.css` | Light dry pink Morandi palette, Studio layout, responsive styling, motion preferences |
| `components/PortfolioStudio.tsx` | Split-screen Studio Passport sidebar and 4-room workspace shell |
| `components/StudioDesk.tsx` | Interactive Bento Desk overview and 6-agent cartridge rack |
| `components/WorkLab.tsx` | Interactive 6-agent sandboxes, UI previews, system pipelines, and 2×2 case studies |
| `components/Journey.tsx` | 5-chapter story deck and keyboard controls |
| `components/WorkflowPlayground.tsx` | Interactive 4-step workflow with project receipts |
| `components/ContactPostcard.tsx` | Interactive postcard contact studio and email copy action |
| `public/` | Portrait, landscape photo, and project screenshots |

### Vercel

Import this repository, select **Next.js**, and use the repository root (`./`). Leave build and output settings at their Next.js defaults. No API keys, database, or environment variables are required for this version.

With the GitHub integration connected, pushes to the configured production branch deploy automatically, and other branches can receive preview deployments. This repo is independent of the older GitHub Pages / Cloud Run portfolio.

</details>
