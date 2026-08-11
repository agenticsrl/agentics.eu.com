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
  /**
   * Salva il consenso. Passare `override` quando la scelta è nota al momento del
   * click (es. "Accetta Tutti"): leggere `consent` subito dopo `updateConsent`
   * restituirebbe il valore del render precedente.
   */
  savePreferences: (override?: Partial<CookieConsent>) => void;
}

const defaultConsent: CookieConsent = {
  necessary: true, // Always true as these are essential
  analytics: false,
  marketing: false,
};

const STORAGE_KEY = 'cookieConsent';
const ANALYTICS_SCRIPT_ID = 'ga-script';
const MARKETING_SCRIPT_ID = 'marketing-script';

// Configurati via .env (VITE_*). Se assenti non viene iniettato nulla, invece di
// puntare a URL placeholder che fallirebbero la richiesta.
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;
const MARKETING_SCRIPT_URL = import.meta.env.VITE_MARKETING_SCRIPT_URL as string | undefined;

const injectScript = (id: string, src: string | undefined) => {
  if (!src || document.getElementById(id)) return;

  const script = document.createElement('script');
  script.src = src;
  script.async = true;
  script.id = id;
  document.head.appendChild(script);
};

const removeScript = (id: string) => {
  document.getElementById(id)?.remove();
};

/** Attiva o rimuove gli script di terze parti in base al consenso corrente. */
const applyConsent = (activeConsent: CookieConsent) => {
  if (activeConsent.analytics) {
    injectScript(
      ANALYTICS_SCRIPT_ID,
      GA_MEASUREMENT_ID ? `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}` : undefined
    );
  } else {
    removeScript(ANALYTICS_SCRIPT_ID);
  }

  if (activeConsent.marketing) {
    injectScript(MARKETING_SCRIPT_ID, MARKETING_SCRIPT_URL);
  } else {
    removeScript(MARKETING_SCRIPT_ID);
  }
};

/**
 * Legge il consenso salvato validandolo: un valore corrotto o scritto da una
 * versione precedente non deve far crashare il mount dell'app.
 */
const readStoredConsent = (): CookieConsent | null => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    const parsed: unknown = JSON.parse(raw);
    if (typeof parsed !== 'object' || parsed === null) return null;

    const stored = parsed as Partial<CookieConsent>;
    return {
      necessary: true,
      analytics: stored.analytics === true,
      marketing: stored.marketing === true,
    };
  } catch (error: unknown) {
    console.warn('Preferenze cookie non leggibili, riparto dai default', error);
    return null;
  }
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
    const savedConsent = readStoredConsent();
    if (savedConsent) {
      setConsent(savedConsent);
      setShowBanner(false);
      applyConsent(savedConsent);
    }
  }, []);

  const updateConsent = (newConsent: Partial<CookieConsent>) => {
    setConsent(prev => ({ ...prev, ...newConsent }));
  };

  const savePreferences = (override?: Partial<CookieConsent>) => {
    // `necessary` non è disattivabile: lo forziamo dopo l'override.
    const nextConsent: CookieConsent = { ...consent, ...override, necessary: true };

    setConsent(nextConsent);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nextConsent));
    } catch (error: unknown) {
      // Storage pieno o bloccato (es. Safari in navigazione privata): la scelta
      // vale per la sessione corrente, il banner riapparirà al prossimo accesso.
      console.warn('Impossibile salvare le preferenze cookie', error);
    }
    setShowBanner(false);
    setShowModal(false);

    applyConsent(nextConsent);
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