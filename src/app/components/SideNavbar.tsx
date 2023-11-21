import Link from "next/link";

const SideNavbar = () => {
  return (
    <div className="sticky top-0 left-0  bg-black z-20 flex flex-col items-center overflow-hidden h-screen text-white w-[50px]  gap-5 text-lg ">
      <span>Logo</span>
      <>
        <Link className="rotate-90 py-6 " href={""}>
          About
        </Link>
        <Link className="rotate-90 py-6" href={""}>
          Projects
        </Link>
        <Link className="rotate-90 py-6" href={""}>
          Exp.
        </Link>
        <Link className="rotate-90 py-6" href={""}>
          Contact
        </Link>
      </>
    </div>
  );
};

export default SideNavbar;
