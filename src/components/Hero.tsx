import { siteData } from "@/config/siteData";
import { Button } from "./ui/CustomButton";

import "./Hero.css";

export default function Hero() {
  return (
    <>
      <div className="hero-content bg-contain px-4 pb-10 pt-4 md:p-10 lg:mx-32 xl:mx-24 2xl:py-12 2xl:pb-40">
        <h2 className="px-2 text-xl">{siteData.hero.upperText}</h2>
        <h2 className="py-2 font-serif text-5xl md:max-w-md md:text-7xl xl:text-8xl xl:leading-snug">
          {siteData.hero.title}
        </h2>

        <div className="mx-2 mb-8  h-[3px] w-28  bg-pr-primary/70 "></div>

        <ul className="mb-6 flex flex-col gap-2">
          {siteData.hero.items.map((item) => {
            return (
              <li key={item.name} className="flex flex-row gap-2">
                <div className="li-icon flex w-6 justify-center">
                  {item.icon}
                </div>
                <span className="xl:text-lg">{item.name}</span>
              </li>
            );
          })}
        </ul>

        <Button className="text-xl">{siteData.hero.button.text}</Button>
      </div>
    </>
  );
}
