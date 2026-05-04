import { Code2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-4 bg-white/70 dark:bg-slate-950/40 border-t border-slate-200/80 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold">
            <Code2 className="w-5 h-5 text-brand-primary" />
            <span>&copy; {currentYear} Sergio Márquez</span>
          </div>

          <div className="flex gap-4 text-xs text-slate-500 dark:text-slate-500">
            <span>C/C++ Developer</span>
            <span>|</span>
            <span>Product-minded builder</span>
            <span>|</span>
            <span>Lifelong Learner</span>
          </div>
        </div>

        <div className="mt-8 h-1 bg-gradient-to-r from-transparent via-brand-primary to-transparent opacity-20" />
      </div>
    </footer>
  );
}
