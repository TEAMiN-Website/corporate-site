import React from 'react';
import { useTranslation } from 'react-i18next';

const Aurelian: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl lg:text-4xl font-cooper-hewitt-book font-normal text-gray-900 dark:text-white mb-8">
          {t('aurelian.title')}
        </h1>
        <div className="bg-white dark:bg-gray-900 p-8 lg:p-12 rounded-2xl shadow-xl mb-8">
          <img
            src="https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg"
            alt="Aurelian participating in sports"
            className="w-32 h-32 rounded-full object-cover mx-auto mb-6"
          />
          <blockquote className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6 italic">
            "{t('aurelian.quote')}"
          </blockquote>
          <p className="text-gray-600 dark:text-gray-400 font-medium">
            {t('aurelian.attribution')}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {t('aurelian.stats', { returnObjects: true }).map((stat: any, index: number) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-cooper-hewitt-book font-normal text-blue-600 dark:text-blue-400 mb-2">{stat.number}</div>
              <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aurelian;