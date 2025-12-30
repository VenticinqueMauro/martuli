import React from 'react';
import { LegacyItem } from '../types';
import { CameraIcon } from './VintageSVGs';

interface LegacySectionProps {
  familyImages: string[];
  onImageClick?: (image: string, name: string) => void;
}

const LegacySection: React.FC<LegacySectionProps> = ({ familyImages, onImageClick }) => {
  const family: LegacyItem[] = [
    { name: "VERÓNICA", role: "La Primogénita", description: "" },
    { name: "MAURO", role: "El Hijo", description: "" },
    { name: "CAMILA", role: "Primera Nieta", description: "" },
    { name: "GINO", role: "Primer Nieto", description: "" },
    { name: "MIA", role: "La Pequeña", description: "" }
  ];

  return (
    <section className="my-16 py-10 px-4 border-y-4 border-double border-ink-dark bg-paper-medium/30">
      <div className="text-center mb-12">
        <h3 className="headline-font text-3xl md:text-4xl font-black uppercase tracking-widest border-b-4 border-ink-dark inline-block px-8 pb-3">El Legado</h3>
        <p className="text-sm italic font-serif mt-3 text-ink-medium">Hijos y Nietos que perpetúan el amor</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {family.map((item, idx) => (
          <div key={idx} className="flex flex-col">
            <div className="relative w-full aspect-[3/4] border-4 border-ink-dark bg-paper-dark group overflow-hidden mb-4 shadow-md">
              {familyImages[idx] ? (
                <div
                  className="relative w-full h-full cursor-pointer"
                  onClick={() => onImageClick?.(familyImages[idx], item.name.toLowerCase())}
                >
                  <img
                    src={familyImages[idx]}
                    className="w-full h-full object-cover sepia-photo"
                    alt={item.name}
                    loading="lazy"
                  />
                  {onImageClick && (
                    <div className="absolute inset-0 bg-ink-black/0 group-hover:bg-ink-black/10 transition-colors flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-paper-light/95 px-2 py-1 border-2 border-ink-dark">
                        <p className="text-[9px] font-black uppercase tracking-wider">Click para ampliar</p>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-3 text-center bg-paper-light">
                  <CameraIcon width={40} height={40} className="mb-2 text-ink-light" />
                  <p className="text-[9px] font-bold uppercase leading-tight tracking-wide text-ink-medium">Retrato<br />Pendiente</p>
                </div>
              )}
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
    </section>
  );
};

export default LegacySection;
