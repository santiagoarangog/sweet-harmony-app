import React, { useState } from 'react';
import { MessageCircle, Navigation, X } from 'lucide-react';

const FloatingButtons = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const businessInfo = {
    phone: "573195369250",
    address: "Carrera 33B # 43C - 36, El Carmen de Viboral, Antioquia"
  };

  const handleWhatsApp = () => {
    const text = `Hola Sweet Harmony! ✨

Me gustaría agendar una cita para uno de sus servicios.`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${businessInfo.phone}?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleWaze = () => {
    const wazeUrl = 'https://www.waze.com/es-419/live-map/directions?to=ll.6.093657%2C-75.339625';
    window.open(wazeUrl, '_blank');
  };

  return (
    <>
      {/* Botones expandidos */}
      <div className={`fixed bottom-24 right-6 z-50 flex flex-col items-end space-y-3 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        {/* Botón Waze */}
        <button
          onClick={handleWaze}
          className="group bg-sky-500 hover:bg-sky-600 text-white rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 min-w-[140px]"
        >
          <Navigation size={20} />
          <span className="font-medium text-sm">Waze</span>
        </button>

        {/* Botón WhatsApp */}
        <button
          onClick={handleWhatsApp}
          className="group bg-green-500 hover:bg-green-600 text-white rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 min-w-[140px]"
        >
          <MessageCircle size={20} />
          <span className="font-medium text-sm">WhatsApp</span>
        </button>
      </div>

      {/* Botón principal */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 bg-rose-600 hover:bg-rose-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}
      >
        {isOpen ? <X size={24} /> : (
          <div className="flex items-center justify-center">
            <MessageCircle size={24} />
          </div>
        )}
      </button>
    </>
  );
};

export default FloatingButtons;
