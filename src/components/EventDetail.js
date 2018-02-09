import React, { Component } from 'react';

export default class EventDetail extends Component{
  constructor(props){
    super(props)
  }

  render(){
    const { image, name, url, latitude, longitude, date} = this.props
    const displayDate = new Date(date).toLocaleDateString('en-US',{ year: 'numeric', month: 'long', day: 'numeric' });
    return(
      <div className = 'event-detail-container'>
        <h4> {name} </h4>
        <p> {displayDate} </p>
        <img src={image} alt=""/>
        <br></br>
        <a href = {url}> Link </a>
      </div>
    )
  }
}