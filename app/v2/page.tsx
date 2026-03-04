import { Logo } from "@/components/navbar-04/logo";
import { NavMenu } from "@/components/navbar-04/nav-menu-02";
import { NavigationSheet } from "@/components/navbar-04/navigation-sheet-02";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Hand, CircleAlert, Server, Zap, Cable, Code2, BrainCircuit, CircleArrowRight, CircleCheck, StarIcon, CircleCheckBigIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";

const faq = [
  {
    question: "Do you replace our internal IT team?",
    answer: "No. We either act as your outsourced IT team or work alongside your internal team to improve structure and efficiency.",
  },
  {
    question: "How quickly can automation be implemented?",
    answer: "Simple workflows can be live within weeks. More complex integrations are scoped and phased to reduce disruption.",
  },
  {
    question: "Do we need to change all our current tools?",
    answer: "No. We usually optimise and connect what you already use before recommending new systems.",
  },
  {
    question: "What if we don't know what needs to be automated?",
    answer: "That's normal. We start with a clarity call to identify where time and revenue are leaking.",
  },
  {
    question: "Do you build custom software?",
    answer: "Yes — but only when off-the-shelf tools are insufficient. We prototype first, validate demand, then scale.",
  },
  {
    question: "How do your retainers work?",
    answer: "You choose a tier based on your operational needs. Work is prioritised monthly with full visibility and reporting.",
  },
  {
    question: "What industries do you specialise in?",
    answer: "We work across distribution, financial services, logistics, SaaS, and professional services — primarily with growth-stage businesses.",
  },
  {
    question: "Is this suitable for small businesses?",
    answer: "Yes — if growth is creating operational strain. Very early-stage businesses may not yet need structured automation.",
  },
  {
    question: "How do we measure ROI?",
    answer: "We track time saved, error reduction, response improvements, and revenue acceleration depending on the workflow.",
  },
  {
    question: "What happens if we outgrow our plan?",
    answer: "We evolve with you. Most clients move from Starter → Growth as operational complexity increases.",
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
            Growth creates friction.<br />
            More customers.<br />
            More staff.<br />
            More tools.<br />
            More admin.<br />
            Suddenly things feel messy, slow, and reactive.<br />
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
              Just clarity on what&apos;s slowing your business down.
            </li>
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-center px-6 py-20">
        <div className="overflow-hidden">
          <p className="text-center text-2xl font-medium md:px-30">
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

      <div className="flex items-center justify-center py-20 bg-[#92d1e0] mb-20">
        <div className="max-w-screen-lg w-full px-6">
          <h2 className="text-3xl md:text-4xl md:leading-[3rem] font-bold tracking-tight text-center mx-auto">
            When Businesses Grow, Systems Struggle
          </h2>
          <p className="text-center mt-4 text-xl">
            As you scale:
          </p>
          <div className="mt-4 md:col-span-2 max-w-[390px] mx-auto w-full flex items-center gap-6 rounded-lg -mx-2 border py-5 pl-10 pr-15 shadow-sm bg-white">
            <div>
              <ul className="space-y-2 mx-auto max-w-md list-none">
                <li className="flex items-center gap-2">
                  <CircleAlert className="h-4 w-4 text-orange-400 shrink-0" />
                  <span>Leads fall through the cracks</span>
                </li>
                <li className="flex items-center gap-2">
                  <CircleAlert className="h-4 w-4 text-orange-400 shrink-0" />
                  <span>WhatsApp becomes chaotic</span>
                </li>
                <li className="flex items-center gap-2">
                  <CircleAlert className="h-4 w-4 text-orange-400 shrink-0" />
                  <span>Reporting stays manual</span>
                </li>
                <li className="flex items-center gap-2">
                  <CircleAlert className="h-4 w-4 text-orange-400 shrink-0" />
                  <span>Invoices are chased manually</span>
                </li>
                <li className="flex items-center gap-2">
                  <CircleAlert className="h-4 w-4 text-orange-400 shrink-0" />
                  <span>Tools don&apos;t speak to each other</span>
                </li>
                <li className="flex items-center gap-2">
                  <CircleAlert className="h-4 w-4 text-orange-400 shrink-0" />
                  <span>IT becomes reactive</span>
                </li>
                <li className="flex items-center gap-2">
                  <CircleAlert className="h-4 w-4 text-orange-400 shrink-0" />
                  <span>Decisions without technical clarity</span>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-center mt-8 px-8 text-xl">
            You don&apos;t need more software. <br />
            <span className="relative inline-block font-semibold">
              You need structure.
            </span>
          </p>
          <p className="text-center mt-12 px-8 font-bold">
            <Link href={process.env.NEXT_PUBLIC_LEAD_FORM_URL || ''} target="_blank" rel="noopener noreferrer" className="hover:underline">
              Sound familiar? <br className="sm:hidden block" />Let&apos;s map what&apos;s slowing <span className="whitespace-nowrap">you down <ArrowUpRight className="!h-5 !w-5 inline -mt-0.5" /></span>
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
                  If it&apos;s repeated daily - it should be automated:
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
                  If your tools don&apos;t talk - we make them.
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
                  Sometimes off-the-shelf software almost works.<br />Almost isn&apos;t enough.
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
                  <li>Someone to say &apos;don&apos;t waste money on that&apos;</li>
                </ul>
                <p className="mt-1 text-sm text-muted-foreground">
                  We provide fractional CTO & CPO advisory when needed.
                </p>
              </div>
            </div>
          </div>
          <p className="text-center mt-12 text-xl">
            <i className="text-muted-foreground">Not sure which of these applies to you?</i>
          </p>
          <p className="text-center mt-1 px-8 text-xl">
            <Link href={process.env.NEXT_PUBLIC_LEAD_FORM_URL || ''} target="_blank" rel="noopener noreferrer" className="hover:underline">
              Book a 20-minute call - we&apos;ll tell you exactly <span className="whitespace-nowrap">where to start <ArrowUpRight className="!h-5 !w-5 inline -mt-0.5" /></span>
            </Link>
          </p>
        </div>
      </div>

      <div id="framework" className="min-h-screen flex items-center justify-center py-30 bg-[#f7ebdc]">
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
          <div className="mt-30">
            <p className="text-center px-8">
              <span className="relative inline-block font-semibold text-2xl">
                Clarity first. Execution second.
              </span>
            </p>
          </div>
        </div>
      </div>

      <div id="solutions" className="py-30">
        <div className="flex items-center justify-center">
          <div className="max-w-screen-lg w-full px-6">
            <h2 className="text-3xl md:text-4xl md:leading-[3rem] font-bold tracking-tight text-center mx-auto">
              Built for Growth-Stage Businesses
            </h2>
            <div className="mt-8 md:col-span-2 max-w-[390px] mx-auto w-full flex items-center gap-6 rounded-lg -mx-2 border py-5 pl-10 pr-15 shadow-sm bg-white">
              <div>
                <ul className="space-y-2 mx-auto max-w-md list-none">
                  <li className="flex items-center gap-2">
                    <CircleArrowRight className="h-4 w-4 text-gray-400 shrink-0" />
                    <span>Founder-led businesses</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleArrowRight className="h-4 w-4 text-gray-400 shrink-0" />
                    <span>Scaling SMEs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleArrowRight className="h-4 w-4 text-gray-400 shrink-0" />
                    <span>Operationally stretched teams</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleArrowRight className="h-4 w-4 text-gray-400 shrink-0" />
                    <span>Mid-market businesses without internal tech leadership</span>
                  </li>
                </ul>
              </div>
            </div>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 mt-12 list-none justify-center max-w-[390px] mx-auto">
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
        <div className="flex items-center justify-center pt-30">
          <div className="max-w-screen-lg w-full px-6">
            <h2 className="text-3xl md:text-4xl md:leading-[3rem] font-bold tracking-tight text-center mx-auto">
              What Changes After Working With Us
            </h2>
            <div className="mt-8 md:col-span-2 max-w-[390px] mx-auto w-full flex items-center gap-6 rounded-lg -mx-2 border py-5 pl-10 pr-15 shadow-sm bg-white">
              <div>
                <ul className="space-y-2 mx-auto max-w-md list-none">
                  <li className="flex items-center gap-2">
                    <CircleCheck className="h-4 w-4 text-green-500 shrink-0" />
                    <span>Manual work drops</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheck className="h-4 w-4 text-green-500 shrink-0" />
                    <span>Response times improve</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheck className="h-4 w-4 text-green-500 shrink-0" />
                    <span>Teams gain clarity</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheck className="h-4 w-4 text-green-500 shrink-0" />
                    <span>Systems become structured</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheck className="h-4 w-4 text-green-500 shrink-0" />
                    <span>IT becomes predictable</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheck className="h-4 w-4 text-green-500 shrink-0" />
                    <span>Growth feels controlled</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-center mt-10 px-8 text-xl">
              We don&apos;t just implement tools. <br />
              <span className="relative inline-block font-semibold">
                We create operational clarity.
              </span>
            </p>
          </div>
        </div>
      </div>

      <div id="pricing" className="flex items-center justify-center py-30 bg-[#1e2b45] text-white">
        <div className="max-w-screen-lg w-full px-6">
          <h2 className="text-3xl md:text-4xl md:leading-[3rem] font-bold tracking-tight text-center mx-auto text-white">
            We Keep It Simple
          </h2>
          <p className="text-center mt-4 text-white/80">
            We don&apos;t sell hours. We remove operational friction.
          </p>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="text-left p-4 border border-white/20 font-normal text-white/50 w-[28%]"></th>
                  <th className="text-center p-4 border border-white/20 w-[24%]">
                    <span className="font-semibold text-base text-white">Starter</span>
                  </th>
                  <th className="text-center p-4 border border-white/20 bg-white/10 w-[24%]">
                    <span className="font-semibold text-base text-white">Growth</span>
                    <Badge className="ml-2 bg-[#69e3e3] hover:bg-[#69e3e3] text-xs rounded-full text-[#010c23]">★ Popular</Badge>
                  </th>
                  <th className="text-center p-4 border border-white/20 w-[24%]">
                    <span className="font-semibold text-base text-white">Enterprise</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border border-white/20 font-medium text-white">Monthly retainer</td>
                  <td className="p-4 border border-white/20 text-center text-white">R 5,999 / month</td>
                  <td className="p-4 border border-white/20 text-center bg-white/10 text-white">R 14,999 / month</td>
                  <td className="p-4 border border-white/20 text-center text-white/60">Custom</td>
                </tr>
                <tr>
                  <td className="p-4 border border-white/20 font-medium text-white">Once-off setup</td>
                  <td className="p-4 border border-white/20 text-center text-white">R 19,999</td>
                  <td className="p-4 border border-white/20 text-center bg-white/10 text-white">R 49,999</td>
                  <td className="p-4 border border-white/20 text-center text-white/60">Bespoke</td>
                </tr>
                <tr>
                  <td className="p-4 border border-white/20 font-medium text-white">Best for</td>
                  <td className="p-4 border border-white/20 text-center text-white/60">Early-stage SMEs building structure</td>
                  <td className="p-4 border border-white/20 text-center bg-white/10 text-white/60">Scaling businesses that need systems aligned</td>
                  <td className="p-4 border border-white/20 text-center text-white/60">Mid-market &amp; complex environments</td>
                </tr>
                <tr>
                  <td className="p-4 border border-white/20 font-medium text-white">Workflows</td>
                  <td className="p-4 border border-white/20 text-center text-white/60">1–2 structured workflows</td>
                  <td className="p-4 border border-white/20 text-center bg-white/10 text-white/60">Advanced multi-step workflows</td>
                  <td className="p-4 border border-white/20 text-center text-white/60">Unlimited workflow design</td>
                </tr>
                <tr>
                  <td className="p-4 border border-white/20 font-medium text-white">Support</td>
                  <td className="p-4 border border-white/20 text-center text-white/60">Business-hours support</td>
                  <td className="p-4 border border-white/20 text-center bg-white/10 text-white/60">Priority support</td>
                  <td className="p-4 border border-white/20 text-center text-white/60">Dedicated support</td>
                </tr>
                <tr>
                  <td className="p-4 border border-white/20 font-medium text-white">Advisory</td>
                  <td className="p-4 border border-white/20 text-center text-white/60">—</td>
                  <td className="p-4 border border-white/20 text-center bg-white/10 text-white/60">Monthly optimisation call</td>
                  <td className="p-4 border border-white/20 text-center text-white/60">Fractional CTO + developer oversight</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-center mt-8 text-sm text-white/50 italic">
            * Once-off setup fee covers workflow mapping, systems audit, integration configuration, and onboarding. Charged once at project start.
          </p>
          <p className="text-center mt-8 text-sm text-white/80">
            Custom solutions are scoped based on complexity and impact. Clear milestones. No surprises.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center py-20">
        <div className="max-w-screen-lg w-full px-6">
          <h2 className="text-3xl md:text-4xl md:leading-[3rem] font-bold tracking-tight text-center mx-auto">
            Integrations That Fit Your Stack
          </h2>
          <p className="text-center mt-4">
            Outcomes first. Tools second.
          </p>
          <p className="text-center mt-2">
            If it has an API, webhook, inbox, spreadsheet, or database — we can connect it.
          </p>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <tbody>
                {[
                  {
                    category: "Comms",
                    tools: [
                      { name: "WhatsApp", icon: "whatsapp" },
                      { name: "Wati", local: "wati" },
                      { name: "Twilio", local: "twilio" },
                      { name: "Gmail", local: "gmail" },
                    ],
                  },
                  {
                    category: "CRM / Sales",
                    tools: [
                      { name: "Pipedrive", local: "pipedrive" },
                      { name: "HubSpot", icon: "hubspot" },
                      { name: "Zoho", icon: "zoho" },
                      { name: "Attio", local: "attio" },
                    ],
                  },
                  {
                    category: "Payments / Accounting",
                    tools: [
                      { name: "Stripe", icon: "stripe" },
                      { name: "Xero", icon: "xero" },
                      { name: "Sage", icon: "sage" },
                      { name: "Yoco", local: "yoco" },
                    ],
                  },
                  {
                    category: "E-commerce",
                    tools: [
                      { name: "Shopify", icon: "shopify" },
                      { name: "WooCommerce", local: "woo" },
                    ],
                  },
                  {
                    category: "Support",
                    tools: [
                      { name: "Freshworks", local: "freshworks" },
                      { name: "Zendesk", icon: "zendesk" },
                      { name: "Intercom", icon: "intercom" },
                      { name: "Monday", local: "monday" },
                    ],
                  },
                  {
                    category: "Data / BI",
                    tools: [
                      { name: "Airtable", icon: "airtable" },
                      { name: "Notion", icon: "notion" },
                      { name: "BigQuery", icon: "googlebigquery" },
                      { name: "Metabase", icon: "metabase" },
                    ],
                  },
                  {
                    category: "Productivity",
                    tools: [
                      { name: "Google Workspace", icon: "google" },
                      { name: "Microsoft 365", local: "microsoft" },
                      { name: "Slack", local: "slack" },
                      { name: "Mattermost", icon: "mattermost" },
                    ],
                  },
                  {
                    category: "Automation",
                    tools: [
                      { name: "Zapier", icon: "zapier" },
                      { name: "Make", icon: "make" },
                      { name: "n8n", icon: "n8n" },
                    ],
                  },
                ].map(({ category, tools }) => (
                  <tr key={category}>
                    <td className="p-4 border border-border font-medium w-[20%] align-middle whitespace-nowrap">
                      {category}
                    </td>
                    <td className="p-4 border border-border">
                      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                        {tools.map(({ name, icon, local }: { name: string; icon?: string | null; local?: string }) => (
                          <div key={name} className="flex items-center gap-2">
                            {local ? (
                              <img
                                src={`/icons/${local}.svg`}
                                alt={name}
                                className="h-5 w-5 opacity-70 dark:invert"
                              />
                            ) : icon ? (
                              <img
                                src={`https://cdn.simpleicons.org/${icon}`}
                                alt={name}
                                className="h-5 w-5 opacity-70 dark:invert"
                              />
                            ) : null}
                            <span className="text-sm text-muted-foreground">{name}</span>
                          </div>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center mt-12 text-xl">
            <i className="text-muted-foreground">If it&apos;s not listed, we can likely connect it.</i>
          </p>
          <p className="text-center mt-1 px-8 text-xl">
            <Link href={process.env.NEXT_PUBLIC_LEAD_FORM_URL || ''} target="_blank" rel="noopener noreferrer" className="hover:underline">
              Want to find out if we can connect it. <span className="whitespace-nowrap">Reach out for a call <ArrowUpRight className="!h-5 !w-5 inline -mt-0.5" /></span>
            </Link>
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center px-6">
        <div>
          <h2 className="mb-8 text-3xl md:text-4xl md:leading-[3rem] font-bold tracking-tight text-center mx-auto">
            What Clients Say
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
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8">
            <Button asChild size="lg" className="rounded-full text-base bg-[#e8890e] hover:bg-[#f1951e] cursor-pointer">
              <Link href={process.env.NEXT_PUBLIC_LEAD_FORM_URL || ''} target="_blank" rel="noopener noreferrer">
                Book a 20-Minute Clarity Call <ArrowUpRight className="!h-5 !w-5" />
              </Link>
            </Button>
          </div>
          <p className="text-center mt-4">
            <i className="text-muted-foreground">Join the businesses that have already removed the friction.</i>
          </p>
        </div>
      </div>

      <div id="faq" className="flex items-center justify-center px-6 py-30">
        <div className="max-w-xl">
          <h2 className="mb-8 text-3xl md:text-4xl md:leading-[3rem] font-bold tracking-tight text-center mx-auto">
            Frequently Asked Questions
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

      <div className="flex items-center justify-center pb-30">
        <div className="max-w-screen-lg w-full px-6">
          <h2 className="text-3xl md:text-4xl md:leading-[3rem] font-bold tracking-tight text-center mx-auto">
            If Growth Feels Messy &mdash; Let&apos;s Fix It.
          </h2>
          <p className="text-center mt-4 text-xl">
            We&apos;ll identify:
          </p>
          <div className="mt-4 md:col-span-2 max-w-[390px] mx-auto w-full flex items-center gap-6 rounded-lg -mx-2 border py-5 pl-10 pr-15 shadow-sm bg-white">
            <div>
              <ul className="space-y-2 mx-auto max-w-md list-none">
                <li className="flex items-center gap-2">
                  <CircleCheckBigIcon className="h-4 w-4 text-green-500 shrink-0" />
                  <span>Where time is leaking</span>
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheckBigIcon className="h-4 w-4 text-green-500 shrink-0" />
                  <span>What should be automated</span>
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheckBigIcon className="h-4 w-4 text-green-500 shrink-0" />
                  <span>What should stay human</span>
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheckBigIcon className="h-4 w-4 text-green-500 shrink-0" />
                  <span>What should be built</span>
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheckBigIcon className="h-4 w-4 text-green-500 shrink-0" />
                  <span>What should be ignored</span>
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-8 text-center px-8">
            <span className="relative inline-block font-semibold text-xl">
              Clarity first. Execution second.
            </span>
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-8">
            <Button asChild size="lg" className="rounded-full text-base bg-[#e8890e] hover:bg-[#f1951e] cursor-pointer">
              <Link href={process.env.NEXT_PUBLIC_LEAD_FORM_URL || ''} target="_blank" rel="noopener noreferrer">
                Book a 20-Minute Clarity Call <ArrowUpRight className="!h-5 !w-5" />
              </Link>
            </Button>
          </div>
          <p className="text-center mt-8 px-8 text-muted-foreground italic">
            Most calls surface 2–3 immediate workflow improvements.<br />You&apos;ll leave with clarity — whether we work together or not.
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
