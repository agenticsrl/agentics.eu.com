import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Language, TranslationKey } from '../lib/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'it',
  setLanguage: () => {},
  t: () => '',
  isLoading: true,
});

export const useLanguage = () => useContext(LanguageContext);

async function detectCountry(): Promise<string | null> {
  try {
    const response = await fetch('https://ipapi.co/json/', {
      signal: AbortSignal.timeout(3000)
    });
    if (!response.ok) return null;
    const data = await response.json();
    return data.country_code || null;
  } catch {
    try {
      const response = await fetch('https://ip-api.com/json/?fields=countryCode', {
        signal: AbortSignal.timeout(3000)
      });
      if (!response.ok) return null;
      const data = await response.json();
      return data.countryCode || null;
    } catch {
      return null;
    }
  }
}

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('it');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initLanguage = async () => {
      const savedLang = localStorage.getItem('preferred-language') as Language | null;

      if (savedLang && (savedLang === 'it' || savedLang === 'en')) {
        setLanguageState(savedLang);
        setIsLoading(false);
        return;
      }

      const countryCode = await detectCountry();

      if (countryCode === 'IT') {
        setLanguageState('it');
      } else if (countryCode) {
        setLanguageState('en');
      } else {
        const browserLang = navigator.language.toLowerCase();
        if (browserLang.startsWith('it')) {
          setLanguageState('it');
        } else {
          setLanguageState('en');
        }
      }

      setIsLoading(false);
    };

    initLanguage();
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('preferred-language', lang);
    window.dispatchEvent(new CustomEvent('languageChange', { detail: { language: lang } }));
  };

  const t = (key: string): string => {
    const trans = translations[language];
    return (trans as Record<string, string>)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isLoading }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
