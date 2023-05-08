const apiKey = "507a67fc7b08649ec5eb67ea42df8bb6";

const weatherData = document.querySelector("#weather-data");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const humidityElement = document.querySelector("#humidity span");
const windElement = document.querySelector("#wind span");

let coordsLat;
let coordsLon;

const success = async (position) => {
  coordsLat = await position.coords.latitude;
  coordsLon = await position.coords.longitude;

  await getWeatherData();
  await showWeatherData();
};

const error = async (error) => {
  alert(error.message);
};

const watchID = navigator.geolocation.getCurrentPosition(success, error);

const getWeatherData = async () => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coordsLat}&lon=${coordsLon}&units=metric&appid=${apiKey}&lang=pt_br`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const showWeatherData = async () => {
  const data = await getWeatherData();
  cityElement.innerText = ` ${data.name} | `;
  tempElement.innerText = `${parseInt(data.main.temp)}`;
  descElement.innerText = data.weather[0].description;
  weatherIconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
  );
  humidityElement.innerText = `${data.main.humidity}%`;
  windElement.innerText = `${data.wind.speed}km/h`;

  weatherData.classList.remove("hide");
};
