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
            style={{ objectPosition: 'center 30%' }}
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

      {/* Quote Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <blockquote className="text-2xl md:text-3xl text-[#3F3E34] leading-relaxed mb-8 italic font-light">
              "{t('aurelian.quote')}"
            </blockquote>
            <p className="text-xl text-[#D86D55] font-semibold">
              {t('aurelian.attribution')}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-[#F7ECD5]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {(t('aurelian.stats', { returnObjects: true }) as any[]).map((stat: any, index: number) => (
              <div key={index} className="text-center">
                <div className="text-6xl md:text-7xl font-bold text-[#71B554] mb-4">{stat.number}</div>
                <div className="text-xl text-[#3F3E34] font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diagonal Split Section with Carousel */}
      <section className="min-h-screen relative overflow-hidden">
        {/* Carousel Images - Left 60% */}
        <div className="absolute inset-0">
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
            <h2 className="text-3xl lg:text-5xl font-bold mb-8 leading-tight">
              The Power of Sport Assistance
            </h2>
            <div className="space-y-6 text-lg lg:text-xl opacity-95">
              <p>
                Aurelian's story shows how TEAMiN's Sport-Assistenz program creates real opportunities for athletes with disabilities.
              </p>
              <p>
                Through qualified support and systematic integration, he found not just a sport he loves, but a community where he truly belongs.
              </p>
              <p>
                Today, Aurelian plays independently with his team, having developed the skills and confidence to participate fully in mainstream sports.
              </p>
            </div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/4 transform -translate-x-1/2 z-20 flex gap-2">
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

      {/* Journey Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#3F3E34] mb-6">
              Aurelian's Journey
            </h2>
            <p className="text-xl text-[#B3ADAA] max-w-3xl mx-auto">
              From first contact to independent participation
            </p>
          </div>

          <div className="relative">
            <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-[#71B554]/30 transform -translate-x-1/2 hidden lg:block"></div>

            <div className="space-y-12">
              {[
                {
                  phase: 'Month 1-3',
                  title: 'Getting Started',
                  description: 'Initial contact with TEAMiN, matching with qualified sport assistant, and beginning football training sessions with full support.',
                  align: 'left'
                },
                {
                  phase: 'Month 4-6',
                  title: 'Building Skills',
                  description: 'Regular training sessions, developing technical skills, and forming relationships with teammates. Assistant support remains consistent.',
                  align: 'right'
                },
                {
                  phase: 'Month 7-12',
                  title: 'Growing Independence',
                  description: 'Gradually reducing assistant support as confidence grows. Aurelian begins participating more independently in team activities.',
                  align: 'left'
                },
                {
                  phase: 'Month 12-18',
                  title: 'Full Integration',
                  description: 'Minimal assistant support needed. Aurelian is a valued team member, participating independently in matches and team events.',
                  align: 'right'
                }
              ].map((milestone, index) => (
                <div key={index} className={`flex items-center ${milestone.align === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="flex-1 lg:pr-8">
                    {milestone.align === 'left' && (
                      <div className="bg-[#F7ECD5] p-6 rounded-2xl shadow-lg">
                        <div className="text-[#71B554] font-bold text-sm mb-2">{milestone.phase}</div>
                        <h3 className="text-2xl font-bold text-[#3F3E34] mb-3">{milestone.title}</h3>
                        <p className="text-[#B3ADAA] leading-relaxed">{milestone.description}</p>
                      </div>
                    )}
                  </div>

                  <div className="hidden lg:block w-8 h-8 bg-[#71B554] rounded-full border-4 border-white shadow-lg relative z-10"></div>

                  <div className="flex-1 lg:pl-8">
                    {milestone.align === 'right' && (
                      <div className="bg-[#F7ECD5] p-6 rounded-2xl shadow-lg">
                        <div className="text-[#71B554] font-bold text-sm mb-2">{milestone.phase}</div>
                        <h3 className="text-2xl font-bold text-[#3F3E34] mb-3">{milestone.title}</h3>
                        <p className="text-[#B3ADAA] leading-relaxed">{milestone.description}</p>
                      </div>
                    )}
                  </div>

                  {/* Mobile view */}
                  <div className="lg:hidden bg-[#F7ECD5] p-6 rounded-2xl shadow-lg w-full">
                    <div className="text-[#71B554] font-bold text-sm mb-2">{milestone.phase}</div>
                    <h3 className="text-2xl font-bold text-[#3F3E34] mb-3">{milestone.title}</h3>
                    <p className="text-[#B3ADAA] leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 bg-[#71B554] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              The Impact
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              How sport assistance changed everything
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Physical Development</h3>
              <p className="text-lg opacity-90">
                Improved coordination, fitness, and football-specific skills through regular training and expert guidance.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Social Integration</h3>
              <p className="text-lg opacity-90">
                Built lasting friendships with teammates and became a valued member of the club community.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Independence</h3>
              <p className="text-lg opacity-90">
                Developed confidence and skills to participate independently without continuous assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
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
