import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { trackScrollDepth, resetScrollDepthTracking } from '../utils/analytics';

/**
 * Custom hook to track scroll depth on a page
 * Tracks when users reach 25%, 50%, 75%, and 100% of page height
 */
export const useScrollDepthTracking = () => {
  const location = useLocation();
  const trackedDepths = useRef<Set<number>>(new Set());

  useEffect(() => {
    // Reset tracking when page changes
    trackedDepths.current.clear();
    resetScrollDepthTracking();

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      // Calculate scroll percentage
      const scrollPercentage = Math.round(
        ((scrollTop + windowHeight) / documentHeight) * 100
      );

      const depthMilestones: (25 | 50 | 75 | 100)[] = [25, 50, 75, 100];
      
      for (const milestone of depthMilestones) {
        if (scrollPercentage >= milestone && !trackedDepths.current.has(milestone)) {
          trackedDepths.current.add(milestone);
          trackScrollDepth(milestone, location.pathname);
        }
      }
    };

    // Debounce scroll handler
    let timeoutId: NodeJS.Timeout;
    const debouncedHandleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 100);
    };

    window.addEventListener('scroll', debouncedHandleScroll, { passive: true });
    
    // Initial check in case page is already scrolled
    handleScroll();

    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
      clearTimeout(timeoutId);
    };
  }, [location.pathname]);
};

export default useScrollDepthTracking;
