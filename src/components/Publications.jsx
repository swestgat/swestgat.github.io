import { Mic2, Newspaper } from 'lucide-react';
import SectionIntro from './SectionIntro.jsx';
import { publications, talks } from '../data/publications.js';

export default function Publications() {
  return (
    <section id="publications" className="section-pad bg-mist" aria-labelledby="publications-heading">
      <div className="section-shell">
        <SectionIntro
          id="publications-heading"
          eyebrow="Publications & talks"
          title="Credible technical work, communicated clearly."
        >
          Selected publications and presentations that show depth in environmental data science without turning the
          site into an academic CV.
        </SectionIntro>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_0.75fr]">
          <div className="card p-6">
            <div className="flex items-center gap-3">
              <Newspaper className="text-eucalyptus" size={22} aria-hidden="true" />
              <h3 className="text-lg font-bold">
                Selected Publications
              </h3>
            </div>
            <div className="mt-6 space-y-5">
              {publications.map((publication) => (
                <article key={publication.title} className="border-b border-line pb-5 last:border-0 last:pb-0">
                  <h4 className="font-semibold leading-7 text-ink">{publication.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-slate">{publication.citation}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-center gap-3">
              <Mic2 className="text-eucalyptus" size={22} aria-hidden="true" />
              <h3 className="text-lg font-bold">Talks & Presentations</h3>
            </div>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-slate">
              {talks.map((talk) => (
                <li key={talk} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-eucalyptus" />
                  <span>{talk}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
