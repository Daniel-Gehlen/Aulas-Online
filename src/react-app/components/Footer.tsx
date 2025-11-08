export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img
                  src="/assets/professor.jpg"
                  alt="Professor Daniel Gehlen"
                  onError={(e) =>
                    (e.currentTarget.src = "/assets/professor.svg")
                  }
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <h3 className="text-2xl font-bold text-white">
                  Professor Daniel Gehlen
                </h3>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                Formado em Música pela UFRGS com ênfase em violão. Mais de 20
                anos de experiência ensinando música com foco no prazer de
                aprender. Especializado em violão, guitarra, ukulêle e teoria
                musical.
              </p>

              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/dgmusicguide/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Professor Daniel Gehlen"
                  className="w-10 h-10 bg-gradient-to-tr from-pink-500 via-yellow-400 to-purple-600 hover:opacity-90 rounded-full flex items-center justify-center transition-all"
                >
                  {/* Instagram official glyph (simplified) */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-white"
                    role="img"
                    aria-hidden="true"
                  >
                    <title>Instagram</title>
                    <path
                      fill="currentColor"
                      d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.5A4.5 4.5 0 1 0 16.5 13 4.5 4.5 0 0 0 12 8.5zm5.25-2.88a1.12 1.12 0 1 0 1.12 1.12 1.12 1.12 0 0 0-1.12-1.12z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 10.5A2.5 2.5 0 1 1 9.5 13 2.5 2.5 0 0 1 12 10.5z"
                      opacity="0"
                    />
                  </svg>
                </a>

                <a
                  href="https://www.youtube.com/@danielgehlen_music"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube Professor Daniel Gehlen"
                  className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors"
                >
                  {/* YouTube official glyph (simplified) */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-white"
                    role="img"
                    aria-hidden="true"
                  >
                    <title>YouTube</title>
                    <path
                      fill="currentColor"
                      d="M23.5 6.2a3 3 0 0 0-2.1-2.12C19.7 3.5 12 3.5 12 3.5s-7.7 0-9.4.58A3 3 0 0 0 .5 6.2 31.2 31.2 0 0 0 0 12a31.2 31.2 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.12C4.3 20.5 12 20.5 12 20.5s7.7 0 9.4-.58a3 3 0 0 0 2.1-2.12A31.2 31.2 0 0 0 24 12a31.2 31.2 0 0 0-.5-5.8zM9.8 15.6V8.4l6.5 3.6-6.5 3.6z"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Modalidades</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#aulas-individuais"
                    className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span>🎯</span> Aulas Individuais
                  </a>
                </li>
                <li>
                  <a
                    href="#aulas-dupla"
                    className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span>👥</span> Aulas em Dupla
                  </a>
                </li>
                <li>
                  <a
                    href="#curso-gravado"
                    className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span>📹</span> Curso Gravado
                  </a>
                </li>
                <li>
                  <a
                    href="#instrumentos"
                    className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span>🎸</span> Violão e Guitarra
                  </a>
                </li>
                <li>
                  <a
                    href="#instrumentos"
                    className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span>🎵</span> Ukulêle e Teoria
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Contato</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">📧</span>
                  <div>
                    <div className="text-gray-300 text-sm">Email</div>
                    <a
                      href="mailto:harmonia251251@gmail.com"
                      className="text-white hover:text-orange-400 transition-colors"
                    >
                      harmonia251251@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">📱</span>
                  <div>
                    <div className="text-gray-300 text-sm">WhatsApp</div>
                    <a
                      href="https://wa.me/5551989345497"
                      className="text-white hover:text-green-400 transition-colors"
                    >
                      (51) 98934-5497
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">🕒</span>
                  <div>
                    <div className="text-gray-300 text-sm">Horários</div>
                    <div className="text-white">Flexíveis e Personalizados</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">🎓</span>
                  <div>
                    <div className="text-gray-300 text-sm">Formação</div>
                    <div className="text-white">Licenciatura UFRGS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="border-t border-gray-800 pt-8 mb-8">
            <div className="flex flex-wrap justify-center gap-8 text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-green-400">✅</span>
                <span>Formação Acadêmica UFRGS</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-400">🎵</span>
                <span>20+ Anos de Experiência</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400">⭐</span>
                <span>100% Satisfação dos Alunos</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-purple-400">🚀</span>
                <span>Aula Experimental Gratuita</span>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 text-sm">
                © {currentYear} Aulas de Música Online - Professor Daniel
                Gehlen. Todos os direitos reservados.
              </div>

              <div className="flex gap-6 text-sm">
                <a
                  href="/privacy"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Política de Privacidade
                </a>
                <a
                  href="/terms"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Termos de Uso
                </a>
                <a
                  href="/lgpd"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  LGPD
                </a>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-full">
              <span className="text-white">
                🎵 Pronto para começar sua jornada musical?
              </span>
              <a
                href={`https://wa.me/5551989345497?text=${encodeURIComponent(
                  "Olá, Prof.Daniel vim do site, sou maior de idade e gostaria de mais informações sobre as aulas online de violão, Ukulêle e Guitarra. Se não for maior de idade alguém meu responsável irá dar continuidade com o senhor. Obrigado!"
                )}`}
                className="px-6 py-2 bg-yellow-400 hover:bg-yellow-300 text-orange-900 font-bold rounded-full transition-all duration-300 transform hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar Agora
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
