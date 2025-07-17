// frontend/components/ReviewsHighlight.js
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image'; // Para la imagen de fondo
import { getAllReviews } from '@/lib/api'; // <--- ¡CAMBIO AQUÍ! Importa la función correcta
import ReviewsCarousel from './ReviewsCarousel'; // Importa el carrusel de reseñas

export default function ReviewsHighlight() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        // <--- ¡CAMBIO AQUÍ! Llama a la función correcta
        const fetchedReviews = await getAllReviews();
        // Filtrar y/o seleccionar un número limitado de reseñas para destacar en la homepage
        // `getAllReviews` ya filtra por `is_active` y ordena, pero aún puedes slicear si quieres un máximo específico
        setReviews(fetchedReviews.slice(0, 10)); // Mostrar un máximo de 10 reseñas destacadas
      } catch (err) {
        console.error("Failed to fetch Google reviews:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) {
    return (
      <section className="relative py-12 px-4 md:px-8 bg-gray-900 text-center text-primary min-h-[400px] flex items-center justify-center overflow-hidden">
        
        <p className="relative z-20 text-lg">Cargando opiniones de nuestros pacientes...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="relative py-12 px-4 md:px-8 bg-gray-900 text-center text-primary min-h-[400px] flex items-center justify-center overflow-hidden">
        
        <p className="relative z-20 text-red-400 text-lg">Error al cargar las opiniones. Por favor, inténtalo de nuevo más tarde.</p>
      </section>
    );
  }

  if (reviews.length === 0) {
    return null; // No renderizar la sección si no hay reseñas
  }

  return (
    <section className="relative py-8 px-4 md:px-8 overflow-hidden bg-gray-50 ">
      
      {/* Contenido de la Sección (sobre el overlay) */}
      <div className="relative z-20 container mx-auto p-4 mt-4">
        <div className='border-b-2 border-primary mx-2'>
          <h2 className="text-3xl sm:text-2xl font-bold text-secondary mb-4 font-montserrat drop-shadow-lg ">
            Opiniones de nuestros pacientes
          </h2>
        </div>

        <ReviewsCarousel reviews={reviews} />

        {/* Opcional: Botón para ver más reseñas en Google (si tienes un enlace) */}
        <div className="text-center mt-2">
          <a
            href="https://g.page/r/YOUR_Maps_LINK/review" // **CAMBIA ESTE ENLACE A TU PERFIL DE GOOGLE MY BUSINESS**
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex text-primary font-semibold hover:text-secondary transition duration-300 transform hover:scale-105"
          >
            Ver más reseñas en Google
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7-7 7M5 12h16" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}