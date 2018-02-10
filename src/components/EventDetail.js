import React, { Component } from 'react';

export default class EventDetail extends Component{
  constructor(props){
    super(props)

    this.state = {
    flipped: false
    }
  }
    handleClick(){
      this.setState({flipped:!this.state.flipped})
    }
  

  render(){
    const { image, name, url, latitude, longitude, date, start} = this.props

    const displayDate = new Date(date).toLocaleDateString('en-US',{ year: 'numeric', month: 'long', day: 'numeric' });
    return(
      <div className = {`event-detail_container flip-container ${this.state.flipped ? 'flip-container-flip' : ''}`}>
        <div className = 'event-detail_card flipper'>
          <div className="event-detail_card_front">
            <img className = 'event-detail_image' src={image} alt=""/>
            <br></br>
            <div className = 'event-detail_detail'>
              <a href = {url}><h6> {name} </h6></a>
              <p> {displayDate} </p>
              <p onClick={this.handleClick.bind(this)}> Click </p>
            </div>
          </div>
          <div className="event-detail_card_back">
            <div className="event-detail_detail">
              <p >{start}</p> 
              <p onClick={this.handleClick.bind(this)}>Back</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}