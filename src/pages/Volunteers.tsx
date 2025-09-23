import React from 'react';
import { useTranslation } from 'react-i18next';
import { Star } from 'lucide-react';

const Volunteers: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('volunteers.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('volunteers.subtitle')}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What You'll Gain</h3>
            <div className="space-y-6">
              {t('volunteers.benefits', { returnObjects: true }).map((benefit: any, index: number) => (
                <div key={index} className="flex space-x-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">{benefit.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/3621230/pexels-photo-3621230.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Sport assistant helping athlete"
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteers;