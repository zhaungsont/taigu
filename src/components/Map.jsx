import React from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import Spinner from "./Spinner";
import { buildQueries } from '@testing-library/react';

const google = window.google;

const containerStyle = {
  width: '100%',
  height: '50vh'
};


const position = { 
  lat: 25.032967511963054,
  lng: 121.54533338885759
}

const infoWindowStyle = {

}

function Map() {
  return (
    <LoadScript
      googleMapsApiKey= {process.env.REACT_APP_API_KEY}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={position}
        zoom={16}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <Marker
        position={position}
        />
        <InfoWindow
        position={position}
        >
        <div style={infoWindowStyle}>
          <h3>太古齋</h3>
          <a href="https://goo.gl/maps/vkNBMjAm7jaSzB8m7">
          <p>台北市大安區<br />信義路四段58-2號</p>
          </a>
        </div>
    </InfoWindow>
        <></>
      </GoogleMap>
    </LoadScript>
  )
}









// function Map() {
//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: process.env.REACT_APP_API_KEY
//   })

//   const [map, setMap] = React.useState(null)

//   const onLoad = React.useCallback(function callback(map) {
//     const bounds = new window.google.maps.LatLngBounds();
//     map.fitBounds(bounds);
//     setMap(map)
//   }, [])

//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null)
//   }, [])

//   return isLoaded ? (
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={position}
//         zoom={16}
//         onLoad={onLoad}
//         onUnmount={onUnmount}
//       >
//       <Marker
//       position={position}
//     />
//         { /* Child components, such as markers, info windows, etc. */ }
//         <></>
//       </GoogleMap>
//   ) : <Spinner />
// }

export default React.memo(Map);