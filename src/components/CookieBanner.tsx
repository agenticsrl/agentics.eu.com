import React from 'react';
import { motion } from 'framer-motion';
import { useCookieConsent } from '../contexts/CookieConsentContext';
import { useLanguage } from '../contexts/LanguageContext';

const CookieBanner: React.FC = () => {
  const { showBanner, setShowModal, updateConsent, savePreferences } = useCookieConsent();
  const { language } = useLanguage();

  if (!showBanner) return null;

  const content = {
    it: {
      title: 'Rispettiamo la Tua Privacy',
      description: 'Utilizziamo i cookie per migliorare la tua esperienza di navigazione, fornire contenuti personalizzati e analizzare il nostro traffico. Cliccando "Accetta Tutti", acconsenti al nostro utilizzo dei cookie.',
      settings: 'Impostazioni Cookie',
      accept: 'Accetta Tutti',
      reject: 'Rifiuta Tutti'
    },
    en: {
      title: 'We Respect Your Privacy',
      description: 'We use cookies to improve your browsing experience, provide personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.',
      settings: 'Cookie Settings',
      accept: 'Accept All',
      reject: 'Reject All'
    }
  };

  const t = content[language];

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-neutral z-50 px-4 py-5 md:px-8 md:py-6"
    >
      <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
        <div className="flex-1">
          <h3 className="font-display font-semibold text-[11px] uppercase tracking-[.08em] text-aiblue mb-1.5">
            {t.title}
          </h3>
          <p className="text-graphite/70 text-sm leading-relaxed">
            {t.description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 shrink-0">
          {/* Settings — ghost */}
          <button
            onClick={() => setShowModal(true)}
            className="px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[.08em] text-graphite border border-neutral bg-transparent hover:border-aiblue hover:text-aiblue transition-colors duration-200"
          >
            {t.settings}
          </button>

          {/* Reject — secondary */}
          <button
            onClick={() => {
              updateConsent({ analytics: false, marketing: false });
              savePreferences();
            }}
            className="px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[.08em] text-graphite border border-graphite/30 bg-transparent hover:border-graphite transition-colors duration-200"
          >
            {t.reject}
          </button>

          {/* Accept — primary */}
          <button
            onClick={() => {
              updateConsent({ analytics: true, marketing: true });
              savePreferences();
            }}
            className="px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[.08em] text-white bg-aiblue hover:bg-aiblue/90 transition-colors duration-200"
          >
            {t.accept}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CookieBanner;
