"use client";

import { MdOutlineExpandLess } from "react-icons/md";
import { Button } from "./CustomButton";
import { scrollToTop } from "@/lib/utils/customScrollTo";
import { useEffect, useState } from "react";

export default function ButtonToTop() {
  const [isVisible, setIsVisible] = useState(false);

  function handleGoUp() {
    scrollToTop();
  }

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div
      onClick={handleGoUp}
      className={`hidden rounded-md border-2 border-pr-primary bg-pr-primary p-1 transition-all duration-500 hover:bg-pr-light-green lg:fixed lg:bottom-2 lg:right-2 xl:bottom-4 xl:right-4 ${
        isVisible ? "  lg:z-50 lg:block lg:shadow-xl" : "lg:hidden"
      }`}
    >
      <MdOutlineExpandLess
        className="text-white hover:text-pr-primary"
        size={32}
        alt="Icon to Top"
      ></MdOutlineExpandLess>
    </div>
  );
}
