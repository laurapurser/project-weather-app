import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

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
            <span className="float-left">
              <WeatherIcon
                code={props.data.icon}
                alt-text={props.data.description}
                size={60}
              />
            </span>

            <span className="float-left">
              <WeatherTemperature celsius={props.data.temp} />
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
