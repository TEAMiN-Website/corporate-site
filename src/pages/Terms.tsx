import React from 'react';
import { useTranslation } from 'react-i18next';

const Terms: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">{t('terms.title')}</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('terms.scope.title')}</h2>
            <p className="text-gray-700 mb-4">
              {t('terms.scope.content')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('terms.websiteUse.title')}</h2>
            <p className="text-gray-700 mb-4">
              {t('terms.websiteUse.content')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('terms.registration.title')}</h2>
            <p className="text-gray-700 mb-4">
              {t('terms.registration.intro')}
            </p>
            <p className="text-gray-700 mb-4">
              {t('terms.registration.commitments')}
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              {(t('terms.registration.items', { returnObjects: true }) as string[]).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('terms.liability.title')}</h2>
            <p className="text-gray-700 mb-4">
              {t('terms.liability.content')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('terms.dataProtection.title')}</h2>
            <p className="text-gray-700 mb-4">
              {t('terms.dataProtection.content')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('terms.changes.title')}</h2>
            <p className="text-gray-700 mb-4">
              {t('terms.changes.content')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('terms.finalProvisions.title')}</h2>
            <p className="text-gray-700 mb-4">
              {t('terms.finalProvisions.content')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('terms.contactSection.title')}</h2>
            <p className="text-gray-700">
              {t('terms.contactSection.content')}<br />
              {t('terms.contactSection.email')}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
