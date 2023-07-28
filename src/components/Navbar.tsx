import { MdApi, MdLocalPhone } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Logo from "./ui/logo";

import { Button } from "./ui/CustomButton";
import { siteData } from "@/config/siteData";

export default function Navbar() {
  return (
    <>
      <nav className=" flex flex-col items-center justify-center gap-4 py-2 md:flex-row md:justify-between md:px-4  lg:px-6 lg:py-4">
        <div className="nav-brand ">
          <Logo />
        </div>

        <div className="nav-menu flex flex-row gap-4">
          <img src="/assets/icons/menu-grid-dot.svg" />
          <Button
            variant={"navItem"}
            className="flex w-fit flex-row gap-2 px-4 py-2 shadow-md md:shadow-none lg:px-6"
          >
            <FaPhoneAlt size={16} />
            <span>{siteData.phone}</span>
          </Button>
        </div>
      </nav>
    </>
  );
}
