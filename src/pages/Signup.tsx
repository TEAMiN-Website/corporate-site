import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ExternalLink } from 'lucide-react';

const Signup: React.FC = () => {
  const { t } = useTranslation();
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleDetails = (cardIndex: number) => {
    setExpandedCard(expandedCard === cardIndex ? null : cardIndex);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="h-[85vh] relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="Aurelian 4-min copy.jpg"
            alt="Aurelian with sport assistant in training environment"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 20%' }}
          />
          {/* Game Heat Red Overlay 40% opacity */}
          <div className="absolute inset-0 bg-[#D86D55]/40"></div>
        </div>
        
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" style={{ textShadow: '2px 3px 6px rgba(0,0,0,0.6)' }}>
              {t('signupNew.hero.title')}
            </h1>
            <p className="text-2xl font-light mb-4 opacity-95" style={{ textShadow: '1px 2px 4px rgba(0,0,0,0.5)' }}>
              {t('signupNew.hero.subtitle')}
            </p>
            <p className="text-lg max-w-2xl mx-auto opacity-90" style={{ textShadow: '1px 2px 4px rgba(0,0,0,0.5)' }}>
              {t('signupNew.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Cards Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3F3E34] mb-6">
              {t('signupNew.training.title')}
            </h2>
            <p className="text-xl text-[#B3ADAA]">
              {t('signupNew.training.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* E-Learning Card */}
            <div className="bg-[#F7ECD5] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#D86D55]">
              <div className="bg-[#D86D55] p-10 text-center relative overflow-hidden h-48">
                {/* Number 1 in top right corner */}
                <div className="absolute top-4 right-4">
                  <span className="text-white font-bold text-2xl">1</span>
                </div>
                
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                  <img 
                    src="elearning-min.jpg"
                    alt="E-learning background"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#D86D55]/80"></div>
                </div>
                
                <div className="relative z-10 h-full flex items-center justify-center">
                  <h3 className="text-white text-2xl font-semibold mb-2">{t('signupNew.training.elearning.title')}</h3>
                </div>
              </div>
              
              <div className="p-8">
                <div className="bg-white p-5 rounded-xl mb-5 min-h-[80px] flex items-center justify-center">
                  <p className="text-[#B3ADAA] italic text-center">{t('signupNew.training.elearning.description')}</p>
                </div>
                
                <button className="w-full bg-[#D86D55] text-white py-4 px-6 rounded-xl font-semibold mb-4 hover:bg-[#C55A47] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex items-center justify-center gap-2">
                  {t('signupNew.training.elearning.cta')} <ExternalLink className="w-4 h-4" />
                </button>
                
                <button 
                  onClick={() => toggleDetails(0)}
                  className={`w-full py-4 px-6 rounded-xl font-semibold border-2 transition-all duration-300 flex items-center justify-center gap-2 ${
                    expandedCard === 0 
                      ? 'bg-white border-[#3F3E34] text-[#3F3E34]' 
                      : 'bg-white border-[#B3ADAA] text-[#3F3E34] hover:border-[#3F3E34]'
                  }`}
                >
                  {t('signupNew.training.details')}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expandedCard === 0 ? 'rotate-180' : ''}`} />
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  expandedCard === 0 ? 'max-h-96 opacity-100 mt-5' : 'max-h-0 opacity-0'
                }`}>
                  <div className="bg-white p-5 rounded-xl border border-dashed border-[#B3ADAA]">
                    {(t('signupNew.training.elearning.details', { returnObjects: true }) as any[]).map((detail: string, index: number) => (
                      <div key={index} className="bg-[#F7ECD5] p-3 mb-3 rounded text-[#B3ADAA] italic last:mb-0">{detail}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Praxistag Card */}
            <div className="bg-[#F7ECD5] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#D86D55]">
              <div className="bg-[#D86D55] p-10 text-center relative overflow-hidden h-48">
                {/* Number 2 in top right corner */}
                <div className="absolute top-4 right-4">
                  <span className="text-white font-bold text-2xl">2</span>
                </div>
                
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                  <img 
                    src="athlete 7-min-min.jpg"
                    alt="Praxistag background"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#D86D55]/80"></div>
                </div>
                
                <div className="relative z-10 h-full flex items-center justify-center">
                  <h3 className="text-white text-2xl font-semibold mb-2">{t('signupNew.training.practiceDay.title')}</h3>
                </div>
              </div>
              
              <div className="p-8">
                <div className="bg-white p-5 rounded-xl mb-5 min-h-[80px] flex items-center justify-center">
                  <p className="text-[#B3ADAA] italic text-center">{t('signupNew.training.practiceDay.description')}</p>
                </div>
                
                <button className="w-full bg-[#D86D55] text-white py-4 px-6 rounded-xl font-semibold mb-4 hover:bg-[#C55A47] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex items-center justify-center gap-2">
                  {t('signupNew.training.practiceDay.cta')} <ExternalLink className="w-4 h-4" />
                </button>
                
                <button 
                  onClick={() => toggleDetails(1)}
                  className={`w-full py-4 px-6 rounded-xl font-semibold border-2 transition-all duration-300 flex items-center justify-center gap-2 ${
                    expandedCard === 1 
                      ? 'bg-white border-[#3F3E34] text-[#3F3E34]' 
                      : 'bg-white border-[#B3ADAA] text-[#3F3E34] hover:border-[#3F3E34]'
                  }`}
                >
                  {t('signupNew.training.details')}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expandedCard === 1 ? 'rotate-180' : ''}`} />
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  expandedCard === 1 ? 'max-h-96 opacity-100 mt-5' : 'max-h-0 opacity-0'
                }`}>
                  <div className="bg-white p-5 rounded-xl border border-dashed border-[#B3ADAA]">
                    {(t('signupNew.training.practiceDay.details', { returnObjects: true }) as any[]).map((detail: string, index: number) => (
                      <div key={index} className="bg-[#F7ECD5] p-3 mb-3 rounded text-[#B3ADAA] italic last:mb-0">{detail}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* SSO Partner Card */}
            <div className="bg-[#F7ECD5] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#3F3E34]">
              <div className="bg-[#3F3E34] p-10 text-center relative overflow-hidden h-48">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                  <img 
                    src="partner picture-min.jpg"
                    alt="Partner background"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#3F3E34]/80"></div>
                </div>
                
                <div className="relative z-10 h-full flex items-center justify-center">
                  <h3 className="text-white text-2xl font-semibold mb-2">{t('signupNew.training.partner.title')}</h3>
                </div>
              </div>
              
              <div className="p-8">
                <div className="bg-white p-5 rounded-xl mb-5 min-h-[80px] flex items-center justify-center">
                  <p className="text-[#B3ADAA] italic text-center">{t('signupNew.training.partner.description')}</p>
                </div>
                
                <button className="w-full bg-[#3F3E34] text-white py-4 px-6 rounded-xl font-semibold mb-4 hover:bg-[#2F2E24] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex items-center justify-center gap-2">
                  {t('signupNew.training.partner.cta')} <ExternalLink className="w-4 h-4" />
                </button>
                
                <button 
                  onClick={() => toggleDetails(2)}
                  className={`w-full py-4 px-6 rounded-xl font-semibold border-2 transition-all duration-300 flex items-center justify-center gap-2 ${
                    expandedCard === 2 
                      ? 'bg-white border-[#3F3E34] text-[#3F3E34]' 
                      : 'bg-white border-[#B3ADAA] text-[#3F3E34] hover:border-[#3F3E34]'
                  }`}
                >
                  {t('signupNew.training.details')}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expandedCard === 2 ? 'rotate-180' : ''}`} />
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  expandedCard === 2 ? 'max-h-96 opacity-100 mt-5' : 'max-h-0 opacity-0'
                }`}>
                  <div className="bg-white p-5 rounded-xl border border-dashed border-[#B3ADAA]">
                    {(t('signupNew.training.partner.details', { returnObjects: true }) as any[]).map((detail: string, index: number) => (
                      <div key={index} className="bg-[#F7ECD5] p-3 mb-3 rounded text-[#B3ADAA] italic last:mb-0">{detail}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Aurelian Section */}
      <section className="py-24 bg-[#F7ECD5]">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center">
            <div className="bg-[#F7ECD5] p-16 rounded-3xl shadow-xl border-4 border-[#71B554] relative overflow-hidden h-96 flex flex-col justify-end">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src="aurelian 3-min-min.jpg"
                  alt="Aurelian smiling in sports jersey"
                  className="w-full h-full object-cover opacity-20"
                  style={{ objectPosition: 'center 20%' }}
                />
                <div className="absolute inset-0 bg-[#71B554]/20"></div>
              </div>
              
              <div className="relative z-10 pb-8">
                <h2 className="text-4xl font-bold text-[#3F3E34] mb-6">{t('signupNew.aurelian.title')}</h2>
                <button className="bg-[#71B554] text-white px-16 py-5 rounded-full text-lg font-semibold hover:bg-[#5FA044] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  {t('signupNew.aurelian.cta')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;