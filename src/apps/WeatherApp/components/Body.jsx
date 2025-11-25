// components/WeatherBody.jsx
import React, { useEffect, useState } from "react";
import rayquaza from "../pokemonFrames/Rayquaza1.jpg";

export default function WeatherBody() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey = "a5f03456353848e72cff7374b802d372"; 
        const lat = -33.9667;
        const lon = 151.1000;

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }

        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather:", error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <main className="weather-body">
      {/* Background image */}
      <div
        className="pokemon-bg"
        style={{ backgroundImage: `url(${rayquaza})` }}
      />

      {/* Overlay content */}
      {weatherData ? (
        <>
          <div className="temp-circle">{Math.round(weatherData.main.temp)}°C</div>
          <div className="weather-info-box">
            It’s {weatherData.weather[0].description} today
          </div>
        </>
      ) : (
        <p className="loading-text">Loading weather...</p>
      )}
    </main>
  );
}
