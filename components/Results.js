import react from 'react';
import Map from '../components/Map';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

class Results extends React.Component {
  handleBreweryClick = event => {
    event.preventDefault();
    // console.log(brewery.name);
  };

  render() {
    const GMAP_API = publicRuntimeConfig.gmapAPI;
    return (
      <div>
        <ul>
          {this.props.breweries.map(brewery => (
            <li key={brewery.id}>
              <a
                onClick={event => {
                  event.preventDefault();
                  console.log(brewery.name);
                }}
              >
                {brewery.name}
              </a>
            </li>
          ))}
        </ul>
        <Map
          isMarkerShown
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GMAP_API}&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          breweries={this.props.breweries}
        />
      </div>
    );
  }
}

export default Results;
