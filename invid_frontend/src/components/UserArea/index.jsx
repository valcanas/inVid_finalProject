import React from "react";
import Proptypes from "prop-types";
import { withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { MovieList, ListHeader } from "../LandingPage/presentations";
import movieManagerAction from "../../actions/movieManager.action";
import UserNav from "../Global/UserNav";

class UserArea extends React.Component {
  componentDidMount() {
    const { fetchMoviesById } = this.props;
    const id = this.props.user;
    console.log(id);
    fetchMoviesById(id);
    const intervalId = setInterval(this.timer, 2000);
    // store intervalId in the state so it can be accessed later:
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    const { clearUserMovies } = this.props;
    clearUserMovies();
    clearInterval(this.state.intervalId);
  }

  timer = () => {
    const { fetchMoviesById } = this.props;
    const id = this.props.user.user_id;
    fetchMoviesById(id);
  };

  render() {
    const { userMovies } = this.props;
    return (
      <div>
        <UserNav />
        <ListHeader
          header={
            userMovies.length !== 0
              ? "These are your uploaded shortfilms, upload more! "
              : "Would you like to upload your first shortfilm?"
          }
        />
        <MovieList movieList={userMovies} />
      </div>
    );
  }
}
UserArea.propTypes = {
  fetchMoviesById: Proptypes.func,
  userMovies: Proptypes.array,
  user: Proptypes.object
};

const stateToProps = state => ({
  userMovies: state.movieManagerReducer.userMovies,
  user: state.loginReducer.user
});

const dispatchToProps = dispatch => ({
  fetchMoviesById: id => {
    dispatch(movieManagerAction.fetchMoviesById(id));
  },
  clearUserMovies: () => {
    dispatch(movieManagerAction.clearUserMovies());
  }
});

export default withRouter(
  connect(
    stateToProps,
    dispatchToProps
  )(UserArea)
);
