import { ProjectCard } from "./ProjectCard";
const ProjectSection = () => {
  const PorjectData = [
    {
      imageOfProject: "/docterappssbig.png",
      name: "Book Doctor",
      techStackUsed: [
        "react.js",
        "tailwind",
        "javascript",
        "mongodb",
        "node.js",
        "express-js",
      ],
      desc: "Our project is a user-doctor booking application built with React.js, Tailwind CSS, JavaScript, MongoDB, Node.js, Express.js, and Socket.IO. Users and doctors can sign up, creating personalized profiles for seamless interaction. The platform enables real-time appointment scheduling and efficient communication between patients and healthcare providers, emphasizing intuitive design and robust backend architecture.",

      githubLink: "https://github.com/swapneel1026/docter-app-client",
      liveProjectLink: "https://bookdoctor.vercel.app/",
    },

    {
      imageOfProject: "/ticketsc.png",
      name: "Ticket Tracker",
      techStackUsed: [
        "next.js",
        "tailwind",
        "javascript",
        "typescript",
        "prismaClient",
        "planetscaleDB",
      ],
      desc: "Developed a dynamic Ticket Tracker app with Next.js, Prisma, and Planetscale DB, showcasing strong proficiency. Designed a user-friendly UI for seamless navigation, implemented CRUD operations, and created a Dashboard Interface with bar graphs for quick status checks. Deployed securely on Vercel, demonstrating expertise in Next.js, Prisma, and Planetscale for efficient ticket tracking.",

      githubLink: "https://github.com/swapneel1026/tickettracker",
      liveProjectLink: "https://tickettracker.vercel.app/",
    },
    {
      imageOfProject: "/portfollio-sc.png",
      name: "PortFolio V.1.0",
      techStackUsed: ["next.js", "tailwind", "javascript", "Typescript"],
      desc: "Crafted a sleek portfolio app with Next.js, Tailwind, and a blend of JavaScript and TypeScript for a dynamic touch. The design is not only visually appealing but also responsive, ensuring a seamless user experience across devices. This project showcases my proficiency in modern web development technologies, emphasizing both aesthetic design and functional responsiveness.",
      githubLink: "https://github.com/swapneel1026/portfolio-v.1.0",
      liveProjectLink: "https://frontendswapneel.vercel.app/",
    },
    {
      imageOfProject: "/form-builder-ss.png",
      name: "DND Form Builder",
      techStackUsed: [
        "react.js",
        "tailwind",
        "javascript",
        "daisy-ui",
        "react-beautiful-dnd",
      ],
      desc: "Our project is a form builder with drag and drop function to re-arrange form elements ,with React.js, Tailwind CSS, JavaScript, Daisy-ui and react-beautiful-dnd. Using the power of reazct beautiful dnd we can drag and drop elements and rearrange the form .",

      githubLink: "https://github.com/swapneel1026/form-builder-proto",
      liveProjectLink: "https://form-builder-proto-beta.vercel.app/",
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
      <section className="gap-[4rem] flex  mt-4 ">
        <div
          className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 ${
            PorjectData.length >= 3
              ? "xl:grid-cols-3"
              : PorjectData.length == 2
              ? "xl:grid-cols-2 lg:grid-cols-2"
              : ""
          } gap-8 p-3 md:p-4 `}
        >
          {PorjectData.map((d) => (
            <ProjectCard key={d.name} data={d} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectSection;
