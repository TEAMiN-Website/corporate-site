import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Copy, Check } from 'lucide-react';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);
  const email = 'kontakt@teaminklusion.de';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F7ECD5] to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#3F3E34] dark:text-white mb-4 uppercase">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-[#B3ADAA] dark:text-gray-300">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden">
          <div className="relative h-64 overflow-hidden">
            <img
              src="/postkasten.jpg"
              alt="Contact"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>

          <div className="p-8 md:p-12">
            <div className="flex flex-col items-center justify-center text-center space-y-8">
              <div className="flex items-center justify-center w-20 h-20 bg-[#71B554] rounded-full">
                <Mail className="w-10 h-10 text-white" />
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#3F3E34] dark:text-white">
                  {t('homeNew.contact.description')}
                </h2>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                  <a
                    href={`mailto:${email}`}
                    className="bg-[#3F3E34] text-[#F7ECD5] px-8 py-4 rounded-full font-semibold hover:bg-[#2A2928] transition-all duration-300 flex items-center space-x-2"
                  >
                    <Mail className="w-5 h-5" />
                    <span>{email}</span>
                  </a>

                  <button
                    onClick={handleCopyEmail}
                    className="bg-[#71B554] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#5A9443] transition-all duration-300 flex items-center space-x-2"
                  >
                    {copied ? (
                      <>
                        <Check className="w-5 h-5" />
                        <span>{t('homeNew.contact.copied')}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-5 h-5" />
                        <span>{t('homeNew.contact.copy')}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
