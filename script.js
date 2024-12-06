

document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('form');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputBtn = document.querySelector('#search-field');
    const inputCity = inputBtn.value;
    console.log(`details for ${inputCity}:-`);
    getWeatherInfo(inputCity);
  });

  async function getWeatherInfo(cityName) {
    try {

      const url = `http://api.weatherapi.com/v1/current.json?key=0b50e3f195ad4a2cb76102322241911&q=${cityName}&aqi=no`; //url to fetch data from API

      const response = await fetch(url, {                                   //fetch() will gwt data form url.
        mode: 'cors',                                                   // Default value
      });
      const weatherData = await response.json();

      console.log(weatherData);                                        //data cannot be read directly, it os converted to json
      const temperatureElement = document.querySelector('#number');
      const locationElement = document.querySelector('#time-location p');
      const timeDateElement = document.querySelector('#time-location span');
      const conditionElement = document.querySelector('#condition p');

      temperatureElement.innerHTML = weatherData.current.temp_c;
      locationElement.innerHTML = weatherData.location.country;
      timeDateElement.innerHTML = weatherData.location.localtime;
      conditionElement.innerHTML = weatherData.current.condition.text;

      // temperatureElement.innerHTML = '100';

    }
    catch (error) {
      console.error('cannot get data');
    }
  }







});