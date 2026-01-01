# Instrucciones para Implementación de Imágenes Estáticas

## Estado Actual

✅ Imágenes copiadas a `public/images/`:
- **Pioneros**: Feres.png, ana.png
- **Familia**: veronica.jpeg, mauro.jpg, camila.jpeg, gino.jpg, mia.jpg
- **Galería**: 63 imágenes

✅ Componentes actualizados:
- `ImageSlider.tsx` - Ahora recibe imágenes como prop
- `LegacySection.tsx` - Ahora recibe familyImages como prop

✅ Configuración creada:
- `config/images.ts` - Contiene todas las rutas
- `scripts/generate-image-config.js` - Script para regenerar config

## Cambios Necesarios en App.tsx

Reemplaza las siguientes líneas en `App.tsx`:

### 1. Imports (línea 2)
```tsx
// ANTES:
import React, { useState, useRef } from 'react';

// DESPUÉS:
import React, { useState } from 'react';
import { IMAGES } from './config/images';
```

### 2. Eliminar líneas 30-60 (FileReader state y handlers)
Elimina completamente:
- `const [heroImage, setHeroImage] = useState...`
- `const [pioneerImages, setPioneerImages] = useState...`
- `const [extraPhotos, setExtraPhotos] = useState...`
- Todos los `useRef` (heroFileInputRef, FeresFileInputRef, etc.)
- La función `handleImageChange`

### 3. Hero Image (alrededor de línea 100-130)
Reemplaza toda la sección de hero image con:

```tsx
<div className="mb-4 relative border-2 border-ink-medium bg-paper-dark group aspect-[4/3] overflow-hidden flex items-center justify-center">
  <div
    className="relative w-full h-full cursor-pointer"
    onClick={() => openLightbox([IMAGES.hero], 0, 'foto-principal')}
  >
    <img
      src={IMAGES.hero}
      alt="Hero"
      className="w-full h-full object-cover sepia-photo"
      loading="eager"
    />
    <div className="absolute inset-0 bg-ink-black/0 group-hover:bg-ink-black/10 transition-colors flex items-center justify-center">
      <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-paper-light/95 px-4 py-2 border-2 border-ink-dark">
        <p className="text-xs font-black uppercase tracking-wider">Click para ampliar</p>
      </div>
    </div>
  </div>
</div>
```

### 4. Pioneer Images (alrededor de línea 210-280)
Para Feres:
```tsx
<img
  src={IMAGES.pioneers.Feres}
  alt="Feres Gettar"
  className="w-full h-full object-cover sepia-photo"
  loading="lazy"
/>
```

Para Ana:
```tsx
<img
  src={IMAGES.pioneers.ana}
  alt="Ana Frasca"
  className="w-full h-full object-cover sepia-photo"
  loading="lazy"
/>
```

### 5. LegacySection (alrededor de línea 336)
```tsx
<LegacySection
  familyImages={IMAGES.family}
  onImageClick={(image, name) => openLightbox([image], 0, name)}
/>
```

### 6. ImageSlider (alrededor de línea 697-702)
```tsx
<ImageSlider
  title="Álbum de Recuerdos"
  subtitle="74 años de momentos inolvidables"
  images={IMAGES.gallery}
  onImageClick={(images, index) => openLightbox(images, index, 'album-recuerdos')}
/>
```

## Optimización (Opcional)

Para optimizar las imágenes más adelante, puedes:

1. Instalar sharp:
```bash
npm install --save-dev sharp
```

2. Crear script de optimización en `scripts/optimize-images.js`

3. Ejecutar para convertir a WebP y reducir tamaño

## Testing

Después de hacer los cambios, ejecuta:
```bash
npm run dev
```

Verifica que:
- Las imágenes se carguen correctamente
- El lightbox funcione al hacer click
- El slider de galería muestre todas las 63 imágenes
- Las fotos de familia aparezcan en la sección "El Legado"
