import DailyCard from "./DailyCard";
import { useAppSelector } from "../hooks";
import { filterTime } from "../utils/utils";

const DailyCardList = () => {
  const { data, selectedDay } = useAppSelector((state) => state.weather);
  const weatherData = filterTime(selectedDay, data?.list) || [];
  

  return (
    <div className="flex overflow-x-scroll items-center gap-2 bg-gray-200">
      {weatherData.map((item) => (
        <DailyCard 
        key={item.dt}
        time={item.dt*1000}
        temp={item.main.temp}
        src={item.weather[0].icon}
        description={item.weather[0].description}
        humidity={item.main.humidity}
        windSpeed={item.wind.speed}
        deg={`${item.wind.deg}deg`}
        />
      ))}
    </div>
  );
};

export default DailyCardList;
