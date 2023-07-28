import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { iconImg } from "@/config/siteData";
import Carousel from "./ui/carousel";

const carouselImages = ["/assets/Nature-01.jpg", "/assets/Nature-02.jpg"];

export function CustomAccordion() {
  const data = [
    {
      trigger: "Energy Efficient Technology",
      icon: iconImg("image (16).svg"),
      description:
        "Embrace sustainability with smart insulation, LED lighting, and energy-efficient appliances for a greener living experience.",
    },
    {
      trigger: "Green Roofs",
      icon: iconImg("image (17).svg"),

      description:
        "Our condominium feature innovative green roofs, creating a harmonious blend of nature and urban living.",
    },
    {
      trigger: "Natural Materials",
      icon: iconImg("image (18).svg"),

      description:
        "Adorned with natural materials like responsibly sourced wood and stone accents, blending modern design with organic beauty.",
    },
    {
      trigger: "Water Preservation",
      icon: iconImg("image (19).svg"),

      description:
        "Experience our dedication to water preservation through innovative technologies and practices, ensuring a sustainable and eco-friendly living environment.",
    },
    {
      trigger: "Protecting Biodiversity",
      icon: iconImg("image (20).svg"),

      description:
        "Through conscious planning and sustainable landscaping, we create a nurturing habitat for diverse flora and fauna.",
    },
  ];

  return (
    <div className="w-full 2xl:mx-12 2xl:ml-32 3xl:flex 3xl:justify-evenly">
      <Accordion className=" md:px-2" type="multiple">
        {data.map((item, idx) => {
          return (
            <AccordionItem key={idx} value={`value-${idx}`}>
              <AccordionTrigger className="flex flex-row justify-start gap-4 font-serif hover:text-pr-primary hover:no-underline md:text-xl 2xl:text-2xl">
                {item.icon}
                <span>{item.trigger}</span>
              </AccordionTrigger>
              <AccordionContent className="2xl:max-w-sm 2xl:text-lg 2xl:font-light">
                {item.description}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}

export default function NatureSection() {
  return (
    <div className="mb-8 mt-12 flex  flex-col items-center justify-center px-4 2xl:m-0 2xl:my-32 2xl:min-w-full 2xl:p-0 3xl:overflow-hidden">
      <h2 className="max-w-md text-center font-serif text-2xl md:text-5xl 2xl:max-w-2xl 2xl:text-7xl">
        Kind to Both - Nature & People
      </h2>
      <div className="green-line my-4 h-[3px] w-20 bg-pr-primary md:my-8">
        {" "}
      </div>
      <div className="wrapper 2xl:flex 2xl:min-w-full 2xl:flex-row 2xl:items-center 2xl:justify-center 3xl:grid 3xl:grid-cols-2">
        <CustomAccordion />

        <Carousel
          key={"02"}
          images={carouselImages}
          arrowsPosition="bottom-0 left-0"
          aspectRatio="aspect-4/3"
        ></Carousel>
      </div>
    </div>
  );
}
