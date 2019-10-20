import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import transformWeather from '../../services/transformWeather';
import getUrlWeatherByCity from '../../services/getUrlWeatherByCity';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

class WeatherLotacion extends Component{
    constructor(props){
        super(props);
        this.state = {
            city: props.city,
            data: null
        }
    }
    
    handleUpdateClick = () =>{
        const api_weather = getUrlWeatherByCity(this.state.city)
        fetch(api_weather)
            .then(resolve =>{
                return resolve.json();
                }).then(data =>{
                    const newWeather = transformWeather(data);
                    this.setState({
                        city: data.name,
                        data: newWeather
                    });
                })
            .catch(rejected => {
                console.log(rejected);
            })
    }
    componentDidMount(){
        this.handleUpdateClick();
    }
    componentDidUpdate(){
    }
    render(){
        const {onWeatherLocationClick} = this.props;
        const {city, data} = this.state;
        return(
            <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
                <Location city={city} />
                {this.state.data ?
                    <WeatherData data={data} /> :
                    <CircularProgress />
                }
            </div>
        );
    }
}

WeatherLotacion.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
}

export default WeatherLotacion;