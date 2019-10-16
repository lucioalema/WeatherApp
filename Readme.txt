Crear la aplicación
npx create-react-app weather-app
Crear los componentes: 
- WeatherLocation
- WeatherData
- WeatherTemperature
- WeatherExtraInfo
- Location

Agregar el componente WeatherLocation a App.js


Agregarle propiedades a WeatherExtraInfo

npm install --save react-weathericons
https://www.npmjs.com/package/react-weathericons
https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.9/css/weather-icons.min.css

getWeatherIcon
debugger

Validaciones con PropTypes
npm install --save prop-types
WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
}

Agregar la extension Reactjs code snippets
rpt
ptnr ptsr

https://es.reactjs.org/docs/typechecking-with-proptypes.html

refactorizar carpetas
componentes
    WeatherData
        index.js
        WeatherExtraInfo.js
        WeatherTemperature.js
    WeatherLocation
        index.js

subir tres niveles en las contantes.


Agregar styles.css
agregar clases
.weatherDataCont
.weatherExtraInfoCont
.weatherTemperatureCont


Agregar mas css

Agregar fuenta Roboto
<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
agregar style.css a WeatherLocation

cssmatic
css-tricks

double destructuring
WeatherData = ({data})
const { temperature, weatherState, humidity, wind } = data;

WeatherData = ({data: { temperature, weatherState, humidity, wind }})

PropType.Shape en WeatherData
Transformar WeatherLocation en una clase

Agregar un boton actualizar y crear una funcion handleUpdateClick
Luego agregar el constructor e ingresar el state
Probar cambiar en el handleUpdateClick this.state = {city...} y ver que no funciona
agregar this.setState({data: data2});

Registrarse en https://openweathermap.org/appid
obtener un api key

hacer un fetch en handleUpdateClick
const location = 'Ciudad Autónoma de Buenos Aires,ar'
const api_key = '07e4d7136ccd807bf21b6602fa57387a';
const url_base_weather = 'http://api.openweathermap.org/data/2.5/weather'

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;
fetch(api_weather);

Explicar promise

fetch(api_weather).then(resolve =>{
    return resolve.json();
}).then(data => {
    console.log(data);
    debugger;
});

--**--
http://api.openweathermap.org/data/2.5/weather&units=metric
npm install convert-units --save


SOLID = {
    *S: Single responsibility principle,
    O: Open/closed principle,
    L: Liskov substitution principle,
    I: Interface segregation principle,
    D: Dependency inversion principle
}

Crear carpeta services en el root.
Crear un archivo transformWeather para desacoplar la clase
y otro api_url

agregar las constantes

explicar el ciclo de vida en react con console.log() de cada uno de estos
constructor, render, componentDidMount, componentDidUpdate

Fases:
-Montaje
    -constructor: iniciacion del estado local (this.state) o bind de funciones (si es que no se usa arrow function)
    -render: unico metodo requerido y sirve para generar los elementos de React que se mostraran en pantall
    -componentDidMount: es invocado luego que el componente es insertado en el arbol de componentes del DOM
-Actualizacion
    -render
    -componentDidUpdate: es invocado imediatamente despues que ocurre la Actualizacion, compara los valores antes y despues de la peticion
-Desmontaje
    -componentWillUnmount

Alternativamente:
-Manejo de errores

http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

Virtual DOM

OneWayData Flow
                    Parent
        Child1                  Child2

Child 1.a   Child 1.b


invocar al handleUpdateClick en el componentDidMount
cambiar en el chrome, network slow 3G

Cambiar el constructor de WeatherLocation con props y agregarle city
crear el proptype de city
agregarle las propiedades a WeatherLocation desde App.js
Crear getUrlWeatherByCity e invocarla desde handleUpdateClick
Crear el LocationList
y agregar varias WeatherLocation
para cambiar el icono, en transformWeather verificar el id y devolver una constantes

crear strToComponents en LocationList y cargar un listado de ciudades desde App


Burbujeo de eventos:
Agregar onWeatherLocationClick a WeatherLocation
Transformar LocationList en arrow Function multilinea 
Transformar App en class Component

Instalar npm install --save react-flexbox-grid
Cambiar en App.js por Grid, Row, Column
Agregar css
Agregar PropTypes

Agregar AppBar con Material-ui

Agregar el componente ForecastExtended
Agregar un estado city en App.js y setState en el handleSelectedLocation
Manejo del estado inicial de city (opcion 2: null)
Truthy y Falsy
https://developer.mozilla.org/es/docs/Glossary/Truthy

ForecastItem
array de componentes
Crear un fetch para el forecast
Crear una funcion para transformar el forecast
npm install moment --save


Redux
instalar redux, react-redux y la extension de chrome redux dev tools
crear el store y dispatch en app.js
crear el action y pasarselo al dispatch
refactorizar en una carpeta actions y store
Agregar react-redux en index.js principal
