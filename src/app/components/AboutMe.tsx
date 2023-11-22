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
        <p className="flex flex-wrap">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem tempore
          aspernatur, voluptates exercitationem quas, ipsa eveniet quo eligendi
          modi fuga esse, voluptatibus deserunt hic quos distinctio possimus
          <br />
          <br />
          ullam quibusdam illo earum magni reprehenderit deleniti! Omnis eius
          porro consectetur rem, obcaecati laboriosam modi neque corporis
          placeat unde amet assumenda impedit corrupti reprehenderit id.
          <br />
          <br />
          Laboriosam in quidem porro eaque sed suscipit officia excepturi
          voluptate corporis veritatis magni explicabo minus culpa, possimus,
          natus labore assumenda expedita accusantium commodi quod! Eum debitis
          recusandae sit, tempora, autem adipisci excepturi commodi aspernatur
          enim nobis alias sint non repudiandae reprehenderit quod veniam est
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
