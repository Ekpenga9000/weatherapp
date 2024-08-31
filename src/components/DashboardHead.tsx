import React, { useState } from "react";
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
      <ul className="flex flex-col gap-4 md:flex-row items-center justify-between">
        <li className="flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="card-bg smooth-transition hover:bg-white/35 w-[18.75rem] md:w-[20rem] flex justify-between items-center text-white">
            <input
              type="text"
              placeholder="Search for location"
              className="bg-transparent outline-none w-[80%]"
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <button onClick={handleSearch}>
              <CiSearch />
            </button>
          </div>
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
