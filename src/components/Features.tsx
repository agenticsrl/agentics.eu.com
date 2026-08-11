import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import Section from './layout/Section';
import SectionHeader from './layout/SectionHeader';

const FOLIOFOX_SCREENSHOT =
  'https://tfrkdvnboioqufwgszpi.supabase.co/storage/v1/object/public/email%20foto/Screenshot%202026-03-17%20at%2000.01.45.png';
const FOLIOFOX_URL = 'https://foliofox.com';

const Features: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const goToSoftwarePage = () => {
    navigate('/services/software-personalizzato');
    window.scrollTo({ top: 0 });
  };

  return (
    <>
      {/* Tipologia: blocco con media e testo */}
      <Section labelledBy="case-study-title">
        <SectionHeader
          label={t('features.caseStudy')}
          title={t('features.folioFoxTitle')}
          titleId="case-study-title"
        />

        <figure className="panel">
          {/* Rapporto d'aspetto dichiarato: nessuno spostamento al caricamento */}
          <div className="aspect-video w-full overflow-hidden border-b border-line">
            <img
              src={FOLIOFOX_SCREENSHOT}
              alt={t('features.folioFoxImageAlt')}
              width={1600}
              height={900}
              loading="lazy"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <figcaption className="p-lg grid grid-cols-1 lg:grid-cols-[1.6fr_auto] gap-lg lg:items-end">
            <div className="space-y-md">
              <p className="text-body-muted">{t('features.folioFoxDescription')}</p>
              <p className="text-body-muted">{t('features.folioFoxDesc2')}</p>
              <p className="text-body-muted">{t('features.folioFoxDesc3')}</p>
            </div>
            {/* Porta al prodotto vero, non alla pagina servizi del sito. */}
            <a
              href={FOLIOFOX_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary justify-self-start"
            >
              {t('features.visitFolioFox')}
            </a>
          </figcaption>
        </figure>
      </Section>

      {/* Tipologia: testo su colonna singola con media */}
      <Section labelledBy="ai-vision-title">
        <SectionHeader
          label={t('features.aiVisionLabel')}
          title={t('features.aiVisionTitle')}
          titleId="ai-vision-title"
          lead={t('features.aiVisionDescription')}
        />
        <div className="aspect-video w-full border border-line">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/4PhEJSdK_gQ?mute=1&loop=1&playlist=4PhEJSdK_gQ"
            title={t('features.aiVisionTitle')}
            loading="lazy"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </Section>
    </>
  );
};

export default Features;
