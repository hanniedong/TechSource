import {combineReducers} from 'redux';
import eventsReducer from './eventsReducer.js';

const rootReducer = combineReducers({
    data: eventsReducer,
});

export default rootReducer; 