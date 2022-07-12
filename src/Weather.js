import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>Munich</h1>
      <ul>
        <li>Monday 7:00</li>
        <li>Cloudy</li>
      </ul>
      <div className="col-6">6°C</div>
      <div className="col-6">
        <ul>
          <li>Humidity</li>
          <li>Wind</li>
        </ul>
      </div>
    </div>
  );
}
