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
    <div className="w-full">
      <Accordion className="md:px-2" type="multiple">
        {data.map((item, idx) => {
          return (
            <AccordionItem key={idx} value={`value-${idx}`}>
              <AccordionTrigger className="hover:no-underline md:text-xl hover:text-pr-primary font-serif flex-row flex justify-start gap-4">
                {item.icon}
                <span>{item.trigger}</span>
              </AccordionTrigger>
              <AccordionContent>{item.description}</AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}

export default function NatureSection() {
  return (
    <div className="flex mb-8 mt-12  flex-col justify-center items-center px-4">
      <h2 className="text-2xl md:text-5xl font-serif text-center">
        Kind to Both - Nature & People
      </h2>
      <div className="bg-pr-primary green-line w-20 h-[3px] my-4 md:my-8">
        {" "}
      </div>
      <CustomAccordion />

      <div className="test ">
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
