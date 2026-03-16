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
      className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral shadow-lg z-50 p-4 md:p-6"
    >
      <div className="container mx-auto max-w-4xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className="font-display font-bold text-lg text-graphite mb-2">
            {t.title}
          </h3>
          <p className="text-graphite/80 text-sm">
            {t.description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 min-w-[300px]">
          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-2 text-sm font-medium text-graphite hover:text-aiblue transition-colors duration-300"
          >
            {t.settings}
          </button>
          <button
            onClick={() => {
              updateConsent({ analytics: true, marketing: true });
              savePreferences();
            }}
            className="px-4 py-2 bg-aiblue text-white rounded-lg text-sm font-medium hover:bg-aiblue/90 transition-all duration-300"
          >
            {t.accept}
          </button>
          <button
            onClick={() => {
              updateConsent({ analytics: false, marketing: false });
              savePreferences();
            }}
            className="px-4 py-2 bg-neutral hover:bg-neutral/80 text-graphite rounded-lg text-sm font-medium transition-all duration-300"
          >
            {t.reject}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CookieBanner;
