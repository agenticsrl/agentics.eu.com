import React from 'react';
import BackHomeButton from '../BackHomeButton';
import Contact from '../Contact';
import ConstructionDemo from '../ConstructionDemo';
import LogoLoop from '../ui/LogoLoop';
import { TECH_LOGOS } from '../ui/TechLogos';
import Section from '../layout/Section';
import SectionHeader from '../layout/SectionHeader';
import SpecList, { type SpecItem } from '../layout/SpecList';
import { useSEO } from '../../hooks/useSEO';
import { useLanguage } from '../../contexts/LanguageContext';

const ASSET_BASE = 'https://tfrkdvnboioqufwgszpi.supabase.co/storage/v1/object/public/email%20foto';

/* Piattaforme di sicurezza integrate: loghi in monocromia bianca, molti
   sono scuri su trasparente e sul fondo nero sparirebbero. */
const CYBER_LOGOS = [
  { file: 'Palo_Alto_logo_PNG_(3).png', title: 'Palo Alto Networks', height: 'h-12', width: 2560, intrinsicHeight: 469 },
  { file: 'Okta_(3).png', title: 'Okta', height: 'h-10', width: 3840, intrinsicHeight: 2160 },
  { file: 'CrowdStrike_logo.svg.png', title: 'CrowdStrike', height: 'h-8', width: 1280, intrinsicHeight: 237 },
  { file: 'Cloudflare-Logo.wine.png', title: 'Cloudflare', height: 'h-20', width: 3000, intrinsicHeight: 2000 },
] as const;

const CustomGPTs: React.FC = () => {
  const { t, language } = useLanguage();

  useSEO({
    title:
      language === 'it'
        ? 'Software personalizzato potenziato con AI | Agentics - Sviluppo su misura'
        : 'Custom software powered by AI | Agentics - Tailored development',
    description:
      language === 'it'
        ? 'Sviluppiamo software personalizzato potenziato con AI per la tua azienda: assistenti HR, sistemi legali, CRM intelligenti e automazioni su misura.'
        : 'We develop custom software powered by AI for your business: HR assistants, legal systems, intelligent CRM, and tailored automations.',
    keywords:
      language === 'it'
        ? 'software personalizzato potenziato con AI, sviluppo software custom, applicazioni intelligenza artificiale, assistente AI aziendale, CRM AI, HR AI, soluzioni AI su misura, automazione processi'
        : 'custom software powered by AI, custom software development, artificial intelligence applications, business AI assistant, AI CRM, HR AI, tailored AI solutions, process automation',
    canonicalUrl: 'https://agentics.eu.com/services/software-personalizzato',
    language,
  });

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const processSteps: readonly SpecItem[] = [
    { term: t('customGPTs.step1.title'), description: t('customGPTs.step1.description') },
    { term: t('customGPTs.step2.title'), description: t('customGPTs.step2.description') },
    { term: t('customGPTs.step3.title'), description: t('customGPTs.step3.description') },
    { term: t('customGPTs.step4.title'), description: t('customGPTs.step4.description') },
  ];

  const auditItems: readonly SpecItem[] = [
    { term: t('customGPTs.audit1.title'), description: t('customGPTs.audit1.desc') },
    { term: t('customGPTs.audit2.title'), description: t('customGPTs.audit2.desc') },
    { term: t('customGPTs.audit3.title'), description: t('customGPTs.audit3.desc') },
  ];

  const stats = [
    { value: t('customGPTs.stat1.value'), label: t('customGPTs.stat1.label') },
    { value: t('customGPTs.stat2.value'), label: t('customGPTs.stat2.label') },
    { value: t('customGPTs.stat3.value'), label: t('customGPTs.stat3.label') },
  ];

  return (
    <>
      <div className="pt-header" />
      <BackHomeButton />

      {/* Tipologia: testo su colonna singola */}
      <Section labelledBy="software-title" divided={false}>
        <SectionHeader
          as="h1"
          label={t('company.label')}
          title={t('customGPTs.pageTitle')}
          titleId="software-title"
          lead={t('customGPTs.pageDescription')}
        />
        <button type="button" onClick={scrollToContact} className="btn-primary">
          {t('customGPTs.cta')}
        </button>
      </Section>

      {/* Tipologia: testo con media */}
      <Section labelledBy="demo-title">
        <SectionHeader
          title={t('constructionDemo.headline')}
          titleId="demo-title"
          lead={t('constructionDemo.demoSubtitle')}
        />
        <ConstructionDemo />
        <p className="text-body-muted mt-lg max-w-[68ch]">
          {t('constructionDemo.footerDescription')}
        </p>

        <div className="mt-2xl border-t border-line pt-lg">
          <p className="label mb-md">{t('customGPTs.techStack')}</p>
          <div className="relative h-16">
            <LogoLoop
              logos={TECH_LOGOS}
              speed={30}
              direction="left"
              logoHeight={40}
              gap={80}
              hoverSpeed={0}
              fadeOut
              ariaLabel={t('customGPTs.techStackAria')}
            />
          </div>
        </div>
      </Section>

      {/* Tipologia: elenco descrittivo */}
      <Section labelledBy="process-title">
        <SectionHeader
          title={t('customGPTs.processTitle')}
          titleId="process-title"
          lead={t('customGPTs.processSubtitle')}
        />
        <SpecList items={processSteps} />
      </Section>

      {/* Tipologia: griglia di dati */}
      <Section labelledBy="stats-title">
        <SectionHeader title={t('customGPTs.statsTitle')} titleId="stats-title" />
        <dl className="grid grid-cols-1 sm:grid-cols-3 border-t border-l border-line">
          {stats.map((stat) => (
            <div key={stat.label} className="border-r border-b border-line p-lg">
              <dt className="label mb-xs">{stat.label}</dt>
              <dd className="font-display font-semibold text-h2 text-ink tabular-nums">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* Tipologia: elenco descrittivo */}
      <Section labelledBy="audit-title">
        <SectionHeader
          label={t('customGPTs.auditTitle')}
          title={t('customGPTs.auditSubtitle')}
          titleId="audit-title"
        />
        <SpecList items={auditItems} numbered={false} />
        <p className="text-meta text-inkFaint mt-md">{t('customGPTs.auditNote')}</p>

        <div className="mt-2xl border-t border-line pt-lg">
          <p className="label mb-md">{t('customGPTs.cyberPartners')}</p>
          <div className="relative h-20 flex items-center">
            <LogoLoop
              logos={CYBER_LOGOS.map(({ file, title, height, width, intrinsicHeight }) => ({
                node: (
                  /* width/height dichiarati: il browser conosce le proporzioni
                     prima di scaricare il file e non sposta la riga. */
                  <img
                    src={`${ASSET_BASE}/${file}`}
                    alt={title}
                    width={width}
                    height={intrinsicHeight}
                    className={`${height} w-auto object-contain`}
                    loading="lazy"
                  />
                ),
                title,
              }))}
              speed={25}
              direction="left"
              logoHeight={80}
              gap={100}
              hoverSpeed={0}
              fadeOut
              className="logoloop--monochrome"
              ariaLabel={t('customGPTs.cyberPartners')}
            />
          </div>
        </div>
      </Section>

      <Contact />
    </>
  );
};

export default CustomGPTs;
