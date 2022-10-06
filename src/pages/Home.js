import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import { WEATHER_APP_API_KEY } from "../API_KEYS";
import WeatherCard from '../components/WeatherCard';
import Header from '../components/Header';

// URL for accessing OpenWeatherAPI with Query Params

function Home() {
    // Value stored in state for weather data
    const [weatherData, setWeatherData] = useState({});
    const [searchParams] = useSearchParams();
    const [city, setCity] = useState('Orlando');

    console.log("searchParams", searchParams.get("city"));
    // Cities: Seoul, Chicago, Orlando, Tokyo

    useEffect(() => {
        const cityToQuery = searchParams.get("city") || city;
        setCity(cityToQuery);
        // Query OpenWeatherAPI for weather data
        // make request to OpenWeather based on a city
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${cityToQuery}&appid=${WEATHER_APP_API_KEY}&units=imperial`)
            .then(function (response) {
                setWeatherData(response.data)
            })
            .catch(function (error) {
                console.warn(error);
                setWeatherData({});
            });
        }, []);

    const { cloudiness, currentTemp, highTemp, humidity, lowTemp, weatherType, windSpeed } = useMemo(() => {
        const weatherMain = weatherData.main || {};
        return {
            weatherType: weatherData.weather && weatherData.weather[0].main,
            humidity: weatherMain.humidity,
            currentTemp: weatherMain.temp,
            highTemp: weatherMain.temp_max,
            lowTemp: weatherMain.temp_min,
            cloudiness: weatherData.clouds && weatherData.clouds.all,
            windSpeed: weatherData.wind && weatherData.wind.speed
        };
    }, [weatherData]);

    // Display this weather data in our app
    console.log("state value", weatherData);

    return (
        <div>
            <Header />
            <h1 class="appTitle">Weather App</h1>
            <WeatherCard 
            city={city}
            cloudiness={cloudiness}
            currentTemp={Math.round(currentTemp)}
            highTemp={Math.round(highTemp)}
            humidity={humidity}
            lowTemp={Math.round(lowTemp)}
            weatherType={weatherType}
            windSpeed={windSpeed}
            />
        </div>)
    ;
}

export default Home;