import React , { useState } from "react";
import FriendlyDate from "./FriendlyDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    
    const [weatherData, setWeatherData] = useState({ ready: false });
    function handleResponse(response) {
      setWeatherData({
        ready: true,
        temperature: response.data.temperature.current,
        humidity: response.data.temperature.humidity,
        wind: response.data.wind.speed,
        city: response.data.city,
        icon: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
        description:response.data.condition.description,
        date:new Date(response.data.time * 1000),
      });
      
      
    }

    if (weatherData.ready) {
      return (
      <div className="Weather">
        <div className="row">
          <div className="col-9">
            <form>
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </form>
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
        <h1>{weatherData.city}</h1>
        <ul>
          <li><FriendlyDate date={weatherData.date} /></li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={weatherData.icon}
                alt={weatherData.description}
                style={{ marginRight: "10px" }}
              />
              <div>
                <span className="temperature">{Math.round(weatherData.temperature)}</span>
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
    }
    else {
    const apiKey = "0c43aab85t9fo6a6712276a1886b3109";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
    
}}