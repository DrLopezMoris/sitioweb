import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { FaTrophy, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Reconocimientos() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (img) => {
    setSelectedImage(img);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage("");
    setModalOpen(false);
  };

  const reconocimientos = [
    {
      id: 1,
      titulo: "Médico",
      institucion: "Universidad Nacional de Tucumán",
      año: "2010",
      imagen: "/unt.jpeg",
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
      institucion: "Universidad Autónoma de México",
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
    <section className="h-screen content-center py-16 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        {/* Título */}
        <motion.div
          className="text-left mb-12 border-b-2 border-primary"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          
            <h2 className="text-3xl font-bold text-secondary md:text-3xl mb-4">
              Mi Formación y Reconocimientos
            </h2>
          
          {/* <p className="text-gray-600 max-w-2xl mx-auto text-xl">
            Con más de 15 años de experiencia. Cada etapa, cada formación, cada logro, fue construyendo al profesional que soy hoy.
          </p> */}
        </motion.div>

        {/* Botones personalizados */}
        <div className="swiper-button-prev-custom absolute left-4 top-[50%] z-10 hidden md:block">
          <button className="bg-white rounded-full p-3 shadow hover:shadow-md transition-all">
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
            delay: 3500,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: '.swiper-button-prev-custom',
            nextEl: '.swiper-button-next-custom',
          }}
          
          className="pb-12"
        >
          {reconocimientos.map((diploma) => (
            <SwiperSlide key={diploma.id} className='my-4'>
              <motion.div
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden"
                onClick={() => openModal(diploma.imagen)}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="relative pt-[70%]">
                  <img
                    src={diploma.imagen}
                    alt={diploma.titulo}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-secondary mb-1">
                    {diploma.titulo}
                  </h3>
                  <p className="text-sm text-gray-600">{diploma.institucion}</p>
                  <span className="inline-block mt-2 text-xs bg-[#f0fbf8] text-[#2bc37f] px-2 py-1 rounded font-medium">
                    {diploma.año}
                  </span>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Botón siguiente */}
        <div className="swiper-button-next-custom absolute right-4 top-[50%] z-10 hidden md:block">
          <button className="bg-white rounded-full p-3 shadow hover:shadow-md transition-all">
            <FaChevronRight className="text-xl text-gray-700" />
          </button>
        </div>

        {/* Botón "Ver todos" */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <a
            href="/reconocimientos"
            className="text-primary hover:text-secondary font-semibold inline-flex items-center transition duration-300 hover:scale-105"
          >
            Ver todos los reconocimientos
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7-7 7M5 12h16" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Modal de imagen */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 "
          onClick={closeModal}
        >
          <img
            src={selectedImage}
            alt="Diploma ampliado"
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-lg transition-transform duration-300 scale-100 "
          />
        </div>
      )}
    </section>
  );
}
