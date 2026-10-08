import Image from 'next/image';
import Journey from '@/components/Journey';
import SelectedWork from '@/components/SelectedWork';
const projects = [
  {
    title: 'BlindSpot AI', label: 'AI SYSTEMS · FAILURE INVESTIGATION',
    problem: 'Builders of driving controllers need reproducible ways to investigate failures around an obstructed crosswalk before changing a controller.',
    stack: ['Python', 'JavaScript', 'Three.js', 'NVIDIA Nemotron'],
    details: [
      ['Key decision', '[TODO] Name one architecture or design choice, the alternative you considered, and why you chose it.'],
      ['How I tested it', '[TODO] Describe what you checked, one failure case you found, and what you changed.'],
      ['UX decision', '[TODO] Describe the user’s goal, one interface or flow choice, where they could get stuck, and what you changed.'],
    ],
    link: 'https://github.com/rsm-wew068/blindspot-ai', image: null, color: 'pink', cta: 'Explore the project',
    visualLabel: 'Synthetic simulation · local prototype', visualText: 'Find the failure. Replay the evidence.',
  },
  {
    title: 'Live Suggestion Agent', label: 'REALTIME AI · CONVERSATION',
    problem: 'People in live conversations need relevant assistance before the moment passes, without losing the thread of the discussion.',
    stack: ['Next.js', 'Groq Whisper', 'GPT-OSS', 'Vercel'],
    details: [
      ['Key decision', '[TODO] Name one architecture or design choice, the alternative you considered, and why you chose it.'],
      ['How I tested it', '[TODO] Describe what you checked, one failure case you found, and what you changed.'],
      ['UX decision', '[TODO] Describe the user’s goal, one interface or flow choice, where they could get stuck, and what you changed.'],
    ],
    link: 'https://twinmind-live-suggestion-liart.vercel.app', image: '/projects/live-agent.jpg', color: 'green', cta: 'Explore the live project',
  },
  {
    title: 'Eric’s Auto Care', label: 'AI AGENT · SMALL BUSINESS',
    problem: 'Customers need service answers and appointment help while a small auto shop’s staff are busy with repairs.',
    stack: ['React', 'Python', 'Groq / LLaMA', 'Supabase'],
    details: [
      ['Key decision', '[TODO] Name one architecture or design choice, the alternative you considered, and why you chose it.'],
      ['How I tested it', '[TODO] Describe what you checked, one failure case you found, and what you changed.'],
      ['UX decision', '[TODO] Describe the user’s goal, one interface or flow choice, where they could get stuck, and what you changed.'],
    ],
    link: 'https://small-business-agent.vercel.app', image: '/projects/auto-care.jpg', color: 'pink', cta: 'Explore the live project',
  },
  {
    title: 'Muse.AI', label: 'MULTI-AGENT AI · MUSIC DISCOVERY',
    problem: 'Listeners who know the mood they want but not a song title need a way to turn a photo into relevant music discoveries.',
    stack: ['Python', 'LangGraph', 'Gemini', 'Spotify API'],
    details: [
      ['Key decision', '[TODO] Name one architecture or design choice, the alternative you considered, and why you chose it.'],
      ['How I tested it', '[TODO] Describe what you checked, one failure case you found, and what you changed.'],
      ['UX decision', '[TODO] Describe the user’s goal, one interface or flow choice, where they could get stuck, and what you changed.'],
    ],
    link: 'https://github.com/rsm-wew068/muse-ai', image: null, color: 'purple', cta: 'Explore the project',
    visualLabel: 'Photo-driven music discovery', visualText: 'From a moment to a soundtrack.',
  },
  {
    title: 'Email Intelligence', label: 'GRAPHRAG · WORKFLOWS',
    problem: 'People managing long email threads struggle to identify obligations, dependencies, and the tasks that need their attention.',
    stack: ['Python', 'LangGraph', 'Neo4j', 'FAISS', 'Streamlit'],
    details: [
      ['Key decision', '[TODO] Name one architecture or design choice, the alternative you considered, and why you chose it.'],
      ['How I tested it', '[TODO] Describe what you checked, one failure case you found, and what you changed.'],
      ['UX decision', '[TODO] Describe the user’s goal, one interface or flow choice, where they could get stuck, and what you changed.'],
    ],
    link: 'https://huggingface.co/spaces/rsm-wew068/automated-task-manager', image: '/projects/email-intelligence.jpg', color: 'purple', cta: 'Explore the live project',
  },
  {
    title: 'Experimentation & Customer Analytics', label: 'EXPERIMENTATION · COURSE CASE STUDIES',
    problem: 'Product teams need to distinguish incremental impact from predicted behavior when deciding which interventions to test and which customers need attention.',
    stack: ['Python', 'Scikit-learn', 'XGBoost', 'Jupyter'],
    details: [
      ['Method', 'A/B testing analysis, uplift modeling, return on marketing expenditure (ROME) analysis, and churn prediction on course case-study datasets. These are case-study analyses, not live experiments.'],
      ['What I found', '[TODO] Summarize a finding supported by the case-study data, the metric used, and a limitation.'],
      ['My role', '[TODO] Identify your contribution to this team project and distinguish it from your teammates’ work.'],
    ],
    link: 'https://github.com/rsm-wew068/mgta495-customer-analytics', image: null, visualLabel: 'Course case-study datasets', visualText: 'Test the hypothesis. Measure the difference.', color: 'green', cta: 'Explore the case studies',
  },
];
export default function Home() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="header"><a className="brand" href="#">rachel<span>wang</span><i>✳</i></a><nav aria-label="Main navigation"><a href="#story">My story</a><a href="#work">Selected work</a><a href="mailto:ygweihsien910622@gmail.com" className="nav-contact">Let’s talk <span>↗</span></a></nav></header>
    <main id="main">
      <section className="hero">
        <div className="hero-copy"><p className="eyebrow"><span className="small-star">✳</span> A little curiosity goes a long way</p><h1>People first.<br/>Then <em>possibility.</em></h1><p className="hero-intro">Hi, I’m Rachel—a product-minded builder and analyst. I turn user needs into AI systems, design experiments, and use evidence to decide what to build next.</p><a href="#story" className="primary-link">Here’s how I got here <span>↓</span></a><div className="hero-caption"><span>Builds and tests AI products, from experiment design to shipping</span><i>·</i><span>MS Business Analytics, UC San Diego</span></div></div>
        <div className="portrait-composition"><div className="portrait-frame"><Image src="/rachel-coast.jpg" alt="Rachel Wang" fill priority sizes="(max-width: 760px) 80vw, 420px" className="portrait"/><div className="portrait-label">Rachel Wang <span>Always asking why.</span></div></div><span className="orbit-label label-design">an eye for design <i>◐</i></span><span className="orbit-label label-people"><i>♡</i> a mind for people</span><span className="orbit-label label-data">a habit of asking why <i>↗</i></span><span className="portrait-star" aria-hidden="true">✳</span><svg className="scribble" viewBox="0 0 160 90" aria-hidden="true"><path d="M5 65 Q70 5 100 40 T145 30 M130 28 L148 28 L144 46"/></svg></div>
      </section>
      <section id="story" className="section story-section"><div className="section-heading"><p className="eyebrow">01 / The path that shaped me</p><h2>A winding path.<br/><em>A clear purpose.</em></h2><p>I’ve always been curious about what makes people care—and what makes a product worth coming back to. Each chapter gave me a different way to answer that question.</p></div><Journey/></section>
      <section className="approach section"><div><p className="eyebrow">02 / How I build</p><h2>The journey comes<br/>before the <em>pipeline.</em></h2><p className="approach-intro">I start with what someone wants to accomplish, where they get stuck, and what would make the next step feel effortless.</p><p>Then I work with AI collaborators to design the technical pipeline around that journey. Every feature has to earn its place in the user’s experience.</p></div><ol className="workflow"><li><span>01</span><div><h3>Understand the person</h3><p>Find the real need behind the request.</p></div><i>◎</i></li><li><span>02</span><div><h3>Map the whole journey</h3><p>Outline the experience, from first click to outcome.</p></div><i>↝</i></li><li><span>03</span><div><h3>Build with AI collaborators</h3><p>Design the system around the workflow.</p></div><i>✳</i></li><li><span>04</span><div><h3>Test. Learn. Make it better.</h3><p>Check whether it delivers for the people using it.</p></div><i>↗</i></li></ol></section>
      <section id="work" className="section work-section"><div className="work-heading"><div><p className="eyebrow">03 / Ideas made real</p><h2>Curiosity, <em>in practice.</em></h2></div><a href="https://github.com/rsm-wew068" target="_blank" rel="noreferrer">More on GitHub ↗</a></div><SelectedWork projects={projects}/></section>
      <section className="contact section"><p className="eyebrow">Something worth building?</p><h2>Let’s make people<br/><em>love using it.</em></h2><a href="https://www.linkedin.com/in/wei-hsien-wang-b21922230/" target="_blank" rel="noreferrer" className="primary-link">Start a conversation <span>↗</span></a><div className="contact-photo"><Image src="/golden-gate.jpg" alt="Golden Gate Bridge over San Francisco Bay" fill sizes="(max-width: 760px) 80vw, 330px"/></div></section>
    </main><footer><a className="brand" href="#">rachel<span>wang</span><i>✳</i></a><p>Made with curiosity. Built around people.</p><a href="https://github.com/rsm-wew068" target="_blank" rel="noreferrer">GitHub ↗</a></footer>
  </>;
}
