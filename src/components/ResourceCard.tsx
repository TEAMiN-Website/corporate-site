import React from 'react';
import { Download, FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ResourceCardProps {
  title: string;
  description: string;
  category: 'athletes' | 'assistants' | 'clubs';
  filename: string;
  size: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  description,
  category,
  filename,
  size
}) => {
  const { t } = useTranslation();

  const getCategoryColor = (cat: string) => {
    const colorMap = {
      athletes: 'bg-[#71B554] hover:bg-[#5fa043]',
      assistants: 'bg-[#D86D55] hover:bg-[#c55d45]',
      clubs: 'bg-[#3F3E34] hover:bg-[#2f2e24]'
    };
    return colorMap[cat as keyof typeof colorMap] || colorMap.athletes;
  };

  const getResourcePath = () => {
    const bucketUrl = import.meta.env.VITE_S3_BUCKET_URL || '';
    if (bucketUrl) {
      return `${bucketUrl}/${filename}`;
    }
    return `/${filename}`;
  };

  return (
    <div className="bg-[#F7ECD5] rounded-lg shadow-lg p-6 border-4 border-[#3F3E34] hover:shadow-xl transition-shadow duration-200">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-[#3F3E34] rounded-lg flex items-center justify-center">
            <FileText className="w-6 h-6 text-[#F7ECD5]" />
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-semibold text-[#3F3E34] mb-2">
            {title}
          </h3>
          <p className="text-[#3F3E34]/80 mb-4 leading-relaxed">
            {description}
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#3F3E34] text-[#F7ECD5]">
              {t(`faq.resources.categories.${category}`)}
            </span>
          </div>

          <a
            href={getResourcePath()}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold transition-colors duration-200 ${getCategoryColor(category)}`}
            aria-label={`${t('faq.resources.downloadButton')}: ${title}`}
          >
            <Download className="w-5 h-5" />
            <span>{t('faq.resources.downloadButton')}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
