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

export const updateCity = (text) => {
  return {
    type: 'UPDATE_CITY',
    payload: text,
  }
}

export const fetchEvents = (city) => {
  var eventArray = [];
  console.log(city)
  return (dispatch) => {
  axios.get('https://www.eventbriteapi.com/v3/events/search/', {
    params: {
      token: TOKEN,
      categories: '102',
      'location.address': city,
      'location.within': '1mi',
      'sort_by': 'date',
      'q': 'tech'
    }
  })
  .then(response => {
    const {events} = response.data;
    events.forEach(event => {
      const {venue_id} = event;
      axios.get(`https://www.eventbriteapi.com/v3/venues/${venue_id}/`, {
        params: {
          token: PERSONAL_TOKEN
        },
      })
      .then(response => {
        event.latitude = response.data.latitude;
        event.longitude = response.data.longitude;
        event.address = response.data.address;
        eventArray.push(event)
      })
      .then(() => {
        setTimeout(() => updateEvents(dispatch, eventArray),0)
      })
      .catch(function (error) {
        console.log("error")
        console.log(error);
      });
    })   
  })
  .catch(function (error) {
    console.log(error);
  });
  };
};