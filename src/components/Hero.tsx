import { siteData } from "@/config/siteData";
import { Button } from "./ui/Button";

import "./Hero.css";

export default function Hero() {
  return (
    <>
      <div className="hero-content px-4 pt-4 pb-10 bg-contain">
        <h2 className="text-xl px-2">{siteData.hero.upperText}</h2>
        <h2 className="text-5xl py-2 font-serif">{siteData.hero.title}</h2>

        <ul className="flex flex-col gap-2 mb-6">
          {siteData.hero.items.map((item) => {
            return (
              <li key={item.name} className="flex flex-row gap-2">
                <div className="li-icon flex justify-center w-6">
                  {item.icon}
                </div>
                <span>{item.name}</span>
              </li>
            );
          })}
        </ul>

        <Button className="text-xl">{siteData.hero.button.text}</Button>
      </div>
    </>
  );
}
