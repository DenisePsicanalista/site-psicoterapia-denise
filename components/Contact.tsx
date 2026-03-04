
import React from 'react';
import { MessageCircle, ArrowRight, Instagram } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="pt-12 pb-40 md:pt-20 md:pb-64 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/[0.02] blur-[150px] -z-10 rounded-full"></div>
      <div className="max-w-3xl mx-auto text-center space-y-12 md:space-y-16 relative z-10">
        <div className="space-y-8 md:space-y-10">
          <div className="flex flex-col items-center">
            <span className="text-[10px] uppercase tracking-[0.7em] text-blue-200/70 font-medium block mb-8 drop-shadow-[0_0_8px_rgba(147,197,253,0.2)]">
              Inicie o Diálogo
            </span>
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-blue-300/20 to-transparent"></div>
          </div>
          <h2 className="text-6xl md:text-9xl font-serif font-light italic leading-tight text-white/95">
            Presença <span className="text-blue-300/30 mx-1">e</span> <span className="text-blue-300/50">Escuta</span>
          </h2>
          {/* Ajustado para text-white/60 para leve transparência, mantendo font-light e drop-shadow para nitidez */}
          <p className="text-lg md:text-2xl text-white/60 font-light leading-relaxed max-w-xl mx-auto italic drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)] antialiased">
            "O encontro terapêutico começa no primeiro movimento. Sinta-se à vontade para me escrever."
          </p>
        </div>
        <div className="flex flex-col items-center pt-2 md:pt-4">
          <a href="https://wa.me/5511980325578?text=Ol%C3%A1%2C%20Denise.%20Encontrei%20seu%20site%20e%20senti%20vontade%20de%20conversar%20sobre%20um%20poss%C3%ADvel%20acompanhamento%20terap%C3%AAutico." target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center gap-8 px-14 py-7 rounded-full glass-effect border border-blue-400/20 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5),0_0_20px_rgba(147,197,253,0.15)] hover:border-blue-300/60 hover:shadow-[0_30px_70px_-10px_rgba(0,0,0,0.6),0_0_40px_rgba(147,197,253,0.4)] transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/[0.08] to-blue-300/[0.08] opacity-70 rounded-full"></div>
            <div className="absolute inset-0 bg-blue-400/[0.1] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full blur-md"></div>
            <div className="relative z-10 w-12 h-12 flex items-center justify-center bg-white/5 rounded-full group-hover:bg-blue-400/30 transition-colors duration-500 shadow-[inset_0_0_10px_rgba(255,255,255,0.05)]">
              <MessageCircle className="w-5 h-5 text-white animate-pulse-fast drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
            </div>
            <div className="relative z-10 flex flex-col items-start text-left">
              {/* Fonte alterada para font-sans com uppercase e tracking ampliado para um visual moderno e limpo */}
              <span className="text-xs md:text-sm font-sans font-medium uppercase tracking-[0.25em] text-white group-hover:text-blue-50 transition-colors duration-500">
                Conversar pelo WhatsApp
              </span>
            </div>
            <ArrowRight className="relative z-10 w-4 h-4 text-blue-300/40 group-hover:text-blue-200 transition-all duration-500 group-hover:translate-x-1" />
          </a>
          <div className="mt-16 md:mt-20">
            {/* Botão do Instagram reduzido: ícone menor (w-4), texto menor (9px) e gap reduzido */}
            <a href="https://www.instagram.com/deniholistica/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2.5 opacity-60 hover:opacity-100 transition-all duration-700 group/insta">
              <Instagram className="w-4 h-4 text-white stroke-[1.5px] group-hover:text-blue-200 transition-colors drop-shadow-[0_0_6px_rgba(255,255,255,0.2)]" />
              <span className="text-[9px] uppercase tracking-[0.5em] font-medium text-white/90 group-hover:text-blue-100 transition-colors">Instagram</span>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-blue-400/[0.03] blur-[120px] rounded-full pointer-events-none"></div>
    </div>
  );
};
