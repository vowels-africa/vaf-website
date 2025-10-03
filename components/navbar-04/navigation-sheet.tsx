"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ArrowUpRight, Menu } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";

export const NavigationSheet = () => {
  const [open, setOpen] = useState(false);

  const handleItemClick = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full border-[#69e3e3] text-[#69e3e3] bg-transparent cursor-pointer hover:bg-[#69e3e3]">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="p-6 bg-[#010c23] border-[#69e3e3] text-white">
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <SheetDescription className="sr-only" />
        <div className="flex flex-col h-full">
          <Logo />
          <div className="flex-1 flex items-center">
            <NavMenu orientation="vertical" className="w-full" onItemClick={handleItemClick} />
          </div>
          <div className="mt-auto">
            <Button asChild className="w-full rounded-full bg-[#e8890e] hover:bg-[#f1951e] cursor-pointer">
              <Link href="https://tally.so/r/wgExGM" target="_blank">
                Request a Call <ArrowUpRight className="!h-5 !w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
