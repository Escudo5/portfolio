import { useState, useEffect } from 'react';
import { ChevronDown, Terminal } from 'lucide-react';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Sergio Márquez_';

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
      <div className="absolute inset-0 bg-gradient-to-br from-[#00ff99]/5 via-transparent to-[#00b4d8]/5 dark:from-[#00ff99]/10 dark:via-transparent dark:to-[#00b4d8]/10" />

      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10 dark:opacity-20" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #00ff99 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="absolute top-20 left-10 w-64 h-64 bg-[#00ff99]/5 dark:bg-[#00ff99]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00b4d8]/5 dark:bg-[#00b4d8]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="absolute inset-0 opacity-20 dark:opacity-30">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute text-xs text-[#00ff99] dark:text-[#00ff99] font-mono opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            {['int main()', 'void*', 'malloc()', 'free()', '0x00', 'NULL', '//', 'struct', 'return 0;', '#include'][Math.floor(Math.random() * 10)]}
          </div>
        ))}
      </div>

      {[...Array(3)].map((_, i) => (
        <div
          key={`line-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-[#00ff99]/30 to-transparent"
          style={{
            top: `${20 + i * 30}%`,
            width: '100%',
            animation: `float ${5 + i}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-gray-200/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-300 dark:border-gray-700">
          <Terminal className="w-4 h-4 text-[#00ff99]" />
          <span className="text-sm text-gray-700 dark:text-gray-300 font-mono">sergio@dev:~$</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
          <span className="inline-block min-h-[1.2em]">
            {displayText}
            <span className="animate-pulse">|</span>
          </span>
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-[#00ff99] mb-4 font-light">
          Programador en C y C++
        </p>
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          En formación constante | Apasionado por la ciberseguridad
        </p>

        <button
          onClick={scrollToProjects}
          className="group relative px-8 py-4 bg-[#00ff99] dark:bg-[#00ff99] text-gray-900 dark:text-[#0a0f0d] font-bold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#00ff99]/50 hover:scale-105"
        >
          <span className="relative z-10">Ver proyectos</span>
          <div className="absolute inset-0 bg-[#00b4d8] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-gray-400 dark:text-gray-600" />
      </div>
    </section>
  );
}
