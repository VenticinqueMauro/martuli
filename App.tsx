
import React, { useState } from 'react';
import NewspaperHeader from './components/NewspaperHeader';
import LegacySection from './components/LegacySection';
import ImageSlider from './components/ImageSlider';
import Lightbox from './components/Lightbox';
import { IMAGES } from './config/images';
import {
  CameraIcon,
  StorkIcon,
  TopHatIcon,
  FlowerIcon,
  TreeIcon,
  CakeIcon,
  HeartIcon,
  WeddingRingsIcon,
  CompassIcon,
  OrnamentDivider,
  SunIcon,
  TelegramIcon,
  ChefHatIcon,
  PlateIcon,
  UtensilsIcon,
  CalendarIcon,
  CloudIcon,
  DocumentIcon,
  LightningBoltIcon
} from './components/VintageSVGs';

const App: React.FC = () => {
  // Lightbox states
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxName, setLightboxName] = useState('imagen');

  const openLightbox = (images: string[], index: number = 0, name: string = 'imagen') => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxName(name);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const articleContent = `n un caluroso día de enero de 1952, mientras el mundo celebraba el comienzo de un nuevo año, San Miguel de Tucumán recibía a quien se convertiría en el corazón de nuestra familia. Marta llegó a este mundo trayendo consigo la promesa de amor incondicional que hoy, setenta y tres años después, sigue cumpliendo con creces. Cada día vivido es una página de historias compartidas, cada momento un legado de amor y dedicación inquebrantable. Hoy, toda la Argentina se detiene para celebrar a esta mujer extraordinaria.`;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 md:py-12 bg-paper-medium/60 shadow-2xl my-4 md:my-10 border border-ink-lighter/60 relative paper-texture">
      <div className="absolute inset-0 pointer-events-none border-[12px] border-double border-paper-dark/50"></div>

      <div className="relative z-10 px-2 md:px-8">
        <NewspaperHeader />

        {/* Divider ornamental */}
        <div className="flex justify-center my-6">
          <OrnamentDivider width={200} height={24} className="text-ink-light" />
        </div>

        {/* Hero Section with Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-12">

          {/* Main Content (8 cols) */}
          <section className="lg:col-span-8">
            <div className="text-center mb-8">
              <h2 className="headline-font text-4xl md:text-6xl font-black uppercase tracking-tight leading-none mb-4">
                Nace la mujer que cambiaría nuestro mundo
              </h2>
              <div className="w-32 h-0.5 bg-ink-black mx-auto mb-2"></div>
              <div className="w-20 h-0.5 bg-ink-black mx-auto mb-4"></div>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <div className="mb-4 relative border-2 border-ink-medium bg-paper-dark group aspect-[4/3] overflow-hidden flex items-center justify-center">
                  <div
                    className="relative w-full h-full cursor-pointer"
                    onClick={() => openLightbox([IMAGES.hero], 0, 'foto-principal')}
                  >
                    <img
                      src={IMAGES.hero}
                      alt="Hero"
                      className="w-full h-full object-cover sepia-photo"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-ink-black/0 group-hover:bg-ink-black/10 transition-colors flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-paper-light/95 px-4 py-2 border-2 border-ink-dark">
                        <p className="text-xs font-black uppercase tracking-wider">Click para ampliar</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-[10px] italic font-serif text-center border-b border-ink-dark/20 pb-2">
                  Imagen de archivo: El inicio de un camino de amor que hoy cumple 74 años.
                </p>
              </div>

              <div className="flex-1 text-justify">
                <h3 className="headline-font text-2xl font-bold uppercase mb-4 border-b-2 border-ink-dark pb-2">Crónica de una Matriarca</h3>
                <div className="text-lg leading-relaxed font-serif">
                  <span className="text-7xl font-black float-left mr-3 leading-[0.7] mt-1 font-serif">E</span>
                  {articleContent}
                </div>
              </div>
            </div>
          </section>

          {/* Sidebar (4 cols) */}
          <aside className="lg:col-span-4 space-y-8 border-l-2 border-ink-dark/20 pl-0 lg:pl-8">
            {/* Telegramas */}
            <div className="border-4 border-double border-ink-dark p-4 bg-paper-light shadow-sm">
              <div className="flex items-center justify-center gap-2 border-b-2 border-ink-dark mb-4 pb-2">
                <TelegramIcon width={20} height={20} className="text-ink-black" />
                <h4 className="headline-font text-lg font-black uppercase text-center">Telegramas</h4>
              </div>
              <div className="space-y-4 text-[11px] font-mono font-bold tracking-tight uppercase leading-tight">
                <p className="border-b border-dashed border-ink-dark pb-3 pl-2">
                  <span className="text-[9px] text-ink-light">DE: GINO Y MIA</span><br />
                  "PEDIMOS ARROZ CON LECHE URGENTE"
                </p>
                <p className="border-b border-dashed border-ink-dark pb-3 pl-2">
                  <span className="text-[9px] text-ink-light">DE: CAMILA</span><br />
                  "ABUELA TE AMAMOS INFINITO"
                </p>
                <p className="pb-2 pl-2">
                  <span className="text-[9px] text-ink-light">DE: MAURO Y VERO</span><br />
                  "FELIZ CUMPLE VIEJA QUERIDA"
                </p>
              </div>
            </div>

            {/* Datos del Día */}
            <div className="border-2 border-ink-dark p-4 bg-paper-light/95 shadow-sm">
              <div className="flex items-center justify-center gap-2 border-b border-ink-dark mb-3 pb-2">
                <SunIcon width={18} height={18} className="text-ink-black" />
                <h4 className="headline-font text-base font-black uppercase">Datos del Día</h4>
              </div>
              <ul className="text-sm space-y-2.5 font-serif">
                <li className="border-l-2 border-ink-dark pl-2">
                  <span className="font-bold uppercase text-[10px] tracking-wider">Fecha:</span><br />
                  <span className="italic">1° de Enero de 1952</span>
                </li>
                <li className="border-l-2 border-ink-dark pl-2">
                  <span className="font-bold uppercase text-[10px] tracking-wider">Clima:</span><br />
                  <span className="italic">Sol radiante tucumano</span>
                </li>
                <li className="border-l-2 border-ink-dark pl-2">
                  <span className="font-bold uppercase text-[10px] tracking-wider">Temperatura:</span><br />
                  <span className="italic">32° C a la sombra</span>
                </li>
              </ul>
            </div>

            {/* Clasificado Vintage */}
            <div className="border border-ink-dark p-3 bg-paper-light text-center">
              <p className="text-[9px] uppercase font-bold border-b border-ink-dark pb-1 mb-2">Clasificado</p>
              <p className="font-serif text-xs leading-tight italic">
                "Se busca: persona capaz de querer como Marta.<br />
                Requisito: imposible de cumplir."
              </p>
            </div>
          </aside>
        </div>

        {/* Divider */}
        <div className="flex justify-center my-8">
          <OrnamentDivider width={200} height={24} className="text-ink-light" />
        </div>

        {/* SECCIÓN: LOS PIONEROS */}
        <section className="my-16 py-10 px-4 md:px-8 border-y-4 border-double border-ink-dark bg-paper-medium shadow-inner">
          <div className="text-center mb-10">
            <h3 className="headline-font text-2xl md:text-3xl font-black uppercase tracking-widest border-b-4 border-ink-dark inline-block px-6 md:px-10 pb-3">Los Pioneros</h3>
            <p className="text-sm italic font-serif mt-3 text-ink-medium">El Origen de la Estirpe Gettar</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start max-w-4xl mx-auto">
            {/* Ferez Gettar */}
            <div className="space-y-4">
              <div className="relative aspect-[3/4] border-4 border-ink-dark bg-paper-dark group overflow-hidden flex items-center justify-center shadow-xl">
                <div
                  className="relative w-full h-full cursor-pointer"
                  onClick={() => openLightbox([IMAGES.pioneers.ferez], 0, 'ferez-gettar')}
                >
                  <img
                    src={IMAGES.pioneers.ferez}
                    alt="Ferez Gettar"
                    className="w-full h-full object-cover sepia-photo"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-ink-black/0 group-hover:bg-ink-black/10 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-paper-light/95 px-4 py-2 border-2 border-ink-dark">
                      <p className="text-xs font-black uppercase tracking-wider">Click para ampliar</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center border-t-2 border-ink-dark pt-4">
                <h4 className="headline-font text-2xl font-black uppercase mb-1">Ferez Gettar</h4>
                <p className="text-[10px] font-bold uppercase tracking-widest text-ink-light mb-2">El Patriarca</p>
              </div>
            </div>

            {/* Ana Frasca */}
            <div className="space-y-4">
              <div className="relative aspect-[3/4] border-4 border-ink-dark bg-paper-dark group overflow-hidden flex items-center justify-center shadow-xl">
                <div
                  className="relative w-full h-full cursor-pointer"
                  onClick={() => openLightbox([IMAGES.pioneers.ana], 0, 'ana-frasca')}
                >
                  <img
                    src={IMAGES.pioneers.ana}
                    alt="Ana Frasca"
                    className="w-full h-full object-cover sepia-photo"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-ink-black/0 group-hover:bg-ink-black/10 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-paper-light/95 px-4 py-2 border-2 border-ink-dark">
                      <p className="text-xs font-black uppercase tracking-wider">Click para ampliar</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center border-t-2 border-ink-dark pt-4">
                <h4 className="headline-font text-2xl font-black uppercase mb-1">Ana Frasca</h4>
                <p className="text-[10px] font-bold uppercase tracking-widest text-ink-light mb-2">La Matriarca</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center max-w-3xl mx-auto">
            <div className="border-2 border-ink-dark p-6 bg-paper-light/60">
              <p className="font-serif italic text-base md:text-lg leading-relaxed">
                "De tierras lejanas y corazones valientes, Ferez y Ana forjaron el cimiento donde hoy florece nuestra historia.
                Su ejemplo es la brújula que guía a cada descendiente en este camino de honor y afecto."
              </p>
              <div className="flex justify-center mt-4">
                <OrnamentDivider width={150} height={20} className="text-ink-light" />
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN: CRÓNICA DE LAS RAÍCES - HERMANOS */}
        <section className="my-16 py-10 px-4 md:px-6 border-y-4 border-double border-ink-dark bg-paper-dark shadow-lg">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-5xl mx-auto">
            <div className="w-full md:w-1/4 flex justify-center">
              <div className="border-4 border-ink-dark p-4 bg-paper-medium/60 shadow-md">
                <TreeIcon width={100} height={100} className="text-ink-medium" />
              </div>
            </div>
            <div className="flex-1 space-y-5">
              <div className="text-center md:text-left">
                <h3 className="newspaper-title text-3xl md:text-5xl mb-2">Raíces</h3>
                <p className="headline-font text-xl md:text-2xl uppercase tracking-wide border-b-2 border-ink-dark inline-block pb-1">El Círculo Original</p>
              </div>
              <div className="font-serif text-base md:text-lg leading-relaxed text-justify space-y-4">
                <p className="first-letter:text-5xl first-letter:font-bold first-letter:mr-2 first-letter:float-left first-letter:leading-none first-letter:mt-1">
                  En el solar de los recuerdos, la estirpe se fortalece en el vínculo inquebrantable de los <span className="font-bold">seis hermanos</span>, ramas de un mismo tronco que desafían el tiempo.
                </p>
                <div className="bg-paper-medium/60 p-5 border-l-4 border-ink-dark italic shadow-sm">
                  <p className="mb-3">
                    Brillan hoy con luz presente <span className="font-bold headline-font text-lg md:text-xl not-italic border-b-2 border-ink-dark">Chacho, Lili y Gringo</span>, quienes junto a nuestra querida cumpleañera <span className="font-bold not-italic">Marta E Gettar</span>, custodian la risa y el legado de unión familiar.
                  </p>
                  <div className="border-t-2 border-dashed border-ink-dark/30 pt-3 mt-3">
                    <p className="text-ink-medium text-sm">
                      Y entre risas y anécdotas, mantenemos vivo el recuerdo alegre de <span className="headline-font font-bold not-italic text-base">Gustavo y Ana María</span>, presentes en cada historia compartida y en el espíritu festivo que caracteriza a esta familia.
                    </p>
                  </div>
                </div>
                <p className="text-center md:text-right font-black uppercase text-xs tracking-[0.4em] border-t border-ink-dark pt-3">Homenaje Permanente</p>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="flex justify-center my-10">
          <OrnamentDivider width={200} height={24} className="text-ink-light" />
        </div>

        {/* Legacy Section - Hijos y Nietos */}
        <LegacySection
          familyImages={IMAGES.family}
          onImageClick={(image, name) => openLightbox([image], 0, name)}
        />

        {/* Divider */}
        <div className="flex justify-center my-10">
          <OrnamentDivider width={200} height={24} className="text-ink-light" />
        </div>

        {/* SECCIÓN: GASTRONOMÍA */}
        <section className="my-16 py-10 px-4 md:px-8 border-y-4 border-double border-ink-dark bg-paper-light/40 shadow-inner">
          <div className="text-center mb-10">
            <div className="flex justify-center mb-4">
              <ChefHatIcon width={56} height={56} className="text-ink-medium" />
            </div>
            <h3 className="headline-font text-3xl md:text-4xl font-black uppercase tracking-widest border-b-4 border-ink-dark inline-block px-8 pb-3">
              La Mesa de Marta
            </h3>
            <p className="text-sm italic font-serif mt-3 text-ink-medium">
              Recetario de sabores que alimentan el alma
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Intro */}
            <div className="text-center max-w-3xl mx-auto mb-12 border-2 border-ink-dark p-6 bg-paper-medium">
              <p className="font-serif italic text-base md:text-lg leading-relaxed">
                "En la cocina de Marta no solo se preparan alimentos, se tejen historias y se forjan recuerdos.
                Cada plato lleva el sello inconfundible del amor materno, transmitido de generación en generación."
              </p>
            </div>

            {/* Platos en Grid de 3 columnas */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {/* Quipi */}
              <div className="border-4 border-ink-dark bg-paper-light p-5 shadow-md hover:shadow-xl transition-shadow">
                <h4 className="headline-font text-xl font-black uppercase text-center mb-2 border-b-2 border-ink-dark pb-2">
                  Quipi
                </h4>
                <p className="text-xs uppercase tracking-widest text-center text-ink-light mb-3 font-bold">
                  Tradición en eventos
                </p>
              </div>

              {/* Puré de Garbanzos */}
              <div className="border-4 border-ink-dark bg-paper-light p-5 shadow-md hover:shadow-xl transition-shadow">
                <h4 className="headline-font text-xl font-black uppercase text-center mb-2 border-b-2 border-ink-dark pb-2">
                  Puré de Garbanzos
                </h4>
                <p className="text-xs uppercase tracking-widest text-center text-ink-light mb-3 font-bold">
                  Cremosidad Sublime
                </p>
              </div>

              {/* Arroz Shari */}
              <div className="border-4 border-ink-dark bg-paper-light p-5 shadow-md hover:shadow-xl transition-shadow">
                <h4 className="headline-font text-xl font-black uppercase text-center mb-2 border-b-2 border-ink-dark pb-2">
                  Arroz Shari
                </h4>
                <p className="text-xs uppercase tracking-widest text-center text-ink-light mb-3 font-bold">
                  Especialidad de la Casa
                </p>
              </div>

              {/* Fideos al Horno */}
              <div className="border-4 border-ink-dark bg-paper-light p-5 shadow-md hover:shadow-xl transition-shadow">
                <h4 className="headline-font text-xl font-black uppercase text-center mb-2 border-b-2 border-ink-dark pb-2">
                  Fideos al Horno
                </h4>
                <p className="text-xs uppercase tracking-widest text-center text-ink-light mb-3 font-bold">
                  Clásico Infaltable
                </p>
              </div>

              {/* Arroz con Leche */}
              <div className="border-4 border-ink-dark bg-paper-light p-5 shadow-md hover:shadow-xl transition-shadow">
                <h4 className="headline-font text-xl font-black uppercase text-center mb-2 border-b-2 border-ink-dark pb-2">
                  Arroz con Leche
                </h4>
                <p className="text-xs uppercase tracking-widest text-center text-ink-light mb-3 font-bold">
                  Postre Legendario
                </p>
              </div>

              {/* Ensalada de Trigo */}
              <div className="border-4 border-ink-dark bg-paper-light p-5 shadow-md hover:shadow-xl transition-shadow">
                <h4 className="headline-font text-xl font-black uppercase text-center mb-2 border-b-2 border-ink-dark pb-2">
                  Ensalada de Trigo
                </h4>
                <p className="text-xs uppercase tracking-widest text-center text-ink-light mb-3 font-bold">
                  Acompañamiento Inconfundible
                </p>
              </div>

            </div>

            {/* Nota Final */}
            <div className="mt-10 text-center max-w-2xl mx-auto border-t-2 border-ink-dark pt-6">
              <p className="font-serif text-sm italic text-ink-medium leading-relaxed">
                <span className="font-bold not-italic text-base">Nota del Editor:</span> Se ruega a los lectores no intentar replicar
                estas recetas sin la supervisión directa de la chef Martuli. Los intentos previos han resultado
                en aproximaciones dignas, pero jamás en el sabor exacto del original.
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="flex justify-center my-10">
          <OrnamentDivider width={200} height={24} className="text-ink-light" />
        </div>

        {/* SECCIÓN: SUPER PODERES DE MARTA */}
        <section className="my-16 py-12 px-4 md:px-8 border-y-8 border-double border-ink-dark bg-gradient-to-b from-paper-dark to-paper-medium shadow-2xl relative overflow-hidden">

          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="border-4 border-ink-dark bg-ink-black text-paper-light inline-block px-8 py-4 shadow-xl mb-4">
                <p className="text-xs uppercase tracking-[0.3em] font-bold mb-1">Investigación Científica Extraordinaria</p>
                <h3 className="headline-font text-3xl md:text-5xl font-black uppercase tracking-wide">
                  Los Super Poderes de Marta
                </h3>
                <p className="text-xs uppercase tracking-[0.3em] font-bold mt-1">Fenómenos Inexplicables para la Ciencia Moderna</p>
              </div>
              <p className="text-sm italic font-serif text-ink-medium max-w-3xl mx-auto leading-relaxed">
                Nuestro equipo de corresponsales ha documentado capacidades que desafían toda lógica conocida.
                La Academia de Ciencias se niega a comentar, alegando que "simplemente no es posible".
              </p>
            </div>

            {/* Super Poderes Grid */}
            <div className="max-w-5xl mx-auto space-y-8">

              {/* Super Poder 1: Memoria de Cumpleaños */}
              <div className="border-4 border-ink-dark bg-paper-light shadow-xl relative">
                {/* Badge absoluto */}
                <div className="absolute top-3 right-3 bg-ink-black text-paper-light px-2 py-1 text-[9px] md:text-[10px] font-black uppercase tracking-wider shadow-md">
                  I
                </div>
                <div className="flex flex-col md:flex-row">
                  {/* Contenido */}
                  <div className="flex-1 p-6 md:p-8 pt-10 md:pt-8">
                    <div className="mb-4">
                      <h4 className="headline-font text-2xl md:text-3xl font-black uppercase leading-tight">
                        Memoria Genealógica Sobrehumana
                      </h4>
                    </div>
                    <div className="space-y-4 font-serif text-base leading-relaxed">
                      <p className="text-justify">
                        <span className="text-5xl font-black float-left mr-3 leading-[0.7] mt-1">E</span>
                        n un descubrimiento que ha dejado atónitos a los neurocientíficos de tres continentes,
                        la señora Marta E Gettar ha demostrado poseer una capacidad cerebral que excede en
                        <span className="font-bold"> 47.000% </span>
                        las facultades de memoria humana promedio.
                      </p>
                      <div className="border-l-4 border-ink-dark pl-4 bg-paper-medium/60 py-3">
                        <p className="italic">
                          No existe un solo cumpleaños en el árbol genealógico completo —incluyendo primos terceros,
                          cuñados de tíos políticos y el veterinario del perro del vecino— que escape de su registro mental.
                          Pero la habilidad no termina allí: además organiza, coordina y
                          <span className="font-bold not-italic"> EXIGE </span>
                          que cada miembro de la familia salude puntualmente.
                        </p>
                      </div>
                      <p className="text-sm border-t-2 border-ink-dark/30 pt-3 text-ink-medium">
                        <span className="font-bold uppercase text-xs tracking-wider">Testimonio del Dr. Cosito Comue (Universidad de Tucumán):</span>
                        "Hemos intentado mapear su red neuronal. Nuestros equipos se sobrecalentaron. Es imposible."
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Super Poder 2: Pronóstico del Clima */}
              <div className="border-4 border-ink-dark bg-paper-light shadow-xl relative">
                {/* Badge absoluto */}
                <div className="absolute top-3 right-3 bg-ink-black text-paper-light px-2 py-1 text-[9px] md:text-[10px] font-black uppercase tracking-wider shadow-md">
                  II
                </div>
                <div className="flex flex-col md:flex-row-reverse">
                  {/* Icono lateral */}
                  {/* Contenido */}
                  <div className="flex-1 p-6 md:p-8 pt-10 md:pt-8">
                    <div className="mb-4">
                      <h4 className="headline-font text-2xl md:text-3xl font-black uppercase leading-tight">
                        Clarividencia Meteorológica Absoluta
                      </h4>
                    </div>
                    <div className="space-y-4 font-serif text-base leading-relaxed">
                      <p className="text-justify">
                        <span className="text-5xl font-black float-left mr-3 leading-[0.7] mt-1">L</span>
                        a Oficina Nacional de Meteorología ha solicitado formalmente contratar a Marta como
                        consultora principal después de que predijera
                        <span className="font-bold"> 874 eventos climáticos consecutivos </span>
                        con exactitud milimétrica, superando a satélites de última generación.
                      </p>
                      <div className="border-l-4 border-ink-dark pl-4 bg-paper-medium/60 py-3">
                        <p className="italic">
                          Su método es inescrutable: observa el cielo brevemente, huele el aire,
                          y declara con autoridad papal si lloverá, nevará o caerán meteoritos.
                          Jamás se ha equivocado. Los radares doppler lloran de envidia.
                          El Servicio Meteorológico Nacional ha considerado cerrar operaciones
                          y simplemente <span className="font-bold not-italic">llamar a Marta cada mañana.</span>
                        </p>
                      </div>
                      <p className="text-sm border-t-2 border-ink-dark/30 pt-3 text-ink-medium">
                        <span className="font-bold uppercase text-xs tracking-wider">Declaración oficial:</span>
                        "Nuestros modelos computacionales son obsoletos. Ella ve el futuro atmosférico."
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Super Poder 3: Gestión Burocrática Universal */}
              <div className="border-4 border-ink-dark bg-paper-light shadow-xl relative">
                {/* Badge absoluto */}
                <div className="absolute top-3 right-3 bg-ink-black text-paper-light px-2 py-1 text-[9px] md:text-[10px] font-black uppercase tracking-wider shadow-md">
                  III
                </div>
                <div className="flex flex-col md:flex-row">
                  {/* Contenido */}
                  <div className="flex-1 p-6 md:p-8 pt-10 md:pt-8">
                    <div className="mb-4">
                      <h4 className="headline-font text-2xl md:text-3xl font-black uppercase leading-tight">
                        Omnipotencia Administrativa Total
                      </h4>
                    </div>
                    <div className="space-y-4 font-serif text-base leading-relaxed">
                      <p className="text-justify">
                        <span className="text-5xl font-black float-left mr-3 leading-[0.7] mt-1">E</span>
                        n un fenómeno que ha dejado perplejos a sociólogos y funcionarios públicos por igual,
                        Marta ha asumido el rol de
                        <span className="font-bold"> Gerente General de Trámites Familiares™</span>,
                        una posición que no figura en ningún organigrama conocido pero que resulta
                        absolutamente indispensable para el funcionamiento de todo el clan.
                      </p>
                      <div className="border-l-4 border-ink-dark pl-4 bg-paper-medium/60 py-3">
                        <p className="italic">
                          Renovación de documentos, turnos médicos, pagos de impuestos, reclamos a empresas de servicios,
                          inscripciones escolares, gestiones bancarias, trámites migratorios y consultas legales:
                          <span className="font-bold not-italic"> TODO </span>
                          pasa por su escritorio invisible. Maneja simultáneamente
                          <span className="font-bold not-italic"> 23 expedientes burocráticos </span>
                          de diferentes miembros de la familia sin confundir un solo papel.
                          Las oficinas públicas han comenzado a reconocerla y le asignan ventanilla preferencial
                          por "volumen de operaciones familiares".
                        </p>
                      </div>
                      <p className="text-sm border-t-2 border-ink-dark/30 pt-3 text-ink-medium">
                        <span className="font-bold uppercase text-xs tracking-wider">Confesión anónima de familiar:</span>
                        "No sé dónde está mi DNI. Pero Marta sí. Ella siempre sabe."
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Nota de cierre */}
            <div className="mt-12 max-w-3xl mx-auto border-4 border-double border-ink-black bg-ink-black text-paper-light p-6 text-center shadow-2xl">
              <p className="font-serif text-lg italic leading-relaxed mb-3">
                "La ciencia aún no puede explicar estos fenómenos.
                Los escépticos se han rendido. Los testigos permanecen asombrados."
              </p>
              <div className="border-t-2 border-paper-dark/50 pt-3 mt-3">
                <p className="text-xs uppercase tracking-[0.3em] font-black">
                  Investigación en curso • Actualización permanente • Misterio sin resolver
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="flex justify-center my-10">
          <OrnamentDivider width={200} height={24} className="text-ink-light" />
        </div>

        {/* Sección de Sociales - Fotos Adicionales */}
        {/* <section className="my-16 py-8 px-6 border-4 border-double border-ink-dark bg-paper-medium/50">
          <div className="text-center mb-8">
            <h3 className="headline-font text-3xl font-black uppercase tracking-widest border-b-4 border-ink-dark inline-block px-8 pb-2">Sociales</h3>
            <p className="text-sm italic font-serif mt-2 text-ink-medium">Momentos memorables de una vida plena</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div
              onClick={() => weddingFileInputRef.current?.click()}
              className="border-4 border-ink-dark flex flex-col cursor-pointer group bg-paper-light shadow-lg"
            >
              <div className="aspect-[4/3] border-b-4 border-ink-dark bg-paper-dark overflow-hidden flex items-center justify-center relative">
                {extraPhotos.wedding ? (
                  <img src={extraPhotos.wedding} alt="Casamiento" className="w-full h-full object-cover sepia-photo" />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6">
                    <WeddingRingsIcon width={56} height={56} className="mb-4 text-ink-light group-hover:scale-110 transition-transform" />
                    <div className="absolute inset-0 bg-ink-black/0 group-hover:bg-ink-black/5 transition-colors flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <CameraIcon width={40} height={40} className="text-ink-black" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-4 text-center bg-paper-light">
                <h4 className="font-bold uppercase text-sm headline-font mb-1">El Gran Día</h4>
                <p className="italic font-serif text-xs">Enlace matrimonial en San Miguel de Tucumán</p>
              </div>
              <input type="file" ref={weddingFileInputRef} className="hidden" onChange={(e) => handleImageChange(e, 'wedding')} accept="image/*" />
            </div>

            <div
              onClick={() => tripFileInputRef.current?.click()}
              className="border-4 border-ink-dark flex flex-col cursor-pointer group bg-paper-light shadow-lg"
            >
              <div className="aspect-[4/3] border-b-4 border-ink-dark bg-paper-dark overflow-hidden flex items-center justify-center relative">
                {extraPhotos.trip ? (
                  <img src={extraPhotos.trip} alt="Viaje" className="w-full h-full object-cover sepia-photo" />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6">
                    <CompassIcon width={56} height={56} className="mb-4 text-ink-light group-hover:scale-110 transition-transform" />
                    <div className="absolute inset-0 bg-ink-black/0 group-hover:bg-ink-black/5 transition-colors flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <CameraIcon width={40} height={40} className="text-ink-black" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-4 text-center bg-paper-light">
                <h4 className="font-bold uppercase text-sm headline-font mb-1">Aventuras</h4>
                <p className="italic font-serif text-xs">Viajes inolvidables por nuestra tierra</p>
              </div>
              <input type="file" ref={tripFileInputRef} className="hidden" onChange={(e) => handleImageChange(e, 'trip')} accept="image/*" />
            </div>
          </div>
        </section> */}

        {/* Mensaje Final */}
        <section className="my-16 p-8 md:p-12 border-8 border-double border-ink-dark bg-gradient-to-b from-white/50 to-[#faf7f0] text-center shadow-2xl">
          <div className="mb-6 flex justify-center">
            <CakeIcon width={64} height={64} className="text-ink-medium" />
          </div>
          <h3 className="headline-font text-4xl md:text-5xl font-black uppercase mb-6 tracking-wide">
            ¡Feliz Cumpleaños, Martuli!
          </h3>
          <div className="max-w-3xl mx-auto space-y-5 mb-12">
            <p className="font-serif italic text-xl md:text-2xl leading-relaxed border-y-2 border-ink-dark py-6">
              De tus hijos, nietos, hermanos y de quienes te precedieron en el cielo:
              gracias por ser el centro de nuestro universo.
            </p>
            <p className="font-serif text-lg leading-relaxed">
              Que este nuevo año de vida te traiga toda la felicidad que nos has dado multiplicada por mil.
              Que cada día siga siendo una celebración de tu existencia.
            </p>
          </div>

          {/* Image Slider */}
          <div className="mt-12">
            <ImageSlider
              title="Álbum de Recuerdos"
              subtitle="74 años de momentos inolvidables"
              images={IMAGES.gallery}
              onImageClick={(images, index) => openLightbox(images, index, 'album-recuerdos')}
            />
          </div>

          <div className="mt-10 flex justify-center">
            <HeartIcon width={48} height={48} className="text-ink-medium" />
          </div>
        </section>

        {/* Divider */}
        <div className="flex justify-center my-10">
          <OrnamentDivider width={200} height={24} className="text-ink-light" />
        </div>

        {/* Fe de Erratas - Tono humorístico */}
        <div className="max-w-2xl mx-auto border-4 border-double border-ink-dark p-5 my-12 text-center bg-paper-light shadow-md">
          <h5 className="font-bold uppercase text-xs mb-2 border-b-2 border-ink-dark pb-1 inline-block">Fe de Erratas</h5>
          <p className="text-sm font-serif leading-relaxed mt-3">
            La Redacción se disculpa por el error de cálculo en la nota principal. Subestimamos gravemente la magnitud del amor generado por esta mujer.
            <span className="font-bold"> No son 74 años, son 74 toneladas de cariño puro</span> derramadas sobre todos nosotros.
          </p>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-10 border-t-4 border-double border-ink-dark text-center space-y-4">
          <div className="flex justify-center mb-4">
            <OrnamentDivider width={180} height={20} className="text-ink-light" />
          </div>
          <p className="text-xs uppercase font-bold tracking-widest">© 1952 - 2026 The Martuli Times</p>
          <p className="text-[10px] uppercase tracking-wider text-ink-light">San Miguel de Tucumán, República Argentina</p>
          <p className="text-xs uppercase font-bold">Todos los Derechos Reservados</p>
          <div className="pt-4 border-t border-ink-lighter mt-4">
            <p className="italic tracking-wide font-serif text-sm">"Lo que se escribe en el corazón, nunca se borra de la historia."</p>
          </div>
        </footer>
      </div>

      {/* Lightbox */}
      <Lightbox
        images={lightboxImages}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        imageName={lightboxName}
      />
    </div>
  );
};

export default App;
