import React, { Component } from 'react'
import { withGoogleMap, GoogleMap } from 'react-google-maps'
 import { PlaceMarker } from './PlaceMarker'

const ViewMap = withGoogleMap(props => (
  <GoogleMap
    defaultCenter={props.center}
    defaultZoom={props.zoom} >
    {props.place}
  </GoogleMap>
));
 
export default class Map extends Component {
  constructor(props) {
    super(props)
 
    this.zoom = 15
 
  }
 
  render() {
    const {latitude, longitude} = this.props;
    const place = [<PlaceMarker key = {latitude} lat={latitude} lng={longitude} />]
    return(
      <div className = 'map'>
        <ViewMap
          center={{
            lat: Number(latitude),
            lng: Number(longitude)
          }}
          place = {place}
          zoom={this.zoom}
          containerElement={
            <div style={{ height: `100%`, width: `100%` }} />
          }
          mapElement={
            <div style={{ height: `100%`, width: `100%`  }} />
          }
        />
      </div>
    );
  }
}