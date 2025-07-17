// frontend/components/CaseModal.js
"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const CaseModal = ({ isOpen, onClose, caseData }) => {
  const modalRef = useRef(); // <-- Hook useRef declarado PRIMERO

  useEffect(() => { // <-- Hook useEffect declarado SEGUNDO (antes del return condicional)
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) { // La lógica interna del efecto puede ser condicional, el hook no.
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]); // Dependencias: solo se ejecuta si isOpen o onClose cambian

  // <-- Ahora sí, el return condicional después de todos los Hooks
  if (!isOpen || !caseData) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4 " onClick={onClose}>
      <div
        className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
        ref={modalRef}
      >
        {/* Botón de cerrar */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-3xl font-bold z-10"
          aria-label="Cerrar modal"
        >
          &times;
        </button>

        {/* Encabezado del modal */}
        <div className="p-8 mt-4 border-b border-gray-200">
          <h2 className="text-3xl font-bold text-secondary mb-2">{caseData.title}</h2>
          {caseData.description && (
            <p className="text-gray-600 text-lg">{caseData.description}</p>
          )}
        </div>

        {/* Contenido del modal: Imágenes con scroll */}
        <div className="flex-grow overflow-y-auto p-6 space-y-8">
          {caseData.images && caseData.images.length > 0 ? (
            caseData.images.sort((a, b) => a.order - b.order).map((imageObj) => (
              <div key={imageObj.id} className="relative w-full bg-gray-100 rounded-lg overflow-hidden shadow-md">
                <Image
                  src={imageObj.image}
                  alt={imageObj.caption || `Imagen de ${caseData.title}`}
                  width={1000}
                  height={750}
                  style={{ objectFit: 'contain' }}
                  className="w-full h-auto"
                />
                {imageObj.caption && (
                  <p className="p-3 text-sm text-center text-gray-700 bg-white border-t border-gray-100">
                    {imageObj.caption}
                  </p>
                )}
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 py-10">No hay imágenes disponibles para este caso.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CaseModal;