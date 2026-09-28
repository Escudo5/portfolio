import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-50/80 dark:bg-slate-950/20 transition-colors duration-300">
      <div className="site-container">
        <div className="flex items-center gap-3 mb-12">
          <Mail className="w-8 h-8 text-brand-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Contacto
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-start">
          <div className="space-y-6">
            <p className="text-lg text-slate-700 dark:text-slate-300">
              Estoy abierto a colaboraciones, oportunidades freelance y conversaciones sobre producto y tecnología.
            </p>

            <a
              href="mailto:sergio03.dev@gmail.com"
              className="group flex items-center justify-between gap-4 p-5 glass-panel rounded-lg transition-transform duration-200 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
            >
              <div className="flex items-center gap-4 min-w-0">
                <div className="p-3 bg-brand-primary/10 rounded-lg shrink-0">
                  <Mail className="w-6 h-6 text-brand-primary" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm text-slate-500 dark:text-slate-400">Escríbeme</div>
                  <div className="font-medium text-slate-900 dark:text-white break-all">sergio03.dev@gmail.com</div>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-brand-primary shrink-0 transition-colors" />
            </a>
          </div>

          <div className="space-y-3">
              <a
                href="https://www.linkedin.com/in/smarquez-"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 glass-panel rounded-lg transition-transform duration-200 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
              >
                <div className="p-3 bg-brand-secondary/10 rounded-lg">
                  <Linkedin className="w-5 h-5 text-brand-secondary" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">LinkedIn</div>
                  <div className="font-medium text-slate-900 dark:text-white">linkedin.com/in/smarquez-</div>
                </div>
              </a>

              <a
                href="https://github.com/Escudo5"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 glass-panel rounded-lg transition-transform duration-200 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
              >
                <div className="p-3 bg-brand-primary/10 rounded-lg">
                  <Github className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">GitHub</div>
                  <div className="font-medium text-slate-900 dark:text-white">github.com/Escudo5</div>
                </div>
              </a>
          </div>
        </div>
      </div>
    </section>
  );
}
