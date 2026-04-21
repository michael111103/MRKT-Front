import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoTicker from './components/LogoTicker';
import NewsSection from './components/NewsSection';
import NoiseToDirection from './components/NoiseToDirection';
import TransformSection from './components/TransformSection';
import KnowWhatToDo from './components/KnowWhatToDo';
import HowItWorks from './components/HowItWorks';
import TestimonialsSection from './components/TestimonialsSection';
import CompareSection from './components/CompareSection';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="noise bg-[#050810] min-h-screen text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <LogoTicker />
      <NewsSection />
      <NoiseToDirection />
      <TransformSection />
      <KnowWhatToDo />
      <HowItWorks />
      <TestimonialsSection />
      <CompareSection />
      <PricingSection />
      <Footer />
    </div>
  );
}

export default App;
