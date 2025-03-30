import React from 'react';
import Link from 'next/link';
import { Montserrat, Lato } from "next/font/google";
import { FaInstagram, FaLinkedinIn, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaPhone, FaCalendarAlt } from "react-icons/fa";

// Configuración de fuentes
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600', '700'],
  display: 'swap',
  variable: '--font-montserrat',
});

const lato = Lato({ 
  subsets: ['latin'],
  weight: ['100', '400', '700'],
  variable: '--font-lato'
});

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={`w-full bg-[#212442] text-white ${montserrat.variable} ${lato.variable}`}>
      {/* Sección superior del footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Columna 1: Información de contacto */}
          <div className="flex flex-col">
            <div className="flex items-center mb-6">
              <img 
                src="/iso-moris.png" 
                alt="Logo Dr. López Moris" 
                className="h-16 w-16 mr-3 bg-white p-2 rounded"
              />
              <div>
                <h3 className={`text-xl font-bold ${montserrat.className}`}>Dr. Carlos López Moris</h3>
                <p className="text-gray-300 text-sm">Médico Otorrinolaringólogo | Especialista en Rinología</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 my-4">
              Con más de 15 años de trayectoria profesional, brindando atención médica de excelencia.
            </p>
            
            {/* Redes sociales */}
            <div className="flex space-x-4 mb-6 my-4">
              <a 
                href="https://instagram.com/drlopezmoris" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white bg-opacity-10 hover:bg-[#2bc37f] w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a 
                href="https://linkedin.com/in/drcarloslopezmoris" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white bg-opacity-10 hover:bg-[#2bc37f] w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-xl" />
              </a>
              <a 
                href="https://wa.me/5491172003461" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white bg-opacity-10 hover:bg-[#2bc37f] w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-xl" />
              </a>
            </div>
          </div>
          
          {/* Columna 2: Enlaces rápidos */}
          <div className="flex flex-col lg:pl-6 lg:ml-10">
            <h3 className={`text-xl font-bold mb-6 ${montserrat.className}`}>Enlaces rápidos</h3>
            <nav className="grid grid-cols-1 gap-y-3 gap-x-8">
              <Link href="/" className="text-gray-300 hover:text-[#2bc37f] transition-colors flex items-center">
                <span className="w-1.5 h-1.5 bg-[#2bc37f] rounded-full mr-2"></span>
                Inicio
              </Link>
              <Link href="/perfil" className="text-gray-300 hover:text-[#2bc37f] transition-colors flex items-center">
                <span className="w-1.5 h-1.5 bg-[#2bc37f] rounded-full mr-2"></span>
                Perfil
              </Link>
              <Link href="/reconocimientos" className="text-gray-300 hover:text-[#2bc37f] transition-colors flex items-center">
                <span className="w-1.5 h-1.5 bg-[#2bc37f] rounded-full mr-2"></span>
                Reconocimientos
              </Link>
              
              <Link href="/preguntas" className="text-gray-300 hover:text-[#2bc37f] transition-colors flex items-center">
                <span className="w-1.5 h-1.5 bg-[#2bc37f] rounded-full mr-2"></span>
                Preguntas Frecuentes
              </Link>
              
            </nav>
          </div>
          
          {/* Columna 3: Contacto directo */}
          <div className="flex flex-col">
            <h3 className={`text-xl font-bold mb-6 ${montserrat.className}`}>Contáctanos</h3>
            
            <div className="flex flex-col space-y-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-[#2bc37f] mt-1 mr-3" />
                <div>
                  <p className="font-semibold">CEMIC</p>
                  <p className="text-gray-300 text-sm">Av. Las Heras 2900. Palermo, Buenos Aires</p>
                  <p className="text-gray-300 text-sm">Mar - Vie: 14:00 - 17:00</p>
                  <p className="text-gray-300 text-sm">Talcahuano 1234, Buenos Aires</p>
                  <p className="text-gray-300 text-sm">Jue: 14:00 - 17:00</p>
                </div>
              </div>
              <a href="https://wa.me/5491152990000" className="flex items-center hover:text-[#2bc37f] transition-colors">
                <FaPhone className="text-[#2bc37f] mr-3" />
                <span>+54 15 5299-0000</span>
              </a>
              
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-[#2bc37f] mt-1 mr-3" />
                <div>
                  <p className="font-semibold">Dr. López Moris</p>
                  <p className="text-gray-300 text-sm">Pereyra Lucena 2535, Pb, "A". Palermo, Buenos Aires</p>
                  <p className="text-gray-300 text-sm">Mie: 8:00 - 19:30</p>
                </div>
              </div>
              
              <a href="https://wa.me/5491172003461" className="flex items-center hover:text-[#2bc37f] transition-colors">
                <FaPhone className="text-[#2bc37f] mr-3" />
                <span>+54 11 7200-3461</span>
              </a>
              
              <a href="mailto:drcarloslopezmoris@gmail.com" className="flex items-center hover:text-[#2bc37f] transition-colors">
                <FaEnvelope className="text-[#2bc37f] mr-3" />
                <span>drlopezmoris@gmail.com</span>
              </a>
              
              <a 
                href="https://wa.me/5491172003461" 
                className="flex items-center justify-center mt-4 bg-[#2bc37f] hover:bg-[#25a36d] text-white font-bold py-3 px-6 rounded-md transition-colors"
              >
                <FaCalendarAlt className="mr-2" />
                Agendar Cita
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Barra inferior con copyright */}
      <div className="bg-[#1a1c36] py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; {currentYear} Dr. Carlos López Moris. Todos los derechos reservados.
          </p>
          
          <div className="mt-3 md:mt-0">
            <p className="text-gray-400 text-xs">
              Desarrollado por <a href="#" className="text-[#2bc37f] hover:underline">Sintergia</a>
            </p>
          </div>
        </div>
      </div>
      
      {/* Botón flotante de WhatsApp */}
      <a 
        href="https://wa.me/5491172003461" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:bg-[#20ba5a] transition-colors z-50 flex items-center justify-center"
        aria-label="Contáctanos por WhatsApp"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
    </footer>
  );
}