import React from "react";
import Proptypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { SearchItem } from "./presentations";
import { searchAction } from "../../actions";
import Loading from "../Global/Loading";

class ViewSearch extends React.Component {
  componentDidMount() {
    const {
      searchShortfilm,
      match: {
        params: { searchInput }
      }
    } = this.props;
    console.log(typeof searchInput);
    searchShortfilm({ searchInput });
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { searchShortfilm } = this.props;
    const currentSearchInput = this.props.match.params.searchInput;
    const nextSearchInput = nextProps.match.params.searchInput;
    if (currentSearchInput !== nextSearchInput) {
      try {
        searchShortfilm({ nextSearchInput });
      } catch (e) {
        console.log(e);
      }
    }
  }

  componentWillUnmount() {
    const { clearSearch } = this.props;
    clearSearch();
  }

  renderSearchList = searchResult => {
    if (!searchResult || searchResult.length === 0) return <Loading />;
    return searchResult.map(movie => (
      <SearchItem key={movie.id} movie={movie} />
    ));
  };

  render() {
    const { searchResult } = this.props;
    console.log(searchResult);
    return (
      <div id="result-container">
        <ul>{this.renderSearchList(searchResult)}</ul>
      </div>
    );
  }
}
ViewSearch.propTypes = {
  searchResult: Proptypes.array,
  searchShortfilm: Proptypes.func,
  clearSearch: Proptypes.func
};

const stateToProps = state => ({
  searchResult: state.searchReducer.searchResult
});

const dispatchToProps = dispatch => ({
  searchShortfilm: searchInput => {
    dispatch(searchAction.searchShortfilm(searchInput));
  },
  clearSearch: () => dispatch(searchAction.clearSearch())
});

export default withRouter(
  connect(
    stateToProps,
    dispatchToProps
  )(ViewSearch)
);
