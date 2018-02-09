import axios from 'axios';
import {
   TOKEN, 
   PERSONAL_TOKEN
} from '../key';

export const updateSearch = (text) => {
  console.log(text)
  return {
    type: 'UPDATE_SEARCH',
    payload: text,
  }
}

export const fetchEvents = (city) => {
  console.log(TOKEN)
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
    console.log(response);
  });
}
}