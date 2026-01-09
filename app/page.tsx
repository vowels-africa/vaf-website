import { Logo } from "@/components/navbar-04/logo";
import { NavMenu } from "@/components/navbar-04/nav-menu";
import { NavigationSheet } from "@/components/navbar-04/navigation-sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Goal, HandCoins, MessagesSquare, StarIcon, CircleCheck, MessageCircleMore, Megaphone, BadgeCent, ShoppingCart, LifeBuoy, DatabaseZap, WandSparkles, RefreshCcw, Coins, Sparkles, Fingerprint, ClockArrowUp, ClipboardCheck, HeartHandshake, Hand } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";

const faq = [
  {
    question: "Do you only work with WhatsApp/Xero/Pipedrive?",
    answer: "No. We're tool-agnostic. If a system offers an API, webhook, inbox, spreadsheet, or database — even legacy exports — we can usually integrate it. We'll recommend the simplest path to your outcome.",
  },
  {
    question: "How quickly can we go live?",
    answer: "Most Starter/Growth setups go live in 2-4 weeks. Complex/Enterprise solutions may take longer — we'll give you a clear roadmap after your audit.",
  },
  {
    question: "Is my data safe?",
    answer: "Yes. We use strong encryption, robust access controls, and privacy-first practices. Security and uptime are non-negotiable."
  },
];

const plans = [
  {
    name: "Starter",
    price: "R5,999",
    setup_price: "R19,999 setup",
    description: "Perfect for small businesses getting started.",
    features: [
      "1 automated workflow",
      "2,000 AI interactions",
      "Custom AI & systems integration",
      "Performance tracking & evaluations",
      "Email support",
    ],
    buttonText: "Start Free Audit",
    buttonUrl: process.env.NEXT_PUBLIC_AUDIT_FORM_URL || '',
  },
  {
    name: "Growth",
    price: "R14,999",
    setup_price: "R49,999 setup",
    isRecommended: true,
    description: "For scaling SMEs ready to move faster.",
    features: [
      "Everything in Starter",
      "Up to 3 automated workflows",
      "Up to 10,000 AI interactions",
      "Multi-channel messaging",
      "AI-powered customer support",
      "Priority support",
    ],
    buttonText: "Book Implementation Call",
    buttonUrl: process.env.NEXT_PUBLIC_GROWTH_FORM_URL || '',
    isPopular: true,
  },
  {
    name: "Enterprise",
    price: "R39,999",
    setup_price: "bespoke setup fee",
    description: "For established businesses with custom needs.",
    features: [
      "Everything in Starter & Growth",
      "Up to 10 automated workflows",
      "Up to 50,000 AI interactions",
      "Dedicated account manager",
      "White-label options",
      "24/7 support",
    ],
    buttonText: "Schedule Enterprise Consultation",
    buttonUrl: process.env.NEXT_PUBLIC_LEAD_FORM_URL || "/",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Dewald Heenop",
    designation: "Head of Broker and Franchise Distribution",
    company: "Old Mutual MFC",
    testimonial: "Vowels was able to deliver an effective multi-channel agent engagement process that improved response rates of over 40%, providing us with valuable insights to drive our ongoing strategy. Thank you!",
  },
  {
    id: 2,
    name: "Faaiz Abrahams",
    designation: "CEO",
    company: "Starfish Solutions",
    testimonial: "Vowels developed a bespoke lead generation tool, which helped us improve our lead qualification processing time by 50%. I would recommend Vowels.Africa for any sales call center.",
  },
  // {
  //   id: 3,
  //   name: "Sean",
  //   designation: "Co-Founder & CTO, Alternative Health SaaS Start-up",
  //   company: "Sean",
  //   testimonial: "Forecast development went <strong>4&times; faster</strong>. We were online in a week, not a month.",
  //   avatar: "/avatar-sean.jpg",
  // },
  // {
  //   id: 4,
  //   name: "Carlyn",
  //   designation: "Chairperson, Professional Services Start-up",
  //   company: "Carlyn",
  //   testimonial: "Vowels shortened our path from discovery call to onboarding — <strong>from weeks to days</strong> — and revenue followed.",
  //   avatar: "/avatar-carlyn.jpg",
  // },
];

