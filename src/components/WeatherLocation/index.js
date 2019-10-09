import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';


const dataValue = {
    temperature: 14,
    weatherState: 'rain',
    humidity: 80,
    wind: 11
}

const location = 'Buenos Aires,ar';
const api_key = '07e4d7136ccd807bf21b6602fa57387a';
const url_base_weather = 'http://api.openweathermap.org/data/2.5/weather'
const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;

// const dataValue2 = {
//     temperature: 26,
//     weatherState: 'day-sunny',
//     humidity: 10,
//     wind: 5
// }

// const WeatherLotacion = () => {
//     return(
//         <div className="weatherLocationCont">
//             <Location city={"Buenos Aires"} />
//             <WeatherData data={data}
//             />
//         </div>
//     )
// };

class WeatherLotacion extends Component{
    constructor(){
        super();
        this.state = {
            city: 'Buenos Aires',
            data: dataValue
        }
    }
    handlePromiseClick = () => {
        let promesa = new Promise((resolve, rejected) => {
            setTimeout(() => {
                resolve('Exitoso');
                //rejected('Hubo un error');
            }, 2000);
        });
        console.log('Ahora comienza');
        promesa
        .then((mensaje) => console.log(mensaje))
        .catch((error) => console.log(error))
        .finally(() => console.log('Aca termina'));
    }
    
    getData = weatherData => {
        // const data = {
        //     temperature:  Number((weatherData.main.temp - 273).toFixed(0)),
        //     weatherState: 'cloud',
        //     humidity: weatherData.main.humidity,
        //     wind: Number((weatherData.wind.speed * 3.6).toFixed(1))
        // }
        const {temp, humidity} = weatherData.main;
        const temperature = Number((temp - 273).toFixed(0));
        const weatherState = 'cloud';
        const wind = Number((weatherData.wind.speed * 3.6).toFixed(1));

        const data = {
            temperature,
            weatherState,
            humidity,
            wind
        }
        return data;
    }
    handleUpdateClick = () =>{
        console.log('handleUpdateClick');
        fetch(api_weather)
            .then(resolve =>{
                //console.log(resolve);
                return resolve.json();
                }).then(data =>{
                    this.setState({
                        city: data.name,
                        data: this.getData(data)
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
    render(){
        return(
            <div className="weatherLocationCont">
                <Location city={this.state.city} />
                <WeatherData data={this.state.data}
                />
                <button onClick={this.handleUpdateClick}>Actualizar</button>
                <button onClick={this.handlePromiseClick}>Promise</button>
            </div>
        );
    }
}

export default WeatherLotacion;