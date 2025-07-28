import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <About />
      <Skills />
    </div>
  );
}
