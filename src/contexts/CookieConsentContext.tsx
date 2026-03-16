import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface CookieConsent {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

interface CookieConsentContextType {
  consent: CookieConsent;
  updateConsent: (newConsent: Partial<CookieConsent>) => void;
  showBanner: boolean;
  setShowBanner: (show: boolean) => void;
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  savePreferences: () => void;
}

const defaultConsent: CookieConsent = {
  necessary: true, // Always true as these are essential
  analytics: false,
  marketing: false,
};

const CookieConsentContext = createContext<CookieConsentContextType>({
  consent: defaultConsent,
  updateConsent: () => {},
  showBanner: true,
  setShowBanner: () => {},
  showModal: false,
  setShowModal: () => {},
  savePreferences: () => {},
});

export const useCookieConsent = () => useContext(CookieConsentContext);

export const CookieConsentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [consent, setConsent] = useState<CookieConsent>(defaultConsent);
  const [showBanner, setShowBanner] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Load saved preferences from localStorage
    const savedConsent = localStorage.getItem('cookieConsent');
    if (savedConsent) {
      setConsent(JSON.parse(savedConsent));
      setShowBanner(false);
    }
  }, []);

  const updateConsent = (newConsent: Partial<CookieConsent>) => {
    setConsent(prev => ({ ...prev, ...newConsent }));
  };

  const savePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setShowBanner(false);
    setShowModal(false);

    // Load or unload scripts based on consent
    if (consent.analytics) {
      // Initialize analytics
      loadAnalytics();
    } else {
      // Remove analytics
      removeAnalytics();
    }

    if (consent.marketing) {
      // Initialize marketing scripts
      loadMarketing();
    } else {
      // Remove marketing scripts
      removeMarketing();
    }
  };

  const loadAnalytics = () => {
    // Example: Load Google Analytics
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=YOUR-ID';
    script.async = true;
    script.id = 'ga-script';
    document.head.appendChild(script);
  };

  const removeAnalytics = () => {
    // Remove analytics scripts
    const script = document.getElementById('ga-script');
    if (script) {
      script.remove();
    }
  };

  const loadMarketing = () => {
    // Example: Load marketing scripts
    const script = document.createElement('script');
    script.src = 'https://your-marketing-script.js';
    script.async = true;
    script.id = 'marketing-script';
    document.head.appendChild(script);
  };

  const removeMarketing = () => {
    // Remove marketing scripts
    const script = document.getElementById('marketing-script');
    if (script) {
      script.remove();
    }
  };

  return (
    <CookieConsentContext.Provider
      value={{
        consent,
        updateConsent,
        showBanner,
        setShowBanner,
        showModal,
        setShowModal,
        savePreferences,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
};