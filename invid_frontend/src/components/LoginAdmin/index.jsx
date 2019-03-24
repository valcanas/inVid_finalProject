import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import FormValidatorAdmin from "../Global/FormValidatorAdmin";
import { checkToken } from "../Global/IsAuth";

class LoginAdmin extends React.Component {
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.admin !== nextProps.admin) {
      this.props.history.push("/admin/private");
    }
  }

  render() {
    return (
      <div>
        <FormValidatorAdmin />
      </div>
    );
  }
}

const stateToProps = state => ({
  admin: state.adminReducer.admin
});

export default withRouter(connect(stateToProps)(LoginAdmin));
