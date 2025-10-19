import { Folder, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Minishell',
    description: 'Implementación de una shell funcional en C que replica el comportamiento de bash, incluyendo pipes, redirecciones, gestión de señales y manejo de variables de entorno.',
    tags: ['C', 'Sistema', 'Procesos'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Cub3D',
    description: 'Motor de renderizado 3D inspirado en Wolfenstein 3D usando raycasting. Proyecto que explora gráficos, matemáticas y optimización del rendimiento en C.',
    tags: ['C', 'Gráficos', 'Raycasting'],
    github: '#',
    demo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-white dark:bg-[#0d1410] transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Folder className="w-8 h-8 text-[#00ff99]" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Proyectos
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative p-6 bg-gray-50 dark:bg-[#0a0f0d] rounded-xl border border-gray-200 dark:border-gray-800 hover:border-[#00ff99] dark:hover:border-[#00ff99] transition-all duration-300 hover:shadow-xl hover:shadow-[#00ff99]/10 hover:-translate-y-2"
            >
              <div className="absolute top-4 right-4 flex gap-2">
                <a
                  href={project.github}
                  className="p-2 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-[#00ff99] dark:hover:bg-[#00ff99] hover:text-gray-900 transition-colors duration-300"
                  aria-label="View on GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={project.demo}
                  className="p-2 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-[#00b4d8] dark:hover:bg-[#00b4d8] hover:text-white transition-colors duration-300"
                  aria-label="View demo"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 pr-20">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-xs font-medium bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-[#00ff99] rounded-full border border-gray-300 dark:border-gray-700 group-hover:border-[#00ff99] transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
