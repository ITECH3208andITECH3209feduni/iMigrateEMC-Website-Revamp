import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import TrustedPartnerSection from '@/components/home/TrustedPartnerSection';
import TeamSection from '@/components/home/TeamSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ReferencesSection from '@/components/home/ReferencesSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <TrustedPartnerSection />
      <TestimonialsSection />
      <TeamSection />
      <ReferencesSection />
    </main>
  );
}
