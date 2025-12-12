import { useState } from "react";
import CurrentWeatherCard from "../components/weather/CurrentWeatherCard.jsx";
import SearchBar from "../components/weather/SearchBar.jsx";
import UnitsToggle from "../components/weather/UnitsToggle.jsx";
import { useWeather } from "../hooks/useWeather.js";

function TodayPage() {
  const [city, setCity] = useState("London");
  const [units, setUnits] = useState("metric");

  const weatherState = useWeather(city, units);

  const handleSearch = (newCity) => {
    setCity(newCity);
  };

  const handleUnitsChange = (newUnits) => {
    setUnits(newUnits);
  };

  return (
    <section className="card" style={{ marginBottom: "1rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}>
        <SearchBar onSearch={handleSearch} />
        <UnitsToggle units={units} onChange={handleUnitsChange} />
      </div>

      <p style={{ marginTop: "0.75rem", fontSize: "0.9rem" }}>
        Showing weather for <strong>{city}</strong> ({units} units)
      </p>

      {weatherState.loading && <p>Loading weather...</p>}
      {weatherState.error && (
        <p style={{ color: "#f97373" }}>{weatherState.error}</p>
      )}

      <CurrentWeatherCard
        current={weatherState.current}
        location={weatherState.location}
        units={units}
      />
    </section>
  );
}

export default TodayPage;
