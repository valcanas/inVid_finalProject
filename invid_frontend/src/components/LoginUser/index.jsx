import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import FormValidator from "../Global/FormValidator";

const formStyle = {
  zIndex: "100"
};

class LoginUser extends React.Component {
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.user !== nextProps.user) {
      this.props.history.push("/main");
    }
  }

  render() {
    return (
      <div>
        <div style={formStyle}>
          <FormValidator />
        </div>
      </div>
    );
  }
}

const stateToProps = state => ({
  user: state.loginReducer.user
});

export default withRouter(connect(stateToProps)(LoginUser));
