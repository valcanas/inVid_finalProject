import React from "react";
import Proptypes from "prop-types";
import { connect } from "react-redux";
import { withRouter, NavLink } from "react-router-dom";
import invidLogo from "@/assets/img/imagineDifferent.png";
import "./form_styles.css";
import { loginAction } from "../../../actions/index";

const validationRules = {
  required: val => val !== null && val !== undefined && val !== ""
};

class FormValidator extends React.Component {
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
      user_pass: { value: "", isTouched: false, isValid: false, errors: [] },
      user_nameRegister: {
        value: "",
        isTouched: false,
        isValid: false,
        errors: []
      },
      user_passRegister: {
        value: "",
        isTouched: false,
        isValid: false,
        errors: []
      }
    };
  }

  componentDidMount() {
    const { fetchLoginUser, user } = this.props;
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
    const { fetchLoginUser } = this.props;
    const dataLogin = {
      user_name,
      user_pass
    };
    console.log(dataLogin);
    fetchLoginUser(dataLogin);
  };

  handleRegister = e => {
    const user_name = this.state.user_nameRegister.value;
    const user_pass = this.state.user_passRegister.value;
    const { registerUser } = this.props;
    const dataRegister = {
      user_name,
      user_pass
    };
    console.log(dataRegister);
    registerUser(dataRegister);
  };

  render() {
    const {
      user_name,
      user_pass,
      user_nameRegister,
      user_passRegister
    } = this.state;
    return (
      <div className="initiaL">
        <div className="login-wrap">
          <NavLink to="/admin">
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
              Login
            </label>
            <input id="tab-2" type="radio" name="tab" className="sign-up" />
            <label htmlFor="tab-2" className="tab">
              Register
            </label>
            <div className="login-form">
              <div className="sign-in-htm">
                <div className="group">
                  <label htmlFor="user" className="label">
                    Username
                  </label>
                  <input
                    id="user"
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
                    value={this.state.user_pass.value}
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
                    value="Login"
                  />
                </div>
                <div className="foot-lnk" />
              </div>
              <div className="sign-up-htm">
                <div className="group">
                  <label htmlFor="user" className="label">
                    New Username
                  </label>
                  <input
                    id="new-user"
                    type="text"
                    className="input"
                    name="user_nameRegister"
                    value={user_nameRegister.value}
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
                    New Password
                  </label>
                  <input
                    id="new-pass"
                    type="password"
                    className="input"
                    data-type="password"
                    name="user_passRegister"
                    value={this.state.user_passRegister.value}
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
                    onClick={this.handleRegister}
                    type="button"
                    className="button"
                    value="Register"
                  />
                </div>
                <div className="foot-lnk">
                  <label htmlFor="tab-1">Already Member?</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

FormValidator.propTypes = {
  dataLogin: Proptypes.object,
  dataRegister: Proptypes.object,
  fetchLoginUser: Proptypes.func,
  registerUser: Proptypes.func
};

const stateToProps = state => ({
  user: state.loginReducer.user
});

const dispatchToProps = dispatch => ({
  fetchLoginUser: dataLogin => {
    dispatch(loginAction.fetchLoginUser(dataLogin));
  },
  registerUser: dataRegister => {
    dispatch(loginAction.registerUser(dataRegister));
  }
});

export default withRouter(
  connect(
    stateToProps,
    dispatchToProps
  )(FormValidator)
);
