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
 <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#F7ECD5] dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-lg">
 <div className="max-w-7xl mx-auto px-4 py-3">
 <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
 <div className="flex items-center gap-3 text-sm text-[#3F3E34] dark:text-gray-300">
 <Cookie className="w-5 h-5 flex-shrink-0 text-[#71B554]" />
 <p className="text-center sm:text-left">
 {t('cookieConsent.description')}
 </p>
 </div>

 <div className="flex items-center gap-2 flex-shrink-0">
 <button
 onClick={handleDecline}
 className="px-4 py-2 text-sm text-[#3F3E34] dark:text-gray-300 hover:text-[#2A2928] dark:hover:text-white transition-colors duration-200"
 >
 {t('cookieConsent.decline')}
 </button>
 <button
 onClick={handleAccept}
 className="px-4 py-2 text-sm bg-[#71B554] text-white rounded-lg hover:bg-[#5A9443] transition-colors duration-200"
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