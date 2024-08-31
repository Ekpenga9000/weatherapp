import { useState } from "react";
import { useAppSelector } from "../hooks";
import { filterTime, getTime } from "../utils/utils";
import { Line } from "react-chartjs-2";
import { FaTemperatureHigh, FaWind } from "react-icons/fa";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartComp = () => {
  const [isTemp, setTemp] = useState("temp");
  const { data, selectedDay } = useAppSelector((state) => state.weather);
  const weatherData = filterTime(selectedDay, data?.list) || [];

  const labels = weatherData.map((item) => getTime(item.dt * 1000));
  const dataSet = weatherData.map((item) => item.main.temp);
  const dataSet2 = weatherData.map((item) => item.wind.speed);

  const lineChartData = {
    labels: [...labels],
    datasets: [
      {
        label: "Temperature",
        data: [...dataSet],
        borderColor: "rgb(75, 192, 192)",
        tension:0.1
      },
    ],
  };

  const lineChartData2 = {
    labels: [...labels],
    datasets: [
      {
        label: "Wind Speed",
        data: [...dataSet2],
        borderColor: "red",
        tension:0.1
      },
    ],
  };
  const options = {};
  return (
    <>
    
    <section className="hidden md:block">
      <ul className="flex items-center justify-center p-4">
        <li
          className={`flex items-center gap-2 cursor-pointer ${
            isTemp === "temp" ? "switched-on" : "switched-off"
          }`}
          onClick={() => setTemp("temp")}>
          Temp
          <FaTemperatureHigh />
        </li>
        <li
          className={`flex items-center gap-2 cursor-pointer ${
            isTemp !== "temp" ? "switched-on" : "switched-off"
          }`}
          onClick={() => setTemp("")}>
          Wind
          <FaWind />
        </li>
      </ul>
      {isTemp === "temp" ? (
        <div className="flex justify-center items-center pb-8">
          <Line options={options} data={lineChartData} />
        </div>
      ) : (
        <div className="flex justify-center items-center pb-8">
          <Line options={options} data={lineChartData2} />
        </div>
      )}
    </section>
    <div className="block p-4 h-[14rem]">
       <p>Screen size is not big enough for chart.</p>
    </div>
    </>
  );
};

export default ChartComp;
