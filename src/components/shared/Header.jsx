import React, { useState, useEffect } from 'react';
import { Menu, X, Speech, Heart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-rose-200 rounded-full flex items-center justify-center">
            <img src="/logo_sweet.png" alt="Sweet Harmony Logo" className="text-rose-600 w-18 h-12" />
          </div>
          <span className="text-2xl font-serif font-bold tracking-tight text-stone-800">Sweet Harmony</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center font-medium text-stone-600">
          <a href="#inicio" className="hover:text-rose-500 transition-colors">Inicio</a>
          <a href="#nosotros" className="hover:text-rose-500 transition-colors">Nosotros</a>
          <a href="#servicios" className="hover:text-rose-500 transition-colors">Servicios</a>
          <a href="#agendate" className="bg-rose-500 text-white px-6 py-2 rounded-full hover:bg-rose-600 transition-all shadow-md hover:shadow-lg">
            Agéndate
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-stone-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-stone-100 p-6 flex flex-col space-y-4 shadow-xl">
          <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Inicio</a>
          <a href="#nosotros" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Nosotros</a>
          <a href="#servicios" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Servicios</a>
          <a href="#agendate" onClick={() => setIsMenuOpen(false)} className="bg-rose-500 text-white px-6 py-3 rounded-xl text-center font-bold">
            Agéndate Ahora
          </a>
        </div>
      )}
    </nav>
  );
};

export default Header;
