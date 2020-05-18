import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

const Directions = ({destination, origin, onReady}) => (
  <MapViewDirections
    destination={destination}
    origin={origin}
    onReady={onReady}
    apikey="AIzaSyBmOloMwnqeL1cz4TZbYcxvi4qqCNWFB8Q"
    strokeWidth={4}
    strokeColor="#FCCC66"
  />
);

export default Directions;
