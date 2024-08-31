import React, { useState } from "react";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { useAppDispatch, useAppSelector } from "../hooks";
import { setCity, toggleUnit } from "../reduxState/weatherSlice/weatherSlice";

const DashboardHead = () => {
  const dispatch = useAppDispatch();
  const { unit } = useAppSelector((state) => state.weather);
  const [input, setInput] = useState("");
 

  const handleSearch = () => {
    if (input.trim() === "") {
      return;
    }
    dispatch(setCity(input));
    setInput("");
  };

  const handleUnitChange = () => {
    dispatch(toggleUnit());
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <section>
      <ul className="grid grid-cols-1 md:grid-cols-2 items-center justify-between">
        <li className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="card-bg smooth-transition hover:bg-white/35  text-white">
              <input
                type="text"
                placeholder="Search for location"
                className="bg-transparent outline-none w-[80%] md:w-[20rem]"
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
              />
              <button>
                <CiSearch />
              </button>
            </div>
          </div>
          <button className="flex items-center gap-2 bg-white/20 hover:bg-white/25 text-white py-4 px-4 rounded-[1.5rem]">
            <FaLocationCrosshairs /> Current location
          </button>
        </li>
        <li>
          <div className="flex items-center">
            <button
              disabled={unit === "metric"}
              onClick={handleUnitChange}
              className={`rounded-l-[1.5rem] ${
                unit === "metric" ? "switched-on" : "switched-off"
              }`}>
              °C
            </button>
            <button
              disabled={unit !== "metric"}
              onClick={handleUnitChange}
              className={`rounded-r-[1.5rem] ${
                unit !== "metric" ? "switched-on" : "switched-off"
              }`}>
              °F
            </button>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default DashboardHead;
