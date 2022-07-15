import React, { useState } from "react";

export default function WeatherTemperature(props) {
  let [units, setUnits] = useState("celsius");

  function showFarenheit(event) {
    event.preventDefault();
    setUnits("farenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnits("celsius");
  }

  if (units === "celsius") {
    return (
      <span className="weatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="units">
          °C |{" "}
          <a href="/" onClick={showFarenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    let farenheitTemp = (props.celsius * 9) / 5 + 32;
    return (
      <span className="weatherTemperature">
        <span className="temperature">{Math.round(farenheitTemp)}</span>
        <span className="units">
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </span>
    );
  }
}
