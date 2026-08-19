import About from "@/components/About";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Reveal from "@/components/Reveal";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import WhyWebsite from "@/components/WhyWebsite";

export default function Page() {
  return (
    <>
      <Reveal />
      <Header />
      <main id="main">
        <Hero />
        <Stats />
        <About />
        <Services />
        <WhyWebsite />
        <Process />
        <Portfolio />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
