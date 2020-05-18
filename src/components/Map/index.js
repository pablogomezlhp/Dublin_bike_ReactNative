import React, {Component, Fragment} from 'react';
import MapView, {Marker} from 'react-native-maps';
import results from '../../services/Api';
import {View, Image} from 'react-native';
import Search from '../Search';
import Directions from '../Directions';

import backImage from '../../assets/back.png';
import bike from '../../assets/bike.png';

import {
  Back,
  LocationBox,
  LocationText,
  LocationTimeBox,
  LocationTimeText,
  LocationTimeTextSmall,
  ContainerD,
  TypeTitle,
  TypeDescription,
  TypeDescription1,
  TypeDescription2,
  TypeImage,
  Text2,
} from './styles';

export default class Map extends Component {
  constructor() {
    const resultt = [];

    results[0].map((stations) => {
      const resultado = stations;
      resultt.push(resultado);
    }),
      super();
    this.state = {
      stations: resultt,

      stationStatusArray: [],
    };
  }

  state = {
    region: null,
    station: null,
    destination: null,
    duration: null,
    distance: null,
  };
  async componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      ({coords: {latitude, longitude}}) => {
        this.setState({
          region: {
            latitude: 53.3834,
            longitude: -8.2177501,
            latitudeDelta: 0.9943,
            longitudeDelta: 0.9934,
          },
        });
      },
      () => {},
      {
        timeout: 2000,
        enableHighAccuracy: true,
        maximumAge: 1000,
      },
    );
  }
  handleLocationSelected = (data, {geometry}) => {
    const {
      location: {lat: latitude, lng: longitude},
    } = geometry;

    this.setState({
      destination: {
        latitude,
        longitude,
        title: data.structured_formatting.main_text,
      },
    });
  };

  handleBack = () => {
    this.setState({destination: null});
  };
  render() {
    const {region, destination, duration, location, distance} = this.state;
    console.log(destination);
    return (
      <View style={{flex: 1}}>
        <MapView
          style={{flex: 1}}
          region={{
            latitude: 53.36053114272589,
            longitude: -6.260737180709839,
            latitudeDelta: 0.0643,
            longitudeDelta: 0.0634,
          }}
          showsUserLocation
          loadingEnabled
          ref={(el) => (this.mapView = el)}>
          {this.state.stations.map((station) => (
            <Marker
              coordinate={{
                latitude: station.position.lat,
                longitude: station.position.lng,
              }}
              title={station.name}
              description={station.available_bikes + ' Bicycles Available'}
              key={station.number}
              image={require('../../assets/icon.png')}
            />
          ))}

          {destination && (
            <Fragment>
              <Directions
                origin={{
                  latitude: 53.36053114272589,
                  longitude: -6.260737180709839,
                }}
                destination={destination}
                onReady={(result) => {
                  this.setState({duration: Math.floor(result.duration) * 1.5});
                  this.setState({distance: result.distance});
                  this.mapView.fitToCoordinates(result.coordinates, {
                    edgePadding: {
                      right: 50,
                      left: 50,
                      top: 50,
                      bottom: 350,
                    },
                  });
                }}
              />
              <Marker
                coordinate={destination}
                anchor={{x: 0, y: 0}}
                image={require('../../assets/base.png')}>
                <LocationBox>
                  <LocationText>{destination.title}</LocationText>
                </LocationBox>
              </Marker>

              <Marker
                coordinate={{
                  latitude: 53.36053114272589,
                  longitude: -6.260737180709839,
                }}
                anchor={{x: 10, y: 0}}>
                <LocationBox>
                  <LocationTimeBox>
                    <LocationTimeText>{duration}</LocationTimeText>
                    <LocationTimeTextSmall>MIN</LocationTimeTextSmall>
                  </LocationTimeBox>
                  <LocationText>You ARE HERE</LocationText>
                </LocationBox>
              </Marker>
            </Fragment>
          )}
        </MapView>
        {destination ? (
          <Fragment>
            <Back onPress={this.handleBack}>
              <Image source={backImage} />
            </Back>
            <ContainerD>
              <TypeTitle>Do you need go to {destination.title}?</TypeTitle>

              {/* <TypeImage source={bike} /> */}
              <TypeDescription>
                {duration}
                <Text2>min</Text2>
              </TypeDescription>
              <TypeDescription1>by Cycling</TypeDescription1>

              <TypeDescription2>FIND YOUR NEAREST GO STATION</TypeDescription2>
            </ContainerD>
          </Fragment>
        ) : (
          <Search onLocationSelected={this.handleLocationSelected} />
        )}
      </View>
    );
  }
}
