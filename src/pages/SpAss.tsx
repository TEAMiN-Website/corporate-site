import React from 'react';
import { useTranslation } from 'react-i18next';
import { Target, Users, Award } from 'lucide-react';

const SpAss: React.FC = () => {
  const { t } = useTranslation();

  const icons = [Target, Users, Award];

  return (
    <div className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-cooper-hewitt-book font-normal text-gray-900 dark:text-white mb-4">
            {t('spass.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('spass.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {t('spass.features', { returnObjects: true }).map((feature: any, index: number) => {
            const IconComponent = icons[index];
            return (
              <div key={index} className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6">
                  <IconComponent className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-cooper-hewitt-book font-normal text-gray-900 dark:text-white mb-4">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SpAss;