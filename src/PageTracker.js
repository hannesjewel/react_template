import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function PageTracker() {
  const location = useLocation();

  useEffect(() => {
    // Push data to the window.dataLayer to trigger a pageview
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'pageview',
      'pagePath': location.pathname
    });
  }, [location]);

  return null;
}

export default PageTracker;