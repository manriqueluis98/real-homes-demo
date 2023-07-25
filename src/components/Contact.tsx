import { iconImg } from "@/config/siteData";
import Link from "next/link";

function ContactForm() {
  return (
    <>
      <form></form>
    </>
  );
}

function ContactAgent() {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-4 my-8">
      <div className="agent-image">
        <img alt="real state agent" src="/assets/image_360.png" width={128} />
      </div>

      <div className="agent-data">
        <p className="font-bold">Jenny Wilswon</p>
        <p className="font-light text-gray-600">Real State Agent</p>
      </div>

      <div className="contact-data">
        <p>contact@realhomes.io</p>
        <p>(222) 546 7594</p>
      </div>

      <div className="address-data">
        <p>1130, Avenue Villa Newyork, USA</p>
      </div>

      <div className="cta-data flex flex-col">
        <span>Would you like to visit the property?</span>
        <Link
          className="font-sabns text-pr-primary underline font-bold"
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
    <div className="flex flex-col">
      <div className="p-4 my-4 bg-pr-dark-green text-white flex flex-col items-center pt-16">
        <span className=" font-semibold ">- Quick Connect</span>
        <h2 className="text-2xl font-serif py-4 text-center">
          Get in touch with us for any questions & help
        </h2>
        <div className="bg-white h-[3px] w-14"></div>
      </div>

      <ContactForm />

      <ContactAgent />
    </div>
  );
}
