import React, { Component } from 'react';
import Map from './Map';
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
    const { id, address, image, name, url, location, date, start, end, latitude, longitude } = this.props
    const displayDate = new Date(date).toLocaleDateString('en-US',{ year: 'numeric', month: 'long', day: 'numeric' });
    const startDisplayTime = new Date(start).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric'});

    const endDisplayTime = new Date(end).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric'});

    return(
      <div className = {`event-detail_container flip-container ${this.state.flipped ? 'flip-container-flip' : ''}`}>
        <div className = 'event-detail_card flipper'>
          <div className="event-detail_card_front">
            <img className = 'event-detail_image' src={image} alt=""/>
            <br></br>
            <div className = 'event-detail_detail'>
              <a className = 'event-detail_font' href = {url}><h6> {name} </h6></a>
              <p> {displayDate} </p>
            </div>
            <div className = 'event-detail_link'>
              <p className = 'event-detail_link_font' onClick={this.handleClick.bind(this)}> Details </p>
            </div>
          </div>
          <div className="event-detail_card_back">
            <Map 
              latitude = {latitude}
              longitude = {longitude} 
            />
            <br></br>
            <div className="event-detail_detail">
              <p className = "event-detail_detail_font"> {address.address_1} {address.region}, {address.postal_code}</p>
              <p className = "event-detail_detail_font" >Start Time: {startDisplayTime} | End Time: {endDisplayTime}</p> 
            </div>
             <div className = 'event-detail_link'>
              <p className = 'event-detail_link_font' onClick={this.handleClick.bind(this)}>Back</p>
            </div>
        </div>
      </div>
    </div>
    )
  }
}