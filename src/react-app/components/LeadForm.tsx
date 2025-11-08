import { useState, useEffect } from "react";
import { CreateLeadSchema } from "@/shared/types";

interface LeadFormProps {
  isOpen: boolean;
  onClose: () => void;
  plan?: "individual" | "duo" | "recorded" | null;
}

export default function LeadForm({ isOpen, onClose, plan }: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
    age: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (!isOpen) return;

    if (plan === "individual") {
      setFormData((prev) => ({ ...prev, interest: "Aulas Individuais" }));
    } else if (plan === "duo") {
      setFormData((prev) => ({ ...prev, interest: "Aulas em Dupla" }));
    } else if (plan === "recorded") {
      setFormData((prev) => ({ ...prev, interest: "Curso Gravado" }));
    }
  }, [plan, isOpen]);

  // When opened with a selected plan, prefill the interest and adjust UI
  // We'll update the interest value when the modal opens or when plan changes
  // to help the user and show price/labels in the UI.
  // Note: if the user manually changes the select, it will override this.
  // The plan prop will be used below to render plan-specific header and text.

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      // Validate form data
      const validatedData = CreateLeadSchema.parse(formData);

      // Build email payload to open user's mail client prefilled
      const to = "harmonia251251@gmail.com";
      const subject = `Solicitação de Aula - ${validatedData.interest} - ${validatedData.name}`;
      const bodyLines = [
        `Nome: ${validatedData.name}`,
        `Email: ${validatedData.email}`,
        `Idade: ${formData.age || "Não informado"}`,
        `Interesse: ${validatedData.interest}`,
        "",
        "Mensagem enviada automaticamente pelo site. Por favor, apenas envie o email.",
      ];
      const body = encodeURIComponent(bodyLines.join("\n"));
      const mailto = `mailto:${to}?subject=${encodeURIComponent(
        subject
      )}&body=${body}`;

      // Show success state and notify user they will be redirected to their email client
      setIsSuccess(true);

      // After 7 seconds redirect to mailto so user's mail client opens with prefilled content
      setTimeout(() => {
        // Close modal then open mail client
        onClose();
        // Use location.href to trigger mail client
        window.location.href = mailto;
      }, 7000);
    } catch (error: any) {
      if (error.errors) {
        // Zod validation errors
        const formErrors: Record<string, string> = {};
        error.errors.forEach((err: any) => {
          formErrors[err.path[0]] = err.message;
        });
        setErrors(formErrors);
      } else {
        setErrors({ general: "Erro ao enviar formulário. Tente novamente." });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl transform transition-all">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
        >
          ✕
        </button>

        {/* Success State */}
        {isSuccess ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600 text-3xl">✅</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Solicitação Enviada com Sucesso!
            </h2>
            <p className="text-gray-600 mb-6">
              Recebemos suas informações e entraremos em contato em até 24 horas
              para agendar sua aula experimental gratuita.
            </p>
            <div className="bg-orange-50 p-4 rounded-lg">
              <p className="text-orange-800 text-sm">
                📧 Verifique sua caixa de entrada e spam
              </p>
            </div>
          </div>
        ) : (
          // Form State
          <>
            <div className="text-center mb-6 relative">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl">🎵</span>
              </div>
              {/* Plan-specific title and badge */}
              {plan === "individual" ? (
                <>
                  <div className="absolute top-0 right-0 -translate-y-2 translate-x-2 bg-yellow-400 text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                    ★ Mais Popular
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Aulas Individuais — Online
                  </h2>
                  <p className="text-gray-600">
                    Aulas online semanais —{" "}
                    <span className="font-bold">R$ 330,00</span>
                  </p>
                </>
              ) : plan === "duo" ? (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Aulas em Dupla
                  </h2>
                  <p className="text-gray-600">
                    Experiência colaborativa ideal para amigos/familiares —{" "}
                    <span className="font-bold">R$ 250,00</span> por pessoa • 1h
                    semanal (30min exclusivos por estudante)
                  </p>
                </>
              ) : plan === "recorded" ? (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Curso Gravado — O caminho para tocar violão
                  </h2>
                  <p className="text-gray-600">
                    Curso disponível na HotMart para quem busca aprender no seu
                    ritmo. Acesso vitalício enquanto a plataforma e a internet
                    existirem.
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Agendar Aula Experimental Gratuita
                  </h2>
                  <p className="text-gray-600">
                    Preencha os dados abaixo e descubra a alegria de tocar
                    música em 30 minutos
                  </p>
                </>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`
                    w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors
                    ${
                      errors.name
                        ? "border-red-300 focus:ring-red-500"
                        : "border-gray-300 focus:ring-orange-500"
                    }
                  `}
                  placeholder="Seu nome completo"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email para Contato *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`
                    w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors
                    ${
                      errors.email
                        ? "border-red-300 focus:ring-red-500"
                        : "border-gray-300 focus:ring-orange-500"
                    }
                  `}
                  placeholder="seu@email.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Interest Field */}
              <div>
                <label
                  htmlFor="interest"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Principal Interesse *
                </label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleInputChange}
                  className={`
                    w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors
                    ${
                      errors.interest
                        ? "border-red-300 focus:ring-red-500"
                        : "border-gray-300 focus:ring-orange-500"
                    }
                  `}
                >
                  <option value="">Selecione seu interesse</option>
                  <option value="Aulas Individuais">
                    🎯 Aulas Individuais (R$ 330,00 semanais)
                  </option>
                  <option value="Aulas em Dupla">
                    👥 Aulas em Dupla (R$ 250,00 por pessoa — 1h semanal)
                  </option>
                  <option value="Curso Gravado">
                    📹 Curso Gravado — O caminho para tocar violão (HotMart)
                  </option>
                  <option value="Violão Iniciante">
                    🎸 Violão para Iniciantes
                  </option>
                  <option value="Guitarra">🎸 Guitarra Elétrica</option>
                  <option value="Ukulêle">🎵 Ukulêle</option>
                  <option value="Teoria Musical">📚 Teoria Musical</option>
                  <option value="Aula Experimental">
                    🎯 Apenas Aula Experimental
                  </option>
                </select>
                {errors.interest && (
                  <p className="text-red-500 text-sm mt-1">{errors.interest}</p>
                )}
              </div>

              {/* Age Field */}
              <div>
                <label
                  htmlFor="age"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Idade
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  className={`
                    w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors
                    ${
                      errors.age
                        ? "border-red-300 focus:ring-red-500"
                        : "border-gray-300 focus:ring-orange-500"
                    }
                  `}
                  placeholder="Sua idade"
                />
                {errors.age && (
                  <p className="text-red-500 text-sm mt-1">{errors.age}</p>
                )}
              </div>

              {/* General Error */}
              {errors.general && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-600 text-sm">{errors.general}</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`
                  w-full py-4 px-6 rounded-lg font-bold text-white transition-all duration-300
                  transform hover:scale-105 shadow-lg hover:shadow-xl
                  ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
                  }
                `}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Enviando...
                  </span>
                ) : plan === "recorded" ? (
                  "Quero saber mais sobre o curso"
                ) : (
                  "Agendar Aula Gratuita 🎵"
                )}
              </button>

              {/* Security Note */}
              <div className="text-center">
                <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
                  <span>🔒</span>
                  <span>Seus dados estão seguros e protegidos</span>
                </p>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
