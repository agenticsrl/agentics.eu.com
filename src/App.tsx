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
      ? 'Agentics - Software AI Personalizzato per Aziende | Automazione Intelligente'
      : 'Agentics - Custom AI Software for Businesses | Intelligent Automation',
    description: language === 'it'
      ? 'Agentics sviluppa soluzioni AI personalizzate per aziende: chatbot intelligenti, receptionist vocali, software su misura e automazioni operative.'
      : 'Agentics builds custom AI solutions for businesses: smart chatbots, voice receptionists, tailored software, and operational automations.',
    keywords: language === 'it'
      ? 'software AI personalizzato, automazione aziendale, chatbot AI, receptionist vocale AI, sviluppo software su misura'
      : 'custom AI software, business automation, AI chatbot, AI voice receptionist, bespoke software development',
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
