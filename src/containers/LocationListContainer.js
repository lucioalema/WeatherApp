import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//import { setSelectedCity, setWeather } from './../actions';
import * as actions from './../actions';
import { getWeatherCities, getCity } from './../reducers';
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {
    componentDidMount() {
        const { setWeather, setSelectedCity, cities, city } = this.props;

        setWeather(cities);
        setSelectedCity(city);
    }
    handleSelectedLocation = city => {
        this.props.setSelectedCity(city);
    }
    render() {
        return (
            <div>
                <LocationList
                    cities={this.props.citiesWeather} 
                    onSelectedLocation={this.handleSelectedLocation}
                />      
            </div>
        );
    }
}

LocationListContainer.propTypes = {
    setSelectedCity: PropTypes.func.isRequired,
    setWeather: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    citiesWeather: PropTypes.array,
    city: PropTypes.string.isRequired,
};

// const mapDispatchToProps = dispatch => ({
//     setCity: value => dispatch(setSelectedCity(value)),
//     setWeather: cities => dispatch(setWeather(cities)),
// });

//Es una opcion pero es preferible declarar cada una de las acciones para no exponer todas las acciones
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = state => ({
    citiesWeather: getWeatherCities(state),
    city: getCity(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer);