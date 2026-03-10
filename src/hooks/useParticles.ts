// src/hooks/useParticles.ts
import { useEffect } from "react";

export default function useParticles(selector = "section", count = 60) {
  useEffect(() => {
    console.log(
      "DEBUG: useParticles - Iniciando para selector:",
      selector,
      "count:",
      count,
    );

    const targetElements = document.querySelectorAll(selector);

    if (targetElements.length === 0) {
      console.log(
        "DEBUG: useParticles - Nenhum elemento encontrado com selector:",
        selector,
      );
      return;
    }

    console.log(
      "DEBUG: useParticles - Encontrados",
      targetElements.length,
      "elementos",
    );

    targetElements.forEach((element, index) => {
      console.log(
        `DEBUG: useParticles ${index} - Processando elemento:`,
        element.className,
      );

      // Verificar se já tem partículas
      const existingContainer = element.querySelector(".particles-container");
      if (existingContainer) {
        console.log(
          `DEBUG: useParticles ${index} - Já tem container, ignorando`,
        );
        return;
      }

      const particleContainer = document.createElement("div");
      particleContainer.className = "particles-container";

      (element as HTMLElement).style.position = "relative";
      element.appendChild(particleContainer);

      console.log(
        `DEBUG: useParticles ${index} - Criado container, adicionando`,
        count,
        "partículas",
      );

      for (let i = 0; i < count; i++) {
        const particle = document.createElement("div");
        const size = Math.random() * 4 + 2;
        const duration = Math.random() * 25 + 15;
        const delay = Math.random() * 10;
        const startX = Math.random() * 100;

        // Dentro do for loop (linha ~45), altere:
        particle.style.cssText = `
          width: ${size}px;
          height: ${size}px;
          top: 100vh; /* COMEÇA NA BASE DA TELA */
          left: ${startX}%;
          animation-duration: ${duration}s;
          animation-delay: ${delay}s;
          background: rgba(255, 255, 255, ${Math.random() * 0.5 + 0.3});
          animation-name: particle-float;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        `;

        particleContainer.appendChild(particle);
      }
    });

    return () => {
      console.log("DEBUG: useParticles - Limpando containers");
      const containers = document.querySelectorAll(".particles-container");
      console.log(
        "DEBUG: useParticles - Removendo",
        containers.length,
        "containers",
      );
      containers.forEach((container) => container.remove());
    };
  }, [selector, count]);
}
