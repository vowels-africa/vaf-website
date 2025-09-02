import { Logo } from "@/components/navbar-04/logo";
import { NavMenu } from "@/components/navbar-04/nav-menu";
import { NavigationSheet } from "@/components/navbar-04/navigation-sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Goal, HandCoins, MessagesSquare, StarIcon } from "lucide-react";
import Link from "next/link";

// const plans = [
//   {
//     name: "Starter",
//     price: 5500,
//     setup_price: 2500,
//     description: "Perfect for small businesses getting started.",
//     features: [
//       "WhatsApp automation (1 workflow)",
//       "Basic CRM setup (up to 1,000 contacts)",
//       "Simple invoicing + reminders",
//       "Basic analytics dashboard",
//       "Email support",
//     ],
//     buttonText: "Start Free Trial",
//   },
//   {
//     name: "Growth",
//     price: 14500,
//     setup_price: 6500,
//     isRecommended: true,
//     description: "For scaling SMEs ready to move faster.",
//     features: [
//       "Everything in Starter",
//       "Advanced workflows (up to 5)",
//       "Multi-channel messaging (WhatsApp + SMS)",
//       "Invoicing + mobile money integration",
//       "Support chatbot (multi-language)",
//       "Priority WhatsApp support",
//     ],
//     buttonText: "Book Free Audit",
//     isPopular: true,
//   },
//   {
//     name: "Enterprise",
//     price: 35000,
//     description: "For established businesses with custom needs.",
//     features: [
//       "Unlimited workflows + contacts",
//       "Bespoke AI & system integrations",
//       "Dedicated account manager",
//       "White-label options",
//       "24/7 support + SLAs",
//     ],
//     buttonText: "Schedule Consultation",
//   },
// ];

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    designation: "Early Client",
    company: "Professional Services",
    testimonial: "Vowels cut our admin time in half. Clients now get replies instantly — and we finally get paid on time.",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Sophia Lee",
    designation: "Early Client",
    company: "FMCG",
    testimonial: "With WhatsApp automation, our retail orders doubled without adding staff.",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    id: 3,
    name: "Michael Johnson",
    designation: "Early Client",
    company: "E-commerce",
    testimonial: "Vowels transformed our customer support from chaos to calm. Response times dropped from hours to minutes.",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Lebo",
    designation: "Early Client",
    company: "E-commerce",
    testimonial: "Vowels transformed our customer support from chaos to calm. Response times dropped from hours to minutes.",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const features = [
  {
    icon: HandCoins,
    title: "FMCG Distributor (South Africa)",
    description: "Eliminated manual order entry, invoice chasing, and payment follow-ups → 25 hours back per week.",
  },
  {
    icon: Goal,
    title: "Professional Services Firm (Kenya)",
    description: "Automated lead scoring, nurturing sequences, and follow-up reminders → 40% higher conversion rate.",
  },
  {
    icon: MessagesSquare,
    title: "Alternative Health Digital Platform (Nigeria)",
    description: "Localized chatbot experience with seamless payment flows → 3x more active users in 90 days.",
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
            <Button className="rounded-full bg-[#e8890e] hover:bg-[#f1951e] cursor-pointer">
              Book a Call <ArrowUpRight className="!h-5 !w-5" />
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
            Automation Solutions Built for Africa
          </h1>
          <p className="mt-6 text-[17px] md:text-lg">
            Save hours, close more sales, and get paid faster — all with WhatsApp + AI tools built for how African businesses actually work.
          </p>
          <div className="mt-12 flex items-center justify-center gap-4">
            <Button size="lg" className="rounded-full text-base bg-[#e8890e] hover:bg-[#f1951e] cursor-pointer">
              Schedule a Free Audit <ArrowUpRight className="!h-5 !w-5" />
            </Button>
          </div>
        </div>
      </div>

      <div id="problem" className="min-h-screen flex items-center justify-center py-30">
        <div className="max-w-screen-lg w-full py-10 px-6">
          <h2 className="text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight max-w-xl md:text-center md:mx-auto">
            Problem
          </h2>
          <p className="md:text-center">
            Are these holding your business back?
          </p>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="flex items-center gap-6 rounded-lg p-2 -mx-2 sm:mx-0 border p-5 shadow-sm">
              <div className="h-24 aspect-square shrink-0 rounded-lg flex items-center justify-center">
                <img src="/undraw_8.svg" />
              </div>
              <div>
                <span className="font-semibold tracking-tight text-lg">
                  Too much manual work
                </span>
                <p className="mt-1 text-sm text-muted-foreground">
                  Drowning in spreadsheets, follow-ups, and endless admin tasks that steal time from growth.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 rounded-lg p-2 -mx-2 sm:mx-0 border p-5 shadow-sm">
              <div className="h-24 aspect-square shrink-0 rounded-lg flex items-center justify-center">
                <img src="/undraw_7.svg" />
              </div>
              <div>
                <span className="font-semibold tracking-tight text-lg">
                  Leads slipping away
                </span>
                <p className="mt-1 text-sm text-muted-foreground">
                  Up to 67% of business leads never get contacted, meaning lost revenue every single day.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 rounded-lg p-2 -mx-2 sm:mx-0 border p-5 shadow-sm">
              <div className="h-24 aspect-square shrink-0 rounded-lg flex items-center justify-center">
                <img src="/undraw_6.svg" />
              </div>
              <div>
                <span className="font-semibold tracking-tight text-lg">
                  Slow payments
                </span>
                <p className="mt-1 text-sm text-muted-foreground">
                  Weeks spent chasing invoices while cash flow suffers and bills pile up.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 rounded-lg p-2 -mx-2 sm:mx-0 border p-5 shadow-sm">
              <div className="h-24 aspect-square shrink-0 rounded-lg flex items-center justify-center">
                <img src="/undraw_5.svg" />
              </div>
              <div>
                <span className="font-semibold tracking-tight text-lg">
                  No tech expertise
                </span>
                <p className="mt-1 text-sm text-muted-foreground">
                  Wanting automation benefits but not knowing where to start or how to implement.
                </p>
              </div>
            </div>
          </div>
          <p className="md:text-center mt-12">
            If this sounds like your business, you&apos;re not alone. 90% of African SMEs face the same barriers.
            <br className="max-sm:hidden" /> That&apos;s why we built Vowels.Africa.
          </p>
        </div>
      </div>

      <div id="solution" className="min-h-screen flex items-center justify-center py-30">
        <div className="max-w-screen-lg w-full py-10 px-6">
          <h2 className="text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight max-w-xl md:text-center md:mx-auto">
            Solution
          </h2>
          <h3 className="md:text-center text-1xl font-bold">
            Automation designed for Africa
          </h3>
          <p className="md:text-center">
            We integrate the tools you already use — WhatsApp, mobile money, simple CRMs
            <br className="max-sm:hidden" /> and automate the boring, time-draining work.
          </p>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="flex items-center gap-6 rounded-lg p-2 -mx-2 sm:mx-0 border p-5 shadow-sm">
              <div className="h-24 aspect-square shrink-0 rounded-lg flex items-center justify-center">
                <img src="/undraw_1.svg" />
              </div>
              <div>
                <span className="font-semibold tracking-tight text-lg">
                  WhatsApp Automation
                </span>
                <p className="mt-1 text-sm text-muted-foreground">
                  Turn messages into opportunity. Instantly respond, qualify leads, and book appointments automatically.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 rounded-lg p-2 -mx-2 sm:mx-0 border p-5 shadow-sm">
              <div className="h-24 aspect-square shrink-0 rounded-lg flex items-center justify-center">
                <img src="/undraw_2.svg" />
              </div>
              <div>
                <span className="font-semibold tracking-tight text-lg">
                  Smart CRM
                </span>
                <p className="mt-1 text-sm text-muted-foreground">
                  Never lose a lead. Capture prospects, track deals, and grow customer relationships effortlessly.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 rounded-lg p-2 -mx-2 sm:mx-0 border p-5 shadow-sm">
              <div className="h-24 aspect-square shrink-0 rounded-lg flex items-center justify-center">
                <img src="/undraw_3.svg" />
              </div>
              <div>
                <span className="font-semibold tracking-tight text-lg">
                  Invoicing & Payments
                </span>
                <p className="mt-1 text-sm text-muted-foreground">
                  Get paid faster. Auto-generate invoices and collect via M-Pesa, EFT, or mobile money.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 rounded-lg p-2 -mx-2 sm:mx-0 border p-5 shadow-sm">
              <div className="h-24 aspect-square shrink-0 rounded-lg flex items-center justify-center">
                <img src="/undraw_4.svg" />
              </div>
              <div>
                <span className="font-semibold tracking-tight text-lg">
                  AI Support Bots
                </span>
                <p className="mt-1 text-sm text-muted-foreground">
                  24/7 customer support. Handle common questions and escalate complex issues when needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="framework" className="min-h-screen flex items-center justify-center py-30">
        <div className="max-w-screen-lg w-full py-10 px-6">
          <h2 className="text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight max-w-xl md:text-center md:mx-auto">
            Framework
          </h2>
          <p className="md:text-center">
            Just like vowels connect words, we connect your business processes to make them flow.
          </p>
          <div className="mt-8 md:mt-16 w-full mx-auto space-y-20">
            <div className="flex flex-col md:flex-row items-center gap-x-20 gap-y-6 md:odd:flex-row-reverse">
              <div className="w-full aspect-[6/4] bg-muted rounded-xl border border-border/50 basis-1/2" />
              <div className="basis-1/2 shrink-0 max-sm:text-center">
                <h4 className="my-3 text-3xl font-semibold tracking-tight">
                  Understand
                </h4>
                <p className="text-muted-foreground text-[17px]">
                  We dive deep into how your business actually works. Map every touchpoint, identify bottlenecks, and discover which processes drain your time and resources.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-x-20 gap-y-6 md:odd:flex-row-reverse">
              <div className="w-full aspect-[6/4] bg-muted rounded-xl border border-border/50 basis-1/2" />
              <div className="basis-1/2 shrink-0 max-sm:text-center">
                <h4 className="my-3 text-3xl font-semibold tracking-tight">
                  Optimise
                </h4>
                <p className="text-muted-foreground text-[17px]">
                  Transform chaos into clarity. Streamline workflows, eliminate redundancies, and design automated systems that work seamlessly with your existing operations.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-x-20 gap-y-6 md:odd:flex-row-reverse">
              <div className="w-full aspect-[6/4] bg-muted rounded-xl border border-border/50 basis-1/2" />
              <div className="basis-1/2 shrink-0 max-sm:text-center">
                <h4 className="my-3 text-3xl font-semibold tracking-tight">
                  Automate
                </h4>
                <p className="text-muted-foreground text-[17px]">
                  Deploy smart AI and proven tools that work 24/7. From WhatsApp bots to payment processing, we implement systems that handle routine tasks while you focus on growth.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-x-20 gap-y-6 md:odd:flex-row-reverse">
              <div className="w-full aspect-[6/4] bg-muted rounded-xl border border-border/50 basis-1/2" />
              <div className="basis-1/2 shrink-0 max-sm:text-center">
                <h4 className="my-3 text-3xl font-semibold tracking-tight">
                  Innovate
                </h4>
                <p className="text-muted-foreground text-[17px]">
                  Go beyond templates with solutions built specifically for your business. Custom integrations, unique workflows, and creative approaches that give you competitive advantage.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-x-20 gap-y-6 md:odd:flex-row-reverse">
              <div className="w-full aspect-[6/4] bg-muted rounded-xl border border-border/50 basis-1/2" />
              <div className="basis-1/2 shrink-0 max-sm:text-center">
                <h4 className="my-3 text-3xl font-semibold tracking-tight">
                  Elevate
                </h4>
                <p className="text-muted-foreground text-[17px]">
                  Transform from reactive to proactive. Scale operations confidently with systems that grow with you, turning automation into your biggest business multiplier.
                </p>
              </div>
            </div>
          </div>
          <div className="my-20 flex items-center justify-center gap-4">
            <Button size="lg" className="rounded-full text-base bg-[#e8890e] hover:bg-[#f1951e]">
              Start Your Journey <ArrowUpRight className="!h-5 !w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* <div className="min-h-screen flex flex-col items-center justify-center py-12 px-6">
        <h2 className="text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight max-w-xl text-center md:mx-auto">
          Pricing
        </h2>
        <h3 className="md:text-center text-1xl font-bold">
          Automation that pays for itself.
        </h3>
        <p className="max-w-screen-sm text-center">
          ROI guaranteed — save more than you spend, or we work free until you do.
        </p>
        <div className="mt-12 max-w-screen-lg mx-auto grid grid-cols-1 lg:grid-cols-3 items-center gap-8 lg:gap-0">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative border p-7 rounded-xl lg:rounded-none lg:first:rounded-l-xl lg:last:rounded-r-xl",
                {
                  "border-[2px] border-primary py-12 !rounded-xl": plan.isPopular,
                }
              )}
            >
              {plan.isPopular && (
                <Badge className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2">
                  Most Popular
                </Badge>
              )}
              <h3 className="text-lg font-medium">{plan.name}</h3>
              <p className="mt-2 text-4xl font-bold">R{plan.price}</p>
              {plan.setup_price && (
                <p className="mt-1 font-bold">+ R{plan.setup_price} (Setup)</p>
              )}
              <p className="mt-4 font-medium text-muted-foreground">
                {plan.description}
              </p>
              <Separator className="my-6" />
              <ul className="space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <CircleCheck className="h-4 w-4 mt-1 text-green-600" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.isPopular ? "default" : "outline"}
                size="lg"
                className="w-full mt-6 rounded-full"
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div> */}

      <div id="use-cases" className="flex items-center justify-center py-30">
        <div className="max-w-screen-lg w-full py-12 px-6">
          <h2 className="text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight max-w-lg">
            Use Cases
          </h2>
          <p>
            Even as a new startup, we&apos;re already working with early adopters across Africa:
          </p>
          <div className="mt-6 md:mt-8 w-full mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <Accordion defaultValue="item-0" type="single" className="w-full">
                {features.map(({ title, description, icon: Icon }, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="data-[state=open]:border-b-2 data-[state=open]:border-primary"
                  >
                    <AccordionTrigger className="text-lg [&>svg]:hidden">
                      <div className="flex items-center gap-4">
                        <Icon />
                        {title}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-[17px] leading-relaxed text-muted-foreground">
                      {description}
                      <div className="mt-6 mb-2 md:hidden aspect-video w-full bg-muted rounded-xl" />
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            {/* Media */}
            <div className="hidden md:block w-full h-full bg-muted rounded-xl" />
          </div>
        </div>
      </div>

      <div id="testimonials" className="flex justify-center items-center pt-0 pb-6 px-6">
        <div>
          <h2 className="mb-8 sm:mb-14 text-5xl md:text-6xl font-bold text-center tracking-tight">
            Testimonials
          </h2>
          <div className="w-full max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 overflow-hidden border-r border-background">
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
                  <p className="my-6 text-[17px] text-center max-w-md">
                    &quot;{testimonial.testimonial}&quot;
                  </p>
                  <div className="mt-auto flex items-center justify-center gap-3">
                    <Avatar>
                      <AvatarFallback className="text-xl font-medium bg-primary text-primary-foreground">
                        {testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-lg font-semibold">{testimonial.company}</p>
                      <p className="text-sm text-gray-500">
                        {testimonial.designation}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
            Ready to Stop <br className="max-xs:hidden" />Losing Time & Money?
          </h2>
          <p className="mt-6 text-[17px] md:text-lg">
          Get a free automation audit and discover how much you could save in 30 days.
          </p>
          <div className="mt-12 flex items-center justify-center gap-4">
            <Button size="lg" className="rounded-full text-base bg-[#e8890e] hover:bg-[#f1951e] cursor-pointer">
              Schedule a Free Audit <ArrowUpRight className="!h-5 !w-5" />
            </Button>
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
              Vowels Africa.<br className="md:hidden" /> All rights reserved.
            </span>
            <div className="flex items-center gap-5 text-muted-foreground">
              <Link
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
              </Link>
              <img
                src="/logo_icon_only.svg"
                alt="Vowels"
                className="h-10 fill-foreground"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
