# Generar Imagen Open Graph (og-image.png)

La imagen de preview para WhatsApp y redes sociales debe ser generada desde el archivo `og-image.html`.

## Opción 1: Screenshot Manual (Más Fácil)

1. Abre `public/og-image.html` en tu navegador
2. Presiona F12 para abrir las DevTools
3. Presiona Ctrl+Shift+P (Cmd+Shift+P en Mac)
4. Escribe "Capture screenshot" y selecciona "Capture full size screenshot"
5. Renombra el archivo a `og-image.png`
6. Coloca `og-image.png` en la carpeta `public/`

## Opción 2: Con Herramienta Online

1. Ve a https://www.screely.com/ o https://metatags.io/
2. Sube el archivo `og-image.html` o abre localmente
3. Toma screenshot de 1200x630px
4. Descarga como `og-image.png`
5. Coloca en la carpeta `public/`

## Opción 3: Usando Playwright/Puppeteer (Automático)

Ejecuta el siguiente comando si tienes Node.js instalado:

```bash
npx playwright screenshot --viewport-size=1200,630 file:///$(pwd)/public/og-image.html public/og-image.png
```

## Dimensiones Requeridas

- Ancho: 1200px
- Alto: 630px
- Formato: PNG o JPG
- Tamaño máximo recomendado: 300KB

## Verificar el Preview

Después de generar la imagen, puedes verificar cómo se verá en WhatsApp usando:

- https://www.opengraph.xyz/
- https://www.bannerbear.com/tools/whatsapp-link-preview-generator/
- https://metatags.io/

Solo pega la URL de tu sitio y verás el preview exactamente como se mostrará en WhatsApp.

## IMPORTANTE

Recuerda actualizar la URL en `index.html` (líneas 17, 20, 29, 32) con la URL real de tu sitio cuando lo despliegues en producción.

Actualmente está configurada como:
```
https://martuli-cumple.vercel.app/
```

Cámbiala por la URL real donde se hospedará el sitio.
