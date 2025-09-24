// Analytics configuration - Replace these with your actual IDs
const CLARITY_PROJECT_ID = 'YOUR_CLARITY_PROJECT_ID'; // Replace with your Microsoft Clarity Project ID
const GA_MEASUREMENT_ID = 'YOUR_GA_MEASUREMENT_ID'; // Replace with your Google Analytics Measurement ID (GA4)

// Microsoft Clarity initialization
export const initializeClarity = (): void => {
  if (typeof window === 'undefined' || !CLARITY_PROJECT_ID || CLARITY_PROJECT_ID === 'YOUR_CLARITY_PROJECT_ID') {
    console.warn('Microsoft Clarity: Project ID not configured');
    return;
  }

  try {
    // Check if Clarity is already loaded
    if ((window as any).clarity) {
      console.log('Microsoft Clarity: Already initialized');
      return;
    }

    // Clarity tracking script
    (function(c: any, l: any, a: any, r: any, i: any, t: any, y: any) {
      c[a] = c[a] || function() { (c[a].q = c[a].q || []).push(arguments) };
      t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
      y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", CLARITY_PROJECT_ID);

    console.log('Microsoft Clarity: Initialized successfully');
  } catch (error) {
    console.error('Microsoft Clarity: Initialization failed', error);
  }
};

// Google Analytics initialization
export const initializeGoogleAnalytics = (): void => {
  if (typeof window === 'undefined' || !GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === 'YOUR_GA_MEASUREMENT_ID') {
    console.warn('Google Analytics: Measurement ID not configured');
    return;
  }

  try {
    // Check if gtag is already loaded
    if ((window as any).gtag) {
      console.log('Google Analytics: Already initialized');
      return;
    }

    // Create gtag script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    // Initialize gtag
    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(...args: any[]) {
      (window as any).dataLayer.push(args);
    }
    (window as any).gtag = gtag;

    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, {
      anonymize_ip: true, // GDPR compliance
      cookie_flags: 'SameSite=None;Secure'
    });

    console.log('Google Analytics: Initialized successfully');
  } catch (error) {
    console.error('Google Analytics: Initialization failed', error);
  }
};

// Initialize all analytics services
export const initializeAnalytics = (): void => {
  const consent = localStorage.getItem('cookie-consent');
  
  if (consent === 'accepted') {
    initializeClarity();
    initializeGoogleAnalytics();
  } else {
    console.log('Analytics: User consent not granted');
  }
};

// Track page views (call this on route changes)
export const trackPageView = (path: string, title?: string): void => {
  const consent = localStorage.getItem('cookie-consent');
  
  if (consent !== 'accepted') return;

  // Google Analytics page view
  if ((window as any).gtag) {
    (window as any).gtag('config', GA_MEASUREMENT_ID, {
      page_path: path,
      page_title: title
    });
  }

  // Clarity automatically tracks page views, no additional code needed
};

// Track custom events
export const trackEvent = (eventName: string, parameters?: Record<string, any>): void => {
  const consent = localStorage.getItem('cookie-consent');
  
  if (consent !== 'accepted') return;

  // Google Analytics event
  if ((window as any).gtag) {
    (window as any).gtag('event', eventName, parameters);
  }

  // Clarity custom events
  if ((window as any).clarity) {
    (window as any).clarity('event', eventName);
  }
};

// Remove analytics cookies and scripts (for GDPR compliance)
export const removeAnalytics = (): void => {
  try {
    // Remove Google Analytics cookies
    const gaCookies = document.cookie.split(';').filter(cookie => 
      cookie.trim().startsWith('_ga') || 
      cookie.trim().startsWith('_gid') ||
      cookie.trim().startsWith('_gat')
    );

    gaCookies.forEach(cookie => {
      const cookieName = cookie.split('=')[0].trim();
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${window.location.hostname}`;
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    });

    // Clear dataLayer
    if ((window as any).dataLayer) {
      (window as any).dataLayer = [];
    }

    // Remove gtag function
    delete (window as any).gtag;

    // Remove Clarity
    delete (window as any).clarity;

    console.log('Analytics: Cookies and scripts removed');
  } catch (error) {
    console.error('Analytics: Error removing cookies and scripts', error);
  }
};