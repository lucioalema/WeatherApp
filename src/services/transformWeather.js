import convert from 'convert-units';
import {
    CLOUD,
    SUN,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE
} from './../constants/weather'

const getTemperature = kelvin => {
    return Number(convert(kelvin).from('K').to('C').toFixed(0));
}

const getWind = speed => {
    return Number(convert(speed).from('m/s').to('km/h').toFixed(1));
}

const getWeatherState = weather => {
    const {id} = weather
    if (id < 300){
        return THUNDER;
    }
    else if (id < 400){
        return DRIZZLE;
    }
    else if (id < 600){
        return RAIN;
    }
    else if (id < 700){
        return SNOW;
    }
    else if (id === 800){
        return SUN;
    }
    else if (id > 800){
        return CLOUD;
    }
}

const transformWeather = weatherData => {
    const {temp, humidity} = weatherData.main;
    const temperature = getTemperature(temp);
    const weatherState = getWeatherState(weatherData.weather[0]);
    const wind = getWind(weatherData.wind.speed);

    const data = {
        temperature,
        weatherState,
        humidity,
        wind
    }
    return data;
}

export default transformWeather;