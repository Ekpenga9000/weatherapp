
import { useAppSelector, useAppDispatch } from "../hooks";
import { capitalize } from "../utils/utils";
import {setSelectedDay} from "../reduxState/weatherSlice/weatherSlice"; 
interface IWeatherWeatherForcastCard {
  day: string;
  high: string;
  low: string;
  description: string;
  humidity: string;
  src: string;
}

const WeatherForcastCard = (props: IWeatherWeatherForcastCard) => {
  const dispatch = useAppDispatch(); 
  const { unit, selectedDay } = useAppSelector((state) => state.weather);
  const { day, high, low, description, humidity, src } = props;
  
  
  const handleClick = () =>{
    dispatch(setSelectedDay(day));
  }

  return (
    <div
      className="bg-white/75 hover:bg-white rounded-[1.5rem] py-4 px-8 cursor-pointer smooth-transition h-[7rem]"
      onClick={handleClick}>
      <h4 className="font-semibold text-sm">{day}</h4>
      <div className="flex items-center justify-between">
        <ul className="flex items-center gap-4 w-[8rem]">
          <li>
            <img
              src={`http://openweathermap.org/img/wn/${src}@2x.png`}
              alt={description}
              className="h-[3rem] w-[3rem] object-cover"
            />
          </li>
          <li className="flex flex-col gap-4">
            <p className="text-sm font-semibold">
              {high}
              {unit === "metric" ? "°C" : "°F"}
            </p>
            <p className="text-sm">
              {low}
              {unit === "metric" ? "°C" : "°F"}
            </p>
          </li>
        </ul>
        {day === selectedDay && (
          <ul className="ml-[5rem] w-[10rem] text-end flex flex-col gap-4 text-gray-700">
            <li>{capitalize(description)}</li>
            <li>{`${humidity}`}%</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default WeatherForcastCard;
