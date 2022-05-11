import React from 'react';
import { GoogleMap, Marker, withGoogleMap } from 'react-google-maps';
import useGoogleMap from './useGoogleMapManagement';

const GoogleMaps = ({ position }) => {
    const { data, loading } = useGoogleMap({ position });

  const MyMapComponent = withGoogleMap((props) => {
    console.log(
      `Temperature: ${props.data.main.temp} \nHumidity: ${props.data.main.humidity}`
    );

    return (
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: position.lat, lng: position.lng }}
      >
        <div
          data-toggle='tooltip'
          data-placement='top'
          title={`Temperature: ${props.data.main.temp} \nHumidity: ${props.data.main.humidity}`}
        >
          {props.isMarkerShown && (
            <Marker
              position={{ lat: position.lat, lng: position.lng }}
            />
          )}
        </div>
      </GoogleMap>
    );
  });
  return (
    <>
      {loading ? (
        'loading.....'
      ) : (
        <MyMapComponent
          isMarkerShown
          position={position}
          googleMapURL='https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          data={data}
        />
      )}
    </>
  );
};
export default GoogleMaps;
