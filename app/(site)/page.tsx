import type { Metadata } from "next";
import { HomeContent } from "@/components/site/home-content";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return <HomeContent />;
}
