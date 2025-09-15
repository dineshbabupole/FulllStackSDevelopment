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

$(document).ready(function() {
  $("#fetchbtn").click(function() {
    let city = $("#cityinput").val().toLowerCase();

    if (!cities[city]) {
      $("#weather").html("City not in list");
      return;
    }

    let coord = cities[city];
    let url = `https://api.open-meteo.com/v1/forecast?latitude=${coord.latitude}&longitude=${coord.longitude}&current_weather=true`;

    $.getJSON(url)
      .done(function(data) {
        if (data.current_weather) {
          $("#weather").html(`
            <h3>Weather in ${city.charAt(0).toUpperCase() + city.slice(1)}</h3>
            <p>Temperature: ${data.current_weather.temperature} °C</p>
            <p>Windspeed: ${data.current_weather.windspeed} km/h</p>
            <p>Weather Code: ${data.current_weather.weathercode}</p>
          `);
        } else {
          $("#weather").html("Weather data not found");
        }
      })
      .fail(function() {
        $("#weather").html("Error fetching weather data");
      });
  });
});
