import { User, Code2, Shield } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-[#0d1410] transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <User className="w-8 h-8 text-[#00ff99]" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Sobre mí
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <div className="relative w-64 h-64 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00ff99] to-[#00b4d8] rounded-2xl animate-pulse opacity-20" />
              <div className="absolute inset-2 bg-gray-100 dark:bg-[#0a0f0d] rounded-2xl flex items-center justify-center border-2 border-[#00ff99]/30">
                <Code2 className="w-32 h-32 text-[#00ff99]" />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Soy un programador especializado en <span className="text-[#00ff99] font-semibold">C y C++</span>.
              Me interesa la <span className="text-[#00b4d8] font-semibold">ciberseguridad</span> y la
              optimización del software.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Siempre busco nuevos retos y conocimientos que me ayuden a mejorar como desarrollador.
              Actualmente estoy ampliando mis habilidades con nuevos lenguajes y tecnologías.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                <Code2 className="w-5 h-5 text-[#00ff99]" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Desarrollo</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                <Shield className="w-5 h-5 text-[#00b4d8]" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Seguridad</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
