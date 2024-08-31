export const getTime = (time: number) => {
  const date = new Date(time);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${formattedHours}:${formattedMinutes} ${ampm}`;
};

export const capitalize = (str: string) => {
  if (str) return str.charAt(0).toUpperCase() + str.slice(1);
};

export const dateExtractor = (date: Date) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dateObject = new Date(date);
  const today = new Date();

  let dates = days[dateObject.getUTCDay()];

  if (today.getUTCDay() === dateObject.getUTCDay()) dates = "Today";

  return `${dates}`;
};

const dateString = (date: string) => {
  const dateData = new Date(date);
  const day = dateData.getDate();
  const month = dateData.getMonth() + 1;
  const year = dateData.getFullYear();

  return `${year}-${month}-${day}`;
};

export const filterDayOut = (list: any[]) => {
  let tracker: any[] = [];
  let result: any[] = [];
  list.forEach((item) => {
    if (!tracker.includes(dateString(item.dt_txt))) {
      const weatherObj = {
        day: dateString(item.dt_txt),
        info: item,
      };
      tracker.push(dateString(item.dt_txt));
      result.push(weatherObj);
    }
  });
  return result;
};

export const filterTime = (date:string, list:any[]) =>{
  const newArray = list.filter((item) => dateString(item.dt_txt) === date)
  return newArray;
}