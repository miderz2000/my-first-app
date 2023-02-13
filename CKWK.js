let defaultCity = "Berlin";
document.querySelector("h2").innerHTML = defaultCity;

function formSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  searchInput = searchInput.value[0].toUpperCase() + searchInput.value.slice(1);

  searchCity(searchInput);
  document.querySelector("h2").innerHTML = `${searchInput}`;
}

searchCity(defaultCity);
let form = document.querySelector("#search-form");
form.addEventListener("submit", formSubmit);

function searchCity(cityName) {
  let apiKey = "347b8c0577ffb978daa8821ca7338fcd";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showWeatherStatus);
}

function showWeatherStatus(response) {
  console.log(response.data.main.temp);

  document.querySelector(".currentTemp").innerHTML = `${Math.round(
    response.data.main.temp
  )}°C`;

  //  document.querySelector("#description").innerHTML =
  //  response.data.weather[0].description;
}
