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
    <footer className="bg-white text-gray-900 py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/src/assets/TEAMiN Logo.jpg" 
                alt="TEAMiN Logo" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-dm-sans-light font-light">TEAMiN</span>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 cursor-pointer transition-colors duration-200">
                <Mail className="w-5 h-5 text-gray-600" />
              </div>
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 cursor-pointer transition-colors duration-200">
                <Phone className="w-5 h-5 text-gray-600" />
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-cooper-hewitt-book font-normal mb-4 text-gray-900">{t('footer.quickLinks')}</h4>
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
            <h4 className="font-cooper-hewitt-book font-normal mb-4 text-gray-900">{t('footer.legal')}</h4>
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
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>&copy; 2025 TEAMiN. {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;