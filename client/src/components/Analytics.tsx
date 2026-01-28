import { useEffect } from 'react';

interface AnalyticsProps {
  gtmId?: string;
  ga4Id?: string;
}

export default function Analytics({ gtmId, ga4Id }: AnalyticsProps) {
  useEffect(() => {
    // Google Tag Manager
    if (gtmId) {
      // GTM Script
      const gtagScript = document.createElement('script');
      gtagScript.async = true;
      gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${ga4Id}`;
      document.head.appendChild(gtagScript);

      // GTM noscript
      const noscript = document.createElement('noscript');
      noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
      document.body.appendChild(noscript);

      // GTM Script initialization
      const gtmScript = document.createElement('script');
      gtmScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${ga4Id}', {
          'page_path': window.location.pathname,
          'page_title': document.title,
        });
      `;
      document.head.appendChild(gtmScript);
    }

    // Google Analytics 4 (if not using GTM)
    if (ga4Id && !gtmId) {
      const gaScript = document.createElement('script');
      gaScript.async = true;
      gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${ga4Id}`;
      document.head.appendChild(gaScript);

      const gaInitScript = document.createElement('script');
      gaInitScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${ga4Id}', {
          'page_path': window.location.pathname,
          'page_title': document.title,
        });
      `;
      document.head.appendChild(gaInitScript);
    }
  }, [gtmId, ga4Id]);

  return null;
}
