// .........................Variables...................................

let apiKey = "53f6ce4ff60c0d69fa724b693eaf4608";
let apiLink = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let input = document.querySelector(".search input");
let button = document.querySelector(".search button");
let weather = document.querySelector(".weather");
let weatherIcon = document.querySelector(".weather-icon");
let error = document.querySelector(".error");

// one async function for every status
async function weatherInformation(city) {
  const response = await fetch(apiLink + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    error.style.display = "block";
    weather.style.display = "none";
  } else {
    const data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";

    weather.style.display = "block";

    if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "images/snow.png";
    }
    error.style.display = "none";
    weather.style.display = "block";
  }
}

// when clicked btn:
button.addEventListener("click", () => {
  weatherInformation(input.value);
});
