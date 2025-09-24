import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    { icon: Phone, label: t('contact.info.phone'), value: '+49 (0) 931 123-4567' },
    { icon: Mail, label: t('contact.info.email'), value: 'info@teaminklusion.de' },
    { icon: MapPin, label: t('contact.info.address'), value: 'Würzburg, Bavaria, Germany' }
  ];

  return (
    <div className="py-16 lg:py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">
                        {contact.label}
                      </div>
                      <div className="text-lg">{contact.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-8">{t('contact.form.title')}</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  placeholder={t('contact.form.messagePlaceholder')}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                {t('contact.form.submit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;