import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Heart, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const quickLinks = [
    { to: '/about', label: t('nav.about') },
    { to: '/spass', label: t('nav.spass') },
    { to: '/athletes', label: t('nav.athletes') },
    { to: '/volunteers', label: t('nav.volunteers') }
  ];

  const legalLinks = [
    { to: '/impressum', label: 'Impressum' },
    { to: '/privacy', label: 'Privacy Policy' },
    { to: '/terms', label: 'Terms of Use' },
    { to: '/faq', label: 'FAQ' }
  ];

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-dm-sans-light font-light">TEAMiN</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors duration-200">
                <Mail className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors duration-200">
                <Phone className="w-5 h-5" />
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">{t('footer.quickLinks')}</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">{t('footer.legal')}</h4>
            <div className="space-y-2">
              {legalLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 TEAMiN. {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;