import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "99504b2dad7b6efc86f191546c548e5a";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="weatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Mon</div>

          <WeatherIcon code="01d" size={30} />
          <div>
            <span className="forecast-temp-max">20°</span>
            <span className="forecast-temp-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
