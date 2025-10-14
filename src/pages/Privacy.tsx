import React from 'react';
import { useTranslation } from 'react-i18next';

const Privacy: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">{t('privacy.title')}</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('privacy.overview.title')}</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('privacy.overview.generalInfo.title')}</h3>
            <p className="text-gray-700 mb-4">
              {t('privacy.overview.generalInfo.content')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('privacy.dataCollection.title')}</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('privacy.dataCollection.responsible.title')}</h3>
            <p className="text-gray-700 mb-4">
              {t('privacy.dataCollection.responsible.content')}
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('privacy.dataCollection.howWeCollect.title')}</h3>
            <p className="text-gray-700 mb-4">
              {t('privacy.dataCollection.howWeCollect.content')}
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('privacy.dataCollection.whatFor.title')}</h3>
            <p className="text-gray-700 mb-4">
              {t('privacy.dataCollection.whatFor.content')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('privacy.analyticsTools.title')}</h2>
            <p className="text-gray-700 mb-4">
              {t('privacy.analyticsTools.content')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('privacy.rights.title')}</h2>
            <p className="text-gray-700 mb-4">
              {t('privacy.rights.intro')}
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              {(t('privacy.rights.items', { returnObjects: true }) as string[]).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('privacy.cookies.title')}</h2>
            <p className="text-gray-700 mb-4">
              {t('privacy.cookies.content')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('privacy.contactSection.title')}</h2>
            <p className="text-gray-700">
              {t('privacy.contactSection.content')}<br />
              {t('privacy.contactSection.email')}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
