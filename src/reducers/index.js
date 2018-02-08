import {combineReducers} from 'redux';
import EventsReducer from './EventsReducer';

const rootReducer = combineReducers({
    data: EventsReducer,
});

export default rootReducer; 