'use client';
import { useState } from 'react';
const chapters = [
  { name: 'Design', time: 'High school · Art & Design Officer', question: 'What makes someone stop and look?', title: 'First, I learned to see.', text: 'As the Model United Nations club’s Art & Design Officer, I learned how composition guides attention. A thoughtful layout could make an idea feel clearer, more inviting, and worth exploring.', takeaway: 'Make the first impression mean something.', mark: '◐' },
  { name: 'Psychology', time: 'Freshman year · Psychology', question: 'What do people really need?', title: 'Then, I learned to listen.', text: 'Studying psychology made me curious about the person behind the interaction. I began looking beneath what people say they want to understand their motivations, frustrations, and real needs.', takeaway: 'Start with the person behind the problem.', mark: '◎' },
  { name: 'Marketing', time: 'Sophomore year onward · International Business', question: 'Which pain point is worth solving?', title: 'I learned to frame the problem.', text: 'I switched to International Business with a focus on marketing. That perspective taught me to identify user pain points, ask why an existing solution falls short, and turn an idea into a testable hypothesis about what would help. I became interested in testing what works for the user.', takeaway: 'Find the pain point. Test the proposed solution.', mark: '↗' },
  { name: 'Analytics', time: 'Master’s · Business Analytics, UC San Diego', question: 'What evidence would change my decision?', title: 'I learned to make evidence the starting point.', text: 'My master’s in Business Analytics brought these perspectives together. Through course case studies in experimentation, uplift modeling, and prediction, I learned to frame a measurable question, evaluate results, and distinguish a useful signal from an unsupported assumption. That is how I approach AI products today: validate with data, then build.', takeaway: 'validate with data, then build', mark: '▥' },
];
export default function Journey() {
  const [active, setActive] = useState(0);
  const chapter = chapters[active];
  return <div className="journey">
    <div className="chapter-tabs" role="tablist" aria-label="My story">
      {chapters.map((item, i) => <button key={item.name} id={`chapter-tab-${i}`} role="tab" aria-selected={active === i} aria-controls="chapter-panel" tabIndex={active === i ? 0 : -1} onClick={() => setActive(i)} onKeyDown={event => { let next = i; if (event.key === 'ArrowRight') next = (i + 1) % chapters.length; else if (event.key === 'ArrowLeft') next = (i + chapters.length - 1) % chapters.length; else if (event.key === 'Home') next = 0; else if (event.key === 'End') next = chapters.length - 1; else return; event.preventDefault(); setActive(next); document.getElementById(`chapter-tab-${next}`)?.focus(); }}><span>0{i + 1}</span>{item.name}<i>{item.mark}</i></button>)}
    </div>
    <div className="chapter-panel" id="chapter-panel" role="tabpanel" aria-labelledby={`chapter-tab-${active}`}>
      <div className="chapter-art" aria-hidden="true"><div className={`art-shape shape-${active}`} key={active}>{chapter.mark}</div><span>A new lens. A new question.</span></div>
      <div className="chapter-copy" key={chapter.name}><p className="eyebrow">{chapter.time}</p><h3>{chapter.title}</h3><p>{chapter.text}</p><blockquote>“{chapter.question}”</blockquote><div className="takeaway"><span>What I carry forward</span><strong>{chapter.takeaway}</strong></div></div>
    </div>
    <p className="journey-footnote">Four perspectives. One way of building: start with people.</p>
  </div>;
}
