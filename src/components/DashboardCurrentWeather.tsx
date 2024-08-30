import { TfiLocationPin } from "react-icons/tfi";
import { IoIosInformationCircleOutline } from "react-icons/io";
const DashboardCurrentWeather = () => {
  return (
    <section className="custom-padding">
      <ul className="pl-2 font-semibold md:text-2xl flex items-center gap-1 mb-4">
        <li>
          <TfiLocationPin />
        </li>
        <li>
          <h2> North York, Ontario, CA</h2>
        </li>
      </ul>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gradient-to-r from-white to-gray-200 p-4 rounded-md">
          <h4 className="text-sm font-semibold">Current weather</h4>
          <p className="text-sm text-gray-600">3:16 PM</p>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
            <ul className="flex items-center gap-4">
              <li className="text-sm flex">
                <span className="text-7xl">22</span>
                <span className="text-4xl">°C</span>
              </li>
              <li className="ml-8">
                <img
                  src={`http://openweathermap.org/img/wn/${"04d"}.png`}
                  alt={"Weather"}
                  className="h-[3rem] w-[3rem] object-cover"
                />
                <h4 className="text-lg font-semibold">Cloud</h4>
                <p className="text-gray-500">Feels like 31°</p>
              </li>
            </ul>
            <ul className="flex items-center justify-between md:grid grid-cols-2 gap-8">
              <li>
                <p className="text-xs text-gray-600 flex items-center gap-1 cursor-pointer">
                  Wind <IoIosInformationCircleOutline />
                </p>
                <p>11 km/h </p>
              </li>
              <li>
                <p className="text-xs text-gray-600 flex items-center gap-1 cursor-pointer">
                  Humidity <IoIosInformationCircleOutline />
                </p>
                <p>72%</p>
              </li>
              <li>
                <p className="text-xs text-gray-600 flex items-center gap-1 cursor-pointer">
                  Visibility <IoIosInformationCircleOutline />
                </p>
                <p>16 km </p>
              </li>
              <li>
                <p className="text-xs text-gray-600 flex items-center gap-1 cursor-pointer">
                  Pressure <IoIosInformationCircleOutline />
                </p>
                <p>11018 mb </p>
              </li>
            </ul>
          </div>
        </div>

        {/* map area */}
        <div className="bg-gray-200 p-4 rounded-md h-[350px]">
          MAP
        </div>
      </div>
    </section>
  );
};

export default DashboardCurrentWeather;
