import { useState } from "react";
import { Button } from "./CustomButton";

type floorData = {
  title: string;
  imageUrl: string;
  subtitle: string;
  buttonText: string;
};

export default function ProductShowcaseHover({
  product,
}: {
  product: floorData;
}) {
  return (
    <div className="overflow-hidden">
      <div className="product-container group relative">
        <div className="product-image  aspect-4/3">
          <img
            src={product.imageUrl}
            className="min-w-full  object-cover duration-500 group-hover:scale-[1.03]"
            alt="Floor image"
          ></img>
        </div>
        <div
          className={` product-content absolute -bottom-28 min-w-full  bg-gradient-to-t from-black/70 to-transparent p-8 text-white duration-300 group-hover:-translate-y-28`}
        >
          <h3 className="font-serif text-2xl md:w-24 md:text-4xl">
            {product.title}
          </h3>
          <p className="text-xl">{product.subtitle}</p>
          <Button>{product.buttonText}</Button>
        </div>
      </div>
    </div>
  );
}
