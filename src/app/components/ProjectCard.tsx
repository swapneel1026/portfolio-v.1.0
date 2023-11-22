import { ExitIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export function ProjectCard({ data }: any) {
  const techStack = [...data?.techStackUsed];
  return (
    <article className="sm:max-w-xs md:max-w-sm  xl:max-w-2xl ">
      <div className="bg-[#232323] px-4 pt-6 rounded-lg pb-0  flex items-center justify-center">
        <Image
          src={data?.imageOfProject as string}
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
        {data?.name}
        <span className="inline-flex gap-2 ">
          <Link
            href={data?.githubLink}
            target={data?.githubLink ? "_blank" : "_self"}
          >
            <GitHubLogoIcon height={25} width={25} />
          </Link>
          <Link
            href={data?.liveProjectLink}
            target={data?.liveProjectLink ? "_blank" : "_self"}
          >
            <ExitIcon height={25} width={25} />
          </Link>
        </span>
      </h1>
      {techStack.map((t, i) => (
        <p
          key={i}
          className="inline-flex capitalize text-[#0aff9d] text-sm"
        >{`${t}${i !== techStack.length - 1 ? "-" : ""}`}</p>
      ))}
      <p className="text-white text-sm font-[200]">
        {data?.desc} <br />
        <span role="button" className="text-[#0aff9b]">
          Learn More
        </span>
      </p>
    </article>
  );
}
