import AboutMe from "./components/AboutMe";
import ContactSection from "./components/ContactSection";
import ExperienceSection from "./components/ExperienceSection";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";
import TopNav from "./components/TopNav";

export default function Home() {
  return (
    <>
      <main className="">
        <TopNav />
        <div className="flex flex-col items-stretch">
          <section className="py-[4rem]  md:py-[5rem]  " id="main">
            <HeroSection />
          </section>
          <section id="about" className="pt-[4rem] md:pt-[5rem]">
            <AboutMe />
          </section>
          <section id="projects" className="pt-[4rem] md:pt-[5rem]">
            <ProjectSection />
          </section>
          <section id="exp" className="pt-[4rem] md:pt-[5rem]">
            <ExperienceSection />
          </section>
          <section id="contact" className="pt-[4rem] md:pt-[5rem]">
            <ContactSection />
          </section>
        </div>
      </main>
    </>
  );
}
