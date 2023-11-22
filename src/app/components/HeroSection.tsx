import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="p-2  md:px-8 xl:max-w-6xl  flex flex-col flex-wrap justify-stretch">
      <h1 className="text-white text-[2.5rem] md:text-[4rem] lg:text-[6rem] font-extrabold">
        Hey,I&apos;m Swapneel<span className="text-[#0aff9d]">.</span>
      </h1>
      <h2 className="text-white font-normal text-[2rem]">
        I&apos;m a{" "}
        <span className="text-[#0aff9d] font-bold">Frontend Developer</span>
      </h2>
      <p className="text-white font-extralight mt-4 md:text-[1.3rem] ">
        Cultivating a realm of frontend excellence while delving into the
        intricacies of backend brilliance, my professional journey is a fusion
        of design finesse and technical prowess. With a keen eye for crafting
        visually stunning and user-centric frontend experiences, I bring
        creativity and innovation to the digital forefront. Simultaneously, my
        exploration of backend intricacies involves navigating the complexities
        of data architecture, ensuring robust functionalities, and contributing
        to the seamless synergy of both ends. This dual expertise encapsulates
        my commitment to delivering comprehensive and top-tier solutions in the
        ever-evolving landscape of web development.
      </p>
      <Link href={"#contact"}>
        <button
          className="bg-[#0aff9d] text-black py-2 px-3 md:py-3 md:px-5 text-lg rounded-md mt-5 hover:brightness-90 hover:transition-all duration-200"
          type="button"
        >
          Contact me
        </button>
      </Link>
    </div>
  );
};

export default HeroSection;
