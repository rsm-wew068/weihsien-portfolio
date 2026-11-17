import PortfolioStudio from '@/components/PortfolioStudio';
import type { ProjectData } from '@/components/StudioDesk';

const projects: ProjectData[] = [
  {
    title: 'BlindSpot AI',
    emoji: '🚗',
    badge: '7 vs 0.85 Collisions',
    label: 'AI SYSTEMS · FAILURE INVESTIGATION',
    problem:
      'Builders of driving controllers need reproducible ways to investigate failures around an obstructed crosswalk before changing a controller.',
    stack: [
      'React / Vite',
      'Three.js',
      'Python / Waitress',
      'NVIDIA Nemotron',
      'Nebius Token Factory',
      'Docker / Render',
    ],
    details: [
      [
        'Key decision',
        'An adaptive testing agent proposes bounded scenarios and refines its next batch from simulated outcomes. Deterministic Python physics evaluates both controllers on identical inputs, keeping every failure reproducible.',
      ],
      [
        'How I tested it',
        'One 12-scenario AI run found 7 reactive-controller collision cases, versus 0.85 on average across 100 pedestrian-only random runs with the same scenario budget. 33 automated tests cover backend and replay behavior. This is simulation evidence from one AI run, not a general search advantage.',
      ],
      [
        'UX decision',
        'A React interface synchronizes controller comparisons across 2D and Three.js replays. Impact markers, measured collision speed, and optional sound make failures easier to inspect; a local notebook preserves investigations for comparison and JSON export.',
      ],
    ],
    link: 'https://blindspot-ai-p9jx.onrender.com/',
    repo: 'https://github.com/rsm-wew068/blindspot-ai',
    image: '/projects/blindspot.png',
    color: 'clay',
    cta: 'View demo (login required)',
  },
  {
    title: 'Live Suggestion Agent',
    emoji: '🎙️',
    badge: '43 Automated Tests',
    label: 'REALTIME AI · CONVERSATION',
    problem:
      'People in live conversations need relevant assistance before the moment passes, without losing the thread of the discussion.',
    stack: ['Next.js', 'Groq Whisper', 'GPT-OSS', 'Vercel'],
    details: [
      [
        'Key decision',
        'I use structured JSON suggestions and short recent-context windows, with longer context for detailed answers. Two-layer deduplication reduces repetition without another model call, at the cost of occasionally filtering a valid rephrasing.',
      ],
      [
        'How I tested it',
        'The repo includes 43 tests across API, UI, recording, and client behavior. Malformed JSON and suggestions missing a type or preview are covered; parsing falls back to an empty list and filters incomplete cards.',
      ],
      [
        'UX decision',
        'People need help while staying in the conversation. I show up to three useful previews, then stream a detailed answer only when a card is selected, keeping extra explanation out of the immediate flow.',
      ],
    ],
    link: 'https://twinmind-live-suggestion-liart.vercel.app',
    repo: 'https://github.com/rsm-wew068/live-suggestion-agent',
    image: '/projects/live-agent.jpg',
    color: 'ochre',
    cta: 'Explore the live project',
  },
  {
    title: 'Auto Care Assistant',
    emoji: '🔧',
    badge: 'Multi-Turn Booking',
    label: 'AI AGENT · SMALL BUSINESS',
    problem:
      'Customers need service answers and appointment help while a small auto shop’s staff are busy with repairs.',
    stack: ['React', 'Python', 'Groq / LLaMA', 'Supabase'],
    details: [
      [
        'Key decision',
        'I keep conversation history in the client and use stateless Python functions, while saving bookings and inquiries in Supabase. This separates temporary chat context from durable customer requests without server-side sessions.',
      ],
      [
        'How I tested it',
        'Tool tests cover missing booking fields, blank values, incomplete inquiries, and unknown tools. Missing information returns a readable follow-up instead of crashing. Date and phone-format validation remain future improvements.',
      ],
      [
        'UX decision',
        'A customer trying to book may not know every required detail upfront. The mobile chat collects information over multiple turns and asks for missing fields before submitting the appointment.',
      ],
    ],
    link: 'https://small-business-agent.vercel.app',
    repo: 'https://github.com/rsm-wew068/small_business_agent',
    image: '/projects/auto-care.jpg',
    color: 'sage',
    cta: 'Explore the live project',
  },
  {
    title: 'Muse.AI',
    emoji: '🎵',
    badge: 'Critic Agent Loop',
    label: 'MULTI-AGENT AI · MUSIC DISCOVERY',
    problem:
      'Listeners who know the mood they want but not a song title need a way to turn a photo into relevant music discoveries.',
    stack: ['Next.js', 'Python', 'LangGraph', 'Gemini', 'Spotify API', 'Cloud Run'],
    details: [
      [
        'Key decision',
        'I retrieve real Spotify candidates, then use a separate curator and critic stage to rank them against the photo’s narrative. This adds a context check beyond keyword search and constrains recommendations to retrieved track IDs.',
      ],
      [
        'How I tested it',
        'Validation compares candidates with the scene narrative; the README illustrates the mismatch of an aggressive track with a sleeping-baby photo. I added a critic stage and candidate-ID matching. The repo does not publish a measured quality benchmark or automated test results.',
      ],
      [
        'UX decision',
        'A dark-mode studio exposes the 4-stage Agentic Reasoning Trace ([VISION] → [STRATEGY] → [SCOUT] → [CRITIC]) alongside audio-feature bars and conversational refinement so “make it more upbeat” reuses photo context without re-uploading.',
      ],
    ],
    link: 'https://muse-frontend-2vu4yee5ha-uc.a.run.app/',
    repo: 'https://github.com/rsm-wew068/muse-ai',
    image: null,
    color: 'mauve',
    cta: 'Explore the live project',
  },
  {
    title: 'NexusAI Email Intelligence',
    emoji: '🕸️',
    badge: '59-Node Graph · 5-Tool Agent',
    label: 'EMAIL INTELLIGENCE · ORG GRAPH & AGENT',
    problem:
      'Unstructured corporate email threads bury cross-team deliverables, organizational bottlenecks, and schedule overlaps while exposing inbox tools to prompt injection and hallucinated tasks.',
    stack: [
      'Python / FastAPI',
      'Gemini 3.8 Flash',
      'NetworkX',
      'Pydantic v2',
      'HTML5 Canvas',
      'Docker / Cloud Run',
    ],
    details: [
      [
        'Key decision',
        'I isolate untrusted email bodies inside <UNTRUSTED_EMAIL_CONTENT> boundaries against prompt injection, enforce deterministic verbatim quote grounding so every extracted deliverable cites exact source text, and pair Gemini structured schemas with a local hybrid NLP fallback and a NetworkX temporal MultiDiGraph.',
      ],
      [
        'How I tested it',
        '6 automated pytest and FastAPI TestClient integration suites verify extraction completeness, NetworkX PageRank/betweenness/temporal cutoffs, iCal (.ics) and CSV exports, 5-tool ReAct agent traces, and verbatim quote-grounding checks (confirming exact spans pass and hallucinated quotes fail) across 59 graph nodes, 128 edges, and 4 schedule conflicts.',
      ],
      [
        'UX decision',
        'Four studio views separate cognitive load: an Email Extraction Studio with ✓ Grounded Quote badges, a HiDPI force-directed Org & Temporal Graph with a date-cutoff slider, a Productivity Hub (Table, Kanban, Gantt + overlap alerts), and a 5-tool AI Agent with one-click playbooks.',
      ],
    ],
    link: 'https://email-intelligence-system-249816165253.us-central1.run.app/',
    repo: 'https://github.com/rsm-wew068/email-intelligence-system',
    image: '/projects/nexusai-email.png',
    color: 'slate',
    cta: 'Explore the live project',
  },
  {
    title: 'AI Recruitment Hub',
    emoji: '🤝',
    badge: '6-Stage Hiring Pipeline',
    label: 'HR WORKFLOW AI · END-TO-END AUTOMATION',
    problem:
      'Recruiters juggle fragmented tools to draft job descriptions, parse PDF resumes, score candidate fit, coordinate interview links, and prepare formatted offer letters and contracts.',
    stack: [
      'Python / Shiny',
      'Llama-3 & Gemini 2.0',
      'PyMuPDF & FPDF',
      'DuckDB / Scikit-learn',
      'Calendly API',
      'Docker / Hugging Face',
    ],
    details: [
      [
        'Key decision',
        'A unified llm_connect dispatcher routes between self-hosted Llama-3 and Gemini 2.0 Flash with endpoint health checks, while a shared MCP JSON context store (with /tmp container mirroring) connects jobs, parsed resumes, interview schedules, and contract generation across 7 decoupled modules.',
      ],
      [
        'How I tested it',
        'Automated connection probes validate status codes, auth, and 20s timeouts; pydantic-evals and Scikit-learn/Statsmodels support factual checks and qualification correlation analysis; FPDF Latin-1 glyph sanitization prevents Unicode resume crashes during PDF contract generation.',
      ],
      [
        'UX decision',
        'A progressive 6-stage workspace guides recruiters from Job Creation and drag-and-drop Resume Fit Profiling to Calendly-injected Interview Invites, Plotly/Altair correlation charts, and editable in-browser Offer Letter previews with one-click PDF export.',
      ],
    ],
    link: 'https://huggingface.co/spaces/rsm-wew068/recruitment-ai-system',
    repo: 'https://github.com/rsm-wew068/ai-recruitment-hub',
    image: null,
    color: 'maple',
    cta: 'Explore the live project',
  },
];

export default function Home() {
  return <PortfolioStudio projects={projects} />;
}
