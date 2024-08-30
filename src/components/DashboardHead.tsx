import { FaLocationCrosshairs } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
const DashboardHead = () => {
  return (
    <section className="custom-padding">
      <ul className="flex items-center justify-between ">
        <li className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-4">
            <button className="text-2xl">
              <FaLocationCrosshairs />
            </button>
            <div className="bg-white/75 px-4 py-2 rounded-md hover:bg-white/85 focus:bg-white">
              <input type="search" placeholder="Search for location" className="bg-transparent outline-none w-[10rem] md:w-[20rem]"/>
              <button>
                <CiSearch />
              </button>
            </div>
          </div>
          <p className="hidden md:inline-block bg-white/95 px-4 py-2 rounded-md">North York 260</p>
        </li>
        <li>
          <select name="measurement" id="measurement" className="p-2 rounded-md">
            <option value="celcius">°C</option>
            <option value="fahrenheit">°F</option>
          </select>
        </li>
      </ul>
    </section>
  );
};

export default DashboardHead;
