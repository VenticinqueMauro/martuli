
import React, { useState, useRef } from 'react';
import { analyzeMemory } from '../services/geminiService';

const MemoryUploader: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [caption, setCaption] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    const reader = new FileReader();
    reader.onload = async (event) => {
      const base64 = event.target?.result as string;
      setPreview(base64);
      
      const aiCaption = await analyzeMemory(base64);
      setCaption(aiCaption);
      setLoading(false);
    };
    reader.readAsDataURL(file);
  };

  return (
    <section className="my-16 p-8 border-4 border-double border-black bg-white/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-2 bg-black text-white text-[10px] uppercase font-bold transform rotate-45 translate-x-4 -translate-y-1">
        Interactivo
      </div>
      
      <div className="text-center mb-8">
        <h3 className="headline-font text-3xl font-bold uppercase">Cargar Recuerdo Histórico</h3>
        <p className="italic text-gray-600">Preserve su memoria en las páginas de El Heraldo</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
        {!preview ? (
          <div 
            onClick={() => fileInputRef.current?.click()}
            className="w-full max-w-sm h-64 border-2 border-dashed border-gray-400 flex flex-col items-center justify-center cursor-pointer hover:bg-black/5 transition-colors group"
          >
            <span className="text-4xl mb-4 group-hover:scale-110 transition-transform">📸</span>
            <p className="font-bold uppercase tracking-widest text-sm">Revelar Fotografía</p>
            <p className="text-xs text-gray-500 mt-2">Haga clic para subir una imagen</p>
          </div>
        ) : (
          <div className="w-full max-w-md">
            <img src={preview} className="w-full sepia-photo shadow-xl mb-4" alt="Preview" />
            <button 
              onClick={() => { setPreview(null); setCaption(null); }}
              className="text-xs font-bold uppercase underline"
            >
              Cargar otra
            </button>
          </div>
        )}

        <div className="flex-1 max-w-md">
          {loading ? (
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="animate-spin text-4xl">⏳</div>
              <p className="italic font-serif">Nuestros operarios están revelando la placa fotográfica...</p>
            </div>
          ) : caption ? (
            <div className="p-6 bg-[#fffcf5] border border-gray-300 shadow-inner">
              <h4 className="font-bold uppercase text-xs mb-2 border-b border-black inline-block">Crónica de la Imagen:</h4>
              <p className="text-lg italic leading-relaxed font-serif">"{caption}"</p>
            </div>
          ) : (
            <div className="text-center md:text-left text-gray-500 italic">
              <p>Suba una foto familiar para que nuestra inteligencia editorial de 1953 redacte una crónica instantánea.</p>
            </div>
          )}
        </div>
      </div>
      
      <input 
        type="file" 
        accept="image/*" 
        ref={fileInputRef} 
        onChange={handleFileChange} 
        className="hidden" 
      />
    </section>
  );
};

export default MemoryUploader;
