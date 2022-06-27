import React from "react";
import WeatherIcon from "./WeatherIcon.js";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }
  //function setDay() {
  //let date = new Date(props.data.dt * 1000);
  // let day = date.getDay();
  //let days = ["Sun", "Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"];
  // return days[setDay()];
  //}

  return (
    <div className="WeatherForecastDay">
      <div className="forecast-day">{props.data.dt}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={42} />
      <div className="forecast-temps">
        <span className="forecast-max">{maxTemp()}°</span>
        <span className="forecast-min">{minTemp()}°</span>
      </div>
    </div>
  );
}
