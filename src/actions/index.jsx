import axios from 'axios';
import {
  TOKEN, 
  PERSONAL_TOKEN, 
} from '../Key';

const updateEvents = (dispatch, events) => {
  dispatch({
    type: 'UPDATE_EVENTS',
    payload: events
  });
};

export const updateSearch = (text) => {
  console.log(text)
  return {
    type: 'UPDATE_SEARCH',
    payload: text,
  }
}

export const fetchEvents = (city) => {
  var eventArray = [];
  return (dispatch) => {
  axios.get('https://www.eventbriteapi.com/v3/events/search/', {
    params: {
      token: TOKEN,
      categories: '102',
      'location.address': city,
      'location.within': '5mi'
    }
  })
  .then(response => {
    console.log(response)
  .catch(function (error) {
    console.log(error);
  });
  };
};