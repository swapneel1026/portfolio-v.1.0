import { ProjectCard } from "./ProjectCard";
const ProjectSection = () => {
  return (
    <div className="text-white ">
      <header className="flex items-center justify-center ">
        <h1 className="text-3xl lg:text-7xl font-extrabold">
          Projects
          <span className="text-[#0aff9d]">.</span>
        </h1>
        <hr className="w-[40%] mx-4" />
      </header>
      <section className="gap-[4rem] mx-auto mt-4">
        <div className="grid auto-cols-max grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-3 md:p-4 ">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
            <ProjectCard />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectSection;
