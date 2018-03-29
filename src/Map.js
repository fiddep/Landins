import React from "react";
import GoogleMapReact from "google-map-react";

export default () => (
  <div className="googlemaps">
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyBE1IWM6RkeudXE1g0iaWckQtRBSI16EGU" }}
      defaultCenter={{ lat: 55.721859, lng: 13.363881 }}
      defaultZoom={4}
    >
      <AnyReactComponent />
    </GoogleMapReact>
  </div>
);

const AnyReactComponent = ({ text }) => <div>{text}</div>;
