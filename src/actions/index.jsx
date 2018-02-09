import axios from 'axios';
import {
   TOKEN, 
   PERSONAL_TOKEN
} from '../key';

const updateEvents = (dispatch, events) =>{
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
      'location.within': '15mi'
    }
  })
  .then(response => {
    eventArray.push(response.data);
  })
  .then(() => {
    setTimeout(()=>updateEvents(dispatch,eventArray),0)
  })
  .catch(function (error) {
    console.log("error")
    console.log(error);
  });
  };
};