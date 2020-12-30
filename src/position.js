import Spinner from './spinnerDisplay'
import React from 'react';
import SeasonDisplay from './seasonDisplay'
//import "semantic-ui-css/semantic.min.css";

class Position extends React.Component{  
    state = { lat: null, errorMessage: ''};


componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
        position => this.setState({lat:position.coords.latitude}),
        err => this.setState({errorMessage:err.message})
    );
}


render() {
    if (this.state.errorMessage && !this.state.lat) {
        return <div>Error: {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && this.state.lat) {
        return <SeasonDisplay lat={this.state.lat}/>
    }
return     <div><Spinner /></div>

}
}
export default Position;