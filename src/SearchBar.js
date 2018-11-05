import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class SearchBar extends Component {
  render() {
    return (
      <div className="form-group col-lg-6 col-12 mx-auto">
        <div className="input-group ">
          <input
            className="form-control"
            type="text"
            onChange={event => this.props.changeHandler(event.target.value)}
          />
          <div className="input-group-append">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
