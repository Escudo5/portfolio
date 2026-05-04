import { useState } from 'react';
import { Mail, Linkedin, Github, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-slate-50/80 dark:bg-slate-950/20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Mail className="w-8 h-8 text-brand-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Contacto
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-slate-700 dark:text-slate-300">
              Estoy abierto a colaboraciones, oportunidades freelance o conversaciones sobre producto, tecnología e ideas con potencial real de ejecución.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:sergio03.dev@gmail.com"
                className="group flex items-center gap-4 p-4 glass-panel rounded-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-3 bg-white/80 dark:bg-white/10 rounded-xl group-hover:scale-105 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Email</div>
                  <div className="font-medium text-slate-900 dark:text-white">sergio03.dev@gmail.com</div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/smarquez-"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 glass-panel rounded-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-3 bg-white/80 dark:bg-white/10 rounded-xl group-hover:scale-105 transition-transform duration-300">
                  <Linkedin className="w-6 h-6 text-brand-secondary" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">LinkedIn</div>
                  <div className="font-medium text-slate-900 dark:text-white">linkedin.com/in/smarquez-</div>
                </div>
              </a>

              <a
                href="https://github.com/Escudo5"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 glass-panel rounded-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-3 bg-white/80 dark:bg-white/10 rounded-xl group-hover:scale-105 transition-transform duration-300">
                  <Github className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">GitHub</div>
                  <div className="font-medium text-slate-900 dark:text-white">github.com/Escudo5</div>
                </div>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 glass-panel rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-primary/30 transition-colors duration-300 text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 glass-panel rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-primary/30 transition-colors duration-300 text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 glass-panel rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-primary/30 transition-colors duration-300 resize-none text-slate-900 dark:text-white"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-brand-primary text-white font-bold rounded-full hover:bg-brand-secondary transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl hover:shadow-brand-primary/20"
            >
              {isSubmitted ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Mensaje enviado
                </>
              ) : isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Enviar mensaje
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
