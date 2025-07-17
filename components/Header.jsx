'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Montserrat } from "next/font/google";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock, FaBars, FaTimes } from "react-icons/fa";


// Configuración de la fuente Montserrat con solo los pesos necesarios
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600', '700'],
  display: 'swap',
  variable: '--font-montserrat', // Definir variable CSS para uso global
});

// Componentes UI simplificados
const Navbar = ({ className, children }) => <nav className={className}>{children}</nav>;
const NavbarContent = ({ className, justify = "start", children }) => {
  const justifyClass = 
    justify === "start" ? "justify-start" : 
    justify === "center" ? "justify-center" : "justify-end";
  return <div className={`flex ${className} ${justifyClass}`}>{children}</div>;
};
const NavbarItem = ({ children, className }) => <div className={`navbar-item ${className || ''}`}>{children}</div>;
const Button = ({ as, href, className, children, onClick }) => {
  const Component = as || 'button';
  return (
    <Component href={href} className={className} onClick={onClick}>
      {children}
    </Component>
  );
};

// Componente Logo optimizado
const Logo = ({ className = "" }) => (
  <a 
    href="/" 
    title="Dr. Carlos López Moris" 
    rel="home" 
    className={`flex items-center ${className}`}
  >
    <Image 
      src="/iso-moris.png" 
      alt="Logo Dr. López Moris" 
      width={80} 
      height={80}
      className="h-16 w-16 sm:h-20 sm:w-20 shadow-md bg-white p-2 transition-all duration-200" 
    />
  </a>
);

