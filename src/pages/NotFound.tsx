import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Home } from 'lucide-react';

const NotFound: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="text-center">
                <div className="mb-8">
                    <h1 className="text-9xl font-cooper-hewitt-book font-normal text-gray-300 ">404</h1>
                </div>
                <h2 className="text-3xl font-cooper-hewitt-book font-normal text-gray-900 mb-4">
                    {t('notFound.title')}
                </h2>
                <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
                    {t('notFound.description')}
                </p>
                <div className="flex justify-center">
                    <Link
                        to="/"
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                    >
                        <Home className="w-5 h-5" />
                        <span>{t('notFound.goHome')}</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;