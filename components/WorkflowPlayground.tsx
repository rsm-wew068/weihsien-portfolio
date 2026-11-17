'use client';
import Icon from '@/components/Icon';
import { useState } from 'react';

const steps = [
  {
    num: '01',
    title: 'Understand the person',
    desc: 'Find the real need behind the request.',
    receipt: 'In Live Suggestion Agent: realized speakers get overwhelmed by walls of text mid-call, so the real need was glanceable 3-word cues—not full essays.',
    project: 'Live Suggestion Agent',
    icon: '◎',
  },
  {
    num: '02',
    title: 'Map the whole journey',
    desc: 'Outline the experience, from first click to outcome.',
    receipt: 'In Auto Care Assistant: mapped how busy drivers book repairs over multiple turns without knowing every detail upfront.',
    project: 'Auto Care Assistant',
    icon: 'flow',
  },
  {
    num: '03',
    title: 'Build with AI tools',
    desc: 'Implement the architecture I designed around the workflow.',
    receipt: 'In NexusAI Email Intelligence: isolated untrusted email text against prompt injection, verified verbatim quotes, and wired a 5-tool ReAct agent over a NetworkX org graph.',
    project: 'NexusAI Email Intelligence',
    icon: 'star',
  },
  {
    num: '04',
    title: 'Test. Learn. Make it better.',
    desc: 'Check whether it delivers for the people using it.',
    receipt: 'In BlindSpot AI & Muse.AI: ran 100-trial random baselines vs adaptive AI search, and added a Critic agent when a sleeping-baby photo matched an aggressive track.',
    project: 'BlindSpot AI & Muse.AI',
    icon: 'arrow',
  },
] as const;

export default function WorkflowPlayground() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="workflow-playground">
      <ol className="workflow">
        {steps.map((step, idx) => {
          const isActive = activeStep === idx;
          return (
            <li
              key={step.num}
              className={`workflow-item ${isActive ? 'workflow-active' : ''}`}
              onClick={() => setActiveStep(idx)}
              onMouseEnter={() => setActiveStep(idx)}
              tabIndex={0}
              role="button"
              aria-pressed={isActive}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveStep(idx);
                }
              }}
            >
              <span>{step.num}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                {isActive && (
                  <div className="workflow-receipt">
                    <span className="receipt-tag">✦ Receipt · {step.project}</span>
                    <p className="receipt-text">{step.receipt}</p>
                  </div>
                )}
              </div>
              <i>
                {step.icon === '◎' ? (
                  '◎'
                ) : (
                  <Icon name={step.icon} />
                )}
              </i>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
