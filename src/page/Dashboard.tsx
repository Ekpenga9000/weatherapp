import { useEffect } from "react";
// import axios from "axios";
import DashboardHead from "../components/DashboardHead";
import DashboardCurrentWeather from "../components/DashboardCurrentWeather";
import WeatherForcast from "../components/WeatherForcast";
import WeatherDetails from "../components/WeatherDetails";
import { useAppSelector, useAppDispatch } from "../hooks";
import { fetchWeather } from "../reduxState/weatherSlice/weatherSlice";
import Loading from "../components/Loading";
import ErrorPage from "../components/ErrorPage";

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error, city, unit } = useAppSelector(
    (state) => state.weather
  );

  useEffect(() => {
    dispatch(fetchWeather({ city, unit }));
  }, [city, unit]);

  console.log("Data", data);

  if (loading) {
    return <div><Loading/></div>;
  }

  if (error) {
    return <div><ErrorPage/></div>;

  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 flex flex-col justify-center items-center ">
      <div className="w-[37.5rem] md:w-[48rem] lg:w-[64rem] xl:w-[75rem] grid grid-cols-1 gap-8 py-8">
        <DashboardHead />
        <DashboardCurrentWeather />
        <WeatherForcast />
        <WeatherDetails />
      </div>
    </section>
  );
};

export default Dashboard;
