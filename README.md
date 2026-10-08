# Wei-Hsien (Rachel) Wang · Portfolio

| Project | Problem | Stack | Demo / source |
| --- | --- | --- | --- |
| BlindSpot AI | Controller builders need reproducible failure investigations around an obstructed crosswalk. | Python, JavaScript, Three.js, NVIDIA Nemotron | [Source](https://github.com/rsm-wew068/blindspot-ai) |
| Live Suggestion Agent | People need relevant assistance during conversations without losing the thread. | Next.js, Groq Whisper, GPT-OSS, Vercel | [Demo](https://twinmind-live-suggestion-liart.vercel.app) · [Source](https://github.com/rsm-wew068/live-suggestion-agent) |
| Auto Care Assistant | Customers need service answers and booking help while shop staff are busy with repairs. | React, Python, Groq / LLaMA, Supabase | [Demo](https://small-business-agent.vercel.app) · [Source](https://github.com/rsm-wew068/small_business_agent) |
| Muse.AI | Listeners need to translate a photo’s mood into relevant music discoveries. | Python, LangGraph, Gemini, Spotify API | [Source](https://github.com/rsm-wew068/muse-ai) |
| Email Intelligence | Obligations and dependencies are difficult to track across long email threads. | Python, LangGraph, Neo4j, FAISS, Streamlit | [Demo](https://huggingface.co/spaces/rsm-wew068/automated-task-manager) · [Source](https://github.com/rsm-wew068/graph-ai-task-manager) |
| Experimentation & Customer Analytics | Product teams need to separate incremental impact from predicted behavior when evaluating interventions and churn risk. | Python, Scikit-learn, XGBoost, Jupyter | [Case studies](https://github.com/rsm-wew068/mgta495-customer-analytics) |

**People first. Then possibility.**

I’m a product-minded builder and analyst: I build and test AI products, from experiment design to shipping. My portfolio connects user problems to system choices, interface decisions, and the evidence used to evaluate them.

Selected work initially shows BlindSpot AI, Live Suggestion Agent, and Auto Care Assistant in one desktop row. **Show more** reveals Muse.AI, Email Intelligence, and Customer Analytics in that order; **Show less** collapses them again.

## What the work demonstrates

I built the systems and completed the analyses presented here. Each AI card connects the user problem to an architectural choice, validation evidence, and a concrete interface decision.

- **BlindSpot AI:** deterministic paired-controller simulation, bounded AI scenario proposals, replayable evidence, and strict schema validation after a live integration failure. See the project’s [verification log](https://github.com/rsm-wew068/blindspot-ai/blob/main/VALIDATION.md). Small prototype trials do not establish road safety or a general AI-search advantage.
- **Live Suggestion Agent:** structured suggestions, recent-context windowing, two-layer deduplication, and on-demand streaming answers. The repository includes 43 tests across eight suites.
- **Auto Care Assistant:** stateless conversation handling with persistent booking tools. Tests cover missing and blank tool fields; broader format validation remains future work.
- **Muse.AI:** photo interpretation → Spotify retrieval → contextual critique, with conversational refinement. The README’s mismatch scenarios illustrate the validation approach; measured recommendation-quality results are not published.
- **Email Intelligence:** semantic retrieval plus graph relationships, human review before storage, RAGAS assessment, and workflow tracing. Published benchmark scores are not available.
- **Experimentation & Customer Analytics:** I completed the data preparation, modeling, evaluation, and interpretation shown in the notebooks. In the [TZ Gaming analysis](https://github.com/rsm-wew068/mgta495-customer-analytics/blob/main/tz-gaming.ipynb), the preferred targeting model changes with the impression-budget constraint—showing why profit and ROME both matter.

Customer Analytics covers A/B testing analysis, uplift modeling, return on marketing expenditure (ROME), and churn prediction. **These analyses use course case-study datasets; they are not live experiments.** Projected outcomes depend on the cases’ assumptions.

The story traces four perspectives—design, psychology, marketing, and AI & product—with an emphasis on finding pain points, testing assumptions, and validating with data before building.

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
