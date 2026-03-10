import { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Hook for scroll progress
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = docHeight > 0 ? scrollTop / docHeight : 0;
      setProgress(scrollProgress);

      // Calculate current section
      const sections = document.querySelectorAll('[data-section]');
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setCurrentSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { progress, currentSection };
}

// Hook for reveal animations on scroll
export function useRevealAnimation<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

// Hook for parallax effect
export function useParallax(speed: number = 0.5) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top + scrollY;
      const relativeScroll = scrollY - elementTop + window.innerHeight;
      
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const yPos = relativeScroll * speed * 0.1;
        element.style.transform = `translateY(${yPos}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return ref;
}

// Hook for GSAP scroll animations
export function useGsapScrollAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear previous triggers
    triggersRef.current.forEach(trigger => trigger.kill());
    triggersRef.current = [];

    // Animate elements with data-animate attribute
    const animatedElements = container.querySelectorAll('[data-animate]');
    
    animatedElements.forEach((element) => {
      const animationType = element.getAttribute('data-animate');
      const delay = parseFloat(element.getAttribute('data-delay') || '0');
      const duration = parseFloat(element.getAttribute('data-duration') || '1');

      let fromVars: gsap.TweenVars = { opacity: 0 };
      let toVars: gsap.TweenVars = { 
        opacity: 1, 
        duration, 
        delay,
        ease: 'power3.out'
      };

      switch (animationType) {
        case 'fade-up':
          fromVars = { ...fromVars, y: 60 };
          toVars = { ...toVars, y: 0 };
          break;
        case 'fade-down':
          fromVars = { ...fromVars, y: -60 };
          toVars = { ...toVars, y: 0 };
          break;
        case 'fade-left':
          fromVars = { ...fromVars, x: -80 };
          toVars = { ...toVars, x: 0 };
          break;
        case 'fade-right':
          fromVars = { ...fromVars, x: 80 };
          toVars = { ...toVars, x: 0 };
          break;
        case 'scale':
          fromVars = { ...fromVars, scale: 0.8 };
          toVars = { ...toVars, scale: 1 };
          break;
        case 'rotate':
          fromVars = { ...fromVars, rotation: -10, scale: 0.9 };
          toVars = { ...toVars, rotation: 0, scale: 1 };
          break;
      }

      const trigger = ScrollTrigger.create({
        trigger: element,
        start: 'top 85%',
        onEnter: () => {
          gsap.fromTo(element, fromVars, toVars);
        },
        once: true
      });

      triggersRef.current.push(trigger);
    });

    return () => {
      triggersRef.current.forEach(trigger => trigger.kill());
    };
  }, []);

  return containerRef;
}

// Hook for section snap
export function useSectionSnap(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState(0);
  const isScrollingRef = useRef(false);

  const scrollToSection = useCallback((index: number) => {
    if (index < 0 || index >= sectionIds.length) return;
    
    const section = document.getElementById(sectionIds[index]);
    if (section) {
      isScrollingRef.current = true;
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(index);
      
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 1000);
    }
  }, [sectionIds]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrollingRef.current) {
        e.preventDefault();
        return;
      }

      const direction = e.deltaY > 0 ? 1 : -1;
      const newIndex = activeSection + direction;

      if (newIndex >= 0 && newIndex < sectionIds.length) {
        e.preventDefault();
        scrollToSection(newIndex);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [activeSection, sectionIds, scrollToSection]);

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingRef.current) return;

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sectionIds.forEach((id, index) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionTop = rect.top + window.scrollY;
          const sectionBottom = sectionTop + rect.height;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);

  return { activeSection, scrollToSection };
}

// Hook for mouse parallax (for floating elements)
export function useMouseParallax(intensity: number = 20) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * intensity;
      const y = (e.clientY / window.innerHeight - 0.5) * intensity;
      setPosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [intensity]);

  return position;
}

// Hook for text scramble effect
export function useTextScramble(text: string, isActive: boolean) {
  const [displayText, setDisplayText] = useState(text);
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

  useEffect(() => {
    if (!isActive) return;

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      iteration += 1 / 2;

      if (iteration >= text.length) {
        clearInterval(interval);
        setDisplayText(text);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [text, isActive]);

  return displayText;
}
