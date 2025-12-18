// Analytics configuration - Replace these with your actual IDs
const CLARITY_PROJECT_ID = 'tfwiogwvud'; // Replace with your Microsoft Clarity Project ID
const GA_MEASUREMENT_ID = 'G-PX3P760ZQR'; // Replace with your Google Analytics Measurement ID (GA4)

// Singleton user ID - ensure we always use the same ID
let _cachedUserId: string | null = null;

// Generate or retrieve persistent user ID
const getUserId = (): string => {
  // Return cached ID if we already have it
  if (_cachedUserId) {
    return _cachedUserId;
  }
  
  const STORAGE_KEY = 'teamin_user_id';
  let userId = localStorage.getItem(STORAGE_KEY);
  
  if (!userId) {
    // Generate a unique user ID (similar to UUID v4)
    userId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem(STORAGE_KEY, userId);
  }
  
  // Cache the user ID to prevent multiple generations
  _cachedUserId = userId;
  
  return userId;
};

// Export function to get current user ID (for debugging)
export const getCurrentUserId = (): string | null => {
  return localStorage.getItem('teamin_user_id');
};

// Prevent multiple simultaneous identify calls
let _identifyInProgress = false;
let _lastIdentifyTime = 0;
const IDENTIFY_COOLDOWN = 1000; // 1 second cooldown between identify calls

// Identify user with Clarity (call this on each page view)
export const identifyUserWithClarity = (_path?: string): void => {
  const consent = localStorage.getItem('cookie-consent');
  
  if (consent !== 'accepted' || typeof window === 'undefined') {
    return;
  }

  // Prevent too frequent calls
  const now = Date.now();
  if (now - _lastIdentifyTime < IDENTIFY_COOLDOWN) {
    return;
  }
  
  if (_identifyInProgress) {
    return;
  }

  _identifyInProgress = true;
  _lastIdentifyTime = now;

  const userId = getUserId();

  let attempts = 0;
  
  const tryIdentify = () => {
    attempts++;
    
    if ((window as any).clarity && typeof (window as any).clarity === 'function') {
      try {
        (window as any).clarity('identify', userId);
        _identifyInProgress = false;
        return true;
      } catch (error) {
        console.error('Microsoft Clarity: Identify failed', error);
        _identifyInProgress = false;
        return false;
      }
    } else if (attempts < 10) {
      setTimeout(tryIdentify, 300);
      return false;
    } else {
      _identifyInProgress = false;
      return false;
    }
  };
  
  tryIdentify();
};

// Microsoft Clarity initialization
export const initializeClarity = (): void => {
  if (typeof window === 'undefined' || !CLARITY_PROJECT_ID) {
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
        
        // Auto-identify user when script loads
        t.addEventListener('load', () => {
          setTimeout(() => {
            if ((window as any).clarity && typeof (window as any).clarity === 'function') {
              const userId = getUserId();
              try {
                (window as any).clarity('identify', userId);
              } catch (error) {
                console.error('Microsoft Clarity: Auto-identify failed:', error);
              }
            }
          }, 500);
        });
        
        t.addEventListener('error', (e) => {
          // Silently handle Clarity loading failures (common with ad blockers or network issues)
          // This prevents console spam while maintaining functionality
        });
        
    })(window, document, "clarity", "script", CLARITY_PROJECT_ID);
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

    // Initialize dataLayer first
    (window as any).dataLayer = (window as any).dataLayer || [];
    
    // Define gtag function - must use 'arguments' to work correctly with GA
    (window as any).gtag = function() {
      (window as any).dataLayer.push(arguments);
    };

    // Send initial commands BEFORE loading the script
    (window as any).gtag('js', new Date());
    (window as any).gtag('config', GA_MEASUREMENT_ID, {
      anonymize_ip: true, // GDPR compliance
      cookie_flags: 'SameSite=None;Secure'
    });

    // Create and load gtag script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);
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

  // Identify user with Clarity for this page view (required for consistent user tracking)
  identifyUserWithClarity(path);
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

// ============================================
// ENHANCED TRACKING FUNCTIONS
// ============================================

// --- User Journey Funnel Events ---

export const trackSignupIntent = (userType: 'volunteer' | 'athlete' | 'organization'): void => {
  trackEvent('view_signup_page', { user_type: userType });
};

