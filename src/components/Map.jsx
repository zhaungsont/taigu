import React from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import Spinner from "./Spinner";

const google = window.google;

const containerStyle = {
  marginTop: "1em",
  width: '100%',
  height: '50vh'
};


const position = { 
  lat: 25.032967511963054,
  lng: 121.54533338885759
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