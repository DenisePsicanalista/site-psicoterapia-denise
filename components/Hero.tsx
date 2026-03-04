
import React, { useState, useRef } from 'react';
import { Camera } from 'lucide-react';

export const Hero: React.FC = () => {
  const [imageSrc, setImageSrc] = useState<string>("./foto-denise.jpg");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageSrc(url);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center px-6 pt-32 md:pt-40 pb-8 md:pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        
        <div className="lg:col-span-7 space-y-16 z-10">
          <div className="space-y-10">
            <div className="space-y-4">
              <span className="text-xs md:text-[13px] uppercase tracking-[0.6em] text-blue-100 font-semibold block ml-1 drop-shadow-[0_0_15px_rgba(191,219,254,0.6)]">
                Psicanálise & Psicoterapia
              </span>
              <div className="h-px w-16 bg-gradient-to-r from-blue-300 to-transparent shadow-[0_0_8px_rgba(147,197,253,0.4)]"></div>
            </div>

            <h1 className="text-5xl md:text-8xl lg:text-9xl leading-[1.1] md:leading-[0.9] font-serif font-light text-white/95 max-w-2xl">
              Um espaço de <br className="hidden md:block" /> 
              <span className="italic font-normal text-blue-300/50">escuta</span> <span className="italic text-white/20 mx-2">e</span> <span className="text-[#FFFFF0] opacity-100 drop-shadow-[0_0_10px_rgba(255,255,240,0.3)]">presença</span>.
            </h1>
          </div>
          
          <div className="mt-12">
            {/* Texto atualizado e visibilidade aumentada: text-white/80 e font-light */}
            <p className="text-base md:text-xl font-light text-white/80 max-w-lg leading-relaxed border-l border-blue-300/40 pl-8 ml-2 opacity-100 drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]">
              Para processos que pedem tempo e cuidado, profundidade e cuidado.
            </p>
          </div>
        </div>
        
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative mt-12 lg:mt-0">
          <div className="relative w-full aspect-[3/4] max-w-[400px] group cursor-pointer" onClick={triggerFileInput}>
            <input type="file" ref={fileInputRef} onChange={handleImageChange} className="hidden" accept="image/*" />
            <div className="absolute inset-0 z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-black/60 backdrop-blur-md p-4 rounded-full border border-white/20">
                <Camera className="w-6 h-6 text-white" />
                <span className="absolute top-full mt-4 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-widest text-white whitespace-nowrap bg-black/80 px-3 py-1 rounded">Trocar sua Foto</span>
              </div>
            </div>
            <div className="absolute -inset-8 border border-blue-400/10 rounded-[40px] pointer-events-none -rotate-2"></div>
            <div className="absolute -inset-4 border border-blue-300/15 rounded-[35px] pointer-events-none rotate-3"></div>
            <div className="relative h-full w-full overflow-hidden rounded-[30px] shadow-[0_40px_100px_-20px_rgba(59,130,246,0.25)] bg-[#2c2e30]">
              <img src={imageSrc} alt="Denise Silva" onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"; }} className="w-full h-full object-cover object-top opacity-90 brightness-[1.05]" />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/10 via-transparent to-blue-300/5 opacity-40"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#2c2e30]/40 via-transparent to-transparent opacity-60"></div>
            </div>
            <div className="absolute -right-6 top-1/3 w-3 h-3 bg-blue-300/30 blur-[6px] rounded-full"></div>
            <div className="absolute -left-10 bottom-1/4 w-20 h-20 bg-blue-400/5 blur-[40px] rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
