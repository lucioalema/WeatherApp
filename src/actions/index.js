import getUrlForecastByCity from '../services/getUrlForecastByCity';
import transformForecast from '../services/transformForecast';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
const setCity = value => ({ type: SET_CITY, value });
const setForecastData = value => ({ type: SET_FORECAST_DATA, value });

export const setSelectedCity = value => {
    return dispatch => {
        const api_forecast = getUrlForecastByCity(value)

        //Activar en el estado un indicador de busqueda de datos
        dispatch(setCity(value));

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