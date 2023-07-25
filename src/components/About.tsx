import { siteData } from "@/config/siteData";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

export const GreenLine = () => {
  return (
    <>
      <div className="bg-pr-primary h-[3px] w-20 my-4"></div>
    </>
  );
};

export default function About() {
  return (
    <div className="p-4 my-4">
      <span className=" text-pr-primary font-semibold">
        {siteData.about.upperText}
      </span>
      <h2 className="text-2xl font-serif py-4">{siteData.about.title}</h2>
      <div className="bg-pr-primary h-[3px] w-14"></div>

      <p className="text-xl pb-2 pt-4">{siteData.about.description}</p>
      <Link
        href={"/"}
        className="text-pr-primary py-2 font-bold flex flex-row gap-1 items-center "
      >
        <IoIosArrowForward />
        <span>About Us</span>
      </Link>

      <div className="stats-container flex flex-col gap-16 my-8 items-center justify-center">
        {siteData.about.stats.map((stat) => {
          return (
            <div
              className="stat flex flex-col justify-center items-center"
              key={stat.title_1}
            >
              <p className="text-5xl font-serif">{stat.number}</p>
              <GreenLine></GreenLine>
              <h3 className="text-xl text-center">
                {stat.title_1}
                <br />
                {stat.title_2}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
