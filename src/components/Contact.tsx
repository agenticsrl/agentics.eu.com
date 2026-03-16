import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    fullname: '',
    emailadress: '',
    phonenumber: '',
    companyname: '',
    automationtype: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [privacyConsent, setPrivacyConsent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!privacyConsent) {
      setError(t('contact.privacyError'));
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://bao02.app.n8n.cloud/webhook/470caafc-52a4-44fd-ac45-b272cd860614', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          fullname: '',
          emailadress: '',
          phonenumber: '',
          companyname: '',
          automationtype: ''
        });
        setPrivacyConsent(false);

        setTimeout(() => {
          setIsSubmitted(false);
        }, 8000);
      } else {
        throw new Error(`Webhook failed with status: ${response.status}`);
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setError(t('contact.genericError'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-graphite mb-4 uppercase tracking-[.04em]">
              {t('contact.title')}
            </h2>
            <p className="text-sm sm:text-base text-graphite/70 max-w-2xl mx-auto leading-relaxed">
              {t('contact.subtitle')}
            </p>
          </motion.div>

          {/* Form Container */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative border-2 border-neutral bg-white"
          >
            {/* Success Overlay */}
            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-white flex flex-col items-center justify-center z-50 p-8"
                >
                  <div className="w-16 h-16 bg-green-500 flex items-center justify-center mb-6">
                    <motion.svg
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="w-8 h-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <motion.path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </motion.svg>
                  </div>

                  <h3 className="font-display font-bold text-xl sm:text-2xl text-green-600 mb-3 uppercase tracking-[.04em] text-center">
                    {t('contact.successTitle')}
                  </h3>
                  <p className="text-graphite/70 text-sm text-center max-w-md leading-relaxed">
                    <strong className="text-aiblue">{t('contact.successMessage1')}</strong>
                    <br /><br />
                    {t('contact.successMessage2')}
                    <br /><br />
                    <em>{t('contact.successMessage3')}</em>
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-8 sm:p-10 md:p-12 space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                {/* Nome Completo */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <label htmlFor="fullname" className="block text-[11px] font-semibold uppercase tracking-[.08em] text-graphite mb-3">
                    {t('contact.name')} *
                  </label>
                  <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 bg-transparent border-b-2 border-neutral focus:border-aiblue outline-none transition-colors duration-200 text-graphite placeholder-graphite/40 text-sm"
                    placeholder={t('contact.namePlaceholder')}
                  />
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <label htmlFor="emailadress" className="block text-[11px] font-semibold uppercase tracking-[.08em] text-graphite mb-3">
                    {t('contact.email')} *
                  </label>
                  <input
                    type="email"
                    id="emailadress"
                    name="emailadress"
                    value={formData.emailadress}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 bg-transparent border-b-2 border-neutral focus:border-aiblue outline-none transition-colors duration-200 text-graphite placeholder-graphite/40 text-sm"
                    placeholder={t('contact.emailPlaceholder')}
                  />
                </motion.div>

                {/* Telefono */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <label htmlFor="phonenumber" className="block text-[11px] font-semibold uppercase tracking-[.08em] text-graphite mb-3">
                    {t('contact.phone')} *
                  </label>
                  <input
                    type="tel"
                    id="phonenumber"
                    name="phonenumber"
                    value={formData.phonenumber}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 bg-transparent border-b-2 border-neutral focus:border-aiblue outline-none transition-colors duration-200 text-graphite placeholder-graphite/40 text-sm"
                    placeholder={t('contact.phonePlaceholder')}
                  />
                </motion.div>

                {/* Azienda */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <label htmlFor="companyname" className="block text-[11px] font-semibold uppercase tracking-[.08em] text-graphite mb-3">
                    {t('contact.company')} *
                  </label>
                  <input
                    type="text"
                    id="companyname"
                    name="companyname"
                    value={formData.companyname}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 bg-transparent border-b-2 border-neutral focus:border-aiblue outline-none transition-colors duration-200 text-graphite placeholder-graphite/40 text-sm"
                    placeholder={t('contact.companyPlaceholder')}
                  />
                </motion.div>
              </div>

              {/* Messaggio */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <label htmlFor="automationtype" className="block text-[11px] font-semibold uppercase tracking-[.08em] text-graphite mb-3">
                  {t('contact.message')}
                </label>
                <textarea
                  id="automationtype"
                  name="automationtype"
                  value={formData.automationtype}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-0 py-3 bg-transparent border-b-2 border-neutral focus:border-aiblue outline-none transition-colors duration-200 resize-none text-graphite placeholder-graphite/40 text-sm"
                  placeholder={t('contact.placeholder')}
                />
              </motion.div>

              {/* Privacy Consent */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.55 }}
                className="flex items-start gap-3"
              >
                <input
                  type="checkbox"
                  id="privacyConsent"
                  checked={privacyConsent}
                  onChange={(e) => setPrivacyConsent(e.target.checked)}
                  className="mt-0.5 w-4 h-4 border-2 border-neutral text-aiblue cursor-pointer accent-aiblue"
                />
                <label htmlFor="privacyConsent" className="text-xs text-graphite/70 leading-relaxed cursor-pointer select-none">
                  {t('contact.privacyConsent')}{' '}
                  <Link
                    to="/privacy-policy"
                    className="text-aiblue hover:text-aiblue/80 underline font-semibold transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('contact.privacyLink')}
                  </Link>
                  {t('contact.privacySuffix') && ` ${t('contact.privacySuffix')}`} *
                </label>
              </motion.div>

              {/* Error */}
              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="border-l-[3px] border-red-500 bg-red-50 pl-4 py-3 text-sm text-red-600 font-medium"
                  >
                    {error}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full flex items-center justify-center gap-2 py-4 text-[11px] font-semibold uppercase tracking-[.08em] text-white transition-colors duration-200 ${
                    isSubmitted
                      ? 'bg-green-500'
                      : isSubmitting
                      ? 'bg-aiblue/70 cursor-not-allowed'
                      : 'bg-aiblue hover:bg-aiblue/90'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-4 h-4 border-2 border-white/30 border-t-white"
                        style={{ borderRadius: '50%' }}
                      />
                      {t('contact.processing')}
                    </>
                  ) : isSubmitted ? (
                    <>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      {t('contact.success')}
                    </>
                  ) : (
                    <>
                      {t('contact.submit')}
                      <Send size={14} />
                    </>
                  )}
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
