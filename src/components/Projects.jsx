import { ArrowUpRight } from 'lucide-react';
import SectionIntro from './SectionIntro.jsx';
import { projects } from '../data/projects.js';

export default function Projects() {
  return (
    <section id="projects" className="section-pad bg-sage/70" aria-labelledby="projects-heading">
      <div className="section-shell">
        <SectionIntro
          id="projects-heading"
          eyebrow="Featured projects"
          title="From large-scale sensor data to stakeholder-ready insights."
        >
          Selected work that combines machine learning, data infrastructure, environmental systems, and technical
          advisory communication.
        </SectionIntro>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="card card-hover flex flex-col p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-ink">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate">{project.summary}</p>
                </div>
                <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-line bg-white text-eucalyptus">
                  <ArrowUpRight size={19} aria-hidden="true" />
                </span>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate">{project.description}</p>
              <p className="mt-5 rounded-lg border border-line bg-mist p-4 text-sm font-semibold leading-6 text-ink">
                {project.impact}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="#contact"
                className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-bold text-eucalyptus hover:text-ink"
              >
                View details <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
