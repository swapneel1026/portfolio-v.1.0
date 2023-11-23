"use client";
import Link from "next/link";
import { useLinkSelectedStore } from "../store/store";

const SideNavbar = () => {
  const selected = useLinkSelectedStore((state) => state.selected);
  const setselected = useLinkSelectedStore((state) => state.setselected);
  const links = [
    {
      linkName: "About",
      href: "#about",
    },
    {
      linkName: "Projects",
      href: "#projects",
    },
    {
      linkName: "Exp.",
      href: "#exp",
    },
    {
      linkName: "Contact",
      href: "#contact",
    },
  ];

  return (
    <div className="overflow-x-hidden scrollbar-hide sticky top-0 left-0 z-20 flex py-2 flex-col items-center  overflow-y-hiddn h-screen  min-w-[55px] max-w-[70px] text-lg font-[300] text-[#ebecf3] bg-[#000] ">
      <Link
        href={"#main"}
        onClick={() => {
          setselected("#main");
        }}
        className="px-3 py-2 flex font-extrabold text-[1.5rem] bg-[#232323]/60 rounded-lg mt-2 "
      >
        S <span className="text-[#0aff9d]">.</span>
      </Link>
      {links.map((link) => {
        return (
          <Link key={link.linkName} href={link.href ?? "/"}>
            <button
              onClick={() => setselected(link.href)}
              className={`${
                selected === link.href
                  ? "border-t-4 border-[#0aff9d] opacity-100"
                  : "border-t-4 border-[#000] opacity-60"
              } transition-all duration-300 hover:opacity-100  rotate-90  hover:border-t-4 hover:border-[#0aff9d] my-[1.5625rem] py-[0.9375rem] min-w-[7rem]  flex justify-center`}
            >
              {link.linkName}
            </button>
          </Link>
        );
      })}
    </div>
  );
};

export default SideNavbar;
