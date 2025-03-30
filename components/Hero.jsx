import React from 'react';
import Image from 'next/image';
import { Button } from "@heroui/react";
import Link from "next/link";
import { Lato, Montserrat } from "next/font/google";
import { FaCalendarAlt, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";


// Configuración de fuentes
const lato = Lato({ 
    subsets: ['latin'],
    weight: ['100', '400', '700'],
    variable: '--font-lato'
});

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['600', '700'],
    display: 'swap',
    variable: '--font-montserrat',
});

export default function Hero() {
    return (
        <section className={`relative max-h-[85vh] w-full overflow-hidden ${lato.variable} ${montserrat.variable}`}>
            {/* Imagen de fondo con overlay para mejorar legibilidad del texto */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
                <Image 
                  src="/banner1.jpg" // Reemplaza con la ruta correcta a la imagen del doctor
                  alt="Dr. Carlos López Moris" 
                  width={1920}
                  height={1080}
                  className="object-cover w-full h-full"
                />
            </div>

            {/* Contenedor principal centrado */}
            <div className="container mx-auto px-4 h-screen flex flex-col justify-center items-center text-center">
                {/* Contenido principal con animación de entrada */}
                <div className="max-w-3xl animate-fadeIn">
                    {/* Nombre del doctor */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-white mb-4 drop-shadow-lg">
                        Dr. Carlos López Moris
                    </h1>
                    
                    {/* Especialidad */}
                    <h3 className="text-xl md:text-2xl text-white font-light mb-8 drop-shadow-md">
                        Médico Otorrinolaringólogo - Especialista en Rinología
                    </h3>
                    
                    {/* Decoración */}
                    <div className="w-20 h-[0.2rem] bg-[#2bc37f] mx-auto mb-10"></div>
                    
                    {/* Texto descriptivo opcional */}
                    <p className="text-white text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
                        Experiencia y profesionalismo en tratamientos de rinoplastia 
                        y patologías nasales en Buenos Aires.
                    </p>

                    {/* Redes sociales */}
                    <div className="flex text-white space-x-4 mb-6 my-2 justify-center">
                        <a 
                        href="https://www.instagram.com/dr.lopezmoris.rinologia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white bg-opacity-10 hover:bg-[#2bc37f] w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                        aria-label="Instagram"
                        >
                        <FaInstagram className="text-xl" />
                        </a>
                        <a 
                        href="https://www.linkedin.com/in/carlos-b-l%C3%B3pez-moris-225a0655/" 
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
                    
                    {/* Botón CTA grande y atractivo */}
                    <Button 
                        as={Link} 
                        href="https://wa.me/5491172003461" 
                        className="bg-[#2bc37f] hover:bg-[#25a36d] text-white px-8 py-6 rounded-md text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 mx-auto"
                        size="lg"
                    >
                        <FaCalendarAlt className="text-2xl" />
                        AGENDA TU CITA
                    </Button>
                </div>
            </div>
            
            
            
            
            {/* Estilos globales para la animación */}
            <style jsx global>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeIn {
                    animation: fadeIn 1.2s ease-out forwards;
                }
            `}</style>
        </section>
    );
}