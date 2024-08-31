import { FaDroplet, FaLocationArrow } from "react-icons/fa6";

const DailyCard = () => {
  return (
    <div className="flex flex-col items-start p-4 bg-white w-[8rem]">
      <p className="text-gray-600 text-sm mb-4">5 AM</p>
      <img
        src={`http://openweathermap.org/img/wn/${"04d"}@2x.png`}
        alt={"Weather"}
        className="h-[3rem] w-[3rem] object-cover"
      />

      <p className="font-semibold">21°</p>
      <p className="text-sm text-gray-600 mb-4">Mostly cloudy</p>

      <p className="flex items-center gap-1 text-sm"><FaDroplet/>34%</p>
      <p className="flex items-center gap-1 text-sm">8 km/h <span><FaLocationArrow/></span></p>
    </div>
  );
};

export default DailyCard;