export const trackExternalSignup = (destination: 'bvs_elearning' | 'bvs_praxistag' | 'ava_platform' | 'lebenshilfe' | string): void => {
  trackEvent('click_external_registration', {
    destination,
    timestamp: new Date().toISOString()
  });
};

export const trackContactFormStarted = (): void => {
  trackEvent('begin_contact_form');
};

export const trackContactFormSubmitted = (success: boolean): void => {
  trackEvent('submit_contact_form', { success });
};

export const trackEmailCopyClick = (location: 'footer' | 'partners_page' | 'contact_section' | string): void => {
  trackEvent('copy_email_address', { location });
};

// --- Content Engagement Events ---

export const trackFAQItemExpanded = (category: string, questionIndex: number, question: string): void => {
  trackEvent('expand_faq_item', { 
    category, 
    question_index: questionIndex,
    question_text: question.substring(0, 100) // Truncate for readability
  });
};

export const trackResourceDownload = (filename: string, category: string): void => {
  trackEvent('download_resource', { filename, category });
};

export const trackTeamMemberViewed = (memberName: string): void => {
  trackEvent('view_team_member', { member_name: memberName });
};

export const trackPartnerCardFlipped = (partnerId: string): void => {
  trackEvent('view_partner_details', { partner_id: partnerId });
};

export const trackTestimonialViewed = (page: string, testimonialAuthor?: string): void => {
  trackEvent('view_testimonial', { page, testimonial_author: testimonialAuthor });
};

// --- Navigation & Scroll Behavior ---

export const trackSectionScroll = (sectionName: string, page: string): void => {
  trackEvent('scroll_to_section', { 
    section_name: sectionName, 
    page,
    timestamp: new Date().toISOString()
  });
};

export const trackHeroCTAClick = (page: string, ctaText: string): void => {
  trackEvent('click_hero_button', { page, cta_text: ctaText });
};

export const trackDropdownNavUsed = (menuItem: string): void => {
  trackEvent('use_navigation_dropdown', { menu_item: menuItem });
};

export const trackLanguageSwitch = (fromLang: string, toLang: string): void => {
  trackEvent('switch_language', { from_language: fromLang, to_language: toLang });
};

// Scroll depth tracking with debounce protection
const _scrollDepthTracked: Set<string> = new Set();

export const trackScrollDepth = (depthPercentage: 25 | 50 | 75 | 100, page: string): void => {
  const key = `${page}-${depthPercentage}`;
  if (_scrollDepthTracked.has(key)) return;
  
  _scrollDepthTracked.add(key);
  trackEvent('reach_scroll_depth', { depth_percentage: depthPercentage, page });
};

export const resetScrollDepthTracking = (): void => {
  _scrollDepthTracked.clear();
};

// --- Cookie Consent Analytics ---
// Note: These events cannot be tracked client-side since analytics requires consent first

let _cookieConsentShownTime: number | null = null;

export const trackCookieConsentShown = (): void => {
  _cookieConsentShownTime = Date.now();
  trackEvent('show_cookie_banner');
};

export const trackCookieConsentDecision = (decision: 'accepted' | 'declined'): void => {
  const timeToDecision = _cookieConsentShownTime 
    ? Math.round((Date.now() - _cookieConsentShownTime) / 1000) 
    : null;
  
  trackEvent('decide_cookie_consent', { 
    decision, 
    time_to_decision_seconds: timeToDecision 
  });
};

export const trackCookieDetailsExpanded = (): void => {
  trackEvent('expand_cookie_details');
};

// --- User Segmentation Events ---

export const trackAudiencePathSelected = (userType: 'athlete' | 'volunteer' | 'organization'): void => {
  trackEvent('select_audience_path', { user_type: userType });
};

export const trackAurelianStoryViewed = (viewDuration?: number): void => {
  trackEvent('view_aurelian_story', { view_duration_seconds: viewDuration });
};

// --- Outbound Link Tracking ---

export const trackOutboundLinkClick = (url: string, linkText: string, page: string): void => {
  trackEvent('click_outbound_link', { 
    url, 
    link_text: linkText.substring(0, 100), // Truncate for readability
    page 
  });
};

// --- Mobile Menu Tracking ---

export const trackMobileMenuToggle = (isOpen: boolean): void => {
  trackEvent('toggle_mobile_menu', { action: isOpen ? 'open' : 'close' });
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
    
    // Clear cached user ID
    _cachedUserId = null;
    _identifyInProgress = false;
  } catch (error) {
    console.error('Analytics: Error removing cookies and scripts', error);
  }
};