import React from 'react';
import { DivideIcon as LucideIcon, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  onClick?: () => void;
  layoutId?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon: Icon, color, onClick, layoutId }) => {
  const { t } = useLanguage();

  return (
    <motion.div
      layoutId={layoutId}
      className="group cursor-pointer"
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30
      }}
    >
      <div className="relative h-full bg-white border border-neutral hover:border-aiblue/40 p-3 sm:p-8 transition-colors duration-200">
        <div className="flex items-center gap-3 mb-2 sm:block">
          <motion.div
            layoutId={`icon-${layoutId}`}
            className={`w-9 h-9 sm:w-12 sm:h-12 ${color} flex items-center justify-center flex-shrink-0 sm:mb-6`}
          >
            <Icon size={18} className="text-white sm:w-6 sm:h-6" strokeWidth={1.5} />
          </motion.div>

          <motion.h3
            layoutId={`title-${layoutId}`}
            className="font-display font-semibold text-base sm:text-xl sm:mb-3 text-graphite leading-tight"
          >
            {title}
          </motion.h3>
        </div>

        <motion.p
          layoutId={`description-${layoutId}`}
          className="hidden sm:block text-xs sm:text-sm text-graphite/60 leading-relaxed mb-2 sm:mb-6"
        >
          {description}
        </motion.p>

        <motion.button
          className="inline-flex items-center justify-center gap-1.5 text-aiblue text-[11px] font-semibold uppercase tracking-[.06em] min-h-[44px] py-2 -ml-2 pl-2 pr-2.5 hover:bg-aiblue/5 active:bg-aiblue/10 transition-colors duration-200"
          initial={{ x: 0 }}
          type="button"
        >
          <span>{t('featureCard.learnMore')}</span>
          <ArrowRight
            size={14}
            className="transform group-hover:translate-x-1 transition-transform duration-300 sm:w-4 sm:h-4"
            strokeWidth={2}
          />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
