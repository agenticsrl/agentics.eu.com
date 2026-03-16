import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Cpu, Lock, Settings, ArrowRight } from 'lucide-react';
import { Timeline } from './ui/timeline';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../contexts/LanguageContext';

const Company: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const offerings = [
    {
      icon: Cpu,
      title: t('company.offering1.title'),
      description: t('company.offering1.description')
    },
    {
      icon: Lock,
      title: t('company.offering3.title'),
      description: t('company.offering3.description')
    },
    {
      icon: Settings,
      title: t('company.offering5.title'),
      description: t('company.offering5.description')
    }
  ];

  const timelineData = offerings.map((offering) => {
    const Icon = offering.icon;
    return {
      title: '',
      content: (
        <div className="bg-white border-l-[1px] border-slate-200/60 hover:border-l-aiblue/40 transition-colors duration-500 pl-6 sm:pl-8 md:pl-10 pr-0 py-3">
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
            <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center">
              <Icon size={20} className="text-aiblue sm:w-6 sm:h-6" strokeWidth={1.5} />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-display font-medium text-base sm:text-lg text-graphite mb-2 md:mb-1 leading-snug break-words">
                {offering.title}
              </h4>
              <p className="text-sm sm:text-base text-graphite/50 leading-relaxed font-light">
                {offering.description}
              </p>
            </div>
          </div>
        </div>
      )
    };
  });


  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">

        <div className="max-w-6xl mx-auto mb-16 sm:mb-20 relative overflow-hidden rounded-none bg-white py-12 sm:py-24 px-6 sm:px-12 min-h-[650px] sm:min-h-0">
          <div className="absolute inset-0 z-0 flex justify-end items-end sm:items-stretch">
            <img
              src="/Adobe_Express_-_file_Large.jpeg"
              alt=""
              className="h-[50%] sm:h-full w-auto object-contain opacity-40"
            />
          </div>
          <div className="relative z-10 max-w-xl bg-white/60 sm:bg-transparent p-6 sm:p-0">
            <h2 className="font-display font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl text-graphite tracking-tight mb-6 sm:mb-8 leading-tight">
              {t('company.heroTitle')}
            </h2>
            <div className="text-sm sm:text-lg text-graphite/70 leading-relaxed mb-4 sm:mb-6">
              {t('company.heroText1')}
            </div>
            <div className="text-sm sm:text-lg text-graphite/70 leading-relaxed mb-8 sm:mb-10">
              {t('company.heroText2')}
            </div>
            <button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-aiblue hover:bg-aiblue/90 text-white px-6 sm:px-8 py-3 sm:py-4 text-[11px] font-semibold uppercase tracking-[.08em] transition-colors duration-200"
            >
              {t('company.cta')}
            </button>
          </div>
        </div>

        <motion.div
          id="solutions"
          className="mb-20 sm:mb-28 scroll-mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="font-display font-light text-xl sm:text-2xl text-graphite/60 mb-8 sm:mb-12 text-center tracking-wide">
            {t('company.solutionsTitle')}
          </h3>
          <Timeline data={timelineData} />
        </motion.div>

        {/* Software Intelligenti — featured card */}
        <motion.div
          ref={ref}
          className="max-w-4xl mx-auto mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="group cursor-pointer border border-graphite/10 hover:border-aiblue/40 active:scale-[0.99] transition-all duration-300"
            onClick={() => handleNavigation('/services/custom-gpts')}
          >
            <div className="p-6 sm:p-10">
              <div className="mb-5 sm:mb-6">
                <h3 className="font-display font-semibold text-xl sm:text-2xl text-graphite mb-1 group-hover:text-aiblue transition-colors duration-300">
                  {t('features.customGPTs.title')}
                </h3>
                <p className="text-sm sm:text-base text-graphite/50">
                  {t('features.customGPTs.description')}
                </p>
              </div>
              <p className="text-sm sm:text-base text-graphite/60 leading-relaxed mb-3">
                {t('features.customGPTs.extendedDesc1')}
              </p>
              <p className="text-sm sm:text-base text-graphite/60 leading-relaxed mb-6">
                {t('features.customGPTs.extendedDesc2')}
              </p>
              <span className="inline-flex items-center gap-2 text-aiblue text-sm sm:text-base font-semibold uppercase tracking-[.06em] group-hover:gap-3 transition-all duration-300">
                {t('company.learnMore')}
                <ArrowRight size={16} strokeWidth={2.5} />
              </span>
            </div>
          </div>
        </motion.div>

        <div className="flex justify-center px-4 sm:px-0">
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-aiblue hover:bg-aiblue/90 text-white px-6 sm:px-8 py-4 text-[11px] font-semibold uppercase tracking-[.08em] transition-colors duration-200"
          >
            {t('company.cta')}
            <ArrowRight size={18} strokeWidth={2} className="sm:hidden" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Company;
