import HeroSection from "../Componants/HeroSection";
import { ParallaxProvider } from "react-scroll-parallax";
import Skills from "../Componants/Skills";
import AboutMe from "../Componants/AboutMe";

export default function Home() {
  return (
    <>
      <ParallaxProvider>
        <HeroSection />
        <AboutMe />
        <section className="min-h-screen bg-black text-white pt-20 sm:pt-28 md:pt-36 px-4 sm:px-8">
          <div className="container mx-auto">
            <Skills />
          </div>
        </section>
      </ParallaxProvider>
    </>
  );
}
