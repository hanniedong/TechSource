import React, { Component } from 'react';
import EventDetail from './EventDetail';

export default class EventList extends Component{
  
  constructor(props){
    super(props)
  }

  renderEvents(){
    const { events } = this.props;
    
    if (events){
    return events.map((event)=> {
      if(event.logo){
        return(
          <EventDetail 
            key = {event.id}
            name={event.name.text}
            image= {event.logo.url}
            url={event.url}
            latitude={event.latitude}
            longitude={event.longitude}
            start = {event.start.local}
            end = {event.end.local}
            address = {event.address}
            
            
            date={event.start.local}
          />
        )
      }
    })
    }
  }

  render(){
    return(
      <div className = 'container'>
        {this.renderEvents()}
      </div>
    )
  }
}