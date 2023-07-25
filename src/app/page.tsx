"use client";

import { Button, buttonVariants } from "@/components/ui/Button";
import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Amenities from "@/components/Amenities";
import NatureSection from "@/components/NatureSection";
import FoorSection from "@/components/FoorSection";
import LocationSection from "@/components/LocationSection";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between  text-pr-dark-green">
      <div className="nav-bg relative">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Amenities />
      <NatureSection />
      <FoorSection />
      <LocationSection />
      <Contact />
    </main>
  );
}
