let city = {
        name: "New York",
        temp: "10",
        humidity: "63%",
      };

      let name = city.name;
      let temp = city.temp;
      let humidity = city.humidity;
      let fahrenheitTemperature = Math.round((city.temp * 9) / 5 + 32);

      //city = prompt("Please enter a city.");
      if (name === "New York") {
        //alert(
          `It is currently ${temp}°C (${fahrenheitTemperature}°F) in ${name} with a humidity of ${humidity}`
        );
      } else {
        //alert(
          "Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+sydney"
        );
      }

      function showCity(event) {
        event.preventDefault();
        let searchInput = document.querySelector("#city-input");
        let h1 = document.querySelector("h1");
        h1.innerHTML = `${name}`;
      }
      let form = document.querySelector("#search-form");
      form.addEventListener("submit", showCity);

      function formatDate(date) {
        let hours = date.getHours();
        if (hours < 10) {
          hours = `0${hours}`;
        }
        let minutes = date.getMinutes();
        if (minutes < 10) {
          minutes = `0${minutes}`;
        }

        let dayList = date.getDay();
        let days = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];
        let day = days[dayList];
        return `${day} ${hours}:${minutes}`;
      }

      let dateElement = document.querySelector("#date");
      let currentTime = new Date();
      dateElement.innerHTML = formatDate(currentTime);

      function convertToFahrenheit(event) {
        event.preventDefault();
        let temperatureElement = document.querySelector("#currentTemp");
        temperatureElement.innerHTML = 66;
      }

      function convertToCelsius(event) {
        event.preventDefault();
        let temperatureElement = document.querySelector("#currentTemp");
        temperatureElement.innerHTML = 19;
      }

      let fahrenheitLink = document.querySelector("#fahrenheit-link");
      fahrenheitLink.addEventListener("click", convertToFahrenheit);

      let celsiusLink = document.querySelector("#celsius-link");
      celsiusLink.addEventListener("click", convertToCelsius);

      function showTemperature(response) {
        let temperature = Math.round(response.data.main.temp);
        console.log(temperature);
        console.log(response);
        let city = response.data.name;
        let message = `${name}`;
        let h1 = document.querySelector("h1");
        h1.innerHTML = message;
      }

      let apiKey = "59ee4591990d1ea0e068edfbc69866c6";
      let units = "metric";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

      axios.get(apiUrl).then(showTemperature);