# SEO y Compartir en Redes Sociales

Esta guía explica cómo está configurado el sitio para compartirse en WhatsApp, Facebook, Twitter y otras redes sociales.

## ✅ Configuración Actual

### Meta Tags Implementados

El sitio ya incluye todos los meta tags necesarios en `index.html`:

- **Meta tags básicos**: título, descripción, keywords
- **Open Graph (Facebook/WhatsApp)**: og:title, og:description, og:image, og:url
- **Twitter Cards**: twitter:title, twitter:description, twitter:image
- **Configuración regional**: og:locale (es_AR para Argentina)

### Imagen de Preview

**Dimensiones**: 1200x630 píxeles
**Ubicación**: `public/og-image.png`
**Contenido**: "Feliz Cumple Martuli" con diseño vintage del periódico

## 📝 Cómo se verá al compartir

Cuando compartas el link en WhatsApp o redes sociales, se mostrará:

### Título
> Feliz Cumpleaños Martuli - 74 Años de Amor Incondicional

### Descripción
> Una celebración especial para Marta E Gettar. Periódico digital vintage con historias familiares, fotografías memorables y el cariño de toda la familia. ¡Descubre los super poderes de la abuela más increíble!

### Imagen
Una vista previa con:
- "Martuli" en tipografía gótica
- "Feliz Cumple MARTULI" en grandes titulares
- "74 años de amor incondicional"
- Diseño de periódico vintage con bordes ornamentados

## 🎨 Generar la Imagen Open Graph

### Método 1: Screenshot Manual (Recomendado)

1. Abre `public/og-image.html` en Chrome/Edge
2. Presiona **F12** → Console
3. Pega este código y presiona Enter:

```javascript
// Configurar viewport
document.body.style.margin = '0';
document.body.style.padding = '0';

// Luego presiona Ctrl+Shift+P y escribe "Capture screenshot"
// Selecciona "Capture full size screenshot"
```

4. Renombra el archivo a `og-image.png` y muévelo a `public/`

### Método 2: Herramientas Online

**Opción A - Metatags.io**
1. Ve a https://metatags.io/
2. Carga el archivo `og-image.html`
3. Descarga la imagen generada

**Opción B - Screely**
1. Ve a https://www.screely.com/
2. Toma screenshot del archivo HTML
3. Ajusta a 1200x630px

### Método 3: Automatizado con Script

Si tienes Node.js instalado:

```bash
# Instalar Playwright (solo la primera vez)
npm install --save-dev playwright

# Generar imagen
node scripts/generate-og-image.js
```

El script generará automáticamente `public/og-image.png` con las dimensiones correctas.

## 🔧 Configuración antes de Deploy

### 1. Actualizar URLs

Antes de desplegar en producción, actualiza la URL en `index.html`:

Busca y reemplaza en las líneas 17, 20, 29, 32:

```html
<!-- ANTES (temporal) -->
<meta property="og:url" content="https://martuli-cumple.vercel.app/">

<!-- DESPUÉS (tu URL real) -->
<meta property="og:url" content="https://tu-dominio-real.com/">
```

### 2. Generar og-image.png

Asegúrate de tener `public/og-image.png` generado antes de hacer deploy.

### 3. Verificar que la imagen esté en public/

```
public/
  ├── og-image.html      ✅ (plantilla)
  ├── og-image.png       ⚠️ (debes generar)
  ├── favicon.svg        ✅
  └── GENERAR-OG-IMAGE.md
```

## ✅ Verificar el Preview

### Antes de Deploy (Local)

No puedes verificar el preview local porque WhatsApp/Facebook necesitan una URL pública.

### Después de Deploy

1. **Open Graph Debugger** (recomendado)
   - https://www.opengraph.xyz/
   - Pega tu URL y ve el preview exacto

2. **Facebook Sharing Debugger**
   - https://developers.facebook.com/tools/debug/
   - Útil para limpiar caché si cambias la imagen

3. **Twitter Card Validator**
   - https://cards-dev.twitter.com/validator
   - Verifica cómo se ve en Twitter

