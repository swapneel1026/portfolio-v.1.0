type SkillProps = {
  title?: string;
  skills?: string[];
  icon?: any;
};
const SkillsCard = ({ title, skills, icon }: SkillProps) => {
  return (
    <div className="p-2 rounded-xl shadow-lg shadow-slate-400 ">
      <h1 className="flex gap-3 font-bold text-lg  items-center">
        <span>{icon}</span>
        {title}
      </h1>
      <div className="flex flex-wrap gap-x-1 gap-y-2 max-w-xs justify-start mt-4">
        {skills?.map((t) => (
          <div
            key={t}
            className="bg-[#232323] text-white py-1 px-2  mx-auto rounded-full"
          >
            {t}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;
