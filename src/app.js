import getWeatherData from "./getWeatherData";

const locationForm = document.querySelector(".location-form");
const locationInput = document.querySelector(".location-input");
const farenheitBtn = document.querySelector(".farenheit-btn");
const celsiusBtn = document.querySelector(".celsius-btn");

getWeatherData();

function checkInput() {
  if (locationInput.value === "") {
    return "London";
  }
  return locationInput.value;
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
