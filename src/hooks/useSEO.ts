import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogImageAlt?: string;
  canonicalUrl?: string;
  robots?: string;
  language?: 'it' | 'en';
  locale?: string;
  ogType?: string;
  twitterCard?: string;
  twitterSite?: string;
}

const DEFAULT_OG_IMAGE = 'https://agentics.eu.com/web-app-manifest-512x512.png?v=2025';
const DEFAULT_ROBOTS = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
const DEFAULT_TWITTER_CARD = 'summary_large_image';
const DEFAULT_OG_TYPE = 'website';

const upsertMetaByName = (name: string, content: string) => {
  let meta = document.head.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', name);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
};

const upsertMetaByProperty = (property: string, content: string) => {
  let meta = document.head.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('property', property);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
};

const upsertCanonicalLink = (href: string) => {
  let canonicalLink = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', href);
};

export const useSEO = ({
  title,
  description,
  keywords,
  ogImage,
  ogImageAlt,
  canonicalUrl,
  robots,
  language,
  locale,
  ogType,
  twitterCard,
  twitterSite
}: SEOProps) => {
  useEffect(() => {
    const resolvedLanguage = language || (document.documentElement.lang === 'en' ? 'en' : 'it');
    const effectiveCanonicalUrl = canonicalUrl || `${window.location.origin}${window.location.pathname}`;
    const effectiveOgImage = ogImage || DEFAULT_OG_IMAGE;
    const effectiveRobots = robots || DEFAULT_ROBOTS;
    const effectiveLocale = locale || (resolvedLanguage === 'en' ? 'en_US' : 'it_IT');

    if (title) {
      document.title = title;
      upsertMetaByProperty('og:title', title);
      upsertMetaByName('twitter:title', title);
    }

    if (description) {
      upsertMetaByName('description', description);
      upsertMetaByProperty('og:description', description);
      upsertMetaByName('twitter:description', description);
    }

    if (keywords) {
      upsertMetaByName('keywords', keywords);
    }

    document.documentElement.setAttribute('lang', resolvedLanguage);
    upsertMetaByName('language', resolvedLanguage === 'it' ? 'Italian' : 'English');

    upsertMetaByName('robots', effectiveRobots);
    upsertMetaByName('googlebot', effectiveRobots);
    upsertMetaByName('twitter:card', twitterCard || DEFAULT_TWITTER_CARD);

    if (twitterSite) {
      upsertMetaByName('twitter:site', twitterSite);
    }

    if (effectiveOgImage) {
      upsertMetaByProperty('og:image', effectiveOgImage);
      upsertMetaByName('twitter:image', effectiveOgImage);

      if (ogImageAlt) {
        upsertMetaByProperty('og:image:alt', ogImageAlt);
        upsertMetaByName('twitter:image:alt', ogImageAlt);
      }
    }

    if (effectiveCanonicalUrl) {
      upsertCanonicalLink(effectiveCanonicalUrl);
      upsertMetaByProperty('og:url', effectiveCanonicalUrl);
    }

    upsertMetaByProperty('og:type', ogType || DEFAULT_OG_TYPE);

    if (effectiveLocale) {
      upsertMetaByProperty('og:locale', effectiveLocale);
    }
  }, [
    title,
    description,
    keywords,
    ogImage,
    ogImageAlt,
    canonicalUrl,
    robots,
    language,
    locale,
    ogType,
    twitterCard,
    twitterSite,
  ]);
};
