import React from 'react';
import PropTypes from 'prop-types';
import WeatherLotacion from './WeatherLocation';

const strToComponents = cities => (
    cities.map(city => <WeatherLotacion key={city} city={city} />)
);

const LocationList = ({cities}) => {
    console.log(cities);
    return (
    <div>
        {strToComponents(cities)}
    </div>
    )
};
LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
};

export default LocationList;