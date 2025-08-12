import React from 'react';
import Weather from './Weather';

import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
          <Weather />
        <footer>
          This project was coded by Kerstin Wiessmann and is{" "}
          <a
            href="https://github.com/KerstinWieseline/react-weather-app"
            target="_blank"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}


