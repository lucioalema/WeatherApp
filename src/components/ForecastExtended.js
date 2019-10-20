import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import getUrlForecastByCity from '../services/getUrlForecastByCity';
import transformForecast from '../services/transformForecast';
import './styles.css';

class ForecastExtended extends Component{
    constructor() {
        super();
        this.state = {
            forecastData: null
        }
    }

    componentDidMount() {
        this.updateCity(this.props.city);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.city !== this.props.city) {
            this.setState({forecastData: null});
            this.updateCity(nextProps.city);
        }
    }
    

    updateCity = city => {
        const api_forecast = getUrlForecastByCity(city)
        fetch(api_forecast)
            .then(resolve =>{
                return resolve.json();
                }).then(data =>{
                    console.log(data);
                    const forecastData = transformForecast(data);
                    console.log(forecastData);
                    this.setState({
                        forecastData
                    });
                })
            .catch(rejected => {
                console.log(rejected);
            })
    }

    renderForecastItemDays(forecastData) {
        return forecastData.map(forecast => (
            <ForecastItem 
                key={`${forecast.weekDay}${forecast.hour}`}
                weekDay={forecast.weekDay}
                hour={forecast.hour}
                data={forecast.data}
            />
        ));
    }

    renderProgress() {
        return <CircularProgress />
    }

    render (){
        const { forecastData } = this.state;
        const { city } = this.props;
        return (
            <div>
                <h2 className="forecastExtended-title">Pronóstico extendido para {city}</h2>
                {
                    forecastData ?
                    this.renderForecastItemDays(forecastData) :
                    this.renderProgress()
                }
            </div>)
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;