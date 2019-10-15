import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import transformWeather from '../../services/transformWeather';
import getUrlWeatherByCity from '../../services/getUrlWeatherByCity';
import Location from './Location';
import WeatherData from './WeatherData';
//import {api_weather} from '../../constants/api_url';
import './styles.css';
//import { RAIN } from '../../constants/weather';


// const dataValue = {
//     temperature: 14,
//     weatherState: RAIN,
//     humidity: 80,
//     wind: 11
// }

class WeatherLotacion extends Component{
    constructor(props){
        //console.log('constructor');
        super(props);
        this.state = {
            city: props.city,
            data: null
        }
    }
    // handlePromiseClick = () => {
    //     let promesa = new Promise((resolve, rejected) => {
    //         setTimeout(() => {
    //             resolve('Exitoso');
    //             //rejected('Hubo un error');
    //         }, 2000);
    //     });
    //     console.log('Ahora comienza');
    //     promesa
    //     .then((mensaje) => console.log(mensaje))
    //     .catch((error) => console.log(error))
    //     .finally(() => console.log('Aca termina'));
    // }
    
    
    handleUpdateClick = () =>{
        //console.log('handleUpdateClick');
        const api_weather = getUrlWeatherByCity(this.state.city)
        fetch(api_weather)
            .then(resolve =>{
                //console.log(resolve);
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
        // this.setState({
        //     // city: (this.state.city === 'Salta') ? 'Buenos Aires' : 'Salta',
        //     // data: (this.state.city === 'Salta') ? dataValue : dataValue2
        //     data: dataValue2
        // });
    }
    componentDidMount(){
        //console.log('componentDidMount');
        this.handleUpdateClick();
    }
    componentDidUpdate(){
        //console.log('componentDidUpdate');
    }
    render(){
        //console.log('render');
        const {onWeatherLocationClick} = this.props;
        const {city, data} = this.state;
        return(
            <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
                <Location city={city} />
                {this.state.data ?
                    <WeatherData data={data} /> :
                    // 'Cargando..'
                    <CircularProgress />
                }
                {/* <Button 
                    onClick={this.handleUpdateClick} 
                    variant="outlined" 
                    color="primary">
                    Actualizar
                </Button> */}
                {/* <button onClick={this.handleUpdateClick}>Actualizar</button> */}
                {/* <button onClick={this.handlePromiseClick}>Promise</button> */}
            </div>
        );
    }
}

WeatherLotacion.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
}

export default WeatherLotacion;