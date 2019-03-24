import React from "react";
import Proptypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { MovieList, ListHeader } from "./presentations";
import { movieListAction, movieAction } from "@/actions";
import { isAuth } from "../Global/LocalStorage/storage";

class HomeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { intervalId: null };
  }

  componentDidMount() {
    const {
      fetchAnimation,
      fetchFantasy,
      fetchHorror,
      fetchScifi
    } = this.props;
    fetchScifi();
    fetchFantasy();
    fetchHorror();
    fetchAnimation();
    const intervalId = setInterval(this.timer, 2000);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  timer = () => {
    const {
      fetchAnimation,
      fetchFantasy,
      fetchHorror,
      fetchScifi
    } = this.props;
    fetchScifi();
    fetchFantasy();
    fetchHorror();
    fetchAnimation();
  };

  render() {
    const { animation, scifi, horror, fantasy } = this.props;
    console.log(animation);
    return (
      <div>
        <ListHeader header="Sci Fi" />
        <MovieList movieList={scifi} />
        <ListHeader header="Fantasy" />
        <MovieList movieList={fantasy} />
        <ListHeader header="Horror" />
        <MovieList movieList={horror} />
        <ListHeader header="Animation" />
        <MovieList movieList={animation} />
      </div>
    );
  }
}
HomeList.propTypes = {
  fetchScifi: Proptypes.func,
  fetchFantasy: Proptypes.func,
  fetchHorror: Proptypes.func,
  fetchAnimation: Proptypes.func,
  animation: Proptypes.array,
  scifi: Proptypes.array,
  horror: Proptypes.array,
  fantasy: Proptypes.array
};

const stateToProps = state => ({
  scifi: state.hompageListsReducer.scifi,
  horror: state.hompageListsReducer.horror,
  fantasy: state.hompageListsReducer.fantasy,
  animation: state.hompageListsReducer.animation
});

const dispatchToProps = dispatch => ({
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
  )(HomeList)
);
