import React from 'react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

import HeroSection from './components/HeroSection';
import ProjectSpotlight from './components/ProjectSpotlight';
import AboutSection from './components/AboutSection';

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-parchment">
      {/* Grain overlay */}
      <div
        className="grain-overlay"
        aria-hidden="true"
      />

      {/* Navigation */}
      <Header />

      {/* Hero */}
      <HeroSection />

      {/* Selected work */}
      <ProjectSpotlight />

      {/* About + Skills + Experience */}
      <AboutSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}