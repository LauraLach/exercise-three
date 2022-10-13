import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faCloud, faSnowflake, faSun, faUmbrella, faWind } from '@fortawesome/free-solid-svg-icons';

function WeatherIcon({ weatherType }) {
    switch(weatherType) {
        case 'Clouds':
            return <FontAwesomeIcon icon={faCloud} />;
        case 'Clear':
        case 'Sun':
            return <FontAwesomeIcon icon={faSun} />;
        case 'Rain':
        case 'Drizzle':
            return <FontAwesomeIcon icon={faUmbrella} />;
        case 'Snow':
            return <FontAwesomeIcon icon={faSnowflake} />;
        case 'Thunderstorm':
            return <FontAwesomeIcon icon={faBolt} />;
        case 'Atmosphere':
            return <FontAwesomeIcon icon={faWind} />;
        default:
            return null;
    }
}
export default WeatherIcon;