import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Services from "@/components/Services";

import Blog from "@/components/Blog";
import Skills from "@/components/Skills";
import Interests from "@/components/Interests";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <div className="noise" />
      <Navbar />
      <BackToTop />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Journey />
        <Services />

        <Skills />
        <Blog />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
