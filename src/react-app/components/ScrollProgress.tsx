// src/react-app/components/ScrollProgress.tsx
import { useEffect, useState } from "react";
import useScrollProgress from "../../hooks/useScrollProgress";

export default function ScrollProgress() {
  const scrollProgress = useScrollProgress();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (scrollProgress === 0 || !isVisible) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-900/50 z-[9999]">
      <div
        className="h-full bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 transition-all duration-300 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xs font-medium bg-black/50 px-2 py-1 rounded-full">
        {Math.round(scrollProgress)}%
      </div>
    </div>
  );
}
