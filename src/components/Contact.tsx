import React, { useState } from 'react';
import { Send, Mail, Phone, Building2, MessageSquare, UserRound } from 'lucide-react';
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
      // Send form data to n8n webhook endpoint
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
    <section id="contact" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-neutral/20 via-white to-aiblue/5 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-aiblue/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-aiblue/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-aiblue to-aiblue/80 rounded-2xl mb-6 shadow-lg"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Mail className="w-8 h-8 text-white" />
            </motion.div>
            
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-graphite mb-6 leading-tight">
              {t('contact.title')}
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-graphite/70 max-w-3xl mx-auto leading-relaxed">
              {t('contact.subtitle')}
            </p>
          </motion.div>

          {/* Form Container */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 sm:p-10 md:p-12 shadow-2xl border border-white/20 relative overflow-hidden">
              {/* Form background pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-aiblue/5 via-transparent to-aiblue/10 rounded-3xl"></div>
              
              {/* Success Animation Overlay */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-3xl flex flex-col items-center justify-center z-50"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mb-6 shadow-lg"
                    >
                      <motion.svg
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="w-10 h-10 text-white"
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
                    </motion.div>
                    
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-2xl sm:text-3xl font-display font-bold text-green-600 mb-3 text-center"
                    >
                      {t('contact.successTitle')}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-xl text-graphite/80 text-center max-w-2xl leading-relaxed"
                    >
                      <strong className="text-aiblue">{t('contact.successMessage1')}</strong>
                      <br /><br />
                      {t('contact.successMessage2')}
                      <br /><br />
                      <em>{t('contact.successMessage3')}</em>
                    </motion.p>
                    
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                      className="mt-6 flex space-x-1"
                    >
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-2 bg-green-400 rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ 
                            duration: 1.5, 
                            repeat: Infinity, 
                            delay: i * 0.2 
                          }}
                        />
                      ))}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form Content */}
              <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
                {/* Form Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                  {/* Nome Completo */}
                  <motion.div 
                    className="space-y-3"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <label htmlFor="fullname" className="block text-sm font-semibold text-graphite/80 mb-2">
                      {t('contact.name')} *
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <div className="w-5 h-5 text-graphite/40">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                            <circle cx="12" cy="7" r="4"/>
                          </svg>
                        </div>
                      </div>
                      <input
                        type="text"
                        id="fullname"
                        name="fullname"
                        value={formData.fullname}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-4 bg-white/70 border-2 border-neutral/30 rounded-xl focus:border-aiblue focus:ring-4 focus:ring-aiblue/20 outline-none transition-all duration-300 text-graphite placeholder-graphite/50 font-medium shadow-sm hover:shadow-md focus:shadow-lg backdrop-blur-sm"
                        placeholder={t('contact.namePlaceholder')}
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-aiblue/0 via-aiblue/5 to-aiblue/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </motion.div>

                  {/* Email */}
                  <motion.div 
                    className="space-y-3"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <label htmlFor="emailadress" className="block text-sm font-semibold text-graphite/80 mb-2">
                      {t('contact.email')} *
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail className="w-5 h-5 text-graphite/40" />
                      </div>
                      <input
                        type="email"
                        id="emailadress"
                        name="emailadress"
                        value={formData.emailadress}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-4 bg-white/70 border-2 border-neutral/30 rounded-xl focus:border-aiblue focus:ring-4 focus:ring-aiblue/20 outline-none transition-all duration-300 text-graphite placeholder-graphite/50 font-medium shadow-sm hover:shadow-md focus:shadow-lg backdrop-blur-sm"
                        placeholder={t('contact.emailPlaceholder')}
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-aiblue/0 via-aiblue/5 to-aiblue/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </motion.div>

                  {/* Telefono */}
                  <motion.div 
                    className="space-y-3"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <label htmlFor="phonenumber" className="block text-sm font-semibold text-graphite/80 mb-2">
                      {t('contact.phone')} *
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Phone className="w-5 h-5 text-graphite/40" />
                      </div>
                      <input
                        type="tel"
                        id="phonenumber"
                        name="phonenumber"
                        value={formData.phonenumber}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-4 bg-white/70 border-2 border-neutral/30 rounded-xl focus:border-aiblue focus:ring-4 focus:ring-aiblue/20 outline-none transition-all duration-300 text-graphite placeholder-graphite/50 font-medium shadow-sm hover:shadow-md focus:shadow-lg backdrop-blur-sm"
                        placeholder={t('contact.phonePlaceholder')}
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-aiblue/0 via-aiblue/5 to-aiblue/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </motion.div>

                  {/* Azienda */}
                  <motion.div 
                    className="space-y-3"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <label htmlFor="companyname" className="block text-sm font-semibold text-graphite/80 mb-2">
                      {t('contact.company')} *
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Building2 className="w-5 h-5 text-graphite/40" />
                      </div>
                      <input
                        type="text"
                        id="companyname"
                        name="companyname"
                        value={formData.companyname}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-4 bg-white/70 border-2 border-neutral/30 rounded-xl focus:border-aiblue focus:ring-4 focus:ring-aiblue/20 outline-none transition-all duration-300 text-graphite placeholder-graphite/50 font-medium shadow-sm hover:shadow-md focus:shadow-lg backdrop-blur-sm"
                        placeholder={t('contact.companyPlaceholder')}
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-aiblue/0 via-aiblue/5 to-aiblue/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </motion.div>
                </div>

                {/* Messaggio */}
                <motion.div 
                  className="space-y-3"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <label htmlFor="automationtype" className="block text-sm font-semibold text-graphite/80 mb-2">
                    {t('contact.message')}
                  </label>
                  <div className="relative group">
                    <div className="absolute top-4 left-4 pointer-events-none">
                      <MessageSquare className="w-5 h-5 text-graphite/40" />
                    </div>
                    <textarea
                      id="automationtype"
                      name="automationtype"
                      value={formData.automationtype}
                      onChange={handleChange}
                      rows={5}
                      className="w-full pl-12 pr-4 py-4 bg-white/70 border-2 border-neutral/30 rounded-xl focus:border-aiblue focus:ring-4 focus:ring-aiblue/20 outline-none transition-all duration-300 resize-none text-graphite placeholder-graphite/50 font-medium shadow-sm hover:shadow-md focus:shadow-lg backdrop-blur-sm"
                      placeholder={t('contact.placeholder')}
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-aiblue/0 via-aiblue/5 to-aiblue/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </motion.div>

                {/* Privacy Consent Checkbox */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.55 }}
                  className="flex items-start gap-3 group"
                >
                  <div className="flex items-center h-6 mt-1">
                    <input
                      type="checkbox"
                      id="privacyConsent"
                      checked={privacyConsent}
                      onChange={(e) => setPrivacyConsent(e.target.checked)}
                      className="w-5 h-5 text-aiblue bg-white border-2 border-neutral/30 rounded focus:ring-4 focus:ring-aiblue/20 cursor-pointer transition-all duration-200 hover:border-aiblue"
                    />
                  </div>
                  <label htmlFor="privacyConsent" className="text-sm text-graphite/70 leading-relaxed cursor-pointer select-none">
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

                {/* Error Message */}
                <AnimatePresence>
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.95 }}
                      className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl text-center font-medium shadow-sm"
                    >
                      {error}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <motion.button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className={`relative w-full group overflow-hidden rounded-2xl p-1 transition-all duration-500 ${
                      isSubmitted
                        ? 'bg-gradient-to-r from-green-500 to-green-600'
                        : 'bg-gradient-to-r from-aiblue via-aiblue/90 to-aiblue hover:from-aiblue/90 hover:via-aiblue hover:to-aiblue/90'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className={`relative flex items-center justify-center gap-3 px-8 py-5 rounded-xl font-bold text-lg transition-all duration-300 ${
                      isSubmitted 
                        ? 'bg-gradient-to-r from-green-500 to-green-600 text-white' 
                        : 'bg-gradient-to-r from-aiblue to-aiblue/90 text-white shadow-lg hover:shadow-xl'
                    }`}>
                      
                      {/* Background Animation */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      
                      {/* Button Content */}
                      {isSubmitting ? (
                        <motion.div 
                          className="flex items-center gap-3"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        >
                          <motion.div 
                            className="w-6 h-6" 
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                          </motion.div>
                          <span>{t('contact.processing')}</span>
                        </motion.div>
                      ) : isSubmitted ? (
                        <motion.div 
                          className="flex items-center gap-3"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                        >
                          <motion.svg 
                            className="w-6 h-6" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.5 }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                          </motion.svg>
                          <span>{t('contact.success')}</span>
                        </motion.div>
                      ) : (
                        <motion.div 
                          className="flex items-center gap-3"
                          whileHover={{ x: 2 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <span>{t('contact.submit')}</span>
                          <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </motion.div>
                      )}
                    </div>
                  </motion.button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;