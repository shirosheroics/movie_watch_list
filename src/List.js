import React, { Component } from "react";

import MovieRow from "./MovieRow";
import SearchBar from "./SearchBar";
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredMovies: this.props.movielist,
      query: ""
    };

    this.filterMovies = this.filterMovies.bind(this);
  }
  filterMovies(query) {
    query = query.toLowerCase();
    let filteredMovies = this.props.movielist.filter(movie => {
      return movie.title.toLowerCase().includes(query.toLowerCase());
    });
    this.setState({ filteredMovies, query });
  }
  componentDidUpdate(prevProps) {
    if (prevProps.movielist !== this.props.movielist) {
      this.filterMovies(this.state.query);
    }
  }
  render() {
    let movieRows = (
      <tr>
        <td>no movie found</td>
      </tr>
    );
    if (this.props.movielist.length >= 1) {
      movieRows = this.state.filteredMovies.map(movie => (
        <MovieRow key={movie.title} movie={movie} stat={this.props.stat} />
      ));
    }

    return (
      <div className="ListTable col-6 mt-3">
        <div className="row">
          <h2>
            {this.props.title}{" "}
            <span className="badge badge-secondary">
              {" "}
              {this.props.movielist.length}
            </span>
          </h2>
          <SearchBar changeHandler={this.filterMovies} />
        </div>
        <table className="table bg-light mt-3 ">
          <tbody>{movieRows}</tbody>
        </table>
      </div>
    );
  }
}

export default List;
