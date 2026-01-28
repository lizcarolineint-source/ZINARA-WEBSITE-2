import { useEffect } from 'react';

interface SEOMetaProps {
  title: string;
  description: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: Record<string, unknown>;
}

export default function SEOMeta({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  twitterTitle,
  twitterDescription,
  twitterImage,
  structuredData,
}: SEOMetaProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMeta = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    const updateOGMeta = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Meta description
    updateMeta('description', description);

    // Open Graph
    updateOGMeta('og:title', ogTitle || title);
    updateOGMeta('og:description', ogDescription || description);
    updateOGMeta('og:type', ogType);
    if (ogImage) updateOGMeta('og:image', ogImage);

    // Twitter Card
    updateMeta('twitter:card', twitterCard);
    updateMeta('twitter:title', twitterTitle || title);
    updateMeta('twitter:description', twitterDescription || description);
    if (twitterImage) updateMeta('twitter:image', twitterImage);

    // Canonical URL
    if (canonical) {
      let canonicalElement = document.querySelector('link[rel="canonical"]');
      if (!canonicalElement) {
        canonicalElement = document.createElement('link');
        canonicalElement.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalElement);
      }
      canonicalElement.setAttribute('href', canonical);
    }

    // Structured Data (JSON-LD)
    if (structuredData) {
      let scriptElement = document.querySelector('script[type="application/ld+json"]');
      if (!scriptElement) {
        scriptElement = document.createElement('script');
        scriptElement.setAttribute('type', 'application/ld+json');
        document.head.appendChild(scriptElement);
      }
      scriptElement.textContent = JSON.stringify(structuredData);
    }
  }, [title, description, canonical, ogTitle, ogDescription, ogImage, ogType, twitterCard, twitterTitle, twitterDescription, twitterImage, structuredData]);

  return null;
}
