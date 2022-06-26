import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiKey = "082d3d02ffdb12f2fd9b259e2ced1d0d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

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
