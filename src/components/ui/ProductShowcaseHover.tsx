import { useState } from "react";
import { Button } from "./Button";

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
      <div className="group product-container relative">
        <div className="product-image  aspect-4/3">
          <img
            src={product.imageUrl}
            className="object-cover  min-w-full group-hover:scale-[1.03] duration-500"
          ></img>
        </div>
        <div
          className={` product-content absolute -bottom-28 group-hover:-translate-y-28  duration-300 text-white bg-gradient-to-t p-8 from-black/70 min-w-full to-transparent`}
        >
          <h3 className="text-2xl md:text-4xl md:w-24 font-serif">
            {product.title}
          </h3>
          <p className="text-xl">{product.subtitle}</p>
          <Button>{product.buttonText}</Button>
        </div>
      </div>
    </div>
  );
}
