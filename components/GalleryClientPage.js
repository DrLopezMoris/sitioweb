// frontend/components/GalleryClientPage.js

"use client"; // <<-- ¡IMPORTANTE! Este es un Client Component

import React, { useState, useEffect } from 'react'; // Importar useEffect
import CaseCard from './CaseCard'; // Usar rutas relativas si están en la misma carpeta components
import CaseModal from './CaseModal'; // Usar rutas relativas si están en la misma carpeta components

/**
 * @description Componente cliente que maneja la lógica de la galería, paginación y el modal.
 * Recibe todos los casos precargados del Server Component.
 * @param {Object} props - Las propiedades del componente.
 * @param {Array} props.cases - Un array de objetos de casos de galería (todos los casos).
 */
export default function GalleryClientPage({ cases }) {
  const [selectedCase, setSelectedCase] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // Estado para la página actual
  const [casesPerPage, setCasesPerPage] = useState(null); // Estado para casos por página (determinado por responsive)

  // 1. Detectar el tamaño de pantalla para ajustar casesPerPage
  useEffect(() => {
    const handleResize = () => {
      // Definimos los breakpoints de Tailwind: sm: 640px, lg: 1024px
      if (window.innerWidth >= 1024) { // Desktop (lg y más)
        setCasesPerPage(20);
      } else if (window.innerWidth >= 640) { // Tablet (sm a lg) - Si quieres un intermedio
        setCasesPerPage(10); // O puedes dejarlo en 5 si solo quieres 5 o 20
      } else { // Mobile (menos de sm)
        setCasesPerPage(5);
      }
      // Al cambiar el tamaño, reseteamos a la primera página para evitar vacíos
      setCurrentPage(1);
    };

    // Establecer el valor inicial al montar el componente
    handleResize();

    // Añadir el event listener para reajustar en cambios de tamaño
    window.addEventListener('resize', handleResize);

    // Limpieza al desmontar el componente
    return () => window.removeEventListener('resize', handleResize);
  }, []); // El array vacío asegura que se ejecute solo una vez al montar y limpiar al desmontar

  // 2. Lógica de Paginación
  // Si casesPerPage aún no se ha determinado (primera carga), no renderizamos casos aún
  if (casesPerPage === null) {
    return <p className="text-center text-xl text-gray-600 mt-20">Preparando galería...</p>;
  }

  const indexOfLastCase = currentPage * casesPerPage;
  const indexOfFirstCase = indexOfLastCase - casesPerPage;
  const currentCases = cases.slice(indexOfFirstCase, indexOfLastCase);

  const totalPages = Math.ceil(cases.length / casesPerPage);

  const handleNextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  const handleCardClick = (caseData) => {
    setSelectedCase(caseData);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCase(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4 ">
        {currentCases.map((caseItem) => (
          <CaseCard key={caseItem.id} caseData={caseItem} onClick={handleCardClick} />
        ))}
      </div>

      {/* Controles de Paginación */}
      {totalPages > 1 && ( // Solo mostrar paginación si hay más de una página
        <div className="flex justify-center items-center mt-12 mb-4 space-x-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`px-6 py-3 rounded-lg shadow-md transition-colors duration-200
              ${currentPage === 1 ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-[#2bc37f] text-white hover:bg-green-600'}`}
          >
            Anterior
          </button>
          <span className="text-md font-light text-gray-800">
            Página {currentPage} de {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-6 py-3 rounded-lg shadow-md transition-colors duration-200
              ${currentPage === totalPages ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-[#2bc37f] text-white hover:bg-green-600'}`}
          >
            Siguiente
          </button>
        </div>
      )}

      <CaseModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        caseData={selectedCase}
      />
    </>
  );
}