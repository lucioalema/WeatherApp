import React, { Component } from 'react';
//import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
//import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';
import LocationListContainer from './containers/LocationListContainer';
//import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
//import { setCity } from './actions';
import './App.css';

const cities = [
  'Ciudad Autónoma de Buenos Aires,ar',
  'Cordoba,ar',
  'Salta,ar',
  'Ushuaia,ar',
  'Madrid,es',
  'New York,us'
];

class App extends Component {
  // constructor(){
  //   super();

  //   this.state = {
  //     city: null
  //   };
  // }
  // handleSelectedLocation = city => {
  //   this.setState({city});
  //   console.log(`handleSelectedLocation ${city}`);
  //   this.props.setCity(city);
  //   //const action = {type: 'setCity', value: city};
  //   //store.dispatch(setCity(city));
  // }
  render(){
    //const { city } = this.state;
    return (
      <Grid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography color='inherit'>
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationListContainer
              cities={cities}
            />
            {/* <LocationList 
              cities={cities} 
              onSelectedLocation={this.handleSelectedLocation}
            /> */}
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="detail">
                <ForecastExtendedContainer />
                {/* {!city ?
                  null :
                  
                  <ForecastExtended city={city} />
                } */}
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;

// App.propTypes = {
//   setCity: PropTypes.func.isRequired,
// }

//const mapDispatchToPropsActions = () => {};
// const mapDispatchToProps = dispatch => ({
//   setCity: value => dispatch(setCity(value))
// });

//export default connect(null, mapDispatchToProps)(App);

//const AppConnected = connect(null, mapDispatchToProps)(App);

//export default AppConnected;