import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const BackHomeButton: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <button
      onClick={() => navigate('/')}
      className="fixed top-20 sm:top-24 left-2 sm:left-4 md:left-8 z-40 inline-flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 bg-white hover:bg-neutral/30 text-graphite text-[11px] font-semibold uppercase tracking-[.06em] transition-colors duration-200 border border-neutral"
    >
      <ArrowLeft size={16} className="sm:w-5 sm:h-5" />
      {t('nav.backHome')}
    </button>
  );
};

export default BackHomeButton;