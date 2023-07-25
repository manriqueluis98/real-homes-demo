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
    <footer className="flex flex-col items-center justify-center gap-4 py-10">
      <div className="logo-container">
        <Logo />
      </div>
      <ul className="socials-container flex flex-row gap-4">
        {socialsData.map((social, idx) => {
          return (
            <li className=" p-4 rounded-full border-2" key={idx}>
              {social.icon}
            </li>
          );
        })}
      </ul>
      <div className="copyright flex flex-col items-center">
        <span>
          Designed by{" "}
          <Link
            className="text-pr-primary font-bold"
            href="https://inspirythemes.com/"
            target="_blank"
          >
            Inspiry
          </Link>
        </span>
        <Link
          href={"/"}
          className="bg-pr-dark-green text-white rounded-xl py-2 px-4 my-4"
        >
          Demo Developed by Luis M.
        </Link>

        <span className="font-light text-gray-600 my-4">
          © Real Homes - All rights reserved
        </span>
      </div>
    </footer>
  );
}
