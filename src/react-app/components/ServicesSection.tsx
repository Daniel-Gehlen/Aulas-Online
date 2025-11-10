import { useState } from "react";
import LeadForm from "./LeadForm";

export default function ServicesSection() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<
    null | "individual" | "duo" | "recorded"
  >(null);

  const services = [
    {
      id: "aulas-individuais",
      title: "Aulas Individuais",
      description:
        "Acompanhamento personalizado em tempo real, ideal para quem busca orientação direta",
      icon: "🎯",
      features: [
        "1 hora por semana",
        "Plano personalizado",
        "Feedback em tempo real",
        "Suporte entre aulas",
      ],
      color: "from-orange-500 to-red-500",
      price: "R$ 330/mês",
    },
    {
      id: "aulas-dupla",
      title: "Aulas em Dupla",
      description:
        "Aprendizado colaborativo perfeito para amigos ou familiares que querem aprender juntos",
      icon: "👥",
      features: [
        "30min cada por semana",
        "Aprendizado colaborativo",
        "Repertório compartilhado",
        "Economia para ambos",
      ],
      color: "from-purple-500 to-pink-500",
      price: "R$ 250/mês (cada)",
    },
    {
      id: "curso-gravado",
      title: "Curso Gravado",
      description:
        "Flexibilidade total de horários e um investimento único para aprender no seu ritmo",
      icon: "📹",
      features: [
        "10+ horas de vídeo",
        "Acesso vitalício",
        "Material em PDF",
        "Certificado incluso",
      ],
      color: "from-green-500 to-teal-500",
      price: "R$ 297 (12x)",
    },
    {
      id: "instrumentos",
      title: "Múltiplos Instrumentos",
      description:
        "Aprenda violão, guitarra ou ukulêle com metodologia adaptada para cada instrumento",
      icon: "🎸",
      features: [
        "Violão Clássico",
        "Guitarra Elétrica",
        "Ukulêle",
        "Teoria Musical",
      ],
      color: "from-blue-500 to-purple-500",
      price: "Todos os níveis",
    },
  ];

  const handleWhatsAppContact = (service: (typeof services)[number]) => {
    // Use a context-specific message including the standard preface
    const base =
      "Olá, Prof.Daniel vim do site, sou maior de idade e gostaria de mais informações sobre as aulas online";
    const details = `: ${service.title} — ${
      service.price || "Preço sob consulta"
    }`;
    const extra =
      " Se não for maior de idade alguém meu responsável irá dar continuidade com o senhor. Obrigado!";
    const message = `${base}${details}.${extra}`;
    const whatsappUrl = `https://wa.me/5551989345497?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-orange-900 to-red-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-6">
              🎵 Por que Aprender a Tocar um Instrumento?
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Desenvolve sua Mente e
              <span className="text-yellow-300"> Reduz o Estresse</span>
            </h2>

            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              A música estimula a criatividade, melhora a memória, desenvolve
              coordenação motora e é uma forma terapêutica de expressão e
              relaxamento
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-white mb-4">
                Desenvolve a Mente
              </h3>
              <p className="text-orange-100">
                A música estimula a criatividade, melhora a memória e desenvolve
                a coordenação motora.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="text-4xl mb-4">😌</div>
              <h3 className="text-xl font-bold text-white mb-4">
                Reduz o Estresse
              </h3>
              <p className="text-orange-100">
                Tocar um instrumento é uma forma terapêutica de expressão e
                relaxamento.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-white mb-4">
                Conexão Social
              </h3>
              <p className="text-orange-100">
                Compartilhar música cria laços e proporciona momentos especiais
                com familiares e amigos.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.id} id={service.id} className="relative group">
                <div
                  className={`relative overflow-hidden rounded-2xl p-8 h-full transition-all duration-500 transform bg-gradient-to-br ${
                    service.color
                  } ${
                    hoveredService === service.id
                      ? "scale-105 shadow-2xl"
                      : "scale-100 shadow-lg"
                  }`}
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <div className="relative z-10">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-white/90 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-2 mb-4">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 text-white/80"
                        >
                          <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="text-yellow-300 font-bold text-lg">
                      {service.price}
                    </div>

                    <button
                      onClick={() => {
                        // Open lead form and mark which plan opened it
                        if (service.id === "aulas-individuais")
                          setSelectedPlan("individual");
                        else if (service.id === "aulas-dupla")
                          setSelectedPlan("duo");
                        else if (service.id === "curso-gravado")
                          setSelectedPlan("recorded");
                        else setSelectedPlan("individual");
                        setShowLeadForm(true);
                      }}
                      className="mt-6 inline-flex items-center px-6 py-3 bg-yellow-300 hover:bg-yellow-200 text-orange-900 font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Aula Grátis 🎵
                    </button>
                  </div>

                  {/* Hover State - Contact Info */}
                  <div
                    className={`absolute inset-0 p-8 flex flex-col items-center justify-center text-center transition-all duration-500 z-20 ${
                      hoveredService === service.id
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4 pointer-events-none"
                    }`}
                  >
                    <img
                      src="/assets/professor.jpg"
                      alt="Professor Daniel Gehlen"
                      className="w-20 h-20 rounded-full overflow-hidden mb-4 border-4 border-white shadow-lg object-cover"
                    />

                    <h4 className="text-white font-bold mb-2">
                      Entre em contato
                    </h4>
                    <p className="text-white/90 text-sm mb-4">
                      Professor Daniel Gehlen
                    </p>

                    <button
                      onClick={() => handleWhatsAppContact(service)}
                      className="inline-flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      <span className="mr-2">💬</span>
                      WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* How Classes Work */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
              <div className="text-4xl mb-4">📹</div>
              <h3 className="text-xl font-bold text-white mb-4">
                Videochamada
              </h3>
              <p className="text-orange-100">
                Aulas via Zoom, Meet ou plataforma de sua preferência
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
              <div className="text-4xl mb-4">🎼</div>
              <h3 className="text-xl font-bold text-white mb-4">
                Repertório Personalizado
              </h3>
              <p className="text-orange-100">
                Você escolhe as músicas que quer aprender
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-bold text-white mb-4">
                Horários Flexíveis
              </h3>
              <p className="text-orange-100">
                Agendamento de acordo com sua disponibilidade
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="inline-flex flex-col md:flex-row items-center gap-4 p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Qual opção é ideal para você?
                </h3>
                <p className="text-orange-100">
                  Agende uma aula experimental gratuita e descubra sua jornada
                  musical!
                </p>
              </div>
              <button
                onClick={() => setShowLeadForm(true)}
                className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-300 text-orange-900 font-bold rounded-full hover:from-yellow-300 hover:to-yellow-200 transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap"
              >
                Aula Grátis 🎵
              </button>
            </div>
          </div>
        </div>
      </div>
      <LeadForm
        isOpen={showLeadForm}
        onClose={() => {
          setShowLeadForm(false);
          setSelectedPlan(null);
        }}
        plan={selectedPlan}
      />
    </section>
  );
}
