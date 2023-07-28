import Hero from "@/components/Hero";
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Amenities from "@/components/Amenities";

import FoorSection from "@/components/FloorSection";
import LocationSection from "@/components/LocationSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";
import ButtonToTop from "@/components/ui/ButtonToTop";
import NavBarAfterScroll from "@/components/ui/NavBarAfterScroll";

const NatureSection = dynamic(() => import("../components/NatureSection"));

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between  text-pr-dark-green lg:relative">
      <div className="nav-bg relative w-full">
        <Navbar />
        <NavBarAfterScroll />
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

      <ButtonToTop />
    </main>
  );
}
