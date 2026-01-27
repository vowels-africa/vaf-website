import { notFound } from "next/navigation";
import { Logo } from "@/components/navbar-04/logo";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { ArrowUpRight, StarIcon, CircleCheck, Hand } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";
import { RotatingText } from "@/components/ui/rotating-text";

// Valid landing page slugs
const VALID_SLUGS = [
  "workflow-automation-agency",
  "workflow-automation-company",
  "enterprise-workflow-automation-services",
  "business-automation",
  "business-automation-software",
  "workflow-automation",
  "workflow-automation-implementation",
  "automate-business-processes",
  "business-automation-solutions",
  "process-automation-consulting-services",
  "business-process-improvement-services",
  "ai-powered-business-tools",
  "it-operation-management",
  "make-com-automation-agency",
  "ai-for-automating-processes",
  "automation-services-for-business",
  "workflow-automation-companies",
  "workflow-automation-software-pricing",
  "ai-workflow-automation-platform",
];

export function generateStaticParams() {
  return VALID_SLUGS.map((slug) => ({ slug }));
}

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

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function LandingPage({ params }: PageProps) {
  const { slug } = await params;

  if (!VALID_SLUGS.includes(slug)) {
    notFound();
  }

  return (
    <>
      <nav className="absolute top-6 inset-x-4 h-16 border border-[transparent] max-w-screen-xl mx-auto rounded-full z-50 bg-[transparent]">
        <div className="h-full flex items-center justify-between mx-auto px-4">
          <Logo />
          <div className="flex items-center gap-3">
            <Button asChild className="rounded-full bg-[#e8890e] hover:bg-[#f1951e] cursor-pointer">
              <Link href={process.env.NEXT_PUBLIC_LEAD_FORM_URL || "/"} target="_blank" rel="noopener noreferrer">
                <span className="hidden sm:inline">Request a Call</span>
                <Hand className="h-5 w-5 sm:hidden" />
                <ArrowUpRight className="h-5 w-5 hidden sm:inline" />
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      <div className="relative flex items-center justify-center px-6 overflow-hidden pt-40 pb-25 bg-[#010c23] text-white border-b border-[#69e3e3]">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.4}
          duration={3}
          className={cn(
            "[mask-image:radial-gradient(350px_circle_at_center,white,transparent)]",
            "inset-x-0 h-full skew-y-12",
            "!stroke-[#1ea3c0]/20 !text-[#f1c421]/60"
          )}
        />
        <div className="relative z-10 text-center max-w-2xl">
          <h1 className="mt-6 text-3xl sm:text-4xl font-bold !leading-[1.2] tracking-tight">
            We help businesses automate <RotatingText words={["admin", "sales", "operations"]} className="text-[#69e3e3]" />, saving time and reducing costs.
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

      <div className="flex items-center justify-center px-6 py-20">
        <div className="overflow-hidden">
          <p className="text-center text-2xl font-medium">
            Trusted by
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
              <img src="/starfish.png" className="h-16" alt="Starfish Debt Consultants" title="Starfish Debt Consultants" />
            </Marquee>
          </div>
        </div>
      </div>

      <div id="testimonials" className="flex justify-center items-center p-6">
        <div>
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

      <div id="framework" className="flex items-center justify-center py-10">
        <div className="max-w-screen-lg w-full px-6">
          <div className="pt-20">
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
          <div className="mt-7 flex items-center justify-center gap-4 mb-30">
            <Button asChild size="lg" className="rounded-full text-base bg-[#e8890e] hover:bg-[#f1951e]">
              <Link href={process.env.NEXT_PUBLIC_LEAD_FORM_URL || "/"} target="_blank" rel="noopener noreferrer">
                Start Your Vowels Journey <ArrowUpRight className="!h-5 !w-5" />
              </Link>
            </Button>
          </div>
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
        </div>
      </div>

      <div className="relative flex items-center justify-center px-6 overflow-hidden py-40">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.4}
          duration={3}
          className={cn(
            "[mask-image:radial-gradient(350px_circle_at_center,white,transparent)]",
            "inset-x-0 h-full skew-y-12",
            "!stroke-[#1ea3c0]/20 !text-[#f1c421]/60"
          )}
        />
        <div className="relative z-10 text-center max-w-2xl">
          <h2 className="mt-6 text-3xl sm:text-4xl font-bold !leading-[1.2] tracking-tight">
            Stop the manual chaos. <br className="hidden md:block" />Start saving this month.
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
          </div>
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
