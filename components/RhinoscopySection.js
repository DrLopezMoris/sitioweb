// frontend/components/RhinoscopySection.js

"use client"; // Marca este componente como Client Component si usas App Router en Next.js 13/14

import React, { useEffect, useState } from 'react';
import Image from 'next/image'; // Componente Image de Next.js para optimización de imágenes
import { getAllWebinarFlyers, getLatestYouTubeVideo } from '../lib/api';
import { motion } from 'framer-motion';

// Este componente representará la sección de Rhinoscopy en la página de inicio.
const RhinoscopySection = () => {
  // Estados para almacenar los datos obtenidos de las APIs
  const [flyers, setFlyers] = useState([]); // Almacena los 4 flyers de Django
  const [latestVideo, setLatestVideo] = useState(null); // Almacena el último video de YouTube
  const [loading, setLoading] = useState(true); // Controla el estado de carga
  const [error, setError] = useState(null); // Almacena cualquier error que ocurra

  // useEffect se utiliza para realizar las llamadas a la API cuando el componente se monta
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Inicia el estado de carga
        // Petición paralela para obtener datos más rápido
        const [flyersData, videoData] = await Promise.all([
          getAllWebinarFlyers(), 
          getLatestYouTubeVideo()   
        ]);

        setFlyers(flyersData); // Actualiza el estado con los flyers
        setLatestVideo(videoData); // Actualiza el estado con los datos del video

      } catch (err) {
        // Captura y establece cualquier error que ocurra durante las peticiones
        console.error("Error al cargar datos de Rhinoscopy:", err);
        setError("No se pudieron cargar los datos de Rhinoscopy. Inténtelo más tarde.");
      } finally {
        setLoading(false); // Finaliza el estado de carga
      }
    };

    fetchData(); // Ejecuta la función de feteo de datos
  }, []); // El array vacío asegura que useEffect se ejecute solo una vez al montar el componente

  // Contenido estático de la sección (títulos y descripciones)
  const staticContent = {
    desktopLeftTitle: "El conocimiento de Rhinoscopy",
    desktopLeftText: "Rhinoscopy va más allá de la mera observación, es una profunda exploración de los sentidos que nos conecta con nuestra conciencia. Al profundizar en el campo unificado, buscamos una expansión de la percepción para armonizar nuestra experiencia con la verdad universal. Descubre cómo esta disciplina puede transformar tu bienestar y tu visión del mundo.",
    mobileTitle: "Rhinoscopy",
    mobileText: "Rhinoscopy va más allá de la mera observación, es una profunda exploración de los sentidos que nos conecta con nuestra conciencia. Al profundizar en el campo unificado, buscamos una expansión de la percepción para armonizar nuestra experiencia con la verdad universal. Descubre cómo esta disciplina puede transformar tu bienestar y tu visión del mundo.",
  };

  // Manejo de estados de carga y error
  if (loading) {
    return (
      <section id="rhinoscopy-section" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl text-gray-700">Cargando contenido de Rhinoscopy...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="rhinoscopy-section" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-red-600 text-xl">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="rhinoscopy-section" className="py-12 bg-gradient-to-tr from-[#1a1c36] via-[#2a395c]/90 to-[#998081]/80 min-h-screen">
      <div className="container mx-auto px-4 my-6">

        {/* Sección de Desktop - Visible en pantallas grandes */}
        <div className="hidden lg:block">
          {/* Parte Superior: Programación del mes */}
          <div className="mb-10 text-center">
            <motion.div
                className="text-left mb-12 border-b-2 border-primary"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="text-white text-3xl font-black text-transparent mb-4 text-shadow-lg tracking-wide">
                  RHINOSCOPY
                </h2>
          
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
              {flyers.length > 0 ? (
                flyers.map((flyer) => (
                  <div key={flyer.id} className="relative w-full h-96 overflow-hidden rounded-xl drop-shadow-lg">
                    
                    <Image
                      src={flyer.image} // URL de la imagen del flyer 
                      alt={flyer.title} // Título del flyer como texto alternativo
                      fill // Permite que la imagen se estire para llenar el contenedor
                      style={{ objectFit: 'contain' }} // Ajusta la imagen dentro del contenedor
                      className="transition-transform duration-300 hover:scale-105 rounded-xl "
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" // Optimización de tamaños
                    />
                    {/* Puedes añadir un overlay o texto aquí si lo deseas */}
                    {/* <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-lg font-semibold">{flyer.title}</p>
                    </div> */}
                  </div>
                ))
              ) : (
                <p className="col-span-full text-center text-blue-100">No hay flyers disponibles para la programación del mes.</p>
              )}
            </div>
          </div>

          {/* Parte Inferior: Texto estático y Video de YouTube */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
            {/* Columna Izquierda: Título y texto estático */}
            <div className="lg:pr-8 animate-fade-in-up border-l-1 border-b-1 p-6 border-primary rounded-bl-lg my-8"> {/* Aquí podrías integrar animaciones con Framer Motion */}
              <h2 className="text-4xl font-black text-primary mb-6 text-shadow-lg/30">
                {staticContent.desktopLeftTitle}
              </h2>
              <p className="text-xl text-gray-300 leading-8 my-8 py-8">
                {staticContent.desktopLeftText}
              </p>
            </div>

            {/* Columna Derecha: Video de YouTube */}
            <div className="w-full relative pt-[56.25%] animate-fade-in-up "> {/* Proporción 16:9 (56.25%) */}
              {latestVideo ? (
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-xl"
                  src={`https://www.youtube.com/embed/${latestVideo.id}`}
                  title={latestVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-200 rounded-lg text-gray-600">
                  Video de YouTube no disponible.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sección de Mobile - Visible en pantallas pequeñas y medianas */}
        <div className="lg:hidden">
          {/* Título principal de la sección para mobile */}
          <div className='border-b-2 border-primary mb-8 px-4'>
            <h2 className="text-3xl font-bold text-white text-left mb-4 text-shadow-lg ">
                {staticContent.mobileTitle}
            </h2>
          </div>
          {/* Una sola imagen: el primer flyer (o el más reciente si se quiere seleccionar uno específico) */}
          {flyers.length > 0 ? (
            <div className="relative w-full h-96 sm:h-80 md:h-96 mb-8 rounded-lg  overflow-hidden">
              <Image
                src={flyers[0].image} // Tomamos el primer flyer para mobile
                alt={flyers[0].title}
                fill
                style={{ objectFit: 'contain' }}
                className="transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 768px) 70vw, 50vw"
              />
            </div>
          ) : (
            <div className="w-full h-64 sm:h-80 md:h-96 mb-8 flex items-center justify-center bg-gray-200 rounded-lg text-gray-600">
              No hay flyer disponible para móvil.
            </div>
          )}

          {/* Texto estático para mobile */}
          <p className="text-lg text-gray-50 leading-relaxed mb-12 text-justify p-4">
            {staticContent.mobileText}
          </p>

          {/* Video de YouTube para mobile */}
          <div className="w-full relative pt-[56.25%]"> {/* Proporción 16:9 */}
            {latestVideo ? (
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-xl"
                src={`https://www.youtube.com/embed/${latestVideo.id}`}
                title={latestVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-200 rounded-lg text-gray-600">
                Video de YouTube no disponible.
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default RhinoscopySection;