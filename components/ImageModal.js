// frontend/components/ImageModal.js
"use client";

import React from 'react';
import Image from 'next/image'; // Para optimización de imágenes
import Modal from './Modal'; // Importa el componente base del modal
// Eliminamos la importación de getCleanedUrl, ya no es necesaria

export default function ImageModal({ isOpen, onClose, item }) {
  if (!item) return null; // No renderizar si no hay ítem

  // La URL de la imagen ahora es directamente item.file, ya que viene preformateada desde el JSON
  const imageUrl = item.file; // <--- ¡CAMBIO AQUÍ!

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col items-center">
        {imageUrl && (
          <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] rounded-lg overflow-hidden mb-4">
            <Image
              src={imageUrl}
              alt={item.title || 'Imagen multimedia'}
              layout="fill"
              objectFit="contain" // 'contain' para que la imagen completa se vea sin recortar
              className="rounded-lg"
              sizes="(max-width: 768px) 100vw, 70vw"
            />
          </div>
        )}
        <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">{item.title}</h3>
        {item.description && (
          <p className="text-gray-700 text-base text-center">{item.description}</p>
        )}
      </div>
    </Modal>
  );
}