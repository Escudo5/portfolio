import { useState, useEffect } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Sergio Márquez';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-indigo-50 to-sky-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />

      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-40 dark:opacity-30" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(79,70,229,0.35) 1px, transparent 1px)`,
          backgroundSize: '38px 38px',
        }} />
      </div>

      <div className="absolute top-24 left-1/5 w-80 h-80 bg-brand-primary/15 dark:bg-brand-primary/25 rounded-full blur-3xl animate-soft-pulse" />
      <div className="absolute bottom-24 right-1/5 w-96 h-96 bg-brand-secondary/15 dark:bg-brand-secondary/20 rounded-full blur-3xl animate-soft-pulse" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/3 right-[12%] w-56 h-56 bg-violet-500/10 rounded-full blur-3xl animate-float" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 glass-panel rounded-full">
          <Sparkles className="w-4 h-4 text-brand-primary" />
          <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">Construyendo productos con impacto</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 text-slate-900 dark:text-white tracking-tight">
          <span className="inline-block min-h-[1.2em]">
            {displayText}
            <span className="animate-pulse text-brand-primary">|</span>
          </span>
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-slate-700 dark:text-sky-300 mb-4 font-medium">
          Desarrollador de Software con mentalidad de producto
        </p>
        <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Creo soluciones escalables, interfaces cuidadas y sistemas sólidos para llevar ideas técnicas a productos útiles y sostenibles. Me mueven la arquitectura, la ejecución y el aprendizaje continuo.
        </p>

        <button
          onClick={scrollToProjects}
          className="group relative px-8 py-4 bg-brand-primary text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-brand-primary/30 hover:scale-[1.03]"
        >
          <span className="relative z-10">Ver proyectos</span>
          <div className="absolute inset-0 bg-brand-secondary transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-slate-400 dark:text-slate-500" />
      </div>
    </section>
  );
}
