import WeatherForcastCard from "./WeatherForcastCard";
import { useAppSelector } from "../hooks";
import { dateExtractor, filterDayOut } from "../utils/utils";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const WeatherForcast = () => {
  const { data } = useAppSelector((state) => state.weather);

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

  const weatherData = filterDayOut(data?.list);
  return (
    <section>
      <h2 className="font-semibold pl-2">{weatherData.length} day forcast</h2>
      <Carousel responsive={responsive} className="p-4">
        {weatherData.map(({ day, info }) => (
          <WeatherForcastCard
            key={day}
            high={info?.main.temp_max.toFixed()}
            src={info?.["weather"][0].icon}
            description={info?.["weather"][0].description}
            low={info?.["main"].temp_min.toFixed()}
            day={dateExtractor(day)}
            humidity={info?.main.humidity.toFixed()}
          />
        ))}
      </Carousel>
    </section>
  );
};

export default WeatherForcast;
