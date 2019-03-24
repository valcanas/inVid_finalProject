import React from "react";
import { connect } from "react-redux";
import Proptypes from "prop-types";
import AdminMediaObject from "../Global/AdminMediaObject";
import { movieManagerAction } from "../../actions";
import Loading from "../Global/Loading";
import AdminNav from "../Global/AdminNav";

const style = {
  display: "block",
  width: "75rem",
  overflow: "hidden"
};

class AdminArea extends React.Component {
  componentDidMount() {
    const { fetchAllMovies } = this.props;
    fetchAllMovies();
    console.log(this.props.allMovies);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.allMovies !== nextProps.allMovies) {
      const allMovies = this.props;
      this.renderAllMovies(allMovies);
    }
  }

  renderAllMovies = allMovies => {
    console.log(allMovies);
    if (!allMovies || allMovies.length === 0) return <Loading />;
    return allMovies.allMovies.map(movie => (
      <AdminMediaObject key={movie.id} movie={movie} />
    ));
  };

  render() {
    const allMovies = this.props;
    console.log(allMovies.allMovies);
    return (
      <div className="mx-auto" style={style}>
        <AdminNav />
        <ul className="list-unstyled">{this.renderAllMovies(allMovies)}</ul>
      </div>
    );
  }
}

AdminArea.propTypes = {
  fetchAllMovies: Proptypes.func,
  allMovies: Proptypes.array
};

const dispatchToProps = dispatch => ({
  fetchAllMovies: () => {
    dispatch(movieManagerAction.fetchAllMovies());
  }
});

const stateToProps = state => ({
  allMovies: state.movieManagerReducer.allMovies
});

export default connect(
  stateToProps,
  dispatchToProps
)(AdminArea);
