import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const LINKEDIN_URL = 'https://www.linkedin.com/company/agentics-srl/people/?viewAsMember=true';
const CONTACT_EMAIL = 'info@agentics.eu.com';

/**
 * Footer strutturale: stessa larghezza di contenuto e stesso ritmo delle
 * sezioni. I contatti sono link testuali, senza icone.
 */
const Footer: React.FC = () => {
  const { t } = useLanguage();

  const siteLinks = [
    { label: t('footer.aboutUs'), to: '/about' },
    { label: t('footer.software'), to: '/services/software-personalizzato' },
  ];

  const legalLinks = [
    { label: t('footer.privacy'), to: '/privacy-policy' },
    { label: t('footer.terms'), to: '/terms-of-service' },
  ];

  return (
    <footer className="border-t border-line">
      <div className="container-content py-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-xl">
          <div>
            <img
              src="/BIANCO.svg"
              alt="Agentics"
              width={623}
              height={220}
              className="h-8 w-auto mb-md"
            />
            <p className="text-meta text-inkMuted">
              Agentics SRL
              <br />
              {t('footer.license')}
            </p>
          </div>

          <nav aria-label={t('footer.sitemap')}>
            <p className="label mb-md">{t('footer.sitemap')}</p>
            <ul className="space-y-xs">
              {siteLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-meta text-inkMuted hover:text-ink tap-target">
                    {link.label}
                  </Link>
                </li>
              ))}
              {legalLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-meta text-inkMuted hover:text-ink tap-target">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="label mb-md">{t('footer.contact')}</p>
            <ul className="space-y-xs">
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-meta text-inkMuted hover:text-ink tap-target">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-meta text-inkMuted hover:text-ink tap-target"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-meta text-inkFaint mt-2xl pt-md border-t border-line">
          &copy; 2026 Agentics SRL
        </p>
      </div>
    </footer>
  );
};

export default Footer;