4. **WhatsApp Link Preview Generator**
   - https://www.bannerbear.com/tools/whatsapp-link-preview-generator/
   - Simula exactamente cómo se verá en WhatsApp

## 🚀 Compartir en WhatsApp

### Forma 1: Link Directo

Crea un link como este:

```
https://wa.me/?text=¡Feliz%20Cumpleaños%20Martuli!%20🎂%0A%0ATe%20invito%20a%20ver%20esta%20edición%20especial%20del%20periódico:%20https://tu-dominio.com
```

### Forma 2: Botón en el Sitio

Puedes agregar un botón "Compartir en WhatsApp" en la página:

```html
<a href="https://wa.me/?text=Mira esta celebración especial: [URL]"
   target="_blank">
  Compartir en WhatsApp
</a>
```

## 📱 Cómo se verá en diferentes plataformas

### WhatsApp
- Muestra: Imagen + Título + Descripción corta
- Formato: Card grande con preview de imagen
- Al hacer click: Abre el sitio

### Facebook
- Muestra: Imagen grande + Título + Descripción
- Formato: Link preview enriquecido
- Incluye: Nombre del sitio ("Martuli")

### Twitter
- Muestra: Twitter Card con imagen grande
- Formato: Summary Large Image
- Requiere: twitter:card meta tags (ya incluidos)

### Telegram
- Similar a WhatsApp
- Lee los meta tags Open Graph
- Muestra preview automático

## 🐛 Solución de Problemas

### El preview no se actualiza

1. **Limpiar caché de Facebook/WhatsApp**
   - Ve a: https://developers.facebook.com/tools/debug/
   - Pega tu URL
   - Click en "Scrape Again"

2. **Verificar que la imagen sea accesible**
   - Abre: `https://tu-dominio.com/og-image.png`
   - Debe cargar la imagen correctamente

3. **Verificar meta tags**
   - View Source de tu página
   - Busca `<meta property="og:image"`
   - Verifica que la URL sea correcta

### La imagen no se ve en WhatsApp

- WhatsApp puede tardar hasta 7 días en actualizar el caché
- Asegúrate de que la imagen sea PNG o JPG
- Verifica que sea menor a 300KB
- La URL debe ser HTTPS (HTTP no funciona)

### Preview diferente en cada red

- Cada red social lee diferentes meta tags
- Asegúrate de tener tanto `og:` como `twitter:` tags
- Verifica con los validadores específicos de cada plataforma

## 📋 Checklist Final

Antes de compartir con la familia:

- [ ] `og-image.png` generado y en carpeta `public/`
- [ ] URLs actualizadas en `index.html` con dominio real
- [ ] Sitio desplegado en producción (Vercel/Netlify/etc)
- [ ] Verificado preview en https://www.opengraph.xyz/
- [ ] Probado compartir en WhatsApp
- [ ] Imagen se ve correctamente en el preview
- [ ] Link abre el sitio correctamente

## 💡 Tips Adicionales

### Hacer el link más atractivo

Cuando compartas por WhatsApp, agrega un mensaje como:

```
🎂 ¡FELIZ CUMPLEAÑOS MARTULI! 🎂

Te invitamos a leer esta edición especial del periódico
que preparamos con todo nuestro cariño ❤️

👉 [TU LINK AQUÍ]

¡74 años de amor incondicional! 🎉
```

### Acortar el link (opcional)

Si tu dominio es muy largo, usa:
- bit.ly
- tinyurl.com
- Pero: ⚠️ Los links acortados a veces no muestran preview

### Timing

- Comparte el link 1-2 días antes del cumpleaños
- Así todos tienen tiempo de ver el sitio
- Y pueden dejar sus mensajes/fotos

## 📞 Soporte

Si tienes problemas con el preview o el SEO:

1. Verifica los meta tags en el código fuente
2. Usa los validadores mencionados arriba
3. Revisa que la imagen og-image.png esté accesible públicamente

---

**Última actualización**: Enero 2025
**Versión**: 1.0
