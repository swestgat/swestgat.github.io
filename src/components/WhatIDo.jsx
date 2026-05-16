import { BarChart3, MessagesSquare, Network } from 'lucide-react';
import SectionIntro from './SectionIntro.jsx';
import { skills } from '../data/skills.js';

const cards = [
  {
    title: 'Data Science & ML',
    icon: BarChart3,
    items: ['Predictive modeling', 'Explainable AI', 'Large-scale environmental data', 'Python, SQL, ML workflows'],
  },
  {
    title: 'Technical Communication',
    icon: MessagesSquare,
    items: [
      'Clear recommendations from complex findings',
      'Presentations, publications, stakeholder briefings',
      'Technical and non-technical audiences',
    ],
  },
  {
    title: 'Cross-Functional Leadership',
    icon: Network,
    items: [
      'Leading research teams',
      'Mentoring junior researchers',
      'Multi-institution stakeholder work',
      'Project scoping and execution',
    ],
  },
];

export default function WhatIDo() {
  return (
    <section className="section-pad bg-linen" aria-labelledby="what-i-do-heading">
      <div className="section-shell">
        <SectionIntro id="what-i-do-heading" eyebrow="What I do" title="Technical depth with communication clarity.">
          I work across the full path from data infrastructure and modeling to interpretation, recommendation, and
          stakeholder action.
        </SectionIntro>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <article key={card.title} className="card card-hover p-6">
                <div className="grid size-11 place-items-center rounded-lg bg-sage text-eucalyptus">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-ink">
                  {card.title}
                </h3>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate">
                  {card.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-eucalyptus" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span key={skill} className="tag">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
