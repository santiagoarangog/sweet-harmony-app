import React from 'react';
import { Clock, MapPin, Phone, Sparkles, ExternalLink } from 'lucide-react';

const Footer = () => {
  const businessInfo = {
    name: "Sweet Harmony",
    phone: "573001234567",
    address: "Calle de la Armonía #123, Ciudad",
    instagram: "@sweetharmony_spa"
  };

  return (
    <footer className="bg-stone-50 pt-20 pb-10 border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-rose-200 rounded-full flex items-center justify-center">
                <Sparkles className="text-rose-600 w-4 h-4" />
              </div>
              <span className="text-xl font-serif font-bold tracking-tight text-stone-800">Sweet Harmony</span>
            </div>
            <p className="text-stone-500 max-w-sm leading-relaxed">
              Transformando la rutina diaria en momentos extraordinarios de paz y restauración personal. Tu bienestar es nuestra única prioridad.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-stone-900 mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-4 text-stone-500 text-sm">
              <li><a href="#inicio" className="hover:text-rose-500 transition-colors">Inicio</a></li>
              <li><a href="#nosotros" className="hover:text-rose-500 transition-colors">Nosotros</a></li>
              <li><a href="#servicios" className="hover:text-rose-500 transition-colors">Nuestros Servicios</a></li>
              <li><a href="#agendate" className="hover:text-rose-500 transition-colors">Reservas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-stone-900 mb-6">Contacto Directo</h4>
            <ul className="space-y-4 text-stone-500 text-sm">
              <li className="flex items-center space-x-3">
                <Phone size={16} />
                <span>{businessInfo.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={16} />
                <span>{businessInfo.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock size={16} />
                <span>Lun - Sáb: 9am - 7pm</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row justify-between items-center text-stone-400 text-sm">
          <p>&copy; 2024 Sweet Harmony. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-stone-600 transition-colors flex items-center space-x-1">
              <span>Privacidad</span>
              <ExternalLink size={12} />
            </a>
            <a href="#" className="hover:text-stone-600 transition-colors flex items-center space-x-1">
              <span>Términos</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
