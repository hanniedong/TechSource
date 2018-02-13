import React, { Component } from 'react'
import { withGoogleMap, GoogleMap } from 'react-google-maps'
 
const ViewMap = withGoogleMap(props => (
  <GoogleMap
    defaultCenter={props.center}
    defaultZoom={props.zoom} />
));
 
export default class Map extends Component {
  constructor(props) {
    super(props)
 
    this.zoom = 15
 
  }
 
  render() {
    const {latitude, longitude} = this.props;
    console.log(this.props)
    return(
      <div style={{width: `300px`, height: `200px`}}>
        <ViewMap
          center={{
            lat: Number(this.props.latitude),
            lng: Number(this.props.longitude)
          }}
          zoom={this.zoom}
          containerElement={
            <div style={{ height: `100%` }} />
          }
          mapElement={
            <div style={{ height: `100%` }} />
          }
        />
      </div>
    );
  }
}