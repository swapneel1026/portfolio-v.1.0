import ExpCard from "./ExpCard";

const ExperienceSection = () => {
  const exp = [
    {
      compName: "FastHr.ai",
      workDuration: "Sept 2022-Aug 2023",
      compPosition: "Frontend Developer",
      workCity: "Mumbai(Remote)",
      aboutComp:
        "I brought valuable expertise to software development, demonstrated through my pivotal role in the 'Fastengage' project. I led the design and construction of a user-friendly MCQ assessment interface, implemented API calls for data integrity, and optimized state management using Zustand. My contributions also include managing special projects, validating pre-project analysis, and developing algorithms for efficient module assessment. My proactive approach and hands-on experience underline my commitment to driving success in software development.",
    },

    {
      compName: "FastHr.ai",
      workDuration: "Aug 2022 - Sept 2022",
      compPosition: "Frontend Intern",
      workCity: "Mumbai(Remote)",
      aboutComp:
        "Influentially improved the company's ATS by introducing innovative features, elevating functionality, and enhancing user experience. Collaborated seamlessly with cross-functional teams to gather requirements, design, and integrate new features into the existing system. Spearheaded a comprehensive overhaul of the Fastjobs website using Next.js, leading to the evolution of fasthr.ai. Collaborated closely with UI/UX designers to create visually appealing and highly functional web interfaces. Ensured stability and optimal performance through thorough testing and debugging of website features, highlighting my commitment to delivering a superior user experience.",
    },
  ];
  return (
    <div className="text-white">
      <header className="flex items-center justify-center">
        <h1 className="text-3xl lg:text-7xl font-extrabold">
          Experience
          <span className="text-[#0aff9d]">.</span>
        </h1>
        <hr className="w-[40%] mx-4" />
      </header>
      <section className=" gap-[4rem] px-8 mx-2 mt-4">
        <div className="flex flex-col gap-8 space-y-4">
          {exp.map((e, i) => (
            <ExpCard key={i} expData={e} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ExperienceSection;
