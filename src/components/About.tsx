import React, { useEffect } from 'react';
import Contact from './Contact';
import Offices from './Offices';
import { SplineScene } from './ui/splite';
import Section from './layout/Section';
import SectionHeader from './layout/SectionHeader';
import SpecList, { type SpecItem } from './layout/SpecList';
import { useSEO } from '../hooks/useSEO';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t, language } = useLanguage();

  useSEO({
    title:
      language === 'it'
        ? 'Chi Siamo - Agentics | Software su misura potenziato con AI'
        : 'About Us - Agentics | AI-Powered Custom Software',
    description:
      language === 'it'
        ? "Agentics: la tua azienda partner per l'intelligenza artificiale in Italia. Scopri chi siamo, la nostra missione e come trasformiamo le PMI italiane con AI accessibile e personalizzata. Soluzioni AI su misura dal 2024."
        : 'Agentics: your AI partner company. Discover who we are, our mission, and how we transform businesses with accessible and customized AI. Custom AI solutions since 2024.',
    keywords:
      language === 'it'
        ? 'chi siamo Agentics, azienda AI Italia, esperti intelligenza artificiale, consulenza AI aziendale, team sviluppo AI, storia Agentics, missione AI, about Agentics, azienda automazione AI italiana'
        : 'about Agentics, AI company, artificial intelligence experts, AI business consulting, AI development team, Agentics history, AI mission, AI automation company',
    canonicalUrl: 'https://agentics.eu.com/about',
    language,
    ogImage: 'https://agentics.eu.com/web-app-manifest-512x512.png?v=2026',
  });

  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Agentics SRL',
      url: 'https://agentics.eu.com',
      logo: 'https://agentics.eu.com/BASE.svg',
      description:
        language === 'it'
          ? 'Agentics sviluppa software personalizzato potenziato con AI per automatizzare la tua azienda'
          : 'Agentics develops custom software powered by AI to automate your business',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Viale Bruno Buozzi 77',
        postalCode: '00197',
        addressLocality: 'Roma',
        addressRegion: 'RM',
        addressCountry: 'IT',
      },
      location: [
        {
          '@type': 'Place',
          name: 'Sede legale',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Viale Bruno Buozzi 77',
            postalCode: '00197',
            addressLocality: 'Roma',
            addressRegion: 'RM',
            addressCountry: 'IT',
          },
        },
        {
          '@type': 'Place',
          name: 'Sede operativa',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Via Vincenzo Monti 16',
            postalCode: '04100',
            addressLocality: 'Latina',
            addressRegion: 'LT',
            addressCountry: 'IT',
          },
        },
      ],
      email: 'info@agentics.eu.com',
      taxID: '03335160598',
      foundingDate: '2024',
      sameAs: ['https://www.linkedin.com/company/agentics-srl/'],
      knowsAbout:
        language === 'it'
          ? ['Intelligenza Artificiale', 'Automazione AI', 'Software Personalizzato', 'Machine Learning', 'AI per PMI']
          : ['Artificial Intelligence', 'AI Automation', 'Custom Software', 'Machine Learning', 'AI for SMB'],
      areaServed: 'IT',
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [language]);

  const principles: readonly SpecItem[] = [
    { term: t('about.missionTitle'), description: t('about.missionText') },
    { term: t('about.visionTitle'), description: t('about.visionText') },
    { term: t('about.teamTitle'), description: t('about.teamText') },
  ];

  return (
    <>
      {/* Spazio per l'header a posizione fissa */}
      <div className="pt-header" />

      {/* Tipologia: blocco a due colonne con media */}
      <Section labelledBy="about-title" divided={false}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg lg:gap-xl lg:items-center">
          <SectionHeader
            as="h1"
            label={t('about.label')}
            title={`${t('about.heroTitle1')} ${t('about.heroTitle2')}`}
            titleId="about-title"
            lead={t('about.lead')}
          />
          {/* Altezza dichiarata: la scena 3D si carica senza spostare il layout */}
          <div className="h-[280px] sm:h-[340px] lg:h-[400px] border border-line bg-plateSoft">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
              /* Stesso valore di bg-plateSoft: il canvas Spline è opaco e non erediterebbe il fondo */
              backgroundColor="#D4D4D4"
            />
          </div>
        </div>
      </Section>

      {/* Tipologia: elenco descrittivo */}
      <Section labelledBy="principles-title">
        <SectionHeader title={t('about.principlesTitle')} titleId="principles-title" />
        <SpecList items={principles} numbered={false} />
      </Section>

      <Contact />
      <Offices />
    </>
  );
};

export default About;
