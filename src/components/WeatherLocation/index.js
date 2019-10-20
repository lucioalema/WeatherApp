import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import transformWeather from '../../services/transformWeather';
import getUrlWeatherByCity from '../../services/getUrlWeatherByCity';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

// componentDidMount(){
//     const api_weather = getUrlWeatherByCity(this.state.city)
//     fetch(api_weather).then(
//         resolve => resolve.json())
//     .then(data =>{
//         const newWeather = transformWeather(data);
//         this.setState({
//             city: data.name,
//             data: newWeather
//         });
//     })
//     .catch(rejected => {
//         console.log(rejected);
//     })
// }

const WeatherLotacion = ({ onWeatherLocationClick, city, data }) => (
    <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
        <Location city={city} />
        {data ?
            <WeatherData data={data} /> :
            <CircularProgress />
        }
    </div>
);

WeatherLotacion.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.number.isRequired,
    }),
}

export default WeatherLotacion;