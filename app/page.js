"use client";

import React from "react";
import { HeroUIProvider } from "@heroui/react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PerfilView from "@/components/PerfilView";
import Diploma from '@/components/Diploma';
import Faq from '@/components/Faq';
import Footer from "@/components/Footer";



export default function Home() {
  return (
    <HeroUIProvider>
      <Header />
      <main className="">
        <Hero />
        <PerfilView />
        <Diploma />
        <Faq />
      </main>
      <Footer />
    </HeroUIProvider>
  );
}
