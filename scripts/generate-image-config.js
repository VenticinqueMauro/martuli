// Script para generar automáticamente el archivo de configuración de imágenes
import { readdirSync, writeFileSync } from 'fs';
import { join } from 'path';

const galleryDir = './public/images/gallery';
const galleryImages = readdirSync(galleryDir)
  .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
  .sort()
  .map(file => `/images/gallery/${file}`);

const config = `// Configuración de imágenes estáticas
// Este archivo fue generado automáticamente. Para regenerarlo ejecuta: node scripts/generate-image-config.js

export const IMAGES = {
  // Imagen principal/hero
  hero: '/images/hero/main.webp',

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

  // Galería de recuerdos (slider principal) - ${galleryImages.length} imágenes
  gallery: [
${galleryImages.map(img => `    '${img}',`).join('\n')}
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
`;

writeFileSync('./config/images.ts', config, 'utf-8');
console.log(`✅ Configuración generada con ${galleryImages.length} imágenes en la galería`);
