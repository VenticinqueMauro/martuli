# Guía de Optimización de Imágenes

## Resumen de Implementación

✅ **Completado:**
- 📁 Estructura de carpetas creada en `public/images/`
- 🖼️ 70 imágenes copiadas y organizadas
- ⚙️ Configuración centralizada en `config/images.ts`
- 🔧 Componentes actualizados (ImageSlider, LegacySection, App)
- 🚀 Lazy loading implementado
- 📝 Script de generación automática de config

## Estructura de Imágenes

```
public/images/
├── hero/
│   └── main.jpg (1 imagen)
├── pioneers/
│   ├── Feres.png
│   └── ana.png (2 imágenes)
├── family/
│   ├── veronica.jpeg
│   ├── mauro.jpg
│   ├── camila.jpeg
│   ├── gino.jpg
│   └── mia.jpg (5 imágenes)
└── gallery/
    └── *.jpg/jpeg/png (63 imágenes)
```

## Próximos Pasos de Optimización (Opcional)

### 1. Conversión a WebP

WebP ofrece 25-35% mejor compresión que JPEG sin pérdida de calidad visible.

**Opción A: Online (Más fácil)**
- Usa [Squoosh.app](https://squoosh.app)
- Arrastra imágenes
- Selecciona WebP, calidad 75-85
- Descarga y reemplaza

**Opción B: Automatizado con Sharp**

```bash
npm install --save-dev sharp
```

Crea `scripts/optimize-images.js`:

```javascript
import sharp from 'sharp';
import { readdirSync, statSync } from 'fs';
import { join } from 'path';

const optimizeImages = async (dir) => {
  const files = readdirSync(dir);

  for (const file of files) {
    const filePath = join(dir, file);

    if (statSync(filePath).isDirectory()) {
      await optimizeImages(filePath);
      continue;
    }

    if (!/\.(jpg|jpeg|png)$/i.test(file)) continue;

    const outputPath = filePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');

    await sharp(filePath)
      .webp({ quality: 80 })
      .toFile(outputPath);

    console.log(`✅ ${file} → ${outputPath.split('/').pop()}`);
  }
};

optimizeImages('./public/images').then(() => {
  console.log('\n🎉 Optimización completada!');
});
```

Ejecutar:
```bash
node scripts/optimize-images.js
```

Luego actualiza `config/images.ts` cambiando extensiones a `.webp`.

### 2. Redimensionar Imágenes Grandes

Si las imágenes son muy grandes (>2MB), redimensiona antes de WebP:

```javascript
await sharp(filePath)
  .resize(1920, null, { withoutEnlargement: true }) // Max 1920px ancho
  .webp({ quality: 80 })
  .toFile(outputPath);
```

### 3. Generar Thumbnails (Opcional)

Para el slider, genera miniaturas:

```bash
mkdir -p public/images/gallery/thumbs
```

```javascript
await sharp(filePath)
  .resize(300, 300, { fit: 'cover' })
  .webp({ quality: 70 })
  .toFile(join(dir, 'thumbs', file.replace(/\.(jpg|jpeg|png)$/i, '.webp')));
```

## Verificación de Rendimiento

### Antes de optimizar:
```bash
du -sh public/images/*
```

### Después de optimizar:
Deberías ver reducción de 40-60% en tamaño total.

### Testing en navegador:
1. Abre DevTools → Network
2. Recarga la página
3. Verifica:
   - Tamaño total de imágenes
   - Tiempo de carga
   - Que lazy loading funciona (imágenes fuera de pantalla no cargan hasta scroll)

## Configuración Actual

### Lazy Loading
- ✅ Imágenes fuera de viewport no cargan hasta scroll
- ✅ Primera imagen (hero) usa `loading="eager"`
- ✅ Resto usa `loading="lazy"`

### Actualizar Imágenes

Si agregas/quitas imágenes de la galería:

```bash
node scripts/generate-image-config.js
```

Esto regenera automáticamente `config/images.ts`.

## Métricas Objetivo

| Métrica | Target |
|---------|--------|
| Tamaño promedio imagen | < 200 KB |
| Tamaño total imágenes | < 15 MB |
| Tiempo carga inicial | < 2s |
| LCP (Largest Contentful Paint) | < 2.5s |

## Troubleshooting

### Las imágenes no cargan
1. Verifica que las rutas en `config/images.ts` sean correctas
2. Abre DevTools → Console para ver errores 404
3. Verifica que las imágenes estén en `public/images/`

### Imágenes muy grandes
Redimensiona antes de WebP (ver sección 2)

### Agregar nueva categoría de imágenes
1. Crea carpeta en `public/images/nueva-categoria`
2. Agrega ruta en `config/images.ts`
3. Importa `IMAGES` en el componente
4. Usa `IMAGES.nuevaCategoria`

## Comandos Útiles

```bash
# Ver tamaño de cada carpeta
du -sh public/images/*

# Contar imágenes por tipo
find public/images -name "*.jpg" | wc -l
find public/images -name "*.webp" | wc -l

# Ver imágenes más grandes
find public/images -type f -exec du -h {} + | sort -rh | head -10

# Regenerar configuración
node scripts/generate-image-config.js

# Correr dev server
npm run dev
```

## Ventajas de la Implementación Actual

✅ Sin dependencias externas (Cloudinary, etc.)
✅ Control total sobre las imágenes
✅ Lazy loading nativo (sin librerías adicionales)
✅ Configuración centralizada y fácil de mantener
✅ Script de generación automática
✅ Compatible con build de Vite
✅ SEO-friendly (atributos alt, loading correcto)
✅ 70 imágenes es perfectamente manejable localmente

## Próxima Actualización (Futuro)

Si el proyecto crece y necesitas:
- Más de 200 imágenes
- Transformaciones dinámicas
- Múltiples tamaños responsive
- CDN global

Entonces considera migrar a Cloudinary. Pero para 70 imágenes estáticas, la solución actual es óptima.
