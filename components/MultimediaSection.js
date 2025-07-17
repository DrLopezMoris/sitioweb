// frontend/components/MultimediaSection.js
"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { getMultimediaItems } from '@/lib/api'; // Importa la función para obtener datos
import MultimediaCard from './MultimediaCard'; // Importa el componente de la tarjeta
import { FaYoutube, FaFilePdf, FaHeadphonesAlt, FaImage, FaSpinner } from 'react-icons/fa'; // Iconos para los filtros
import { motion } from 'framer-motion';
import ImageModal from './ImageModal'; 

export default function MultimediaSection() {
  const [multimediaItems, setMultimediaItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // Estado para el filtro activo, 'all' para mostrar todos por defecto
  const [activeFilter, setActiveFilter] = useState('all');

   // NUEVOS ESTADOS PARA EL MODAL DE IMAGEN (igual que en MultimediaPage.js)
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImageItem, setSelectedImageItem] = useState(null);

  // NUEVAS FUNCIONES PARA CONTROLAR EL MODAL (igual que en MultimediaPage.js)
  const openImageModal = (item) => {
    setSelectedImageItem(item);
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
    setSelectedImageItem(null);
  };

  useEffect(() => {
    const fetchMultimedia = async () => {
      try {
        setLoading(true);
        setError(null);
        const items = await getMultimediaItems();
        setMultimediaItems(items);
      } catch (err) {
        console.error("Error fetching multimedia items:", err);
        setError("No se pudieron cargar los elementos multimedia. Inténtalo de nuevo más tarde.");
      } finally {
        setLoading(false);
      }
    };

    fetchMultimedia();
  }, []); // Se ejecuta solo una vez al montar el componente

  // Define los tipos de multimedia y sus etiquetas/iconos para los filtros
  const multimediaTypes = useMemo(() => [
    { key: 'all', label: 'Todos', icon: null },
    { key: 'video', label: 'Videos', icon: <FaYoutube /> },       
    { key: 'image', label: 'Imágenes', icon: <FaImage /> },
  ], []);

  // Filtra los elementos multimedia según el filtro activo
  // Filtra y limita los elementos multimedia según el filtro activo
const displayedItems = useMemo(() => {
  // 1. Ordenar por fecha de subida (más recientes primero)
  const sortedItems = [...multimediaItems].sort((a, b) => {
    return new Date(b.upload_date) - new Date(a.upload_date);
  });

  // 2. Limitar a los 4 elementos más recientes para la página Home
  const limitedItems = sortedItems.slice(0, 4); // Tomamos los primeros 4 después de ordenar

  // 3. Aplicar el filtro a estos 4 elementos limitados
  if (activeFilter === 'all') {
    return limitedItems;
  }
  return limitedItems.filter(item => item.multimedia_type === activeFilter);
}, [multimediaItems, activeFilter]);

  if (loading) {
    return (
      <section className="py-16 bg-gray-100 min-h-screen flex items-center justify-center">
        <FaSpinner className="animate-spin text-blue-500 text-4xl mr-3" />
        <p className="text-xl text-gray-700">Cargando contenido multimedia...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-gray-100 min-h-screen flex items-center justify-center text-center">
        <p className="text-red-600 text-xl font-semibold">{error}</p>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50 ">
      <div className="container mx-auto px-4 ">
        <motion.div
          className="text-left mb-12 border-b-2 border-primary"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-secondary md:text-3xl mb-4">
            Multimedia
          </h2>
          
        </motion.div>

        

        {/* Grid de elementos multimedia */}
        {displayedItems.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-700 text-xl py-10"
          >
            No hay elementos multimedia disponibles para esta categoría.
          </motion.div>
        ) : (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {displayedItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <MultimediaCard item={item} onImageClick={openImageModal} />
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Botón "Ver todos" */}
                <motion.div
                  className="text-center mt-10 pt-8"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <a
                    href="/multimedia"
                    className="text-primary hover:text-secondary font-semibold inline-flex items-center transition duration-300 hover:scale-105"
                  >
                    Ver toda la Galeria
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7-7 7M5 12h16" />
                    </svg>
                  </a>
                </motion.div>
      </div>
      {/* RENDERIZAR EL MODAL FUERA DEL DIV PRINCIPAL PERO DENTRO DE LA SECTION */}
      <ImageModal
        isOpen={isImageModalOpen}
        onClose={closeImageModal}
        item={selectedImageItem}
      />
    </section>
  );
}