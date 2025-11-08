import { useState } from "react";
import { useAuth } from "@getmocha/users-service/react";
import LoginModal from "./LoginModal";
import LeadForm from "./LeadForm";

export default function CTASection() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<
    null | "individual" | "duo" | "recorded"
  >(null);
  const { user } = useAuth();

  const handleMainCTA = () => {
    if (user) {
      window.location.href = "/admin";
    } else {
      // Open lead/send modal instead of login
      setSelectedPlan("individual");
      setShowLeadForm(true);
    }
  };

  const handleLeadFormCTA = (plan: "individual" | "duo" | "recorded") => {
    setSelectedPlan(plan);
    setShowLeadForm(true);
  };
  const handleCalendarCTA = () => {
    const url =
      "https://calendar.google.com/calendar/appointments/schedules/AcZssZ30Hdl55N7KMklV6JmmWTzasbOJRDh0LLvowzekOURx2EPBlIQXWvv2ElBtVYagXH_F6szTnnIL?gv=true";
    window.open(url, "_blank");
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-gray-900 via-orange-900 to-red-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-400/20 rounded-full blur-xl animate-float-delayed"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main CTA */}
            <div className="mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Pronto Para Descobrir a Alegria de
                <span className="text-yellow-300"> Tocar Música?</span>
              </h2>

              <p className="text-xl md:text-2xl text-orange-100 mb-8 leading-relaxed">
                Centenas de alunos já transformaram suas vidas através da
                música.
                <strong className="text-white">
                  {" "}
                  Seja o próximo a realizar esse sonho!
                </strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <button
                  onClick={handleMainCTA}
                  className="inline-flex items-center px-12 py-4 text-xl font-bold text-orange-900 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full hover:from-yellow-300 hover:to-yellow-200 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-yellow-400/50 group"
                >
                  🎵 Quero Aprender Música
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </button>

                <button
                  onClick={handleCalendarCTA}
                  className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-full hover:bg-white hover:text-orange-900 transition-all duration-300 transform hover:scale-105"
                >
                  📋 Agendar Aula Experimental
                </button>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-orange-200 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✅</span>
                  <span>Aula experimental gratuita</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✅</span>
                  <span>Horários flexíveis</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✅</span>
                  <span>Professor formado UFRGS</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✅</span>
                  <span>20+ anos de experiência</span>
                </div>
              </div>
            </div>

            {/* Secondary CTAs */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Individual Classes CTA */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Aulas Individuais?
                </h3>
                <p className="text-orange-100 mb-6">
                  Acompanhamento personalizado em tempo real com feedback
                  imediato e plano de estudos sob medida.
                </p>
                <button
                  onClick={() => handleLeadFormCTA("individual")}
                  className="w-full py-3 bg-orange-600 hover:bg-orange-500 text-white font-semibold rounded-lg transition-all duration-300 group-hover:transform group-hover:scale-105"
                >
                  Aulas Individuais 🎵
                </button>
              </div>

              {/* Group Classes CTA */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Aulas em Dupla?
                </h3>
                <p className="text-orange-100 mb-6">
                  Aprendizado colaborativo ideal para amigos ou familiares que
                  querem aprender juntos.
                </p>
                <button
                  onClick={() => handleLeadFormCTA("duo")}
                  className="w-full py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-lg transition-all duration-300 group-hover:transform group-hover:scale-105"
                >
                  Aulas em Dupla 👥
                </button>
              </div>

              {/* Recorded Course CTA */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="text-4xl mb-4">📹</div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Curso Gravado?
                </h3>
                <p className="text-orange-100 mb-6">
                  Flexibilidade total de horários com mais de 10 horas de
                  videoaulas organizadas.
                </p>
                <button
                  onClick={() => handleLeadFormCTA("recorded")}
                  className="w-full py-3 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-lg transition-all duration-300 group-hover:transform group-hover:scale-105"
                >
                  Curso Gravado 📹
                </button>
              </div>
            </div>

            {/* Final Trust Elements */}
            <div className="mt-16 flex flex-wrap justify-center gap-8 text-orange-200">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span>🎓 Licenciatura em Música - UFRGS</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                <span>🎸 Violão, Guitarra e Ukulêle</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                <span>💎 Metodologia Personalizada</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
      <LeadForm
        isOpen={showLeadForm}
        onClose={() => {
          setShowLeadForm(false);
          setSelectedPlan(null);
        }}
        plan={selectedPlan}
      />
    </>
  );
}
