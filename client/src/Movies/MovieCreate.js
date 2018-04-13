import React from "react";

export default class MovieCreate extends React.Component {
	constructor(props) {
		super();
		// hold new movie data here
		this.state = {
			title: "",
			director: "",
			metascore: "",
			stars: []
		}
	}

	// render a form to add a new movie to the movie list
	render() {
		return (
			<form>
				<input />
				<input />
				<input />
				<input />
				<input />
				<button type="button" onClick={}>Add New Movie</button>
			</form>
		);
	}
}