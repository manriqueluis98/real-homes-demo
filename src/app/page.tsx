"use client";

import { Button, buttonVariants } from "@/components/ui/Button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button variant={"navItem"}>Schedule a Tour</Button>
    </main>
  );
}
