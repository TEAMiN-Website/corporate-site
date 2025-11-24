import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const photos = [
  { src: '/assistant picture 1.jpg', alt: 'Assistant 1' },
  { src: '/assistant picture 2 crop copy copy.jpg', alt: 'Assistant 2' },
  { src: '/assistant picture 3.jpg', alt: 'Assistant 3' },
  { src: '/assistant picture 4.jpg', alt: 'Assistant 4' },
  { src: '/assistant picture 5-min.jpg', alt: 'Assistant 5' },
  { src: '/assistant picture 6.jpg', alt: 'Assistant 6' },
  { src: '/athlete 1.jpg', alt: 'Athlete 1' },
  { src: '/athlete 2.jpg', alt: 'Athlete 2' },
  { src: '/athlete 4.jpg', alt: 'Athlete 3' },
  { src: '/athlete 6.jpg', alt: 'Athlete 4' },
  { src: '/athlete 7-min.jpg', alt: 'Athlete 5' },
  { src: '/Aurelian 1.jpg', alt: 'Aurelian 1' },
  { src: '/aurelian 2.jpg', alt: 'Aurelian 2' },
  { src: '/aurelian 3-min.jpg', alt: 'Aurelian 3' },
  { src: '/Aurelian 4-min.jpg', alt: 'Aurelian 4' },
  { src: '/Aurelian 5-min.jpg', alt: 'Aurelian 5' },
  { src: '/Aurelian Team Zensiert.jpg', alt: 'Aurelian Team' },
  { src: '/partner picture.jpg', alt: 'Partners' },
  { src: '/TEAMiN Network.jpg', alt: 'TEAMiN Network' },
  { src: '/TEAMiN About Hero.jpg', alt: 'About TEAMiN' },
  { src: '/Ehrenamt Partner Page.jpg', alt: 'Volunteers' },
  { src: '/Workshop Partner Page-min.jpg', alt: 'Workshop' },
  { src: '/Hochsprung Sportvereine-min.jpg', alt: 'Sports Event' },
  { src: '/SpAss Datipilot Photo.jpg', alt: 'SpAss Event' },
];

export default function Photos() {
  const { t } = useTranslation();
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedPhoto(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = '';
  };

  const goToPrevious = () => {
    if (selectedPhoto !== null) {
      setSelectedPhoto((selectedPhoto - 1 + photos.length) % photos.length);
    }
  };

  const goToNext = () => {
    if (selectedPhoto !== null) {
      setSelectedPhoto((selectedPhoto + 1) % photos.length);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('photos.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('photos.description')}
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-lg"
              onClick={() => openLightbox(index)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>

      {selectedPhoto !== null && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-50"
            aria-label={t('photos.close')}
          >
            <X size={32} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors z-50"
            aria-label={t('photos.previous')}
          >
            <ChevronLeft size={48} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors z-50"
            aria-label={t('photos.next')}
          >
            <ChevronRight size={48} />
          </button>

          <img
            src={photos[selectedPhoto].src}
            alt={photos[selectedPhoto].alt}
            className="max-w-[90%] max-h-[90%] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
            {selectedPhoto + 1} / {photos.length}
          </div>
        </div>
      )}
    </div>
  );
}
