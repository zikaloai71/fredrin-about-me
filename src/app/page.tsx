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
      <Header />
      <main>
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
