import { User, Code2, Rocket } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white/70 dark:bg-slate-950/40 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <User className="w-8 h-8 text-brand-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Sobre mí
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <div className="relative w-64 h-64 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent rounded-[2rem] animate-soft-pulse opacity-20" />
              <div className="absolute inset-2 glass-panel rounded-[1.6rem] flex items-center justify-center">
                <Rocket className="w-32 h-32 text-brand-primary" />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              Soy un Desarrollador de Software especializado en <span className="text-brand-primary font-semibold">arquitecturas sólidas y escalables</span>.
              Me apasiona la <span className="text-brand-secondary font-semibold">creación de productos tecnológicos</span> que aporten un valor real al usuario.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              Con una mentalidad emprendedora, busco constantemente nuevos desafíos que me permitan construir soluciones eficientes. Actualmente diseño arquitecturas, optimizo procesos y exploro nuevas tecnologías.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 glass-panel rounded-full">
                <Code2 className="w-5 h-5 text-brand-primary" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Desarrollo Backend</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 glass-panel rounded-full">
                <Rocket className="w-5 h-5 text-brand-secondary" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Emprendimiento</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
