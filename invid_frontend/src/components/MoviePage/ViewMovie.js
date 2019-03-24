import React from "react";
import Proptypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Loading from "../Global/Loading";
// import "../Global/StarVotes/stars.css";

import { Player } from "./presentations";
import { movieAction } from "@/actions";

const desc = {
  overflow: "hidden"
};

class ViewMovie extends React.Component {
  componentDidMount() {
    const {
      fetchTheMovie,
      match: {
        params: { movieId }
      }
    } = this.props;

    fetchTheMovie(movieId);
  }

  componentWillUnmount() {
    const { clearTheMovie } = this.props;
    clearTheMovie();
  }

  render() {
    const { theMovie } = this.props;
    if (theMovie.length < 1) return <Loading />;
    const shortfilm = theMovie[0];
    console.log(theMovie);
    return (
      <div>
        <Player
          src={shortfilm.url}
          title={shortfilm.title}
          description={shortfilm.sinopsis}
          year={shortfilm.year_release}
        />
      </div>
    );
  }
}

ViewMovie.propTypes = {
  theMovie: Proptypes.array,
  fetchTheMovie: Proptypes.func
};

const stateToProps = state => ({
  theMovie: state.theMovieReducer.theMovie
});

const dispatchToProps = dispatch => ({
  fetchTheMovie: movieId => {
    dispatch(movieAction.fetchTheMovie(movieId));
  },
  clearTheMovie: () => dispatch(movieAction.clearTheMovie())
});

export default withRouter(
  connect(
    stateToProps,
    dispatchToProps
  )(ViewMovie)
);
