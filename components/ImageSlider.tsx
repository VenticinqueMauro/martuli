import React, { useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon, CameraIcon } from './VintageSVGs';

interface ImageSliderProps {
  title?: string;
  subtitle?: string;
  images: string[];
  onImageClick?: (images: string[], index: number) => void;
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  title = "Galería de Recuerdos",
  subtitle = "Momentos inmortalizados para la posteridad",
  images,
  onImageClick
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(images.length, 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % Math.max(images.length, 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Title */}
      <div className="text-center mb-6">
        <h3 className="headline-font text-2xl md:text-3xl font-black uppercase tracking-widest border-b-4 border-ink-dark inline-block px-8 pb-2">
          {title}
        </h3>
        <p className="text-sm italic font-serif mt-3 text-ink-medium">{subtitle}</p>
      </div>

      {/* Slider Container */}
      <div className="relative border-8 border-double border-ink-dark bg-paper-dark shadow-2xl">

        {/* Main Image Display */}
        <div className="relative aspect-[4/3] bg-paper-light overflow-hidden group">
          {images.length > 0 ? (
            <>
              <div
                className={`relative w-full h-full ${onImageClick ? 'cursor-pointer' : ''}`}
                onClick={() => onImageClick?.(images, currentIndex)}
              >
                <img
                  src={images[currentIndex]}
                  alt={`Recuerdo ${currentIndex + 1}`}
                  className="w-full h-full object-contain sepia-photo"
                  loading="lazy"
                />
                {onImageClick && (
                  <div className="absolute inset-0 bg-ink-black/0 group-hover:bg-ink-black/10 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-paper-light/95 px-4 py-2 border-2 border-ink-dark">
                      <p className="text-xs font-black uppercase tracking-wider">Click para ampliar</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Navigation Arrows */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-paper-light/90 border-2 border-ink-dark p-2 hover:bg-paper-medium transition-colors shadow-lg"
                    aria-label="Imagen anterior"
                  >
                    <ArrowLeftIcon width={24} height={24} className="text-ink-black" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-paper-light/90 border-2 border-ink-dark p-2 hover:bg-paper-medium transition-colors shadow-lg"
                    aria-label="Imagen siguiente"
                  >
                    <ArrowRightIcon width={24} height={24} className="text-ink-black" />
                  </button>
                </>
              )}

              {/* Image Counter */}
              <div className="absolute bottom-2 right-2 bg-ink-black/80 text-paper-light px-3 py-1 text-xs font-mono font-bold">
                {currentIndex + 1} / {images.length}
              </div>
            </>
          ) : (
            /* Placeholder when no images */
            <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
              <CameraIcon width={80} height={80} className="mb-6 text-ink-light" />
              <p className="headline-font text-xl md:text-2xl font-bold uppercase mb-3 text-ink-black">
                Galería en Preparación
              </p>
              <p className="font-serif italic text-sm text-ink-medium max-w-md">
                "Las fotografías son el testimonio silencioso de los momentos que nunca volverán,
                pero que siempre recordaremos."
              </p>
            </div>
          )}
        </div>

        {/* Dots Navigation */}
        {images.length > 0 && (
          <div className="bg-paper-medium border-t-4 border-ink-dark py-4 px-4">
            <div className="flex justify-center items-center gap-2 flex-wrap">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 border-2 transition-all ${
                    index === currentIndex
                      ? 'bg-ink-black border-ink-black scale-125'
                      : 'bg-paper-light border-ink-light hover:bg-paper-dark'
                  }`}
                  aria-label={`Ir a imagen ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Caption/Description */}
      {images.length > 0 && (
        <div className="mt-4 text-center border-t-2 border-ink-lighter pt-3">
          <p className="text-xs italic font-serif text-ink-medium">
            Colección de momentos familiares preservados para la eternidad.
          </p>
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
