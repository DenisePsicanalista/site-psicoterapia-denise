
import React, { useEffect, useState } from 'react';

export const BackgroundShapes: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Brilho superior esquerdo - Nuance Cinza-Marrom */}
      <div 
        className="blob bg-[#8d7e71] w-[600px] h-[600px] top-[-10%] left-[-15%]" 
        style={{ transform: `translate3d(0, ${scrollY * 0.12}px, 0)` }}
      />
      
      {/* Destaque central - Stone Warm */}
      <div 
        className="blob bg-[#5a544f] w-[800px] h-[800px] top-[30%] right-[10%] opacity-15" 
        style={{ transform: `translate3d(0, ${scrollY * -0.05}px, 0)` }}
      />

      {/* Nuance Azul Suave Restaurada */}
      <div 
        className="blob bg-blue-400/10 w-[1100px] h-[1100px] top-[15%] left-[-5%] mix-blend-screen opacity-20" 
        style={{ transform: `translate3d(0, ${scrollY * 0.08}px, 0)` }}
      />
      
      {/* Canto inferior direito - Taupe Pálido */}
      <div 
        className="blob bg-[#7a6d61] w-[500px] h-[500px] bottom-[-5%] right-[-5%] opacity-10" 
        style={{ transform: `translate3d(0, ${scrollY * -0.1}px, 0)` }}
      />
    </div>
  );
};
