import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import FormValidatorMovie from "../Global/FormValidatorMovie";
import { isAuth } from "../Global/LocalStorage/storage";

class UploadMovie extends React.Component {
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.movieTarget !== nextProps.movieTarget) {
      this.props.history.push("/user");
    }
  }

  render() {
    return (
      <div>
        <FormValidatorMovie />
      </div>
    );
  }
}

const stateToProps = state => ({
  movieTarget: state.movieManagerReducer.movieTarget
});

export default withRouter(connect(stateToProps)(UploadMovie));
