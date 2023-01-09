import showValues from "./showValues";

async function getWeatherData(unit = "metric", location = "London") {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=ba3fd58b2047f0937b2622c8627f6b68&units=${unit}`
    );
    const weatherData = await response.json();

    showValues(weatherData);
  } catch (err) {
    if (err) {
      // eslint-disable-next-line no-alert
      alert("Please enter a correct location");
      getWeatherData();
    }
  }
}

export default getWeatherData;
