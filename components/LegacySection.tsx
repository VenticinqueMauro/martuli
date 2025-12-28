
import React, { useState, useRef } from 'react';
import { LegacyItem } from '../types';
import { CameraIcon } from './VintageSVGs';

const LegacySection: React.FC = () => {
  const [images, setImages] = useState<Record<number, string>>({});
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const family: LegacyItem[] = [
    { name: "VERÓNICA", role: "La Primogénita", description: "El primer eslabón de esta cadena de amor inquebrantable." },
    { name: "MAURO", role: "El Hijo", description: "Pilar que mantiene viva la tradición familiar." },
    { name: "CAMILA", role: "Primera Nieta", description: "El orgullo que renovó las esperanzas." },
    { name: "GINO", role: "Nieto Revoltoso", description: "La alegría inquieta que llena de risas el hogar." },
    { name: "MIA", role: "La Pequeña", description: "La dulzura que completa nuestro círculo." }
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
    <section className="my-16 py-10 px-4 border-y-4 border-double border-ink-dark bg-paper-medium/30">
      <div className="text-center mb-12">
        <h3 className="headline-font text-3xl md:text-4xl font-black uppercase tracking-widest border-b-4 border-ink-dark inline-block px-8 pb-3">El Legado</h3>
        <p className="text-sm italic font-serif mt-3 text-ink-medium">Hijos y Nietos que perpetúan el amor</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {family.map((item, idx) => (
          <div key={idx} className="flex flex-col">
            <div
              onClick={() => handleUpload(idx)}
              className="relative w-full aspect-[3/4] border-4 border-ink-dark bg-paper-dark cursor-pointer hover:bg-ink-black/5 transition-all group overflow-hidden mb-4 shadow-md"
            >
              {images[idx] ? (
                <img src={images[idx]} className="w-full h-full object-cover sepia-photo" alt={item.name} />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-3 text-center bg-paper-light">
                  <CameraIcon width={40} height={40} className="mb-2 text-ink-light group-hover:scale-110 transition-transform" />
                  <p className="text-[9px] font-bold uppercase leading-tight tracking-wide">Retrato<br/>Familiar</p>
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-ink-black text-white text-[8px] py-1.5 text-center opacity-0 group-hover:opacity-100 transition-opacity uppercase font-bold tracking-wide">
                Añadir Foto
              </div>
            </div>
            <div className="text-center border-t-2 border-ink-dark pt-2">
              <h4 className="headline-font text-lg md:text-xl font-black uppercase leading-tight mb-1">{item.name}</h4>
              <p className="text-[9px] font-bold uppercase mb-2 text-ink-medium tracking-widest">{item.role}</p>
              <p className="text-[11px] leading-snug font-serif italic text-justify px-1">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <input type="file" ref={fileInputRef} className="hidden" onChange={onFileChange} accept="image/*" />
    </section>
  );
};

export default LegacySection;
