import Navbar from '@/components/navbar';
import HeroSection from '@/components/sections/hero-section';
import ServicesSection from '@/components/sections/services-section';
import PricingSection from '@/components/sections/pricing-section';
import TrainersSection from '@/components/sections/trainers-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import ContactSection from '@/components/sections/contact-section';
import Footer from '@/components/footer';
import CTASection from '@/components/sections/cta-section';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PricingSection />
      <TrainersSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  );
}