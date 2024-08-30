import { useEffect } from "react";
import axios from "axios";

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
    <div>Dashboard</div>
  )
}

export default Dashboard