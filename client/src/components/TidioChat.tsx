import { useEffect } from 'react';

interface TidioChatProps {
  projectId?: string;
}

export default function TidioChat({ projectId }: TidioChatProps) {
  useEffect(() => {
    if (!projectId) return;

    // Tidio Script
    const script = document.createElement('script');
    script.src = 'https://cdn.tidio.co/js/embed.js';
    script.async = true;
    script.onload = () => {
      // Initialize Tidio with project ID
      if (window.tidioChatApi) {
        window.tidioChatApi.init({
          projectId: projectId,
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      // Cleanup if needed
      const tidioScript = document.querySelector('script[src="https://cdn.tidio.co/js/embed.js"]');
      if (tidioScript) {
        tidioScript.remove();
      }
    };
  }, [projectId]);

  return null;
}

// Extend window type for Tidio
declare global {
  interface Window {
    tidioChatApi?: {
      init: (config: { projectId: string }) => void;
    };
  }
}
