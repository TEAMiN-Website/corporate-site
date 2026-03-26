import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Cookie } from 'lucide-react';

interface CookieConsentProps {
  onAccept: () => void;
  onDecline: () => void;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ onAccept, onDecline }) => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
    onAccept();
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
    onDecline();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#F7ECD5]/95 backdrop-blur-sm border-t border-[#B3ADAA]/30 shadow-sm animate-slide-up">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-sm text-[#3F3E34]/80">
            <Cookie className="w-4 h-4 flex-shrink-0 text-[#B3ADAA]" />
            <p className="text-center sm:text-left text-xs sm:text-sm">
              {t('cookieConsent.description')}
            </p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={handleDecline}
              className="px-3 py-1 text-xs text-[#3F3E34]/60 hover:text-[#3F3E34] transition-colors duration-200"
            >
              {t('cookieConsent.decline')}
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-1.5 text-xs bg-[#3F3E34] text-[#F7ECD5] rounded-full hover:bg-[#2A2928] transition-colors duration-200"
            >
              {t('cookieConsent.accept')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
