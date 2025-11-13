import { useState, useEffect } from "react";

function WeatherView() {
  // REQUIRED STATES
  const [loadingData, setLoadingData] = useState(true);
  const [error, setError] = useState(false);
  const [emptyData, setEmptyData] = useState(false);
  const [data, setData] = useState(false);

  // LOCATION: Iceland (Reykjavík)
  const zip = '94539';
  const country = 'US';
 
  const APIkey = "377317f9fa9f71e3698118577d4ad2ab";

  // Celsius converter
  const toCelsius = (k) => (k - 273.15).toFixed(1);

  // GET GEOCODING (lat/lon)
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/geo/1.0/zip?zip=${zip},${country}&appid=${APIkey}`
    )
      .then((response) => response.json())
      .then((geoData) => {
        console.log("GEO DATA:", geoData);

        // If invalid → mark empty
        if (!geoData || !geoData.lat || !geoData.lon) {
          setEmptyData(true);
          setLoadingData(false);
          return;
        }

        const lat = geoData.lat;
        const lon = geoData.lon;

        // FETCH CURRENT WEATHER
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`
        )
          .then((response) => response.json())
          .then((weatherData) => {
            console.log("WEATHER DATA:", weatherData);

            if (!weatherData || !weatherData.main) {
              setEmptyData(true);
              setLoadingData(false);
              return;
            }

            // Success
            setData(weatherData);
            setError(false);
            setLoadingData(false);
          })
          .catch((err) => {
            console.log("WEATHER ERROR:", err);
            setError(true);
            setLoadingData(false);
          });
      })
      .catch((err) => {
        console.log("GEO ERROR:", err);
        setError(true);
        setLoadingData(false);
      });
  }, []);

  // RENDER UI
  return (
    <>
      {/* LOADING STATE */}
      {loadingData && !error && <p>Loading weather data...</p>}

      {/* ERROR STATE */}
      {error && !loadingData && (
        <p style={{ color: "red" }}>Error loading weather data.</p>
      )}

      {/* EMPTY DATA */}
      {emptyData && !loadingData && !error && (
        <p>No weather data found for this location.</p>
      )}

      {/* SUCCESS STATE */}
      {!loadingData && !error && data && (
        <>
          <h2>Weather for {data.name}</h2>

          <p>Temperature: {toCelsius(data.main.temp)} °C</p>
          <p>Min Temp: {toCelsius(data.main.temp_min)} °C</p>
          <p>Max Temp: {toCelsius(data.main.temp_max)} °C</p>

          <p>Description: {data.weather?.[0]?.description}</p>

          <p>Wind Speed: {data.wind?.speed} m/s</p>
          <p>Wind Degree: {data.wind?.deg}°</p>
        </>
      )}
    </>
  );
}

export default WeatherView;
