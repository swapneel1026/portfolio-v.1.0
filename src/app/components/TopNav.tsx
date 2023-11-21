import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

const TopNav = () => {
  return (
    <header className="bg-[hsla(0,0%,7%,.25)] w-full h-[4rem] lg:h-[5rem] sticky z-20 top-0 backdrop-blur-md flex items-center justify-between p-4">
      <section className="flex space-x-4 ">
        <Link
          href={"https://github.com/swapneel1026"}
          className="transition-all duration-200 text-[#ebecf3] hover:text-[#0aff9d] opacity-50 hover:opacity-100"
        >
          <GitHubLogoIcon color="currentColor" height={"40"} width={"25"} />
        </Link>
        <Link
          href={"/"}
          target="_blank"
          className="transition-all duration-200 text-[#ebecf3] hover:text-[#0aff9d] opacity-50 hover:opacity-100"
        >
          <InstagramLogoIcon color="currentColor" height={"40"} width={"25"} />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/swapneel-shubham"}
          target="_blank"
          className="transition-all duration-200 text-[#ebecf3] hover:text-[#0aff9d] opacity-50 hover:opacity-100"
        >
          <LinkedInLogoIcon color="currentColor" height={"40"} width={"25"} />
        </Link>
      </section>
      <section>
        <Link
          className="border text-[0.8rem] sm:text-[1.2rem] border-[#0aff9d] p-1 sm:p-2 rounded-md text-[#0aff9d] hover:bg-[#0aff9d] animate-pulse  hover:text-[#000] hover:transition-opacity duration-300  shadow-inner shadow-[#0aff9d]"
          href={
            "https://drive.google.com/drive/folders/1FsguUp4mgSDLDJR7N-hkIaBEryekqcsA/"
          }
          target="_blank"
        >
          My Resume
        </Link>
      </section>
    </header>
  );
};

export default TopNav;
