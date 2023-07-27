"use client";

import { useEffect, useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

/* eslint-disable @next/next/no-img-element */
type arrowsPosition =
  | "top-0 left-0"
  | "top-0 right-0"
  | "bottom-0 left-0"
  | "bottom-0 right-0";

type aspectRatio = "aspect-square" | "aspect-video" | "aspect-4/3";

export default function Carousel({
  images,
  arrowsPosition,
  aspectRatio,
}: {
  images: string[];
  arrowsPosition: arrowsPosition;
  aspectRatio: aspectRatio;
}) {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);
  function prevImage() {
    setCurrentImageIdx((prev) => {
      if (prev === 0) {
        return images.length - 1;
      } else {
        return prev - 1;
      }
    });
  }

  function nextImage() {
    setCurrentImageIdx((prev) => {
      if (prev === images.length - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  }

  useEffect(() => {
    const imgInterval = setInterval(prevImage, 5000);

    return () => {
      clearInterval(imgInterval);
    };
  }, []);

  return (
    <div
      className={`${aspectRatio} w-[90vw] md:w-[95vw] carousel-container relative`}
    >
      <div
        style={{ backgroundImage: `url(${images[currentImageIdx]})` }}
        className="w-full h-full images-container bg-cover bg-center transition-all ease-in duration-800"
      ></div>
      <div
        className={`controls-container absolute ${arrowsPosition} flex flex-row  w-fit gap-[2px]`}
      >
        <div className="p-4 bg-white/95" onClick={prevImage}>
          <MdArrowBackIosNew size={24}></MdArrowBackIosNew>
        </div>
        <div className="p-4 bg-white/95" onClick={nextImage}>
          <MdArrowForwardIos size={24}></MdArrowForwardIos>
        </div>
      </div>
    </div>
  );
}
