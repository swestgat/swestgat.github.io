import { ArrowRight, Download, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  const resumeHref = `${import.meta.env.BASE_URL}resume.pdf`;

  return (
    <section id="top" className="relative overflow-hidden border-b border-line bg-mist">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(111,168,154,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(111,168,154,0.10)_1px,transparent_1px)] bg-[size:42px_42px]" />
      <div className="absolute left-1/2 top-16 h-72 w-72 -translate-x-1/2 rounded-full bg-foam/30 blur-3xl" />

      <div className="section-shell relative grid min-h-[calc(100vh-4rem)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div className="reveal">
          <p className="eyebrow">Machine learning, environmental data, and decision support</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-extrabold tracking-normal text-ink sm:text-6xl lg:text-7xl">
            Sabrina Westgate, Ph.D.
          </h1>
          <p className="mt-5 text-2xl font-semibold text-eucalyptus sm:text-3xl">
            Data Scientist & Technical Communicator
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate">
            I build data-driven systems and translate complex technical findings into decisions people can act on.
            My work connects ML, large-scale data systems, environmental data science, technical communication, and
            stakeholder advising.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-eucalyptus"
            >
              View Projects <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a
              href={resumeHref}
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-foam"
            >
              <Download size={17} aria-hidden="true" /> Download Resume
            </a>
            <a
              href="https://www.linkedin.com/in/sabrina-westgate/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-foam"
            >
              <Linkedin size={17} aria-hidden="true" /> LinkedIn
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-foam"
            >
              <Github size={17} aria-hidden="true" /> GitHub
            </a>
          </div>
        </div>

        <div className="reveal relative">
          <div className="card p-5 sm:p-6">
            <div className="flex items-center justify-between border-b border-line pb-4">
              <div>
                <p className="text-sm font-semibold text-ink">Sensor Intelligence Dashboard</p>
                <p className="text-xs text-slate">From large-scale data to stakeholder-ready insights</p>
              </div>
              <span className="rounded-full bg-eucalyptus/15 px-3 py-1 text-xs font-bold text-eucalyptus">Live model</span>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {['2.8M', '91%', '55K+'].map((value, index) => (
                <div key={value} className="rounded-lg border border-line bg-sage/70 p-4">
                  <p className="text-2xl font-bold text-ink">{value}</p>
                  <p className="mt-1 text-xs leading-5 text-slate">
                    {index === 0 ? 'sensor records' : index === 1 ? 'model signal clarity' : 'campus community'}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-7 h-52 rounded-lg border border-line bg-white p-4">
              <div className="flex h-full items-end gap-2" aria-hidden="true">
                {[34, 48, 42, 70, 58, 82, 64, 91, 76, 88, 67, 79].map((height, index) => (
                  <div key={index} className="flex flex-1 items-end rounded-full bg-sage">
                    <div
                      className="w-full rounded-full bg-gradient-to-t from-eucalyptus to-foam"
                      style={{ height: `${height}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-line p-4">
                <p className="text-sm font-semibold">Explainability</p>
                <p className="mt-1 text-sm text-slate">SHAP analysis for model interpretation</p>
              </div>
              <div className="rounded-lg border border-line p-4">
                <p className="text-sm font-semibold">Advisory output</p>
                <p className="mt-1 text-sm text-slate">Clear recommendations for decision-makers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
