import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';
import ResourceCard from '../components/ResourceCard';
import { trackFAQItemExpanded } from '../utils/analytics';
import useScrollDepthTracking from '../hooks/useScrollDepthTracking';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

interface ResourceItem {
  title: string;
  description: string;
  category: 'athletes' | 'assistants' | 'clubs';
  section: 'general' | 'marketing';
  filename: string;
  size: string;
}

const FAQ: React.FC = () => {
  const { t } = useTranslation();
  const [activeItems, setActiveItems] = useState<Set<string>>(new Set());
  
  // Track scroll depth
  useScrollDepthTracking();

  const toggleItem = (categoryIndex: number, itemIndex: number, categoryTitle: string, question: string) => {
    const key = `${categoryIndex}-${itemIndex}`;
    const newActiveItems = new Set(activeItems);
    if (newActiveItems.has(key)) {
      newActiveItems.delete(key);
    } else {
      newActiveItems.add(key);
      // Track FAQ expansion
      trackFAQItemExpanded(categoryTitle, itemIndex, question);
    }
    setActiveItems(newActiveItems);
  };

  const faqData: FAQCategory[] = t('faq.categories', { returnObjects: true }) as FAQCategory[];
  const resourceData: ResourceItem[] = t('faq.resources.items', { returnObjects: true }) as ResourceItem[];

  const getCategoryColors = (index: number) => {
    const colorMap = [
      { bg: 'bg-[#F7ECD5]', text: 'text-[#3F3E34]', border: 'border-[#3F3E34]/20' },
      { bg: 'bg-[#D86D55]', text: 'text-white', border: 'border-white/20' },
      { bg: 'bg-[#71B554]', text: 'text-white', border: 'border-white/20' },
      { bg: 'bg-[#3F3E34]', text: 'text-white', border: 'border-white/20' }
    ];
    return colorMap[index] || colorMap[0];
  };

  return (
    <div className="py-16 lg:py-24 bg-[#3F3E34]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[#F7ECD5] mb-4 text-center uppercase">
          {t('faq.title')}
        </h1>

        <div className="space-y-8">
          {faqData.map((category, categoryIndex) => {
            const colors = getCategoryColors(categoryIndex);
            return (
              <div key={categoryIndex} className={`${colors.bg} rounded-lg shadow-lg p-6 border-4 border-[#F7ECD5]`}>
                <h2 className={`text-2xl font-semibold ${colors.text} mb-6 pb-4 border-b-2 border-gradient-to-r from-[#D86D55] to-[#71B554]`}>
                  {category.title}
                </h2>

              <div className="space-y-4">
                {category.items.map((item, itemIndex) => {
                  const key = `${categoryIndex}-${itemIndex}`;
                  const isActive = activeItems.has(key);

                  return (
                    <div key={itemIndex} className={`border-b ${colors.border} pb-4 last:border-b-0`}>
                      <button
                        onClick={() => toggleItem(categoryIndex, itemIndex, category.title, item.question)}
                        className={`w-full flex justify-between items-center text-left hover:opacity-80 transition-colors duration-200`}
                      >
                        <span className={`text-lg font-semibold ${colors.text} pr-4`}>
                          {item.question}
                        </span>
                        <ChevronDown
                          className={`w-6 h-6 flex-shrink-0 transition-transform duration-200 ${colors.text} ${
                            isActive ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {isActive && (
                        <div className={`mt-3 ${colors.text} leading-relaxed`}>
                          {item.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            );
          })}
        </div>

        <div className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-[#F7ECD5] mb-4 uppercase">
              {t('faq.resources.title')}
            </h2>
            <p className="text-lg text-[#F7ECD5]/80 max-w-3xl mx-auto">
              {t('faq.resources.subtitle')}
            </p>
          </div>

          {(['general', 'marketing'] as const).map((section) => {
            const sectionResources = resourceData.filter((r) => r.section === section);
            if (sectionResources.length === 0) return null;

            return (
              <div key={section} className="mb-12">
                <h3 className="text-2xl font-bold text-[#F7ECD5] mb-6">
                  {t(`faq.resources.sections.${section}`)}
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {sectionResources.map((resource, index) => (
                    <ResourceCard
                      key={index}
                      title={resource.title}
                      description={resource.description}
                      category={resource.category}
                      filename={resource.filename}
                      size={resource.size}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-gradient-to-r from-[#D86D55] to-[#71B554] rounded-lg shadow-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">{t('faq.moreQuestions.title')}</h2>
          <p className="text-lg mb-6">
            {t('faq.moreQuestions.description')}
          </p>
          <div className="space-y-2">
            <p>{t('faq.moreQuestions.email')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
