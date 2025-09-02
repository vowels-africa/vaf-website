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
            <Button className="rounded-full bg-[#e8890e] hover:bg-[#f1951e]">
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
            "!stroke-[#1ea3c0]/40 !text-[#f1c421]/80"
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
            <Button size="lg" className="rounded-full text-base bg-[#e8890e] hover:bg-[#f1951e]">
              Schedule a Free Audit <ArrowUpRight className="!h-5 !w-5" />
            </Button>
          </div>
        </div>
      </div>

      <div id="problem" className="min-h-screen flex items-center justify-center">
        <div className="max-w-screen-lg w-full py-10 px-6">
          <h2 className="text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight max-w-xl md:text-center md:mx-auto">
            Problem
          </h2>
          <p className="md:text-center">
            Are these holding your business back?
          </p>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="flex items-center gap-6 rounded-lg p-2 -mx-2 sm:mx-0">
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
            <div className="flex items-center gap-6 rounded-lg p-2 -mx-2 sm:mx-0">
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
            <div className="flex items-center gap-6 rounded-lg p-2 -mx-2 sm:mx-0">
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
            <div className="flex items-center gap-6 rounded-lg p-2 -mx-2 sm:mx-0">
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

      <div id="solution" className="min-h-screen flex items-center justify-center">
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
            <div className="flex items-center gap-6 rounded-lg p-2 -mx-2 sm:mx-0">
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
            <div className="flex items-center gap-6 rounded-lg p-2 -mx-2 sm:mx-0">
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
            <div className="flex items-center gap-6 rounded-lg p-2 -mx-2 sm:mx-0">
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
            <div className="flex items-center gap-6 rounded-lg p-2 -mx-2 sm:mx-0">
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

      <div id="framework" className="min-h-screen flex items-center justify-center">
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
            <Button size="lg" className="rounded-full text-base">
              Start Your Vowels Journey <ArrowUpRight className="!h-5 !w-5" />
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

      <div id="use-cases" className="min-h-screen flex items-center justify-center">
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

      <div id="testimonials" className="flex justify-center items-center py-12 px-6">
        <div>
          <h2 className="mb-8 sm:mb-14 text-5xl md:text-6xl font-bold text-center tracking-tight">
            Testimonials
          </h2>
          <div className="w-full max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-hidden border-r border-background">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex flex-col outline outline-1 outline-border px-6 py-8"
                >
                  <div className="flex items-center justify-center gap-2">
                    <StarIcon className="w-6 h-6 fill-yellow-500 stroke-yellow-500" />
                    <StarIcon className="w-6 h-6 fill-yellow-500 stroke-yellow-500" />
                    <StarIcon className="w-6 h-6 fill-yellow-500 stroke-yellow-500" />
                    <StarIcon className="w-6 h-6 fill-yellow-500 stroke-yellow-500" />
                    <StarIcon className="w-6 h-6 fill-yellow-500 stroke-yellow-500" />
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

      <div className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden py-10">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 h-full skew-y-12"
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
            <Button size="lg" className="rounded-full text-base bg-[#e8890e] hover:bg-[#f1951e]">
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
                className="text-muted-foreground hover:text-foreground font-medium"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground font-medium"
              >
                Terms and Conditions
              </Link>
              <svg
                id="logo-7"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.48 10.62C27.9711 9.45636 27.2976 8.37193 26.48 7.4C25.2715 5.92034 23.7633 4.71339 22.0547 3.8586C20.3461 3.00382 18.4758 2.52057 16.567 2.44066C14.6582 2.36075 12.7541 2.68599 10.98 3.39499C9.20597 4.10398 7.60217 5.18065 6.2742 6.55413C4.94622 7.9276 3.92417 9.56675 3.27532 11.3637C2.62647 13.1606 2.36552 15.0746 2.50966 16.9796C2.65381 18.8847 3.19976 20.7376 4.1116 22.4164C5.02344 24.0953 6.28049 25.562 7.80001 26.72C8.77501 27.4779 9.85236 28.094 11 28.55C12.609 29.2094 14.3311 29.549 16.07 29.55C19.6594 29.5421 23.0992 28.1113 25.6355 25.5713C28.1717 23.0313 29.5974 19.5894 29.6 16C29.6026 14.1485 29.2213 12.3166 28.48 10.62V10.62ZM16.06 5.18999C17.6216 5.18983 19.1643 5.53113 20.58 6.18999V6.18999C20.2348 6.33916 19.8718 6.44335 19.5 6.5C18.2766 6.67709 17.1433 7.24507 16.2692 8.11917C15.3951 8.99326 14.8271 10.1266 14.65 11.35C14.5723 12.0361 14.2602 12.6744 13.7665 13.1572C13.2728 13.64 12.6277 13.9376 11.94 14C10.7166 14.1771 9.58327 14.7451 8.70918 15.6192C7.83509 16.4933 7.2671 17.6266 7.09001 18.85C7.03005 19.5024 6.7517 20.1155 6.30001 20.59V20.59C5.52066 18.9433 5.17056 17.1261 5.28228 15.3077C5.394 13.4893 5.96391 11.7287 6.93898 10.1897C7.91404 8.65079 9.26258 7.38351 10.8591 6.50584C12.4556 5.62817 14.2482 5.16864 16.07 5.16999L16.06 5.18999ZM7.79001 23C7.91001 22.89 8.03001 22.79 8.15001 22.67C9.03966 21.8075 9.61072 20.6689 9.77001 19.44C9.83459 18.7492 10.143 18.104 10.64 17.62C11.1183 17.1222 11.762 16.8163 12.45 16.76C13.6734 16.5829 14.8067 16.0149 15.6808 15.1408C16.5549 14.2667 17.1229 13.1334 17.3 11.91C17.3433 11.1875 17.6533 10.5068 18.17 10C18.6601 9.51185 19.3099 9.2171 20 9.16999C21.1239 9.01536 22.1721 8.51571 23 7.74C23.9427 8.52207 24.7413 9.46289 25.36 10.52C25.322 10.5713 25.2784 10.6183 25.23 10.66C24.7527 11.1622 24.1098 11.4748 23.42 11.54C22.1953 11.714 21.0603 12.281 20.1856 13.1556C19.311 14.0303 18.744 15.1653 18.57 16.39C18.4995 17.0784 18.1932 17.7213 17.703 18.2097C17.2127 18.6982 16.5687 19.0021 15.88 19.07C14.653 19.2457 13.5155 19.8126 12.6363 20.6863C11.7572 21.5601 11.1833 22.6941 11 23.92C10.9462 24.4087 10.7783 24.878 10.51 25.29C9.484 24.6808 8.5651 23.9072 7.79001 23V23ZM16.06 26.86C15.0453 26.8611 14.0354 26.7197 13.06 26.44C13.3937 25.818 13.6106 25.1401 13.7 24.44C13.7701 23.7531 14.075 23.1114 14.5632 22.6232C15.0514 22.135 15.6931 21.8301 16.38 21.76C17.6052 21.5849 18.7408 21.0178 19.6169 20.1435C20.4929 19.2693 21.0624 18.1348 21.24 16.91C21.3101 16.2231 21.615 15.5814 22.1032 15.0932C22.5914 14.605 23.2331 14.3001 23.92 14.23C24.842 14.1101 25.7208 13.7668 26.48 13.23C26.9016 14.8279 26.9515 16.5011 26.626 18.1213C26.3005 19.7415 25.6081 21.2657 24.6021 22.5768C23.5961 23.8878 22.3032 24.9511 20.8224 25.6849C19.3417 26.4187 17.7126 26.8036 16.06 26.81V26.86Z"
                  className="fill-foreground"
                />
              </svg>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
