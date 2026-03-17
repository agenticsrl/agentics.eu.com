import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
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
import Footer from './components/Footer';
import SmartChatbot from './components/services/SmartChatbot';
import AIReceptionist from './components/services/AIReceptionist';
import CustomGPTs from './components/services/CustomGPTs';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import About from './components/About';
import CookieBanner from './components/CookieBanner';
import CookieModal from './components/CookieModal';
import ChatConsentGate from './components/ChatConsentGate';

const HomePage: React.FC = () => {
  const { language } = useLanguage();

  useSEO({
    title: language === 'it'
      ? 'Agentics - Software personalizzato potenziato con AI per aziende | Automazione intelligente'
      : 'Agentics - Custom software powered by AI for businesses | Intelligent automation',
    description: language === 'it'
      ? 'Agentics sviluppa software personalizzato potenziato con AI per aziende: chatbot intelligenti, receptionist vocali, soluzioni su misura e automazioni operative.'
      : 'Agentics builds custom software powered by AI for businesses: smart chatbots, voice receptionists, tailored solutions, and operational automations.',
    keywords: language === 'it'
      ? 'software personalizzato potenziato con AI, automazione aziendale, chatbot AI, receptionist vocale AI, sviluppo software su misura'
      : 'custom software powered by AI, business automation, AI chatbot, AI voice receptionist, bespoke software development',
    canonicalUrl: 'https://agentics.eu.com/',
    language,
    ogImageAlt: language === 'it'
      ? 'Agentics - Soluzioni AI per Aziende'
      : 'Agentics - AI Solutions for Business'
  });

  return (
    <main>
      <Hero />
      <Company />
      <Features />
      <FiscalIncentives />
      <Contact />
    </main>
  );
};

function AnimatedRoutes() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/services/smart-chatbot" element={<SmartChatbot />} />
        <Route path="/services/ai-receptionist" element={<AIReceptionist />} />
        <Route path="/services/custom-gpts" element={<CustomGPTs />} />
        <Route path="/services/software-personalizzato" element={<CustomGPTs />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <LanguageProvider>
      <CookieConsentProvider>
        <Router>
          <div className="min-h-screen bg-white font-body text-graphite">
            <Navbar />
            <AnimatedRoutes />
            <Footer />
            <CookieBanner />
            <CookieModal />
            <ChatConsentGate />
          </div>
        </Router>
      </CookieConsentProvider>
    </LanguageProvider>
  );
}

export default App;
