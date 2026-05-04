import { Folder, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Inception',
    description: 'Proyecto de administración de sistemas y contenerización con Docker. Despliegue de una infraestructura web completa (Nginx, WordPress, MariaDB) en contenedores separados usando Docker Compose.',
    tags: ['Docker', 'Linux', 'DevOps', 'Nginx'],
    github: 'https://github.com/Escudo5/inception',
    demo: 'https://github.com/Escudo5/inception',
  },
  {
    title: 'ft_irc',
    description: 'Desarrollo de un servidor IRC (Internet Relay Chat) en C++ 98 desde cero. Manejo de múltiples clientes mediante I/O multiplexing (sockets, select/poll/epoll) y comandos del protocolo.',
    tags: ['C++', 'Redes', 'Sockets', 'Protocolos'],
    github: 'https://github.com/Escudo5/ft_irc',
    demo: 'https://github.com/Escudo5/ft_irc',
  },
  {
    title: 'Minishell',
    description: 'Implementación de una shell funcional en C que replica el comportamiento de bash, incluyendo pipes, redirecciones, gestión de señales y manejo de variables de entorno.',
    tags: ['C', 'Sistema', 'Procesos'],
    github: 'https://github.com/Escudo5/minishell',
    demo: 'https://github.com/Escudo5/minishell',
  },
  {
    title: 'Cub3D',
    description: 'Motor de renderizado 3D inspirado en Wolfenstein 3D usando raycasting. Proyecto que explora gráficos, matemáticas y optimización del rendimiento en C.',
    tags: ['C', 'Gráficos', 'Raycasting'],
    github: 'https://github.com/Escudo5/cub3d',
    demo: 'https://github.com/Escudo5/cub3d',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-white/70 dark:bg-slate-950/40 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Folder className="w-8 h-8 text-brand-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Proyectos
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative p-6 glass-panel rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col h-full"
            >
              <div className="absolute top-4 right-4 flex gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-200/80 dark:bg-white/10 rounded-xl hover:bg-brand-primary hover:text-white dark:text-slate-300 transition-colors duration-300"
                  aria-label="View on GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-200/80 dark:bg-white/10 rounded-xl hover:bg-brand-secondary hover:text-white dark:text-slate-300 transition-colors duration-300"
                  aria-label="View demo"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 pr-20">
                {project.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-xs font-medium bg-brand-primary/10 text-brand-primary dark:text-brand-secondary rounded-full border border-brand-primary/20 group-hover:border-brand-primary/50 transition-colors duration-300"
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
