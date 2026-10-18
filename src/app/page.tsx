import About from "@/components/About";
import BuildNotes from "@/components/BuildNotes";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Shipped from "@/components/Shipped";

export default function Home() {
  return (
    <div className="mx-auto max-w-[640px] px-5 pt-8 pb-24">
      <a
        href="#content"
        className="sr-only rounded-lg bg-bg px-3 py-2 text-[15px] font-medium focus:not-sr-only focus:absolute focus:top-2 focus:left-2"
      >
        Skip to content
      </a>
      <Header />
      <main id="content">
        <Hero />
        <About />
        <Shipped />
        <Experience />
        <BuildNotes />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
