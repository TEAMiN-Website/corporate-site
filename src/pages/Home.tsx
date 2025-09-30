import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowDown } from 'lucide-react';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/src/assets/athlete 1.jpg"
            alt="Special Olympics athletes celebrating together - inclusive sports community"
            className="w-full h-full object-cover fixed"
            style={{ backgroundAttachment: 'fixed' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#71B554]/80 to-[#D86D55]/80"></div>
        </div>

        {/* Animated diagonal pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-repeat" style={{
            backgroundImage: `repeating-linear-gradient(
              60deg,
              transparent,
              transparent 100px,
              rgba(255,255,255,0.03) 100px,
              rgba(255,255,255,0.03) 200px
            )`,
            animation: 'slidePattern 20s linear infinite'
          }}></div>
        </div>

        {/* Hero Background Note */}
        <div className="absolute top-8 right-8 bg-white/20 backdrop-blur-md px-5 py-3 rounded-lg text-white text-xs uppercase tracking-wider flex items-center gap-3">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7-3.5c0-.28 0-.5-.1-.75l1.6-1.2l-1.5-2.6l-1.85.75A6.8 6.8 0 0 0 15.75 7l-.3-2h-3l-.3 2c-.5.35-1 .7-1.4 1.15L8.9 7.4l-1.5 2.6l1.6 1.2c-.1.25-.1.5-.1.8s0 .5.1.75l-1.6 1.2l1.5 2.6l1.85-.75c.4.45.9.8 1.4 1.15l.3 2h3l.3-2a7 7 0 0 0 1.4-1.15l1.85.75l1.5-2.6l-1.6-1.2c.1-.25.1-.5.1-.75Z"/>
          </svg>
          Mixed ability athletes playing sports
        </div>

        <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
          <div className="text-center text-white max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight italic opacity-90" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>
              [3-5 WORD HEADLINE: Pattern interrupt about sports connecting people]
            </h1>
            <p className="text-xl md:text-2xl font-light mb-12 opacity-85 max-w-3xl mx-auto leading-relaxed italic">
              [ONE SENTENCE: Possibility statement about overcoming barriers together]
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer animate-bounce">
          <div className="text-white text-sm uppercase tracking-widest mb-3 opacity-80">
            Discover
          </div>
          <ArrowDown className="w-8 h-8 text-white opacity-80" />
        </div>
      </section>

      {/* Why This Matters Section */}
      <section className="py-24 bg-[#3F3E34] text-white relative overflow-hidden" style={{
        background: 'transparent'
      }}>
        {/* Continuing the hero image effect */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/src/assets/athlete 1.jpg"
            alt="Special Olympics athletes celebrating together - inclusive sports community"
            className="w-full h-full object-cover fixed"
            style={{ backgroundAttachment: 'fixed' }}
          />
          <div className="absolute inset-0 bg-[#3F3E34]/85"></div>
        </div>

        {/* Radial gradients */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-radial from-[#71B554]/10 via-transparent to-transparent" style={{
            background: `radial-gradient(circle at 20% 50%, rgba(113, 181, 84, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 80% 50%, rgba(216, 109, 85, 0.1) 0%, transparent 50%)`
          }}></div>
        </div>

        {/* Background Note */}
        <div className="absolute top-5 right-5 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg text-white text-xs uppercase tracking-wider opacity-70 z-10">
          Continuation of hero image with overlay
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="bg-white/5 backdrop-blur-md p-12 md:p-16 rounded-3xl border border-white/10">
            <p className="text-xl md:text-2xl leading-relaxed opacity-85 italic">
              [ONE PARAGRAPH 3-4 SENTENCES: Universal sports experience → Current gap → You as bridge. 
              Emotional progression: Recognition ("I know that feeling") → Empathy ("That must be hard") → Possibility ("I could help")]
            </p>
          </div>
        </div>
      </section>

      {/* Your Path Section */}
      <section className="py-24 bg-[#F7ECD5] relative">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-repeat" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.05) 35px, rgba(255,255,255,0.05) 70px),
                             repeating-linear-gradient(-45deg, transparent, transparent 35px, rgba(0,0,0,0.02) 35px, rgba(0,0,0,0.02) 70px)`
          }}></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#3F3E34]">
            Your Path to Inclusive Sports
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Become Sport Assistant Card */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#D86D55]"></div>
              
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="/src/assets/assistant picture 1.jpg"
                  alt="People of different ages helping and supporting in sports"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#D86D55]/10"></div>
              </div>

              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 text-[#3F3E34]">Become Sport Assistant</h3>
                <p className="text-[#B3ADAA] mb-6 italic">[5-7 WORDS: Accompany others on their sports journey]</p>
                <Link 
                  to="/volunteers"
                  className="inline-block bg-[#D86D55] text-white px-8 py-3 rounded-full font-semibold uppercase tracking-wider text-sm hover:bg-gradient-to-r hover:from-[#D86D55] hover:to-[#71B554] hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  Join Now
                </Link>
              </div>
            </div>

            {/* Athletes & Families Card */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#71B554]"></div>
              
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="/src/assets/athlete 2.jpg"
                  alt="Families doing sports together - parents and children actively participating"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#71B554]/10"></div>
              </div>

              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 text-[#3F3E34]">Athletes & Families</h3>
                <p className="text-[#B3ADAA] mb-6 italic">[5-7 WORDS: Find your place in sports with qualified support]</p>
                <Link 
                  to="/athletes"
                  className="inline-block bg-[#71B554] text-white px-8 py-3 rounded-full font-semibold uppercase tracking-wider text-sm hover:bg-gradient-to-r hover:from-[#71B554] hover:to-[#D86D55] hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* SpAss Program Card */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#71B554] to-[#D86D55]"></div>
              
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="/src/assets/assistant picture 2.jpg"
                  alt="Diverse sports and activities - variety of possibilities, welcoming environment"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#71B554]/10 to-[#D86D55]/10"></div>
              </div>

              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 text-[#3F3E34]">SpAss Program</h3>
                <p className="text-[#B3ADAA] mb-6 italic">[5-7 WORDS: Discover our sport assistance program in detail]</p>
                <Link 
                  to="/spass"
                  className="inline-block bg-gradient-to-r from-[#71B554] to-[#D86D55] text-white px-8 py-3 rounded-full font-semibold uppercase tracking-wider text-sm hover:from-[#D86D55] hover:to-[#71B554] hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  Explore Program
                </Link>
              </div>
            </div>

            {/* TEAMiN - The Inclusive Network Card */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#71B554] to-[#D86D55]"></div>
              
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="/src/assets/TEAMiN Network.jpg"
                  alt="Team network imagery - diverse group, collaborative, inclusive community"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#71B554]/10 to-[#D86D55]/10"></div>
              </div>

              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 text-[#3F3E34]">TEAMiN - The Inclusive Network</h3>
                <p className="text-[#B3ADAA] mb-6 italic">[5-7 WORDS: Learn more about us and our mission]</p>
                <Link 
                  to="/about"
                  className="inline-block bg-gradient-to-r from-[#71B554] to-[#D86D55] text-white px-8 py-3 rounded-full font-semibold uppercase tracking-wider text-sm hover:from-[#D86D55] hover:to-[#71B554] hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/src/assets/assistant picture 5 copy.jpg"
            alt="Three people in conversation in sports environment"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#3F3E34]">
            Questions? Contact Us!
          </h2>

          <div className="bg-[#F7ECD5]/95 backdrop-blur-sm p-12 md:p-16 rounded-3xl shadow-xl relative overflow-hidden z-10">
            {/* Decorative gradient circle */}
            <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-radial from-[#71B554]/10 to-transparent rounded-full"></div>
            
            <form className="relative z-10 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-[#3F3E34] mb-2 uppercase tracking-wider">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-4 bg-white border-2 border-transparent rounded-xl text-base transition-all duration-300 focus:outline-none focus:border-[#71B554] focus:shadow-lg focus:shadow-[#71B554]/10"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#3F3E34] mb-2 uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-4 bg-white border-2 border-transparent rounded-xl text-base transition-all duration-300 focus:outline-none focus:border-[#71B554] focus:shadow-lg focus:shadow-[#71B554]/10"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#3F3E34] mb-2 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-4 bg-white border-2 border-transparent rounded-xl text-base resize-vertical transition-all duration-300 focus:outline-none focus:border-[#71B554] focus:shadow-lg focus:shadow-[#71B554]/10"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#71B554] to-[#D86D55] text-white px-8 py-4 rounded-full font-semibold text-lg uppercase tracking-wider hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;