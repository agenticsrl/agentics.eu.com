import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { Footer as ShadcnFooter } from '@/components/ui/footer';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <ShadcnFooter
      logo={
        <img
          src="/BASE.svg"
          alt="Agentics"
          className="h-16 w-auto"
        />
      }
      brandName=""
      socialLinks={[
        {
          icon: <Linkedin className="h-5 w-5" />,
          href: "https://www.linkedin.com/company/agentics-srl/people/?viewAsMember=true",
          label: "LinkedIn",
        },
        {
          icon: <Mail className="h-5 w-5" />,
          href: "mailto:info@agentics.eu.com",
          label: "Email",
        },
      ]}
      mainLinks={[
        { href: "/about", label: t('footer.aboutUs') },
        { href: "#contact", label: t('footer.contact') },
      ]}
      legalLinks={[
        { href: "/privacy-policy", label: t('footer.privacy') },
        { href: "/terms-of-service", label: t('footer.terms') },
      ]}
      copyright={{
        text: '@2026 Agentics SRL',
        license: "P.IVA: 03335160598",
      }}
    />
  );
};

export default Footer;
