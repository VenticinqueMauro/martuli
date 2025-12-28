/**
 * Script para generar automáticamente la imagen Open Graph (og-image.png)
 *
 * Requisitos:
 * npm install playwright
 *
 * Uso:
 * node scripts/generate-og-image.js
 */

const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

async function generateOGImage() {
  console.log('🎨 Generando imagen Open Graph...');

  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1200, height: 630 }
  });

  // Ruta al archivo og-image.html
  const htmlPath = path.join(__dirname, '..', 'public', 'og-image.html');
  const fileUrl = `file://${htmlPath}`;

  console.log(`📄 Cargando: ${fileUrl}`);

  // Cargar la página
  await page.goto(fileUrl, { waitUntil: 'networkidle' });

  // Esperar un momento para que las fuentes se carguen
  await page.waitForTimeout(1000);

  // Tomar screenshot
  const outputPath = path.join(__dirname, '..', 'public', 'og-image.png');
  await page.screenshot({
    path: outputPath,
    type: 'png',
    fullPage: false
  });

  console.log(`✅ Imagen generada exitosamente en: ${outputPath}`);

  // Verificar tamaño del archivo
  const stats = fs.statSync(outputPath);
  const fileSizeInKB = stats.size / 1024;
  console.log(`📦 Tamaño del archivo: ${fileSizeInKB.toFixed(2)} KB`);

  if (fileSizeInKB > 300) {
    console.log('⚠️  Advertencia: El archivo es mayor a 300KB. Considera optimizarlo.');
  }

  await browser.close();
  console.log('🎉 ¡Proceso completado!');
}

generateOGImage().catch(console.error);
