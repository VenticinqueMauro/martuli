
import React, { useState, useRef } from 'react';
import { LegacyItem } from '../types';

const LegacySection: React.FC = () => {
  const [images, setImages] = useState<Record<number, string>>({});
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const family: LegacyItem[] = [
    { name: "VERÓNICA", role: "Primogénita", description: "El primer eslabón de esta cadena de amor." },
    { name: "MAURO", role: "El Hijo", description: "Un pilar que mantiene viva la tradición." },
    { name: "CAMILA", role: "La primera nieta", description: "El orgullo que renovó las esperanzas." },
    { name: "GINO", role: "Nieto revoltoso", description: "La alegría inquieta de la familia." },
    { name: "MIA", role: "La más pequeña", description: "La dulzura que completa el hogar." }
  ];

  const handleUpload = (idx: number) => {
    setActiveIdx(idx);
    fileInputRef.current?.click();
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && activeIdx !== null) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImages(prev => ({ ...prev, [activeIdx]: event.target?.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="my-12 border-t-2 border-black pt-8">
      <div className="text-center mb-10">
        <h3 className="headline-font text-4xl font-black uppercase border-b-2 border-black inline-block px-8 pb-2">El Legado</h3>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {family.map((item, idx) => (
          <div key={idx} className="flex flex-col">
            <div 
              onClick={() => handleUpload(idx)}
              className="relative w-full aspect-[4/5] border border-gray-400 bg-[#e8dfc8] cursor-pointer hover:bg-black/5 transition-all group overflow-hidden mb-3"
            >
              {images[idx] ? (
                <img src={images[idx]} className="w-full h-full object-cover sepia-photo" alt={item.name} />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-2 text-center">
                  <span className="text-3xl mb-1 opacity-50 group-hover:scale-110 transition-transform">📸</span>
                  <p className="text-[10px] font-bold uppercase leading-tight">Clic para subir foto</p>
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-[9px] py-1 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                AÑADIR RETRATO
              </div>
            </div>
            <h4 className="headline-font text-xl font-black uppercase leading-none mb-1">{item.name}</h4>
            <p className="text-[10px] font-bold uppercase mb-2 text-gray-700">{item.role}</p>
            <p className="text-xs leading-tight font-serif italic text-justify">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      <input type="file" ref={fileInputRef} className="hidden" onChange={onFileChange} accept="image/*" />
    </section>
  );
};

export default LegacySection;
