import React, { Component } from 'react';
import EventDetail from './EventDetail';

export default class EventList extends Component{
  
  constructor(props){
    super(props)
  }

  renderEvents(){
    let { events } = this.props;
    return events.map((event)=> {
      return(
        <EventDetail 
          key = {event.id}
          name={event.name.text}
          image= {event.logo.url}
          url={event.url}
          latitude={event.latitude}
          longitude={event.longitude}
          date={event.start.local}
        />
      )
    })
   }

  render(){
    return(
      <div className = 'container'>
        {this.renderEvents()}
      </div>
    )
  }
}