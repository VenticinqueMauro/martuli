// Configuración de imágenes estáticas
// Este archivo fue generado automáticamente. Para regenerarlo ejecuta: node scripts/generate-image-config.js

export const IMAGES = {
  // Imagen principal/hero
  hero: '/images/hero/main.png',

  // Pioneros (abuelos)
  pioneers: {
    ferez: '/images/pioneers/ferez.png',
    ana: '/images/pioneers/ana.png',
  },

  // Familia (hijos y nietos) - orden: Verónica, Mauro, Camila, Gino, Mia
  family: [
    '/images/family/veronica.jpeg',
    '/images/family/mauro.jpg',
    '/images/family/camila.jpeg',
    '/images/family/gino.jpg',
    '/images/family/mia.jpg',
  ],

  // Galería de recuerdos (slider principal) - 69 imágenes
  gallery: [
    '/images/gallery/20210101_001743.jpg',
    '/images/gallery/20210724_153928.jpg',
    '/images/gallery/20210724_153933.jpg',
    '/images/gallery/20210724_153938.jpg',
    '/images/gallery/20211017_125146.jpg',
    '/images/gallery/20221218_152044.jpg',
    '/images/gallery/IMG-20180923-WA0014.jpg',
    '/images/gallery/IMG-20181130-WA0001.jpg',
    '/images/gallery/IMG-20190101-WA0017.jpg',
    '/images/gallery/IMG-20190210-WA0014.jpg',
    '/images/gallery/IMG-20190210-WA0046.jpg',
    '/images/gallery/IMG-20190212-WA0017.jpg',
    '/images/gallery/IMG-20190421-WA0029.jpg',
    '/images/gallery/IMG-20190424-WA0013.jpg',
    '/images/gallery/IMG-20190617-WA0024.jpg',
    '/images/gallery/IMG-20190617-WA0032.jpg',
    '/images/gallery/IMG-20190619-WA0040.jpg',
    '/images/gallery/IMG-20190810-WA0043.jpg',
    '/images/gallery/IMG-20190811-WA0039.jpg',
    '/images/gallery/IMG-20191004-WA0078.jpg',
    '/images/gallery/IMG-20191025-WA0033.jpg',
    '/images/gallery/IMG-20191025-WA0036.jpg',
    '/images/gallery/IMG-20191102-WA0044.jpg',
    '/images/gallery/IMG-20200116-WA0032.jpg',
    '/images/gallery/IMG-20200303-WA0038.jpg',
    '/images/gallery/IMG-20200325-WA0086.jpg',
    '/images/gallery/IMG-20200720-WA0054.jpg',
    '/images/gallery/IMG-20200720-WA0060.jpg',
    '/images/gallery/IMG_20181207_235530.jpg',
    '/images/gallery/IMG_20181208_003558.jpg',
    '/images/gallery/IMG_20231201_194416.jpg',
    '/images/gallery/IMG_20231201_194535.jpg',
    '/images/gallery/IMG_20240101_001016.jpg',
    '/images/gallery/IMG_20240213_134342.jpg',
    '/images/gallery/Screenshot_20210114-141551_WhatsApp.jpg',
    '/images/gallery/SmartSelect_20211014-222213_Photos.jpg',
    '/images/gallery/WhatsApp Image 2025-12-28 at 09.25.39.jpeg',
    '/images/gallery/WhatsApp Image 2025-12-28 at 09.25.40 (1).jpeg',
    '/images/gallery/WhatsApp Image 2025-12-28 at 09.25.40.jpeg',
    '/images/gallery/WhatsApp Image 2025-12-28 at 09.25.41 (1).jpeg',
    '/images/gallery/WhatsApp Image 2025-12-28 at 09.25.41 (2).jpeg',
    '/images/gallery/WhatsApp Image 2025-12-28 at 09.25.41.jpeg',
    '/images/gallery/WhatsApp Image 2025-12-28 at 09.25.42 (1).jpeg',
    '/images/gallery/WhatsApp Image 2025-12-28 at 09.25.42 (2).jpeg',
    '/images/gallery/WhatsApp Image 2025-12-28 at 09.25.42.jpeg',
    '/images/gallery/WhatsApp Image 2025-12-28 at 09.25.43 (1).jpeg',
    '/images/gallery/WhatsApp Image 2025-12-28 at 09.25.43 (2).jpeg',
    '/images/gallery/WhatsApp Image 2025-12-28 at 09.25.43 (3).jpeg',
    '/images/gallery/WhatsApp Image 2025-12-28 at 09.25.43.jpeg',
    '/images/gallery/WhatsApp Image 2025-12-28 at 09.25.44.jpeg',
    '/images/gallery/WhatsApp Image 2025-12-28 at 09.45.10 (1).jpeg',
    '/images/gallery/WhatsApp Image 2025-12-28 at 09.45.10 (2).jpeg',
    '/images/gallery/WhatsApp Image 2025-12-28 at 09.45.10.jpeg',
    '/images/gallery/WhatsApp Image 2025-12-28 at 09.45.11 (1).jpeg',
    '/images/gallery/WhatsApp Image 2025-12-28 at 09.45.11.jpeg',
    '/images/gallery/WhatsApp Image 2025-12-28 at 09.45.12 (1).jpeg',
    '/images/gallery/WhatsApp Image 2025-12-28 at 09.45.12.jpeg',
    '/images/gallery/WhatsApp Image 2025-12-28 at 09.50.21.jpeg',
    '/images/gallery/WhatsApp Image 2025-12-28 at 21.04.59.jpeg',
    '/images/gallery/WhatsApp Image 2025-12-28 at 21.07.22.jpeg',
    '/images/gallery/WhatsApp Image 2025-12-28 at 21.10.39.jpeg',
    '/images/gallery/WhatsApp Image 2025-12-28 at 21.18.18.jpeg',
    '/images/gallery/WhatsApp Image 2025-12-28 at 21.21.24.jpeg',
    '/images/gallery/WhatsApp Image 2025-12-28 at 21.29.23.jpeg',
    '/images/gallery/WhatsApp Image 2025-12-29 at 20.21.17.jpeg',
    '/images/gallery/WhatsApp Image 2025-12-29 at 20.21.33.jpeg',
    '/images/gallery/WhatsApp Image 2025-12-29 at 20.27.51.jpeg',
    '/images/gallery/WhatsApp Image 2025-12-29 at 20.27.52 (1).jpeg',
    '/images/gallery/WhatsApp Image 2025-12-29 at 20.27.52.jpeg',
  ],

  // Fotos adicionales (actualmente comentadas en App.tsx)
  extras: {
    wedding: '/images/extras/wedding.webp',
    trip: '/images/extras/trip.webp',
  }
} as const;

// Helper para verificar si una imagen existe
export const hasImage = (path: string): boolean => {
  return true;
};
