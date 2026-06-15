import React from 'react';
import TopBanner from './components/TopBanner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DashboardMetrics from './components/DashboardMetrics';
import IncubationPromo from './components/IncubationPromo';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased">
      <TopBanner />
      <Navbar />
      <main>
        <Hero />
        <DashboardMetrics />
        <IncubationPromo />
      </main>
      <Footer />
    </div>
  );
}