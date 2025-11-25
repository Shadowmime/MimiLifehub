// components/WeatherBody.jsx
import React, { useEffect, useState } from "react";
import sunnyBg from "../backgrounds/sunny.png";
import cloudyBg from "../backgrounds/cloudy.png";
import rainyBg from "../backgrounds/rainy.png";

export default function WeatherBody() {
  const [weatherData, setWeatherData] = useState(null);

  const weatherBackgrounds = {
    Clear: sunnyBg,
    Clouds: cloudyBg,
    Rain: rainyBg,
    Drizzle: rainyBg,
    Thunderstorm: rainyBg,
  };

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey = import.meta.env.VITE_WEATHER_KEY; 
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
      {/* Pokémon silhouette or placeholder */}
      <div
        className="pokemon-bg"
        style={{
          backgroundImage: `url(${
            weatherData ? weatherBackgrounds[weatherData.weather[0].main] : sunnyBg
          })`,
        }}
      />

      {weatherData ? (
        <>
          <div className="temp-circle">
            {Math.round(weatherData.main.temp)}°C
          </div>

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
