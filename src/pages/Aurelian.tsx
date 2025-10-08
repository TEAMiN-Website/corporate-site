import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Aurelian: React.FC = () => {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const carouselImages = ['aurelian 2.jpg', 'Aurelian 5-min.jpg', 'aurelian 3-min copy.jpg'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="h-[85vh] relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="Aurelian 1-min.jpg"
            alt="Aurelian playing football"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 20%' }}
          />
          <div className="absolute inset-0 bg-[#71B554]/40"></div>
        </div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" style={{ textShadow: '2px 3px 6px rgba(0,0,0,0.6)' }}>
              {t('aurelian.title')}
            </h1>
            <p className="text-2xl font-light mb-4 opacity-95" style={{ textShadow: '1px 2px 4px rgba(0,0,0,0.5)' }}>
              Aurelian's Journey with TEAMiN
            </p>
            <p className="text-lg max-w-2xl mx-auto opacity-90" style={{ textShadow: '1px 2px 4px rgba(0,0,0,0.5)' }}>
              Discover how sport assistance transformed one athlete's life
            </p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#71B554] mb-6">
              The Impact
            </h2>
            <p className="text-xl text-[#B3ADAA] max-w-3xl mx-auto">
              How sport assistance changed everything
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-6 text-6xl">
                💪
              </div>
              <h3 className="text-2xl font-bold text-[#3F3E34] mb-4">Physical Development</h3>
              <p className="text-lg text-[#B3ADAA]">
                Improved coordination, fitness, and football-specific skills through regular training and expert guidance.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-6 text-6xl">
                💚
              </div>
              <h3 className="text-2xl font-bold text-[#3F3E34] mb-4">Social Integration</h3>
              <p className="text-lg text-[#B3ADAA]">
                Built lasting friendships with teammates and became a valued member of the club community.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-6 text-6xl">
                🧗‍♀️
              </div>
              <h3 className="text-2xl font-bold text-[#3F3E34] mb-4">Independence</h3>
              <p className="text-lg text-[#B3ADAA]">
                Developed confidence and skills to participate independently without continuous assistance.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Diagonal Split Section with Carousel */}
      <section className="min-h-screen relative overflow-hidden">
        {/* Carousel Images - Left 60% */}
        <div className="absolute top-0 left-0 bottom-0 w-[60%]">
          {carouselImages.map((image, index) => (
            <div
              key={image}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`Aurelian ${index + 1}`}
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center center' }}
              />
            </div>
          ))}
        </div>

        {/* Diagonal Green Overlay - Right 40% */}
        <div className="absolute inset-0 bg-[#71B554]" style={{
          clipPath: 'polygon(60% 0%, 100% 0%, 100% 100%, 40% 100%)'
        }}></div>

        {/* Text Content on Green Overlay */}
        <div className="relative z-10 flex items-center justify-end min-h-screen p-4 lg:p-8">
          <div className="max-w-xl text-white mr-8 lg:mr-16">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 leading-tight uppercase text-right">
              THE POWER <span className="bg-gradient-to-r from-[#D86D55] to-[#71B554] bg-clip-text text-transparent">OF</span><br />
              SPORT ASSISTANCE
            </h2>
            <blockquote className="text-xl lg:text-2xl leading-relaxed mb-6 italic font-light text-right">
              "{t('aurelian.quote')}"
            </blockquote>
            <p className="text-lg font-semibold mb-8 text-right">
              {t('aurelian.attribution')}
            </p>
            <p className="text-lg leading-relaxed text-right">
              {t('aurelian.hero.description')}
            </p>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-[15%] z-20 flex gap-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex ? 'bg-white w-8' : 'bg-white/50'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-24 bg-[#F7ECD5]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#3F3E34] mb-6">
            Start Your Own Journey
          </h2>
          <p className="text-xl text-[#B3ADAA] mb-12 max-w-2xl mx-auto">
            Whether you're an athlete looking for support or want to become a sport assistant, TEAMiN is here to help you belong.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/athletes"
              className="bg-[#71B554] text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-[#5FA044] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              I'm an Athlete
            </Link>
            <Link
              to="/volunteers"
              className="bg-[#D86D55] text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-[#C55A47] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Become an Assistant
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aurelian;
