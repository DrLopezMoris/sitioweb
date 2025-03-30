"use client";
import React from "react";
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Button } from "@heroui/react";
import Link from "next/link";

export default function PerfilView() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-6">
      {/* Professional Profile Header */}
      <div className="w-full border-b-2 border-primary pb-6 mb-6">
        <div className="text-left">
          <h3 className="text-lg px-4 font-light text-[#51c1aa] mb-2">
            Perfil Profesional
          </h3>
          
          <h2 className="text-2xl px-4 md:text-4xl font-semibold mb-4">
            Otorrinolaringólogo | Especialista en Rinología
          </h2>
          
          <p className="italic text-sm md:text-base px-4 max-w-2xl ">
            "Me caracterizo por brindarle a mis pacientes un trato cercano y transparente, 
            y si lo necesitas, estoy acá para ayudarte."
          </p>
        </div>
      </div>

      {/* Content Container - Responsive Flex */}
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Left Column - Image Carousel */}
        <div className="w-full md:w-1/2">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={10}
            loop={true}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="w-full aspect-square max-w-[600px] mx-auto"
          >
            {["/perfil2.jpg", "/perfil1.jpg", "/perfil3.jpg"].map((src, index) => (
              <SwiperSlide key={index} className="flex items-center justify-center">
                <Image
                  src={src}
                  alt={`Foto ${index + 1}`}
                  width={600}
                  height={300}
                  className="object-scale-down w-full h-full rounded-lg shadow-md"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
        {/* Right Column - Biography and CTA */}
        <div className="w-full md:w-1/2 px-4">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-light mb-4 text-[#171717]">
              Perfil y Biografía
            </h2>
            
            <div className="space-y-4 mb-6">
              <p className="text-sm md:text-base text-justify">
                Soy el Dr. Carlos López Moris, otorrinolaringólogo especializado en Rinología y Cirugía Estética Facial. 
                Me gradué de la Universidad Nacional de Tucumán (UNT) y me especialicé en la Universidad de Buenos Aires (UBA). 
                Posteriormente, completé un posgrado en Rinología y Cirugía Facial en la UNAM y un diplomado en Inteligencia Artificial aplicada en Medicina por la Universidad Favaloro. 
                Actualmente, formo parte del equipo de Rinología en el Hospital Universitario CEMIC y soy Profesor Asistente en la carrera de medicina.
              </p>
              
              <p className="text-sm md:text-base text-justify">
                En mi consultorio, me especializo en cirugías nasales de baja y alta complejidad, así como en rinología funcional y estética. 
                Soy miembro de diversas sociedades médicas y participo activamente en congresos para mantenerme actualizado con las últimas técnicas y avances. 
                Me caracteriza un trato cercano y transparente con mis pacientes, siempre buscando brindarles la mejor atención posible.
              </p>
            </div>

            <div className="flex flex-col space-y-4 items-center md:items-start">
              <Link href="/perfil" className="text-primary text-sm mb-4">
                Ver mas...
              </Link>

              <Button
                as={Link}
                href="https://wa.me/5491172003461"
                className="w-full md:w-auto bg-[#2bc37f] text-white text-base font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-green-600 transition-colors"
                variant="flat"
              >
                Agenda tu cita
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}