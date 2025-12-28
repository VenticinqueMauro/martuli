
import React from 'react';

const NewspaperHeader: React.FC = () => {
  return (
    <header className="border-b-4 border-ink-dark pb-4 mb-8 text-center px-4">
      <div className="flex justify-between items-end text-xs md:text-sm font-bold border-b border-ink-dark mb-2 uppercase tracking-widest">
        <span>Precio: 20 Centavos</span>
        <span className="hidden md:block">San Miguel de Tucumán, Argentina</span>
        <span>Año I - N° 001</span>
      </div>

      <h1 className="newspaper-title text-5xl md:text-8xl my-4">The Martuli Times</h1>

      <div className="border-y border-ink-dark py-1 mb-2 flex justify-center items-center gap-4">
        <div className="flex-1 h-px bg-ink-dark hidden md:block"></div>
        <h2 className="text-xl md:text-2xl font-black uppercase tracking-widest headline-font">Edición Especial de Aniversario</h2>
        <div className="flex-1 h-px bg-ink-dark hidden md:block"></div>
      </div>

      <div className="flex justify-between items-start text-xs md:text-sm font-bold italic">
        <span>"Veritas in Caritate"</span>
        <span className="font-bold not-italic uppercase tracking-tighter">Jueves, 1 de Enero de 1953</span>
        <span>Última Edición</span>
      </div>
    </header>
  );
};

export default NewspaperHeader;
