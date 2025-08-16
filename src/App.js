import React from 'react';
import Weather from './Weather';

import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Berlin" />
        <footer>
          This project was coded by Kerstin Wiessmann, it is{" "}
          <a
            href="https://github.com/KerstinWieseline/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
          and hosted on{" "}
          <a
            href="https://kerstin-weather-react.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify!
          </a>
        </footer>
      </div>
    </div>
  );
}


