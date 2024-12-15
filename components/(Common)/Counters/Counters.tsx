import Counter from "@/utils/Counter/Counter";
import { FaBook, FaPlus, FaRegThumbsUp, FaUser } from "react-icons/fa6";

function Counters({ t, i18n }: any) {
  const isFarsi = i18n.language === "fa";
  const counterItems = [
    {
      id: 1,
      name: t("CounterSection.client"),
      icon: <FaUser />,
      targetNumber: 120,
      duration: 3000,
    },
    {
      id: 2,
      name: t("CounterSection.case"),
      icon: <FaBook />,
      targetNumber: 450,
      duration: 3000,
    },
    {
      id: 3,
      name: t("CounterSection.successRate"),
      icon: <FaRegThumbsUp />,
      targetNumber: 98,
      duration: 3000,
    },
  ];

  return (
    <div
      className={`${
        isFarsi ? "font-YekanBold" : "font-sans"
      } z[20] lg:w-2/3 gap-10 mx-auto  flex items-center justify-evenly h-60 flex-wrap md:flex-row  `}
    >
      {counterItems.map((ci) => (
        <div
          key={ci.id}
          className=" backdrop-blur-lg w-36 min-h-36 rounded-xl p-2 lg:w-48 flex items-center justify-center flex-col lg:h-48 bg-white text-center"
        >
          <p className="text-2xl  text-primary-400 font-semibold">{ci.name}</p>
          <i className="text-[100px] opacity-10 absolute">{ci.icon}</i>
          <span className="flex items-center justify-center gap-1 font-semibold   text-4xl">
            {ci.id === 3 && "%"}
            <Counter targetNumber={ci.targetNumber} duration={ci.duration} />
            <p>{<FaPlus />}</p>
          </span>
        </div>
      ))}
    </div>
  );
}

export default Counters;
