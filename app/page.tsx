import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import FeaturedWork from "@/components/sections/FeaturedWork";
import Experience from "@/components/sections/Experience";
import Capabilities from "@/components/sections/Capabilities";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";


export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <FeaturedWork />
        <Experience />
        <Capabilities />
        <About />
        <Contact />
      </main>
    </>
  );
}