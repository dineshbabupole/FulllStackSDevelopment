const cities = {
  mumbai: {
    latitude: 19.0760,
    longitude: 72.8777
  },
  london: {
    latitude: 51.5074,
    longitude: -0.1278
  },
  newyork: {
    latitude: 40.7128,
    longitude: -74.0060
  }
};

document.getElementById("fetchbtn").addEventListener("click", () => {
  let city = document.getElementById("cityinput").value.toLowerCase();

  if (!cities[city]) {
    document.getElementById("weather").innerHTML = "City not in list";
    return;
  }

  let coord = cities[city];
  let url = `https://api.open-meteo.com/v1/forecast?latitude=${coord.latitude}&longitude=${coord.longitude}&current_weather=true`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.current_weather) {
        document.getElementById("weather").innerHTML = `
          <h3>Weather in ${city.charAt(0).toUpperCase() + city.slice(1)}</h3>
          <p>Temperature: ${data.current_weather.temperature} °C</p>
          <p>Windspeed: ${data.current_weather.windspeed} km/h</p>
          <p>Weather Code: ${data.current_weather.weathercode}</p>
        `;
      } else {
        document.getElementById("weather").innerHTML = "Weather data not found";
      }
    })
    .catch(err => {
      console.error(err);
      document.getElementById("weather").innerHTML = "Error fetching weather data";
    });
});
