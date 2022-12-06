import { Component, setState } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const style = {
    width: '100%',
    height: '100%',
  }

export class MapContainer extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          studios: []
        }
      }

      displayMarkers = () => {
        if (this.props.studios) {
            this.setState({studios: this.props.studios})
            
        return this.state.studios.map((store, index) => {
          return <Marker key={index} id={index} position={{
           lat: store.latitude,
           lng: store.longitude
         }} />
        })
        }
      }

    render() {
      return (
        <Map google={this.props.google} zoom={10}  style={style}>
            
            {this.displayMarkers()}
        </Map>
      );
    }
  }

export default GoogleApiWrapper({
    apiKey: ("AIzaSyA7SCCkx8BeyK13Jo-NDiGPkCDqxjpGt14")
  })(MapContainer)