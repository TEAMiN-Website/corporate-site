import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, Copy, Check } from 'lucide-react';

const Footer: React.FC = () => {
 const { t } = useTranslation();
 const [copied, setCopied] = useState(false);

 const handleCopyEmail = () => {
 navigator.clipboard.writeText('kontakt@teaminklusion.de');
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
 <div className="flex items-center space-x-2 mb-6">
 <img 
 src="/TEAMiN Logo.png" 
 alt="TEAMiN Logo" 
 className="h-10 w-auto object-contain"
 />
 </div>
 <p className="text-gray-600 mb-4 max-w-md">
 {t('footer.description')}
 </p>
 <div className="flex items-center space-x-2 group">
 <Mail className="w-4 h-4 text-gray-500" />
 <span
 className="text-gray-700 text-sm font-medium cursor-pointer select-all hover:text-gray-900 transition-colors duration-200"
 title="Click to select and copy"
 >
 kontakt@teaminklusion.de
 </span>
 <button
 onClick={handleCopyEmail}
 className="p-1.5 hover:bg-gray-100 rounded-md transition-colors duration-200 opacity-0 group-hover:opacity-100"
 aria-label="Copy email address"
 title={copied ? "Copied!" : "Copy email"}
 >
 {copied ? (
 <Check className="w-4 h-4 text-green-600" />
 ) : (
 <Copy className="w-4 h-4 text-gray-500" />
 )}
 </button>
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
