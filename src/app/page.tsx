import AboutMe from "./components/AboutMe";
import ContactSection from "./components/ContactSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectSection from "./components/ProjectSection";
import TopNav from "./components/TopNav";

export default function Home() {
  return (
    <>
      <main className="">
        <TopNav />
        <div className="grid grid-rows-4 text-white">
          {/* <section>
            <HeroSection />
          </section> */}
          <section>
            <AboutMe />
          </section>
          <section>
            <ProjectSection />
          </section>
          <section>
            <ExperienceSection />
          </section>
          <section>
            <ContactSection />
          </section>
        </div>
      </main>
    </>
  );
}
