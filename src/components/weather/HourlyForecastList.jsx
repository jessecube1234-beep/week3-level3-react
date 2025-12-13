/**
 * Renders a list of hourly forecast cards for today.
 *
 * @param {object} props
 * @param {{
 *   time?: string[],
 *   temperature_2m?: number[]
 * }} props.hourly
 * @param {"metric" | "imperial"} props.units
 */
export default function HourlyForecastList({ hourly, units }) {
  if (!hourly || !hourly.time || hourly.time.length === 0) {
    return (
      <div className="card">
        <p>No hourly data yet.</p>
      </div>
    );
  }

  const temperatureUnit = units === "metric" ? "°C" : "°F";

  const hourlyRender = hourly.time.map((timeString, index) => {
    const temp = hourly.temperature_2m?.[index];

    return (
      <div key={timeString} className="hourly-card">
        <p className="hourly-card__time">{timeString}</p>
        <p className="hourly-card__temp">
          {Math.round(temp)}{temperatureUnit}
        </p>
      </div>
    );
  });

  return (
    <div className="card" style={{ marginBottom: "1rem" }}>
      <h2>Hourly forecast</h2>

      <div className="hourly-grid">
        {hourlyRender}
      </div>
    </div>
  );
}