import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MotionRoot } from "@/components/motion/MotionRoot";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { Treatments } from "@/components/sections/Treatments";
import { Needs } from "@/components/sections/Needs";
import { Results } from "@/components/sections/Results";
import { CtaBand } from "@/components/sections/CtaBand";
import { About } from "@/components/sections/About";
import { Differentials } from "@/components/sections/Differentials";
import { Technology } from "@/components/sections/Technology";
import { Space } from "@/components/sections/Space";
import { Numbers } from "@/components/sections/Numbers";
import { Testimonials } from "@/components/sections/Testimonials";
import { Process } from "@/components/sections/Process";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Header />
      <MotionRoot>
        <main id="conteudo">
          <Hero />
          <Manifesto />
          <Treatments />
          <Needs />
          <Results />
          <CtaBand />
          <About />
          <Differentials />
          <Technology />
          <Space />
          <Numbers />
          <Testimonials />
          <Process />
          <Faq />
          <Contact />
          <FinalCta />
        </main>
      </MotionRoot>
      <Footer onHome />
    </>
  );
}
