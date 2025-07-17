// frontend/components/MultimediaCard.js
"use client";

import React from 'react';
import Image from 'next/image';
import { FaYoutube, FaFilePdf, FaHeadphonesAlt, FaImage } from 'react-icons/fa';

// ELIMINAMOS getCleanedUrl, ya no es necesario porque la ruta viene directa del JSON
// ELIMINAMOS getYouTubeVideoId, ya que el youtubeId ahora viene pre-procesado en lib/api.js

export default function MultimediaCard({ item, onImageClick }) {
  // El videoId ya viene procesado desde lib/api.js
  const videoId = item.multimedia_type === 'video' ? item.youtubeId : null;

  // La URL del archivo (imagen) es directamente item.file, ya que viene de public/
  const fileUrl = item.file; // <--- ¡CAMBIO IMPORTANTE AQUÍ!

  // Fecha formateada
  const formattedDate = new Date(item.upload_date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const renderMultimediaContent = () => {
    switch (item.multimedia_type) {
      case 'video':
        if (videoId) {
          return (
            <div className="relative pt-[56.25%] bg-black">
              {/* <--- ¡CORRECCIÓN EN LA URL DEL IFRAME DE YOUTUBE! */}
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title={item.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-t-lg mt-2"
              />
            </div>
          );
        }
        return <div className="text-center text-red-500 py-4">URL de YouTube inválida</div>;

      case 'image':
        return (
          <div className="relative pt-[56.25%] bg-gray-200 rounded-t-lg overflow-hidden"
               onClick={() => onImageClick && onImageClick(item)}>
            {fileUrl ? (
              <Image
                src={fileUrl} // Usa fileUrl directamente
                alt={item.title}
                fill
                className="rounded-t-lg object-cover cursor-pointer"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-red-500">Imagen no disponible</div>
            )}
          </div>
        );

      default:
        return <div className="text-center text-gray-500 py-4">Tipo de multimedia desconocido</div>;
    }
  };

  const getTypeIcon = () => {
    switch (item.multimedia_type) {
      case 'video': return <FaYoutube className="text-red-600 mr-2" />;
      // case 'document': return <FaFilePdf className="text-blue-600 mr-2" />; // Descomenta si usas documentos
      // case 'audio': return <FaHeadphonesAlt className="text-purple-600 mr-2" />; // Descomenta si usas audio
      case 'image': return <FaImage className="text-green-600 mr-2" />;
      default: return null;
    }
  };

  return (
    <div className="bg-white border-1 rounded-lg shadow-lg hover:shadow-xl overflow-hidden h-full flex flex-col transform hover:scale-[1.01] transition-transform duration-200">
      {renderMultimediaContent()}
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold text-secondary mb-2">{item.title}</h3>
        {item.description && (
          <p className="text-gray-600 text-sm mb-3 flex-grow">{item.description}</p>
        )}
        <div className="flex items-center justify-between text-gray-500 text-xs mt-auto pt-2 border-t border-gray-100">
          <span className="flex items-center">
            {getTypeIcon()}
            {item.multimedia_type.charAt(0).toUpperCase() + item.multimedia_type.slice(1)}
          </span>
          <span>{formattedDate}</span>
        </div>
      </div>
    </div>
  );
}