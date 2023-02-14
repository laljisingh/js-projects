const getsWeather = async () => {
  const url = `https://jsonplaceholder.typicode.com/users`;
  const response = await fetch(url);
  // console.log(response);
  const data = await response.json();
  console.log(data);
  document.write(data[0].id);
  showweather(data);
};
// getWeather();

const form = document.querySelector("form");
const search = document.querySelector("#search");
const card = document.querySelector("#card");
// const API = `https://api.openweathermap.org/data/2.5/weather?
// q=${city}&appid=${API_KEY}&units=metric`
// const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

const getcard = async (datas) => {
  const uv = datas;
  //   if (city == "") {
  //     city = "delhi";
  //   }
  //   console.log(datas);
  const url = `https://jsonplaceholder.typicode.com/users`;
  const response = await fetch(url);

  const data = await response.json();
  console.log(data[datas].id);

  console.log(data);

  showcard(data, uv);
};

const showcard = (data, uv) => {
  console.log(data[uv].id);

  card.innerHTML = ` <div class="card-image">
  <img src="user.png" height="300" width="300" alt="image1" />
</div>
<div class="card-text">
  <h3>Name :- ${data[uv].name}</h3>
  <p>Email :-
  ${data[uv].email}
  </p>
  <p>Phone :-
  ${data[uv].phone}
  </p>
  <p>Website :-
  ${data[uv].website}
  </p>
</div>
</div>
`;
};

form.addEventListener("submit", function (event) {
  //   console.log(search.value);
  getcard(search.value);
  event.preventDefault();
});
