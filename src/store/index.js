import { createStore } from 'redux';
import { city } from './../reducers/city';

const initialState = {
    city: 'Ciudad Autónoma de Buenos Aires,ar'
};

export const store = createStore(city, initialState, 
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// export const store = createStore(() => {}, initialState, 
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());