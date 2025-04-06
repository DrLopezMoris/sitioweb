"use client";
import React from "react";
import { Montserrat, Lato } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from 'next/image'; 
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

// Configuración de fuentes
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-montserrat',
});

const lato = Lato({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato'
});

export default function PerfilPage() {
  return (
    <main className={`${montserrat.variable} ${lato.variable}`}>
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        {/* Sección de Presentación Personal */}
        <section className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          <div className="flex flex-col ">
            <h1 className={`text-4xl font-bold mb-4 ${montserrat.className} text-[#212442]`}>
              Dr. Carlos López Moris
            </h1>
            <h2 className="text-2xl text-[#00917D] mb-6">
              Otorrinolaringólogo | Especialista en Rinología
            </h2>
            
            <div className="relative mb-6">
              <FaQuoteLeft className="text-[#2bc37f] opacity-50 absolute -left-8 -top-4" />
              <p className={`text-lg text-gray-700 ${lato.className} italic pl-4 border-l-4 border-[#2bc37f]`}>
                Me caracterizo por brindarle a mis pacientes un trato cercano y transparente, y si lo necesitas, estoy acá para ayudarte.
              </p>
              <FaQuoteRight className="text-[#2bc37f] opacity-50 absolute -right-8 -bottom-4 self-end" />
            </div>
            
            <Link 
              href="https://wa.me/5491172003461"
              className="self-start bg-[#2bc37f] text-white px-6 py-3 rounded-lg hover:bg-[#25a36d] transition-colors"
            >
              Agenda tu Consulta
            </Link>
          </div>
          
          <div className="flex justify-center">
            <Image 
              src="/perfil.jpg" 
              alt="Dr. Carlos López Moris" 
              width={300}  // Ancho deseado (obligatorio)
              height={150}  // Alto deseado (obligatorio)
              className="w-auto max-w-md rounded-lg shadow-lg object-cover"
            />
          </div>
        </section>

        {/* Sección de Biografía */}
        <section className="bg-gray-50 rounded-lg p-8 mb-16">
          <div className={`prose max-w-4xl mx-auto ${lato.className} text-gray-800`}>
            <h2 className={`text-3xl text-center mb-8 ${montserrat.className} text-[#212442]`}>
              Mi Historia Profesional
            </h2>
            <div className="text-lg">
              <p className="mb-4">
                Soy el Dr. Carlos López Moris, médico otorrinolaringólogo especializado en Rinología, Cirugía Estética Facial y Medicina Estética y Reparadora.
              </p>
              
              <p className="mb-4">
                Me recibí de médico de la Universidad Nacional de Tucumán (UNT) y me especialicé en Otorrinolaringología en la Universidad de Buenos Aires (UBA). 
                Posteriormente, completé un posgrado en Rinología y Cirugía Facial en la UNAM, un diplomado en Medicina del Sueño en la Universidad Austral, 
                y un diplomado en Inteligencia Artificial aplicada a la Medicina por la Universidad Favaloro.
              </p>
              
              <p className="mb-4">
                Actualmente, me desempeño como Miembro del Equipo de Rinología en el Hospital Universitario CEMIC, donde además, soy Profesor Asistente en el Instituto Universitario en la carrera de pregrado de medicina.
              </p>
            </div>
            <h3 className={`text-2xl mt-8 mb-4 ${montserrat.className} text-[#00917D]`}>
              Mis Especialidades
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className={`text-xl mb-3 ${montserrat.className} text-[#212442]`}>
                  Cirugías Nasales:
                </h4>
                <p>
                  Me especializo en cirugías de baja y alta complejidad, abordando casos que requieren mejorar la función nasal: desde insuficiencia ventilatoria, desvíos nasales, poliposis y sinusitis crónicas, hasta casos más complejos como secuelas de traumatismos, cirugías previas, perforaciones septales y malformaciones.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className={`text-xl mb-3 ${montserrat.className} text-[#212442]`}>
                  Rinología Funcional y Estética:
                </h4>
                <p>
                  Para mí, una nariz saludable es aquella que respira y se ve bien. Abordo casos de obstrucciones respiratorias crónicas y correcciones estéticas, siempre con un enfoque integral y personalizado.
                </p>
              </div>
            </div>
            
            <h3 className={`text-2xl mt-8 mb-4 ${montserrat.className} text-[#00917D]`}>
              Sociedades Médicas y Actualización
            </h3>
            <div className="text-lg">
              <p className="mb-4">
                Formo parte de prestigiosas sociedades médicas como FAS0, AAOFP, SAR, SAREF, Club ORL y AOCBA, y he tenido el honor de integrar comisiones directivas en FAS0 y Club ORL. Además, participo activamente en cursos y congresos, nacionales e internacionales, para mantenerme al día con las últimas técnicas y avances.
              </p>
              
              <p className="italic text-center mt-8">
                Si me leíste hasta acá, ¡Te mando un gran abrazo, y espero verte pronto en el consultorio!
              </p>
            </div>
            <div className="text-right mt-4 font-bold text-[#00917D]">
              Dr. Carlos López Moris
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="bg-[#212442] text-white py-16 rounded-lg text-center">
          <h2 className={`text-3xl mb-6 ${montserrat.className}`}>
            ¿Necesitas una consulta personalizada?
          </h2>
          <p className={`text-xl mb-8 ${lato.className} text-gray-300`}>
            Estoy comprometido a ofrecerte la mejor atención médica y resolver tus dudas.
          </p>
          <Link 
            href="https://wa.me/5491172003461"
            className="bg-[#2bc37f] text-white px-8 py-4 rounded-lg text-xl hover:bg-[#25a36d] transition-colors"
          >
            Contáctame Ahora
          </Link>
        </section>
      </div>
      
      <Footer />
    </main>
  );
}
