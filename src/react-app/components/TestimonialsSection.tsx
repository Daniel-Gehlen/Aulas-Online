import { useState } from "react";
import LeadForm from "./LeadForm";

const testimonials = [
  {
    id: 1,
    name: "Max",
    company: "Estudante de Violão",
    text: "O professor Daniel tem uma didática incrível! Em poucas aulas já consegui tocar minhas primeiras músicas no violão. Super recomendo!",
    rating: 5,
    result: "Primeiras músicas",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=Max&mouth=smile&eyes=happy&eyebrows=default&backgroundColor=b6e3f4",
  },
  {
    id: 2,
    name: "Leo",
    company: "Aprendiz de Guitarra",
    text: "Aprendi mais em 2 meses com o Daniel do que em 1 ano tentando sozinha. As aulas são divertidas e ele explica tudo com paciência.",
    rating: 5,
    result: "2 meses = 1 ano",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=Luna&mouth=smile&eyes=happy&eyebrows=default&backgroundColor=ffd5dc",
  },
  {
    id: 3,
    name: "Luna",
    company: "Guitarrista Iniciante",
    text: "As aulas de guitarra são sensacionais! O método personalizado faz toda diferença. Finalmente consigo tocar os solos que sempre quis!",
    rating: 5,
    result: "Solos realizados",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=Leo&mouth=smile&eyes=happy&eyebrows=default&backgroundColor=c0aede",
  },
  {
    id: 4,
    name: "Carla",
    company: "Violonista Hobbyista",
    text: "Professor Daniel tem uma paciência incrível e adapta as aulas ao meu ritmo. Agora toco as músicas que amo e me sinto muito mais relaxada!",
    rating: 5,
    result: "Relaxamento musical",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=Carla&mouth=smile&eyes=happy&eyebrows=default&backgroundColor=ffdfba",
  },
  {
    id: 5,
    name: "Ana",
    company: "Ukulêle Enthusiast",
    text: "O ukulêle parecia impossível, mas com a metodologia do Professor Daniel ficou fácil e divertido. Recomendo para toda família!",
    rating: 5,
    result: "Família musical",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=Roberto&mouth=smile&eyes=happy&eyebrows=default&backgroundColor=baffc9",
  },
  {
    id: 6,
    name: "Roberto",
    company: "Violão e Teoria",
    text: "Além de aprender violão, entendi teoria musical de forma simples. Agora componho minhas próprias músicas! Gratidão eterna.",
    rating: 5,
    result: "Compositora",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=Ana&mouth=smile&eyes=happy&eyebrows=default&backgroundColor=ffb3ba",
  },
];

export default function TestimonialsSection() {
  const [showLeadForm, setShowLeadForm] = useState(false);

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-100">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-6">
                ⭐ O que dizem meus alunos
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Histórias de Sucesso que
                <span className="text-orange-600"> Inspiram</span>
              </h2>

              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Mais de 20 anos formando músicos satisfeitos e realizados. Veja
                o que nossos alunos têm a dizer sobre sua jornada musical
              </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden group"
                >
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-600/5 to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative z-10">
                    {/* Quote Icon */}
                    <div className="text-4xl text-orange-200 mb-4">"</div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xl">
                          ⭐
                        </span>
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-700 mb-6 leading-relaxed italic">
                      {testimonial.text}
                    </p>

                    {/* Result Badge */}
                    <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 rounded-full text-sm font-bold mb-6">
                      🎵 {testimonial.result}
                    </div>

                    {/* Author Info */}
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <h4 className="font-bold text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Section */}
            <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
              <div className="p-6 bg-white rounded-2xl shadow-lg">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  20+
                </div>
                <div className="text-gray-600">Anos de Experiência</div>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">3</div>
                <div className="text-gray-600">Instrumentos Ensinados</div>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  100%
                </div>
                <div className="text-gray-600">Satisfação dos Alunos</div>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-lg">
                <div className="text-3xl font-bold text-red-600 mb-2">
                  UFRGS
                </div>
                <div className="text-gray-600">Formação Acadêmica</div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-16">
              <div className="inline-flex flex-col items-center p-8 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Quer ser o próximo músico realizado?
                </h3>
                <p className="mb-6 text-orange-100">
                  Agende sua aula experimental gratuita e descubra a alegria de
                  tocar música
                </p>
                <button
                  onClick={() => setShowLeadForm(true)}
                  className="px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-orange-900 font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Quero Minha Aula Grátis! 🎵
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <LeadForm isOpen={showLeadForm} onClose={() => setShowLeadForm(false)} />
    </>
  );
}
