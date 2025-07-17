// frontend/app/multimedia/page.js
"use client";
import React, { useState, useEffect, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getMultimediaItems } from '@/lib/api';
import MultimediaCard from '@/components/MultimediaCard';
import { FaYoutube, FaFilePdf, FaHeadphonesAlt, FaImage, FaSpinner } from 'react-icons/fa'; // Iconos para los filtros
// Eliminamos la importación de 'motion' de framer-motion
// import { motion } from 'framer-motion';
import ImageModal from '@/components/ImageModal';


// Este componente será la página principal de la ruta /multimedia
export default function MultimediaPage() {
  const [multimediaItems, setMultimediaItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // Estado para el filtro activo, 'all' para mostrar todos por defecto
    const [activeFilter, setActiveFilter] = useState('all');
    // NUEVOS ESTADOS PARA EL MODAL DE IMAGEN
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImageItem, setSelectedImageItem] = useState(null);

  // FUNCIONES PARA CONTROLAR EL MODAL
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
    const filteredItems = useMemo(() => {
      if (activeFilter === 'all') {
        return multimediaItems;
      }
      return multimediaItems.filter(item => item.multimedia_type === activeFilter);
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
      <main className="bg-gray-50">
        <Header />
      <div className="container mx-auto px-4 m-8 p-4">
          {/* Reemplazado motion.div por div y eliminadas props de animación */}
          <div
            className="text-left mb-12"
            // initial={{ opacity: 0, y: 50 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.6 }}
            // viewport={{ once: true }}
          >
            
        <section className="text-left mb-16 border-b-2 border-primary mx-4 px-4">
          <h1 className={`text-4xl font-bold mb-4 text-secondary`}>
            Multimedia
          </h1>
          
        </section>
            
          </div>
  
          {/* Filtros / Pestañas */}
          {/* Reemplazado motion.div por div y eliminadas props de animación */}
          <div
            className="flex flex-wrap mx-1 justify-start gap-2 md:gap-4 mb-12"
            // initial={{ opacity: 0, y: 30 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.6, delay: 0.2 }}
            // viewport={{ once: true }}
          >
            {multimediaTypes.map((type) => (
              <button
                key={type.key}
                onClick={() => setActiveFilter(type.key)}
                className={`flex items-center px-2 md:px-6 py-1 text-sm md:text-base font-semibold transition-all duration-300 ${
                  activeFilter === type.key
                    ? 'border-b-1 border-l-1 border-primary text-primary shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-100 hover:text-secondary'
                }`}
              >
                {type.icon && <span className="mr-2 text-xl">{type.icon}</span>}
                {type.label}
              </button>
            ))}
          </div>
  
          {/* Grid de elementos multimedia */}
          {filteredItems.length === 0 ? (
            
            <div className="text-center text-gray-700 text-xl py-10">
              No hay elementos multimedia disponibles para esta categoría.
            </div>
          ) : (
            
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
              // initial={{ opacity: 0 }}
              // animate={{ opacity: 1 }}
              // transition={{ staggerChildren: 0.1 }}
            >
              {filteredItems.map((item) => (
                
                <div
                  key={item.id}
                 
                >
                   <MultimediaCard item={item} onImageClick={openImageModal} />
                </div>
              ))}
            </div>
          )}
    </div>
     {/* RENDERIZAR EL MODAL FUERA DEL DIV PRINCIPAL PERO DENTRO DE MAIN */}
      <ImageModal
        isOpen={isImageModalOpen}
        onClose={closeImageModal}
        item={selectedImageItem}
      />
    <Footer />
    </main>
    
  );
}