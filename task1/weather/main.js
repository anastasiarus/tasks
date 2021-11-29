let weather = {
    apiKey: "0c3ce26382bdec0d865b82bc1502ec0c",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&lang=ru&appid=" +
          this.apiKey
      )
        .then((response) => {
          if (!response.ok) {
            alert("Погода не найдена");
            throw new Error("Погода не найдена");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      document.querySelector(".city").innerText = "Погода " + name;
      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°C";
      document.querySelector(".humidity").innerText =
        "Влажность: " + humidity + "%";
      document.querySelector(".wind").innerText =
        "Скорость ветра: " + speed + " м/с";
      document.querySelector(".weather").classList.remove("loading");
    },
    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
  }
  
  document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
  })
  
  document.getElementById('close').onclick = function() {
  document.getElementById('form').hidden = true;
    }
  
  weather.fetchWeather("Minsk") 


    /* class WeatherWidget {
      constructor() {
        this.apiKey = "0c3ce26382bdec0d865b82bc1502ec0c"
        this.city = this.city
        this.data = this.data
      }

      fetchWeather(city) {
        fetch(
          "https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=metric&lang=ru&appid=" +
            this.apiKey
        )
          .then((response) => {
            if (!response.ok) {
              alert("Погода не найдена");
              throw new Error("Погода не найдена");
            }
            return response.json();
          })
          .then((data) => this.displayWeather(data));
      }

      displayWeather() {
        const { name } = this.data;
        const { icon, description } = this.data.weather[0];
        const { temp, humidity } = this.data.main;
        const { speed } = this.data.wind;
        document.querySelector(".city").innerText = "Погода " + name;
        document.querySelector(".icon").src =
          "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText =
          "Влажность: " + humidity + "%";
        document.querySelector(".wind").innerText =
          "Скорость ветра: " + speed + " м/с";
        document.querySelector(".weather").classList.remove("loading");
      }

      search() {
        this.fetchWeather(document.querySelector(".search-bar").value);
      }
      /* document.querySelector(".search button").addEventListener("click", function () {
      WeatherWidget.search();
    });
    
    document
      .querySelector(".search-bar")
      .addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
          WeatherWidget.search()
        }*/

 /*  }
    
    const weather = new WeatherWidget()  */
    