import { useState } from "react";
import { useAuth } from "@getmocha/users-service/react";
import LoginModal from "./LoginModal";
import LeadForm from "./LeadForm";

export default function HeroSection() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const { user } = useAuth();

  const handleCTAClick = () => {
    if (user) {
      // User is logged in, redirect to dashboard or specific action
      window.location.href = "/admin";
    } else {
      // Open the lead/send modal instead of login
      setShowLeadForm(true);
    }
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-600 via-red-600 to-purple-800">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-purple-600/20"></div>
        <div className="absolute inset-0 opacity-20">
          <div
            className="w-full h-full bg-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <div className="max-w-4xl mx-auto">
            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-white to-orange-100 bg-clip-text text-transparent">
              Descubra a Alegria de
              <span className="text-yellow-300"> Tocar Música</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl mb-8 text-orange-100 leading-relaxed">
              Aprenda violão, guitarra ou ukulêle no seu ritmo, com um professor
              qualificado pela UFRGS.
              <strong className="text-white">
                {" "}
                Cursos focados no prazer de tocar, perfeitos para hobbyistas.
              </strong>
            </p>

            {/* Social Proof */}
            <div className="flex flex-wrap justify-center items-center gap-8 mb-10 text-orange-200">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span>+20 Anos de Experiência</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                <span>Formado pela UFRGS</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                <span>Aulas Personalizadas</span>
              </div>
            </div>

            {/* Main CTA */}
            <div className="space-y-4">
              <button
                onClick={handleCTAClick}
                className="inline-flex items-center px-12 py-4 text-xl font-bold text-orange-900 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full hover:from-yellow-300 hover:to-yellow-200 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-yellow-400/50 group"
              >
                🎵 Quero Aprender Música
                <span className="ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>

              <p className="text-sm text-orange-200">
                ✅ Aula experimental gratuita • ✅ Horários flexíveis • ✅
                Aprenda suas músicas favoritas
              </p>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 flex flex-wrap justify-center gap-6 text-orange-200">
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                🎓 UFRGS Formado
              </div>
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                🎸 3 Instrumentos
              </div>
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                💎 Ensino Personalizado
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-400/20 rounded-full blur-xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-20 w-16 h-16 bg-orange-400/20 rounded-full blur-xl animate-float-slow"></div>
      </section>

      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
      <LeadForm isOpen={showLeadForm} onClose={() => setShowLeadForm(false)} />
    </>
  );
}
