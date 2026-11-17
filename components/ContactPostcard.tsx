'use client';
import Image from 'next/image';
import { useState } from 'react';

const stamps = [
  { id: 'product', label: '🤖 AI Product Role', subject: 'AI Product Opportunity for Rachel' },
  { id: 'evals', label: '🧪 Agent Evals & Systems', subject: 'Chatting about Agentic AI & Evaluation' },
  { id: 'coffee', label: '☕ Quick Coffee Chat', subject: 'Hello from your portfolio!' },
] as const;

export default function ContactPostcard() {
  const [selectedStamp, setSelectedStamp] = useState<string>('product');
  const [copied, setCopied] = useState(false);

  const currentStamp = stamps.find(s => s.id === selectedStamp) || stamps[0];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('ygweihsien910622@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="contact section">
      <div className="postcard-stamp-corner" aria-hidden="true">
        <span>CA · UCSD</span>
        <strong>2026 ✦</strong>
      </div>
      <p className="eyebrow">Something worth building?</p>
      <h2>
        Let’s <em>connect!</em>
      </h2>

      <div className="stamp-picker" role="group" aria-label="Pick a conversation topic">
        <span className="stamp-picker-label">Pick a postcard stamp:</span>
        <div className="stamp-buttons">
          {stamps.map(stamp => (
            <button
              key={stamp.id}
              type="button"
              className={`stamp-chip ${selectedStamp === stamp.id ? 'active' : ''}`}
              aria-pressed={selectedStamp === stamp.id}
              onClick={() => setSelectedStamp(stamp.id)}
            >
              {stamp.label}
            </button>
          ))}
        </div>
      </div>

      <div className="contact-info">
        <p className="contact-email-row">
          Email:{' '}
          <a
            href={`mailto:ygweihsien910622@gmail.com?subject=${encodeURIComponent(
              currentStamp.subject
            )}`}
          >
            ygweihsien910622@gmail.com
          </a>
          <button
            type="button"
            className={`copy-email-btn ${copied ? 'copied' : ''}`}
            onClick={handleCopy}
          >
            {copied ? '✓ Copied!' : 'Copy email'}
          </button>
        </p>
        <p>
          LinkedIn:{' '}
          <a
            href="https://linkedin.com/in/wei-hsien-wang-b21922230"
            target="_blank"
            rel="noreferrer"
          >
            wei-hsien-wang-b21922230
          </a>
        </p>
        <p>
          GitHub:{' '}
          <a href="https://github.com/rsm-wew068" target="_blank" rel="noreferrer">
            @rsm-wew068
          </a>
        </p>
      </div>

      <div className="contact-photo">
        <Image
          src="/golden-gate.jpg"
          alt="Golden Gate Bridge over San Francisco Bay"
          fill
          sizes="(max-width: 760px) 80vw, 330px"
        />
        <span className="polaroid-caption">San Francisco Bay · Always exploring ✦</span>
      </div>
    </section>
  );
}
