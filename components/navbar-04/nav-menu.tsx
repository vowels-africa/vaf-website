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
    const sections = ["problem", "solution", "framework", "use-cases", "testimonials"];
    
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
      const problemElement = document.getElementById("problem");
      if (problemElement && problemElement.getBoundingClientRect().top > window.innerHeight / 2) {
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
          <Link href="#problem" className={cn("border border-transparent focus:bg-transparent focus:text-white active:bg-transparent hover:bg-transparent hover:text-white !rounded-full px-4", activeSection === "problem" && "!bg-[#69e3e3] !focus:bg-[#69e3e3] active:bg-[#69e3e3] !hover:bg-[#69e3e3] !text-[#010c23]")} onClick={() => handleNavClick("problem")}>Problem</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link href="#solution" className={cn("border border-transparent focus:bg-transparent focus:text-white active:bg-transparent hover:bg-transparent hover:text-white !rounded-full px-4", activeSection === "solution" && "!bg-[#69e3e3] !focus:bg-[#69e3e3] active:bg-[#69e3e3] !hover:bg-[#69e3e3] !text-[#010c23]")} onClick={() => handleNavClick("solution")}>Solution</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link href="#framework" className={cn("border border-transparent focus:bg-transparent focus:text-white active:bg-transparent hover:bg-transparent hover:text-white !rounded-full px-4", activeSection === "framework" && "!bg-[#69e3e3] !focus:bg-[#69e3e3] active:bg-[#69e3e3] !hover:bg-[#69e3e3] !text-[#010c23]")} onClick={() => handleNavClick("framework")}>Framework</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      {/* <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link href="#">Pricing</Link>
        </NavigationMenuLink>
      </NavigationMenuItem> */}
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link href="#use-cases" className={cn("border border-transparent focus:bg-transparent focus:text-white active:bg-transparent hover:bg-transparent hover:text-white !rounded-full px-4", activeSection === "use-cases" && "!bg-[#69e3e3] !focus:bg-[#69e3e3] active:bg-[#69e3e3] !hover:bg-[#69e3e3] !text-[#010c23]")} onClick={() => handleNavClick("use-cases")}>Use Cases</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      {/* <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link href="#testimonials">Testimonials</Link>
        </NavigationMenuLink>
      </NavigationMenuItem> */}
    </NavigationMenuList>
  </NavigationMenu>
  );
};
