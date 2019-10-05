import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

const WeatherLotacion = () => (
    <div>
        <Location city={"Buenos Aires"} />
        <WeatherData />
    </div>
);

export default WeatherLotacion;