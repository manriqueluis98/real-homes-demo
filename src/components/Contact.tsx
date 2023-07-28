import { iconImg } from "@/config/siteData";
import Link from "next/link";
import { ContactForm } from "./ContactForm";

function ContactAgent() {
  return (
    <div className="my-8 flex flex-col items-center justify-center gap-4 text-center md:grid md:grid-cols-2 md:place-items-center 2xl:grid-cols-4 2xl:gap-0 2xl:text-left 2xl:text-lg">
      <div className="agent md:flex md:flex-row md:items-center md:gap-4">
        <div className="agent-image">
          <img
            alt="real state agent"
            src="/assets/image-360.webp"
            className="w-[128px] md:w-[100px]"
          />
        </div>

        <div className="agent-data">
          <p className="font-bold">Jenny Wilswon</p>
          <p className="font-light text-gray-600">Real State Agent</p>
        </div>
      </div>

      <div className="contact-data">
        <p>contact@realhomes.io</p>
        <p>(222) 546 7594</p>
      </div>

      <div className="address-data 2xl:max-w-[200px]">
        <p>1130, Avenue Villa Newyork, USA</p>
      </div>

      <div className="cta-data flex flex-col">
        <span>Would you like to visit the property?</span>
        <Link
          className="font-sabns font-bold text-pr-primary underline"
          href={"/"}
        >
          Schedule a Tour
        </Link>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <div className="flex flex-col md:w-full 2xl:relative">
      <div className="banner 2xl:grid 2xl:grid-cols-2 2xl:bg-pr-dark-green 2xl:bg-[url(/assets/form-kitchen.webp)] 2xl:bg-cover">
        <div className="my-4 flex flex-col items-center bg-pr-dark-green p-4 pt-16 text-white 2xl:my-0 2xl:items-end 2xl:pb-96">
          <div className="text-wrapper 2xl:mr-20">
            <span className=" font-semibold ">- Quick Connect</span>
            <h2 className="py-4 text-center font-serif text-2xl md:text-4xl 2xl:max-w-[500px] 2xl:text-left">
              Get in touch with us for any questions & help
            </h2>
            <div className="my-4 h-[3px] w-14 bg-white"></div>
          </div>
        </div>
      </div>

      <div className="form-wrapper 2xl:absolute 2xl:top-64 2xl:z-50 2xl:flex 2xl:min-w-full 2xl:items-center 2xl:justify-center">
        <ContactForm />
      </div>

      <div className="agent-wrapper 2xl:mx-24 2xl:mb-8 2xl:mt-64 3xl:flex 3xl:max-w-screen-xl 3xl:flex-col 3xl:items-center 3xl:self-center">
        <ContactAgent />
      </div>
    </div>
  );
}
