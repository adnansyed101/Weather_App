function showValues(data) {
  const location = document.querySelector(".location");
    const temparature = document.querySelector(".temparature");
    const feelsLike = document.querySelector(".feels-like");
    const humidity = document.querySelector(".humidity");
    const pressure = document.querySelector(".pressure");
    const tempMax = document.querySelector(".temp-max");
    const tempMin = document.querySelector(".temp-min");

  location.innerText = data.name;
  temparature.innerText = data.main.temp;
  feelsLike.innerText = data.main.feels_like;
  humidity.innerText = data.main.humidity;
  pressure.innerText = data.main.pressure;
  tempMax.innerText = data.main.temp_max;
  tempMin.innerText = data.main.temp_min;
}

export default showValues;
