'use client';
import ContactPostcard from '@/components/ContactPostcard';
import Icon from '@/components/Icon';
import Journey from '@/components/Journey';
import StudioDesk, { type ProjectData } from '@/components/StudioDesk';
import WorkLab from '@/components/WorkLab';
import WorkflowPlayground from '@/components/WorkflowPlayground';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type Room = 'desk' | 'work' | 'story' | 'contact';

export default function PortfolioStudio({ projects }: { projects: ProjectData[] }) {
  const [room, setRoom] = useState<Room>('desk');
  const [activeProject, setActiveProject] = useState<number>(0);
  const [workMode, setWorkMode] = useState<'sim' | 'ui'>('sim');
  const [sparks, setSparks] = useState<number>(42);
  const [copied, setCopied] = useState<boolean>(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Keyboard shortcuts 1-4 to switch studio rooms
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.key === '1') setRoom('desk');
      else if (e.key === '2') setRoom('work');
      else if (e.key === '3') setRoom('story');
      else if (e.key === '4') setRoom('contact');
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const handleOpenProject = (idx: number, mode: 'sim' | 'ui' = 'sim') => {
    setActiveProject(idx);
    setWorkMode(mode);
    setRoom('work');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRoomChange = (next: Room) => {
    setRoom(next);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('ygweihsien910622@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="studio-layout">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      {/* Left Sticky Studio Passport (Replaces traditional top navbar!) */}
      <aside className="studio-sidebar" aria-label="Rachel Wang Studio Passport">
        <div className="passport-card">
          <div
            className="passport-photo-wrap"
            onMouseMove={e => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
              const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
              setTilt({ x, y });
            }}
            onMouseLeave={() => setTilt({ x: 0, y: 0 })}
            style={{
              transform: `perspective(600px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
            }}
          >
            <Image
              src="/rachel-coast.jpg"
              alt="Rachel Wang"
              fill
              priority
              sizes="280px"
              className="passport-photo"
            />
            <button
              type="button"
              className="passport-spark-btn"
              onClick={() => setSparks(s => s + 1)}
              title="Send a spark of curiosity!"
            >
              ✦ {sparks}
            </button>
          </div>

          <div className="passport-identity">
            <div className="passport-name">
              Rachel <em>Wang</em>
            </div>
            <p className="passport-role">Product-Minded AI Builder</p>
            <span className="passport-school">🎓 MS Business Analytics · UC San Diego</span>
          </div>

          {/* Room Navigation Stack */}
          <nav className="room-nav" aria-label="Studio workspaces">
            <button
              type="button"
              className={`room-btn ${room === 'desk' ? 'active' : ''}`}
              aria-current={room === 'desk' ? 'page' : undefined}
              onClick={() => handleRoomChange('desk')}
            >
              <span className="room-icon">✦</span>
              <span className="room-label">Studio Desk</span>
              <kbd className="room-kbd">1</kbd>
            </button>

            <button
              type="button"
              className={`room-btn ${room === 'work' ? 'active' : ''}`}
              aria-current={room === 'work' ? 'page' : undefined}
              onClick={() => handleRoomChange('work')}
            >
              <span className="room-icon">🧪</span>
              <span className="room-label">AI Work Lab</span>
              <span className="room-count">{projects.length}</span>
              <kbd className="room-kbd">2</kbd>
            </button>

            <button
              type="button"
              className={`room-btn ${room === 'story' ? 'active' : ''}`}
              aria-current={room === 'story' ? 'page' : undefined}
              onClick={() => handleRoomChange('story')}
            >
              <span className="room-icon">🧭</span>
              <span className="room-label">Story &amp; Craft</span>
              <kbd className="room-kbd">3</kbd>
            </button>

            <button
              type="button"
              className={`room-btn ${room === 'contact' ? 'active' : ''}`}
              aria-current={room === 'contact' ? 'page' : undefined}
              onClick={() => handleRoomChange('contact')}
            >
              <span className="room-icon">📮</span>
              <span className="room-label">Postcard</span>
              <kbd className="room-kbd">4</kbd>
            </button>
          </nav>

          {/* Compact Social & Copy Email Strip */}
          <div className="passport-links">
            <button type="button" className="passport-chip" onClick={copyEmail}>
              {copied ? '✓ Copied!' : '✉️ Copy Email'}
            </button>
            <a
              href="https://github.com/rsm-wew068"
              target="_blank"
              rel="noreferrer"
              className="passport-chip"
            >
              GitHub <Icon name="arrow" />
            </a>
            <a
              href="https://linkedin.com/in/wei-hsien-wang-b21922230"
              target="_blank"
              rel="noreferrer"
              className="passport-chip"
            >
              LinkedIn <Icon name="arrow" />
            </a>
          </div>
        </div>
      </aside>

      {/* Right Interactive Workspace Stage */}
      <main id="main" className="studio-stage">
        {room === 'desk' && (
          <StudioDesk
            projects={projects}
            onOpenProject={handleOpenProject}
            onNavigateRoom={handleRoomChange}
          />
        )}

        {room === 'work' && (
          <WorkLab
            projects={projects}
            activeIndex={activeProject}
            onSelectProject={setActiveProject}
            initialMode={workMode}
          />
        )}

        {room === 'story' && (
          <div className="story-room-stack">
            <section className="bento-tile">
              <p className="eyebrow">01 / THE PATH THAT SHAPED ME</p>
              <h1 className="stage-title">
                A winding path. <em>A clear purpose.</em>
              </h1>
              <p className="story-room-intro">
                I&apos;ve always been curious about what makes people care, and what makes a product
                worth coming back to. Each chapter gave me a different way to answer that question.
              </p>
              <Journey />
            </section>

            <section className="bento-tile approach-room-tile">
              <div>
                <p className="eyebrow">02 / HOW I BUILD</p>
                <h2 className="approach-room-title">
                  The journey comes before the <em>pipeline.</em>
                </h2>
                <p className="story-room-intro">
                  I design the workflow and architecture around real human bottlenecks, then build
                  and validate with AI tools. Click any step to see a real project receipt:
                </p>
              </div>
              <WorkflowPlayground />
            </section>
          </div>
        )}

        {room === 'contact' && (
          <div className="contact-room-wrap">
            <ContactPostcard />
          </div>
        )}
      </main>
    </div>
  );
}
