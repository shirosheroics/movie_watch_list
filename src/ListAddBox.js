import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { connect } from "react-redux";
import * as actionCreators from "./store/actions/index";

class ListAddBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className="form-group col-lg-6 col-12 mx-auto m-3">
        <div className="input-group mb-3">
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            className="form-control"
            placeholder="Movie..."
            aria-label="Add Movie"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              onClick={() => {
                if (this.state.value !== "") {
                  this.props.add_movie({
                    title: this.state.value,
                    status: false
                  });
                  this.setState({ value: "" });
                }
              }}
            >
              <FontAwesomeIcon icon={faPlus} /> Add
            </button>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    add_movie: movie => dispatch(actionCreators.add_movie(movie))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ListAddBox);
