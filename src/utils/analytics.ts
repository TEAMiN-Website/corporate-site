// Analytics configuration - Replace these with your actual IDs
const CLARITY_PROJECT_ID = 'tfwiogwvud'; // Replace with your Microsoft Clarity Project ID
const GA_MEASUREMENT_ID = 'G-PX3P760ZQR'; // Replace with your Google Analytics Measurement ID (GA4)

// Generate or retrieve persistent user ID
const getUserId = (): string => {
  const STORAGE_KEY = 'teamin_user_id';
  let userId = localStorage.getItem(STORAGE_KEY);
  
  if (!userId) {
    // Generate a unique user ID (similar to UUID v4)
    userId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem(STORAGE_KEY, userId);
  }
  
  return userId;
};

// Export function to get current user ID (for debugging)
export const getCurrentUserId = (): string | null => {
  return localStorage.getItem('teamin_user_id');
};

// Microsoft Clarity initialization
export const initializeClarity = (): void => {
  if (typeof window === 'undefined' || !CLARITY_PROJECT_ID) {
    console.warn('Microsoft Clarity: Project ID not configured');
    return;
  }

  try {
    // Check if Clarity is already loaded
    if ((window as any).clarity) {
      return;
    }

    // Clarity tracking script with proper TypeScript handling
    (function(c: any, l: Document, a: string, r: string, i: string) {
        c[a] = c[a] || function() { (c[a].q = c[a].q || []).push(arguments); };
        const t = l.createElement(r) as HTMLScriptElement;
        t.async = true;
        t.src = "https://www.clarity.ms/tag/" + i;
        const y = l.getElementsByTagName(r)[0];
        if (y && y.parentNode) {
          y.parentNode.insertBefore(t, y);
        }
    })(window, document, "clarity", "script", CLARITY_PROJECT_ID);

    // Set persistent user ID once Clarity is loaded
    const userId = getUserId();
    
    // Wait for Clarity to be ready and set the user ID
    const setUserIdWhenReady = () => {
      if ((window as any).clarity && typeof (window as any).clarity === 'function') {
        try {
          (window as any).clarity('identify', userId);
          console.log('Microsoft Clarity: User ID set to', userId);
        } catch (error) {
          console.error('Microsoft Clarity: Failed to set user ID', error);
        }
      } else {
        // Retry after a short delay
        setTimeout(setUserIdWhenReady, 100);
      }
    };
    
    // Start checking for Clarity readiness
    setTimeout(setUserIdWhenReady, 100);
  } catch (error) {
    console.error('Microsoft Clarity: Initialization failed', error);
  }
};

// Google Analytics initialization
export const initializeGoogleAnalytics = (): void => {
  if (typeof window === 'undefined' || !GA_MEASUREMENT_ID ) {
    console.warn('Google Analytics: Measurement ID not configured');
    return;
  }

  try {
    // Check if gtag is already loaded
    if ((window as any).gtag) {
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

    // Remove persistent user ID
    localStorage.removeItem('teamin_user_id');
  } catch (error) {
    console.error('Analytics: Error removing cookies and scripts', error);
  }
};