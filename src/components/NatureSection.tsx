import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { iconImg } from "@/config/siteData";

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
      <Accordion type="multiple">
        {data.map((item, idx) => {
          return (
            <AccordionItem key={idx} value={`value-${idx}`}>
              <AccordionTrigger className="hover:no-underline hover:text-pr-primary font-serif flex-row flex justify-start gap-4">
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
    <div className="flex flex-col justify-center items-center px-4">
      <h2 className="text-2xl font-serif text-center">
        Kind to Both - Nature & People
      </h2>
      <div className="bg-pr-primary green-line w-20 h-[3px] my-4"> </div>
      <CustomAccordion />
    </div>
  );
}
