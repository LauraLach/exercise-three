import React from "react";
import WeatherIcon from "./WeatherIcon"

function WeatherCard( {city, cloudiness, currentTemp, highTemp, humidity, lowTemp, weatherType, windSpeed} ) {
    return (
        <div className="weatherCard">
            <h2>{city}</h2>
            <div class="data">
                <div class="mainData">
                    <p class="currentTemp">{currentTemp}&#8457;</p>
                    <div class="currentWeatherTypeAndIcon">
                        <p class="currentWeatherType">{weatherType}</p>
                        <WeatherIcon class="weatherTypeIcon" weatherType={weatherType}/>
                    </div>
                </div>
                <div class="miscData">
                    <p>High: {highTemp}&#8457;</p>
                    <p>Low: {lowTemp}&#8457;</p>
                    <p>Cloudiness: {cloudiness}%</p>
                    <p>Humidity: {humidity}%</p>
                    <p>Wind: {windSpeed} mph</p>
                </div>
            </div>
        </div>
    );
}

export default WeatherCard;