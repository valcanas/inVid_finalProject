import React from "react";
import Proptypes from "prop-types";
import { connect } from "react-redux";
import { withRouter, NavLink } from "react-router-dom";
import invidLogo from "@/assets/img/imagineDifferent.png";
import "./form_stylesAdmin.css";
import { adminAction } from "../../../actions/index";

const validationRules = {
  required: val => val !== null && val !== undefined && val !== ""
};

class FormValidatorAdmin extends React.Component {
  constructor(props) {
    super(props);

    this.formValidationRules = {
      user_name: [
        {
          rule: validationRules.required,
          message: "Required field"
        }
      ],
      user_pass: [{ rule: validationRules.required, message: "Required field" }]
    };

    this.fields = ["user_name", "user_pass"];

    this.state = {
      loginForm: { isValid: false },
      user_name: { value: "", isTouched: false, isValid: false, errors: [] },
      user_pass: { value: "", isTouched: false, isValid: false, errors: [] }
    };
  }

  handleFieldChange = e => {
    const newState = { ...this.state };
    newState[e.target.name].value = e.target.value;
    this.validateForm(newState);
  };

  handleSetTouched = e => {
    const field = { ...this.state[e.target.name], isTouched: true };
    this.setState({ [e.target.name]: { ...field } });
  };

  getClassName = fieldName => {
    const field = this.state[fieldName];
    return field.isTouched && !field.isValid ? "has-error" : "";
  };

  validateForm = newState => {
    // eslint-disable-next-line no-param-reassign
    newState = newState || { ...this.state };
    this.fields.forEach(fieldName => {
      const newField = newState[fieldName];
      newField.errors = [];
      newField.isValid = true;
      this.formValidationRules[fieldName].forEach(vRule => {
        if (!vRule.rule(this.state[fieldName].value)) {
          newField.errors.push(vRule.message);
          newField.isValid = false;
        }
        // eslint-disable-next-line no-param-reassign
        newState[fieldName] = newField;
      });
    });
    this.setState(newState);
  };

  UNSAFEcomponentWillMount() {
    this.validateForm();
  }

  handleSubmit = e => {
    const user_name = this.state.user_name.value;
    const user_pass = this.state.user_pass.value;
    console.log(typeof user_pass);
    const { fetchLoginAdmin } = this.props;
    const dataAdmin = {
      user_name,
      user_pass
    };
    console.log(dataAdmin);
    fetchLoginAdmin(dataAdmin);
  };

  render() {
    const { user_name, user_pass } = this.state;
    return (
      <div className="initiaL">
        <div className="login-wrap">
          <NavLink to="/login">
            <img
              className="invid-logo glitch"
              style={{
                width: 300,
                height: 50
              }}
              src={invidLogo}
              alt="img"
            />
          </NavLink>
          <div className="login-html">
            <input
              id="tab-1"
              type="radio"
              name="tab"
              className="sign-in"
              defaultChecked
            />
            <label htmlFor="tab-1" className="tab">
              Admin Area
            </label>
            <input id="tab-2" type="radio" name="tab" className="sign-up" />
            <label htmlFor="tab-2" className="tab" />
            <div className="login-form">
              <div className="sign-in-htm">
                <div className="group">
                  <label htmlFor="user" className="label">
                    Name
                  </label>
                  <input
                    id="admin"
                    type="text"
                    className="input"
                    name="user_name"
                    value={user_name.value}
                    onChange={this.handleFieldChange}
                    onBlur={this.handleSetTouched}
                  />
                  {user_name.isTouched &&
                    user_name.errors.length > 0 &&
                    user_name.errors.map((err, i) => (
                      <span key={i} className="error-message">
                        {err}
                      </span>
                    ))}
                </div>
                <div className="group">
                  <label htmlFor="pass" className="label">
                    Password
                  </label>
                  <input
                    id="pass"
                    type="password"
                    className="input"
                    data-type="password"
                    name="user_pass"
                    value={user_pass.value}
                    onChange={this.handleFieldChange}
                    onBlur={this.handleSetTouched}
                  />
                  {user_pass.isTouched &&
                    user_pass.errors.length > 0 &&
                    user_pass.errors.map((err, i) => (
                      <span key={i} className="error-message">
                        {err}
                      </span>
                    ))}
                </div>
                <div className="group">
                  <input
                    onClick={this.handleSubmit}
                    type="button"
                    className="button"
                    value="Admin Login"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

FormValidatorAdmin.propTypes = {
  dataAdmin: Proptypes.object,
  fetchLoginAdmin: Proptypes.func,
  user_pass: Proptypes.string
};

const stateToProps = state => ({
  admin: state.adminReducer.admin
});

const dispatchToProps = dispatch => ({
  fetchLoginAdmin: dataAdmin => {
    dispatch(adminAction.fetchLoginAdmin(dataAdmin));
  }
});

export default withRouter(
  connect(
    stateToProps,
    dispatchToProps
  )(FormValidatorAdmin)
);
