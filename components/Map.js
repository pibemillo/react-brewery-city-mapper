import react from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  InfoWindow,
} from 'react-google-maps';
import BreweryMarker from '../components/BreweryMarker';

const Map = withScriptjs(
  withGoogleMap(props => {
    const markers = props.breweries.map(brewery => {
      return <BreweryMarker key={brewery.id} brewery={brewery} />;
    });

    return (
      <GoogleMap
        defaultZoom={10}
        center={{
          lat: Number(props.breweries[0].latitude),
          lng: Number(props.breweries[0].longitude),
        }}
      >
        {markers}
      </GoogleMap>
    );
  })
);

export default Map;
