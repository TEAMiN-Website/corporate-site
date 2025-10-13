import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';

const Athletes: React.FC = () => {
 const { t } = useTranslation();

 return (
 <div className="py-16 lg:py-24">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid lg:grid-cols-2 gap-12 items-center">
 <div>
 <h1 className="text-3xl lghover:text-4xl font-cooper-hewitt-book font-normal text-gray-900 mb-6">
 {t('athletes.title')}
 </h1>
 <p className="text-lg text-gray-600 leading-relaxed mb-8">
 {t('athletes.description')}
 </p>
 <div className="grid sm:grid-cols-2 gap-6 mb-8">
 {t('athletes.services', { returnObjects: true }).map((service: string, index: number) => (
 <div key={index} className="flex items-center space-x-3">
 <div className="w-2 h-2 bg-green-500 rounded-full"></div>
 <span className="text-gray-700 ">{service}</span>
 </div>
 ))}
 </div>
 <Link
 to="/contact"
 className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hoverhover:bg-green-700 transition-colors duration-200 flex items-center space-x-2 inline-flex"
 >
 <span>{t('athletes.getConnected')}</span>
 <ArrowRight className="w-5 h-5" />
 </Link>
 </div>
 <div>
 <img
 src="https://images.pexels.com/photos/8612944/pexels-photo-8612944.jpeg"
 alt="Family supporting athlete in sports"
 className="rounded-2xl shadow-xl"
 />
 </div>
 </div>
 </div>
 </div>
 );
};

export default Athletes;