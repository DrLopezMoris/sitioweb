// frontend/components/HomeGallerySection.js
"use client";

import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import { Button } from "@heroui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination, Autoplay } from 'swiper/modules';
import { FaCalendarAlt, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa"; // FaCalendarAlt no se usa actualmente
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

export default function HomeGallerySection() {
  return (
    // CAMBIO 1: Usar min-h-screen para que la sección se expanda si el contenido es mayor.
    // Añadimos 'flex items-center' para centrar el contenido verticalmente en la pantalla si el contenido es menor que min-h-screen.
    <section className="relative min-h-screen flex items-center py-12 px-4 md:px-8 overflow-hidden">
      {/* Imagen de Fondo (siempre la misma) */}
      <div className="absolute inset-0 -z-10 ">
        <Image
          src="/banner-gallery-bg.jpg"
          alt="Fondo de galería"
          fill
          style={{ objectFit: 'cover' }}
          className="absolute inset-0 "
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gray-800 bg-opacity-70"></div>
      </div>

      {/* CAMBIO 2: Eliminar h-[80%] y usar padding vertical generoso. */}
      {/* Añadimos 'py-10' (o más) para espacio vertical. 'content-center' ya no es necesario aquí si el padre es flex items-center */}
      <div className="container mx-auto w-full relative z-10 backdrop-blur-sm md:p-8 rounded-xl border-2 border-secondary bg-gradient-to-tr from-[#1a1c36] via-[#000945]/50 to-[#00917d]/30 py-8 lg:py-16">
        {/* CAMBIO 3: Ajustar espaciado interno del grid y asegurar padding en las columnas. */}
        {/* Usamos px-4 para mobile y md:px-8 para desktop. py-8 para espacio vertical general del grid. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4 md:px-8 py-8">
          {/* Columna Izquierda: Imagen Estática con Link */}
          <div className="md:pr-4 md:mr-4 rounded-xl"> {/* Eliminamos md:mx-4 aquí, ya que el mx-auto del container y px-4/8 del grid ya lo manejan */}
            <Link href="/gallery" passHref>
              <Swiper
                modules={[EffectCube, Autoplay]}
                effect="cube"
                grabCursor={true}
                loop={true}
                cubeEffect={{
                  shadow: true,
                  slideShadows: true,
                  shadowOffset: 20,
                  shadowScale: 0.94,
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                // CAMBIO 4: Aumentar la altura mínima del Swiper en mobile.
                // h-96 = 384px, lo cual es mejor para mobile que h-80 (320px).
                className="w-full h-80 lg:h-[500px] overflow-hidden rounded-xl"
              >
                {[
                  "/secciongallery.jpg",
                  "/2.jpg",
                  "/3.jpg",
                  "/4.jpg",
                  "/5.jpg",
                  "/6.jpg"
                ].map((src, i) => (
                  <SwiperSlide key={i} className='overflow-hidden bg-transparent rounded-xl'>
                    <div className="relative w-full h-full "> {/* Cambiado h-[100%] a h-full, que es lo mismo pero más estándar de Tailwind */}
                      <Image
                        src={src}
                        alt={`Slide ${i + 1}`}
                        fill
                        className="object-cover rounded-xl"
                        priority={i === 0}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Link>
          </div>

          {/* Columna Derecha: Título Estático y CTA */}
          {/* CAMBIO 5: Ajustar padding en columna derecha. Eliminamos 'pl-4' y 'p-4' duplicados del div interno. */}
          {/* Usamos el px-4/md:px-8 del grid y un padding general para la columna. */}
          <div className="text-center "> {/* Opcional: md:text-left para alinear texto a la izquierda en desktop */}
            <h2
              className="inline-block text-4xl lg:text-7xl leading-tight p-4 mb-8 font-petit drop-shadow-[1px_2px_2px_rgba(26,28,54,0.6)] text-[#f6faf9] border-b-4 border-primary"
              style={{
                textShadow:
                  `
               -1px  1px 0 #00917d,
                1px  1px 0 #171717
              `
              }}>
              Cada cambio,
              <br />una obra de arte.
            </h2>

            <div className="flex text-white space-x-4 mb-6 pb-8 justify-center"> {/* CAMBIO 6: Opcional: md:justify-start para alinear iconos a la izquierda en desktop */}
              <a
                href="https://www.instagram.com/dr.lopezmoris.rinologia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white bg-opacity-10 drop-shadow-lg hover:bg-[#2bc37f] w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 "
                aria-label="Instagram"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/carlos-b-l%C3%B3pez-moris-225a0655/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white bg-opacity-10 drop-shadow-lg hover:bg-[#2bc37f] w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-xl" />
              </a>
              <a
                href="https://wa.me/5491172003461"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white bg-opacity-10 drop-shadow-lg hover:bg-[#2bc37f] w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-xl" />
              </a>
            </div>
            <Button
              as={Link}
              href="/gallery"
              // CAMBIO 7: Asegurar que el botón se ajuste bien en mobile y desktop
              className="w-full md:w-auto bg-[#2bc37f] text-white text-base font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-green-600 transition-colors"
              variant="flat"
            >
              Ver Galería Antes y Después
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}