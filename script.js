console.log('javascript connected')


function getWeather(city) {
    fetch("http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={94f64ef5fab0b721c754f9bf1fbb8703")
      .then(response => response.json())
      .then(data => {
        if (data.cod === '404') {
          showError(data.message);
        } else {
          showWeather(data);
        }
      })
      .catch(error => {
        console.log('Error:', error);
        showError('Failed to retrieve weather data. Please try again later.');
      });
  }