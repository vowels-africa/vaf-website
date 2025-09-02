import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="p-6">
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <div className="flex flex-col h-full">
          <Logo />
          <div className="flex-1 flex items-center">
            <NavMenu orientation="vertical" className="w-full" />
          </div>
          <div className="mt-auto">
            <Button className="w-full rounded-full bg-[#e8890e] hover:bg-[#f1951e]">Book a Call</Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
