import { Metadata } from "next";
import Pricing from "@/components/Pricing";
import First from "@/components/First";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "Next.js Starter Template for SaaS Startups - Solid SaaS Boilerplate",
  description: "This is Home for Solid Pro",
  // other metadata
};

export default function Home() {
  return (
    <main>
      {/* <CTA /> */}
      {/* <Hero /> */}
      <First />
      <Pricing />
      {/* <Brands /> */}
      {/* <Feature /> */}
      {/* <About /> */}
      {/* <FeaturesTab /> */}
      {/* <FunFact /> */}
      {/* <Integration /> */}
      {/* <FAQ /> */}
      <Testimonial />
      {/* <Contact />
      <Blog /> */}
    </main>
  );
}
