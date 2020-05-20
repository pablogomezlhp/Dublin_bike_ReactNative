import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

const Directions = ({destination, origin, onReady}) => (
  <MapViewDirections
    destination={destination}
    origin={origin}
    onReady={onReady}
    apikey="AIzaSyB1O8amubeMkw_7ok2jUhtVj9IkME9K8sc"
    strokeWidth={5}
    strokeColor="#3e94ff"
  />
);

export default Directions;
