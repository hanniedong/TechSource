import React, { Component } from 'react';

export default class EventDetail extends Component{
  constructor(props){
    super(props)
  }

  render(){
    const { image, name, url, latitude, longitude, date} = this.props
    const displayDate = new Date(date).toLocaleDateString('en-US',{ year: 'numeric', month: 'long', day: 'numeric' });
    return(
      <div className = 'event-detail_container'>
        <div className = 'event-detail_card'>
          <img className = 'event-detail_image' src={image} alt=""/>
          <br></br>
          <div className = 'event-detail_detail'>
            <a href = {url}><h6> {name} </h6></a>
            <p> {displayDate} </p>
          </div>
        </div>
      </div>
    )
  }
}