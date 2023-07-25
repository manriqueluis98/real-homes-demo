import { MdApi, MdLocalPhone } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Logo from "./ui/logo";

import { Button } from "./ui/Button";
import { siteData } from "@/config/siteData";

export default function Navbar() {
  return (
    <>
      <nav className=" flex flex-col justify-center items-center gap-4 py-2 ">
        <div className="nav-brand ">
          <Logo />
        </div>

        <div className="nav-menu flex flex-row gap-4">
          <img src="/assets/icons/menu-grid-dot.svg" />
          <Button
            variant={"navItem"}
            className="flex flex-row gap-2 py-2 px-4 w-fit shadow-md"
          >
            <FaPhoneAlt size={16} />
            <span>{siteData.phone}</span>
          </Button>
        </div>
      </nav>
    </>
  );
}
