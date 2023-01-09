const locationForm = document.querySelector(".location-form"),
  locationInput = document.querySelector(".location-input"),
  farenheitBtn = document.querySelector(".farenheit-btn"),
  celsiusBtn = document.querySelector(".celsius-btn");

async function getWeatherData(unit = "metric", location = "London") {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=ba3fd58b2047f0937b2622c8627f6b68&units=${unit}`
    );
    const weatherData = await response.json();

    showValues(weatherData);
  } catch (err) {
    if (err) {
      alert("Please enter a correct location");
      getWeatherData();
    }
  }
}

getWeatherData();

function showValues(data) {
  const location = document.querySelector(".location"),
    temparature = document.querySelector(".temparature"),
    feelsLike = document.querySelector(".feels-like"),
    humidity = document.querySelector(".humidity"),
    pressure = document.querySelector(".pressure"),
    tempMax = document.querySelector(".temp-max"),
    tempMin = document.querySelector(".temp-min");

  location.innerText = data.name;
  temparature.innerText = data.main.temp;
  feelsLike.innerText = data.main.feels_like;
  humidity.innerText = data.main.humidity;
  pressure.innerText = data.main.pressure;
  tempMax.innerText = data.main.temp_max;
  tempMin.innerText = data.main.temp_min;
}

locationForm.addEventListener("submit", (e) => {
  getWeatherData("metric", locationInput.value);
  e.preventDefault();
});

celsiusBtn.addEventListener("click", () => {
  getWeatherData("metric", checkInput());
});

farenheitBtn.addEventListener("click", () => {
  getWeatherData("imperial", checkInput());
});

function checkInput() {
  if (locationInput.value === "") {
    return "London";
  } else {
    return locationInput.value;
  }
}
