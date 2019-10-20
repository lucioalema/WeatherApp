import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css';

const renderForecastItemDays = (forecastData) => {
    return forecastData.map(forecast => (
        <ForecastItem 
            key={`${forecast.weekDay}${forecast.hour}`}
            weekDay={forecast.weekDay}
            hour={forecast.hour}
            data={forecast.data}
        />
    ));
}

const renderProgress = () => {
    return <CircularProgress />
}

const ForecastExtended = ({ city, forecastData }) => (
    <div>
        <h2 className="forecastExtended-title">Pronóstico extendido para {city}</h2>
        {
            forecastData ?
            renderForecastItemDays(forecastData) :
            renderProgress()
        }
    </div>
)

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array,
}

export default ForecastExtended;