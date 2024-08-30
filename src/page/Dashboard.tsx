import { useEffect } from "react";
import axios from "axios";
import DashboardHead from "../components/DashboardHead";
import DashboardCurrentWeather from "../components/DashboardCurrentWeather";

const Dashboard = () => {
   // const API_KEY = import.meta.env.VITE_API_KEY;
  // const URL = import.meta.env.VITE_API_URL; 

  // const fetchWeatherData = async () => {
  //   try {
  //     const response = await axios.get(
  //       `${URL}?q=${`calgary`}&units=metric&exclude=alerts,minutely&appid=${API_KEY}`
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
    <section className="min-h-screen bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300">
      <DashboardHead/>
      <DashboardCurrentWeather/>
    </section>
    {/* <section className="min-h-screen bg-gradient-to-r from-yellow-100 via-orange-200 to-orange-400">

    </section> */}
    </>


  )
}

export default Dashboard