export default function Header() {
  const [hideTopHeader, setHideTopHeader] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Optimizamos el event listener con useCallback
  const handleScroll = useCallback(() => {
    setHideTopHeader(window.scrollY > 70);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Cerramos el menú móvil al cambiar de ruta
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevenimos scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Clases para los enlaces
  const linkClasses = "relative transition-colors duration-300 text-[#171717] hover:text-[#00917D] after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#00917D] after:bottom-[-5px] after:left-0 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100";
  const activeClasses = "text-[#00917D] after:scale-x-100 font-bold";

  // Datos de navegación para evitar repetición
  const navigationLinks = [
    { path: '/', label: 'Inicio' },
    { path: '/perfil', label: 'Perfil' },
    { path: '/reconocimientos', label: 'Reconocimientos' },
    
    { path: '/gallery', label: 'Antes y Despues' },
    { path: '/multimedia', label: 'Multimedias' },
    { path: '/rhinoscopy', label: 'Rhinoscopy' },
    { path: '/preguntas', label: 'Preguntas Frecuentes' },
    
    
  ];

  return (
    <header className={`min-w-full ${montserrat.variable}`}>
      {/* Header Superior - visible en tablets y desktop */}
      <div
        className={`hidden lg:block fixed top-0 left-0 w-full bg-white text-[#191919] text-sm z-50 transition-transform duration-300 ${
          hideTopHeader ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <div className="lg:container mx-auto px-4 lg:px-6 flex justify-between items-center h-20">
          {/* COLUMNA IZQUIERDA - Logo */}
          <div className="flex ml-8 items-center w-48">
            <Logo />
          </div>

          {/* COLUMNA CENTRAL - Información de contacto */}
          <div className="flex flex-wrap ml-20 justify-center gap-4 items-center">
            <div className="flex items-center cursor-pointer gap-2  mx-6 transition-colors border-l-1 border-r-1 border-primary">
              <FaWhatsapp className="text-2xl ml-6 text-[#00917d] hover:text-green-500" />
              <a href="https://wa.me/5491172003461" className="tabular-nums text-lg mr-8 md:text-base font-normal whitespace-nowrap">
                +54 9 11 7200 3461
              </a>
            </div>
            <div className="flex items-center cursor-pointer -ml-4 gap-2 border-r-1 border-primary hover:text-[#191919] transition-colors ">
              <FaEnvelope className="text-xl sm:text-2xl text-[#00917d]" />
              <a href="mailto:contacto@drlopezmoris.com" className="text-lg font-light mr-8 md:text-base truncate max-w-[200px] lg:max-w-none">
                contacto@drlopezmoris.com
              </a>
            </div>
          </div>

          {/* COLUMNA DERECHA - Ubicaciones y horarios */}
          
          <div className="hidden lg:flex items-center gap-4">
            {/* CEMIC */}
            <div className="flex flex-col items-start">
              <div className="flex pl-2 items-center text-sm hover:text-blue-500 transition-colors">  
                <FaMapMarkerAlt className="mr-1 text-[#00917d]"/> 
                <span className="font-medium">CEMIC</span> 
              </div>
              <div className="flex items-center text-sm hover:text-blue-500 transition-colors ml-2">
                <FaClock className="mr-1 text-gray-600"/>
                <span>Mar - Jue - Vie: 14:00 - 17:00</span>
              </div>
            </div>

            {/* Consultorio */}
            <div className="flex flex-col items-start ">
              <div className="flex pl-2 items-center text-sm hover:text-blue-500 transition-colors">  
                <FaMapMarkerAlt className="mr-1 text-[#00917d]"/> 
                <span className="font-medium">Dr. López Moris</span> 
              </div>
              <div className="flex items-center text-sm hover:text-blue-500 transition-colors ml-2">
                <FaClock className="mr-1 text-gray-600"/>
                <span>Mie: 8:00 - 19:30</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar principal - adaptable a distintos tamaños */}
      <Navbar
        className={`fixed w-full left-0 shadow-md bg-white z-40 transition-all duration-300 ${
          hideTopHeader ? 'top-0' : 'lg:top-20'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-6 flex justify-between items-center h-20">
          {/* COLUMNA IZQUIERDA - Nombre del doctor con fuente Montserrat */}
          <NavbarContent className="flex items-center" justify="start">
            {/* Logo solo visible en mobile */}
            <div className="lg:hidden">
              <Logo className="scale-90" />
            </div>
            {/* Nombre del doctor */}
            <div className="hidden lg:block pl-0 sm:pl-4 lg:pl-0">
              <Link 
                href="/" 
                className={`text-lg font-semibold ${montserrat.className} text-[#191919]`}
              >
                Dr. López Moris
              </Link>
            </div>
          </NavbarContent>

          {/* COLUMNA CENTRAL - Menú de navegación - visible en desktop */}
          <NavbarContent className="hidden lg:flex gap-6 mx-auto">
            {navigationLinks.map(link => (
              <NavbarItem key={link.path}>
                <Link 
                  href={link.path} 
                  className={`${linkClasses} ${pathname === link.path ? activeClasses : ''}`}
                >
                  {link.label}
                </Link>
              </NavbarItem>
            ))}
          </NavbarContent>

          {/* COLUMNA DERECHA - Botón de agendar cita */}
          <NavbarContent className="flex items-center gap-2">
            <Button
              as="a"
              href="https://wa.me/5491172003461"
              className="hidden lg:flex bg-[#2bc37f] text-white font-semibold text-base px-8 py-4 rounded-sm hover:bg-[#25a36d] transition-colors"
              variant="bordered">
              Agendar cita
            </Button>
            
            {/* Botón de menú móvil */}
            <Button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {mobileMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </Button>
          </NavbarContent>
        </div>
      </Navbar>

      {/* Menú móvil desplegable - visible solo cuando está activado */}
      <div 
        className={`lg:hidden fixed top-20 left-0 w-full bg-white shadow-lg border-t border-gray-200 z-40 overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-screen py-4' : 'max-h-0 py-0'
        }`}
      >
        <div className="container mx-auto px-6 flex flex-col space-y-4">
          {navigationLinks.map(link => (
            <Link 
              key={link.path}
              href={link.path} 
              className={`text-lg py-2 border-b border-gray-100 ${pathname === link.path ? activeClasses : ''}`}
            >
              {link.label}
            </Link>
          ))}
          
          {/* Información adicional en menú móvil */}
          <div className="pt-4 space-y-4">
            <div className="flex items-center gap-2 py-2">
              <FaWhatsapp className="text-xl text-green-500" />
              <a href="https://wa.me/5491172003461" className="text-base font-normal">
                +54 9 11 7200 3461
              </a>
            </div>
            
            <div className="flex items-center gap-2 py-2">
              <FaEnvelope className="text-xl text-[#383b60]" />
              <a href="mailto:drcarloslopezmoris@gmail.com" className="text-base font-normal">
                contacto@drlopezmoris.com
              </a>
            </div>
            
            <div className="flex flex-col space-y-2">
              <h3 className="font-semibold text-gray-800">Ubicaciones</h3>
              
              <div className="flex flex-col text-sm pl-2 space-y-1">
                <div className="flex items-center">
                  <FaMapMarkerAlt className="mr-2 text-primary"/> 
                  <span className="font-medium">CEMIC</span> 
                </div>
                <div className="flex items-center text-gray-600">
                  <FaClock className="mr-2"/>
                  <span>Mar - Jue - Vie: 14:00 - 17:00</span>
                </div>
              </div>
              
              <div className="flex flex-col text-sm pl-2 space-y-1">
                <div className="flex items-center">
                  <FaMapMarkerAlt className="mr-2 text-primary"/> 
                  <span className="font-medium">Dr. López Moris</span> 
                </div>
                <div className="flex items-center text-gray-600">
                  <FaClock className="mr-2"/>
                  <span>Mie: 8:00 - 19:30</span>
                </div>
              </div>
            </div>
            
            <Button
              as="a"
              href="/agendar"
              className="w-full flex justify-center items-center bg-[#2bc37f] border border-[#212442] text-white font-semibold text-lg px-4 py-3 rounded hover:bg-[#25a36d] transition-colors"
            >
              Agendar cita
            </Button>
          </div>
        </div>
      </div>

      {/* Espaciador adaptable */}
      <div className="h-16 md:h-40"></div>
    </header>
  );
}