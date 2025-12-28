
import React, { useState, useEffect, useRef } from 'react';
import NewspaperHeader from './components/NewspaperHeader';
import LegacySection from './components/LegacySection';
import MemoryUploader from './components/MemoryUploader';
import { generateVintageArticle } from './services/geminiService';

const App: React.FC = () => {
  const [articleContent, setArticleContent] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [heroImage, setHeroImage] = useState<string | null>(null);
  const [pioneerImages, setPioneerImages] = useState<{ferez: string | null, ana: string | null}>({ferez: null, ana: null});
  
  const heroFileInputRef = useRef<HTMLInputElement>(null);
  const ferezFileInputRef = useRef<HTMLInputElement>(null);
  const anaFileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const loadContent = async () => {
      const content = await generateVintageArticle("Marta Gettar", 73);
      const cleaned = content
        .replace(/\*\*/g, '')
        .replace(/\*/g, '')
        .replace(/#/g, '')
        .replace(/`/g, '')
        .trim();
      setArticleContent(cleaned);
      setLoading(false);
    };
    loadContent();
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, target: 'hero' | 'ferez' | 'ana') => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (target === 'hero') setHeroImage(result);
        if (target === 'ferez') setPioneerImages(prev => ({...prev, ferez: result}));
        if (target === 'ana') setPioneerImages(prev => ({...prev, ana: result}));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 md:py-12 bg-white/40 shadow-2xl my-4 md:my-10 border border-gray-300 relative paper-texture">
      <div className="absolute inset-0 pointer-events-none border-[12px] border-double border-gray-200/50"></div>
      
      <div className="relative z-10 px-2 md:px-8">
        <NewspaperHeader />

        {/* Hero Section with Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-12">
          
          {/* Main Content (8 cols) */}
          <section className="lg:col-span-8">
            <div className="text-center mb-8">
              <h2 className="headline-font text-4xl md:text-6xl font-black uppercase tracking-tight leading-none mb-4">
                Nace la mujer que cambiaría nuestro mundo
              </h2>
              <div className="w-24 h-1 bg-black mx-auto mb-4"></div>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <div 
                  onClick={() => heroFileInputRef.current?.click()}
                  className="mb-4 relative border border-gray-400 bg-[#e8dfc8] cursor-pointer group aspect-[4/3] overflow-hidden flex items-center justify-center"
                >
                  {heroImage ? (
                    <img src={heroImage} alt="Hero" className="w-full h-full object-cover sepia-photo" />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#fdfaf1]">
                      <div className="text-7xl mb-2 grayscale opacity-60">🕊️</div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity">
                         <div className="bg-white/90 p-3 rounded-full shadow-lg border border-black mb-2">
                           <span className="text-2xl">📸</span>
                         </div>
                         <p className="text-[10px] font-black uppercase tracking-tighter px-4 text-black">Haga clic para añadir la foto histórica de mamá</p>
                      </div>
                      <div className="mt-2 text-xs font-serif italic text-gray-500">Ilustración de época: La Cigüeña Real</div>
                    </div>
                  )}
                  <input type="file" ref={heroFileInputRef} className="hidden" onChange={(e) => handleImageChange(e, 'hero')} accept="image/*" />
                </div>
                <p className="text-[10px] italic font-serif text-center border-b border-black/20 pb-2">
                  Imagen de archivo: El inicio de un camino de amor que hoy cumple 73 años.
                </p>
              </div>

              <div className="flex-1 text-justify">
                <h3 className="headline-font text-2xl font-bold uppercase mb-4 underline">Crónica de una Matriarca</h3>
                {loading ? (
                  <div className="animate-pulse space-y-4">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  </div>
                ) : (
                  <div className="text-lg leading-snug font-serif">
                    <span className="text-6xl font-black float-left mr-3 leading-[0.8] mt-1">E</span>
                    {articleContent}
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Sidebar (4 cols) */}
          <aside className="lg:col-span-4 space-y-8 border-l-2 border-black/10 pl-0 lg:pl-8">
            <div className="border-4 border-double border-black p-4 bg-white/30">
              <h4 className="headline-font text-xl font-black border-b border-black mb-4 uppercase text-center">Telegramas Urgentes</h4>
              <div className="space-y-4 text-xs font-mono font-bold tracking-tighter uppercase leading-tight">
                <p className="border-b border-dashed border-black pb-2">"STOP. GINO Y MIA PIDEN MILANESAS. STOP."</p>
                <p className="border-b border-dashed border-black pb-2">"CAMILA REPORTA: ABUELA TE AMAMOS. STOP."</p>
                <p className="pb-2">"MAURO Y VERO: FELIZ CUMPLE VIEJA. STOP."</p>
              </div>
            </div>

            <div className="border-2 border-black p-4 bg-[#fffcf5]">
              <h4 className="headline-font text-lg font-black border-b border-black mb-3 uppercase">Datos del Día (01/01/53)</h4>
              <ul className="text-sm space-y-2 italic font-serif">
                <li><span className="font-bold uppercase not-italic">Clima:</span> Sol radiante para un día histórico.</li>
                <li><span className="font-bold uppercase not-italic">Precio:</span> Un abrazo fuerte.</li>
                <li><span className="font-bold uppercase not-italic">Santoral:</span> Santa María Madre de Dios.</li>
              </ul>
            </div>
          </aside>
        </div>

        {/* NUEVA SECCIÓN: LOS PIONEROS */}
        <section className="my-16 py-10 px-8 border-4 border-double border-black bg-white/40 shadow-md">
          <div className="text-center mb-8">
            <h3 className="headline-font text-3xl font-black uppercase tracking-widest border-b-2 border-black inline-block px-10 pb-2">Los Pioneros: El Origen de la Estirpe</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Ferez Gettar */}
            <div className="space-y-4">
              <div 
                onClick={() => ferezFileInputRef.current?.click()}
                className="relative aspect-[3/4] border-2 border-black bg-[#e8dfc8] cursor-pointer group overflow-hidden flex items-center justify-center shadow-lg"
              >
                {pioneerImages.ferez ? (
                  <img src={pioneerImages.ferez} alt="Ferez Gettar" className="w-full h-full object-cover sepia-photo" />
                ) : (
                  <div className="text-center p-6">
                    <span className="text-5xl mb-3 block grayscale opacity-40">🎩</span>
                    <p className="text-xs font-black uppercase">Añadir Retrato de Ferez Gettar</p>
                    <div className="mt-4 bg-black text-white px-3 py-1 text-[10px] uppercase font-bold group-hover:bg-gray-800 transition-colors">Seleccionar Archivo</div>
                  </div>
                )}
                <input type="file" ref={ferezFileInputRef} className="hidden" onChange={(e) => handleImageChange(e, 'ferez')} accept="image/*" />
              </div>
              <div className="text-center">
                <h4 className="headline-font text-2xl font-black uppercase">Ferez Gettar</h4>
                <p className="italic font-serif text-sm">"Arquitecto de sueños y pilar de la familia"</p>
              </div>
            </div>

            {/* Ana Frasca */}
            <div className="space-y-4">
              <div 
                onClick={() => anaFileInputRef.current?.click()}
                className="relative aspect-[3/4] border-2 border-black bg-[#e8dfc8] cursor-pointer group overflow-hidden flex items-center justify-center shadow-lg"
              >
                {pioneerImages.ana ? (
                  <img src={pioneerImages.ana} alt="Ana Frasca" className="w-full h-full object-cover sepia-photo" />
                ) : (
                  <div className="text-center p-6">
                    <span className="text-5xl mb-3 block grayscale opacity-40">💐</span>
                    <p className="text-xs font-black uppercase">Añadir Retrato de Ana Frasca</p>
                    <div className="mt-4 bg-black text-white px-3 py-1 text-[10px] uppercase font-bold group-hover:bg-gray-800 transition-colors">Seleccionar Archivo</div>
                  </div>
                )}
                <input type="file" ref={anaFileInputRef} className="hidden" onChange={(e) => handleImageChange(e, 'ana')} accept="image/*" />
              </div>
              <div className="text-center">
                <h4 className="headline-font text-2xl font-black uppercase">Ana Frasca</h4>
                <p className="italic font-serif text-sm">"Manantial de ternura y sabiduría eterna"</p>
              </div>
            </div>
          </div>
          
          <div className="mt-10 text-center max-w-2xl mx-auto font-serif italic text-lg leading-relaxed border-t border-black/20 pt-6">
            "De tierras lejanas y corazones valientes, Ferez y Ana forjaron el cimiento donde hoy florece nuestra historia. Su ejemplo es la brújula que guía a cada descendiente en este camino de honor y afecto."
          </div>
        </section>

        {/* SECCIÓN: CRÓNICA DE LAS RAÍCES */}
        <section className="my-16 py-8 px-6 border-y-4 border-double border-black bg-[#f0e8d0] shadow-inner">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/4 flex justify-center">
              <div className="border-2 border-black p-2 rounded-full">
                <div className="text-8xl grayscale opacity-50">🌳</div>
              </div>
            </div>
            <div className="flex-1 space-y-4">
              <h3 className="newspaper-title text-4xl md:text-5xl text-center md:text-left mb-6">Raíces: El Círculo Original</h3>
              <div className="font-serif text-lg leading-relaxed text-justify space-y-4">
                <p>
                  En el solar de los recuerdos, la estirpe se fortalece en el vínculo inquebrantable de los <span className="font-bold">seis hermanos</span>, ramas de un mismo tronco que desafían el tiempo. 
                </p>
                <div className="bg-white/20 p-4 border-l-4 border-black italic">
                   <p className="mb-2">
                     Brillan hoy con luz presente <span className="font-bold headline-font text-xl underline">Chacho, Lili y Gringo</span>, quienes junto a nuestra querida cumpleañera <span className="font-bold">Marta Gettar</span>, custodian la risa y el legado de unión familiar.
                   </p>
                   <p className="mt-4 border-t border-black/20 pt-2 text-gray-700">
                     Y en el susurro del viento, un recordatorio poético para <span className="headline-font font-bold">Gustavo y Ana María</span>, cuyas almas tejen la red invisible que sostiene nuestra historia y guía nuestros pasos.
                   </p>
                </div>
                <p className="text-center md:text-right font-black uppercase text-sm tracking-[0.3em]">Homenaje Permanente</p>
              </div>
            </div>
          </div>
        </section>

        {/* Legacy Section (5 Columns) */}
        <LegacySection />

        {/* Missing Photos Section */}
        <section className="my-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-2 border-dashed border-gray-400 p-8 flex flex-col items-center justify-center text-center opacity-70 group cursor-pointer hover:bg-black/5 transition-colors">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📸</div>
              <h4 className="font-bold uppercase text-sm">Foto por revelar:</h4>
              <p className="italic font-serif">"El día de su casamiento, San Miguel de Tucumán"</p>
              <span className="text-[10px] font-black mt-2 hidden group-hover:block">CLIC PARA SUBIR</span>
            </div>
            <div className="border-2 border-dashed border-gray-400 p-8 flex flex-col items-center justify-center text-center opacity-70 group cursor-pointer hover:bg-black/5 transition-colors">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📸</div>
              <h4 className="font-bold uppercase text-sm">Foto por revelar:</h4>
              <p className="italic font-serif">"Un viaje inolvidable de la juventud"</p>
              <span className="text-[10px] font-black mt-2 hidden group-hover:block">CLIC PARA SUBIR</span>
            </div>
          </div>
        </section>

        {/* Fe de Erratas */}
        <div className="max-w-xl mx-auto border border-black p-4 mb-12 text-center bg-gray-50/50 italic shadow-sm">
          <h5 className="font-bold uppercase text-xs mb-1 underline">Fe de Erratas:</h5>
          <p className="text-sm font-serif">
            La redacción se disculpa. En la nota principal subestimamos la cantidad de amor que esta mujer generaría. No son 73 años, son 73 toneladas de cariño.
          </p>
        </div>

        {/* AI Memory Uploader (The CTA) */}
        <MemoryUploader />

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t-2 border-black text-center text-xs uppercase font-bold space-y-2">
          <p>© 1953 - 2026 EL HERALDO FAMILIAR. TODOS LOS DERECHOS RESERVADOS.</p>
          <p className="italic tracking-[0.2em] font-serif">"Lo que se escribe en el corazón, nunca se borra de la historia."</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
