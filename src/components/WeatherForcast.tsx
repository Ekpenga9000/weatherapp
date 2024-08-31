import WeatherForcastCard from "./WeatherForcastCard";

const WeatherForcast = () => {
  return (
    <section>
      <h2 className="font-semibold pl-2">5 day forcast</h2>
      <div className="w-full overflow-x-scroll p-4 flex items-center gap-2">
        <WeatherForcastCard />
        <WeatherForcastCard />
        <WeatherForcastCard />
        <WeatherForcastCard />
        <WeatherForcastCard />
        <WeatherForcastCard />
      </div>
    </section>
  );
};

export default WeatherForcast;
