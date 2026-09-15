import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import FeaturedWork from "@/components/sections/FeaturedWork";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <FeaturedWork />
      </main>
    </>
  );
}