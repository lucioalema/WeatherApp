import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import './styles.css';
import { CLOUD, SUN, RAIN, SNOW, THUNDER, DRIZZLE } from '../../../constants/weather';

const icons = {
    [CLOUD]: "cloud",
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [THUNDER]: "day-thnderstore",
    [DRIZZLE]: "day-showers",
}

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    const sizeIcon = "3x";
    if (icon)
        return <WeatherIcons className="wicon" name={icon} size={sizeIcon} />
    else
        return <WeatherIcons className="wicon" name={SUN} size={sizeIcon} />
}

const WeatherTemperature = ({temperature, weatherState}) => (
    <div className="weatherTemperatureCont">
        {getWeatherIcon(weatherState)}
        <span className="temperature">{temperature}</span>
        <span className="temperatureType">C°</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
}
    
export default WeatherTemperature;