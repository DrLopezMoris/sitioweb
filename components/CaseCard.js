// frontend/components/CaseCard.js
import React from 'react';
import Image from 'next/image';

const CaseCard = ({ caseData, onClick }) => {
  // Asegúrate de tener una imagen principal para la card
  // Si no hay imágenes en el caso, o la primera imagen no tiene URL, no renderizamos la card.
  const primaryImage = caseData.images && caseData.images.length > 0 ? caseData.images[0].image : null;

  if (!primaryImage) {
    // Si no hay imagen principal, no renderiza la tarjeta o muestra un placeholder si lo prefieres
    console.warn(`CaseCard: No se encontró una imagen principal para el caso ID: ${caseData.id || 'N/A'}`);
    return null;
  }

  return (
    <div
      className="bg-white  border-2 rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-xl"
      onClick={() => onClick(caseData)} // Pasa el caso completo al hacer clic
    >
      <div className="relative w-full overflow-hidden rounded-lg" style={{ paddingBottom: '75%' }}> {/* Proporción 4:3 para la imagen */}
        <Image
          src={primaryImage}
          alt={caseData.title || "Imagen de caso"}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="absolute top-0 left-0 w-full h-full p-1 rounded-lg overflow-hidden"
        />
        
        {/* <p className="absolute bottom-4 left-4 text-white text-lg ">
            {caseData.title}
        </p> */}
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-secondary mb-2 line-clamp-2">
          {caseData.title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-3">
          {caseData.description || "Haz clic para ver más detalles y ángulos del caso."}
        </p>
      </div>
    </div>
  );
};

export default CaseCard;