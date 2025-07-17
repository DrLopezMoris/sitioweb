// frontend/components/ReviewsCarousel.js
"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules'; // Importa Navigation también si quieres flechas
import ReviewCard from './ReviewCard'; // Importa el componente de la tarjeta de reseña

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // Asegúrate de importar también el CSS de navegación si usas Navigation

/**
 * @description Carrusel para mostrar las reseñas de Google.
 * @param {Object} props - Las propiedades del componente.
 * @param {Array} props.reviews - Un array de objetos de reseñas de Google.
 */
export default function ReviewsCarousel({ reviews }) {
  if (!reviews || reviews.length === 0) {
    return (
      <div className="text-center text-gray-700 py-10">
        No hay reseñas disponibles para mostrar.
      </div>
    );
  }

  return (
    <div className="container mx-auto py-4 ">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]} // Asegúrate de incluir Navigation aquí
        spaceBetween={30} // Espacio entre las slides
        slidesPerView={1} // Por defecto, 1 slide en móvil
        breakpoints={{
          // Cuando el ancho de la ventana sea >= 768px (md)
          768: {
            slidesPerView: 2, // Muestra 2 slides
            spaceBetween: 40,
          },
          // Cuando el ancho de la ventana sea >= 1024px (lg)
          1024: {
            slidesPerView: 3, // Muestra 3 slides
            spaceBetween: 50,
          },
        }}
        autoplay={{
          delay: 5000, // Cada 5 segundos
          disableOnInteraction: false, // El autoplay no se detiene si el usuario interactúa
        }}
        // Paginación con puntos clicables
       
        loop={true} // El carrusel se repite infinitamente
        className="mySwiper" // Clase personalizada si necesitas estilos adicionales
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id} className="pb-8 mb-8 min-h-full"> {/* Añade padding bottom para la paginación */}
            <ReviewCard review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}