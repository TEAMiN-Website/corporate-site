import React from 'react';
import { useTranslation } from 'react-i18next';

const Impressum: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">{t('impressum.title')}</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('impressum.legalInfo.title')}</h2>
            <p className="text-gray-700 whitespace-pre-line">
              {t('impressum.legalInfo.content')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('impressum.contact.title')}</h2>
            <p className="text-gray-700">
              {t('impressum.contact.email')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('impressum.representatives.title')}</h2>
            <p className="text-gray-700">
              {t('impressum.representatives.projectLead1')}<br />
              {t('impressum.representatives.projectLead2')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('impressum.disclaimer.title')}</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('impressum.disclaimer.contentLiability.title')}</h3>
            <p className="text-gray-700 mb-4">
              {t('impressum.disclaimer.contentLiability.content')}
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('impressum.disclaimer.linkLiability.title')}</h3>
            <p className="text-gray-700">
              {t('impressum.disclaimer.linkLiability.content')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('impressum.copyright.title')}</h2>
            <p className="text-gray-700">
              {t('impressum.copyright.content')}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
