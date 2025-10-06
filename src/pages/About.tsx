import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Target, Eye, Users, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useTranslation();
  const [flippedPartner, setFlippedPartner] = useState<number | null>(null);

  const partners = [
    {
      name: 'BVS',
      logo: 'BVS Logo.png',
      description: t('about.partners.bvs')
    },
    {
      name: 'Universität Würzburg',
      logo: 'Universität_Würzburg_Logo.svg.png',
      description: t('about.partners.uniWuerzburg')
    },
    {
      name: 'BMFTR',
      logo: 'BMFTR_Logo.svg.png',
      description: t('about.partners.bmftr')
    },
    {
      name: 'Lebenshilfe',
      logo: 'Bundesvereinigung_Lebenshilfe_logo.png',
      description: t('about.partners.lebenshilfe')
    },
    {
      name: 'Adidas',
      logo: 'adidas logo.png',
      description: t('about.partners.adidas')
    }
  ];

  const teamMembers = t('about.team.members', { returnObjects: true }) as Array<{name: string, role: string, photo?: string}>;

  return (
    <div>
      {/* Hero Section with Diagonal Split - Image on Right, Gradient Overlay on Left */}
      <section className="min-h-screen relative overflow-hidden">
        {/* Background Image - covers entire section */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("TEAMiN About Hero.jpg")',
            backgroundPosition: '85% center'
          }}
        ></div>

        {/* Subtle overlay for better text readability */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Diagonal gradient overlay - same width as assistant page */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#D86D55] to-[#71B554]" style={{
          clipPath: 'polygon(0% 0%, 30% 0%, 50% 100%, 0% 100%)'
        }}></div>

        {/* Text Content on Gradient Overlay */}
        <div className="relative z-10 flex items-center min-h-screen p-4 lg:p-8">
          <div className="max-w-xl text-white ml-8 lg:ml-16">
            <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
              {t('about.hero.title')}
            </h1>
            <p className="text-xl lg:text-2xl leading-relaxed opacity-95">
              {t('about.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are, Mission & Vision Section - Three Tiles */}
      <section className="py-24 bg-[#F7ECD5]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#3F3E34]">
            {t('about.missionVision.heading')}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Who We Are Tile */}
            <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#71B554]/10 to-[#D86D55]/10 rounded-2xl mb-6">
                <Users className="w-8 h-8 text-[#71B554]" />
              </div>
              <h3 className="text-3xl font-bold mb-6 text-[#3F3E34]">{t('about.missionVision.whoWeAre.title')}</h3>
              <p className="text-lg text-[#B3ADAA] leading-relaxed">
                {t('about.missionVision.whoWeAre.description')}
              </p>
            </div>

            {/* Mission Tile */}
            <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center justify-center w-16 h-16 bg-[#D86D55]/10 rounded-2xl mb-6">
                <Target className="w-8 h-8 text-[#D86D55]" />
              </div>
              <h3 className="text-3xl font-bold mb-6 text-[#3F3E34]">{t('about.missionVision.mission.title')}</h3>
              <p className="text-lg text-[#B3ADAA] leading-relaxed">
                {t('about.missionVision.mission.description')}
              </p>
            </div>

            {/* Vision Tile */}
            <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center justify-center w-16 h-16 bg-[#71B554]/10 rounded-2xl mb-6">
                <Eye className="w-8 h-8 text-[#71B554]" />
              </div>
              <h3 className="text-3xl font-bold mb-6 text-[#3F3E34]">{t('about.missionVision.vision.title')}</h3>
              <p className="text-lg text-[#B3ADAA] leading-relaxed">
                {t('about.missionVision.vision.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inclusion Understanding Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-[#3F3E34] dark:text-white">
            {t('about.inclusion.heading')}
          </h2>
          <p className="text-lg text-center text-[#B3ADAA] dark:text-gray-300 leading-relaxed">
            {t('about.inclusion.description')}
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-[#F7ECD5]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-[#3F3E34]">
            {t('about.team.heading')}
          </h2>
          <p className="text-xl text-center text-[#B3ADAA] mb-16 max-w-3xl mx-auto">
            {t('about.team.subtitle')}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center">
                {member.photo ? (
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full p-1 bg-gradient-to-br from-[#D86D55] to-[#71B554]">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full p-1 bg-gradient-to-br from-[#D86D55] to-[#71B554]">
                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                      <Users className="w-12 h-12 text-[#71B554]" />
                    </div>
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2 text-[#3F3E34]">{member.name}</h3>
                <p className="text-[#B3ADAA] italic text-sm leading-relaxed">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#3F3E34] dark:text-white">
            {t('about.partners.heading')}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="relative h-64 perspective-1000"
                onMouseEnter={() => setFlippedPartner(index)}
                onMouseLeave={() => setFlippedPartner(null)}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
                    flippedPartner === index ? 'rotate-y-180' : ''
                  }`}
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: flippedPartner === index ? 'rotateY(180deg)' : 'rotateY(0deg)'
                  }}
                >
                  {/* Front of card */}
                  <div
                    className="absolute inset-0 w-full h-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex items-center justify-center p-6 backface-hidden"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  {/* Back of card */}
                  <div
                    className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#D86D55] to-[#71B554] text-white rounded-2xl shadow-lg p-4 flex items-center justify-center backface-hidden"
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)'
                    }}
                  >
                    <p className="text-xs leading-relaxed text-center">
                      {partner.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Three Tiles */}
      <section className="py-24 bg-[#F7ECD5]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#3F3E34]">
            {t('about.cta.heading')}
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Volunteering Card - Game Heat */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#D86D55]"></div>

              <div className="h-48 relative overflow-hidden">
                <img
                  src="assistant picture 1.jpg"
                  alt="Become a volunteer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#D86D55]/10"></div>
              </div>

              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 text-[#3F3E34]">{t('about.cta.volunteering.title')}</h3>
                <p className="text-[#B3ADAA] mb-6 italic">{t('about.cta.volunteering.description')}</p>
                <Link
                  to="/volunteers"
                  className="inline-block bg-[#D86D55] text-white px-8 py-3 rounded-full font-semibold uppercase tracking-wider text-sm hover:bg-gradient-to-r hover:from-[#D86D55] hover:to-[#71B554] hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  {t('about.cta.volunteering.button')}
                </Link>
              </div>
            </div>

            {/* Athletes & Families Card - Match Green */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#71B554]"></div>

              <div className="h-48 relative overflow-hidden">
                <img
                  src="athlete 2.jpg"
                  alt="Athletes and families"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#71B554]/10"></div>
              </div>

              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 text-[#3F3E34]">{t('about.cta.athletes.title')}</h3>
                <p className="text-[#B3ADAA] mb-6 italic">{t('about.cta.athletes.description')}</p>
                <Link
                  to="/athletes"
                  className="inline-block bg-[#71B554] text-white px-8 py-3 rounded-full font-semibold uppercase tracking-wider text-sm hover:bg-gradient-to-r hover:from-[#71B554] hover:to-[#D86D55] hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  {t('about.cta.athletes.button')}
                </Link>
              </div>
            </div>

            {/* SpAss Program Card - Gradient */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#71B554] to-[#D86D55]"></div>

              <div className="h-48 relative overflow-hidden">
                <img
                  src="assistant picture 2.jpg"
                  alt="SpAss Program"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#71B554]/10 to-[#D86D55]/10"></div>
              </div>

              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 text-[#3F3E34]">{t('about.cta.spass.title')}</h3>
                <p className="text-[#B3ADAA] mb-6 italic">{t('about.cta.spass.description')}</p>
                <Link
                  to="/spass"
                  className="inline-block bg-gradient-to-r from-[#71B554] to-[#D86D55] text-white px-8 py-3 rounded-full font-semibold uppercase tracking-wider text-sm hover:from-[#D86D55] hover:to-[#71B554] hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  {t('about.cta.spass.button')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
