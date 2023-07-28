"use client";

import { FaPhoneAlt } from "react-icons/fa";
import Logo from "./ui/logo";

import { siteData } from "@/config/siteData";
import { Button } from "./ui/CustomButton";
import NavButton from "./ui/NavButton";
import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { customScrollTo } from "@/lib/utils/customScrollTo";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileOpen]);

  return (
    <>
      <nav
        className={`${
          isMobileOpen ? "hidden" : ""
        } flex flex-col items-center justify-center gap-4 py-2 md:flex-row md:justify-between md:px-4  lg:px-6 lg:py-4`}
      >
        <div className="nav-brand ">
          <Logo />
        </div>

        <div className="nav-menu flex flex-row items-center gap-4">
          <div className="nav-items hidden items-center gap-4 2xl:flex 2xl:flex-row">
            {siteData.navItems.map((navItem, idx) => {
              return (
                <NavButton key={idx} sectionId={navItem.href}>
                  {navItem.name}
                </NavButton>
              );
            })}
          </div>

          <img
            onClick={() => setIsMobileOpen(true)}
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

      {isMobileOpen && (
        <>
          <nav className="fixed inset-y-0 z-50 flex h-screen w-[90vw] max-w-[400px] flex-col overflow-y-auto bg-white 2xl:hidden">
            <div
              onClick={() => setIsMobileOpen(false)}
              className="nav-close flex w-full flex-row justify-end px-2 py-2"
            >
              <MdClose size={32} className="text-pr-dark-green"></MdClose>
            </div>
            <div className="flex flex-col items-start justify-start">
              {siteData.navItems.map((navItem, idx) => {
                return (
                  <Button
                    key={idx}
                    variant={"navItem"}
                    className="flex w-full flex-row items-start justify-start rounded-none px-4 py-3 
                    text-left text-2xl font-light text-pr-primary md:justify-start"
                    onClick={() => {
                      customScrollTo(navItem.href);
                      setIsMobileOpen(false);
                    }}
                  >
                    {navItem.name}
                  </Button>
                );
              })}
            </div>
          </nav>
        </>
      )}
    </>
  );
}
