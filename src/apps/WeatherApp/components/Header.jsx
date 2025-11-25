// components/Header.jsx
import React from "react";
import { Link } from 'react-router-dom';
import "../WeatherApp.css";

export default function Header() {
  return (
    <header className="weather-header">
      <h4 className="header-title">Weather App</h4>
      <Link to="/">
        <button className="back-btn">⬅ Back</button>
      </Link>
    </header>
  );
}
