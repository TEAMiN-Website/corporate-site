import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, Copy, Check } from 'lucide-react';

const Footer: React.FC = () => {
 const { t } = useTranslation();
 const [copied, setCopied] = useState(false);

 const handleCopyEmail = () => {
 navigator.clipboard.writeText('sportassistenz@uni-wuerzburg.de');
 setCopied(true);
 setTimeout(() => setCopied(false), 2000);
 };

 const quickLinks = [
 { to: '/about', label: t('nav.about') },
 { to: '/spass', label: t('nav.spass') },
 { to: '/athletes', label: t('nav.athletes') },
 { to: '/volunteers', label: t('nav.volunteers') },
 { to: '/contact', label: t('nav.contact') }
 ];

 const legalLinks = [
 { to: '/impressum', label: t('footer.legalLinks.impressum') },
 { to: '/privacy', label: t('footer.legalLinks.privacy') },
 { to: '/terms', label: t('footer.legalLinks.terms') },
 { to: '/faq', label: t('footer.legalLinks.faq') }
 ];

 return (
 <footer className="bg-white text-gray-900 py-12 border-t border-gray-200 transition-colors duration-200">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid md:grid-cols-4 gap-8">
 <div className="md:col-span-2">
 <div className="flex items-center space-x-2 mb-4">
 <img 
 src="TEAMiN Logo.png" 
 alt="TEAMiN Logo" 
 className="h-10 w-auto object-contain"
 />
 </div>
 <div className="flex items-center space-x-3">
 <div className="flex items-center space-x-2 bg-gray-100 rounded-lg px-4 py-2">
 <Mail className="w-5 h-5 text-gray-600" />
 <span className="text-gray-600 text-sm">sportassistenz@uni-wuerzburg.de</span>
 <button
 onClick={handleCopyEmail}
 className="ml-2 p-1 hover:bg-gray-200 rounded transition-colors duration-200"
 aria-label="Copy email address"
 >
 {copied ? (
 <Check className="w-3.5 h-3.5 text-green-600" />
 ) : (
 <Copy className="w-3.5 h-3.5 text-gray-600" />
 )}
 </button>
 </div>
 </div>
 </div>
 
 <div>
 <h4 className="font-cooper-hewitt-book font-normal mb-4 text-gray-900 ">{t('footer.quickLinks')}</h4>
 <div className="space-y-2">
 {quickLinks.map((link) => (
 <Link
 key={link.to}
 to={link.to}
 className="block text-gray-600 hover:text-gray-900 transition-colors duration-200"
 >
 {link.label}
 </Link>
 ))}
 </div>
 </div>
 
 <div>
 <h4 className="font-cooper-hewitt-book font-normal mb-4 text-gray-900 ">{t('footer.legal')}</h4>
 <div className="space-y-2">
 {legalLinks.map((link) => (
 <Link
 key={link.to}
 to={link.to}
 className="block text-gray-600 hover:text-gray-900 transition-colors duration-200"
 >
 {link.label}
 </Link>
 ))}
 </div>
 </div>
 </div>
 
 <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600 ">
 <p>&copy; 2025 TEAMiN. {t('footer.copyright')}</p>
 </div>
 </div>
 </footer>
 );
};

export default Footer;