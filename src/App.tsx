import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { LanguageProvider } from './contexts/LanguageContext';
import { CookieConsentProvider } from './contexts/CookieConsentContext';
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
        <Route path="/" element={
          <main>
            <Hero />
            <Company />
            <Features />
            <FiscalIncentives />
            <Contact />
          </main>
        } />
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