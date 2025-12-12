function CurrentWeatherCard({ temperature, description, city }) {
  return (
    <div className="card" style={{ marginTop: "1rem" }}>
      <h3>Current Weather for {city}</h3>
      <p>Temperature: {temperature}°</p>
      <p>Conditions: {description}</p>
    </div>
  );
}

export default CurrentWeatherCard;