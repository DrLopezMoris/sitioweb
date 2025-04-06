"use client";
import React, { useState } from "react";
import { Montserrat, Lato } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
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


const reconocimientosAcademicos = [
  { 
    id: 1, 
    title: "Médico", 
    institution: "Universidad Nacional de Tucumán", 
    year: 2010,
    image: "/unt.jpeg"
  },
  { 
    id: 2, 
    title: "Especialista en Otorrinolaringología", 
    institution: "Universidad de Buenos Aires",
    year: 2016,
    image: "/uba.jpeg",
  },
  { 
    id: 3, 
    title: "Rinología y Cirugía Facial",
    institution: "Universidad Autónoma de México",
    year: 2012,
    image: "/unam.jpg",
  },
  { 
    id: 4, 
    title: "Armonización Orofacial", 
    institution: "Universidad Abierta Interamericana",
    year: 2023,
    image: "/uai.jpg",
  },
];

const certificadosTalleres = [
  { 
    id: 5, 
    title: "Miembro Fundador", 
    institution: "Sociedad Argentina de Rinoplastia", 
    year: 2024,
    image: "/sar.jpg",
  },
  { 
    id: 6, 
    title: "Rinoplasty Full Immersion Experience", 
    institution: "Rinoplastia de Buenos Aires", 
    year: 2022,
    image: "/rhinoplasty1.jpg",
  },

  { 
    id: 7, 
    title: "Cerebral, Ventricular and Skull Base Neuroendoscopy", 
    institution: "Fleni", 
    year: 2019,
    image: "/fleni.jpeg",
  },

  { 
    id: 8, 
    title: "Advance Navigate Procedure Workshop", 
    institution: "Medtronic", 
    year: 2024,
    image: "/medtronic.jpeg",
  },
  { 
    id: 9, 
    title: "RhinoTips", 
    institution: "Rhinoplasty", 
    year: 2023,
    image: "/tips.jpg",
  },
  { 
    id: 10, 
    title: "Miembro Activo", 
    institution: "Sociedad Argetina de Rinoplastia Estetica y Funcional", 
    year: 2017,
    image: "/SAREF.png",
  },
  { 
    id: 11, 
    title: "Encuentro Educativo Nexus Argentina", 
    institution: "Nexus", 
    year: 2024,
    image: "/nexus.jpeg",
  },
];

export default function ReconocimientosPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  const renderGrid = (data) => (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 my-4 py-4">
      {data.map((reconocimiento) => (
        <div 
          key={reconocimiento.id}
          className="cursor-pointer group"
          onClick={() => openModal(reconocimiento.image)}
        >
          <div className="overflow-hidden rounded-lg shadow-lg bg-gray-50 my-8 py-8">
            <Image
              src={reconocimiento.image} 
              alt={reconocimiento.title}
              width={400}
              height={300}
              className="w-full h-80 object-cover p-4 transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="mt-4 text-center">
            <h3 className={`text-xl font-semibold ${montserrat.className} text-[#00917D]`}>
              {reconocimiento.title}
            </h3>
            <p className={`text-gray-600 ${lato.className}`}>
              {reconocimiento.institution} - {reconocimiento.year}
            </p>
          </div>
        </div>
      ))}
    </section>
  );

  return (
    <main className={`${montserrat.variable} ${lato.variable}`}>
      <Header />
      
      <div className="container mx-auto px-4 py-12 border-x-2  bg-clip-content p-3">
        <section className="text-left mb-16 border-b-2 mx-4 px-4">
          <h1 className={`text-4xl font-bold mb-4 ${montserrat.className} text-secondary`}>
            Mi Trayectoria
          </h1>
          <div className="relative mb-6">
              <FaQuoteLeft className="text-[#2bc37f] opacity-50 absolute -left-8 -top-4" />
              <p className={`italic text-lg text-gray-700 ${lato.className}  pl-4 border-l-4 border-[#2bc37f]`}>
                Formarme fue mucho más que estudiar: Fue elegir todos los días ser mejor para quienes confían en mí.                
              </p>
              <FaQuoteRight className="text-[#2bc37f] opacity-50 absolute -right-8 -bottom-2 self-end" />
            </div>
        </section>

        {/* Sección 1: Académicos */}
        <section className="mb-16">
          <h2 className={` text-2xl font-semibold text-center text-[#212442] my-2 ${montserrat.className}`}>
            Reconocimientos Académicos
          </h2>
          {renderGrid(reconocimientosAcademicos)}
        </section>

        {/* Sección 2: Talleres y Diplomas */}
        <section>
          <h2 className={`text-2xl font-semibold text-center text-[#212442] mb-6 ${montserrat.className}`}>
            Certificados y Experiencia Complementaria
          </h2>
          {renderGrid(certificadosTalleres)}
        </section>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <Image 
            src={selectedImage}
            alt="Imagen ampliada"
            width={1000}
            height={800}
            className="max-w-full max-h-full object-contain cursor-pointer transition-all duration-300 transform hover:scale-105"
            onClick={(e) => e.stopPropagation()}
          />
          <button 
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
            onClick={closeModal}
          >
            &times;
          </button>
        </div>
      )}
      
      <Footer />
    </main>
  );
}
