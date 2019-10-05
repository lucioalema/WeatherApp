import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';

const WeatherData = () => (
    <div>
        <WeatherTemperature 
            temperature={14}
            weatherStatus={'rain'}
        />
        <WeatherExtraInfo 
            humidity={92}
            wind={10}
        />
    </div>
);

export default WeatherData;