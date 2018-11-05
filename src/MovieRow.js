import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "./store/actions/index";

class MovieRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.movie.title}</td>
        <td>
          <button
            className="btn btn-success"
            onClick={() => this.props.change_status(this.props.movie)}
          >
            {this.props.stat}
          </button>
        </td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => this.props.delete_movie(this.props.movie)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    change_status: movie => dispatch(actionCreators.change_movie_status(movie)),
    delete_movie: movie => dispatch(actionCreators.delete_movie(movie))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(MovieRow);
