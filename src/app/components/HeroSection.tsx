import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="p-2  md:px-8 xl:max-w-6xl  flex flex-col flex-wrap justify-stretch h-screen">
      <h1 className="text-white text-[2.5rem] md:text-[4rem] lg:text-[6rem] font-extrabold">
        Hey,I'm Swapneel<span className="text-[#0aff9d]">.</span>
      </h1>
      <h2 className="text-white font-normal text-[2rem]">
        I'm a{" "}
        <span className="text-[#0aff9d] font-bold">Frontend Developer</span>
      </h2>
      <p className="text-white font-extralight mt-4 md:text-[1.3rem] ">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste animi, ut
        expedita perspiciatis temporibus fugiat iusto incidunt eveniet sit,
        commodi ab ex illum? Eos numquam ab inventore dolorum fugiat, minus,
        repudiandae dolore qui voluptas vitae cupiditate modi! Sequi
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
