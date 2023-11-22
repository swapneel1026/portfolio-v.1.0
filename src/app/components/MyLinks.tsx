import {
  ArrowRightIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
export function MyLinks({}) {
  return (
    <div className="inline-flex gap-4">
      <p className="inline-flex gap-1 items-center   text-[#0aff9d]">
        My Links{" "}
        <span className="">
          <ArrowRightIcon width={"20"} height={"20"} color="currentColor" />
        </span>
      </p>

      <span className="flex space-x-2 ">
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
      </span>
    </div>
  );
}
