import { TfiLocationPin } from "react-icons/tfi";
import CurrentWeather from "./CurrentWeather";
import DashboardMap from "./DashboardMap";
const DashboardCurrentWeather = () => {
  return (
    <section>
      <ul className="pl-2 font-semibold md:text-2xl flex items-center gap-1 mb-4">
        <li>
          <TfiLocationPin />
        </li>
        <li>
          <h2> North York, Ontario, CA</h2>
        </li>
      </ul>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CurrentWeather />
        {/* map area */}
        <DashboardMap />
      </div>
    </section>
  );
};

export default DashboardCurrentWeather;
