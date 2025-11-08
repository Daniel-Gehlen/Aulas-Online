import { useEffect } from 'react';
import HeroSection from '@/react-app/components/HeroSection';
import AboutSection from '@/react-app/components/AboutSection';
import ServicesSection from '@/react-app/components/ServicesSection';
import TestimonialsSection from '@/react-app/components/TestimonialsSection';
import CTASection from '@/react-app/components/CTASection';
import Footer from '@/react-app/components/Footer';
import WhatsAppFloat from '@/react-app/components/WhatsAppFloat';

export default function Home() {
  useEffect(() => {
    // Load Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
