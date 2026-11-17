'use client';
import Icon from '@/components/Icon';
import type { ProjectData } from '@/components/StudioDesk';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type MediaMode = 'sim' | 'ui' | 'flow';

const flowNodes: Record<string, { step: string; role: string }[]> = {
  'BlindSpot AI': [
    { step: '01 · Propose', role: 'Nemotron Adaptive Scenario Agent' },
    { step: '02 · Simulate', role: 'Deterministic Python Physics' },
    { step: '03 · Compare', role: 'Paired Controller Evaluation' },
    { step: '04 · Inspect', role: 'Synced 2D & Three.js Replay' },
  ],
  'Live Suggestion Agent': [
    { step: '01 · Listen', role: 'Groq Whisper Realtime Audio' },
    { step: '02 · Deduplicate', role: '2-Layer Repetition Filter' },
    { step: '03 · Preview', role: '3 Glanceable JSON Cue Cards' },
    { step: '04 · Stream', role: 'On-Demand Detailed Answer' },
  ],
  'Auto Care Assistant': [
    { step: '01 · Converse', role: 'Client-Side Chat Context' },
    { step: '02 · Validate', role: 'Missing-Field Tool Guard' },
    { step: '03 · Execute', role: 'Stateless Python Functions' },
    { step: '04 · Persist', role: 'Supabase Durable Bookings' },
  ],
  'Muse.AI': [
    { step: '01 · Interpret', role: 'Gemini Photo Scene Narrative' },
    { step: '02 · Retrieve', role: 'Real Spotify Candidate IDs' },
    { step: '03 · Critique', role: 'Mood-Mismatch Critic Agent' },
    { step: '04 · Refine', role: 'Multi-Turn Vibe Adjustment' },
  ],
  'NexusAI Email Intelligence': [
    { step: '01 · Isolate & Ground', role: '<UNTRUSTED_EMAIL> + Quote Verifier' },
    { step: '02 · Dual Extract', role: 'Gemini 3.8 Flash + Local NLP Engine' },
    { step: '03 · Org Graph', role: 'NetworkX PageRank & Temporal Edges' },
    { step: '04 · Schedule & Act', role: 'Conflict Alerts + 5-Tool ReAct Agent' },
  ],
  'AI Recruitment Hub': [
    { step: '01 · Parse & Match', role: 'PyMuPDF Resume + Fit Correlation' },
    { step: '02 · Route LLM', role: 'Dual Llama-3 & Gemini 2.0 Wrapper' },
    { step: '03 · Sync State', role: 'Shared MCP JSON Context Store' },
    { step: '04 · Schedule & Sign', role: 'Calendly Invite + FPDF Offer Letter' },
  ],
};

const liveMoments = [
  {
    speaker: '🎙️ Product Sync: "Can we still launch Friday if the API schema changes today?"',
    droppedDup: 'Ask about Friday launch date (filtered duplicate)',
    cards: [
      {
        type: 'RISK CHECK',
        preview: 'Scope freeze + fallback flag',
        stream:
          'Lock v1 endpoints behind a feature flag today so Friday launch stays safe while schema v2 tests in staging.',
      },
      {
        type: 'QUESTION',
        preview: 'Which client breaks first?',
        stream:
          'Ask whether mobile or web consumes the changed field—if web-only, ship a backward-compatible adapter.',
      },
      {
        type: 'NEXT STEP',
        preview: 'Timebox 2pm contract test',
        stream:
          'Propose a 15-minute contract check at 2pm; if tests fail, keep the existing payload for Friday.',
      },
    ],
  },
  {
    speaker: '🎙️ User Research: "I stopped checking the dashboard because every alert looked urgent."',
    droppedDup: 'Ask why they stopped checking alerts (filtered duplicate)',
    cards: [
      {
        type: 'DIG DEEPER',
        preview: 'Last false-alarm story?',
        stream:
          'Ask them to walk through the last alert they ignored—what signal told them it was noise?',
      },
      {
        type: 'WORKFLOW',
        preview: 'Current workaround tool?',
        stream: 'Ask what Slack channel or log view they actually trust when an incident happens.',
      },
      {
        type: 'HYPOTHESIS',
        preview: 'Top-3 digest vs raw stream',
        stream: 'Frame experiment: group related alerts and surface only top 3 ranked by blast radius.',
      },
    ],
  },
];

