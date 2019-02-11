import react from 'react';
import Results from '../components/Results';

class CitySearch extends React.Component {
  state = {
    city: '',
    breweries: [],
    searched: false,
    query: '',
  };

  handleSubmit = event => {
    event.preventDefault();

    const searchQuery = this.state.city;

    fetch(
      `https://api.openbrewerydb.org/breweries?by_city=${searchQuery}&per_page=50`
    )
      .then(response => {
        return response.json();
      })
      .then(json => {
        if (json.length < 1) {
          this.setState({
            searched: !false,
            query: searchQuery,
          });
        }
        // console.log(json);
        // Filter Breweries that have no lat or length, or are type planning
        const jsonFiltered = json.filter(json => json.latitude !== null);
        // console.log(jsonFiltered);
        this.setState({
          breweries: jsonFiltered,
          searched: !false,
        });
      });
  };

  handleChange = event => {
    this.setState({ city: event.target.value.trim() });
  };

  render() {
    const breweries = this.state.breweries;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>City</label>
          <input
            type="text"
            placeholder="US City"
            onChange={this.handleChange}
          />
          <button type="submit">Search</button>
        </form>

        {breweries.length > 1 && this.state.searched ? (
          <Results breweries={this.state.breweries} />
        ) : breweries.length < 1 && this.state.searched ? (
          <div>No results found for {this.state.query}</div>
        ) : null}

        <style jsx>
          {`
            form {
              text-align: center;
            }
          `}
        </style>
      </div>
    );
  }
}

export default CitySearch;
