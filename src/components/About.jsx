import SectionIntro from './SectionIntro.jsx';

export default function About() {
  return (
    <section id="about" className="section-pad bg-linen" aria-labelledby="about-heading">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionIntro id="about-heading" eyebrow="About" title="Data systems, technical insight, and real-world decisions." />

          <div className="card p-7 sm:p-8">
            <h3 className="text-2xl font-bold text-ink">
              Sabrina is a Ph.D.-trained data scientist and technical communicator.
            </h3>
            <div className="mt-5 space-y-5 text-base leading-8 text-slate">
              <p>
                Her background spans environmental data science, machine learning, large-scale sensor datasets, and
                science policy. She builds analytical systems, interprets complex datasets, and helps decision-makers
                understand what the data means.
              </p>
              <p>
                Sabrina is especially interested in roles that combine technical depth, communication, and real-world
                impact, including data science, solutions engineering, sales engineering, customer success engineering,
                and technical advisory work.
              </p>
            </div>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {['Technical depth', 'Communication clarity', 'Decision support'].map((item) => (
                <div key={item} className="rounded-lg border border-line bg-sage/70 p-4 text-sm font-bold text-ink">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
