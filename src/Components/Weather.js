import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectDisplay } from '../redux/slices/displayCountrySlice';

const Weather = () => {
  const display = useSelector(selectDisplay);
  const [weather, setWeather] = useState();
  let latitude = display.capitalInfo.latlng[0];
  let longitude = display.capitalInfo.latlng[1];

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/current.json',
      params: { q: `${latitude},  ${longitude}` },
      headers: {
        'X-RapidAPI-Key': 'f8d2925c07msh0ab457c341059b7p1e5832jsn25b1472eac8c',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setWeather(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {!weather && <h3>Please wait...</h3>}
      <table className="overview-table">
        <tr>
          <td>Conditions: </td>
          <td>{weather ? weather.current.condition.text : ''}</td>
        </tr>
        <tr>
          <td>Temperature: </td>
          <td>{weather ? weather.current.temp_f : ''} degrees Fahrenheit</td>
        </tr>
        <tr>
          <td>Feels Like: </td>
          <td>
            {weather ? weather.current.feelslike_f : ''} degrees Fahrenheit
          </td>
        </tr>
        <tr>
          <td>Humidity: </td>
          <td>{weather ? `${weather.current.humidity}%` : ''}</td>
        </tr>
        <tr>
          <td>Wind Speed: </td>
          <td>
            {weather
              ? `${weather.current.wind_mph} mph ${weather.current.wind_dir}`
              : '?'}
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Weather;