const features = [
  {
    icon: Coins,
    title: "FMCG SMME",
    description: `<strong>Before:</strong> Orders were manually entered via WhatsApp were manually re-entered. Invoices are delayed; many payments late.<br /><br />
      <strong>After:</strong> Orders captured automatically from WhatsApp → inventory checked → delivery scheduled → invoice issued → payment reminders sent.<br /><br />
      <strong>Result: ~25 hours/week</strong> reclaimed, <strong>order volume doubled</strong>, late payments <strong><5%</strong>.`,
  },
  {
    icon: Goal,
    title: "Alternative Health SaaS Start-up",
    description: `<strong>Before:</strong> Needed an integrated AI Agent to connect users with online doctors for instant tele-medicine.<br /><br />
      <strong>After:</strong> AI Agents triage by criteria (symptoms, urgency, availability) and connect users to available doctors for immediate consults.<br /><br />
      <strong>Result: Improved user experience</strong> and faster access to care on the platform.`,
  },
  {
    icon: MessagesSquare,
    title: "Professional Services Start-up",
    description: `<strong>Before:</strong> Slow client engagement; long delays from needs analysis → proposal → onboarding.<br /><br />
      <strong>After:</strong> AI Agents triage and qualify incoming leads, trigger guided intake + proposal flows, and streamline onboarding.<br /><br />
      <strong>Result: Shorter time-to-onboarding</strong> and <strong>higher monthly revenue</strong> from better conversion.`,
  },
  {
    icon: Sparkles,
    title: "Boutique Consulting Start-up",
    description: `<strong>Before:</strong> Oversight and response to client queries were managed ad-hoc via WhatsApp (messages & voice notes); response time and visibility were poor.<br /><br />
      <strong>After:</strong> Incoming messages are auto-categorised and curated; responses generated; conversations synced to a <strong>priority ticket dashboard</strong>.<br /><br />
      <strong>Result: Response time halved</strong> and <strong>~70%</strong> less manual effort.`,
  },
];

