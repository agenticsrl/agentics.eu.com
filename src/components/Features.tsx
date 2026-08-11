import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Section from './layout/Section';
import SectionHeader from './layout/SectionHeader';

const FOLIOFOX_SCREENSHOT =
  'https://tfrkdvnboioqufwgszpi.supabase.co/storage/v1/object/public/email%20foto/Screenshot%202026-03-17%20at%2000.01.45.png';
const FOLIOFOX_URL = 'https://foliofox.com';

const Features: React.FC = () => {
  const { t } = useLanguage();

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
          {/* Il cruscotto si vede per intero a ogni larghezza: su telefono
              resta minuto, ma tagliarlo dietro uno scorrimento laterale
              nascondeva metà del lavoro a chi arriva da lì. */}
          <div className="border-b border-line">
            <img
              src={FOLIOFOX_SCREENSHOT}
              alt={t('features.folioFoxImageAlt')}
              width={1600}
              height={900}
              loading="lazy"
              className="block w-full h-auto"
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
      {/* Secondo caso di fila: continua il discorso del precedente, quindi
          niente filetto e ritmo ridotto. Su telefono, dove ogni impianto a
          colonne collassa in una sola, il raggruppamento è l'unica cosa che
          distingue un blocco nuovo dalla prosecuzione di quello sopra. */}
      <Section labelledBy="ai-vision-title" tight divided={false}>
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
