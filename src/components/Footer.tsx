import { Code2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-4 bg-white dark:bg-[#0d1410] border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-gray-900 dark:text-white font-bold">
            <Code2 className="w-5 h-5 text-[#00ff99]" />
            <span>&copy; {currentYear} Sergio Márquez</span>
          </div>

          <div className="flex gap-4 text-xs text-gray-500 dark:text-gray-500">
            <span>C/C++ Developer</span>
            <span>|</span>
            <span>Cybersecurity Enthusiast</span>
            <span>|</span>
            <span>Lifelong Learner</span>
          </div>
        </div>

        <div className="mt-8 h-1 bg-gradient-to-r from-transparent via-[#00ff99] to-transparent opacity-20" />
      </div>
    </footer>
  );
}
