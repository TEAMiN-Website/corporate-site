import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

const FAQ: React.FC = () => {
  const [activeItems, setActiveItems] = useState<Set<string>>(new Set());

  const toggleItem = (categoryIndex: number, itemIndex: number) => {
    const key = `${categoryIndex}-${itemIndex}`;
    const newActiveItems = new Set(activeItems);
    if (newActiveItems.has(key)) {
      newActiveItems.delete(key);
    } else {
      newActiveItems.add(key);
    }
    setActiveItems(newActiveItems);
  };

  const faqData: FAQCategory[] = [
    {
      title: 'Allgemeine Fragen / General Questions',
      items: [
        {
          question: 'Was ist TEAMiN?',
          answer: 'TEAMiN ist ein Netzwerk zur Förderung inklusiven Sports in Bayern durch das Sport-Assistenz (SpAss) Programm. Wir verbinden Menschen mit Behinderungen mit qualifiziert ausgebildeten Sport-Assistent:innen und Sportvereinen.'
        },
        {
          question: 'What is the SpAss Program?',
          answer: 'SpAss (Sport-Assistenz) is our comprehensive training program that prepares volunteers to support athletes with disabilities in mainstream sports clubs. The program includes online learning and practical training.'
        },
        {
          question: 'Wie kann ich mitmachen?',
          answer: 'Sie können entweder als Sport-Assistent teilnehmen (nach Absolvierung der Ausbildung) oder als Sportler:in mit Behinderung unsere Vermittlungsdienste nutzen. Kontaktieren Sie uns für weitere Informationen.'
        }
      ]
    },
    {
      title: 'Für Sport-Assistent:innen / For Sport Assistants',
      items: [
        {
          question: 'Welche Voraussetzungen muss ich erfüllen?',
          answer: 'Sie benötigen Interesse am Sport, Empathie und die Bereitschaft, Menschen mit Behinderungen zu unterstützen. Sporterfahrung ist hilfreich, aber keine Voraussetzung. Die Ausbildung ist kostenlos.'
        },
        {
          question: 'How much time commitment is required?',
          answer: 'Initial training: ~15 hours online + 1 full practice day. Ongoing commitment: 2-4 hours per week for at least 3 months. The schedule is flexible and coordinated with your matched athlete.'
        },
        {
          question: 'Bekomme ich eine Vergütung?',
          answer: 'Die Tätigkeit als Sport-Assistent ist ehrenamtlich. Sie erhalten jedoch eine kostenlose, zertifizierte Ausbildung und wertvolle Erfahrungen im Bereich inklusiver Sport.'
        },
        {
          question: 'Was passiert nach der Ausbildung?',
          answer: 'Nach erfolgreichem Abschluss werden Sie mit Sportler:innen und Vereinen vermittelt, die zu Ihren Fähigkeiten und Ihrem Zeitplan passen. Sie erhalten weiterhin Unterstützung durch unser Netzwerk.'
        }
      ]
    },
    {
      title: 'Für Sportler:innen / For Athletes',
      items: [
        {
          question: 'Wer kann das Angebot nutzen?',
          answer: 'Menschen mit Behinderungen jeden Alters, die am Vereinssport teilnehmen möchten und dabei Unterstützung benötigen.'
        },
        {
          question: 'Which sports are available?',
          answer: 'We work with various sports clubs across Bavaria offering different sports. We help match you with a sport and club that fits your interests and abilities.'
        },
        {
          question: 'Wie lange dauert die Unterstützung?',
          answer: 'Die Dauer variiert je nach individuellen Bedürfnissen. Ziel ist es, die Unterstützung schrittweise zu reduzieren, während Sie sich im Verein integrieren und selbstständiger werden.'
        },
        {
          question: 'Was kostet die Teilnahme?',
          answer: 'Die Vermittlung und Begleitung durch TEAMiN ist kostenlos. Für die Vereinsmitgliedschaft gelten die regulären Vereinsbeiträge.'
        }
      ]
    },
    {
      title: 'Für Vereine / For Sports Clubs',
      items: [
        {
          question: 'Wie kann unser Verein Partner werden?',
          answer: 'Kontaktieren Sie uns direkt. Wir unterstützen Vereine dabei, inklusiver zu werden durch Beratung, ausgebildete Sport-Assistent:innen und Best-Practice-Austausch.'
        },
        {
          question: 'What support do clubs receive?',
          answer: 'Partner clubs get access to trained sport assistants, guidance on inclusive practices, networking opportunities, and support in integrating athletes with disabilities.'
        }
      ]
    }
  ];

  return (
    <div className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
          Frequently Asked Questions
        </h1>
        <p className="text-xl text-gray-600 mb-12 text-center">
          Häufig gestellte Fragen
        </p>
        
        <div className="space-y-8">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-4 border-b-2 border-gradient-to-r from-[#D86D55] to-[#71B554]">
                {category.title}
              </h2>
              
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => {
                  const key = `${categoryIndex}-${itemIndex}`;
                  const isActive = activeItems.has(key);
                  
                  return (
                    <div key={itemIndex} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <button
                        onClick={() => toggleItem(categoryIndex, itemIndex)}
                        className="w-full flex justify-between items-center text-left hover:text-[#D86D55] transition-colors duration-200"
                      >
                        <span className="text-lg font-semibold text-gray-900 pr-4">
                          {item.question}
                        </span>
                        <ChevronDown 
                          className={`w-6 h-6 flex-shrink-0 transition-transform duration-200 ${
                            isActive ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      
                      {isActive && (
                        <div className="mt-3 text-gray-700 leading-relaxed">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-[#D86D55] to-[#71B554] rounded-lg shadow-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Weitere Fragen? / More Questions?</h2>
          <p className="text-lg mb-6">
            Wenn Sie weitere Fragen haben, kontaktieren Sie uns gerne!<br />
            If you have additional questions, feel free to contact us!
          </p>
          <div className="space-y-2">
            <p>E-Mail: sportassistenz@uni-wuerzburg.de</p>
            <p>Telefon: +49 (0) 931 31-86601</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
