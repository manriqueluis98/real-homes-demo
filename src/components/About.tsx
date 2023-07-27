import { siteData } from "@/config/siteData";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import Carousel from "./ui/carousel";

const carouselImages = [
  "/assets/magical-life-1.jpg",
  "/assets/magical-life-2.jpg",
];

export const GreenLine = () => {
  return (
    <>
      <div className="bg-pr-primary h-[3px] w-20 my-4 md:my-8"></div>
    </>
  );
};

export default function About() {
  return (
    <div className="p-4 my-4 flex flex-col justify-center items-center ">
      <div className="about-content md:flex md:flex-row md:py-10">
        <div className="title-container">
          <span className=" text-pr-primary font-semibold">
            {siteData.about.upperText}
          </span>
          <h2 className="text-2xl md:text-5xl font-serif py-4">
            {siteData.about.title}
          </h2>
          <div className="bg-pr-primary h-[3px] w-14"></div>
        </div>

        <div className="description-container md:max-w-sm">
          <p className="text-xl md:text-[22px] md:leading-8 pb-2 pt-4">
            {siteData.about.description}
          </p>
          <Link
            href={"/"}
            className="text-pr-primary py-2 font-bold flex flex-row gap-1 items-center "
          >
            <IoIosArrowForward />
            <span>About Us</span>
          </Link>
        </div>
      </div>

      <Carousel
        key={"01"}
        images={carouselImages}
        arrowsPosition="bottom-0 right-0"
        aspectRatio="aspect-video"
      ></Carousel>

      <div className="stats-container flex flex-col md:flex-row md:my-16 md:divide-x md:gap-8 gap-16 my-8 items-center justify-center">
        {siteData.about.stats.map((stat) => {
          return (
            <div
              className="stat flex flex-col justify-center md:px-4 items-center"
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
