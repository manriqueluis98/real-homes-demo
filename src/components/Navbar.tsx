import { MdApi, MdLocalPhone } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Logo from "./ui/logo";

import { Button } from "./ui/Button";
import { siteData } from "@/config/siteData";

export default function Navbar() {
  return (
    <>
      <nav className=" flex flex-col md:flex-row md:justify-between md:px-4 justify-center items-center gap-4 py-2  lg:px-6 lg:py-4">
        <div className="nav-brand ">
          <Logo />
        </div>

        <div className="nav-menu flex flex-row gap-4">
          <img src="/assets/icons/menu-grid-dot.svg" />
          <Button
            variant={"navItem"}
            className="flex flex-row gap-2 py-2 px-4 w-fit shadow-md lg:px-6 md:shadow-none"
          >
            <FaPhoneAlt size={16} />
            <span>{siteData.phone}</span>
          </Button>
        </div>
      </nav>
    </>
  );
}
