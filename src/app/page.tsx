"use client";
import { useEffect } from "react";
import AboutMe from "./components/AboutMe";
import ContactSection from "./components/ContactSection";
import ExperienceSection from "./components/ExperienceSection";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";
import TopNav from "./components/TopNav";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    const hiddenItems = document.querySelectorAll(".hide");
    hiddenItems.forEach((item) => observer.observe(item));
  }, []);

  return (
    <>
      <main className="">
        <style jsx>
          {`
            .hide {
              transition: all 3s;
            }
            @media (prefers-reduce-motion) {
              .hide {
                transition: none;
              }
            }
            .show {
              opacity: 1;
            }
          `}
        </style>
        <TopNav />
        <div className="flex flex-col items-stretch">
          <section
            className="py-[4rem]  md:py-[5rem] hide  opacity-0 "
            id="main"
          >
            <HeroSection />
          </section>
          <section
            id="about"
            className="pt-[4rem] md:pt-[5rem] hide  opacity-0  "
          >
            <AboutMe />
          </section>
          <section
            id="projects"
            className="pt-[4rem] md:pt-[5rem] hide  opacity-0 "
          >
            <ProjectSection />
          </section>
          <section id="exp" className="pt-[4rem] md:pt-[5rem] hide opacity-0 ">
            <ExperienceSection />
          </section>
          <section
            id="contact"
            className="pt-[4rem] md:pt-[5rem] hide opacity-0  "
          >
            <ContactSection />
          </section>
        </div>
      </main>
    </>
  );
}
