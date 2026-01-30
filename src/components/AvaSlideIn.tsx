import { useState, useEffect } from 'react';
import { X, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface AvaSlideInProps {
  pageType: 'athlete' | 'assistant';
}

export default function AvaSlideIn({ pageType }: AvaSlideInProps) {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem('avaSlideInDismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
      return;
    }

    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

      if (scrollPercentage >= 35 && !isVisible && !isDismissed) {
        setIsVisible(true);
        setTimeout(() => setHasAnimated(true), 1200);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible, isDismissed]);

  const handleTeaserClick = () => {
    setIsExpanded(true);
  };

  const handleClose = () => {
    if (isExpanded) {
      setIsExpanded(false);
    } else {
      setIsVisible(false);
      setIsDismissed(true);
      sessionStorage.setItem('avaSlideInDismissed', 'true');
    }
  };

  const handleCtaClick = () => {
    window.open('https://www.ava.services/', '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    if (isExpanded) {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsExpanded(false);
        }
      };
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isExpanded]);

  if (!isVisible || isDismissed) return null;

  const colors = pageType === 'athlete'
    ? {
        teaserBg: '#71B554',
        ctaBg: '#71B554',
      }
    : {
        teaserBg: '#D86D55',
        ctaBg: '#D86D55',
      };

  const teaserText = t(`faq.slideIn.${pageType}.teaser`);
  const expandedText = t(`faq.slideIn.${pageType}.expanded`);
  const ctaText = t(`faq.slideIn.${pageType}.cta`);

  return (
    <>
      <style>
        {`
          @keyframes slideInFromBottom {
            from {
              transform: translateY(100%);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }

          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-8px);
            }
          }

          .ava-slide-in-teaser {
            animation: slideInFromBottom 400ms ease-out;
          }

          .ava-slide-in-teaser.animate-bounce {
            animation: slideInFromBottom 400ms ease-out, bounce 500ms ease-in-out 400ms 2;
          }

          @media (prefers-reduced-motion: reduce) {
            .ava-slide-in-teaser,
            .ava-slide-in-teaser.animate-bounce {
              animation: none;
            }
          }

          .ava-slide-in-expanded {
            animation: slideInFromBottom 300ms ease-in-out;
          }
        `}
      </style>

      {!isExpanded ? (
        <div
          className={`ava-slide-in-teaser ${!hasAnimated ? 'animate-bounce' : ''} fixed z-50 bottom-6 right-6 md:right-8 cursor-pointer group`}
          style={{
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
          }}
          onClick={handleTeaserClick}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleTeaserClick();
            }
          }}
          role="button"
          tabIndex={0}
          aria-label={teaserText}
        >
          <div
            className="flex items-center gap-3 px-5 py-3 rounded-full"
            style={{ backgroundColor: colors.teaserBg }}
          >
            <Users className="w-5 h-5 text-white flex-shrink-0" />
            <span className="text-white font-semibold text-base whitespace-nowrap">
              {teaserText}
            </span>
            <button
              className="opacity-0 group-hover:opacity-100 transition-opacity ml-1 -mr-1 p-1 rounded-full hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation();
                handleClose();
              }}
              aria-label="Close"
              tabIndex={0}
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      ) : (
        <div
          className="ava-slide-in-expanded fixed z-50 bottom-6 right-6 md:right-8 w-[calc(100%-3rem)] md:w-80 rounded-2xl p-6"
          style={{
            backgroundColor: '#F7ECD5',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="ava-slide-in-title"
        >
          <button
            className="absolute top-4 right-4 p-1 rounded-full hover:bg-[#B3ADAA]/20 transition-colors"
            onClick={handleClose}
            aria-label="Close"
            tabIndex={0}
          >
            <X className="w-5 h-5" style={{ color: '#B3ADAA' }} />
          </button>

          <div className="flex flex-col gap-4">
            <img
              src="/ava_logo.png"
              alt="ava assist logo"
              className="h-10 object-contain object-left"
            />

            <p
              className="text-base leading-relaxed"
              style={{ color: '#3F3E34' }}
              id="ava-slide-in-title"
            >
              {expandedText}
            </p>

            <button
              className="w-full py-3.5 px-4 rounded-lg font-semibold text-base text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: colors.ctaBg }}
              onClick={handleCtaClick}
              tabIndex={0}
            >
              {ctaText}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
