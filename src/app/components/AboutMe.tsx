import { CodeIcon, FaceIcon } from "@radix-ui/react-icons";
import { MyLinks } from "./MyLinks";
import SkillsCard from "./SkillsCard";

const AboutMe = () => {
  const languagesAndFrameworks = [
    "Next.JS",
    "React.JS",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "Node.JS",
    "Express.JS",
    "MongoDB",
  ];
  const toolAndLibraries = [
    "React-Query",
    "Axios",
    "Prisma-Client",
    "Zustand",
    "Git",
    "VS-code",
    "Shadcn-ui",
    "Radix-ui",
    "react-skeleton",
    "Recharts",
    "React-hook-form",
    "React-table",
    "CVA",
  ];
  return (
    <div className="text-white ">
      <header className="flex items-center justify-center ">
        <h1 className="text-3xl lg:text-7xl font-extrabold">
          About
          <span className="text-[#0aff9d]">.</span>
        </h1>
        <hr className="w-[40%] mx-4" />
      </header>
      <section className="grid place-content-center place-items-center md:grid-cols-2 gap-[4rem] px-8 mx-2 mt-4">
        <p className="flex flex-wrap text-[0.9375rem]">
          Hello there! I&apos;m a dedicated developer with a knack for weaving
          seamless web applications, blending functionality with a delightful
          user experience. My toolkit is brimming with cutting-edge
          technologies, and I thrive on the intricacies of crafting robust
          solutions. I specialize in Next.JS and React.JS, leveraging
          server-side rendering for performance and creating interactive
          interfaces. JavaScript and TypeScript are my languages of choice,
          adding flair to my projects. Tailwind CSS, HTML, and CSS form the
          trifecta for creating stunning, responsive designs, while Node.JS and
          Express.JS power my scalable backends, synchronized with MongoDB.
          <br />
          <br />
          In my arsenal of tools and libraries, React-Query and Axios streamline
          data fetching, while Prisma-Client ensures type-safe database
          interactions. Zustand provides a lightweight state management
          solution, and Git coupled with VS Code keeps my workflow seamless. I
          bring UI to life with Shadcn-ui and Radix-ui, and employ
          react-skeleton for smooth loading animations. Recharts paints vivid
          data stories, and React-hook-form and React-table enhance form and
          table functionalities. Completing my toolkit is CVA (Control Value
          Accessor), enabling the creation of custom form controls with finesse.
          I’m passionate about turning ideas into elegantly functioning,
          visually captivating, and user-friendly web applications. Let&apos;s
          collaborate to bring your vision to life!
          <span className="mt-4">
            <MyLinks />
          </span>
        </p>
        <div className="flex flex-col gap-8 space-y-4">
          <SkillsCard
            title="Languages & Frameworks"
            icon={<CodeIcon color="#0aff9d" height={30} width={30} />}
            skills={languagesAndFrameworks}
          />
          <SkillsCard
            title="Tools & Libraries"
            icon={<FaceIcon color="#0aff9d" height={30} width={30} />}
            skills={toolAndLibraries}
          />
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
