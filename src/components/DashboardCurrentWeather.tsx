import { TfiLocationPin } from "react-icons/tfi";
import CurrentWeather from "./CurrentWeather";
import DashboardMap from "./DashboardMap";
import { useAppSelector } from "../hooks";

const DashboardCurrentWeather = () => {
  const { data } = useAppSelector((state) => state.weather);

  return (
    <section>
      <ul className=" pl-2 font-semibold md:text-2xl flex items-center gap-1 mb-4 text-white">
        <li>
          <h2> {data?.city.name}, {data?.city.country}</h2>
        </li>
        <li>
          <TfiLocationPin />
        </li>
      </ul>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <CurrentWeather />
        {/* map area */}
        <DashboardMap />
      </div>
    </section>
  );
};

export default DashboardCurrentWeather;
