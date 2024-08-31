import DailyCard from "./DailyCard";
import { useAppSelector } from "../hooks";
import { filterTime } from "../utils/utils";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const DailyCardList = () => {
  const { data, selectedDay } = useAppSelector((state) => state.weather);
  const weatherData = filterTime(selectedDay, data?.list) || [];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel responsive={responsive} className="p-4 card-bg">
      {weatherData.map((item) => (
        <DailyCard
          key={item.dt}
          time={item.dt * 1000}
          temp={item.main.temp}
          src={item.weather[0].icon}
          description={item.weather[0].description}
          humidity={item.main.humidity}
          windSpeed={item.wind.speed}
          deg={`${item.wind.deg}deg`}
        />
      ))}
    </Carousel>
  );
};

export default DailyCardList;
