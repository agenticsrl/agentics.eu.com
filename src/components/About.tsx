import React, { useEffect } from 'react';
import Contact from './Contact';
import { useSEO } from '../hooks/useSEO';
import { SplineScene } from './ui/splite';
import { Card } from './ui/card';
import { Spotlight } from './ui/spotlight';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t, language } = useLanguage();

  useSEO({
    title: language === 'it'
      ? 'Chi Siamo - Agentics | Leader Italiani nell\'Automazione AI per Aziende'
      : 'About Us - Agentics | AI Automation Leaders for Business',
    description: language === 'it'
      ? 'Agentics: la tua azienda partner per l\'intelligenza artificiale in Italia. Scopri chi siamo, la nostra missione e come trasformiamo le PMI italiane con AI accessibile e personalizzata. Soluzioni AI su misura dal 2024.'
      : 'Agentics: your AI partner company. Discover who we are, our mission, and how we transform businesses with accessible and customized AI. Custom AI solutions since 2024.',
    keywords: language === 'it'
      ? 'chi siamo Agentics, azienda AI Italia, esperti intelligenza artificiale, consulenza AI aziendale, team sviluppo AI, storia Agentics, missione AI, about Agentics, azienda automazione AI italiana'
      : 'about Agentics, AI company, artificial intelligence experts, AI business consulting, AI development team, Agentics history, AI mission, AI automation company',
    canonicalUrl: 'https://agentics.eu.com/about',
    ogImage: 'https://agentics.eu.com/foliofox-preview-dark (1) 1.png'
  });

  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Agentics SRL",
      "url": "https://agentics.eu.com",
      "logo": "https://agentics.eu.com/BASE.svg",
      "description": language === 'it'
        ? "Agentics sviluppa soluzioni AI personalizzate per automatizzare la tua azienda: chatbot intelligenti, receptionist vocali, qualificazione lead"
        : "Agentics develops custom AI solutions to automate your business: smart chatbots, voice receptionists, lead qualification",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Via Vincenzo Monti 16",
        "addressLocality": "Latina",
        "addressRegion": "LT",
        "addressCountry": "IT"
      },
      "email": "info@agentics.eu.com",
      "taxID": "03335160598",
      "foundingDate": "2024",
      "sameAs": [
        "https://www.linkedin.com/company/agentics-srl/"
      ],
      "knowsAbout": language === 'it'
        ? ["Intelligenza Artificiale", "Automazione AI", "Chatbot", "Machine Learning", "AI per PMI"]
        : ["Artificial Intelligence", "AI Automation", "Chatbot", "Machine Learning", "AI for SMB"],
      "areaServed": "IT"
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [language]);

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <Card className="w-full min-h-[320px] sm:min-h-[380px] lg:min-h-[400px] bg-white relative overflow-hidden border border-neutral shadow-none">
            <Spotlight
              className="-top-20 -left-40 md:-left-60 md:-top-10"
              fill="#0163F5"
            />

            <div className="flex flex-col lg:flex-row h-full">
              <div className="flex-1 p-4 sm:p-8 lg:p-12 relative z-10 flex flex-col justify-center items-center lg:items-start order-2 lg:order-1">
                <h1 className="font-display font-bold text-graphite leading-tight text-center lg:text-left">
                  <span className="text-lg xs:text-xl sm:text-2xl md:text-3xl">{t('about.heroTitle1')}</span>
                  <br />
                  <span className="logo-text-glow text-2xl xs:text-3xl sm:text-4xl md:text-5xl">{t('about.heroTitle2')}</span>
                </h1>
              </div>

              <div className="flex-1 relative min-h-[220px] sm:min-h-[280px] lg:min-h-[350px] order-1 lg:order-2">
                <SplineScene
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 bg-white border-t border-neutral">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              <div className="py-8 md:py-0 md:px-8 first:pt-0 md:first:pl-0 last:pb-0 md:last:pr-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-[3px] h-8 bg-aiblue"></div>
                  <h3 className="font-display font-semibold text-lg text-graphite">
                    {t('about.missionTitle')}
                  </h3>
                </div>
                <p className="text-graphite/70 leading-relaxed pl-4">
                  {t('about.missionText')}
                </p>
              </div>

              <div className="py-8 md:py-0 md:px-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-[3px] h-8 bg-aiblue"></div>
                  <h3 className="font-display font-semibold text-lg text-graphite">
                    {t('about.visionTitle')}
                  </h3>
                </div>
                <p className="text-graphite/70 leading-relaxed pl-4">
                  {t('about.visionText')}
                </p>
              </div>

              <div className="py-8 md:py-0 md:px-8 last:pb-0 md:last:pr-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-[3px] h-8 bg-aiblue"></div>
                  <h3 className="font-display font-semibold text-lg text-graphite">
                    {t('about.teamTitle')}
                  </h3>
                </div>
                <p className="text-graphite/70 leading-relaxed pl-4">
                  {t('about.teamText')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default About;
