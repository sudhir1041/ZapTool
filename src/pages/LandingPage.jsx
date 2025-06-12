
import React from 'react';
import Navbar from '@/pages/landing/Navbar';
import HeroSection from '@/pages/landing/HeroSection';
import FeaturesSection from '@/pages/landing/FeaturesSection';
import PricingSection from '@/pages/landing/PricingSection';
import TestimonialsSection from '@/pages/landing/TestimonialsSection';
import CTASection from '@/pages/landing/CTASection';
import Footer from '@/pages/landing/Footer';

function LandingPage({ showToast }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Navbar showToast={showToast} />
      <main>
        <HeroSection showToast={showToast} />
        <FeaturesSection />
        <PricingSection showToast={showToast} />
        <TestimonialsSection />
        <CTASection showToast={showToast} />
      </main>
      <Footer showToast={showToast} />
    </div>
  );
}

export default LandingPage;
