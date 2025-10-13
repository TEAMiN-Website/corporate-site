import React from 'react';
import { useTranslation } from 'react-i18next';
import { Handshake } from 'lucide-react';

const Partners: React.FC = () => {
 const { t } = useTranslation();

 return (
 <div className="py-16 lg:py-24">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-12">
 <h1 className="text-3xl lghover:text-4xl font-cooper-hewitt-book font-normal text-gray-900 mb-4">
 {t('partners.title')}
 </h1>
 <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
 {t('partners.subtitle')}
 </p>
 </div>
 
 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
 {t('partners.list', { returnObjects: true }).map((partner: any, index: number) => (
 <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
 <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-green-100   rounded-xl flex items-center justify-center mx-auto mb-4">
 <Handshake className="w-8 h-8 text-blue-600 " />
 </div>
 <h3 className="text-lg font-cooper-hewitt-book font-normal text-gray-900 mb-3">{partner.name}</h3>
 <p className="text-gray-600 leading-relaxed text-sm">{partner.description}</p>
 </div>
 ))}
 </div>
 </div>
 </div>
 );
};

export default Partners;