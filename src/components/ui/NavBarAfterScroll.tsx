"use client";

import { FaPhoneAlt } from "react-icons/fa";
import Logo from "./logo";

import { siteData } from "@/config/siteData";
import { Button } from "./CustomButton";
import NavButton from "./NavButton";
import { useEffect, useState } from "react";

export default function NavBarAfterScroll() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 80) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);
  return (
    <>
      <nav
        className={`hidden w-full items-center justify-center gap-4 bg-white py-2 shadow-md md:flex-row md:justify-between md:px-4  lg:px-6 lg:py-4 ${
          isVisible
            ? "2xl:fixed 2xl:top-0 2xl:z-50 2xl:flex 2xl:flex-row"
            : "2xl:hidden"
        }`}
      >
        <div className="nav-brand">
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
        </div>
      </nav>
    </>
  );
}
