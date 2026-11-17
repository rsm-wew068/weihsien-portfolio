'use client';
import Icon from '@/components/Icon';
import { useState } from 'react';

export type ProjectData = {
  title: string;
  label: string;
  problem: string;
  stack: string[];
  details: string[][];
  link: string;
  repo: string;
  badge: string;
  emoji: string;
  image: string | null;
  color: string;
  cta: string;
  visualLabel?: string;
  visualText?: string;
};

type Props = {
  projects: ProjectData[];
  onOpenProject: (index: number, mode?: 'sim' | 'ui') => void;
  onNavigateRoom: (room: 'desk' | 'work' | 'story' | 'contact') => void;
};

const curiosityPaths = [
  {
    id: 'eval',
    prompt: '🧪 How I test AI with data',
    headline: 'Simulation baselines & 82+ automated checks',
    blurb:
      'Instead of trusting vibes, I pair deterministic Python physics with 100-run random baselines (BlindSpot AI), verbatim quote-grounding checks (NexusAI), and automated test suites.',
    projectIndex: 0,
    cta: 'Try BlindSpot AI Simulator →',
  },
  {
    id: 'ux',
    prompt: '🎨 Human-first AI UX',
    headline: 'Designed around human attention spans',
    blurb:
      'In live conversations, walls of text break eye contact—so Live Suggestion Agent shows 3 tiny cue cards and streams details only on click.',
    projectIndex: 1,
    cta: 'Test Live Cue Cards →',
  },
  {
    id: 'agents',
    prompt: '🕸️ Multi-tool agents & graphs',
    headline: 'Guardrails, verbatim grounding & org graphs',
    blurb:
      'From a Critic agent catching mood-clashing songs in Muse.AI to verbatim quote grounding, prompt-injection isolation, and NetworkX org graphs in NexusAI.',
    projectIndex: 4,
    cta: 'Inspect NexusAI Email Agent →',
  },
  {
    id: 'ship',
    prompt: '🔧 Practical business impact',
    headline: 'Stateless tools that handle messy user input',
    blurb:
      'Real customers forget required fields. Auto Care Assistant validates inputs across multiple turns before writing clean bookings to Supabase.',
    projectIndex: 2,
    cta: 'Play Auto Care Chat →',
  },
];

export default function StudioDesk({ projects, onOpenProject, onNavigateRoom }: Props) {
  const [selectedPath, setSelectedPath] = useState(0);
  const activeCuriosity = curiosityPaths[selectedPath];

  return (
    <div className="desk-bento">
      {/* Top Row: Hero Curiosity Matcher */}
      <section className="bento-tile hero-matcher-tile">
        <div className="tile-eyebrow-row">
          <span className="eyebrow">✦ STUDIO DESK · INTERACTIVE OVERVIEW</span>
          <button
            type="button"
            className="dice-btn"
            onClick={() => {
              const rand = Math.floor(Math.random() * projects.length);
              onOpenProject(rand, 'sim');
            }}
            title="Launch a random playable AI agent!"
          >
            🎲 Surprise me
          </button>
        </div>

        <h1 className="desk-headline">
          People first. Then <em>possibility.</em>
        </h1>
        <p className="desk-sub">
          Hi, I&apos;m Rachel—I design, build, and test agentic AI products. Pick what you&apos;re
          curious about below:
        </p>

        <div className="curiosity-pills" role="tablist" aria-label="Explore by angle">
          {curiosityPaths.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={selectedPath === idx}
              className={`curiosity-pill ${selectedPath === idx ? 'active' : ''}`}
              onClick={() => setSelectedPath(idx)}
            >
              {item.prompt}
            </button>
          ))}
        </div>

        <div className="curiosity-spotlight" key={activeCuriosity.id}>
          <div>
            <strong>{activeCuriosity.headline}</strong>
            <p>{activeCuriosity.blurb}</p>
          </div>
          <button
            type="button"
            className="spotlight-jump-btn"
            onClick={() => onOpenProject(activeCuriosity.projectIndex, 'sim')}
          >
            {activeCuriosity.cta}
          </button>
        </div>
      </section>

      {/* Middle Row: All 6 AI Agents Cartridge Rack */}
      <section className="bento-tile cartridge-rack-tile" aria-label="All 6 AI systems">
        <div className="rack-header">
          <div>
            <span className="eyebrow">01–06 · ALL SHIPPED AI AGENTS</span>
            <h2>Pick an agent cartridge to play &amp; inspect</h2>
          </div>
          <button
            type="button"
            className="rack-all-btn"
            onClick={() => onNavigateRoom('work')}
          >
            Open AI Work Lab <Icon name="arrow" />
          </button>
        </div>

        <div className="cartridge-grid">
          {projects.map((proj, idx) => (
            <button
              key={proj.title}
              type="button"
              className={`cartridge-card tone-${proj.color}`}
              onClick={() => onOpenProject(idx, 'sim')}
            >
              <div className="cartridge-top">
                <span className="cartridge-num">0{idx + 1}</span>
                <span className="cartridge-emoji" aria-hidden="true">
                  {proj.emoji}
                </span>
              </div>
              <strong>{proj.title}</strong>
              <span className="cartridge-badge">{proj.badge}</span>
              <span className="cartridge-play">▶ Play &amp; inspect</span>
            </button>
          ))}
        </div>
      </section>

      {/* Bottom Row: Story Teaser + California Postcard Teaser */}
      <div className="desk-row-bottom">
        <button
          type="button"
          className="bento-tile teaser-tile"
          onClick={() => onNavigateRoom('story')}
        >
          <span className="eyebrow">🧭 MY PATH &amp; PROCESS</span>
          <h3>
            5 chapters, 1 clear purpose: <em>journey before pipeline.</em>
          </h3>
          <p>
            Explore how Design → Psychology → Business → UCSD Business Analytics shaped how I build
            AI systems.
          </p>
          <span className="teaser-cta">
            Open Story &amp; Workflow Deck <Icon name="arrow" />
          </span>
        </button>

        <button
          type="button"
          className="bento-tile teaser-tile postcard-teaser"
          onClick={() => onNavigateRoom('contact')}
        >
          <span className="eyebrow">📮 SAN FRANCISCO / SAN DIEGO</span>
          <h3>
            Something worth building? <em>Send a postcard!</em>
          </h3>
          <p>
            Pick a conversation stamp, grab my email in one click, or connect on GitHub &amp;
            LinkedIn.
          </p>
          <span className="teaser-cta">
            Open Postcard Studio <Icon name="arrow" />
          </span>
        </button>
      </div>
    </div>
  );
}
