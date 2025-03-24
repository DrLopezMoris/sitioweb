import React from 'react';
import { Button } from "@heroui/react";
import Link from "next/link";
import { Lato, Montserrat } from "next/font/google";
import { FaCalendarAlt } from "react-icons/fa";

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
                <img 
                  src="/banner.jpeg" // Reemplaza con la ruta correcta a la imagen del doctor
                  alt="Dr. Carlos López Moris" 
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
                    <h3 className="text-xl md:text-2xl text-white font-light mb-10 drop-shadow-md">
                        Médico Otorrinolaringólogo - Especialista en Rinología
                    </h3>
                    
                    {/* Decoración */}
                    <div className="w-20 h-1 bg-[#2bc37f] mx-auto mb-10"></div>
                    
                    {/* Texto descriptivo opcional */}
                    <p className="text-white text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
                        Experiencia y profesionalismo en tratamientos de rinoplastia 
                        y patologías nasales en Buenos Aires.
                    </p>
                    
                    {/* Botón CTA grande y atractivo */}
                    <Button 
                        as={Link} 
                        href="/agendar" 
                        className="bg-[#2bc37f] hover:bg-[#25a36d] text-white px-8 py-6 rounded-md text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 mx-auto"
                        size="lg"
                    >
                        <FaCalendarAlt className="text-2xl" />
                        AGENDA TU CITA
                    </Button>
                </div>
            </div>
            
            {/* Indicador de scroll */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg 
                    width="40" 
                    height="40" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                >
                    <path 
                        d="M12 5V19M12 19L5 12M12 19L19 12" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                    />
                </svg>
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