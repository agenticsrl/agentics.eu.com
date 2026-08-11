import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

/**
 * Ritorno alla home. Sta nel flusso del documento e non in posizione fissa:
 * così non si sovrappone al contenuto durante lo scorrimento.
 */
const BackHomeButton: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="container-content pt-lg">
      <Link to="/" className="label hover:text-ink tap-target">
        {t('nav.backHome')}
      </Link>
    </div>
  );
};

export default BackHomeButton;
