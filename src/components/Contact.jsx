import { Download, Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  const contacts = [
    {
      label: 'Email',
      value: 'westgate.sabrina@gmail.com',
      href: 'mailto:westgate.sabrina@gmail.com',
      icon: Mail,
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/sabrina-westgate',
      href: 'https://www.linkedin.com/in/sabrina-westgate/',
      icon: Linkedin,
    },
    {
      label: 'GitHub',
      value: 'GitHub profile placeholder',
      href: 'https://github.com/',
      icon: Github,
    },
    {
      label: 'Resume',
      value: 'Download resume',
      href: `${import.meta.env.BASE_URL}resume.pdf`,
      icon: Download,
    },
  ];

  return (
    <section id="contact" className="section-pad bg-sage/70" aria-labelledby="contact-heading">
      <div className="section-shell">
        <div className="card overflow-hidden">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-ink p-8 text-white sm:p-10">
              <p className="eyebrow text-foam">Contact</p>
              <h2 id="contact-heading" className="mt-3 text-3xl font-bold tracking-normal sm:text-4xl">
                Interested in data science, technical advisory, or client-facing engineering roles?
              </h2>
              <p className="mt-5 text-base leading-8 text-white/[0.76]">Let&apos;s connect.</p>
            </div>
            <div className="grid gap-3 p-5 sm:p-6">
              {contacts.map((contact) => {
                const Icon = contact.icon;
                return (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="flex items-center gap-4 rounded-lg border border-line bg-white p-4 transition hover:-translate-y-0.5 hover:border-foam hover:shadow-soft"
                    aria-label={`${contact.label}: ${contact.value}`}
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-sage text-eucalyptus">
                      <Icon size={21} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-sm font-bold text-ink">{contact.label}</span>
                      <span className="mt-1 block break-all text-sm text-slate">{contact.value}</span>
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
