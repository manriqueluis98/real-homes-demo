"use client";

import { customScrollTo } from "@/lib/utils/customScrollTo";
import { Button } from "./CustomButton";

export default function NavButton({
  children,
  sectionId,
}: {
  children: string;
  sectionId: string;
}) {
  function scheduleBtn() {
    customScrollTo(sectionId);
  }

  return (
    <Button
      variant={"navItem"}
      className="px-6 py-3 text-base"
      onClick={() => scheduleBtn()}
    >
      {children}
    </Button>
  );
}
