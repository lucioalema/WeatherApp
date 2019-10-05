import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';

const icons = {
    rain: 'rain',
    sun: 'day-sunny',
    cloud: 'cloud',
    cloudy: 'cloudy',
}

const getWeatherIcon = weatherStatus => {
    const icon = icons[weatherStatus];
    if (icon)
        return <WeatherIcons name={icon} size={"2x"} />
    else
        return <WeatherIcons name={'day-sunny'} size={"2x"} />
}

const WeatherTemperature = ({temperature, weatherStatus}) => (
    <div>
        {getWeatherIcon(weatherStatus)}
        <span>{temperature} {"°C"}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherStatus: PropTypes.string.isRequired,
}
    
export default WeatherTemperature;