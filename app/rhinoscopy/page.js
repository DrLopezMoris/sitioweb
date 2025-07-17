// frontend/app/rhinoscopy/page.js

// NOTA: Este es un Server Component por defecto en Next.js 13/14 App Router.
// Las llamadas a la API (getChannelVideos) se realizan en el servidor.
// Esto es ideal para SEO y rendimiento.

import React from 'react';
import { getChannelVideos } from '../../lib/youtube'; // Importa la nueva función
import VideoCard from '../../components/VideoCard';   // Importa el componente de tarjeta
import Header from '@/components/Header'; // Asegúrate de que tu Header esté en '@/components/Header'
import Footer from '@/components/Footer'; // Asegúrate de que tu Footer esté en '@/components/Footer'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

// Definir la función de feteo de datos directamente en el Server Component
// Next.js la ejecutará en el servidor al momento de la solicitud.
async function getVideosData() {
    try {
        // Obtener hasta 50 videos por defecto (puedes ajustar maxResults si necesitas más o menos)
        const { videos, nextPageToken } = await getChannelVideos(50);
        return { videos, nextPageToken }; // Retorna los videos y el token de paginación
    } catch (error) {
        console.error('Error fetching Rhinoscopy videos:', error);
        // Puedes lanzar un error o devolver un estado de error para manejarlo en la UI
        return { videos: [], nextPageToken: null, error: 'No se pudieron cargar los videos de Rhinoscopy.' };
    }
}

// Componente de Página para /rhinoscopy
export default async function RhinoscopyPage() {
  // Las funciones async en Server Components son una característica clave del App Router.
  const { videos, error } = await getVideosData();

  // Contenido estático de la introducción a Rhinoscopy
  
  return (
    <main className="bg-gray-50">
        <Header />    
        <div className="container mx-auto px-4 m-8 p-4">
            {/* Sección de Introducción a Rhinoscopy */}
        <section className="text-left mb-16 border-b-2 mx-4 px-4">
            <h1 className={`text-4xl font-bold mb-4 text-secondary`}>
            ¿Qué es Rhinoscopy?
            </h1>
            <div className="relative mb-6">
                <FaQuoteLeft className="text-[#2bc37f] opacity-50 absolute -left-8 -top-4" />
                <p className={`italic text-lg text-gray-700 pl-4 border-l-4 border-primary`}>
                    Lorem insup dolor café, cuando el código no compila y el mate ya está frío. 
                    En el valle del bug eterno, los devs rezan a San Commit para que salve su rama. 
                    Entre líneas de JavaScript y promesas no resueltas, nace un nuevo deploy con fe. 
                    El CSS llora, el backend gruñe, pero la esperanza se renderiza. Y así, con un push lleno de sueños, seguimos construyendo el mañana.         </p>
                <FaQuoteRight className="text-[#2bc37f] opacity-50 absolute -right-8 -bottom-2 self-end" />
            </div>
        </section>

        {/* Mensaje de error si no se cargan los videos */}
        {error && (
          <div className="text-center py-8">
            <p className="text-red-600 text-2xl">{error}</p>
          </div>
        )}

        {/* Sección de Videos de Webinars */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-left text-secondary mb-10 animate-fade-in-up">
            Webinars Recientes
          </h2>

          {videos.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {videos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-2xl text-gray-600">No hay videos de webinars disponibles en este momento.</p>
            </div>
          )}
        </section>

        {/* Aquí podrías añadir un botón "Cargar más" si implementas paginación infinita,
            usando el nextPageToken de la API de YouTube */}
        {/* {nextPageToken && (
          <div className="text-center mt-10">
            <button
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
              // onClick={() => cargarMasVideos(nextPageToken)}
            >
              Cargar más videos
            </button>
          </div>
        )} */}
      </div>
      <Footer />
    </main>
  );
}