import { Code2, Server, Globe, Lightbulb, Database, Cpu } from 'lucide-react';

const skills = [
  {
    name: 'C / C++',
    icon: Code2,
    description: 'Desarrollo de aplicaciones de bajo nivel, gestión de memoria y optimización de rendimiento.'
  },
  {
    name: 'Infraestructura y DevOps',
    icon: Server,
    description: 'Despliegue de arquitecturas escalables, contenerización con Docker y administración de sistemas Linux.'
  },
  {
    name: 'Inglés nivel B2',
    icon: Globe,
    description: 'Lectura de documentación técnica, comunicación con equipos internacionales y seguimiento de recursos actualizados.'
  },
  {
    name: 'Aprendizaje autónomo',
    icon: Lightbulb,
    description: 'Capacidad para investigar, aprender nuevas tecnologías y resolver problemas complejos de forma independiente.'
  },
  {
    name: 'Estructuras de datos',
    icon: Database,
    description: 'Diseño e implementación de estructuras eficientes para la gestión óptima de información.'
  },
  {
    name: 'Arquitectura de Software',
    icon: Cpu,
    description: 'Diseño de sistemas robustos, redes (sockets) y desarrollo de protocolos a medida.'
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-slate-50/80 dark:bg-slate-950/20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Code2 className="w-8 h-8 text-brand-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Habilidades
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="group relative p-6 glass-panel rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-white/80 dark:bg-white/5 rounded-xl group-hover:scale-105 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-brand-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{skill.name}</h3>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
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
