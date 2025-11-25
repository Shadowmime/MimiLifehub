// WeatherApp.jsx
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import WeatherBody from "./components/Body";
import "./WeatherApp.css";

export default function WeatherApp() {
  useEffect(() => {
    window.electronAPI.resizeWindow(300, 350);
  }, []);
  return (
    <div className="weather-app">
      <Header />
      <WeatherBody />
    </div>
  );
}
