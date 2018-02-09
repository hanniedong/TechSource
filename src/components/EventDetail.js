import React, { Component } from 'react';

export default class EventDetail extends Component{
  constructor(props){
    super(props)
  }

  render(){
    const { image, name, url, latitude, longitude, date} = this.props

    return(
      <div>
        <h4> {name} </h4>
        <p> {date} </p>
        <img src={image} alt=""/>
        <a href = {url} />

      </div>
    )
  }
}