import React, { useState, useRef } from 'react';
import { ArrowLeftIcon, ArrowRightIcon, CameraIcon, PlusIcon } from './VintageSVGs';

interface ImageSliderProps {
  title?: string;
  subtitle?: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  title = "Galería de Recuerdos",
  subtitle = "Momentos inmortalizados para la posteridad"
}) => {
  const [images, setImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const newImages: string[] = [];
      const fileArray = Array.from(files);

      let processed = 0;
      fileArray.forEach((file: File) => {
        const reader = new FileReader();
        reader.onload = (event: ProgressEvent<FileReader>) => {
          if (event.target?.result && typeof event.target.result === 'string') {
            newImages.push(event.target.result);
            processed++;

            if (processed === fileArray.length) {
              setImages(prev => [...prev, ...newImages]);
            }
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

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
        <div className="relative aspect-[4/3] bg-paper-light overflow-hidden">
          {images.length > 0 ? (
            <>
              <img
                src={images[currentIndex]}
                alt={`Recuerdo ${currentIndex + 1}`}
                className="w-full h-full object-contain sepia-photo"
              />

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
                Galería Vacía
              </p>
              <p className="font-serif italic text-sm text-ink-medium mb-6 max-w-md">
                "Las fotografías son el testimonio silencioso de los momentos que nunca volverán,
                pero que siempre recordaremos."
              </p>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="border-3 border-ink-dark bg-paper-medium px-6 py-3 hover:bg-paper-dark transition-colors shadow-md flex items-center gap-2 group"
              >
                <PlusIcon width={20} height={20} className="text-ink-black group-hover:scale-110 transition-transform" />
                <span className="font-bold uppercase text-sm tracking-wide">Añadir Fotografías</span>
              </button>
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

              {/* Add More Button */}
              <button
                onClick={() => fileInputRef.current?.click()}
                className="ml-4 border-2 border-ink-dark bg-paper-light px-3 py-1 hover:bg-paper-dark transition-colors text-xs uppercase font-bold tracking-wide flex items-center gap-1"
              >
                <PlusIcon width={14} height={14} className="text-ink-black" />
                <span>Añadir más</span>
              </button>
            </div>
          </div>
        )}

        {/* Hidden File Input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageUpload}
          className="hidden"
        />
      </div>

      {/* Caption/Description */}
      <div className="mt-4 text-center border-t-2 border-ink-lighter pt-3">
        <p className="text-xs italic font-serif text-ink-medium">
          Haga clic en el botón para agregar fotografías de la familia.
          Se pueden seleccionar múltiples imágenes a la vez.
        </p>
      </div>
    </div>
  );
};

export default ImageSlider;
