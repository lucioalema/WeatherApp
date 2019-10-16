import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import {Grid, Row, Col} from 'react-flexbox-grid';
//import logo from './logo.svg';
import './App.css';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import { setCity } from './actions';
import { store } from './store';

const cities = [
  'Ciudad Autónoma de Buenos Aires,ar',
  'Cordoba,ar',
  'Salta,ar',
  'Ushuaia,ar',
  'Madrid,es',
  'New York,us'
];


class App extends Component {
  constructor(){
    super();

    this.state = {
      city: null
    };
  }
  handleSelectedLocation = city => {
    this.setState({city});
    console.log(`handleSelectedLocation ${city}`);
    //const action = {type: 'setCity', value: city};
    store.dispatch(setCity(city));
  }
  render(){
    const { city } = this.state;
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
            <LocationList 
              cities={cities} 
              onSelectedLocation={this.handleSelectedLocation}
            />
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="detail">
                {!city ?
                  null :
                  // <h1>No se seleccionó ciudad</h1> :
                  <ForecastExtended city={city} />
                }
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
