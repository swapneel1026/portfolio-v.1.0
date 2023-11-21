const ExperienceSection = () => {
  return (
    <div className="text-white ">
      <header className="flex items-center justify-center ">
        <h1 className="text-3xl lg:text-7xl font-extrabold">
          Experience
          <span className="text-[#0aff9d]">.</span>
        </h1>
        <hr className="w-[40%] mx-4" />
      </header>
      <section className="grid place-content-center place-items-center md:grid-cols-2 gap-[4rem] px-8 mx-2 mt-4">
        <div className="flex flex-col gap-8 space-y-4"></div>
      </section>
    </div>
  );
};

export default ExperienceSection;
