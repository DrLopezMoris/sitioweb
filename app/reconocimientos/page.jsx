"use client";
import React, { useState } from "react";
import { Montserrat, Lato } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

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

// Definición de los reconocimientos
const reconocimientos = [
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
    institution: "Universidad Autonoma de México",
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
  }
];

export default function ReconocimientosPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <main className={`${montserrat.variable} ${lato.variable}`}>
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        {/* Título de la página */}
        <section className="text-center mb-12">
          <h1 className={`text-4xl font-bold mb-4 ${montserrat.className} text-[#212442]`}>
            Mis Reconocimientos
          </h1>
          <p className={`text-xl text-gray-600 ${lato.className}`}>
            Un recorrido por mi trayectoria académica y profesional
          </p>
        </section>

        {/* Galería de Reconocimientos */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reconocimientos.map((reconocimiento) => (
            <div 
              key={reconocimiento.id}
              className="cursor-pointer group"
              onClick={() => openModal(reconocimiento.image)}
            >
              <div className="overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={reconocimiento.image} 
                  alt={reconocimiento.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
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
      </div>

      {/* Modal para imagen ampliada */}
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