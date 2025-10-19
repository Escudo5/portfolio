import { Code2, Shield, Globe, Lightbulb, Database, Cpu } from 'lucide-react';

const skills = [
  {
    name: 'C / C++',
    icon: Code2,
    description: 'Desarrollo de aplicaciones de bajo nivel, gestión de memoria y optimización de rendimiento.'
  },
  {
    name: 'Ciberseguridad básica',
    icon: Shield,
    description: 'Análisis de vulnerabilidades, prácticas de código seguro y fundamentos de protección de sistemas.'
  },
  {
    name: 'Inglés nivel B2',
    icon: Globe,
    description: 'Lectura de documentación técnica, comunicación con equipos internacionales y seguimiento de recursos actualizados.'
  },
  {
    name: 'Aprendizaje autónomo',
    icon: Lightbulb,
    description: 'Capacidad para investigar, aprender nuevas tecnologías y resolver problemas de forma independiente.'
  },
  {
    name: 'Estructuras de datos',
    icon: Database,
    description: 'Diseño e implementación de estructuras eficientes para la gestión óptima de información.'
  },
  {
    name: 'Lógica de programación',
    icon: Cpu,
    description: 'Resolución de problemas complejos mediante algoritmos eficientes y pensamiento computacional.'
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-[#0a0f0d] transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Code2 className="w-8 h-8 text-[#00ff99]" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Habilidades
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="group relative p-6 bg-white dark:bg-[#0d1410] rounded-xl border border-gray-200 dark:border-gray-800 hover:border-[#00ff99] dark:hover:border-[#00ff99] transition-all duration-300 hover:shadow-xl hover:shadow-[#00ff99]/10"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-[#00ff99]" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{skill.name}</h3>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
