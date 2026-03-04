
import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const quotes = [
  {
    text: "Sou grato pelo auxílio que recebi num momento em que realmente precisava. Eu nem sabia exatamente do que precisava, e, através da terapia, fui conseguindo desembaraçar os nós, os medos e as dúvidas.",
    author: "Nimrod",
  },
  {
    text: "Desde o primeiro contato foi diferente: sensibilidade, conhecimento e presença. Um processo profundo de autoconhecimento, que me ajudou a enxergar a vida com mais plenitude.",
    author: "Juliana",
  },
  {
    text: "Denise é uma profissional iluminada, daquelas que nos pega pelas mãos e nos convida a caminhar por estradas desconhecidas. Um acompanhamento que conduz ao autoconhecimento com carinho, presença e amor.",
    author: "Fabio",
  },
  {
    text: "Me ajudou a ver meus pontos fortes, encarar meus problemas e colocar ponto final em situações onde antes só havia vírgulas. Cada encontro foi uma descoberta.",
    author: "Fabiana",
  },
  {
    text: "Um processo de autoconhecimento que vem transformando minha vida. As técnicas ajudam muito e despertam um cuidado comigo mesma que antes eu não tinha.",
    author: "Jessica",
  },
  {
    text: "Trabalha as questões de forma muito assertiva, cuidando das diferentes camadas — mental, emocional e sistêmica. Sempre trazendo luz para lugares antes obscuros da psique.",
    author: "Irene",
  }
];

const TestimonialItem: React.FC<{ quote: typeof quotes[0] }> = ({ quote }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { 
        threshold: 0.2,
        rootMargin: '0px 0px -10% 0px'
      }
    );
    if (itemRef.current) observer.observe(itemRef.current);
    return () => { if (itemRef.current) observer.unobserve(itemRef.current); };
  }, []);

  return (
    <div 
      ref={itemRef}
      className={`min-w-full snap-center px-4 md:px-20 flex items-center justify-center transition-all duration-[1000ms] ease-out ${
        isVisible 
          ? 'opacity-100 scale-100 translate-y-0' 
          : 'opacity-0 scale-[0.99] translate-y-4 blur-[4px]'
      }`}
    >
      <div className={`relative w-full max-w-3xl group cursor-default transition-all duration-[1200ms] p-10 md:p-24 
        bg-blue-400/[0.04] backdrop-blur-[60px]
        rounded-[50px] overflow-hidden
        ${isVisible ? 'shadow-[0_0_80px_rgba(147,197,253,0.05),0_40px_120px_-20px_rgba(0,0,0,0.1)]' : 'shadow-none'}`}>
        
        <div className={`absolute inset-0 bg-blue-500/[0.015] transition-opacity duration-[1500ms] ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}></div>
        
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-300/[0.05] via-transparent to-white/[0.01] pointer-events-none"></div>
        
        <div className={`absolute -inset-full bg-gradient-to-r from-transparent via-blue-100/[0.03] to-transparent rotate-45 transition-transform duration-[4000ms] ease-in-out ${
          isVisible ? 'translate-x-[250%]' : '-translate-x-full'
        }`}></div>

        <div className={`absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-300/[0.06] blur-[140px] rounded-full transition-opacity duration-[2000ms] ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}></div>
        
        <div className={`absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-blue-400/[0.04] blur-[120px] rounded-full transition-opacity duration-[2500ms] delay-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}></div>

        <span className={`absolute -top-2 left-1/2 -translate-x-1/2 text-[5rem] md:text-[8rem] font-serif italic select-none pointer-events-none transition-all duration-[1000ms] ${
          isVisible ? 'text-blue-100/10 translate-y-0 opacity-100' : 'text-blue-300/0 translate-y-6 opacity-0'
        }`}>“</span>
        
        <div className="relative z-10 pt-4 text-center">
          <p className={`text-xl md:text-3xl font-serif font-light italic leading-relaxed tracking-wide transition-all duration-[800ms] ${
            isVisible ? 'text-white/95 scale-100' : 'text-white/0 scale-[0.99]'
          }`}>
            {quote.text}
          </p>
          
          <div className="mt-16 flex flex-col items-center gap-6">
            <div className={`h-[0.5px] transition-all duration-[1000ms] ${
              isVisible ? 'w-20 bg-blue-200/25' : 'w-0 bg-white/0'
            }`}></div>
            
            <span className={`text-[11px] md:text-xs uppercase tracking-[0.4em] font-light transition-all duration-[1500ms] ${
              isVisible ? 'text-blue-50/50 translate-y-0' : 'text-white/0 translate-y-2'
            }`}>
              {quote.author}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Testimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeaderVisible(true); },
      { threshold: 0.05 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => { if (headerRef.current) observer.unobserve(headerRef.current); };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-8 pb-12 md:pt-12 md:pb-20 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-400/[0.01] blur-[300px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div 
          ref={headerRef}
          className={`text-center mb-6 md:mb-8 transition-all duration-[1500ms] ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-6xl md:text-9xl font-serif font-light italic text-white/95 leading-tight">
            Eco da <span className="text-blue-300/50">Alma</span>
          </h2>
          {/* Frase 'Vozes do processo' iluminada com brilho e cor mais nítida */}
          <p className="mt-2 text-xs md:text-sm uppercase tracking-[0.6em] font-medium text-blue-100/80 drop-shadow-[0_0_12px_rgba(191,219,254,0.6)]">
            Vozes do processo
          </p>
          <div className="h-[0.5px] w-12 bg-gradient-to-r from-transparent via-blue-200/20 to-transparent mx-auto mt-4"></div>
        </div>
        
        <div className="relative">
          <div className="absolute inset-y-0 left-0 md:-left-8 flex items-center z-20">
            <button 
              onClick={() => scroll('left')}
              className="p-5 md:p-6 rounded-full border border-blue-400/10 bg-blue-500/[0.02] backdrop-blur-3xl hover:border-blue-300/40 hover:bg-blue-400/10 hover:text-white transition-all duration-700 text-white/20 group/btn"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-500 group-hover/btn:-translate-x-2" />
            </button>
          </div>

          <div 
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory pt-0 pb-0 px-4 md:px-0 testimonial-scrollbar scroll-smooth"
            style={{ scrollbarWidth: 'none' }}
          >
            {quotes.map((q, idx) => (
              <TestimonialItem key={idx} quote={q} />
            ))}
          </div>

          <div className="absolute inset-y-0 right-0 md:-right-8 flex items-center z-20">
            <button 
              onClick={() => scroll('right')}
              className="p-5 md:p-6 rounded-full border border-blue-400/10 bg-blue-500/[0.03] backdrop-blur-3xl hover:border-blue-300/40 hover:bg-blue-400/10 hover:text-white transition-all duration-700 text-white/20 group/btn"
              aria-label="Próximo"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-500 group-hover/btn:translate-x-2" />
            </button>
          </div>
          
          <div className="flex justify-center gap-6 mt-12 md:mt-16">
            {quotes.map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-blue-200/10 transition-all duration-700"></div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .testimonial-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .testimonial-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};
