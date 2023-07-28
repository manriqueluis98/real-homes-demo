"use client";

import { customScrollTo } from "@/lib/utils/customScrollTo";
import { Button } from "./ui/CustomButton";

export default function HeroButton({ children }: { children: string }) {
  function scheduleBtn() {
    customScrollTo("#contact-section");
  }

  return (
    <Button className="text-xl" onClick={() => scheduleBtn()}>
      {children}
    </Button>
  );
}
