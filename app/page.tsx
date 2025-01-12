import { Community } from "@/components/coldlabs/community";
import FAQ from "@/components/coldlabs/faq";
import Features from "@/components/coldlabs/features";
import Hero from "@/components/coldlabs/hero";
import { Team } from "@/components/coldlabs/team";
import {MarqueeDemo} from "@/components/coldlabs/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <MarqueeDemo />
      <Team />
      <Community />
      <FAQ />
    </>
  );
}
