import { FaDroplet, FaLocationArrow } from "react-icons/fa6";
import { getTime, capitalize } from "../utils/utils";
import { useAppSelector } from "../hooks";

interface IDailyCard{
  time:number; 
  src: string;
  description:string; 
  deg:string;
  humidity:number; 
  windSpeed: number;
  temp:number; 
}

const DailyCard = (props:IDailyCard) => {
  const {unit} = useAppSelector((state) => state.weather);

  const { time, src, description, deg, humidity, windSpeed, temp } = props;
  return (
    <div className="flex flex-col items-start p-4]">
      <p className="text-gray-600 text-sm mb-4">{getTime(time)}</p>
      <img
        src={`http://openweathermap.org/img/wn/${src}@2x.png`}
        alt={description}
        className="h-[3rem] w-[3rem] object-cover"
      />

      <p className="font-semibold">{`${temp && temp.toFixed()}`} {unit === "metric" ? "°C": "°F"}</p>
      <p className="text-sm text-gray-600 mb-4">{capitalize(description)}</p>

      <p className="flex items-center gap-1 text-sm"><FaDroplet/>{`${humidity}`}%</p>
      <p className="flex items-center gap-1 text-sm">{`${windSpeed}`} {unit === "metric" ? "km/h": "mph"} <span className={`rotate-[${deg}]`}><FaLocationArrow/></span></p>
    </div>
  );
};

export default DailyCard;
