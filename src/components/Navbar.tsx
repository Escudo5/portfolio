import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-[#0a0f0d]/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl font-bold text-gray-900 dark:text-white hover:text-[#00ff99] dark:hover:text-[#00ff99] transition-colors duration-300"
          >
            &lt;SM /&gt;
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 dark:text-gray-300 hover:text-[#00ff99] dark:hover:text-[#00ff99] transition-colors duration-300 font-medium"
            >
              Sobre mí
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-700 dark:text-gray-300 hover:text-[#00ff99] dark:hover:text-[#00ff99] transition-colors duration-300 font-medium"
            >
              Proyectos
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2 bg-[#00ff99] text-gray-900 font-bold rounded-lg hover:bg-[#00b4d8] hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#00ff99]/30"
            >
              Contacto
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-900 dark:text-white"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-[#00ff99] dark:hover:text-[#00ff99] transition-colors duration-300 font-medium"
              >
                Sobre mí
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-[#00ff99] dark:hover:text-[#00ff99] transition-colors duration-300 font-medium"
              >
                Proyectos
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left px-4 py-2 bg-[#00ff99] text-gray-900 font-bold rounded-lg hover:bg-[#00b4d8] hover:text-white transition-all duration-300"
              >
                Contacto
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
