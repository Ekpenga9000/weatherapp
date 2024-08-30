import "./App.css";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const API_KEY = import.meta.env.VITE_API_KEY;

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${`calgary`}&units=metric&exclude=alerts,minutely&appid=${API_KEY}`
      );
      
      console.log(response.data);
    } catch (error) {
      console.log(error); 
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);


  return (
    <div>
      sOMETHING
    </div>
  )
}

export default App;
