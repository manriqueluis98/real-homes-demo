import { FaPhoneAlt } from "react-icons/fa";
import Logo from "./ui/logo";

import { siteData } from "@/config/siteData";
import { Button } from "./ui/CustomButton";
import NavButton from "./ui/NavButton";

export default function Navbar() {
  return (
    <>
      <nav className=" flex flex-col items-center justify-center gap-4 py-2 md:flex-row md:justify-between md:px-4  lg:px-6 lg:py-4">
        <div className="nav-brand ">
          <Logo />
        </div>

        <div className="nav-menu flex flex-row items-center gap-4">
          <div className="nav-items flex flex-row items-center gap-4">
            {siteData.navItems.map((navItem, idx) => {
              return (
                <NavButton key={idx} sectionId={navItem.href}>
                  {navItem.name}
                </NavButton>
              );
            })}
          </div>

          <img
            src="/assets/icons/menu-grid-dot.svg"
            alt="menu icon"
            className="2xl:hidden"
          />
          <Button
            variant={"navItem"}
            className="flex w-fit flex-row gap-2 px-4 py-2 shadow-md md:shadow-none lg:px-6 2xl:py-3"
          >
            <FaPhoneAlt size={16} />
            <span>{siteData.phone}</span>
          </Button>
        </div>
      </nav>
    </>
  );
}
