import React from "react";
import Proptypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { movieManagerAction, movieListAction } from "../../../actions";
import Loading from "../Loading";
import "./style.css";

class AdminMediaObject extends React.Component {
  handleEnable = () => {
    const {
      fetchAnimation,
      fetchFantasy,
      fetchHorror,
      fetchScifi
    } = this.props;
    const { enableMovie } = this.props;
    const id = this.props.movie.id;
    console.log(id);
    enableMovie(id);
    fetchScifi();
    fetchFantasy();
    fetchHorror();
    fetchAnimation();
  };

  handleDisable = () => {
    const {
      fetchAnimation,
      fetchFantasy,
      fetchHorror,
      fetchScifi
    } = this.props;
    const { disableMovie } = this.props;
    const id = this.props.movie.id;
    console.log(typeof id);
    disableMovie(id);
    fetchScifi();
    fetchFantasy();
    fetchHorror();
    fetchAnimation();
  };

  handleDelete = () => {
    const {
      fetchAnimation,
      fetchFantasy,
      fetchHorror,
      fetchScifi
    } = this.props;
    const { deleteMovie } = this.props;
    const id = this.props.movie.id;
    console.log(id);
    deleteMovie(id);
    fetchScifi();
    fetchFantasy();
    fetchHorror();
    fetchAnimation();
  };

  render() {
    const movie = this.props.movie;
    console.log(movie);
    return (
      <li
        id={movie.id}
        className={
          movie.enable_film === 1
            ? `media border border-primary big-frame`
            : `media border border-danger big-frame frame-color`
        }
      >
        <div className="">
          <iframe
            src={movie.url}
            title={movie.title}
            className="mr-3 player"
            frameBorder="0"
            allow="accelerometer; loop; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loop
          />
        </div>
        <div className="media-body">
          <h3 className="mt-0 mb-1">
            {movie.title} / {movie.year_release}
          </h3>
          <div className="sinopsis">{movie.sinopsis}</div>
        </div>
        <div className="buttons">
          {movie.enable_film === 1 ? (
            <button
              className="btn btn-outline-primary"
              type="button"
              value="Disable"
              onClick={this.handleDisable}
            >
              Disable
            </button>
          ) : (
            <button
              className="btn btn-outline-success"
              type="button"
              value="Enable"
              onClick={this.handleEnable}
            >
              Enable
            </button>
          )}
          {movie.enable_film !== 1 ? (
            <button
              className="btn btn-outline-danger"
              type="button"
              value="Delete"
              onClick={this.handleDelete}
            >
              Delete
            </button>
          ) : (
            ""
          )}
        </div>
      </li>
    );
  }
}

AdminMediaObject.propTypes = {
  enableMovie: Proptypes.func,
  disableMovie: Proptypes.func,
  deleteMovie: Proptypes.func,
  allMovies: Proptypes.array
};

const stateToProps = state => ({
  allMovies: state.movieManagerReducer.allMovies,
  scifi: state.hompageListsReducer.scifi,
  horror: state.hompageListsReducer.horror,
  fantasy: state.hompageListsReducer.fantasy,
  animation: state.hompageListsReducer.animation
});

const dispatchToProps = dispatch => ({
  enableMovie: id => {
    dispatch(movieManagerAction.enableMovie(id));
  },
  disableMovie: id => {
    dispatch(movieManagerAction.disableMovie(id));
  },
  deleteMovie: id => {
    dispatch(movieManagerAction.deleteMovie(id));
  },
  fetchScifi: () => {
    dispatch(movieListAction.fetchScifi());
  },
  fetchFantasy: () => {
    dispatch(movieListAction.fetchFantasy());
  },
  fetchHorror: () => {
    dispatch(movieListAction.fetchHorror());
  },
  fetchAnimation: () => {
    dispatch(movieListAction.fetchAnimation());
  }
});

export default withRouter(
  connect(
    stateToProps,
    dispatchToProps
  )(AdminMediaObject)
);
