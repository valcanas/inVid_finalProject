import React from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { loginAction } from "../../../actions";

class Logout extends React.Component {
  handleLogout = () => {
    const { userLogOut } = this.props;
    userLogOut();
  };

  componentDidUpdate(prevProps) {
    if (this.props.user !== prevProps.user) {
      this.props.history.push("/login");
    }
  }

  render() {
    return (
      <React.Fragment>
        <button
          className="btn btn-outline-primary"
          type="button"
          onClick={this.handleLogout}
        >
          Logout
        </button>
      </React.Fragment>
    );
  }
}

const stateToProps = state => ({
  user: state.loginReducer.user
});

const dispathToProps = dispatch => ({
  userLogOut: () => {
    dispatch(loginAction.userLogOut());
  }
});

export default withRouter(
  connect(
    stateToProps,
    dispathToProps
  )(Logout)
);
