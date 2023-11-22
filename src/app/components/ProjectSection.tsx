import { ProjectCard } from "./ProjectCard";
const ProjectSection = () => {
  const PorjectData = [
    {
      imageOfProject: "Ticket Tracker",
      name: "",
      techStackUsed: ["next", "tailwind", "javascript", "Typescript"],
      desc: "Think Zapier but for paint. Built with a team of four college friends and scaled to 1 billion requests per day. This was a fun one.",
      githubLink: "",
      liveProjectLink: "",
    },
    {
      imageOfProject: "Portofolio Website",
      name: "",
      techStackUsed: ["next", "tailwind", "javascript"],
      desc: "Think Zapier but for paint. Built with a team of four college friends and scaled to 1 billion requests per day. This was a fun one.",

      githubLink: "",
      liveProjectLink: "",
    },
    {
      imageOfProject: "Netflix clone",
      name: "",
      techStackUsed: ["next", "tailwind", "javascript", "Css", "HTML"],
      desc: "Think Zapier but for paint. Built with a team of four college friends and scaled to 1 billion requests per day. This was a fun one.",
      githubLink: "",
      liveProjectLink: "",
    },
  ];
  return (
    <div className="text-white ">
      <header className="flex items-center justify-center ">
        <h1 className="text-3xl lg:text-7xl font-extrabold">
          Projects
          <span className="text-[#0aff9d]">.</span>
        </h1>
        <hr className="w-[40%] mx-4" />
      </header>
      <section className="gap-[4rem] flex mx-auto mt-4 ">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${
            PorjectData.length > 3 ? "xl:grid-cols-4" : "xl:grid-cols-3"
          } gap-8 p-3 md:p-4 `}
        >
          {PorjectData.map((d) => (
            <ProjectCard data={d} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectSection;
