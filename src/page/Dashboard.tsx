import { useEffect } from "react";
import axios from "axios";
import DashboardHead from "../components/DashboardHead";
import DashboardCurrentWeather from "../components/DashboardCurrentWeather";
import WeatherForcast from "../components/WeatherForcast";
import WeatherDetails from "../components/WeatherDetails";

const Dashboard = () => {
  //  const API_KEY = import.meta.env.VITE_API_KEY;
  // const URL = import.meta.env.VITE_API_URL;

  // const fetchWeatherData = async () => {
  //   try {
  //     const response = await axios.get(
  //       // `${URL}?q=${`calgary`}&units=metric&exclude=alerts,minutely&appid=${API_KEY}`
  //       `${URL}?q=${`calgary`}&units=metric,minutely&appid=${API_KEY}`
  //     );

  //     console.log(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchWeatherData();
  // }, []);
  return (
   
    <>
      <section className="min-h-screen bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 flex flex-col justify-center items-center ">
        <div className="w-[37.5rem] md:w-[48rem] lg:w-[64rem] xl:w-[75rem] grid grid-cols-1 gap-8">
          <DashboardHead />
          <DashboardCurrentWeather />
          <WeatherForcast />
          <WeatherDetails />
        </div>
      </section>
      {/* <section className="min-h-screen bg-gradient-to-r from-yellow-100 via-orange-200 to-orange-400">

    </section> */}
    </>
  );
};

export default Dashboard;
