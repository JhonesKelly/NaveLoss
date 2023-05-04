import React, {useState, useEffect} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {YaMap, Animation, Geocoder, Marker, Polyline} from 'react-native-yamap';
import Geolocation from '@react-native-community/geolocation';
import {MAP_KEY, GEO_KEY} from '../../../api_keys';
import {LOCATION, HOW_USE, LOCATION_TRANSPORT} from '../../../images';
import SwipeModal from './Modal/SwipeModal';
import {styles} from './Main.styles';
YaMap.init(MAP_KEY);
Geocoder.init(GEO_KEY);

export default function Main() {
  const [locationTransport, setLocationTransport] = useState(false);
  const [routeToAuto, setRouteToAuto] = useState(false);
  const [positionStatic, setPositionStatic] = useState({});
  const [position, setPosition] = useState({lon: 30, lat: 20});
  let [pointsRouteToAuto, setPointsRouteToAuto] = useState();
  let points = [position, positionStatic];

  map = React.createRef();

  useEffect(() => {
    console.log('');
  }, []);

  const deleteRoute = () => {
    setRouteToAuto(pre => (pre = false));
  };

  const addRoute = () => {
    setRouteToAuto(pre => (pre = true));
  };

  const deleteTransportMarker = () => {
    setLocationTransport(pre => (pre = false));
  };

  const addTransportMarker = () => {
    setLocationTransport(pre => (pre = true));
  };

  const getCurrentPosition = () => {
    Geolocation.watchPosition(
      pos => {
        setPosition({lon: pos.coords.longitude, lat: pos.coords.latitude});
      },
      error => Alert.alert('GetCurrentPosition Error', JSON.stringify(error)),
      {enableHighAccuracy: true},
    );
    console.log('watch-position');
  };

  const getCurrentPositionStatic = () => {
    Geolocation.getCurrentPosition(
      pos => {
        setPositionStatic({
          lon: pos.coords.longitude,
          lat: pos.coords.latitude,
        });
        getRoute();
      },
      error => Alert.alert('GetCurrentPosition Error', JSON.stringify(error)),
      {enableHighAccuracy: true},
    );
    console.log('get-current-position');
  };

  const getCamera = () => {
    return new Promise((resolve, reject) => {
      if (this.map.current) {
        this.map.current.getCameraPosition(position => {
          resolve(position);
        });
      } else {
        reject('ERROR');
      }
    });
  };

  const target = async () => {
    const camera = await getCamera();
    if (camera != 'ERROR') {
      this.map.current.setCenter(position, 17, 0, 0, 0.6, Animation.SMOOTH);
    }
  };

  const zoomDown = async () => {
    const camera = await getCamera();
    if (camera != 'ERROR') {
      this.map.current.setZoom(camera.zoom * 0.9, 0.1);
      console.log(pointsRouteToAuto);
    }
  };

  const zoomUp = async () => {
    const camera = await getCamera();
    if (camera != 'ERROR') {
      this.map.current.setZoom(camera.zoom * 0.5, 1);
    }
  };

  const getRoute = () => {
    this.map.current.findPedestrianRoutes(points, pre => {
      if (pre.routes.length > 0) {
        setPointsRouteToAuto(
          (pointsRouteToAuto = pre.routes[0].sections[0].points),
        );
        console.log('Маршрут построен!');
      } else {
        console.log('Невозможно построить маршрут!');
      }
    });
  };

  return (
    <View style={styles.container}>
      <YaMap
        ref={this.map}
        style={styles.container}
        userLocationIcon={LOCATION}
        showUserPosition={false}
        onMapLoaded={() => {
          getCurrentPositionStatic();
          getCurrentPosition();
        }}
        // nightMode={true}
        followUser
        userLocationIconScale={1}
        mapType={'vector'}
        //     mapStyle='"stylers": {
        //     "color": "#224433",

        // }'
        // initialRegion={{
        //   lat: 50,
        //   lon: 50,
        //   zoom: 10,
        //   azimuth: 100,
        //   tilt: 100,
        // }}
      >
        {/* {getCurrentPositionStatic()} */}
        {position ? (
          <Marker
            // visible={loc}
            source={LOCATION}
            point={position}
            scale={2}
          />
        ) : null}
        {locationTransport ? (
          <Marker
            // visible={true}
            source={LOCATION_TRANSPORT}
            anchor={{x: 0.5, y: 1}}
            point={positionStatic}
            scale={2}
          />
        ) : null}
        {routeToAuto ? (
          <Polyline
            strokeColor={'#7A53BB'}
            fillColor={'#7A53BB'}
            points={pointsRouteToAuto}
            strokeWidth={3}
            dashLength={20}
            zIndex={5}
          />
        ) : null}
      </YaMap>
      <View style={styles.buttonsBlock}>
        <TouchableOpacity
          onPress={() => {
            zoomDown();
            getRoute();
          }}>
          <Image source={HOW_USE} style={styles.howUseIcon} />
        </TouchableOpacity>
      </View>

      <SwipeModal
        getCurrentPositionStatic={getCurrentPositionStatic}
        addRoute={addRoute}
        deleteRoute={deleteRoute}
        deleteTransportMarker={deleteTransportMarker}
        addTransportMarker={addTransportMarker}
        target={target}
        q
        getRoute={getRoute}
      />
    </View>
  );
}