export default function Home() {
  return (
    <>
      <nav className="fixed top-6 inset-x-4 h-16 border border-[#69e3e3] max-w-screen-xl mx-auto rounded-full z-50 bg-[#010c23]">
        <div className="h-full flex items-center justify-between mx-auto px-4">
          <Logo />
          {/* Desktop Menu */}
          <NavMenu className="hidden md:block text-white" />
          <div className="flex items-center gap-3">
            <Button asChild className="rounded-full bg-[#e8890e] hover:bg-[#f1951e] cursor-pointer">
              <Link href={process.env.NEXT_PUBLIC_LEAD_FORM_URL || "/"} target="_blank" rel="noopener noreferrer">
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
            Automation built for Businesses across Africa
          </h1>
          <p className="mt-6 text-[17px] md:text-lg sm:px-6 md:px-0">
            Without vowels, language breaks. Without automation, business breaks. <br className="hidden md:block" />Turn hours of admin into minutes of automation - save time, close more sales, get paid faster, improve customer satisfaction. Affordably.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8">
            <Button asChild size="lg" className="rounded-full text-base bg-[#e8890e] hover:bg-[#f1951e] cursor-pointer">
              <Link href={process.env.NEXT_PUBLIC_AUDIT_FORM_URL || ''} target="_blank" rel="noopener noreferrer">
                Schedule a Free Audit <ArrowUpRight className="!h-5 !w-5" />
              </Link>
            </Button>

            {/* <Button asChild size="lg" variant="outline" className="rounded-full text-base border-[#e8890e] text-[#e8890e] hover:bg-[#e8890e] bg-transparent hover:text-white cursor-pointer">
              <Link href={process.env.NEXT_PUBLIC_WA_CHAT_MSG || "/"} target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp <MessageCircleMore className="!h-5 !w-5" />
              </Link>
            </Button> */}
          </div>

          <ul className="flex flex-wrap gap-6 mt-8 list-none justify-center">
            <li className="flex items-center text-sm text-gray-300">
              <span className="w-2 h-2 rounded-full mr-2" style={{backgroundColor: '#69e3e3'}}></span>
              ROI guaranteed
            </li>
            <li className="flex items-center text-sm text-gray-300">
              <span className="w-2 h-2 rounded-full mr-2" style={{backgroundColor: '#69e3e3'}}></span>
              Plans from R5,999/month
            </li>
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-center pt-40 pb-0">
        <div className="max-w-screen-lg w-full pt-10 pb-0 px-6">
          <h2 className="text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight text-center md:mx-auto">
            Built for how Africa actually works
          </h2>
          <p className="text-center mt-12 px-8">
            Your customers live on WhatsApp, your money moves through mobile wallets and EFT, your teams speak multiple languages, and internet isn&apos;t always perfect. Vowels connects these realities with practical automation - fast replies, clean data, quicker payments - without forcing new tools you don&apos;t need.
          </p>
        </div>
      </div>

      <div id="why-us" className="min-h-screen flex items-center justify-center py-30">
        <div className="max-w-screen-lg w-full py-10 px-6">
          <h2 className="text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight text-center md:mx-auto">
            Why SMEs choose Vowels
          </h2>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="flex items-center gap-6 rounded-lg p-2 -mx-2 sm:mx-0 border p-5 shadow-sm">
              <div className="h-24 aspect-square shrink-0 rounded-lg flex items-center justify-center">
                <img src="/why-us-admin.svg" alt="" className="w-auto h-auto max-h-24" />
              </div>
              <div>
                <span className="font-semibold tracking-tight text-lg">
                  Too much admin
                </span>
                <p className="mt-1 text-sm text-muted-foreground">
                  Spreadsheets, manual processing, endless follow-ups, etc.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 rounded-lg p-2 -mx-2 sm:mx-0 border p-5 shadow-sm">
              <div className="h-24 aspect-square shrink-0 rounded-lg flex items-center justify-center">
                <img src="/why-us-leads.svg" alt="" className="w-auto h-auto max-h-24" />
              </div>
              <div>
                <span className="font-semibold tracking-tight text-lg">
                  Leads slipping away
                </span>
                <p className="mt-1 text-sm text-muted-foreground">
                  Slow or missed responses cost revenue
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 rounded-lg p-2 -mx-2 sm:mx-0 border p-5 shadow-sm">
              <div className="h-24 aspect-square shrink-0 rounded-lg flex items-center justify-center">
                <img src="/why-us-payments.svg" alt="" className="w-auto h-auto max-h-24" />
              </div>
              <div>
                <span className="font-semibold tracking-tight text-lg">
                  Slow payments
                </span>
                <p className="mt-1 text-sm text-muted-foreground">
                  Invoice delays and manual chasing hurt cash flow
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 rounded-lg p-2 -mx-2 sm:mx-0 border p-5 shadow-sm">
              <div className="h-24 aspect-square shrink-0 rounded-lg flex items-center justify-center">
                <img src="/why-us-no-it.svg" alt="" className="w-auto h-auto max-h-24" />
              </div>
              <div>
                <span className="font-semibold tracking-tight text-lg">
                  No IT team
                </span>
                <p className="mt-1 text-sm text-muted-foreground">
                  You need practical automation that &ldquo;just works&rdquo;
                </p>
              </div>
            </div>
          </div>
          <p className="text-center mt-12 px-8">
            <strong>Vowels.Africa is the missing piece</strong>. We start with your outcomes, then connect the tools you already use — and almost any you&apos;ll add next — so your business runs smoother every day.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center px-6 pt-0 pb-30">
        <div className="overflow-hidden">
          <p className="text-center text-xl font-medium">
            Companies we&apos;re working with
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-14 gap-y-10 max-w-(--breakpoint-xl)">
            <Marquee
              pauseOnHover
              className="[--duration:20s] [&_img]:mr-20 mask-x-from-70% mask-x-to-90%"
            >
              <img src="/samsguide.png" className="h-16" alt="Sams Guide" title="Sams Guide" />
              <img src="/apex.png" className="h-16" alt="Apex Partner Solutions" title="Apex Partner Solutions" />
              <img src="/sam_co.png" className="h-16" alt="Sam & Co" title="Sam & Co" />
              <img src="/oldmutual.png" className="h-16" alt="Old Mutual" title="Old Mutual" />
              <img src="/uzum.png" className="h-16" alt="Uzum Beverages" title="Uzum Beverages" />
            </Marquee>
          </div>
        </div>
      </div>

      <div id="framework" className="min-h-screen flex items-center justify-center py-30">
        <div className="max-w-screen-lg w-full py-10 px-6">
          <h2 className="text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight text-center md:mx-auto">
            The VOWELS Framework
          </h2>
          <p className="text-center mt-12 px-8">
            Just as vowels make language flow, our framework makes your business flow. <br className="hidden md:block" />Each step is designed to cut waste, unlock growth, and scale your impact.
          </p>
          <div className="mt-12 md:mt-16 w-full mx-auto space-y-20">
            <div className="flex flex-col md:flex-row items-center gap-x-20 gap-y-6 md:odd:flex-row-reverse">
              <div className="w-full">
                <Image src="/framework-understand.svg" alt="Understand" className="max-sm:mx-auto sm:ml-0 sm:mr-auto height-auto" width={600} height={400} />
              </div>
              <div className="basis-1/2 shrink-0 max-sm:text-center w-full">
                <h4 className="my-3 text-3xl font-semibold tracking-tight">
                  Understand
                </h4>
                <p className="text-muted-foreground text-[17px]">
                  See where you&apos;re leaking time and money.
                  <br /><br />
                  We map every workflow across sales, admin, finance, and support. You&apos;ll know exactly where hours are wasted, leads are lost, and payments are delayed.
                  <br /><br />
                  <strong>Outcome:</strong> Clear visibility into bottlenecks, backed by hard numbers.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-x-20 gap-y-6 md:odd:flex-row-reverse">
              <div className="w-full">
                <Image src="/framework-optimise.svg" alt="Optimise" className="max-sm:mx-auto sm:ml-auto sm:mr-0" width={600} height={400} />
              </div>
              <div className="basis-1/2 shrink-0 max-sm:text-center w-full">
                <h4 className="my-3 text-3xl font-semibold tracking-tight">
                  Optimise
                </h4>
                <p className="text-muted-foreground text-[17px]">
                  Simplify before you automate.
                  <br /><br />
                  We remove duplicate steps, standardise processes, and tighten the way information flows. This ensures your automation is built on a lean, efficient foundation.
                  <br /><br />
                  <strong>Outcome:</strong> Less manual effort, smoother operations, fewer errors.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-x-20 gap-y-6 md:odd:flex-row-reverse">
              <div className="w-full">
                <Image src="/framework-automate.svg" alt="Automate" className="max-sm:mx-auto sm:ml-0 sm:mr-auto" width={600} height={400} />
              </div>
              <div className="basis-1/2 shrink-0 max-sm:text-center w-full">
                <h4 className="my-3 text-3xl font-semibold tracking-tight">
                  Automate
                </h4>
                <p className="text-muted-foreground text-[17px]">
                  Let tech handle the heavy lifting.
                  <br /><br />
                  We set up automations that fit most business across Africa: WhatsApp replies, CRM follow-ups, invoice reminders, mobile-money collections, and AI-driven support.
                  <br /><br />
                  <strong>Outcome:</strong> Faster response times, more closed deals, and quicker payments.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-x-20 gap-y-6 md:odd:flex-row-reverse">
              <div className="w-full">
                <Image src="/framework-innovate.svg" alt="Innovate" className="max-sm:mx-auto sm:ml-auto sm:mr-0" width={600} height={400} />
              </div>
              <div className="basis-1/2 shrink-0 max-sm:text-center w-full">
                <h4 className="my-3 text-3xl font-semibold tracking-tight">
                  Innovate
                </h4>
                <p className="text-muted-foreground text-[17px]">
                  Custom solutions for your unique challenges.
                  <br /><br />
                  When your needs don&apos;t fit off-the-shelf tools, we build bespoke AI agents and integrations. Whether it&apos;s lead scoring, multilingual chat, or connecting legacy systems - we make it happen.
                  <br /><br />
                  <strong>Outcome:</strong> Competitive edge and workflows that feel tailor-made.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-x-20 gap-y-6 md:odd:flex-row-reverse">
              <div className="w-full">
                <Image src="/framework-elevate.svg" alt="Elevate" className="max-sm:mx-auto sm:ml-0 sm:mr-auto" width={600} height={400} />
              </div>
              <div className="basis-1/2 shrink-0 max-sm:text-center w-full">
                <h4 className="my-3 text-3xl font-semibold tracking-tight">
                  Elevate
                </h4>
                <p className="text-muted-foreground text-[17px]">
                  Scale with confidence.
                  <br /><br />
                  With monitoring, reporting, and continuous improvements, your business keeps growing - without drowning in admin. We help you adapt as you expand into new markets, teams, or tools.
                  <br /><br />
                  <strong>Outcome:</strong> Sustainable growth, measurable ROI, and peace of mind.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-30">
            <h3 className="text-3xl md:text-4xl md:leading-[3rem] font-bold tracking-tight md:text-center md:mx-auto">
              Why this matters to you
            </h3>
            <p className="md:text-center mt-4">
              The VOWELS Framework is simple, structured, and proven.<br /><strong>Within 90 days</strong>, most clients see:
            </p>
            <ul className="mt-6 space-y-2 md:mx-auto max-w-md list-none">
              <li className="flex items-center gap-2 md:justify-center">
                <CircleCheck className="h-4 w-4 text-green-600 shrink-0" />
                <span>Reduction in manual work</span>
              </li>
              <li className="flex items-center gap-2 md:justify-center">
                <CircleCheck className="h-4 w-4 text-green-600 shrink-0" />
                <span>Improved customer response</span>
              </li>
              <li className="flex items-center gap-2 md:justify-center">
                <CircleCheck className="h-4 w-4 text-green-600 shrink-0" />
                <span>Increase in lead conversions</span>
              </li>
              <li className="flex items-center gap-2 md:justify-center">
                <CircleCheck className="h-4 w-4 text-green-600 shrink-0" />
                <span>Realised monthly savings</span>
              </li>
            </ul>
          </div>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button asChild size="lg" className="rounded-full text-base bg-[#e8890e] hover:bg-[#f1951e]">
              <Link href={process.env.NEXT_PUBLIC_LEAD_FORM_URL || "/"} target="_blank" rel="noopener noreferrer">
                Start Your Vowels Journey <ArrowUpRight className="!h-5 !w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center px-6 overflow-hidden pt-10 pb-30">
        <div className="relative z-10 text-center max-w-2xl">
          <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">
            Ready to see how this applies to your business?
          </h2>
          <p className="mt-6 text-[17px] md:text-lg">
            Book your free audit - we&apos;ll map your workflows, show you the leaks, and hand you save time and money.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8">
            <Button asChild size="lg" className="rounded-full text-base bg-[#e8890e] hover:bg-[#f1951e] cursor-pointer">
              <Link href={process.env.NEXT_PUBLIC_AUDIT_FORM_URL || ''} target="_blank"  rel="noopener noreferrer">
                Get My Free Audit <ArrowUpRight className="!h-5 !w-5" />
              </Link>
            </Button>

            {/* <Button asChild size="lg" variant="outline" className="rounded-full text-base border-[#e8890e] text-[#e8890e] hover:bg-[#e8890e] bg-transparent hover:text-white cursor-pointer">
              <Link href={process.env.NEXT_PUBLIC_WA_CHAT_MSG || "/"} target="_blank"  rel="noopener noreferrer">
                Chat on WhatsApp <MessageCircleMore className="!h-5 !w-5" />
              </Link>
            </Button> */}
          </div>
        </div>
      </div>

      <div id="solutions" className="min-h-screen flex items-center justify-center py-30">
        <div className="max-w-screen-lg w-full py-10 px-6">
          <h2 className="text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight text-center md:mx-auto">
            Integrations that fit your stack <br className="hidden md:block" />— today and tomorrow
          </h2>
          <p className="text-center mt-4">
            Outcomes first. Tools second. If it has an <strong>API, webhook, inbox, spreadsheet, or database</strong>, we can usually integrate it.
          </p>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="flex items-center gap-6 rounded-lg p-2 -mx-2 sm:mx-0 border p-5 shadow-sm">
              {/* <div className="h-24 aspect-square shrink-0 rounded-lg flex items-center justify-center">
                <img src="/undraw_1.svg" />
              </div> */}
              <div>
                <span className="font-semibold tracking-tight text-lg flex items-center gap-2">
                  <Megaphone className="h-5 w-5" style={{color: '#F1C420'}} />
                  Comms
                </span>
                <p className="mt-1 text-sm text-muted-foreground">
                  WhatsApp Business API, SMS, email, chat widgets
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 rounded-lg p-2 -mx-2 sm:mx-0 border p-5 shadow-sm">
              {/* <div className="h-24 aspect-square shrink-0 rounded-lg flex items-center justify-center">
                <img src="/undraw_2.svg" />
              </div> */}
              <div>
                <span className="font-semibold tracking-tight text-lg flex items-center gap-2">
                  <BadgeCent className="h-5 w-5" style={{color: '#F1C420'}} />
                  CRM/Sales
                </span>
                <p className="mt-1 text-sm text-muted-foreground">
                  Pipedrive, Attio, GoHighLevel, Zoho, HubSpot, Twenty
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 rounded-lg p-2 -mx-2 sm:mx-0 border p-5 shadow-sm">
              {/* <div className="h-24 aspect-square shrink-0 rounded-lg flex items-center justify-center">
                <img src="/undraw_3.svg" />
              </div> */}
              <div>
                <span className="font-semibold tracking-tight text-lg flex items-center gap-2">
                  <HandCoins className="h-5 w-5" style={{color: '#F1C420'}} />
                  Payments/Accounting
                </span>
                <p className="mt-1 text-sm text-muted-foreground">
                  Mobile Money, EFT, Stripe, Yoco, Xero, Sage, Invoice Ninja
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 rounded-lg p-2 -mx-2 sm:mx-0 border p-5 shadow-sm">
              {/* <div className="h-24 aspect-square shrink-0 rounded-lg flex items-center justify-center">
                <img src="/undraw_3.svg" />
              </div> */}
              <div>
                <span className="font-semibold tracking-tight text-lg flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5" style={{color: '#F1C420'}} />
                  E-commerce
                </span>
                <p className="mt-1 text-sm text-muted-foreground">
                  Shopify, WooCommerce, custom carts
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 rounded-lg p-2 -mx-2 sm:mx-0 border p-5 shadow-sm">
              {/* <div className="h-24 aspect-square shrink-0 rounded-lg flex items-center justify-center">
                <img src="/undraw_4.svg" />
              </div> */}
              <div>
                <span className="font-semibold tracking-tight text-lg flex items-center gap-2">
                  <LifeBuoy className="h-5 w-5" style={{color: '#F1C420'}} />
                  Support
                </span>
                <p className="mt-1 text-sm text-muted-foreground">
                  Freshdesk, Zendesk, Intercom, Monday
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 rounded-lg p-2 -mx-2 sm:mx-0 border p-5 shadow-sm">
              {/* <div className="h-24 aspect-square shrink-0 rounded-lg flex items-center justify-center">
                <img src="/undraw_4.svg" />
              </div> */}
              <div>
                <span className="font-semibold tracking-tight text-lg flex items-center gap-2">
                  <DatabaseZap className="h-5 w-5" style={{color: '#F1C420'}} />
                  Data/BI
                </span>
                <p className="mt-1 text-sm text-muted-foreground">
                  Airtable, BigQuery, Notion, Looker Studio, Metabase
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 rounded-lg p-2 -mx-2 sm:mx-0 border p-5 shadow-sm">
              {/* <div className="h-24 aspect-square shrink-0 rounded-lg flex items-center justify-center">
                <img src="/undraw_4.svg" />
              </div> */}
              <div>
                <span className="font-semibold tracking-tight text-lg flex items-center gap-2">
                  <WandSparkles className="h-5 w-5" style={{color: '#F1C420'}} />
                  Productivity
                </span>
                <p className="mt-1 text-sm text-muted-foreground">
                  Google Workspace, Microsoft 365, Slack, Mattermost
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 rounded-lg p-2 -mx-2 sm:mx-0 border p-5 shadow-sm">
              {/* <div className="h-24 aspect-square shrink-0 rounded-lg flex items-center justify-center">
                <img src="/undraw_4.svg" />
              </div> */}
              <div>
                <span className="font-semibold tracking-tight text-lg flex items-center gap-2">
                  <RefreshCcw className="h-5 w-5" style={{color: '#F1C420'}} />
                  Automation
                </span>
                <p className="mt-1 text-sm text-muted-foreground">
                  Zapier, Make, n8n, Flowise
                </p>
              </div>
            </div>
          </div>
          <p className="text-center mt-12">
            <i className="text-muted-foreground">If it&apos;s not listed, we can likely connect it.</i>
          </p>
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* <Button asChild size="sm" variant="outline" className="rounded-full text-base border-[#e8890e] text-[#e8890e] hover:bg-[#e8890e] bg-transparent hover:text-white cursor-pointer text-sm">
              <Link href={process.env.NEXT_PUBLIC_WA_CHAT_MSG || "/"} target="_blank" rel="noopener noreferrer">
                Ask about your stack
              </Link>
            </Button> */}

            <Button asChild size="sm" variant="outline" className="rounded-full text-base border-[#e8890e] text-[#e8890e] hover:bg-[#e8890e] bg-transparent hover:text-white cursor-pointer text-sm">
              <Link href={process.env.NEXT_PUBLIC_AUDIT_FORM_URL || ''} target="_blank" rel="noopener noreferrer">
                Schedule a Free Audit
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div id="use-cases">
        <div className="flex items-center justify-center">
          <div className="max-w-screen-lg w-full py-12 px-6">
            <h2 className="text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight max-w-lg">
              Use Cases
            </h2>
            <p className="text-italic text-muted-foreground">Real Outcomes</p>
            <div className="mt-6 md:mt-8 w-full mx-auto grid md:grid-cols-[4fr_3fr] gap-12">
              <div className="w-full">
                <Accordion defaultValue="item-0" type="single" className="w-full">
                  {features.map(({ title, description, icon: Icon }, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="data-[state=open]:border-b-2 data-[state=open]:border-[#69e3e3]"
                    >
                      <AccordionTrigger className="text-lg [&>svg]:hidden">
                        <div className="flex items-center gap-4">
                          <Icon />
                          {title}
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-[17px] leading-relaxed text-muted-foreground">
                        <div dangerouslySetInnerHTML={{ __html: description }} />
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
              <div className="hidden md:block w-full self-center">
                <Image src="/use-cases.svg" alt="Use Cases" className="mx-auto" width={600} height={400} />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-center gap-4">
          <Button asChild size="lg" className="rounded-full text-base bg-[#e8890e] hover:bg-[#f1951e]">
            <Link href={process.env.NEXT_PUBLIC_LEAD_FORM_URL || "/"} target="_blank" rel="noopener noreferrer">
              See What We Could Do For You <ArrowUpRight className="!h-5 !w-5" />
            </Link>
          </Button>
        </div>
      </div>

      <div id="products" className="min-h-screen flex items-center justify-center py-30">
        <div className="max-w-screen-lg w-full py-10 px-6">
          <h2 className="text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight md:text-center md:mx-auto">
            Our Products
          </h2>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="flex items-center gap-6 rounded-lg p-2 -mx-2 sm:mx-0 border p-5 shadow-sm">
              <div className="h-24 aspect-square shrink-0 rounded-lg flex items-center justify-center">
                <img src="/appi.jpeg" alt="Appi" className="w-auto h-auto max-h-24 max-w-20 rounded-full" />
              </div>
              <div>
                <span className="font-semibold tracking-tight text-lg">
                  Appi
                </span>
                <p className="mt-1 text-sm text-muted-foreground">
                  WhatsApp-based virtual assistant that helps agents access real-time product knowledge, documentation, and support.
                </p>
                <p className="mt-1 text-sm text-right">
                  <span className="text-muted-foreground cursor-not-allowed">Invite Only</span>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 rounded-lg p-2 -mx-2 sm:mx-0 border p-5 shadow-sm">
              <div className="h-24 aspect-square shrink-0 rounded-lg flex items-center justify-center">
                <img src="/fnaflow.jpeg" alt="FNAFlow" className="w-auto h-auto max-h-24 max-w-20 rounded-full" />
              </div>
              <div>
                <span className="font-semibold tracking-tight text-lg">
                  FNAFlow
                </span>
                <p className="mt-1 text-sm text-muted-foreground">
                  Capture and record Financial Needs Analysis (FNA) and Record of Advice (ROA) data securely through WhatsApp.
                </p>
                <p className="mt-1 text-sm text-right">
                  <span className="text-muted-foreground cursor-not-allowed">Invite Only</span>
                </p>
              </div>
            </div>
            {/* <div className="flex items-center gap-6 rounded-lg p-2 -mx-2 sm:mx-0 border p-5 shadow-sm">
              <div className="h-24 aspect-square shrink-0 rounded-lg flex items-center justify-center">
                <img src="/products-vsure.svg" alt="V-Sure" className="w-auto h-auto max-h-24" />
              </div>
              <div>
                <span className="font-semibold tracking-tight text-lg">
                  V-Sure
                </span>
                <p className="mt-1 text-sm text-muted-foreground">
                  An AI Agent for sales teams on WhatsApp. Conversational access to compliant product, policy, and process information.
                </p>
                <p className="mt-1 text-sm text-right">
                  <span className="text-muted-foreground cursor-not-allowed">Coming Soon</span>
                </p>
              </div>
            </div> */}
            {/* <div className="flex items-center gap-6 rounded-lg p-2 -mx-2 sm:mx-0 border p-5 shadow-sm">
              <div className="h-24 aspect-square shrink-0 rounded-lg flex items-center justify-center">
                <Image src="/glunk_io.png" alt="glunk.io" className="size-20" width={80} height={80} />
              </div>
              <div>
                <span className="font-semibold tracking-tight text-lg">
                  glunk.io
                </span>
                <p className="mt-1 text-sm text-muted-foreground">
                  Precision lead qualification that increases sales‑ready conversations and reduces manual screening.
                </p>
                <p className="mt-1 text-sm text-right">
                  <Link href="https://glunk.io" target="_blank" rel="noopener noreferrer" className="text-[#E8890D] underline">View Product</Link>
                </p>
              </div>
            </div> */}
          </div>
          <div className="mt-12 flex items-center justify-center gap-4">
            <Button asChild size="lg" className="rounded-full text-base bg-[#e8890e] hover:bg-[#f1951e]">
              <Link href={process.env.NEXT_PUBLIC_LEAD_FORM_URL || "/"} target="_blank" rel="noopener noreferrer">
                Talk to us about our products <ArrowUpRight className="!h-5 !w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div id="testimonials" className="flex justify-center items-center px-6 pt-0 pb-30">
        <div>
          <h2 className="mb-8 sm:mb-14 text-5xl md:text-6xl font-bold text-center tracking-tight">
            Testimonials
          </h2>
          <div className="w-full max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 overflow-hidden border-r border-background">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex flex-col outline outline-1 outline-border px-6 py-8"
                >
                  <div className="flex items-center justify-center gap-2">
                    <StarIcon className="w-6 h-6 fill-[#f1c421] stroke-[#f1c421]" />
                    <StarIcon className="w-6 h-6 fill-[#f1c421] stroke-[#f1c421]" />
                    <StarIcon className="w-6 h-6 fill-[#f1c421] stroke-[#f1c421]" />
                    <StarIcon className="w-6 h-6 fill-[#f1c421] stroke-[#f1c421]" />
                    <StarIcon className="w-6 h-6 fill-[#f1c421] stroke-[#f1c421]" />
                  </div>
                  <p className="my-6 text-[17px] text-center max-w-md px-2">
                    &quot;<span dangerouslySetInnerHTML={{ __html: testimonial.testimonial }} />&quot;
                  </p>
                  <div className="mx-auto my-auto flex items-center justify-center gap-3 max-w-[240px]">
                    <Avatar>
                      {/* <AvatarImage src={testimonial.avatar} alt={testimonial.name} /> */}
                      <AvatarFallback className="text-xl font-medium bg-primary text-primary-foreground">
                        {testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-lg font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.designation}, <strong>{testimonial.company}</strong>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div id="pricing" className="min-h-screen flex flex-col items-center justify-center pt-30 pb-20 px-6">
        <h2 className="text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight text-center md:mx-auto">
          Pricing
        </h2>
        <h3 className="md:text-center text-1xl font-bold mt-4">
          Automation that pays for itself.
        </h3>
        <p className="max-w-screen-sm text-center">
          ROI guaranteed — save more than you spend, or we work free until you do.
        </p>
        <p className="max-w-screen-sm text-center">
          We offer monthly packages <strong>including maintenance</strong> of your solutions.
        </p>
        <div className="mt-12 max-w-screen-lg mx-auto grid grid-cols-1 lg:grid-cols-3 items-center gap-8 lg:gap-0">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative border p-7 rounded-xl lg:rounded-none lg:first:rounded-l-xl lg:last:rounded-r-xl",
                {
                  "border-[2px] border-[#010c23] py-12 !rounded-xl": plan.isPopular,
                }
              )}
            >
              {plan.isPopular && (
                <Badge className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-[#010c23] border-[#69e3e3]">
                  Most Popular
                </Badge>
              )}
              <h3 className="text-lg font-medium">{plan.name}</h3>
              <p className="mt-2 text-4xl font-bold">{plan.price} <span className="text-xs">/month</span></p>
              {plan.setup_price && (
                <p className="mt-1 font-bold">+ {plan.setup_price}</p>
              )}
              <p className="mt-4 font-medium text-muted-foreground">
                {plan.description}
              </p>
              <Separator className="my-6" />
              <ul className="space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <CircleCheck className="h-4 w-4 mt-1 shrink-0 text-green-600" />
                    <span dangerouslySetInnerHTML={{ __html: feature }} />
                  </li>
                ))}
              </ul>
              <Link href={plan.buttonUrl} target="_blank" rel="noopener noreferrer">
                <Button
                  variant={plan.isPopular ? "default" : "outline"}
                  size="lg"
                  className={`w-full mt-6 rounded-full cursor-pointer ${plan.isPopular ? 'bg-[#e8890e] hover:bg-[#e8890e]/90 text-white' : ''}`}
                >
                  {plan.buttonText}
                </Button>
              </Link>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center mt-12">
          <i className="text-muted-foreground">Need custom software or special workflows?</i>
        </p>
        <div className="mt-4 flex items-center justify-center gap-4">
          <Button asChild size="sm" variant="outline" className="rounded-full text-base border-[#e8890e] text-[#e8890e] hover:bg-[#e8890e] bg-transparent hover:text-white cursor-pointer text-sm">
            <Link href={process.env.NEXT_PUBLIC_LEAD_FORM_URL || "/"} target="_blank" rel="noopener noreferrer">
              Contact us for a tailored package
            </Link>
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-center pt-0 pb-30">
        <div className="max-w-(--breakpoint-xl) mx-auto py-12 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tighter">
            Trust & Reliability
          </h2>
          <div className="mt-8 sm:mt-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 justify-center">
            <div className="max-w-3xs">
              <ClockArrowUp className="w-12 h-12 mx-auto" style={{color: '#F1C420'}} />
              <p className="mt-6 text-lg">
                99.9% uptime
              </p>
            </div>
            <div className="max-w-3xs">
              <Fingerprint className="w-12 h-12 mx-auto" style={{color: '#F1C420'}} />
              <p className="mt-6 text-lg">
                Bank-level security
              </p>
            </div>
            <div className="max-w-3xs">
              <HeartHandshake className="w-12 h-12 mx-auto" style={{color: '#F1C420'}} />
              <p className="mt-6 text-lg">
                Africa-ready
              </p>
            </div>
            <div className="max-w-3xs">
              <ClipboardCheck className="w-12 h-12 mx-auto" style={{color: '#F1C420'}} />
              <p className="mt-6 text-lg">
                GDPR-aligned
              </p>
            </div>
          </div>
          <ul className="flex flex-wrap gap-6 mt-12 list-none justify-center">
            <li className="flex items-center text-sm text-gray-500">
              <span className="w-2 h-2 rounded-full mr-2" style={{backgroundColor: '#69e3e3'}}></span>
              Data residency options
            </li>
            <li className="flex items-center text-sm text-gray-500">
              <span className="w-2 h-2 rounded-full mr-2" style={{backgroundColor: '#69e3e3'}}></span>
              WhatsApp-first
            </li>
            <li className="flex items-center text-sm text-gray-500">
              <span className="w-2 h-2 rounded-full mr-2" style={{backgroundColor: '#69e3e3'}}></span>
              Mobile-money friendly
            </li>
          </ul>
        </div>
      </div>

      <div id="faqs" className="flex items-center justify-center px-6">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl leading-[1.15]! font-semibold tracking-tighter">
            FAQs
          </h2>
          <Accordion type="single" className="mt-6" defaultValue="question-0">
            {faq.map(({ question, answer }, index) => (
              <AccordionItem key={question} value={`question-${index}`}>
                <AccordionTrigger className="text-left text-lg">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      <div className="relative min-h-[calc(100vh-120px)] flex items-center justify-center px-6 overflow-hidden py-10">
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
          <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">
            Stop the manual chaos. Start saving this month.
          </h2>
          <p className="mt-6 text-[17px] md:text-lg">
            Get a free 15-min Automation Audit which leads to a rand-based ROI estimate and a 90-day plan tailored to your tools.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="max-w-80 mx-auto">
              <Button asChild size="lg" className="rounded-full text-base bg-[#e8890e] hover:bg-[#f1951e] cursor-pointer">
                <Link href={process.env.NEXT_PUBLIC_AUDIT_FORM_URL || ''} target="_blank"  rel="noopener noreferrer">
                  Get My Free Audit <ArrowUpRight className="!h-5 !w-5" />
                </Link>
              </Button>
              <ul className="flex flex-wrap gap-y-0 gap-x-2 mt-4 list-none justify-center">
                <li className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 rounded-full mr-2" style={{backgroundColor: '#69e3e3'}}></span>
                  Zero Cost
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 rounded-full mr-2" style={{backgroundColor: '#69e3e3'}}></span>
                  15 min
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 rounded-full mr-2" style={{backgroundColor: '#69e3e3'}}></span>
                  Africa/Johannesburg (CAT)
                </li>
              </ul>
            </div>

            {/* <div className="max-w-80 mx-auto">
              <Button asChild size="lg" variant="outline" className="rounded-full text-base border-[#e8890e] text-[#e8890e] hover:bg-[#e8890e] bg-transparent hover:text-white cursor-pointer">
                <Link href={process.env.NEXT_PUBLIC_WA_CHAT_MSG || "/"} target="_blank"  rel="noopener noreferrer">
                  Chat on WhatsApp <MessageCircleMore className="!h-5 !w-5" />
                </Link>
              </Button>
              <ul className="flex flex-wrap gap-y-0 gap-x-2 mt-4 list-none justify-center">
                <li className="flex items-center text-sm text-gray-500">
                  Quick questions?<br />We typically reply during business hours.
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>

      <footer>
        <div className="max-w-screen-xl mx-auto">
          <Separator />
          <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
            {/* Copyright */}
            <span className="text-muted-foreground max-sm:text-center">
              &copy; {new Date().getFullYear()}{" "}
              Vowels Africa.
            </span>
            <div className="flex items-center gap-5 text-muted-foreground">
              {/* <Link
                href="#"
                className="text-muted-foreground hover:text-foreground font-medium cursor-pointer"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground font-medium cursor-pointer"
              >
                Terms and Conditions
              </Link> */}
              <span className="text-muted-foreground max-sm:text-center">
                All rights reserved.
              </span>
              <Image
                src="/logo_icon_only.svg"
                alt="Vowels"
                className="h-10 fill-foreground"
                width={40}
                height={40}
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
