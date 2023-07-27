import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import Logo from "./ui/logo";
import Link from "next/link";

const socialsData = [
  {
    href: "/",
    alt: "facebook",
    icon: <FaFacebook />,
  },
  {
    href: "/",
    alt: "twitter",
    icon: <FaTwitter />,
  },
  {
    href: "/",
    alt: "youtube",
    icon: <FaYoutube />,
  },
  {
    href: "/",
    alt: "linkedin",
    icon: <FaLinkedin />,
  },
];

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-4 py-10 md:w-full">
      <div className="brand-container flex flex-col items-center gap-4 md:w-full md:flex-row md:justify-between md:px-6 lg:justify-around">
        <div className="logo-container">
          <Logo />
        </div>
        <ul className="socials-container flex flex-row gap-4">
          {socialsData.map((social, idx) => {
            return (
              <li className=" rounded-full border-2 p-4" key={idx}>
                {social.icon}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="copyright flex flex-col items-center md:my-4">
        <span>
          Designed by{" "}
          <Link
            className="font-bold text-pr-primary"
            href="https://inspirythemes.com/"
            target="_blank"
          >
            Inspiry
          </Link>
        </span>
        <Link
          href={"/"}
          className="my-4 rounded-xl bg-pr-dark-green px-4 py-2 text-white"
        >
          Demo Developed by Luis M.
        </Link>

        <span className="my-4 font-light text-gray-600">
          © Real Homes - All rights reserved
        </span>
      </div>
    </footer>
  );
}
