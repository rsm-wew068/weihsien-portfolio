import Image from 'next/image';
import Journey from '@/components/Journey';
import SelectedWork from '@/components/SelectedWork';
const projects = [
  {
    title: 'BlindSpot AI', label: 'AI SYSTEMS · FAILURE INVESTIGATION',
    problem: 'Builders of driving controllers need reproducible ways to investigate failures around an obstructed crosswalk before changing a controller.',
    stack: ['Python', 'JavaScript', 'Three.js', 'NVIDIA Nemotron'],
    details: [
      ["Key decision", "AI proposes bounded scenarios; deterministic physics computes outcomes for both controllers on identical inputs. This keeps failure evidence replayable instead of relying on an LLM’s judgment."],
      ["How I tested it", "A live two-round, 12-scenario smoke test exposed invalid second-round proposals. I added strict schema output and local validation; regression tests also cover collision detection and exact replay. This is prototype evidence, not road-safety validation."],
      ["UX decision", "Investigators need to compare the same moment across controllers. I preserve replay time when switching controllers, offer 2D and 3D views, and keep a 2D fallback when WebGL fails."],
    ],
    link: 'https://github.com/rsm-wew068/blindspot-ai', image: '/projects/blindspot.png', color: 'pink', cta: 'Explore the project',
    visualLabel: 'Synthetic simulation · local prototype', visualText: 'Find the failure. Replay the evidence.',
  },
  {
    title: 'Live Suggestion Agent', label: 'REALTIME AI · CONVERSATION',
    problem: 'People in live conversations need relevant assistance before the moment passes, without losing the thread of the discussion.',
    stack: ['Next.js', 'Groq Whisper', 'GPT-OSS', 'Vercel'],
    details: [
      ["Key decision", "I use structured JSON suggestions and short recent-context windows, with longer context for detailed answers. Two-layer deduplication reduces repetition without another model call, at the cost of occasionally filtering a valid rephrasing."],
      ["How I tested it", "The repo includes 43 tests across API, UI, recording, and client behavior. Malformed JSON and suggestions missing a type or preview are covered; parsing falls back to an empty list and filters incomplete cards."],
      ["UX decision", "People need help while staying in the conversation. I show up to three useful previews, then stream a detailed answer only when a card is selected, keeping extra explanation out of the immediate flow."],
    ],
    link: 'https://twinmind-live-suggestion-liart.vercel.app', image: '/projects/live-agent.jpg', color: 'green', cta: 'Explore the live project',
  },
  {
    title: 'Auto Care Assistant', label: 'AI AGENT · SMALL BUSINESS',
    problem: 'Customers need service answers and appointment help while a small auto shop’s staff are busy with repairs.',
    stack: ['React', 'Python', 'Groq / LLaMA', 'Supabase'],
    details: [
      ["Key decision", "I keep conversation history in the client and use stateless Python functions, while saving bookings and inquiries in Supabase. This separates temporary chat context from durable customer requests without server-side sessions."],
      ["How I tested it", "Tool tests cover missing booking fields, blank values, incomplete inquiries, and unknown tools. Missing information returns a readable follow-up instead of crashing. Date and phone-format validation remain future improvements."],
      ["UX decision", "A customer trying to book may not know every required detail upfront. The mobile chat collects information over multiple turns and asks for missing fields before submitting the appointment."],
    ],
    link: 'https://small-business-agent.vercel.app', image: '/projects/auto-care.jpg', color: 'pink', cta: 'Explore the live project',
  },
  {
    title: 'Muse.AI', label: 'MULTI-AGENT AI · MUSIC DISCOVERY',
    problem: 'Listeners who know the mood they want but not a song title need a way to turn a photo into relevant music discoveries.',
    stack: ['Python', 'LangGraph', 'Gemini', 'Spotify API'],
    details: [
      ["Key decision", "I retrieve real Spotify candidates, then use a separate curator to rank them against the photo’s narrative. This adds a context check beyond keyword search and constrains recommendations to retrieved track IDs."],
      ["How I tested it", "Validation compares candidates with the scene narrative; the README illustrates the mismatch of an aggressive track with a sleeping-baby photo. I added a critic stage and candidate-ID matching. The repo does not publish a measured quality benchmark or automated test results."],
      ["UX decision", "A listener may like the scene but want a different energy. Conversational refinement reuses the photo context, so “make it more upbeat” triggers another search without making them upload the image again."],
    ],
    link: 'https://github.com/rsm-wew068/muse-ai', image: null, color: 'purple', cta: 'Explore the project',
    visualLabel: 'Photo-driven music discovery', visualText: 'From a moment to a soundtrack.',
  },
  {
    title: 'Email Intelligence', label: 'GRAPHRAG · WORKFLOWS',
    problem: 'People managing long email threads struggle to identify obligations, dependencies, and the tasks that need their attention.',
    stack: ['Python', 'LangGraph', 'Neo4j', 'FAISS', 'Streamlit'],
    details: [
      ["Key decision", "I combine FAISS semantic retrieval with Neo4j relationship expansion, while PostgreSQL stores task records. This supports questions about people and dependencies that isolated text matches can miss, with the added complexity of dual storage."],
      ["How I tested it", "I built RAGAS answer assessment and LangSmith tracing into the workflow. Invalid extraction JSON pauses for human correction; the calendar also handles validated JSON wrappers and falls back to received dates when deadlines are missing. No benchmark scores are published."],
      ["UX decision", "Users need to check an obligation before treating it as a task. I show the source email beside editable extraction data before storage, and open the calendar at the earliest task deadline so historical emails do not appear in an empty current-month view."],
    ],
    link: 'https://huggingface.co/spaces/rsm-wew068/automated-task-manager', image: '/projects/email-intelligence.jpg', color: 'purple', cta: 'Explore the live project',
  },
  {
    title: 'Experimentation & Customer Analytics', label: 'EXPERIMENTATION · COURSE CASE STUDIES',
    problem: 'Product teams need to distinguish incremental impact from predicted behavior when deciding which interventions to test and which customers need attention.',
    stack: ['Python', 'Scikit-learn', 'XGBoost', 'Jupyter'],
    details: [
      ['Method', 'A/B testing analysis, uplift modeling, return on marketing expenditure (ROME) analysis, and churn prediction on course case-study datasets. These are case-study analyses, not live experiments.'],
      ['What I found', "In the TZ Gaming case, the best targeting choice changed with the budget constraint: logistic regression led projected profit when selecting prospects, while the proprietary model led when purchasing exactly 20 million impressions. I compared profit and ROME; these projections depend on the case’s conversion, lifetime-value, and cost assumptions."],
      ['My role', "I completed the data preparation, modeling, evaluation, and interpretation presented here, connecting treatment-effect analysis, profitability comparisons, and churn predictions to product decisions."],
    ],
    link: 'https://github.com/rsm-wew068/mgta495-customer-analytics', image: null, visualLabel: 'Course case-study datasets', visualText: 'Test the hypothesis. Measure the difference.', color: 'green', cta: 'Explore the case studies',
  },
];
export default function Home() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="header"><a className="brand" href="#">Rachel<span>Wang</span><i>✳</i></a><nav aria-label="Main navigation"><a href="#work">Selected work</a><a href="#story">My story</a><a href="mailto:ygweihsien910622@gmail.com" className="nav-contact">Let’s talk <span>↗</span></a></nav></header>
    <main id="main">
      <section className="hero">
        <div className="hero-copy"><p className="eyebrow"><span className="small-star">✳</span> A little curiosity goes a long way</p><h1>People first.<br/>Then <em>possibility.</em></h1><p className="hero-subtitle">Builds and tests agentic AI products, from experiment design to shipping</p><p className="hero-intro">Hi, I'm Rachel, a product-minded builder and analyst. I turn user needs into AI systems and use evidence to decide what to build next.</p><div className="hero-actions"><a href="#work" className="primary-link">See my work <span aria-hidden="true">↓</span></a><a href="#story" className="hero-story-link">Here's how I got here <span aria-hidden="true">↗</span></a></div><div className="hero-caption"><span>MS Business Analytics, UC San Diego</span></div></div>
        <div className="portrait-composition"><div className="portrait-frame"><Image src="/rachel-coast.jpg" alt="Rachel Wang" fill priority sizes="(max-width: 760px) 80vw, 420px" className="portrait"/><div className="portrait-label">Rachel Wang <span>Always asking why.</span></div></div><span className="orbit-label label-design">an eye for design <i>◐</i></span><span className="orbit-label label-people"><i>♡</i> a mind for people</span><span className="orbit-label label-data">a habit of asking why <i>↗</i></span><span className="portrait-star" aria-hidden="true">✳</span><svg className="scribble" viewBox="0 0 160 90" aria-hidden="true"><path d="M5 65 Q70 5 100 40 T145 30 M130 28 L148 28 L144 46"/></svg></div>
      </section>
      <section id="work" className="section work-section"><div className="work-heading"><div><p className="eyebrow">01 / Ideas made real</p><h2>Curiosity, <em>in practice.</em></h2></div><a href="https://github.com/rsm-wew068" target="_blank" rel="noreferrer">More on GitHub ↗</a></div><SelectedWork projects={projects}/></section>
      <section id="story" className="section story-section"><div className="section-heading"><p className="eyebrow">02 / The path that shaped me</p><h2>A winding path.<br/><em>A clear purpose.</em></h2><p>I’ve always been curious about what makes people care, and what makes a product worth coming back to. Each chapter gave me a different way to answer that question.</p></div><Journey/></section>
      <section className="approach section"><div><p className="eyebrow">03 / How I build</p><h2>The journey comes<br/>before the <em>pipeline.</em></h2><p className="approach-intro">I start with what someone wants to accomplish, where they get stuck, and what would make the next step feel effortless.</p><p>I design the workflow and architecture, then build it with AI tools. Every feature has to earn its place in the user’s experience.</p></div><ol className="workflow"><li><span>01</span><div><h3>Understand the person</h3><p>Find the real need behind the request.</p></div><i>◎</i></li><li><span>02</span><div><h3>Map the whole journey</h3><p>Outline the experience, from first click to outcome.</p></div><i>↝</i></li><li><span>03</span><div><h3>Build with AI tools</h3><p>Implement the architecture I designed around the workflow.</p></div><i>✳</i></li><li><span>04</span><div><h3>Test. Learn. Make it better.</h3><p>Check whether it delivers for the people using it.</p></div><i>↗</i></li></ol></section>
      <section className="contact section"><p className="eyebrow">Something worth building?</p><h2>Let’s <em>connect!</em></h2><div className="contact-info"><p>ygweihsien910622@gmail.com</p><p>linkedin.com/in/wei-hsien-wang-b21922230</p><p>github.com/rsm-wew068</p></div><div className="contact-photo"><Image src="/golden-gate.jpg" alt="Golden Gate Bridge over San Francisco Bay" fill sizes="(max-width: 760px) 80vw, 330px"/></div></section>
    </main><footer><a className="brand" href="#">Rachel<span>Wang</span><i>✳</i></a><p>Made with curiosity. Built around people.</p><a href="https://github.com/rsm-wew068" target="_blank" rel="noreferrer">GitHub ↗</a></footer>
  </>;
}
