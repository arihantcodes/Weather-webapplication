const input = document.querySelector(".input-box");
const button = document.querySelector("#btn");
const whetherimg = document.querySelector(".weather-img");
const temp = document.querySelector(".temp");
const desk = document.querySelector(".desk");
const humidity = document.querySelector("#humidity");
const wind = document.querySelector("#wind");

const checkWhether = async (city) => {
  const api = "db7b9870eacc516d761e8e26e4d404bd";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`;
  const whether_data = await fetch(`${url}`).then((response) => {
    return response.json();
  });

  temp.innerHTML = `${Math.round(whether_data.main.temp - 273.15)}°C`;
  desk.innerHTML = `${whether_data.weather[0].description}`;
  humidity.innerHTML = `${whether_data.main.humidity}%`;
  wind.innerHTML = `${whether_data.wind.speed}km/H`;

  switch(whether_data.weather[0].main) {
    case "Clouds":
      whetherimg.src = "../assest/clouds.png";
      break;
    case "Clear":
      whetherimg.src = "../assest/clear.png";
      break;
    case "Rain":
      whetherimg.src = "../assest/rain.png";
      break;
    case "Snow":
      whetherimg.src = "../assest/snow.png";
      break;
    case "Mist":
      whetherimg.src = "../assest/mist.png";
      break;
  }
  
};

button.addEventListener("click", () => {
  checkWhether(input.value);
});
