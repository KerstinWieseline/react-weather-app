import React , { useState } from "react";

import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response) {
      setWeatherData({
        ready: true,
        temperature: response.data.temperature.current,
        humidity: response.data.temperature.humidity,
        wind: response.data.wind.speed,
        city: response.data.city,
        icon: response.data.condition.icon,
        description: response.data.condition.description,
        date: new Date(response.data.time * 1000),
      });
      
      
    }

    function search() {
      const apiKey = "0c43aab85t9fo6a6712276a1886b3109";
      let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
      axios.get(apiUrl).then(handleResponse);

    }

    function handleSubmit(event) {
      event.preventDefault();
      search();

    }

    function handleCityChange(event) {
      setCity(event.target.value);

    }

    if (weatherData.ready) {
      return (
      <div className="Weather">
        <div className="row">
          <div className="col-9">
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
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
        <WeatherInfo data={weatherData} />
        <WeatherForecast />
        
      </div>
    );
    }
    else {
    search();

    return "Loading...";
    
}}