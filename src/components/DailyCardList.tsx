import DailyCard from "./DailyCard";

const DailyCardList = () => {
  return (
    <ul className="flex overflow-x-scroll items-center gap-4 bg-gradient-to-r from-white to-gray-200">
      <li>
        <DailyCard />
      </li>
      <li>
        <DailyCard />
      </li>
      <li>
        <DailyCard />
      </li>
      <li>
        <DailyCard />
      </li>
      <li>
        <DailyCard />
      </li>
      <li>
        <DailyCard />
      </li>
      <li>
        <DailyCard />
      </li>
      <li>
        <DailyCard />
      </li>
      <li>
        <DailyCard />
      </li>
    </ul>
  );
};

export default DailyCardList;
