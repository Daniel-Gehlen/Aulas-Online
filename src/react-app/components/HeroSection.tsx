import { useState } from "react";
import { useAuth } from "@getmocha/users-service/react";
import LoginModal from "./LoginModal";
import LeadForm from "./LeadForm";
import FloatingParticles from "./FloatingParticles";

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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
        <FloatingParticles count={120} />
        {/* Background Effects */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: 'radial-gradient(circle at center, #1e1b4b 0%, #000000 100%)'
          }}
        ></div>
        <div className="absolute inset-0 opacity-10">
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Descubra a
              <span className="bg-gradient-to-r from-[#fbbf24] via-[#f59e0b] to-[#d97706] bg-clip-text text-transparent"> Alegria de </span>
              <br />
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Tocar Música</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
              Aprenda <span className="text-[#f97316] font-semibold">violão</span>, <span className="text-[#dc2626] font-semibold">guitarra</span> ou <span className="text-[#7c3aed] font-semibold">ukulêle</span> no seu ritmo, com um professor
              qualificado pela <span className="text-[#fbbf24] font-bold">UFRGS</span>
            </p>

            {/* Social Proof */}
            <div className="flex flex-wrap justify-center items-center gap-6 mb-10">
              <div className="px-4 py-1.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10 flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(96,165,250,0.8)]"></div>
                <span className="text-sm text-gray-300">Formado UFRGS</span>
              </div>
              <div className="px-4 py-1.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)]"></div>
                <span className="text-sm text-gray-300">+20 Anos Experiência</span>
              </div>
              <div className="px-4 py-1.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10 flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(192,132,252,0.8)]"></div>
                <span className="text-sm text-gray-300">Aulas Personalizadas</span>
              </div>
            </div>

            {/* Main CTA */}
            <div className="space-y-4">
              <button
                onClick={handleCTAClick}
                className="inline-flex items-center px-12 py-4 text-xl font-bold text-black bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] rounded-full hover:from-[#f59e0b] hover:to-[#d97706] transform hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(245,158,11,0.3)] group"
              >
                <span className="mr-2">🎵</span> Quero Aprender Música
                <span className="ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-[#f97316]/10 rounded-full blur-[100px] animate-float"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-[#7c3aed]/10 rounded-full blur-[120px] animate-float-delayed"></div>
        <div className="absolute top-1/2 left-20 w-32 h-32 bg-[#dc2626]/10 rounded-full blur-[80px] animate-float-slow"></div>
      </section>

      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
      <LeadForm isOpen={showLeadForm} onClose={() => setShowLeadForm(false)} />
    </>
  );
}
