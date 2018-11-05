import React, { Component } from "react";
import "./App.css";

import { connect } from "react-redux";

//Components
import List from "./List";
import ListAddBox from "./ListAddBox";

class App extends Component {
  render() {
    let watchlist = this.props.movies.filter(movie => movie.status === false);
    let watchedlist = this.props.movies.filter(movie => movie.status === true);
    return (
      <div className="App ">
        <div className="container">
          <ListAddBox />
          <div className="row">
            <List
              className="col-6 "
              movielist={watchlist}
              stat="Watch"
              title="Watch List"
            />
            <List
              className="col-6 "
              movielist={watchedlist}
              stat="UnWatch"
              title="Watched List"
            />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    movies: state.rootMovie.movies
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
