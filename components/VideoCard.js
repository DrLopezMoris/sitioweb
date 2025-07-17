// frontend/components/VideoCard.js

import React from 'react';
import Image from 'next/image'; // Para optimización de miniaturas
import Link from 'next/link';   // Para navegación a la página del video

// Un componente reutilizable para mostrar una tarjeta de video de YouTube.
const VideoCard = ({ video }) => {
  // Si el video no tiene ID, no renderizar
  if (!video || !video.id) return null;

  // URL para incrustar el video de YouTube
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${video.id}?autoplay=1`;
  // URL directa al video en YouTube (para el enlace)
  const youtubeWatchUrl = `https://www.youtube.com/watch?v=${video.id}`;

  // Formatear la fecha de publicación
  const formattedDate = video.publishedAt
    ? new Date(video.publishedAt).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : 'Fecha desconocida';

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      {/* Enlace que abre el video en una nueva pestaña de YouTube */}
      <Link href={youtubeWatchUrl} target="_blank" rel="noopener noreferrer">
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}> {/* Proporción 16:9 */}
          <Image
            src={video.thumbnail} // Miniatura del video
            alt={video.title}     // Título del video como alt text
            fill
            style={{ objectFit: 'cover' }}
            className="absolute top-0 left-0 w-full h-full"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
          {/* Icono de Play overlay (opcional, para indicar que es un video) */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </Link>

      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
          <Link href={youtubeWatchUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            {video.title}
          </Link>
        </h3>
        <p className="text-sm text-gray-500">{formattedDate}</p>
        {/* Si quieres mostrar la descripción, puedes añadirla aquí, quizás con line-clamp para limitar el texto */}
        {/* <p className="text-gray-600 text-sm mt-2 line-clamp-3">{video.description}</p> */}
      </div>
    </div>
  );
};

export default VideoCard;