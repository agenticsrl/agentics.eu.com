import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { useLanguage } from './contexts/LanguageContext';
import { CookieConsentProvider } from './contexts/CookieConsentContext';
import { useSEO } from './hooks/useSEO';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Company from './components/Company';
import Features from './components/Features';
import FiscalIncentives from './components/FiscalIncentives';
import Contact from './components/Contact';
import Offices from './components/Offices';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import CookieModal from './components/CookieModal';

/* Rotte interne caricate su richiesta: la home non scarica il 3D di
   "Chi siamo", i grafici della pagina software né i testi legali. */
const CustomGPTs = lazy(() => import('./components/services/CustomGPTs'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./components/TermsOfService'));
const About = lazy(() => import('./components/About'));

const HomePage: React.FC = () => {
  const { language } = useLanguage();

  useSEO({
    title: language === 'it'
      ? 'Agentics - Software personalizzato potenziato con AI per aziende | Automazione intelligente'
      : 'Agentics - Custom software powered by AI for businesses | Intelligent automation',
    description: language === 'it'
      ? 'Agentics sviluppa software personalizzato potenziato con AI per aziende: soluzioni su misura e automazioni operative.'
      : 'Agentics builds custom software powered by AI for businesses: tailored solutions and operational automations.',
    keywords: language === 'it'
      ? 'software personalizzato potenziato con AI, automazione aziendale, sviluppo software su misura, soluzioni AI aziendali'
      : 'custom software powered by AI, business automation, bespoke software development, AI business solutions',
    canonicalUrl: 'https://agentics.eu.com/',
    language,
    ogImageAlt: language === 'it'
      ? 'Agentics - Soluzioni AI per Aziende'
      : 'Agentics - AI Solutions for Business'
  });

  return (
    <>
      <Hero />
      <Company />
      <Features />
      <FiscalIncentives />
      <Contact />
      <Offices />
    </>
  );
};

function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [location.pathname]);

  return (
    /* Riserva l'altezza della finestra durante il caricamento della rotta,
       così il passaggio non fa saltare il layout. */
    <Suspense fallback={<div className="min-h-screen" />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/services/custom-gpts" element={<CustomGPTs />} />
        <Route path="/services/software-personalizzato" element={<CustomGPTs />} />
      </Routes>
    </Suspense>
  );
}

function App() {
  return (
    <LanguageProvider>
      <CookieConsentProvider>
        <Router>
          <div className="min-h-screen bg-canvas font-body text-ink">
            <Navbar />
            <main>
              <AppRoutes />
            </main>
            <Footer />
            <CookieBanner />
            <CookieModal />
          </div>
        </Router>
      </CookieConsentProvider>
    </LanguageProvider>
  );
}

export default App;
