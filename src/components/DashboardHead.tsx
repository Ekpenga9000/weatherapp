import React, { useState } from "react";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { useAppDispatch, useAppSelector } from "../hooks";
import {
  setCity,
  // fetchWeather,
  toggleUnit,
} from "../reduxState/weatherSlice/weatherSlice";

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
      <ul className="flex items-center justify-between ">
        <li className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-4">
            <button className="text-2xl">
              <FaLocationCrosshairs />
            </button>
            <div className="bg-white/75 px-4 py-2 rounded-md hover:bg-white/85 focus:bg-white">
              <input
                type="text"
                placeholder="Search for location"
                className="bg-transparent outline-none w-[10rem] md:w-[20rem]"
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
              />
              <button>
                <CiSearch />
              </button>
            </div>
          </div>
          <p className="hidden md:inline-block bg-white/95 px-4 py-2 rounded-md">
            North York 260
          </p>
        </li>
        <li>
          <div className="flex items-center">
            <button disabled={unit === "metric"} onClick={handleUnitChange} className={`rounded-l-[1.5rem] ${unit === "metric" ? "switched-on" : "switched-off"}`}>
              °C
            </button>
            <button disabled={unit !== "metric"} onClick={handleUnitChange} className={`rounded-r-[1.5rem] ${unit !== "metric" ? "switched-on" : "switched-off"}`}>
              °F
            </button>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default DashboardHead;
