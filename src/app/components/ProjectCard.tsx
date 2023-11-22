import { ExitIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export function ProjectCard({}) {
  const techStack = ["next", "tailwind", "javascript", "Typescript"];
  return (
    <article className="sm:max-w-xs md:max-w-sm  xl:max-w-2xl ">
      <div className="bg-[#232323] px-4 pt-6 rounded-lg pb-0  flex items-center justify-center">
        <Image
          src={"/screeenshot.png"}
          alt=""
          width={500}
          height={500}
          style={{
            objectFit: "inherit",
          }}
          className="hover:skew-y-3 transition-transform duration-1000 hover:scale-105 rounded-lg"
        />
      </div>
      <h1 className="text-white font-bold text-lg flex items-center justify-between mt-4">
        Ticket Tracker
        <span className="inline-flex gap-2 ">
          <GitHubLogoIcon height={25} width={25} />
          <ExitIcon height={25} width={25} />
        </span>
      </h1>
      {techStack.map((t, i) => (
        <p className="inline-flex capitalize text-[#0aff9d] text-sm">{`${t}${
          i !== techStack.length - 1 ? "-" : ""
        }`}</p>
      ))}
      <p className="text-white text-sm font-[200]">
        Think Zapier but for paint. Built with a team of four college friends
        and scaled to 1 billion requests per day. This was a fun one.{" "}
        <span>Learn More</span>
      </p>
    </article>
  );
}
