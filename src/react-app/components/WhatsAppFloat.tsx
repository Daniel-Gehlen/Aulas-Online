import { useState, useEffect } from "react";

export default function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Show after initial delay
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    // Animate periodically with longer duration
    const animationInterval = setInterval(() => {
      setIsAnimating(true);
      // Keep visible for 7 seconds
      setTimeout(() => setIsAnimating(false), 7000);
    }, 15000); // Longer interval between animations

    return () => {
      clearTimeout(showTimer);
      clearInterval(animationInterval);
    };
  }, []);

  const handleWhatsAppClick = () => {
    const message =
      "Olá, Prof.Daniel vim do site, sou maior de idade e gostaria de mais informações sobre as aulas online de violão, Ukulêle e Guitarra. Se não for maior de idade alguém meu responsável irá dar continuidade com o senhor. Obrigado!";
    const whatsappLink = `https://wa.me/5551989345497?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink, "_blank");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 transition-all">
      {/* Text Balloon that changes color based on footer visibility */}
      <div className="absolute -top-12 right-0 z-20">
        <div className="border-2 border-gray-700 bg-white/90 text-gray-900 dark-footer:text-white dark-footer:bg-transparent dark-footer:border-white/50 px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all">
          Fale com o Professor!
        </div>
      </div>

      {/* Notification Bubble */}
      <div
        className={`
        absolute -top-48 -left-48 bg-white rounded-2xl p-4 shadow-2xl border border-gray-200 mb-4 w-72 z-10
        transform transition-all duration-500
        ${
          isAnimating
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-2 opacity-0 scale-95 pointer-events-none"
        }
      `}
      >
        <div className="flex items-center gap-3 mb-2">
          <img
            src="/assets/professor.jpg"
            alt="Professor Daniel Gehlen"
            onError={(e) => (e.currentTarget.src = "/assets/professor.svg")}
            className="w-8 h-8 rounded-full object-cover"
          />
          <div>
            <div className="font-semibold text-gray-900 text-sm">
              Professor Daniel
            </div>
            <div className="text-green-500 text-xs flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Online agora
            </div>
          </div>
        </div>
        <p className="text-gray-600 text-sm">
          🎵 Olá! Pronto para descobrir a alegria de tocar música? Vamos
          conversar!
        </p>

        {/* Arrow pointing to button */}
        <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white transform rotate-45 border-r border-b border-gray-200"></div>
      </div>

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className={`
          relative z-30
          w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl
          flex items-center justify-center text-white text-2xl
          transform transition-all duration-300 hover:scale-110 group
          ${isAnimating ? "animate-bounce" : ""}
        `}
        aria-label="Falar no WhatsApp"
      >
        <span className="group-hover:scale-110 transition-transform">💬</span>

        {/* Ripple Effect */}
        <div className="absolute inset-0 rounded-full bg-green-400 opacity-50 animate-ping"></div>

        {/* Notification Dot */}
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">1</span>
        </div>
      </button>
    </div>
  );
}
