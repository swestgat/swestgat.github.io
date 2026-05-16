import { Award, GraduationCap } from 'lucide-react';
import SectionIntro from './SectionIntro.jsx';
import { education, experience, honors } from '../data/experience.js';

export default function Experience() {
  return (
    <section id="experience" className="section-pad bg-linen" aria-labelledby="experience-heading">
      <div className="section-shell">
        <SectionIntro
          id="experience-heading"
          eyebrow="Experience"
          title="Applied research, advisory work, and technical leadership."
        >
          A focused view of roles where Sabrina built data systems, advised stakeholders, led teams, and translated
          analysis into action.
        </SectionIntro>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_0.75fr]">
          <div className="relative space-y-5 before:absolute before:left-4 before:top-4 before:h-[calc(100%-2rem)] before:w-px before:bg-line">
            {experience.map((item) => (
              <article key={item.role} className="relative pl-11">
                <span className="absolute left-0 top-2 grid size-8 place-items-center rounded-full border border-line bg-white">
                  <span className="size-2.5 rounded-full bg-eucalyptus" />
                </span>
                <div className="card p-6">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-ink">
                        {item.role}
                      </h3>
                      <p className="mt-1 text-sm font-semibold text-eucalyptus">{item.organization}</p>
                    </div>
                    <p className="text-sm font-semibold text-slate">{item.dates}</p>
                  </div>
                  <ul className="mt-5 space-y-3 text-sm leading-6 text-slate">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-foam" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <aside className="space-y-5">
            <div className="card p-6">
              <div className="flex items-center gap-3">
                <GraduationCap className="text-eucalyptus" size={22} aria-hidden="true" />
                <h3 className="text-lg font-bold">Education</h3>
              </div>
              <ul className="mt-5 space-y-4 text-sm leading-6 text-slate">
                {education.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="card p-6">
              <div className="flex items-center gap-3">
                <Award className="text-eucalyptus" size={22} aria-hidden="true" />
                <h3 className="text-lg font-bold">Honors</h3>
              </div>
              <ul className="mt-5 space-y-4 text-sm leading-6 text-slate">
                {honors.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
