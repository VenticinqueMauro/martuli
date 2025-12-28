import React, { useEffect, useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from './VintageSVGs';

interface LightboxProps {
  images: string[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
  imageName?: string;
}

const Lightbox: React.FC<LightboxProps> = ({
  images,
  initialIndex,
  isOpen,
  onClose,
  imageName = 'imagen'
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Sincronizar con el índice inicial cuando cambia
  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  // Prevenir scroll del body cuando el lightbox está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Cerrar con tecla Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  // Navegación con teclado
  useEffect(() => {
    const handleKeyNav = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };

    if (isOpen && images.length > 1) {
      window.addEventListener('keydown', handleKeyNav);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyNav);
    };
  }, [isOpen, currentIndex, images.length]);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = images[currentIndex];
    link.download = `${imageName}-${currentIndex + 1}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    // Solo cerrar si se hace clic en el backdrop, no en la imagen
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-ink-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      {/* Botón Cerrar (X) */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 bg-paper-light/90 hover:bg-paper-light border-2 border-ink-dark p-2 md:p-3 transition-all hover:scale-110 shadow-xl"
        aria-label="Cerrar"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-ink-black md:w-6 md:h-6"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Botón Descargar */}
      <button
        onClick={handleDownload}
        className="absolute top-4 right-16 md:right-24 z-50 bg-paper-light/90 hover:bg-paper-light border-2 border-ink-dark p-2 md:p-3 transition-all hover:scale-110 shadow-xl group"
        aria-label="Descargar imagen"
        title="Descargar imagen"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-ink-black md:w-6 md:h-6"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      </button>

      {/* Contador de imágenes */}
      {images.length > 1 && (
        <div className="absolute top-4 left-4 z-50 bg-ink-black/90 text-paper-light px-2 md:px-4 py-1 md:py-2 border border-paper-dark shadow-xl">
          <span className="font-mono text-xs md:text-base font-bold">
            {currentIndex + 1} / {images.length}
          </span>
        </div>
      )}

      {/* Flecha Izquierda */}
      {images.length > 1 && (
        <button
          onClick={prevImage}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-40 bg-paper-light/90 hover:bg-paper-light border-2 border-ink-dark p-2 md:p-4 transition-all hover:scale-110 shadow-xl"
          aria-label="Imagen anterior"
        >
          <ArrowLeftIcon width={24} height={24} className="text-ink-black md:w-8 md:h-8" />
        </button>
      )}

      {/* Imagen Principal */}
      <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
        <img
          src={images[currentIndex]}
          alt={`${imageName} ${currentIndex + 1}`}
          className="max-w-full max-h-full w-auto h-auto object-contain border-4 md:border-8 border-paper-light shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />
      </div>

      {/* Flecha Derecha */}
      {images.length > 1 && (
        <button
          onClick={nextImage}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-40 bg-paper-light/90 hover:bg-paper-light border-2 border-ink-dark p-2 md:p-4 transition-all hover:scale-110 shadow-xl"
          aria-label="Imagen siguiente"
        >
          <ArrowRightIcon width={24} height={24} className="text-ink-black md:w-8 md:h-8" />
        </button>
      )}

      {/* Indicador de ayuda */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 bg-ink-black/80 text-paper-light px-3 md:px-4 py-1.5 md:py-2 text-[10px] md:text-sm font-serif italic border border-paper-dark max-w-[90vw] text-center">
        {images.length > 1 ? (
          <span className="hidden md:inline">Usa las flechas o el teclado para navegar • ESC para cerrar</span>
        ) : (
          <span className="hidden md:inline">Haz clic fuera de la imagen o presiona ESC para cerrar</span>
        )}
        {images.length > 1 ? (
          <span className="md:hidden">Flechas para navegar • ESC para cerrar</span>
        ) : (
          <span className="md:hidden">Click fuera o ESC para cerrar</span>
        )}
      </div>
    </div>
  );
};

export default Lightbox;
