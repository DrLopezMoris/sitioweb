"use client";

import React from "react";
import { HeroUIProvider } from "@heroui/react";
import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PerfilView from "@/components/PerfilView";
import Diploma from "@/components/Diploma";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import HomeGallerySection from "@/components/HomeGallerySection"; 
import ReviewsHighlight from "@/components/ReviewsHighlight";
import MultimediaSection from "@/components/MultimediaSection";
import RhinoscopySection from '../components/RhinoscopySection';


export default function Home() {
  return (
    <HeroUIProvider>
      <Header />

      <main className="relative z-20">
        {/* Contenedor del fondo */}
        <div className="fixed inset-0 w-full h-screen -z-10">
          {/* Imagen de fondo */}
          <Image
            src="/banner1.jpg" // Asegúrate de que la imagen esté en public/banner1.jpg
            alt="Dr. Carlos López Moris"
            layout="fill"
            objectFit="cover"
            priority
            className="mt-20"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        {/* Contenido */}
        <Hero />
        <PerfilView />
        <Diploma />
        <HomeGallerySection />
        <ReviewsHighlight />
        <MultimediaSection />
        <RhinoscopySection />
        <Faq />
        <Footer />
      </main>

      
    </HeroUIProvider>
  );
}
