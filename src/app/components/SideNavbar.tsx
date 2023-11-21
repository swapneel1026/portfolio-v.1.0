import Link from "next/link";

const SideNavbar = () => {
  const links = ["About", "Projects", "Exp.", "Contact"];
  return (
    <div className="overflow-x-hidden sticky top-0 left-0 z-20 flex flex-col items-center  overflow-y-hidded h-screen  w-[3.375rem] text-lg font-[300] text-[#ebecf3] bg-[#232323] ">
      <p className="p-2 flex font-extrabold text-[1.5rem]">
        S <span className="text-[#0aff9d]">.</span>
      </p>
      {links.map((link) => (
        <Link
          className="transition-all duration-300 hover:opacity-100 opacity-60 rotate-90 border-t-4 border-[#232323] hover:border-t-4 hover:border-[#0aff9d] my-10 py-[0.5625rem] min-w-[7rem]  flex justify-center"
          href={"#demo"}
        >
          {link}
        </Link>
      ))}
    </div>
  );
};

export default SideNavbar;
