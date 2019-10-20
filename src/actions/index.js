import getUrlForecastByCity from './../services/getUrlForecastByCity';
import transformForecast from './../services/transformForecast';
import getUrlWeatherByCity from './../services/getUrlWeatherByCity';
import transformWeather from './../services/transformWeather';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';
const setCity = value => ({ type: SET_CITY, value });
const setForecastData = value => ({ type: SET_FORECAST_DATA, value });

const getWeatherCity = value => ({ type: GET_WEATHER_CITY, value });
const setWeatherCity = value => ({ type: SET_WEATHER_CITY, value });


export const setSelectedCity = value => {
    return (dispatch, getState) => {
        const api_forecast = getUrlForecastByCity(value)

        //Activar en el estado un indicador de busqueda de datos
        dispatch(setCity(value));

        const state = getState();
        const date = state.cities[value] && state.cities[value].forcastDataDate;

        const now = new Date();

        if (date && (now - date) < 1 * 60 * 1000){
            return;
        }

        return fetch(api_forecast).then(
            resolve => resolve.json())
        .then(data =>{
            const forecastData = transformForecast(data);
            //this.setState({ forecastData });

            //modificar el estado con el resultado de la promise (fetch)
            dispatch(setForecastData({city: value, forecastData}));
        })
        .catch(rejected => {
            console.log(rejected);
        });
    }
};

export const setWeather = value => {
    return dispatch => {
        value.forEach(city => {
            dispatch(getWeatherCity(city));

            const api_weather = getUrlWeatherByCity(city)
            fetch(api_weather).then(
                resolve => resolve.json())
            .then(data =>{
                const weather = transformWeather(data);
                dispatch(setWeatherCity({city, weather}))
            })
            .catch(rejected => {
                console.log(rejected);
            })
        });
    }
}