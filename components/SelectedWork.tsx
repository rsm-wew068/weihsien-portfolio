'use client';
import Icon from '@/components/Icon';
import Image from 'next/image';
import { useState } from 'react';
type Project = {
  title: string; label: string; problem: string; stack: string[]; details: string[][];
  link: string; image: string | null; color: string; cta: string;
  visualLabel?: string; visualText?: string;
};
export default function SelectedWork({ projects }: { projects: Project[] }) {
  const [expanded, setExpanded] = useState(false);
  return <><div id="selected-projects"><div className="project-grid">{(expanded ? projects : projects.slice(0, 3)).map(project => <a className={`project-card ${project.color}`} href={project.link} key={project.title} target="_blank" rel="noreferrer"><div className="project-art">{project.image ? <Image src={project.image} alt={`${project.title} interface screenshot`} fill sizes="(max-width: 760px) 90vw, 380px" className="project-screenshot"/> : <div style={{ padding: '28px', textAlign: 'center' }}><span className="eyebrow">{project.visualLabel}</span><p style={{ fontFamily: 'Georgia, serif', fontSize: '24px', margin: '12px 0' }}>{project.visualText}</p></div>}<i aria-hidden="true"><Icon name="arrow"/></i></div><p className="eyebrow">{project.label}</p><h3>{project.title}</h3><dl style={{ fontSize: '12px', lineHeight: 1.8, margin: '16px 0 24px' }}><dt><strong>Problem</strong></dt><dd style={{ margin: '0 0 14px', color: 'var(--muted)' }}>{project.problem}</dd>{project.details.map(([label, text]) => <div key={label}><dt><strong>{label}</strong></dt><dd style={{ margin: '0 0 14px', color: 'var(--muted)' }}>{text}</dd></div>)}<dt><strong>Stack</strong></dt><dd style={{ margin: '7px 0 0' }}><ul aria-label={`${project.title} stack`} style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', listStyle: 'none', padding: 0, margin: 0 }}>{project.stack.map(tag => <li key={tag} style={{ border: '1px solid var(--line)', borderRadius: '20px', padding: '3px 9px', fontSize: '10px' }}>{tag}</li>)}</ul></dd></dl><span className="project-cta">{project.cta} <Icon name="arrow"/></span></a>)}</div></div><div style={{ textAlign: 'center', marginTop: '36px' }}><button className="primary-link" type="button" aria-expanded={expanded} aria-controls="selected-projects" onClick={() => setExpanded(value => !value)} style={{ border: 0, cursor: 'pointer' }}>{expanded ? 'Show less' : 'Show more'} <span aria-hidden="true">{expanded ? '−' : '+'}</span></button></div></>;
}
