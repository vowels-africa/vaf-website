"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

interface NavMenuProps extends NavigationMenuProps {
  onItemClick?: () => void;
}

export const NavMenu = ({ onItemClick, ...props }: NavMenuProps) => {
  const [activeSection, setActiveSection] = useState("");

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    if (onItemClick) onItemClick();
  };

  useEffect(() => {
    const sections = ["framework", "solutions", "products", "pricing"];

    const handleScroll = () => {
      let currentSection = "";

      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (!element) return;

        const rect = element.getBoundingClientRect();
        // Section is active if it's in the top half of the viewport
        if (rect.top <= window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
          currentSection = sectionId;
        }
      });

      // If we're above all sections (hero area), clear active state
      const frameworkElement = document.getElementById("framework");
      if (frameworkElement && frameworkElement.getBoundingClientRect().top > window.innerHeight / 2) {
        currentSection = "";
      }

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
        // Update URL hash
        if (currentSection) {
          window.history.replaceState(null, '', `#${currentSection}`);
        } else {
          window.history.replaceState(null, '', window.location.pathname);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return (
  <NavigationMenu {...props}>
    <NavigationMenuList className="gap-4 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link href="#framework" className={cn("border border-transparent focus:bg-transparent focus:text-white active:bg-transparent hover:bg-transparent hover:text-white !rounded-full px-4", activeSection === "framework" && "!bg-[#69e3e3] !focus:bg-[#69e3e3] active:bg-[#69e3e3] !hover:bg-[#69e3e3] !text-[#010c23]")} onClick={() => handleNavClick("framework")}>Framework</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link href="#solutions" className={cn("border border-transparent focus:bg-transparent focus:text-white active:bg-transparent hover:bg-transparent hover:text-white !rounded-full px-4", activeSection === "solutions" && "!bg-[#69e3e3] !focus:bg-[#69e3e3] active:bg-[#69e3e3] !hover:bg-[#69e3e3] !text-[#010c23]")} onClick={() => handleNavClick("solutions")}>Solutions</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link href="#products" className={cn("border border-transparent focus:bg-transparent focus:text-white active:bg-transparent hover:bg-transparent hover:text-white !rounded-full px-4", activeSection === "products" && "!bg-[#69e3e3] !focus:bg-[#69e3e3] active:bg-[#69e3e3] !hover:bg-[#69e3e3] !text-[#010c23]")} onClick={() => handleNavClick("products")}>Products</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link href="#pricing" className={cn("border border-transparent focus:bg-transparent focus:text-white active:bg-transparent hover:bg-transparent hover:text-white !rounded-full px-4", activeSection === "pricing" && "!bg-[#69e3e3] !focus:bg-[#69e3e3] active:bg-[#69e3e3] !hover:bg-[#69e3e3] !text-[#010c23]")} onClick={() => handleNavClick("pricing")}>Pricing</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
  );
};
