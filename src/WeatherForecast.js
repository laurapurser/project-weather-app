import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Thurs</div>
          <WeatherIcon code="01d" size={42} />
          <div className="forecast-temps">
            <span className="forecast-max">19°</span>
            <span className="forecast-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
