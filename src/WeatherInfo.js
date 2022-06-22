import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div>
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>

      <div className="row results">
        <div className="col-6">
          <div className="clearfix">
            <img
              src={props.data.iconUrl}
              alt={props.data.description}
              className="float-left"
            />
            <span className="float-left">
              <span className="temperature">{Math.round(props.data.temp)}</span>
              <span className="unit">°C</span>
            </span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Feels like: {Math.round(props.data.feelslike)}°C </li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.windspeed)}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
