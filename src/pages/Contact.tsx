import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Copy, ExternalLink } from 'lucide-react';

const ContactButton: React.FC = () => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);
  const [showCopied, setShowCopied] = useState(false);

  const handleClick = () => {
    if (isHovered) {
      navigator.clipboard.writeText('kontakt@teaminklusion.de');
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    }
  };

  return (
    <div className="relative inline-block">
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
        className="bg-[#3F3E34] text-[#F7ECD5] px-8 py-4 rounded-full font-semibold hover:bg-[#2A2928] transition-all duration-300 flex items-center space-x-2 group"
      >
        {isHovered ? (
          <>
            <span>kontakt@teaminklusion.de</span>
            <Copy className="w-5 h-5" />
          </>
        ) : (
          <span>{t('homeNew.contact.cta')}</span>
        )}
      </button>
      {showCopied && (
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#71B554] text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap">
          {t('homeNew.contact.copied')}
        </div>
      )}
    </div>
  );
};

const AvaContactButton: React.FC = () => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);
  const [showCopied, setShowCopied] = useState(false);

  const handleClick = () => {
    if (isHovered) {
      navigator.clipboard.writeText('support@ava.services');
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    }
  };

  return (
    <div className="relative inline-block">
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
        className="bg-[#3F3E34] text-[#F7ECD5] px-8 py-4 rounded-full font-semibold hover:bg-[#2A2928] transition-all duration-300 flex items-center space-x-2 group"
      >
        {isHovered ? (
          <>
            <span>support@ava.services</span>
            <Copy className="w-5 h-5" />
          </>
        ) : (
          <span>{t('homeNew.contact.cards.ava.cta')}</span>
        )}
      </button>
      {showCopied && (
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#71B554] text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap">
          {t('homeNew.contact.copied')}
        </div>
      )}
    </div>
  );
};

const Contact: React.FC = () => {
  const { t } = useTranslation();

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

        <div className="space-y-8">
          {/* General Contact Card */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
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

                <div className="space-y-6">
                  <div className="text-lg text-[#3F3E34] dark:text-gray-300 space-y-3">
                    <p>{t('homeNew.contact.cards.general.questions')}</p>
                    <p>{t('homeNew.contact.cards.general.findClub')}</p>
                    <p>{t('homeNew.contact.cards.general.practiceDay')}</p>
                    <p>{t('homeNew.contact.cards.general.exchange')}</p>
                  </div>

                  <p className="text-2xl md:text-3xl font-bold text-[#3F3E34] dark:text-white mt-6">
                    {t('homeNew.contact.cards.general.whatever')}
                  </p>

                  <div className="flex items-center justify-center mt-8">
                    <ContactButton />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency/Offene Hilfen Card */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="relative h-64 overflow-hidden">
              <img
                src="/image copy copy.png"
                alt="Bavaria Map - Offene Hilfen"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            <div className="p-8 md:p-12">
              <div className="flex flex-col items-center justify-center text-center space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#3F3E34] dark:text-white">
                  {t('homeNew.contact.cards.emergency.title')}
                </h2>

                <p className="text-lg text-[#3F3E34] dark:text-gray-300">
                  {t('homeNew.contact.cards.emergency.text')}
                </p>

                <a
                  href="https://www.stmas.bayern.de/inklusives-leben/offene-behindertenarbeit/index.php#sec3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#3F3E34] text-[#F7ECD5] px-8 py-4 rounded-full font-semibold hover:bg-[#2A2928] transition-all duration-300 flex items-center space-x-2"
                >
                  <span>{t('homeNew.contact.cards.emergency.cta')}</span>
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* avaAssist Card */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="relative h-64 overflow-hidden bg-white dark:bg-gray-700 flex items-center justify-center">
              <img
                src="/ava_logo.png"
                alt="avaAssist Logo"
                className="max-h-48 w-auto object-contain px-8"
              />
            </div>

            <div className="p-8 md:p-12">
              <div className="flex flex-col items-center justify-center text-center space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#3F3E34] dark:text-white">
                  {t('homeNew.contact.cards.ava.title')}
                </h2>

                <div className="text-lg text-[#3F3E34] dark:text-gray-300 space-y-2">
                  <p>
                    {t('homeNew.contact.cards.ava.text1')}{' '}
                    <a
                      href="https://auth.ava.services/u/login?state=hKFo2SBfSWRhSzcyc3E3bVhTVFFJZ0dpSGNNTkd0SEJlS1ZuRKFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIGNGLU83bjlWSFhOTkYwbVpZVDUweVh2eHU4UkhTZS1Go2NpZNkgZHdJZ09RbmtYc1FOejRkeFBlc2t5clJhY0dUa3FWZmY"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#71B554] hover:text-[#5A9443] underline font-semibold"
                    >
                      ava
                    </a>{' '}
                    {t('homeNew.contact.cards.ava.text2')}{' '}
                    <a
                      href="https://app.ava.services/help"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#71B554] hover:text-[#5A9443] underline font-semibold"
                    >
                      Hilfe-Seite
                    </a>
                  </p>
                  <p>{t('homeNew.contact.cards.ava.text3')}</p>
                </div>

                <div className="flex items-center justify-center mt-8">
                  <AvaContactButton />
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
