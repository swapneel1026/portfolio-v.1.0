import ExpCard from "./ExpCard";

const ExperienceSection = () => {
  const exp = [
    {
      compName: "FastHr.ai",
      workDuration: "Sept 2022-Aug 2023",
      compPosition: "Frontend Developer",
      workCity: "Mumbai(Remote)",
      aboutComp:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, tenetur placeat, quidem culpa voluptas perspiciatis architecto sint saepe quo laudantium atque ratione odit harum iste molestias velit cum fugiat veritatis eos dolorum? Nulla, veritatis doloribus expedita quaerat iure, quas optio sunt, similique est maxime reprehenderit esse fugit unde voluptas beatae!",
    },

    {
      compName: "FastHr.ai",
      workDuration: "Aug 2022 - Sept 2022",
      compPosition: "Frontend Intern",
      workCity: "Mumbai(Remote)",
      aboutComp:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, tenetur placeat, quidem culpa voluptas perspiciatis architecto sint saepe quo laudantium atque ratione odit harum iste molestias velit cum fugiat veritatis eos dolorum? Nulla, veritatis doloribus expedita quaerat iure, quas optio sunt, similique est maxime reprehenderit esse fugit unde voluptas beatae!",
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
