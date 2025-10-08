import { Logo } from "@/components/navbar-04/logo";
import { NavMenu } from "@/components/navbar-04/nav-menu";
import { NavigationSheet } from "@/components/navbar-04/navigation-sheet";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Hand, MessageCircleMore } from "lucide-react";
import Link from "next/link";

export default function ThankYou() {
  return (
    <>
      <nav className="fixed top-6 inset-x-4 h-16 border border-[#69e3e3] max-w-screen-xl mx-auto rounded-full z-50 bg-[#010c23]">
        <div className="h-full flex items-center justify-between mx-auto px-4">
          <Logo />
          {/* Desktop Menu */}
          <NavMenu className="hidden md:block text-white" />
          <div className="flex items-center gap-3">
            <Button asChild className="rounded-full bg-[#e8890e] hover:bg-[#f1951e] cursor-pointer">
              <Link href="https://tally.so/r/wgExGM" target="_blank" rel="noopener noreferrer">
                <span className="hidden sm:inline">Request a Call</span>
                <Hand className="h-5 w-5 sm:hidden" />
                <ArrowUpRight className="h-5 w-5 hidden sm:inline" />
              </Link>
            </Button>
            {/* Mobile Menu */}
            <div className="md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>

      <div className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden py-10 bg-[#010c23] text-white border-b border-[#69e3e3]">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.4}
          duration={3}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 h-full skew-y-12",
            "!stroke-[#1ea3c0]/20 !text-[#f1c421]/60"
          )}
        />
        <div className="relative z-10 text-center max-w-2xl">
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">
            Thank you for contacting Vowels Africa
          </h1>
          <p className="mt-6 text-[17px] md:text-lg sm:px-6 md:px-0">
            We will be in touch with you soon.
          </p>
          {/* <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8">
            <Button asChild size="lg" className="rounded-full text-base bg-[#e8890e] hover:bg-[#f1951e] cursor-pointer">
              <Link href="https://cal.com/vowels/audit" target="_blank" rel="noopener noreferrer">
                Schedule a Free Audit <ArrowUpRight className="!h-5 !w-5" />
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline" className="rounded-full text-base border-[#e8890e] text-[#e8890e] hover:bg-[#e8890e] bg-transparent hover:text-white cursor-pointer">
              <Link href="https://wa.me/27715292408?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20Vowels" target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp <MessageCircleMore className="!h-5 !w-5" />
              </Link>
            </Button>
          </div> */}

          {/* <ul className="flex flex-wrap gap-6 mt-8 list-none justify-center">
            <li className="flex items-center text-sm text-gray-300">
              <span className="w-2 h-2 rounded-full mr-2" style={{backgroundColor: '#69e3e3'}}></span>
              ROI guaranteed
            </li>
            <li className="flex items-center text-sm text-gray-300">
              <span className="w-2 h-2 rounded-full mr-2" style={{backgroundColor: '#69e3e3'}}></span>
              Plans from R5,999/month
            </li>
          </ul> */}
        </div>
      </div>
    </>
  );
}
