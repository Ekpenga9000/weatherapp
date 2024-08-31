import WeatherForcastCard from "./WeatherForcastCard";
import { useAppSelector } from "../hooks";
import { dateExtractor, filterDayOut } from "../utils/utils";
const WeatherForcast = () => {
  const { data } = useAppSelector((state) => state.weather);

  const weatherData = filterDayOut(data?.list);
  return (
    <section>
      <h2 className="font-semibold pl-2">5 day forcast</h2>
      <div className="w-full overflow-x-scroll p-4 flex items-center gap-2">
        {weatherData.map(({day, info}) => (
          <WeatherForcastCard
            key={day}
            high={info?.main.temp_max.toFixed()}
            src={info?.["weather"][0].icon}
            description={info?.["weather"][0].description}
            low={info?.["main"].temp_min.toFixed()}
            day={dateExtractor(day)}
            humidity={info?.main.humidity.toFixed()}
          />
        ))}
      </div>
    </section>
  );
};

export default WeatherForcast;
