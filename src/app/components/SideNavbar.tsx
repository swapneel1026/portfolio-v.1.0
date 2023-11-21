import Link from "next/link";

const SideNavbar = () => {
  const links = [
    {
      linkName: "About",
      href: "/about",
    },
    {
      linkName: "Projects",
      href: "",
    },
    {
      linkName: "Exp.",
      href: "",
    },
    {
      linkName: "Contact",
      href: "",
    },
  ];
  return (
    <div className="overflow-x-hidden sticky top-0 left-0 z-20 flex py-2 flex-col items-center  overflow-y-hidded h-screen  w-[70px] text-lg font-[300] text-[#ebecf3] bg-[#000] ">
      <p className="px-3 py-2 flex font-extrabold text-[1.5rem] bg-[#232323]/60 rounded-lg mt-2 ">
        S <span className="text-[#0aff9d]">.</span>
      </p>
      {links.map((link) => (
        <Link
          key={link.href}
          className=" transition-all duration-300 hover:opacity-100 opacity-60 rotate-90 border-t-4 border-[#000] hover:border-t-4 hover:border-[#0aff9d] my-10 py-[15px] min-w-[7rem]  flex justify-center"
          href={link.href ?? "/"}
        >
          {link.linkName}
        </Link>
      ))}
    </div>
  );
};

export default SideNavbar;
