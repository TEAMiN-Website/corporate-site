import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Cookie, X, Shield, BarChart3 } from 'lucide-react';

interface CookieConsentProps {
  onAccept: () => void;
  onDecline: () => void;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ onAccept, onDecline }) => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

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
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end justify-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-2xl w-full border border-gray-200 dark:border-gray-700">
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                <Cookie className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-cooper-hewitt-book font-normal text-gray-900 dark:text-white">
                  {t('cookieConsent.title')}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {t('cookieConsent.subtitle')}
                </p>
              </div>
            </div>
            <button
              onClick={handleDecline}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
            >
              <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </button>
          </div>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            {t('cookieConsent.description')}
          </p>

          {showDetails && (
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 mb-4 space-y-3">
              <div className="flex items-start space-x-3">
                <Shield className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                    {t('cookieConsent.essential.title')}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {t('cookieConsent.essential.description')}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <BarChart3 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                    {t('cookieConsent.analytics.title')}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {t('cookieConsent.analytics.description')}
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm transition-colors duration-200"
            >
              {showDetails ? t('cookieConsent.hideDetails') : t('cookieConsent.showDetails')}
            </button>
            <div className="flex flex-col sm:flex-row gap-3 sm:ml-auto">
              <button
                onClick={handleDecline}
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                {t('cookieConsent.decline')}
              </button>
              <button
                onClick={handleAccept}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                {t('cookieConsent.accept')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;