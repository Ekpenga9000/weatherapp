import { useState } from "react";

const WeatherForcastCard = () => {
  const [isClicked, setIsClicked] = useState(false); 
  return (
    <div className="bg-white rounded-[1.5rem] py-4 px-8 cursor-pointer smooth-transition h-[7rem]"  onClick={()=> setIsClicked(prev => !prev)}>
      <h4 className="font-semibold text-sm">Today</h4>
      <div className="flex items-center justify-between">
        <ul className="flex items-center gap-4 w-[8rem]">
          <li>
            <img
              src={`http://openweathermap.org/img/wn/${"04d"}@2x.png`}
              alt={"Weather"}
              className="h-[3rem] w-[3rem] object-cover"
            />
          </li>
          <li className="flex flex-col gap-4">
            <p className="text-sm font-semibold">25°C</p>
            <p className="text-sm">21°C</p>
          </li>
        </ul>
        {isClicked && <ul className="ml-[5rem] w-[7rem] text-end flex flex-col gap-4 text-gray-700">
            <li>Mostly sunny</li>
            <li>2%</li>
        </ul>}
      </div>
    </div>
  );
};

export default WeatherForcastCard;
