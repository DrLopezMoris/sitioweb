// frontend/components/ReviewCard.js
"use client";

import React from 'react';
import Image from "next/image";
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa'; // Iconos de estrellas

/**
 * @description Componente para mostrar una tarjeta individual de reseña de Google.
 * @param {object} props - Las propiedades del componente.
 * @param {object} props.review - El objeto de la reseña de Google.
 * @param {string} props.review.author_name - Nombre del autor.
 * @param {string} props.review.text - Contenido de la reseña.
 * @param {number} props.review.rating - Calificación de 1 a 5 estrellas.
 * @param {string} props.review.review_date - Fecha de la reseña (formato YYYY-MM-DD).
 */
export default function ReviewCard({ review }) {
  // Función para renderizar estrellas según el rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    }
    // Rellenar con estrellas vacías si el rating no es 5
    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-gray-400" />);
    }
    return stars;
  };

  // Formatear la fecha
  const formattedDate = new Date(review.review_date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    
  });

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col min-h-full border border-gray-200 mt-8 pt-8">
      <div className="flex items-center mb-4">
        <div className="flex text-lg mr-2">
          {renderStars(review.rating)}
        </div>
        <span className="text-sm text-gray-600">{review.rating.toFixed(1)}/5.0</span>
      </div>

      <p className="text-gray-700 text-sm mb-4 flex-grow line-clamp-8"> {/* flex-grow y line-clamp para texto */}
        {review.text}
      </p>

      <div className="border-t border-gray-200 pt-4 mt-auto"> {/* mt-auto empuja al final */}
        <p className="font-semibold text-gray-800 text-sm">{review.author_name}</p>
        <p className="text-gray-500 text-xs">{formattedDate}</p>
        {/* Opcional: Icono de Google para indicar la fuente */}
        <p className="text-gray-500 text-xs flex items-center mt-1">
          <Image src="/icongoogle.png" 
          alt="Google"
          height={16}
          width={16} 
          className="mr-1" /> {/* Asegúrate de tener este icono en public/icons */}
          Desde Google
        </p>
      </div>
    </div>
  );
}