const museScenes = [
  {
    emoji: '👶',
    label: 'Sleeping Baby',
    narrative: 'Soft afternoon light, quiet nursery, calm breathing.',
    tracks: [
      {
        title: 'Enter Baby (Hard Rock Live)',
        bpm: '168 BPM',
        upbeatTitle: 'Enter Baby (Hard Rock Live)',
        match: false,
        reason: 'Keyword match on "Baby", but heavy guitars clash with peaceful nursery.',
      },
      {
        title: 'Warm Flannel Lullaby',
        bpm: '64 BPM',
        upbeatTitle: 'Sunny Stroller Acoustic',
        upbeatBpm: '96 BPM',
        match: true,
        reason: 'Gentle acoustic texture fits calm scene mood (97% fit).',
      },
      {
        title: 'Soft Rain Piano Sketch',
        bpm: '70 BPM',
        upbeatTitle: 'Morning Playroom Marimba',
        upbeatBpm: '104 BPM',
        match: true,
        reason: 'Warm dynamics preserve cozy atmosphere (94% fit).',
      },
    ],
  },
  {
    emoji: '🌊',
    label: 'Coast Sunset',
    narrative: 'Golden Gate breeze, open highway, warm sunset glow.',
    tracks: [
      {
        title: 'Golden Hour Cruisers',
        bpm: '108 BPM',
        upbeatTitle: 'PCH Convertible Synthwave',
        upbeatBpm: '126 BPM',
        match: true,
        reason: 'Breezy indie groove fits coastal motion & warm lighting (96% fit).',
      },
      {
        title: 'Golden Gate (Industrial Alarm Mix)',
        bpm: '150 BPM',
        upbeatTitle: 'Golden Gate (Industrial Alarm Mix)',
        match: false,
        reason: 'Location title matched, harsh alarm synths ruin sunset vibe.',
      },
      {
        title: 'Pacific Horizon',
        bpm: '102 BPM',
        upbeatTitle: 'Malibu Sunburst Funk',
        upbeatBpm: '122 BPM',
        match: true,
        reason: 'Warm rhythm complements open-road scenery (92% fit).',
      },
    ],
  },
];

type Props = {
  projects: ProjectData[];
  activeIndex: number;
  onSelectProject: (idx: number) => void;
  initialMode?: MediaMode;
};

