import React, { useState } from 'react';
import bannerImg from './assets/hero/banner.png?format=webp&quality=80&w=1920';
import nosotrosImg from './assets/hero/nosotros.png?format=webp&quality=80&w=800';
import { 
  Sparkles, 
  Heart, 
  Users, 
  CheckCircle2,
  Clock,
  Calendar,
  MessageCircle,
  ArrowRight,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  HeaterIcon,
  LucideTorus,
  PlaneLandingIcon,
  HeartMinusIcon
} from 'lucide-react';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';

const App = () => {
  const [formState, setFormState] = useState({
    name: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  // Business Data
  const businessInfo = {
    name: "Sweet Harmony &bull; Pieles reales no perfectas",
    phone: "573195369250",
    address: "Carrera 33B # 43C - 36 Apto. 301 Sector San Miguel / El Carmen de Viboral - Antioquia",
    instagram: "@sweetharmony.com.co"
  };

  const services = [
    {
      title: "Masajes Relajantes",
      description: "Terapia manual diseñada para aliviar el estrés y la tensión muscular profunda.",
      icon: <Heart className="w-6 h-6" />,
      price: "$45.00"
    },
    {
      title: "Tratamientos Faciales",
      description: "Limpieza profunda y nutrición para una piel radiante y saludable.",
      icon: <Sparkles className="w-6 h-6" />,
      price: "$60.00"
    },
    {
      title: "Aromaterapia",
      description: "Uso de aceites esenciales naturales para equilibrar cuerpo y mente.",
      icon: <CheckCircle2 className="w-6 h-6" />,
      price: "$35.00"
    },
    {
      title: "Terapia de Piedras",
      description: "Piedras volcánicas calientes para una relajación total del sistema nervioso.",
      icon: <Clock className="w-6 h-6" />,
      price: "$70.00"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const sendToWhatsApp = (e) => {
    e.preventDefault();
    const { name, service, date, time, message } = formState;
    
    const text = `Hola Sweet Harmony! ✨
Deseo agendar una cita:
👤 *Nombre:* ${name}
💆‍♂️ *Servicio:* ${service}
📅 *Fecha:* ${date}
⏰ *Hora:* ${time}
💬 *Nota adicional:* ${message || 'Sin comentarios'}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${businessInfo.phone}?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-rose-100">
      <Header />
      
      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-rose-50 via-stone-50 to-rose-100">
        {/* Patrón decorativo de fondo */}
        <div className="absolute inset-0 z-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(251, 113, 133, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.15) 0%, transparent 50%),
                           radial-gradient(circle at 40% 20%, rgba(244, 114, 182, 0.1) 0%, transparent 50%)`
        }}>
          <div className="absolute inset-0 bg-gradient-to-r from-stone-50 via-stone-50/80 to-transparent z-10" />
          <img 
            src={bannerImg} 
            alt="Spa environment" 
            loading="eager"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="inline-flex items-center space-x-2 bg-rose-100 text-rose-700 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
              <HeartMinusIcon size={14} />
              <span>Bienvenido al Bienestar</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-stone-900 leading-[1.1]">
              Encuentra tu <span className="text-rose-600 italic">Equilibrio</span> Perfecto
            </h1>
            <p className="text-xl text-stone-600 max-w-lg leading-relaxed">
              Un santuario diseñado para desconectar del ruido exterior y reconectar con tu paz interior a través de terapias integrales.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#agendate" className="flex items-center justify-center space-x-2 bg-stone-900 text-white px-8 py-4 rounded-full font-bold hover:bg-stone-800 transition-all shadow-xl group">
                <span>Reserva tu experiencia</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#servicios" className="flex items-center justify-center space-x-2 bg-white border border-stone-200 text-stone-700 px-8 py-4 rounded-full font-bold hover:bg-stone-50 transition-all shadow-sm">
                Ver servicios
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Nosotros Section */}
      <section id="nosotros" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-rose-100 rounded-full -z-10" />
              <div className="rounded-3xl shadow-2xl w-full h-[500px] bg-gradient-to-br from-rose-100 via-stone-100 to-rose-50 overflow-hidden">
                <img 
                  src={nosotrosImg} 
                  alt="Nosotros" 
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-stone-900 text-white p-8 rounded-2xl shadow-xl max-w-[240px]">
                <p className="text-3xl font-serif font-bold text-rose-300">2+</p>
                <p className="text-sm font-medium opacity-80 uppercase tracking-widest mt-1">Años transformando vidas</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-4xl font-serif font-bold text-stone-900">Nuestra Historia</h2>
              <p className="text-lg text-stone-600 leading-relaxed">
                Sweet Harmony nació de la visión de crear un refugio urbano donde la ciencia del bienestar se encuentra con el arte de la relajación. Creemos que el cuidado personal no es un lujo, sino una necesidad vital.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                <div className="flex space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-rose-50 text-rose-500 rounded-xl flex items-center justify-center">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-800">Expertos Reales</h4>
                    <p className="text-sm text-stone-500">Terapeutas certificados con pasión por el cuidado.</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-rose-50 text-rose-500 rounded-xl flex items-center justify-center">
                    <Heart size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-800">Atención Ética</h4>
                    <p className="text-sm text-stone-500">Productos orgánicos y procesos sostenibles.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-4 text-center">Nuestros Servicios</h2>
            <div className="w-20 h-1 bg-rose-400 mx-auto rounded-full mb-6" />
            <p className="text-stone-600">Ofrecemos una gama completa de terapias diseñadas para restaurar tu vitalidad y serenidad.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-14 h-14 bg-stone-50 text-rose-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">{service.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex justify-between items-center pt-4 border-t border-stone-50">
                  <span className="font-bold text-rose-600">{service.price}</span>
                  <a href="#agendate" className="text-stone-400 hover:text-rose-500 transition-colors">
                    <Calendar size={20} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="agendate" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-stone-900 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            
            {/* Form Info Sidebar */}
            <div className="lg:w-1/3 bg-stone-800 p-12 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-serif font-bold mb-6">Agéndate Hoy</h2>
                <p className="text-stone-400 mb-10">
                  Completa tus datos y recibirás una confirmación inmediata por WhatsApp. ¡Estamos ansiosos de verte!
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                      <Phone size={18} className="text-rose-300" />
                    </div>
                    <span>{businessInfo.phone}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                      <MapPin size={18} className="text-rose-300" />
                    </div>
                    <span className="text-sm">{businessInfo.address}</span>
                  </div>
                </div>
              </div>

              <div className="pt-12 border-t border-white/10 mt-12">
                <p className="text-xs uppercase tracking-widest text-stone-500 mb-4">Síguenos en redes</p>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-rose-300 transition-colors"><Instagram size={24} /></a>
                  <a href="#" className="hover:text-rose-300 transition-colors"><Facebook size={24} /></a>
                </div>
              </div>
            </div>

            {/* Actual Form */}
            <div className="lg:w-2/3 p-12 bg-white">
              <form onSubmit={sendToWhatsApp} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-stone-700">Nombre Completo</label>
                  <input 
                    required
                    type="text" 
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    placeholder="Ej. María García"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-rose-200 focus:border-rose-400 outline-none transition-all"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-stone-700">Servicio de Interés</label>
                  <select 
                    required
                    name="service"
                    value={formState.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-rose-200 focus:border-rose-400 outline-none transition-all appearance-none bg-white"
                  >
                    <option value="">Selecciona un servicio</option>
                    {services.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-stone-700">Fecha Preferida</label>
                  <input 
                    required
                    type="date" 
                    name="date"
                    value={formState.date}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-rose-200 focus:border-rose-400 outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-stone-700">Hora</label>
                  <input 
                    required
                    type="time" 
                    name="time"
                    value={formState.time}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-rose-200 focus:border-rose-400 outline-none transition-all"
                  />
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-stone-700">Comentarios Adicionales (Opcional)</label>
                  <textarea 
                    name="message"
                    value={formState.message}
                    onChange={handleInputChange}
                    rows="3"
                    placeholder="¿Alguna condición especial o preferencia?"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-rose-200 focus:border-rose-400 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <div className="md:col-span-2 pt-4">
                  <button 
                    type="submit" 
                    className="w-full bg-rose-500 text-white py-4 rounded-xl font-bold flex items-center justify-center space-x-3 hover:bg-rose-600 transition-all shadow-lg shadow-rose-200"
                  >
                    <MessageCircle size={22} />
                    <span>Confirmar por WhatsApp</span>
                  </button>
                  <p className="text-center text-stone-400 text-xs mt-4">Al hacer clic, serás redirigido a la aplicación de WhatsApp.</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;
