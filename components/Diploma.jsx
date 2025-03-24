import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Montserrat } from "next/font/google";
import { FaTrophy, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Importaciones de estilos de Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600', '700'],
  display: 'swap',
  variable: '--font-montserrat',
});

export default function Reconocimientos() {
  // Array con los datos de los reconocimientos
  const reconocimientos = [
    {
      id: 1,
      titulo: "Médico",
      institucion: "Universidad Nacional de Tucumán",
      año: "2010",
      imagen: "/unt.jpeg", // Reemplazar con las rutas correctas
    },
    {
      id: 2,
      titulo: "Especialista en Otorrinolaringología",
      institucion: "Universidad de Buenos Aires",
      año: "2016",
      imagen: "/uba.jpeg",
    },
    {
      id: 3,
      titulo: "Rinología y Cirugía Facial",
      institucion: "Universidad Autonoma de México",
      año: "2012",
      imagen: "/unam.jpg",
    },
    {
      id: 4,
      titulo: "Armonización Orofacial",
      institucion: "Universidad Abierta Interamericana",
      año: "2023",
      imagen: "/uai.jpg",
    },
    {
      id: 5,
      titulo: "Miembro Fundador",
      institucion: "Sociedad Argentina de Rinoplastia",
      año: "2024",
      imagen: "/sar.jpg",
    },
    {
      id: 6,
      titulo: "Rinoplasty Full Immersion Experience",
      institucion: "Rinoplastia de Buenos Aires",
      año: "2022",
      imagen: "/rhinoplasty1.jpg",
    },
  ];

  return (
    <section className={`py-16 bg-gray-50 ${montserrat.variable}`}>
      <div className="container mx-auto px-4">
        {/* Título de la sección */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-4">
            <FaTrophy className="text-[#2bc37f] text-4xl mr-3" />
            <h2 className={`text-3xl md:text-4xl font-bold text-gray-800 ${montserrat.className}`}>
              Reconocimientos y Trayectoria
            </h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Más de 15 años de experiencia avalan la capacitación y profesionalismo del Dr. Carlos López Moris
          </p>
        </div>

        {/* Carrusel de diplomas */}
        <div className="relative px-4 md:px-10">
          {/* Botones de navegación personalizados */}
          <div className="swiper-button-prev-custom absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
            <button className="bg-white rounded-full p-3 shadow-md hover:shadow-lg transition-all">
              <FaChevronLeft className="text-xl text-gray-700" />
            </button>
          </div>
          
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true,
            }}
            className="pb-12"
          >
            {reconocimientos.map((diploma) => (
              <SwiperSlide key={diploma.id} className="pb-4">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col">
                  {/* Imagen del diploma/certificado */}
                  <div className="relative pt-[75%] bg-gray-100">
                    <img
                      src={diploma.imagen}
                      alt={`${diploma.titulo} - ${diploma.institucion}`}
                      className="absolute inset-0 w-full h-full object-cover p-1"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Información del diploma */}
                  <div className="p-4 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-2">
                        {diploma.titulo}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {diploma.institucion}
                      </p>
                    </div>
                    <div className="mt-auto">
                      <span className="inline-block bg-[#f0fbf8] text-[#2bc37f] text-xs font-medium py-1 px-2 rounded">
                        {diploma.año}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Botón siguiente personalizado */}
          <div className="swiper-button-next-custom absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
            <button className="bg-white rounded-full p-3 shadow-md hover:shadow-lg transition-all">
              <FaChevronRight className="text-xl text-gray-700" />
            </button>
          </div>
        </div>
        
        {/* Botón para ver más reconocimientos */}
        <div className="text-center mt-8">
          <a 
            href="/reconocimientos" 
            className="inline-flex items-center text-[#2bc37f] hover:text-[#25a36d] font-medium transition-colors"
          >
            Ver todos los reconocimientos
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}