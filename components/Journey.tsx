'use client';
import { useState } from 'react';
const chapters = [
  { name: 'Design', time: 'High school · Art & Design Officer', question: 'What makes someone stop and look?', title: 'First, I learned to see.', text: 'As my club’s Art & Design Officer, I learned how composition guides attention. A thoughtful layout could make an idea feel clearer, more inviting, and worth exploring.', takeaway: 'Make the first impression mean something.', mark: '◐' },
  { name: 'Psychology', time: 'Freshman year · Psychology', question: 'What do people really need?', title: 'Then, I learned to listen.', text: 'Studying psychology made me curious about the person behind the interaction. I began looking beneath what people say they want to understand their motivations, frustrations, and real needs.', takeaway: 'Start with the person behind the problem.', mark: '◎' },
  { name: 'Marketing', time: 'Sophomore year onward · International Business', question: 'Why would someone choose this?', title: 'I learned to connect the dots.', text: 'I switched to International Business with a focus on marketing. I learned to connect people’s needs to product pain points, communicate value, and position a product with a clear reason to choose it.', takeaway: 'Give a useful idea a reason to matter.', mark: '↗' },
  { name: 'Analytics', time: 'Master’s · Business Analytics, UC San Diego', question: 'How do we know it works?', title: 'And learned to test my assumptions.', text: 'My master’s in Business Analytics added a crucial question: does the idea actually deliver? I learned to propose data-driven strategies, test assumptions, and measure whether the results supported the promise.', takeaway: 'Let evidence shape the next decision.', mark: '▥' },
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
