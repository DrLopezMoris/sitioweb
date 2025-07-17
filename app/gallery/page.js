// frontend/app/gallery/page.js
// Este es un Server Component por defecto, no necesita "use client";

// --- CAMBIOS CLAVE EN LAS IMPORTACIONES ---
import { getAllGalleryCases } from '@/lib/api'; // <<-- Usar la nueva función renombrada
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GalleryClientPage from '@/components/GalleryClientPage';


// Importamos el componente de cliente que contendrá la lógica del modal y la renderización de las cards

import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";


// Metadatos para SEO de esta página específica
export const metadata = {
  title: 'Galería de Casos | Dr. López Moris - Transformaciones Reales', // Pequeño ajuste en título
  description: 'Descubra las transformaciones reales de nuestros pacientes a través de nuestra galería de casos de cirugía facial y otorrinolaringología. Vea el antes y después de cada procedimiento con fotos detalladas.', // Descripción actualizada
  keywords: 'galería, casos, antes y después, cirugía facial, rinoplastia, otorrino, transformaciones, nariz, operacion, cirugia nariz, resultados estéticos, armonía facial', // Keywords actualizadas
  alternates: {
    canonical: 'https://drlopezmoris.com/gallery',
  },
  openGraph: {
    title: 'Galería de Casos | Dr. López Moris',
    description: 'Vea los resultados impresionantes de nuestras intervenciones de cirugía facial y otorrinolaringología.', // Descripción OG actualizada
    url: 'https://drlopezmoris.com/gallery',
    images: [
      {
        url: '/images/gallery-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Galería de Casos de Cirugía Facial y Otorrinolaringología',
      },
    ],
  },
};

export default async function GalleryPage() {
  // Cargar todos los casos desde la API en el servidor
  // Esta parte sigue siendo Server Side Rendering (SSR)
  const cases = await getAllGalleryCases(); // <<-- Usar la nueva función

  return (
    <>
      <Header />
      <main className="relative min-h-screen pt-16 bg-gray-50">
        
        {/* Contenido principal de la galería */}
        <section className="relative z-10 p-4 md:px-8">
          <div className="container mx-auto ">
            <section className="text-left border-b-2 border-primary px-4 mx-4">
              <h1 className={`text-4xl font-bold mb-4 text-secondary`}>
                Antes y Después
              </h1>
              
            </section>

            
            
          </div>

          
        </section>
        <div className='container mx-auto p-2 my-4'>
          {cases.length > 0 ? (
              <GalleryClientPage cases={cases} /> 
            ) : (
              <p className="text-center text-xl text-gray-600 mt-20">No hay casos disponibles en la galería en este momento.</p>
            )}
        </div>
        
      </main>
      <Footer />
    </>
  );
}