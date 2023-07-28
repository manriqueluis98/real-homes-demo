import Hero from "@/components/Hero";
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Amenities from "@/components/Amenities";

import FoorSection from "@/components/FloorSection";
import LocationSection from "@/components/LocationSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";

const NatureSection = dynamic(() => import("../components/NatureSection"));

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between  text-pr-dark-green">
      <div className="nav-bg relative w-full">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Amenities />
      <NatureSection />
      <FoorSection />
      <LocationSection />
      <Contact />
      <hr className="min-w-[90%] 2xl:min-w-[82%] 3xl:min-w-[64%]"></hr>
      <Footer />
    </main>
  );
}
