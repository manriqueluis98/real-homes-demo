import { siteData } from "@/config/siteData";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import dynamic from "next/dynamic";
const Carousel = dynamic(() => import("./ui/carousel"));

const carouselImages = [
  "/assets/magical-life-1.webp",
  "/assets/magical-life-2.webp",
];

export const GreenLine = () => {
  return (
    <>
      <div className="my-4 h-[3px] w-20 bg-pr-primary md:my-8"></div>
    </>
  );
};

export default function About() {
  return (
    <div className="my-4 flex w-full flex-col items-center justify-center p-4 3xl:container 2xl:px-32">
      <div className="about-content  md:flex md:flex-row lg:mb-16 lg:w-full lg:items-center lg:justify-between  ">
        <div className=" title-container">
          <span className=" font-semibold text-pr-primary">
            {siteData.about.upperText}
          </span>
          <h2 className=" py-4 font-serif text-2xl md:text-5xl lg:max-w-[500px] 2xl:text-6xl">
            {siteData.about.title}
          </h2>
          <div className="h-[3px] w-14 bg-pr-primary"></div>
        </div>

        <div className="description-container md:max-w-sm  2xl:my-28 2xl:max-w-xl">
          <p className="pb-2 pt-4 text-xl md:text-[22px] md:leading-8 2xl:my-4">
            {siteData.about.description}
          </p>
          <Link
            href={"/"}
            className="flex flex-row items-center gap-1 py-2 font-bold text-pr-primary "
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

      <div className="stats-container my-8 flex flex-col items-center justify-center gap-16 md:my-14 md:flex-row md:gap-0 md:divide-x 2xl:my-32">
        {siteData.about.stats.map((stat) => {
          return (
            <div
              className="stat  flex flex-col items-center  justify-center  md:px-6 lg:px-16 2xl:px-24"
              key={stat.title_1}
            >
              <p className="font-serif text-5xl 2xl:text-6xl">{stat.number}</p>
              <GreenLine></GreenLine>
              <h3 className=" text-center text-xl 2xl:w-[200px]">
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