export default function WorkLab({
  projects,
  activeIndex,
  onSelectProject,
  initialMode = 'sim',
}: Props) {
  const [mediaMode, setMediaMode] = useState<MediaMode>(initialMode);
  const project = projects[activeIndex] || projects[0];
  const nodes = flowNodes[project.title] || [];

  // Mini-simulator states
  const [controller, setController] = useState<'reactive' | 'caution'>('reactive');
  const [pedSpeed, setPedSpeed] = useState(7);
  const [simState, setSimState] = useState<'idle' | 'running' | 'done'>('idle');
  const [progress, setProgress] = useState(0);

  const [momentIdx, setMomentIdx] = useState(0);
  const [selectedCue, setSelectedCue] = useState<number | null>(null);
  const [streamedCue, setStreamedCue] = useState('');

  const [bookingStep, setBookingStep] = useState<0 | 1 | 2>(0);

  const [sceneIdx, setSceneIdx] = useState(0);
  const [criticRan, setCriticRan] = useState(false);
  const [upbeatShift, setUpbeatShift] = useState(false);

  const [nexusTool, setNexusTool] = useState<'extract' | 'graph' | 'schedule'>('extract');
  const [nexusActionRan, setNexusActionRan] = useState(false);

  const [hireStage, setHireStage] = useState<'match' | 'schedule' | 'contract'>('match');
  const [pdfGenerated, setPdfGenerated] = useState(false);

  useEffect(() => {
    setMediaMode(initialMode);
  }, [initialMode, activeIndex]);

  useEffect(() => {
    if (simState !== 'running') return;
    let frame = 0;
    const timer = setInterval(() => {
      frame += 4;
      if (frame >= 100) {
        setProgress(100);
        setSimState('done');
        clearInterval(timer);
      } else {
        setProgress(frame);
      }
    }, 26);
    return () => clearInterval(timer);
  }, [simState]);

  useEffect(() => {
    if (selectedCue === null) {
      setStreamedCue('');
      return;
    }
    const full = liveMoments[momentIdx].cards[selectedCue].stream;
    let i = 0;
    setStreamedCue('');
    const timer = setInterval(() => {
      i += 4;
      if (i >= full.length) {
        setStreamedCue(full);
        clearInterval(timer);
      } else {
        setStreamedCue(full.slice(0, i));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [selectedCue, momentIdx]);

  const isCollision = controller === 'reactive' && pedSpeed >= 5;
  const carLeft =
    controller === 'reactive'
      ? Math.min(progress * 0.72, isCollision ? 64 : 56)
      : Math.min(progress * 0.52, 46);
  const pedTop = Math.min(12 + (progress * pedSpeed) / 11, 66);

  return (
    <div className="worklab-shell">
      {/* Top 5-Agent Selector Rail */}
      <div className="agent-rail" role="tablist" aria-label="Select AI system">
        {projects.map((item, idx) => (
          <button
            key={item.title}
            type="button"
            role="tab"
            aria-selected={activeIndex === idx}
            className={`rail-pill ${activeIndex === idx ? 'active' : ''}`}
            onClick={() => onSelectProject(idx)}
          >
            <span className="rail-num">0{idx + 1}</span>
            <span>
              {item.emoji} {item.title}
            </span>
          </button>
        ))}
      </div>

      {/* Main Active Project Stage */}
      <article className="project-stage-card" key={project.title}>
        <div className="stage-header">
          <div>
            <p className="eyebrow">
              0{activeIndex + 1} / {project.label} · {project.badge}
            </p>
            <h1 className="stage-title">{project.title}</h1>
            <ul className="stack-tags" aria-label={`${project.title} tech stack`}>
              {project.stack.map(tag => (
                <li key={tag} className="stack-tag">
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <div className="stage-actions">
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="primary-link stage-cta"
            >
              {project.cta} <Icon name="arrow" />
            </a>
            {project.repo !== project.link && (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="repo-pill-btn"
              >
                GitHub Source <Icon name="arrow" />
              </a>
            )}
          </div>
        </div>

        {/* 3-Mode Interactive Stage Switcher */}
        <div className="media-stage-box">
          <div className="media-mode-bar" role="tablist" aria-label="Project view mode">
            <button
              type="button"
              role="tab"
              aria-selected={mediaMode === 'sim'}
              className={`media-mode-btn ${mediaMode === 'sim' ? 'active' : ''}`}
              onClick={() => setMediaMode('sim')}
            >
              🎮 Interactive Sandbox
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={mediaMode === 'ui'}
              className={`media-mode-btn ${mediaMode === 'ui' ? 'active' : ''}`}
              onClick={() => setMediaMode('ui')}
            >
              📸 Real Interface
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={mediaMode === 'flow'}
              className={`media-mode-btn ${mediaMode === 'flow' ? 'active' : ''}`}
              onClick={() => setMediaMode('flow')}
            >
              ⚡ System Pipeline
            </button>
          </div>

          {/* Mode 1: Interactive Sandbox for Active Agent */}
          {mediaMode === 'sim' && (
            <div className="stage-sim-content">
              {activeIndex === 0 && (
                <div className="arcade-body">
                  <div className="sim-controls">
                    <span className="sim-label">1. Driving Controller:</span>
                    <div className="sim-toggle-row">
                      <button
                        type="button"
                        className={`sim-chip ${controller === 'reactive' ? 'active-danger' : ''}`}
                        onClick={() => {
                          setController('reactive');
                          setSimState('idle');
                          setProgress(0);
                        }}
                      >
                        ⚡ Reactive (Brakes late)
                      </button>
                      <button
                        type="button"
                        className={`sim-chip ${controller === 'caution' ? 'active-safe' : ''}`}
                        onClick={() => {
                          setController('caution');
                          setSimState('idle');
                          setProgress(0);
                        }}
                      >
                        🛡️ Caution-Aware (Slows early)
                      </button>
                    </div>
                    <label className="sim-label" htmlFor="ped-slider">
                      2. Pedestrian Speed: <strong>{pedSpeed} ft/s</strong>
                    </label>
                    <input
                      id="ped-slider"
                      type="range"
                      min={3}
                      max={10}
                      value={pedSpeed}
                      onChange={e => {
                        setPedSpeed(Number(e.target.value));
                        setSimState('idle');
                        setProgress(0);
                      }}
                      className="sim-slider"
                    />
                    <button
                      type="button"
                      className="sim-run-btn"
                      onClick={() => {
                        setProgress(0);
                        setSimState('running');
                      }}
                    >
                      {simState === 'running' ? 'Simulating...' : '▶ Run Crosswalk Scenario'}
                    </button>
                  </div>

                  <div className="sim-stage">
                    <div className="road-lane">
                      <div className="road-dashes" />
                      <div className="parked-truck">🚚 Parked Truck (Blind Zone)</div>
                      <div className="crosswalk-stripes" />
                      <div className="sim-pedestrian" style={{ top: `${pedTop}%` }}>
                        🚶‍♀️
                      </div>
                      <div className="sim-car" style={{ left: `${carLeft}%` }}>
                        🚗
                        {controller === 'caution' && progress > 25 && (
                          <span className="brake-badge">BRAKING EARLY</span>
                        )}
                      </div>
                      {simState === 'done' && isCollision && (
                        <div className="impact-marker">💥 IMPACT!</div>
                      )}
                    </div>
                    <div className="sim-telemetry">
                      {simState === 'idle' && (
                        <p>
                          Click <strong>Run Crosswalk Scenario</strong> to evaluate paired
                          controllers on identical physics inputs.
                        </p>
                      )}
                      {simState === 'running' && (
                        <p>Running deterministic Python trajectory step...</p>
                      )}
                      {simState === 'done' && isCollision && (
                        <p className="telemetry-crash">
                          <strong>💥 Collision @ 14.2 mph:</strong> Reactive waited for line-of-sight
                          past the truck. BlindSpot AI found <strong>7 collisions</strong> in 12 AI
                          runs vs 0.85 random!
                        </p>
                      )}
                      {simState === 'done' && !isCollision && (
                        <p className="telemetry-safe">
                          <strong>✅ Safe Stop (4.1m clearance):</strong>{' '}
                          {controller === 'caution'
                            ? 'Caution-Aware slowed before the obstructed crosswalk opened!'
                            : 'Slow walking speed avoided collision—push speed ≥ 5 ft/s to trigger the blind spot!'}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {activeIndex === 1 && (
                <div className="arcade-body">
                  <div className="sim-controls">
                    <span className="sim-label">1. Live Audio Transcript Moment:</span>
                    <div className="sim-toggle-row">
                      <button
                        type="button"
                        className={`sim-chip ${momentIdx === 0 ? 'active-safe' : ''}`}
                        onClick={() => {
                          setMomentIdx(0);
                          setSelectedCue(null);
                        }}
                      >
                        🗓️ Launch Risk Sync
                      </button>
                      <button
                        type="button"
                        className={`sim-chip ${momentIdx === 1 ? 'active-safe' : ''}`}
                        onClick={() => {
                          setMomentIdx(1);
                          setSelectedCue(null);
                        }}
                      >
                        🔍 User Interview
                      </button>
                    </div>
                    <div className="muse-narrative">{liveMoments[momentIdx].speaker}</div>
                    <div className="dedup-pill">
                      🧹 <strong>2-Layer Dedup:</strong> Filtered{' '}
                      <em>&ldquo;{liveMoments[momentIdx].droppedDup}&rdquo;</em>
                    </div>
                  </div>

                  <div className="live-cards-stage">
                    <span className="sim-label">
                      2. Click any glanceable cue card to stream full response:
                    </span>
                    <div className="cue-cards-grid">
                      {liveMoments[momentIdx].cards.map((card, i) => (
                        <button
                          key={card.preview}
                          type="button"
                          className={`cue-card ${selectedCue === i ? 'cue-active' : ''}`}
                          onClick={() => setSelectedCue(i)}
                        >
                          <span className="cue-type">{card.type}</span>
                          <strong>{card.preview}</strong>
                        </button>
                      ))}
                    </div>
                    <div className="sim-telemetry">
                      {selectedCue === null ? (
                        <p>
                          Only 3 compact previews appear live so you stay present.{' '}
                          <strong>Click a card above</strong> to stream details on demand!
                        </p>
                      ) : (
                        <p>
                          <strong>⚡ Streaming:</strong> {streamedCue}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {activeIndex === 2 && (
                <div className="arcade-body">
                  <div className="sim-controls">
                    <span className="sim-label">Multi-Turn Stateless Booking Flow:</span>
                    <div className="console-chip-list">
                      <button
                        type="button"
                        className={`sim-chip ${bookingStep === 0 ? 'active-safe' : ''}`}
                        onClick={() => setBookingStep(0)}
                      >
                        1️⃣ Customer sends incomplete message
                      </button>
                      <button
                        type="button"
                        className={`sim-chip ${bookingStep === 1 ? 'active-safe' : ''}`}
                        onClick={() => setBookingStep(1)}
                      >
                        2️⃣ Python tool catches missing vehicle &amp; phone
                      </button>
                      <button
                        type="button"
                        className={`sim-chip ${bookingStep === 2 ? 'active-safe' : ''}`}
                        onClick={() => setBookingStep(2)}
                      >
                        3️⃣ Customer replies → Saved to Supabase!
                      </button>
                    </div>
                  </div>

                  <div className="chat-sim-box">
                    <div className="chat-bubble user-bubble">
                      &ldquo;Hi! My brakes squeak when stopping. Can I come in tomorrow at
                      10am?&rdquo;
                    </div>
                    {bookingStep >= 1 && (
                      <div className="chat-bubble agent-bubble">
                        <span className="tool-status-tag">
                          ⚠️ book_appointment() → Missing: vehicle_info, phone
                        </span>
                        I can get you in tomorrow at 10:00 AM! What <strong>car make/model</strong>{' '}
                        do you drive, and what&apos;s your <strong>phone number</strong>?
                      </div>
                    )}
                    {bookingStep >= 2 && (
                      <>
                        <div className="chat-bubble user-bubble">
                          &ldquo;2021 Honda Civic, 858-555-0192!&rdquo;
                        </div>
                        <div className="chat-bubble agent-bubble saved-bubble">
                          <span className="tool-status-tag ok">
                            ✅ Supabase INSERT confirmed · Booking saved
                          </span>
                          All set! 2021 Honda Civic brake check · Tomorrow 10:00 AM.
                        </div>
                      </>
                    )}
                    {bookingStep < 2 && (
                      <button
                        type="button"
                        className="sim-run-btn"
                        onClick={() => setBookingStep(s => (s === 0 ? 1 : 2))}
                      >
                        {bookingStep === 0
                          ? '▶ Run Missing-Field Check'
                          : '▶ Supply Info & Save to Supabase'}
                      </button>
                    )}
                  </div>
                </div>
              )}

              {activeIndex === 3 && (
                <div className="arcade-body">
                  <div className="sim-controls">
                    <span className="sim-label">1. Pick a Photo Scene:</span>
                    <div className="sim-toggle-row">
                      {museScenes.map((s, idx) => (
                        <button
                          key={s.label}
                          type="button"
                          className={`sim-chip ${sceneIdx === idx ? 'active-safe' : ''}`}
                          onClick={() => {
                            setSceneIdx(idx);
                            setCriticRan(false);
                            setUpbeatShift(false);
                          }}
                        >
                          {s.emoji} {s.label}
                        </button>
                      ))}
                    </div>
                    <p className="muse-narrative">
                      <strong>Scene Narrative:</strong> &ldquo;{museScenes[sceneIdx].narrative}&rdquo;
                      {upbeatShift ? ' + "Make it more upbeat!"' : ''}
                    </p>
                    <div className="sim-toggle-row">
                      <button
                        type="button"
                        className="sim-run-btn"
                        onClick={() => setCriticRan(v => !v)}
                      >
                        {criticRan ? '↺ Reset Search' : '🔍 Run Critic Agent'}
                      </button>
                      <button
                        type="button"
                        className={`sim-chip ${upbeatShift ? 'active-safe' : ''}`}
                        onClick={() => {
                          setUpbeatShift(v => !v);
                          setCriticRan(true);
                        }}
                      >
                        ⚡ &ldquo;Make it more upbeat&rdquo;
                      </button>
                    </div>
                  </div>

                  <div className="muse-results">
                    {museScenes[sceneIdx].tracks.map(track => {
                      const title =
                        upbeatShift && track.match && track.upbeatTitle
                          ? track.upbeatTitle
                          : track.title;
                      const bpm =
                        upbeatShift && track.match && track.upbeatBpm
                          ? track.upbeatBpm
                          : track.bpm;
                      return (
                        <div
                          key={track.title}
                          className={`muse-track ${
                            criticRan ? (track.match ? 'track-approved' : 'track-rejected') : ''
                          }`}
                        >
                          <div className="muse-track-main">
                            <strong>
                              {criticRan ? (track.match ? '✅ ' : '❌ ') : '🎵 '}
                              {title}
                            </strong>
                            <span className="track-bpm">{bpm}</span>
                          </div>
                          {criticRan && <p className="muse-reason">{track.reason}</p>}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {activeIndex === 4 && (
                <div className="arcade-body">
                  <div className="sim-controls">
                    <span className="sim-label">
                      Run NexusAI Autonomous Agent Tools (59 Nodes · 20 Tasks):
                    </span>
                    <div className="console-chip-list">
                      <button
                        type="button"
                        className={`sim-chip ${nexusTool === 'extract' ? 'active-safe' : ''}`}
                        onClick={() => {
                          setNexusTool('extract');
                          setNexusActionRan(false);
                        }}
                      >
                        🛡️ <code>extract_email_intelligence()</code>
                      </button>
                      <button
                        type="button"
                        className={`sim-chip ${nexusTool === 'graph' ? 'active-safe' : ''}`}
                        onClick={() => {
                          setNexusTool('graph');
                          setNexusActionRan(false);
                        }}
                      >
                        🕸️ <code>query_organizational_graph()</code>
                      </button>
                      <button
                        type="button"
                        className={`sim-chip ${nexusTool === 'schedule' ? 'active-safe' : ''}`}
                        onClick={() => {
                          setNexusTool('schedule');
                          setNexusActionRan(false);
                        }}
                      >
                        📅 <code>list_and_filter_tasks()</code> + <code>export(.ics)</code>
                      </button>
                    </div>
                  </div>

                  <div className="graphrag-stage">
                    {nexusTool === 'extract' && (
                      <div className="graph-review-card">
                        <div className="dedup-pill">
                          🛡️ <strong>&lt;UNTRUSTED_EMAIL_CONTENT&gt;:</strong> Prompt-injection
                          attempt inside raw <code>.eml</code> neutralized as inert data.
                        </div>
                        <div className="graph-edges">
                          <span>✓ Grounded Quote:</span> &ldquo;Finalize us-east-1 cutover checklist
                          before Friday&apos;s security sign-off&rdquo; · Urgency: <span>9/10</span>
                        </div>
                        <button
                          type="button"
                          className="sim-run-btn"
                          onClick={() => setNexusActionRan(v => !v)}
                        >
                          {nexusActionRan
                            ? '❌ Ungrounded Hallucinated Task Blocked by verify_evidence_quote()!'
                            : '▶ Test Hallucinated Quote Guardrail'}
                        </button>
                      </div>
                    )}

                    {nexusTool === 'graph' && (
                      <div className="graph-review-card">
                        <div className="graph-edges">
                          NetworkX MultiDiGraph: <span>59 Nodes</span> · <span>128 Edges</span> ·{' '}
                          <span>32 Entities</span> (10 People, 13 Orgs, 9 Locations)
                        </div>
                        <p className="muse-narrative">
                          <strong>PageRank &amp; Betweenness:</strong> Identified cross-team
                          bottleneck bridge connecting Engineering ↔ Legal ↔ Cloud Ops.
                        </p>
                        <button
                          type="button"
                          className="sim-run-btn"
                          onClick={() => setNexusActionRan(v => !v)}
                        >
                          {nexusActionRan
                            ? '⏱️ Temporal Cutoff Applied: Filtered to Active Sprint Window'
                            : '▶ Apply Temporal Evolution Cutoff Slider'}
                        </button>
                      </div>
                    )}

                    {nexusTool === 'schedule' && (
                      <div className="graph-review-card">
                        <div className="graph-edges">
                          <span>20 Deliverables</span> (5 Critical) ·{' '}
                          <span>⚠️ 4 Schedule Overlap Conflicts Detected</span>
                        </div>
                        <p className="muse-narrative">
                          Flagged overlapping high-priority deliverable windows across Table, Kanban,
                          and Gantt views.
                        </p>
                        <button
                          type="button"
                          className="sim-run-btn"
                          onClick={() => setNexusActionRan(true)}
                        >
                          {nexusActionRan
                            ? '✅ Exported Clean iCalendar (.ics) & Markdown Schedule!'
                            : '📅 Run export_schedule_to_tool(.ics)'}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {activeIndex === 5 && (
                <div className="arcade-body">
                  <div className="sim-controls">
                    <span className="sim-label">
                      Step Through Shared MCP Hiring State (<code>mcp_context.json</code>):
                    </span>
                    <div className="console-chip-list">
                      <button
                        type="button"
                        className={`sim-chip ${hireStage === 'match' ? 'active-safe' : ''}`}
                        onClick={() => {
                          setHireStage('match');
                          setPdfGenerated(false);
                        }}
                      >
                        1️⃣ PyMuPDF Resume Parse &amp; Fit Correlation
                      </button>
                      <button
                        type="button"
                        className={`sim-chip ${hireStage === 'schedule' ? 'active-safe' : ''}`}
                        onClick={() => {
                          setHireStage('schedule');
                          setPdfGenerated(false);
                        }}
                      >
                        2️⃣ Dual-LLM Invite + Calendly Slot Injection
                      </button>
                      <button
                        type="button"
                        className={`sim-chip ${hireStage === 'contract' ? 'active-safe' : ''}`}
                        onClick={() => setHireStage('contract')}
                      >
                        3️⃣ Unicode-Safe FPDF Offer Letter &amp; Contract
                      </button>
                    </div>
                  </div>

                  <div className="graphrag-stage">
                    {hireStage === 'match' && (
                      <div className="graph-review-card">
                        <div className="graph-edges">
                          <span>Candidate: Elena Rostova.pdf</span> · Fit Score:{' '}
                          <span>92% Match</span> (Senior AI Engineer)
                        </div>
                        <p className="muse-narrative">
                          Extracted Python, PyTorch, &amp; DuckDB via <code>PyMuPDF</code>; updated{' '}
                          <code>mcp_context.json</code> &amp; Scikit-learn qualification correlation
                          chart.
                        </p>
                        <button
                          type="button"
                          className="sim-run-btn"
                          onClick={() => setHireStage('schedule')}
                        >
                          ▶ Pass Shortlisted Candidate to Scheduler →
                        </button>
                      </div>
                    )}

                    {hireStage === 'schedule' && (
                      <div className="graph-review-card">
                        <div className="dedup-pill">
                          🔄 <strong>llm_connect.get_response():</strong> Llama-3 / Gemini 2.0
                          health check <code>200 OK</code>
                        </div>
                        <div className="graph-edges">
                          Drafted personalized technical screen invite + injected{' '}
                          <span>calendly.com/recruiting-team/30min</span>
                        </div>
                        <button
                          type="button"
                          className="sim-run-btn"
                          onClick={() => setHireStage('contract')}
                        >
                          ▶ Advance Candidate to Offer Generation →
                        </button>
                      </div>
                    )}

                    {hireStage === 'contract' && (
                      <div className="graph-review-card">
                        <div className="graph-edges">
                          <span>FPDF Sanitizer:</span> Converted smart-quotes &amp; Unicode accents
                          safely to Latin-1 · Zero runtime crashes
                        </div>
                        <p className="muse-narrative">
                          Generated editable Employment Agreement &amp; Offer Letter from{' '}
                          <code>mcp_context.json</code> salary &amp; role terms.
                        </p>
                        <button
                          type="button"
                          className="sim-run-btn"
                          onClick={() => setPdfGenerated(true)}
                        >
                          {pdfGenerated
                            ? '✅ Offer_Letter_Elena_Rostova.pdf Ready!'
                            : '📄 Generate One-Click Offer PDF'}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Mode 2: Real Product UI Screenshot / Authentic Interface Preview */}
          {mediaMode === 'ui' && (
            <div className={`stage-screenshot-wrap tone-${project.color}`}>
              {project.image ? (
                <Image
                  src={project.image}
                  alt={`${project.title} interface screenshot`}
                  fill
                  sizes="(max-width: 900px) 92vw, 720px"
                  className="stage-screenshot-img"
                />
              ) : project.title === 'Muse.AI' ? (
                <div className="ui-replica muse-replica" aria-label="Muse.AI web interface preview">
                  <div className="muse-rep-top">
                    <div>
                      <div className="muse-rep-logo">MUSE.AI</div>
                      <div className="muse-rep-sub">Visual-to-Audio Intelligence Agent</div>
                    </div>
                    <span className="muse-rep-pill">● Powered by Gemini 3 + Spotify</span>
                  </div>
                  <div className="muse-rep-grid">
                    <div className="muse-rep-trace">
                      <div className="muse-rep-trace-hdr">● AGENTIC REASONING TRACE</div>
                      <div>
                        <b className="tr-v">[VISION]</b> Sunset coastal highway, warm nostalgia
                      </div>
                      <div>
                        <b className="tr-s">[STRATEGY]</b> &ldquo;warm indie roadtrip&rdquo;,
                        &ldquo;dream pop sunset&rdquo;
                      </div>
                      <div>
                        <b className="tr-o">[SCOUT]</b> Retrieved Spotify track candidates (fan-out)
                      </div>
                      <div>
                        <b className="tr-c">[CRITIC]</b> Reranked for mood fit · filtered harsh BPM
                      </div>
                    </div>
                    <div className="muse-rep-card">
                      <div className="muse-rep-track-hdr">
                        <span>#1 Curated Selection</span>
                        <span className="muse-match-tag">94% Match</span>
                      </div>
                      <strong>Golden Hour Cruisers — Pacific</strong>
                      <p>
                        <b>AI Reason:</b> &ldquo;Warm guitar reverb and 108 BPM groove match coastal
                        golden-hour lighting.&rdquo;
                      </p>
                      <div className="muse-rep-actions">
                        <span className="muse-refine-box">Refine: &ldquo;More 80s synth&rdquo;</span>
                        <span className="muse-spotify-btn">▶ Play on Spotify</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className="ui-replica recruit-replica"
                  aria-label="AI Recruitment Hub interface preview"
                >
                  <div className="recruit-rep-nav">
                    <strong>AI Recruitment Hub</strong>
                    <div className="recruit-rep-tabs">
                      <span>Job Creation</span>
                      <span className="active">Candidate Profile</span>
                      <span>Scheduler</span>
                      <span>Analytics</span>
                      <span>Offer PDF</span>
                    </div>
                  </div>
                  <div className="recruit-rep-grid">
                    <div className="recruit-rep-panel">
                      <div className="recruit-rep-label">CANDIDATE FIT &amp; CORRELATION</div>
                      <strong>Elena Rostova · Senior AI Engineer</strong>
                      <div className="recruit-bar-wrap">
                        <div className="recruit-bar-fill" style={{ width: '92%' }} />
                      </div>
                      <small>92% Qualification Match · PyMuPDF + Scikit-learn</small>
                    </div>
                    <div className="recruit-rep-panel">
                      <div className="recruit-rep-label">AUTOMATED PIPELINE ACTIONS</div>
                      <div className="recruit-action-pill">
                        ✓ Llama-3 / Gemini 2.0 Invite + Calendly Link Ready
                      </div>
                      <div className="recruit-action-pill">
                        ✓ Editable Offer Letter → One-Click FPDF Download
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Mode 3: 4-Step System Architecture */}
          {mediaMode === 'flow' && (
            <div className="stage-flow-grid">
              {nodes.map((node, idx) => (
                <div key={node.step} className="stage-flow-card">
                  <span className="arch-step">{node.step}</span>
                  <strong>{node.role}</strong>
                  {idx < nodes.length - 1 && (
                    <span className="stage-flow-arrow" aria-hidden="true">
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Clean 2x2 Case Study Grid (No long scrolling wall!) */}
        <div className="case-study-bento">
          <div className="cs-cell">
            <span className="cs-tag">🎯 Problem</span>
            <p>{project.problem}</p>
          </div>
          {project.details.map(([label, text]) => {
            const emoji =
              label === 'Key decision' ? '⚙️' : label === 'How I tested it' ? '🧪' : '🎨';
            return (
              <div key={label} className="cs-cell">
                <span className="cs-tag">
                  {emoji} {label}
                </span>
                <p>{text}</p>
              </div>
            );
          })}
        </div>
      </article>
    </div>
  );
}
