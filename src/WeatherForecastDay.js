import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function minTemp() {
    let tempMin = Math.round(props.data.temp.min);
    return `${tempMin}°`;
  }

  function maxTemp() {
    let tempMax = Math.round(props.data.temp.max);
    return `${tempMax}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="weatherForecastDay">
      <div className="forecast-day">{day()}</div>

      <WeatherIcon code={props.data.weather[0].icon} size={30} />
      <div>
        <span className="forecast-temp-max">{maxTemp()}</span>
        <span className="forecast-temp-min">{minTemp()}</span>
      </div>
    </div>
  );
}
