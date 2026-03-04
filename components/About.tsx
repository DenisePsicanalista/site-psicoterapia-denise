
import React, { useEffect, useRef, useState } from 'react';

export const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  return (
    <div className="pt-20 md:pt-32 pb-12 md:pb-16 px-6 relative overflow-hidden" ref={sectionRef}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-500/[0.02] blur-[120px] rounded-full -z-10"></div>
      
      <div className={`max-w-5xl mx-auto transition-all duration-[2500ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
        <div className="flex flex-col items-center text-center space-y-10 md:space-y-16">
          <div className="space-y-6">
            <div className="flex flex-col items-center">
              {/* Ajustado para maior visibilidade: opacidade aumentada (80%), peso da fonte para medium e brilho intensificado */}
              <span className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-blue-100/80 font-medium block mb-3 drop-shadow-[0_0_15px_rgba(191,219,254,0.45)]">
                Trajetória e Presença
              </span>
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-blue-200/40 to-transparent mt-1 shadow-[0_0_8px_rgba(147,197,253,0.3)]"></div>
            </div>
            <h2 className="text-5xl md:text-8xl font-serif font-light italic text-white/95">
              Essência <span className="text-blue-300/30 mx-1">e</span> <span className="text-blue-300/50">cuidado</span>
            </h2>
          </div>

          <div className="space-y-14 text-xl md:text-3xl font-light text-white/80 leading-relaxed font-serif max-w-4xl">
            <div className="relative border-l border-blue-400/20 pl-10 md:pl-20 py-6 text-left transition-all duration-1000 group">
              <p className="first-letter:text-7xl first-letter:font-serif first-letter:mr-5 first-letter:float-left first-letter:text-blue-300/70 first-letter:leading-none transition-colors duration-1000">
                Sou Denise Silva, acompanho pessoas em processos de autoconhecimento e reorganização interna há mais de 15 anos. Meu trabalho nasce da escuta atenta e do respeito à história de cada um, integrando a psicanálise, a psicoterapia sistémica e a hipnose como recursos a serviço da consciência e do movimento pessoal.
              </p>
              <div className="absolute top-0 left-[-1px] w-[2px] h-full bg-gradient-to-b from-transparent via-blue-400/40 to-transparent shadow-[0_0_10px_rgba(147,197,253,0.2)]"></div>
            </div>
            <p className="text-lg md:text-2xl text-white/70 transition-colors duration-1000 hover:text-white/95 max-w-3xl mx-auto">
              Acredito que cada pessoa carrega sua própria forma de sentir, viver e se relacionar com o mundo. Por isso, não trabalho a partir de fórmulas prontas, mas de encontros reais, onde é possível olhar para padrões, vínculos e repetições com mais clareza e cuidado.
            </p>
          </div>
        </div>

        <div className="mt-24 md:mt-32 flex items-center gap-8 opacity-20">
           <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
           <div className="w-1.5 h-1.5 rounded-full border border-blue-200"></div>
           <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};
