import { useAppSelector } from "../hooks";
import { capitalize, getTime } from "../utils/utils";

const CurrentWeather = () => {
  const { data, unit } = useAppSelector((state) => state.weather);
  const date = new Date();

  return (
    <div className="card-bg">
      <h4 className="text-sm font-semibold text-white">Current weather</h4>
      <p className="text-sm text-gray-200">{getTime(date.getTime())}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
        <ul className="flex items-center gap-4">
          <li className="text-sm flex">
            <span className="text-7xl text-white">
              {data?.list[0].main.temp.toFixed()}
            </span>
            <span className="text-4xl text-white">
              {unit === "metric" ? "°C" : "°F"}
            </span>
          </li>
          <li className="ml-8">
            <img
              src={`http://openweathermap.org/img/wn/${data?.list[0].weather[0].icon}.png`}
              alt={"Weather"}
              className="h-[3rem] w-[3rem] object-cover"
            />
            <h4 className="text-lg font-semibold text-white">
              {capitalize(data?.list[0].weather[0].description)}
            </h4>
            <p className="text-gray-300">
              Feels like {data?.list[0].main.feels_like.toFixed()}°
            </p>
          </li>
        </ul>
        <ul className="flex items-center justify-between md:grid grid-cols-2 gap-8">
          <li>
            <p className="text-xs text-gray-300 flex items-center gap-1 cursor-pointer">
              Wind
            </p>
            <p className="text-white">
              {data?.list[0].wind.speed.toFixed()} km/h{" "}
            </p>
          </li>
          <li>
            <p className="text-xs text-gray-300 flex items-center gap-1 cursor-pointer">
              Humidity
            </p>
            <p className="text-white">
              {data?.list[0].main.humidity.toFixed()}%
            </p>
          </li>
          <li>
            <p className="text-xs text-gray-300 flex items-center gap-1 cursor-pointer">
              Visibility
            </p>
            <p className="text-white">
              {(data?.list[0].visibility / 1000).toFixed()} km{" "}
            </p>
          </li>
          <li>
            <p className="text-xs text-gray-300 flex items-center gap-1 cursor-pointer">
              Pressure
            </p>
            <p className="text-white">
              {data?.list[0].main.pressure.toFixed()} mb{" "}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CurrentWeather;
