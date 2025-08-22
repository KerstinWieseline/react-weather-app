import React, { useState, useEffect } from "react";

import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";


export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);

  }, [props.coordinates]);


  function handleResponse(response) {
    
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.slice(1, 6).map(function (dailyForecast, index) {
            
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );

                     
          })}
          
          
        </div>
      </div>
    );
  } else {
    let apiKey = "0c43aab85t9fo6a6712276a1886b3109";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);

    return null;

  }

    

    
}