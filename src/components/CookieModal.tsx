import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { useCookieConsent } from '../contexts/CookieConsentContext';
import { useLanguage } from '../contexts/LanguageContext';

const CookieModal: React.FC = () => {
  const { showModal, setShowModal, consent, updateConsent, savePreferences } = useCookieConsent();
  const { language } = useLanguage();

  const content = {
    it: {
      title: 'Preferenze Cookie',
      description: 'Utilizziamo i cookie per aiutarti a navigare in modo efficiente ed eseguire determinate funzioni. Troverai informazioni dettagliate su tutti i cookie sotto ogni categoria di consenso qui sotto.',
      necessary: 'Cookie Necessari',
      alwaysActive: 'Sempre Attivi',
      necessaryDesc: 'Questi cookie sono essenziali per il corretto funzionamento del sito web e non possono essere disabilitati.',
      analytics: 'Cookie Analitici',
      analyticsDesc: 'Questi cookie ci permettono di analizzare il traffico del sito web e capire come i nostri visitatori utilizzano il sito.',
      marketing: 'Cookie di Marketing',
      marketingDesc: 'Questi cookie vengono utilizzati per tracciare i visitatori sui siti web per visualizzare annunci pubblicitari pertinenti.',
      cancel: 'Annulla',
      save: 'Salva Preferenze'
    },
    en: {
      title: 'Cookie Preferences',
      description: 'We use cookies to help you navigate efficiently and perform certain functions. You will find detailed information about all cookies under each consent category below.',
      necessary: 'Necessary Cookies',
      alwaysActive: 'Always Active',
      necessaryDesc: 'These cookies are essential for the proper functioning of the website and cannot be disabled.',
      analytics: 'Analytics Cookies',
      analyticsDesc: 'These cookies allow us to analyze website traffic and understand how our visitors use the site.',
      marketing: 'Marketing Cookies',
      marketingDesc: 'These cookies are used to track visitors on websites to display relevant advertisements.',
      cancel: 'Cancel',
      save: 'Save Preferences'
    }
  };

  const t = content[language];

  if (!showModal) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        >
          <div className="p-6 border-b border-neutral">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-display font-bold text-2xl text-graphite">
                {t.title}
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-graphite/60 hover:text-graphite transition-colors duration-300"
              >
                <X size={24} />
              </button>
            </div>
            <p className="text-graphite/80">
              {t.description}
            </p>
          </div>

          <div className="p-6 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-display font-semibold text-lg text-graphite">
                  {t.necessary}
                </h3>
                <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                  {t.alwaysActive}
                </div>
              </div>
              <p className="text-graphite/80 text-sm">
                {t.necessaryDesc}
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-display font-semibold text-lg text-graphite">
                  {t.analytics}
                </h3>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={consent.analytics}
                    onChange={(e) => updateConsent({ analytics: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-neutral peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-aiblue"></div>
                </label>
              </div>
              <p className="text-graphite/80 text-sm">
                {t.analyticsDesc}
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-display font-semibold text-lg text-graphite">
                  {t.marketing}
                </h3>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={consent.marketing}
                    onChange={(e) => updateConsent({ marketing: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-neutral peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-aiblue"></div>
                </label>
              </div>
              <p className="text-graphite/80 text-sm">
                {t.marketingDesc}
              </p>
            </div>
          </div>

          <div className="p-6 border-t border-neutral flex justify-end gap-4">
            <button
              onClick={() => setShowModal(false)}
              className="px-6 py-2 text-graphite hover:text-aiblue transition-colors duration-300"
            >
              {t.cancel}
            </button>
            <button
              onClick={savePreferences}
              className="px-6 py-2 bg-aiblue text-white rounded-lg font-medium hover:bg-aiblue/90 transition-all duration-300 flex items-center gap-2"
            >
              <Check size={20} />
              {t.save}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieModal;
