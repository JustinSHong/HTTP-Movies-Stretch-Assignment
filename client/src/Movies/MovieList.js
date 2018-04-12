import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }
  // fetch data from server -> list of movies
  componentDidMount() {
    axios
      .get(`http://localhost:3333/api/movies`)
      // .then(response => console.log(response))
      .then(response => this.setState({ movies: response.data }))
      .catch(error => console.error(error));
  }

  render() {
    console.log("state", this.state.movies);
    return (
      <div className="movie-list">
        {this.state.movies.map(movie => (
          <MovieDetails key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
}

function MovieDetails({ movie }) {
  return (
    <Link to={`/movies/${movie.id}`}>
      <MovieCard movie={movie} />
    </Link>
  );
}
