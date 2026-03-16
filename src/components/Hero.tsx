import React, { useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import Hyperspeed from './Hyperspeed';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [isSpeedingUp, setIsSpeedingUp] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      <div className="absolute inset-0 z-0 opacity-70">
        <Hyperspeed
          effectOptions={{
            distortion: 'turbulentDistortion',
            length: 200,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: window.innerWidth < 768 ? 2 : 3,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: isSpeedingUp ? 0.05 : 0.1,
            carLightsFade: 0.7,
            totalSideLightSticks: window.innerWidth < 768 ? 15 : 20,
            lightPairsPerRoadWay: window.innerWidth < 768 ? 18 : 25,
            movingAwaySpeed: isSpeedingUp ? [1.5, 2.5] : [1, 2],
            movingCloserSpeed: isSpeedingUp ? [-3, -4] : [-2, -3],
            colors: {
              roadColor: 0xffffff,
              islandColor: 0xffffff,
              background: 0xffffff,
              shoulderLines: 0xf0f0f0,
              brokenLines: 0xf0f0f0,
              leftCars: [0x0163F5, 0x03b3c3, 0x4d8ef7],
              rightCars: [0x0163F5, 0x03b3c3, 0x4d8ef7],
              sticks: 0x0163F5
            }
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 -mt-40 sm:mt-0">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-3 sm:mb-4 px-2 uppercase tracking-[.04em]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-graphite">{t('hero.title')}</span>
            <br className="hidden xs:block" />
            <span className="text-graphite">{t('hero.subtitle')}</span>{' '}
            <motion.span
              className="text-aiblue inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t('hero.withAgentics')}
            </motion.span>
          </motion.h1>
          <motion.button
            onClick={scrollToContact}
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-aiblue text-white hover:bg-aiblue/90 text-[11px] sm:text-xs font-semibold uppercase tracking-[.08em] transition-colors duration-200 mx-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.8 }}
          >
            {t('hero.cta')}
            <ArrowRight size={14} className="sm:w-4 sm:h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
