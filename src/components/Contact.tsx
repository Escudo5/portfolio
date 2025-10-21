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
    <section id="contact" className="py-20 px-4 bg-gray-50 dark:bg-[#0a0f0d] transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Mail className="w-8 h-8 text-[#00ff99]" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Contacto
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Estoy disponible para colaboraciones, proyectos freelance o simplemente para conversar sobre tecnología y ciberseguridad.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:sergiomargar03@gmail.com"
                className="group flex items-center gap-4 p-4 bg-white dark:bg-[#0d1410] rounded-lg border border-gray-200 dark:border-gray-800 hover:border-[#00ff99] dark:hover:border-[#00ff99] transition-all duration-300 hover:shadow-lg hover:shadow-[#00ff99]/10"
              >
                <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-[#00ff99]" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Email</div>
                  <div className="font-medium text-gray-900 dark:text-white">sergiomargar03@gmail.com</div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/smarquez-"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 bg-white dark:bg-[#0d1410] rounded-lg border border-gray-200 dark:border-gray-800 hover:border-[#00b4d8] dark:hover:border-[#00b4d8] transition-all duration-300 hover:shadow-lg hover:shadow-[#00b4d8]/10"
              >
                <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Linkedin className="w-6 h-6 text-[#00b4d8]" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">LinkedIn</div>
                  <div className="font-medium text-gray-900 dark:text-white">linkedin.com/in/smarquez-</div>
                </div>
              </a>

              <a
                href="https://github.com/Escudo5"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 bg-white dark:bg-[#0d1410] rounded-lg border border-gray-200 dark:border-gray-800 hover:border-[#00ff99] dark:hover:border-[#00ff99] transition-all duration-300 hover:shadow-lg hover:shadow-[#00ff99]/10"
              >
                <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Github className="w-6 h-6 text-[#00ff99]" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">GitHub</div>
                  <div className="font-medium text-gray-900 dark:text-white">github.com/Escudo5</div>
                </div>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white dark:bg-[#0d1410] border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-[#00ff99] dark:focus:border-[#00ff99] transition-colors duration-300 text-gray-900 dark:text-white"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white dark:bg-[#0d1410] border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-[#00ff99] dark:focus:border-[#00ff99] transition-colors duration-300 text-gray-900 dark:text-white"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-white dark:bg-[#0d1410] border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-[#00ff99] dark:focus:border-[#00ff99] transition-colors duration-300 resize-none text-gray-900 dark:text-white"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#00ff99] text-gray-900 font-bold rounded-lg hover:bg-[#00b4d8] hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl hover:shadow-[#00ff99]/30"
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
