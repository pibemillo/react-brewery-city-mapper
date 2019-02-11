import react from 'react';
import { Marker, InfoWindow } from 'react-google-maps';

class BreweryMarker extends React.Component {
  state = {
    isOpen: false,
  };

  handleToggleOpen = () => {
    this.setState({
      isOpen: true,
    });
  };

  handleToggleClose = () => {
    this.setState({
      isOpen: false,
    });
  };

  render() {
    return (
      <div>
        <Marker
          position={{
            lat: Number(this.props.brewery.latitude),
            lng: Number(this.props.brewery.longitude),
          }}
          onClick={this.handleToggleOpen}
          icon={{
            url:
              'https://upload.wikimedia.org/wikipedia/commons/5/57/Beer_mug.svg',
            scaledSize: { width: 40, height: 40 },
          }}
        >
          {this.state.isOpen ? (
            <InfoWindow onCloseClick={this.handleToggleClose}>
              <div>
                {this.props.brewery.name}
                {this.props.brewery.brewery_type}
                {this.props.brewery.street}
                <a href={this.props.brewery.website_url}>
                  {this.props.brewery.website_url}
                </a>
              </div>
            </InfoWindow>
          ) : null}
        </Marker>
      </div>
    );
  }
}

export default BreweryMarker;
