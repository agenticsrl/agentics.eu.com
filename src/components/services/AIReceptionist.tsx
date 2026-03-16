import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import BackHomeButton from '../BackHomeButton';
import Contact from '../Contact';
import { useSEO } from '../../hooks/useSEO';
import { useLanguage } from '../../contexts/LanguageContext';

const AIReceptionist: React.FC = () => {
  const { t, language } = useLanguage();

  useSEO({
    title: language === 'it'
      ? 'Receptionist Vocale AI 24/7 | Agentics - Agente Telefonico Intelligente'
      : '24/7 AI Voice Receptionist | Agentics - Intelligent Phone Agent',
    description: language === 'it'
      ? 'Agente vocale AI che gestisce chiamate in entrata e in uscita, prenota appuntamenti e qualifica lead automaticamente. Sempre attivo, integrazione con Google Calendar e CRM.'
      : 'AI voice agent that handles inbound and outbound calls, books appointments and qualifies leads automatically. Always active, integration with Google Calendar and CRM.',
    keywords: language === 'it'
      ? 'receptionist AI, agente vocale AI, chiamate automatiche AI, prenotazione appuntamenti AI, assistente telefonico virtuale, AI per call center, receptionist virtuale 24/7, automazione telefonica'
      : 'AI receptionist, AI voice agent, automatic AI calls, AI appointment booking, virtual phone assistant, AI for call center, 24/7 virtual receptionist, phone automation',
    canonicalUrl: 'https://agentics.eu.com/services/ai-receptionist',
    language
  });

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const capabilities = [
    t('aiReceptionist.capability1'),
    t('aiReceptionist.capability2'),
    t('aiReceptionist.capability3'),
    t('aiReceptionist.capability4'),
    t('aiReceptionist.capability5'),
    t('aiReceptionist.capability6')
  ];

  const processSteps = [
    {
      number: '01',
      title: t('aiReceptionist.step1.title'),
      description: t('aiReceptionist.step1.description')
    },
    {
      number: '02',
      title: t('aiReceptionist.step2.title'),
      description: t('aiReceptionist.step2.description')
    },
    {
      number: '03',
      title: t('aiReceptionist.step3.title'),
      description: t('aiReceptionist.step3.description')
    },
    {
      number: '04',
      title: t('aiReceptionist.step4.title'),
      description: t('aiReceptionist.step4.description')
    }
  ];

  return (
    <motion.div
      className="min-h-screen bg-white"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.4 }}
    >
      <BackHomeButton />

      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h1 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-graphite mb-6 leading-tight">
              {t('aiReceptionist.pageTitle')}
            </h1>

            <p className="text-lg md:text-xl text-graphite/70 leading-relaxed mb-10 max-w-3xl mx-auto md:mx-0">
              {t('aiReceptionist.pageDescription')}
            </p>

            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-6 py-3 bg-aiblue text-white hover:bg-aiblue/90 text-[11px] font-semibold uppercase tracking-[.08em] transition-colors duration-200"
            >
              {t('aiReceptionist.cta')}
              <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="font-display font-semibold text-2xl md:text-3xl text-graphite mb-4">
              {t('aiReceptionist.demoTitle')}
            </h2>
            <p className="text-graphite/60 max-w-2xl mx-auto">
              {t('aiReceptionist.demoSubtitle')}
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white border border-neutral overflow-hidden">
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src={language === 'en' ? 'https://www.youtube.com/embed/WDsTj6ua-Sg' : 'https://www.youtube.com/embed/FlOCUqtyjTg'}
                  title="AI Receptionist Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-t border-graphite/10">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-display font-semibold text-2xl md:text-3xl text-graphite mb-6">
                {t('aiReceptionist.whatWeOffer')}
              </h2>
              <p className="text-graphite/70 leading-relaxed">
                {t('aiReceptionist.whatWeOfferText')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <ul className="space-y-3 list-disc pl-5">
                {capabilities.map((item, index) => (
                  <li key={index} className="text-graphite/80 leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-neutral/30">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="font-display font-semibold text-2xl md:text-3xl text-graphite mb-4">
              {t('aiReceptionist.processTitle')}
            </h2>
            <p className="text-graphite/60 max-w-2xl">
              {t('aiReceptionist.processSubtitle')}
            </p>
          </motion.div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex gap-6 md:gap-8"
              >
                <span className="font-display font-bold text-2xl md:text-3xl text-aiblue">
                  {step.number}
                </span>
                <div className="pb-8 border-b border-graphite/10 flex-1">
                  <h3 className="font-display font-semibold text-lg text-graphite mb-2">
                    {step.title}
                  </h3>
                  <p className="text-graphite/60 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-b border-graphite/10">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-graphite mb-2">{t('aiReceptionist.stat1.value')}</div>
              <div className="text-[11px] font-semibold uppercase tracking-[.08em] text-graphite/60">{t('aiReceptionist.stat1.label')}</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-graphite mb-2">{t('aiReceptionist.stat2.value')}</div>
              <div className="text-[11px] font-semibold uppercase tracking-[.08em] text-graphite/60">{t('aiReceptionist.stat2.label')}</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-graphite mb-2">{t('aiReceptionist.stat3.value')}</div>
              <div className="text-[11px] font-semibold uppercase tracking-[.08em] text-graphite/60">{t('aiReceptionist.stat3.label')}</div>
            </motion.div>
          </div>
        </div>
      </section>

      <Contact />
    </motion.div>
  );
};

export default AIReceptionist;
