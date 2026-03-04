
import React from 'react';

interface NavbarProps {
  scrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const navItems = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 px-6 py-6 md:px-12 md:py-8 ${
        scrolled ? 'bg-[#2c2e30]/80 backdrop-blur-2xl border-b border-white/5 py-4 md:py-5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="text-sm md:text-base font-serif tracking-[0.3em] text-white/90 uppercase transition-all duration-700">
          Denise Silva
        </a>
        
        <ul className="hidden md:flex space-x-12">
          {navItems.map((item) => (
            <li key={item.name}>
              <a 
                href={item.href} 
                className="text-[10px] uppercase tracking-[0.3em] text-white/40 hover:text-white transition-all duration-500"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
