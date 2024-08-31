import { useEffect } from "react";
// import axios from "axios";
import DashboardHead from "../components/DashboardHead";
import DashboardCurrentWeather from "../components/DashboardCurrentWeather";
import WeatherForcast from "../components/WeatherForcast";
import WeatherDetails from "../components/WeatherDetails";
import { useAppSelector, useAppDispatch } from "../hooks";
import { fetchWeather} from "../reduxState/weatherSlice/weatherSlice";

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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  return (
    <>
      <section className="min-h-screen bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 flex flex-col justify-center items-center ">
        <div className="w-[37.5rem] md:w-[48rem] lg:w-[64rem] xl:w-[75rem] grid grid-cols-1 gap-8 py-8">
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
