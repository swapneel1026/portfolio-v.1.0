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
        <div className="grid sm:grid-rows-4 text-white">
          <section className="pt-[4rem] md:pt-[5rem]" id="contact">
            <HeroSection />
          </section>
          <section
            id="about"
            className="md:mt-[-5rem] lg:mt-[2rem] xl:mt-[-2rem] pt-[4rem] md:pt-[5rem]"
          >
            <AboutMe />
          </section>
          <section id="projects">
            <ProjectSection />
          </section>
          <section id="exp">
            <ExperienceSection />
          </section>
          <section id="contact">
            <ContactSection />
          </section>
        </div>
      </main>
    </>
  );
}
