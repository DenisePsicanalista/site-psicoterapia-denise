
import React, { useEffect, useRef, useState } from 'react';
import { Fingerprint, CircleDot, Users } from 'lucide-react';

const serviceData = [
  {
    title: 'Psicanálise',
    icon: <Fingerprint className="w-8 h-8 stroke-[0.5px]" />,
    desc: 'Um espaço de escuta profunda, onde a fala encontra lugar e sentido. Aqui, a história de cada pessoa é acolhida com cuidado, respeitando o tempo de elaboração, os vínculos e os movimentos internos que pedem atenção.',
    benefit: 'O tempo da escuta'
  },
  {
    title: 'Hipnose Integrada',
    icon: <CircleDot className="w-8 h-8 stroke-[0.5px]" />,
    desc: 'Um recurso integrado que facilita o contato com camadas internas mais profundas, de forma consciente e segura. Nesse estado de atenção ampliada, percepções surgem com mais clareza, sempre em um trabalho colaborativo, respeitando seus limites e o ritmo do seu processo.',
    benefit: 'Acesso ao que já existe em você'
  },
  {
    title: 'Psicoterapia Sistêmica',
    icon: <Users className="w-8 h-8 stroke-[0.5px]" />,
    desc: 'Um olhar que amplia a compreensão sobre como você se move nas relações — familiares, afetivas, profissionais e sociais. O trabalho observa padrões, repetições e os lugares que você ocupa ao longo da vida, favorecendo escolhas mais conscientes, vínculos mais saudáveis e movimentos alinhados ao seu momento atual.',
    benefit: 'Compreensão das dinâmicas relacionais'
  },
];

export const Services: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const viewportCenter = window.innerHeight / 2;
      let closestIdx = null;
      let minDistance = Infinity;
      cardsRef.current.forEach((card, idx) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(viewportCenter - cardCenter);
        if (rect.top < window.innerHeight - 100 && rect.bottom > 100) {
          if (distance < minDistance) { minDistance = distance; closestIdx = idx; }
        }
      });
      setActiveIndex(closestIdx);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="pt-20 md:pt-32 pb-16 md:pb-24 px-6 bg-transparent relative" ref={sectionRef}>
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/[0.05] blur-[150px] rounded-full pointer-events-none -z-10"></div>
      
      <div className={`max-w-7xl mx-auto text-center mb-24 md:mb-32 transition-all duration-[2000ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <span className="text-xs uppercase tracking-[0.6em] text-blue-200/80 font-medium mb-6 block drop-shadow-[0_0_8px_rgba(147,197,253,0.2)]">
          Caminhos de Elaboração
        </span>
        <h2 className="text-5xl md:text-8xl font-serif font-light italic leading-tight">
          Métodos <span className="text-blue-300/30 mx-1">e</span> <span className="text-blue-300/50">Abordagens</span>
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20">
        {serviceData.map((s, idx) => {
          const isActive = activeIndex === idx;
          return (
            <div 
              key={idx} 
              ref={(el) => { cardsRef.current[idx] = el }}
              onMouseEnter={() => setActiveIndex(idx)}
              onMouseLeave={() => setActiveIndex(null)}
              className={`group relative transition-all duration-[1200ms] ${ isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-[0.98]' }`}
            >
              <div className={`absolute -top-12 left-1/2 -translate-x-1/2 w-full max-w-[200px] z-20 transition-all duration-700 pointer-events-none ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="glass-effect px-4 py-2.5 rounded-full border border-blue-300/40 bg-blue-900/20 backdrop-blur-xl shadow-[0_0_20px_rgba(147,197,253,0.2)]">
                  <p className="text-[9px] uppercase tracking-widest text-blue-50/80 text-center italic font-medium">{s.benefit}</p>
                </div>
              </div>

              <div className={`relative p-10 md:p-14 rounded-[50px] md:rounded-[70px] overflow-hidden transition-all duration-1000 border glass-effect h-full flex flex-col items-center text-center ${ isActive ? 'border-blue-300/50 scale-[1.03] shadow-[0_40px_100px_-20px_rgba(59,130,246,0.25)]' : 'border-white/5 scale-100' }`}>
                <div className={`absolute inset-0 bg-gradient-to-br from-blue-400/[0.08] via-blue-300/[0.03] to-transparent transition-opacity duration-1000 ${isActive ? 'opacity-100' : 'opacity-0'}`}></div>
                <div className={`relative z-10 mb-10 flex flex-col items-center transition-all duration-1000 ${isActive ? 'text-blue-200 scale-110' : 'text-white/30'}`}>
                  <div className={`${isActive ? 'animate-icon-service drop-shadow-[0_0_8px_rgba(147,197,253,0.5)]' : ''} transform transition-transform duration-[1500ms]`}>
                    {s.icon}
                  </div>
                </div>
                <h3 className={`relative z-10 text-xl md:text-2xl font-serif tracking-[0.1em] mb-6 transition-colors duration-700 font-light italic ${isActive ? 'text-blue-50' : 'text-white/80'}`}>
                  {s.title}
                </h3>
                <p className={`relative z-10 text-sm leading-relaxed font-extralight transition-colors duration-1000 max-w-xs ${isActive ? 'text-white/80' : 'text-white/40'}`}>
                  {s.desc}
                </p>
                <div className={`mt-auto pt-10 transition-all duration-1000 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-10 translate-y-2'}`}>
                  <div className={`w-px h-10 bg-gradient-to-b ${isActive ? 'from-blue-300/60' : 'from-white/30'} to-transparent mx-auto`}></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="max-w-7xl mx-auto mt-24 md:mt-32 px-6 opacity-40">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-200/60 to-transparent"></div>
      </div>
    </div>
  );
};
