import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

export const useSEO = ({
  title,
  description,
  keywords,
  ogImage,
  canonicalUrl
}: SEOProps) => {
  useEffect(() => {
    if (title) {
      document.title = title;

      const ogTitleMeta = document.querySelector('meta[property="og:title"]');
      if (ogTitleMeta) {
        ogTitleMeta.setAttribute('content', title);
      }

      const twitterTitleMeta = document.querySelector('meta[name="twitter:title"]');
      if (twitterTitleMeta) {
        twitterTitleMeta.setAttribute('content', title);
      }
    }

    if (description) {
      const descriptionMeta = document.querySelector('meta[name="description"]');
      if (descriptionMeta) {
        descriptionMeta.setAttribute('content', description);
      }

      const ogDescMeta = document.querySelector('meta[property="og:description"]');
      if (ogDescMeta) {
        ogDescMeta.setAttribute('content', description);
      }

      const twitterDescMeta = document.querySelector('meta[name="twitter:description"]');
      if (twitterDescMeta) {
        twitterDescMeta.setAttribute('content', description);
      }
    }

    if (keywords) {
      const keywordsMeta = document.querySelector('meta[name="keywords"]');
      if (keywordsMeta) {
        keywordsMeta.setAttribute('content', keywords);
      }
    }

    if (ogImage) {
      const ogImageMeta = document.querySelector('meta[property="og:image"]');
      if (ogImageMeta) {
        ogImageMeta.setAttribute('content', ogImage);
      }

      const twitterImageMeta = document.querySelector('meta[name="twitter:image"]');
      if (twitterImageMeta) {
        twitterImageMeta.setAttribute('content', ogImage);
      }
    }

    if (canonicalUrl) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonicalUrl);

      const ogUrlMeta = document.querySelector('meta[property="og:url"]');
      if (ogUrlMeta) {
        ogUrlMeta.setAttribute('content', canonicalUrl);
      }
    }
  }, [title, description, keywords, ogImage, canonicalUrl]);
};
