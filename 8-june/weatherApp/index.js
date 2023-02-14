const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`;
const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");
// const API = `https://api.openweathermap.org/data/2.5/weather?
// q=${city}&appid=${API_KEY}&units=metric`
// const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

function upp() {
  search.value = search.value.toUpperCase();
}

const getWeather = async (city) => {
  if (city == "") {
    city = "delhi";
  }
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  console.log(response);
  const data = await response.json();
  console.log(data);
  showweather(data);
};

const showweather = (data) => {
  if (data.cod === "404") {
    weather.innerHTML = `<p style="color:red">!OOps City not found</p>`;
    return;
  }
  weather.innerHTML = `<div class="d1">
    <img
      src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png
  "
      width="40"
      height="40"
      alt="weather"
    />
  </div>
  <div class="d2">
    <h2>${data.main.temp} ℃</h2>
    <h4>${data.weather[0].main}</h4>
    <h3>${data.name}</h3>
  </div>`;
};

form.addEventListener("submit", function (event) {
  console.log(search.value);
  getWeather(search.value);
  event.preventDefault();
});
