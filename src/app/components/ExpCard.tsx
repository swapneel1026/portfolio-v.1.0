const ExpCard = ({ expData }: any) => {
  return (
    <div className="flex flex-col">
      <div className="md:inline-flex justify-between mt-4">
        <h1 className="text-white font-extrabold text-lg">
          {expData.compName}
        </h1>
        <p className="">{expData.workDuration}</p>
      </div>
      <div className="md:inline-flex justify-between mt-4">
        <h2 className="text-[#0aff9d] text-base font-bold">
          {expData.compPosition}
        </h2>
        <p>{expData.workCity}</p>
      </div>
      <p className="mt-4">{expData.aboutComp}</p>
    </div>
  );
};

export default ExpCard;
