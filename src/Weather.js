import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [loaded, setLoaded] = useState(false);
  let [temperature, setTemperature] = useState(null);

  function handleResponse(response) {
    console.log(response);

    setTemperature(response.data.main.temp);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>Munich</h1>
        <ul>
          <li>Monday 7:00</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src="http://openweathermap.org/img/wn/02d@2x.png"
              alt="few clouds"
            />
            <span className="temperature">{Math.round(temperature)}</span>
            <span className="units">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Cloudy</li>
              <li>Humidity: 100%</li>
              <li>Wind: 20 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "99504b2dad7b6efc86f191546c548e5a";
    let city = "munich";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return <div>Loading...</div>;
  }
}
