import { useState } from "react";
import DailyCardList from "./DailyCardList";
import ChartComp from "./ChartComp";

const WeatherDetails = () => {
  const [isHourly, setIsHourly] = useState(true);
  return (
    <section className="bg-white rounded-[1.5rem]">
      <ul className="pl-8 border-b flex items-center gap-8">
        <li
          className={`cursor-pointer border-b-2 py-4 ${
            isHourly ? "font-semibold  border-b-black" : "border-b-transparent"
          }`}
          onClick={() => setIsHourly((prev) => !prev)}>
          Hourly
        </li>
        <li
          className={`md:block cursor-pointer border-b-2 py-4 ${
            !isHourly ? "font-semibold  border-b-black" : "border-b-transparent"
          }`}
          onClick={() => setIsHourly((prev) => !prev)}>
          Charts
        </li>
      </ul>
      {isHourly ? <DailyCardList /> : <ChartComp/>}
    </section>
  );
};

export default WeatherDetails;
