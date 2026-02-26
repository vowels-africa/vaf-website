import { Logo } from "@/components/navbar-04/logo";
import { NavMenu } from "@/components/navbar-04/nav-menu-02";
import { NavigationSheet } from "@/components/navbar-04/navigation-sheet-02";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Goal, MessagesSquare, Coins, Sparkles, Hand, CircleAlert, Server, Zap, Cable, Code2, BrainCircuit, CircleSmall, CircleArrowRight, CircleCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";

const faq = [
  {
    question: "Do you only work with WhatsApp/Xero/Pipedrive?",
    answer: "No. We're tool-agnostic. If a system offers an API, webhook, inbox, spreadsheet, or database - even legacy exports - we can usually integrate it. We'll recommend the simplest path to your outcome.",
  },
  {
    question: "How quickly can we go live?",
    answer: "Most Starter/Growth setups go live in 2-4 weeks. Complex/Enterprise solutions may take longer - we'll give you a clear roadmap after your audit.",
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
  //   testimonial: "Vowels shortened our path from discovery call to onboarding - <strong>from weeks to days</strong> - and revenue followed.",
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
          <NavMenu className="hidden lg:block text-white" />
          <div className="flex items-center gap-3">
            <Button asChild className="rounded-full bg-[#e8890e] hover:bg-[#f1951e] cursor-pointer">
              <Link href={process.env.NEXT_PUBLIC_LEAD_FORM_URL || "/"} target="_blank" rel="noopener noreferrer">
                <span className="hidden sm:inline">Book a 20-Minute Clarity Call</span>
                <Hand className="h-5 w-5 sm:hidden" />
                <ArrowUpRight className="h-5 w-5 hidden sm:inline" />
              </Link>
            </Button>
            {/* Mobile Menu */}
            <div className="lg:hidden">
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
            Operational technology partners for growing businesses
          </h1>
          <p className="mt-6 text-[17px] md:text-lg sm:px-6 md:px-0">
            Growth creates friction. <br className="hidden md:block" />
            More customers.
            More staff.
            More tools.
            More admin. <br className="hidden md:block" />
            Suddenly things feel messy, slow, and reactive. <br className="hidden md:block" />
            <span className="relative inline-block font-bold">
              We fix that.
              <svg
                className="absolute -bottom-2 -left-1 w-[calc(100%+8px)]"
                viewBox="0 0 120 12"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 4 C8 2.5, 18 5, 32 3.5 C44 2, 55 5.5, 68 3 C80 1, 96 4.8, 110 3.2 C113 3, 116 3.5, 119 2.8"
                  stroke="#e8890e"
                  strokeWidth="1.6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 8.5 C15 7, 28 10.5, 45 8.2 C57 6.5, 65 9.8, 80 8 C92 6.5, 103 10, 116 8.8 C117.5 8.6, 118.5 9, 119 8.5"
                  stroke="#e8890e"
                  strokeWidth="1.6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8">
            <Button asChild size="lg" className="rounded-full text-base bg-[#e8890e] hover:bg-[#f1951e] cursor-pointer">
              <Link href={process.env.NEXT_PUBLIC_LEAD_FORM_URL || ''} target="_blank" rel="noopener noreferrer">
                Book a 20-Minute Clarity Call <ArrowUpRight className="!h-5 !w-5" />
              </Link>
            </Button>
          </div>

          <ul className="gap-6 mt-8 list-none justify-center">
            <li className="items-center text-sm text-gray-300">
              No obligation. No jargon.
            </li>
            <li className="items-center text-sm text-gray-300">
              Just clarity on what's slowing your business down.
            </li>
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-center px-6 py-30">
        <div className="overflow-hidden">
          <p className="text-center text-2xl font-medium px-20">
            <strong>Trusted by growing teams</strong> across distribution, financial services, logistics, SaaS and professional services.
          </p>
          <div className="mt-15 flex items-center justify-center gap-x-14 gap-y-10 max-w-(--breakpoint-xl)">
            <Marquee
              pauseOnHover
              className="[--duration:20s] [&_img]:mr-20 mask-x-from-70% mask-x-to-90%"
            >
              <img src="/samsguide.png" className="h-16" alt="Sams Guide" title="Sams Guide" />
              <img src="/apex.png" className="h-16" alt="Apex Partner Solutions" title="Apex Partner Solutions" />
              <img src="/sam_co.png" className="h-16" alt="Sam & Co" title="Sam & Co" />
              <img src="/oldmutual.png" className="h-16" alt="Old Mutual" title="Old Mutual" />
              <img src="/uzum.png" className="h-16" alt="Uzum Beverages" title="Uzum Beverages" />
              <img src="/starfish.png" className="h-16" alt="Starfish Debt Consultants" title="Starfish Debt Consultants" />
            </Marquee>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center pb-30">
        <div className="max-w-screen-lg w-full px-6">
          <h2 className="text-3xl md:text-4xl md:leading-[3rem] font-bold tracking-tight text-center mx-auto">
            When Businesses Grow, Systems Struggle
          </h2>
          <p className="text-center mt-4">
            As you scale:
          </p>
          <ul className="mt-4 space-y-2 mx-auto max-w-md list-none">
            <li className="flex items-center gap-2 justify-center">
              <CircleAlert className="h-4 w-4 text-orange-400 shrink-0" />
              <span>Leads fall through the cracks</span>
            </li>
            <li className="flex items-center gap-2 justify-center">
              <CircleAlert className="h-4 w-4 text-orange-400 shrink-0" />
              <span>WhatsApp becomes chaotic</span>
            </li>
            <li className="flex items-center gap-2 justify-center">
              <CircleAlert className="h-4 w-4 text-orange-400 shrink-0" />
              <span>Reporting stays manual</span>
            </li>
            <li className="flex items-center gap-2 justify-center">
              <CircleAlert className="h-4 w-4 text-orange-400 shrink-0" />
              <span>Invoices are chased manually</span>
            </li>
            <li className="flex items-center gap-2 justify-center">
              <CircleAlert className="h-4 w-4 text-orange-400 shrink-0" />
              <span>Tools don't speak to each other</span>
            </li>
            <li className="flex items-center gap-2 justify-center">
              <CircleAlert className="h-4 w-4 text-orange-400 shrink-0" />
              <span>IT becomes reactive</span>
            </li>
            <li className="flex items-center gap-2 justify-center">
              <CircleAlert className="h-4 w-4 text-orange-400 shrink-0" />
              <span>Decisions without technical clarity</span>
            </li>
          </ul>
          <p className="text-center mt-12 px-8">
            You don't need more software. <br />
            <span className="relative inline-block font-semibold text-[17px]">
              You need structure.
            </span>
          </p>
          <p className="text-center mt-15 px-8">
            <Link href={process.env.NEXT_PUBLIC_LEAD_FORM_URL || ''} target="_blank" rel="noopener noreferrer" className="hover:underline">
              Sound familiar? <br className="sm:hidden block" />Let's map what's slowing <span className="whitespace-nowrap">you down <ArrowUpRight className="!h-5 !w-5 inline -mt-0.5" /></span>
            </Link>
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center pb-30">
        <div className="max-w-screen-lg w-full px-6">
          <h2 className="text-3xl md:text-4xl md:leading-[3rem] font-bold tracking-tight text-center mx-auto">
            How We Bring Structure Back
          </h2>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="flex items-center gap-6 rounded-lg p-2 -mx-2 sm:mx-0 border p-5 shadow-sm">
              <div>
                <span className="font-semibold tracking-tight text-lg flex items-center gap-2">
                  <Server className="h-5 w-5" style={{color: '#F1C420'}} />
                  Stabilise Your Foundation &mdash; Managed IT
                </span>
                <p className="mt-1 text-sm text-muted-foreground">
                  We act as your outsourced IT partner:
                </p>
                <ul className="mt-1 text-sm text-muted-foreground list-disc list-inside pl-4">
                  <li>Employee onboarding & offboarding</li>
                  <li>Device & access management</li>
                  <li>Cloud & shared drive setup</li>
                  <li>ISP & vendor coordination</li>
                  <li>IT inventory management</li>
                </ul>
                <p className="mt-1 text-sm text-muted-foreground">
                  Your team works. Your systems stay stable.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 rounded-lg p-2 -mx-2 sm:mx-0 border p-5 shadow-sm">
              <div>
                <span className="font-semibold tracking-tight text-lg flex items-center gap-2">
                  <Zap className="h-5 w-5" style={{color: '#F1C420'}} />
                  Remove Manual Work &mdash; Automation
                </span>
                <p className="mt-1 text-sm text-muted-foreground">
                  If it's repeated daily - it should be automated:
                </p>
                <ul className="mt-1 text-sm text-muted-foreground list-disc list-inside pl-4">
                  <li>Lead capture</li>
                  <li>Follow-ups & CRM automation</li>
                  <li>Invoice generation & payment reminders</li>
                  <li>Reporting</li>
                  <li>Internal approvals</li>
                </ul>
                <p className="mt-1 text-sm text-muted-foreground">
                  Less admin. More momentum.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 rounded-lg p-2 -mx-2 sm:mx-0 border p-5 shadow-sm">
              <div>
                <span className="font-semibold tracking-tight text-lg flex items-center gap-2">
                  <Cable className="h-5 w-5" style={{color: '#F1C420'}} />
                  Connect Everything &mdash; System Integration
                </span>
                <p className="mt-1 text-sm text-muted-foreground">
                  WhatsApp. CRM. Accounting. Cloud storage. Internal dashboards.
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  If your tools don't talk - we make them.
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  No more copying and pasting. Information flows automatically.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 rounded-lg p-2 -mx-2 sm:mx-0 border p-5 shadow-sm">
              <div>
                <span className="font-semibold tracking-tight text-lg flex items-center gap-2">
                  <Code2 className="h-5 w-5" style={{color: '#F1C420'}} />
                  When Tools Break &mdash; Custom Software
                </span>
                <p className="mt-1 text-sm text-muted-foreground">
                  Sometimes off-the-shelf software almost works.<br />Almost isn't enough.
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Validate first. Invest second. Scale third. Smarter growth.
                </p>
              </div>
            </div>
            <div className="md:col-span-2 md:max-w-[50%] md:mx-auto w-full flex items-center gap-6 rounded-lg p-2 -mx-2 sm:mx-0 border p-5 shadow-sm">
              <div>
                <span className="font-semibold tracking-tight text-lg flex items-center gap-2">
                  <BrainCircuit className="h-5 w-5" style={{color: '#F1C420'}} />
                  Executive-Level Guidance &mdash; Fractional Advisory
                </span>
                <p className="mt-1 text-sm text-muted-foreground">
                  Not every business needs a full-time CTO.
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  But every growing business needs:
                </p>
                <ul className="mt-1 text-sm text-muted-foreground list-disc list-inside pl-4">
                  <li>A technical sounding board</li>
                  <li>Oversight of developers</li>
                  <li>Strategic prioritisation</li>
                  <li>Practical system decisions</li>
                  <li>Someone to say 'don't waste money on that'</li>
                </ul>
                <p className="mt-1 text-sm text-muted-foreground">
                  We provide fractional CTO & CPO advisory when needed.
                </p>
              </div>
            </div>
          </div>
          <p className="text-center mt-12">
            <i className="text-muted-foreground">Not sure which of these applies to you?</i>
          </p>
          <p className="text-center mt-1 px-8">
            <Link href={process.env.NEXT_PUBLIC_LEAD_FORM_URL || ''} target="_blank" rel="noopener noreferrer" className="hover:underline">
              Book a 20-minute call - we'll tell you exactly <span className="whitespace-nowrap">where to start <ArrowUpRight className="!h-5 !w-5 inline -mt-0.5" /></span>
            </Link>
          </p>
        </div>
      </div>

      <div id="framework" className="min-h-screen flex items-center justify-center pb-30">
        <div className="max-w-screen-lg w-full px-6">
          <h2 className="text-3xl md:text-4xl md:leading-[3rem] font-bold tracking-tight text-center mx-auto">
            How We Work
          </h2>
          <div className="mt-10 md:mt-16 w-full mx-auto space-y-12">
            <div className="flex flex-col md:flex-row items-center gap-x-20 gap-y-6 md:odd:flex-row-reverse">
              <div className="w-full">
                <Image src="/framework-understand.svg" alt="Understand" className="max-sm:mx-auto sm:ml-0 sm:mr-auto height-auto" width={600} height={400} />
              </div>
              <div className="basis-1/2 shrink-0 max-sm:text-center w-full">
                <h4 className="mb-3 text-3xl font-semibold tracking-tight">
                  Understand
                </h4>
                <p className="text-muted-foreground text-[17px]">
                  We study how your business actually runs. We map every workflow, identify where hours are wasted, leads are lost, and decisions lack clarity.
                  <br /><br />
                  <strong>Outcome:</strong> Clear visibility into bottlenecks.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-x-20 gap-y-6 md:odd:flex-row-reverse">
              <div className="w-full">
                <Image src="/framework-optimise.svg" alt="Optimise" className="max-sm:mx-auto sm:ml-auto sm:mr-0" width={600} height={400} />
              </div>
              <div className="basis-1/2 shrink-0 max-sm:text-center w-full">
                <h4 className="mb-3 text-3xl font-semibold tracking-tight">
                  Optimise
                </h4>
                <p className="text-muted-foreground text-[17px]">
                  We remove friction before we automate. Duplicate steps, manual hand-offs, and broken processes are resolved first.
                  <br /><br />
                  <strong>Outcome:</strong> A lean, reliable foundation.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-x-20 gap-y-6 md:odd:flex-row-reverse">
              <div className="w-full">
                <Image src="/framework-automate.svg" alt="Automate" className="max-sm:mx-auto sm:ml-0 sm:mr-auto" width={600} height={400} />
              </div>
              <div className="basis-1/2 shrink-0 max-sm:text-center w-full">
                <h4 className="mb-3 text-3xl font-semibold tracking-tight">
                  Automate
                </h4>
                <p className="text-muted-foreground text-[17px]">
                  We automate what is repeated. WhatsApp replies, CRM follow-ups, invoice reminders, internal approvals - running without manual input.
                  <br /><br />
                  <strong>Outcome:</strong> Time saved. Revenue protected.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-x-20 gap-y-6 md:odd:flex-row-reverse">
              <div className="w-full">
                <Image src="/framework-innovate.svg" alt="Innovate" className="max-sm:mx-auto sm:ml-auto sm:mr-0" width={600} height={400} />
              </div>
              <div className="basis-1/2 shrink-0 max-sm:text-center w-full">
                <h4 className="mb-3 text-3xl font-semibold tracking-tight">
                  Innovate
                </h4>
                <p className="text-muted-foreground text-[17px]">
                  When tools fall short, we build. AI agents, custom integrations, bespoke dashboards - designed to your specific operational needs.
                  <br /><br />
                  <strong>Outcome:</strong> Competitive edge without wasted investment.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-x-20 gap-y-6 md:odd:flex-row-reverse">
              <div className="w-full">
                <Image src="/framework-elevate.svg" alt="Elevate" className="max-sm:mx-auto sm:ml-0 sm:mr-auto" width={600} height={400} />
              </div>
              <div className="basis-1/2 shrink-0 max-sm:text-center w-full">
                <h4 className="mb-3 text-3xl font-semibold tracking-tight">
                  Elevate
                </h4>
                <p className="text-muted-foreground text-[17px]">
                  With monitoring, reporting, and continuous improvements, your business keeps growing - without drowning in admin.
                  <br /><br />
                  <strong>Outcome:</strong> Sustainable growth. Measurable ROI.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <p className="text-center px-8">
              <span className="relative inline-block font-semibold text-xl">
                Clarity first. Execution second.
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center pb-30">
        <div className="max-w-screen-lg w-full px-6">
          <h2 className="text-3xl md:text-4xl md:leading-[3rem] font-bold tracking-tight text-center mx-auto">
            Built for Growth-Stage Businesses
          </h2>
          <ul className="mt-4 space-y-2 mx-auto max-w-md list-none">
            <li className="flex items-center gap-2 justify-center">
              <CircleArrowRight className="h-4 w-4 text-gray-400 shrink-0" />
              <span>Founder-led businesses</span>
            </li>
            <li className="flex items-center gap-2 justify-center">
              <CircleArrowRight className="h-4 w-4 text-gray-400 shrink-0" />
              <span>Scaling SMEs</span>
            </li>
            <li className="flex items-center gap-2 justify-center">
              <CircleArrowRight className="h-4 w-4 text-gray-400 shrink-0" />
              <span>Operationally stretched teams</span>
            </li>
            <li className="flex items-center gap-2 justify-center">
              <CircleArrowRight className="h-4 w-4 text-gray-400 shrink-0" />
              <span>Mid-market businesses without internal tech leadership</span>
            </li>
          </ul>
          <ul className="flex flex-wrap gap-6 mt-12 list-none justify-center">
            <li className="flex items-center text-sm text-gray-500">
              <span className="w-2 h-2 rounded-full mr-2" style={{backgroundColor: '#69e3e3'}}></span>
              Distribution
            </li>
            <li className="flex items-center text-sm text-gray-500">
              <span className="w-2 h-2 rounded-full mr-2" style={{backgroundColor: '#69e3e3'}}></span>
              Financial services
            </li>
            <li className="flex items-center text-sm text-gray-500">
              <span className="w-2 h-2 rounded-full mr-2" style={{backgroundColor: '#69e3e3'}}></span>
              Logistics
            </li>
            <li className="flex items-center text-sm text-gray-500">
              <span className="w-2 h-2 rounded-full mr-2" style={{backgroundColor: '#69e3e3'}}></span>
              Professional services
            </li>
            <li className="flex items-center text-sm text-gray-500">
              <span className="w-2 h-2 rounded-full mr-2" style={{backgroundColor: '#69e3e3'}}></span>
              SaaS
            </li>
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-center pb-30">
        <div className="max-w-screen-lg w-full px-6">
          <h2 className="text-3xl md:text-4xl md:leading-[3rem] font-bold tracking-tight text-center mx-auto">
            What Changes After Working With Us
          </h2>
          <ul className="mt-4 space-y-2 mx-auto max-w-md list-none">
            <li className="flex items-center gap-2 justify-center">
              <CircleCheck className="h-4 w-4 text-green-500 shrink-0" />
              <span>Manual work drops</span>
            </li>
            <li className="flex items-center gap-2 justify-center">
              <CircleCheck className="h-4 w-4 text-green-500 shrink-0" />
              <span>Response times improve</span>
            </li>
            <li className="flex items-center gap-2 justify-center">
              <CircleCheck className="h-4 w-4 text-green-500 shrink-0" />
              <span>Teams gain clarity</span>
            </li>
            <li className="flex items-center gap-2 justify-center">
              <CircleCheck className="h-4 w-4 text-green-500 shrink-0" />
              <span>Systems become structured</span>
            </li>
            <li className="flex items-center gap-2 justify-center">
              <CircleCheck className="h-4 w-4 text-green-500 shrink-0" />
              <span>IT becomes predictable</span>
            </li>
            <li className="flex items-center gap-2 justify-center">
              <CircleCheck className="h-4 w-4 text-green-500 shrink-0" />
              <span>Growth feels controlled</span>
            </li>
          </ul>
          <p className="text-center mt-12 px-8">
            We don't just implement tools. <br />
            <span className="relative inline-block font-semibold text-[17px]">
              We create operational clarity.
            </span>
          </p>
        </div>
      </div>

      <footer>
        <div className="max-w-screen-xl mx-auto">
          <Separator />
          <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
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
