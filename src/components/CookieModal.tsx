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
        className="fixed inset-0 bg-graphite/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="px-6 py-5 border-b-2 border-neutral flex items-start justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[.08em] text-aiblue mb-1">
                Privacy
              </p>
              <h2 className="font-display font-semibold text-xl text-graphite uppercase tracking-[.06em]">
                {t.title}
              </h2>
            </div>
            <button
              onClick={() => setShowModal(false)}
              className="text-graphite/40 hover:text-graphite transition-colors duration-200 mt-1 shrink-0"
            >
              <X size={20} />
            </button>
          </div>

          {/* Description */}
          <div className="px-6 py-4 border-b border-neutral">
            <p className="text-graphite/70 text-sm leading-relaxed">
              {t.description}
            </p>
          </div>

          {/* Cookie categories */}
          <div className="divide-y divide-neutral">
            {/* Necessary */}
            <div className="px-6 py-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-display font-semibold text-[11px] uppercase tracking-[.08em] text-graphite">
                  {t.necessary}
                </h3>
                {/* Badge — always active */}
                <span className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[.06em] bg-green-100 text-green-800">
                  {t.alwaysActive}
                </span>
              </div>
              <p className="text-graphite/60 text-sm leading-relaxed">
                {t.necessaryDesc}
              </p>
            </div>

            {/* Analytics */}
            <div className="px-6 py-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-display font-semibold text-[11px] uppercase tracking-[.08em] text-graphite">
                  {t.analytics}
                </h3>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={consent.analytics}
                    onChange={(e) => updateConsent({ analytics: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-10 h-5 bg-neutral peer-focus:outline-none peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:h-4 after:w-4 after:transition-all peer-checked:bg-aiblue"></div>
                </label>
              </div>
              <p className="text-graphite/60 text-sm leading-relaxed">
                {t.analyticsDesc}
              </p>
            </div>

            {/* Marketing */}
            <div className="px-6 py-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-display font-semibold text-[11px] uppercase tracking-[.08em] text-graphite">
                  {t.marketing}
                </h3>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={consent.marketing}
                    onChange={(e) => updateConsent({ marketing: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-10 h-5 bg-neutral peer-focus:outline-none peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:h-4 after:w-4 after:transition-all peer-checked:bg-aiblue"></div>
                </label>
              </div>
              <p className="text-graphite/60 text-sm leading-relaxed">
                {t.marketingDesc}
              </p>
            </div>
          </div>

          {/* Footer actions */}
          <div className="px-6 py-5 border-t-2 border-neutral flex justify-end gap-3">
            {/* Cancel — secondary */}
            <button
              onClick={() => setShowModal(false)}
              className="px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[.08em] text-graphite border border-graphite/30 bg-transparent hover:border-graphite transition-colors duration-200"
            >
              {t.cancel}
            </button>

            {/* Save — primary */}
            <button
              onClick={savePreferences}
              className="px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[.08em] text-white bg-aiblue hover:bg-aiblue/90 transition-colors duration-200 flex items-center gap-2"
            >
              <Check size={14} strokeWidth={2.5} />
              {t.save}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieModal;
