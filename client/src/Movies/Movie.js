import React from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
export default class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    };
  }

  componentDidMount() {
    this.fetchMovie(this.props.match.params.id);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.fetchMovie(newProps.match.params.id);
    }
  }
  // fetch a specific movie via its id when a user clicks on a movie's card
  fetchMovie = id => {
    // this function needs to fire off a get request to localhost:3333/api/movies/:id
    // note that the id is dynamic.
    axios
      .get(`http://localhost:3333/api/movies/${id}`)
      .then(response => {
        // console.log("response", response);
        this.setState({ movie: response.data });
      })
      .catch(error => {
        console.error(error);
      });
    // console.log(this.state.movie);
  };

  saveMovie = () => {
    const addToSavedList = this.props.addToSavedList;
    addToSavedList(this.state.movie);
  };

  render() {
    if (!this.state.movie) {
      return <div>Loading movie information...</div>;
    }

    return (
      <div className="save-wrapper">
        <MovieCard movie={this.state.movie} />
        <div className="save-button" onClick={this.saveMovie}>
          Save
        </div>
      </div>
    );
  }
}
