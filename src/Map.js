import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const center = { lat: 55.721859, lng: 13.363881 };

class SimpleMap extends React.Component {
  render() {
    return (
      <Map
        style={{
          dispaly: "block",
          width: "400px",
          height: "400px",
          background: "grey"
        }}
        google={this.props.google}
        initialCenter={center}
        zoom={17}
      >
        <Marker name={"Landins Blommor"} />
      </Map>
    );
  }
}

const LoadingContainer = props => <div>Fancy loading container!</div>;
export default GoogleApiWrapper({
  apiKey: "AIzaSyB08aDXES0u6JH1kTJCVgHEJX5PTf40evY",
  LoadingContainer: LoadingContainer
})(SimpleMap);
