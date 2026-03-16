import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

function AnimatedNumber({ target, suffix = '%', duration = 1.6 }: { target: number; suffix?: string; duration?: number }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return <span ref={ref}>{value}{suffix}</span>;
}

const tiers = [
  { target: 180, label: 'fiscal.tier1' as const },
  { target: 100, label: 'fiscal.tier2' as const },
  { target: 50, label: 'fiscal.tier3' as const },
];

const solutions = [
  'fiscal.solution1',
  'fiscal.solution2',
  'fiscal.solution3',
  'fiscal.solution4',
  'fiscal.solution5',
] as const;

const FiscalIncentives: React.FC = () => {
  const { language, t } = useLanguage();

  if (language !== 'it') return null;

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="pt-4 pb-8 sm:pt-6 sm:pb-14 bg-white">
        <div className="text-center px-4">
          <motion.button
            onClick={scrollToContact}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 bg-aiblue text-white text-[11px] font-semibold uppercase tracking-[.08em] transition-colors duration-200 hover:bg-aiblue/90"
          >
            {t('fiscal.ctaTop')}
            <ArrowRight size={16} strokeWidth={2.5} />
          </motion.button>
        </div>
      </div>

      <section className="py-12 sm:py-20 bg-neutral/30">
        <div className="container mx-auto px-5 sm:px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-10"
          >
            <p className="text-aiblue font-semibold text-xs sm:text-sm tracking-wide uppercase mb-2 sm:mb-3">
              {t('fiscal.badge')}
            </p>
            <h2 className="font-display font-bold text-[22px] sm:text-3xl md:text-[34px] text-graphite leading-tight mb-3 sm:mb-4">
              {t('fiscal.title')}
            </h2>
            <p className="text-graphite/55 text-[15px] sm:text-[17px] leading-relaxed">
              {t('fiscal.intro')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="grid grid-cols-3 gap-2 sm:gap-5 mb-8 sm:mb-10"
          >
            {tiers.map((tier, i) => (
              <div
                key={i}
                className={`px-3 py-4 sm:p-6 text-center transition-all duration-300 ${
                  i === 0
                    ? 'bg-aiblue text-white'
                    : 'bg-white border border-neutral'
                }`}
              >
                <div className={`font-display font-bold text-2xl sm:text-4xl md:text-[42px] leading-none mb-1.5 sm:mb-2 ${
                  i === 0 ? 'text-white' : 'text-graphite'
                }`}>
                  <AnimatedNumber target={tier.target} duration={i === 0 ? 1.6 : 1.2 + i * 0.2} />
                </div>
                <p className={`text-[10px] sm:text-sm leading-snug ${
                  i === 0 ? 'text-white/70' : 'text-graphite/50'
                }`}>
                  {t(tier.label)}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-graphite/65 text-sm sm:text-[15px] leading-relaxed mb-8 sm:mb-10 bg-white p-4 sm:p-5 border border-neutral"
          >
            {t('fiscal.example')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mb-8 sm:mb-12"
          >
            <h3 className="font-display font-semibold text-base sm:text-xl text-graphite mb-4 sm:mb-5">
              {t('fiscal.solutionsTitle')}
            </h3>
            <div className="space-y-2 sm:space-y-2.5">
              {solutions.map((key, i) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.05 * i }}
                  className="flex items-start sm:items-center gap-2.5 sm:gap-3 text-graphite/70 text-sm sm:text-[15px] leading-relaxed"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-aiblue flex-shrink-0 mt-1.5 sm:mt-0" />
                  {t(key)}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-graphite/55 text-xs sm:text-sm leading-relaxed border-l-2 border-graphite/15 pl-3 sm:pl-4 mb-8 sm:mb-10"
          >
            {t('fiscal.solutionsFooter')}
          </motion.p>

          <p className="text-graphite/35 text-[11px] sm:text-xs leading-relaxed">
            {t('fiscal.reference')}
          </p>
        </div>
      </section>

      <div className="py-8 sm:py-14 bg-white">
        <div className="text-center px-4">
          <motion.button
            onClick={scrollToContact}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 bg-aiblue text-white text-[11px] font-semibold uppercase tracking-[.08em] transition-colors duration-200 hover:bg-aiblue/90"
          >
            {t('fiscal.ctaBottom')}
            <ArrowRight size={16} strokeWidth={2.5} />
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default FiscalIncentives;
