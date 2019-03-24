import React from "react";
import Proptypes from "prop-types";
import { connect } from "react-redux";
import { withRouter, NavLink } from "react-router-dom";
import invidLogo from "@/assets/img/imagineDifferent.png";
import "./form_stylesMovie.css";
import { movieManagerAction } from "../../../actions/index";

const validationRules = {
  required: val => val !== null && val !== undefined && val !== ""
};

class FormValidatorMovie extends React.Component {
  constructor(props) {
    super(props);

    this.formValidationRules = {
      title: [
        {
          rule: validationRules.required,
          message: "Required field"
        }
      ],
      url: [{ rule: validationRules.required, message: "Required field" }],
      thumbnail: [
        { rule: validationRules.required, message: "Required field" }
      ],
      sinopsis: [{ rule: validationRules.required, message: "Required field" }]
    };

    this.fields = ["title", "url", "thumbnail", "sinopsis"];

    this.state = {
      movieForm: { isValid: false },
      title: { value: "", isTouched: false, isValid: false, errors: [] },
      url: { value: "", isTouched: false, isValid: false, errors: [] },
      thumbnail: { value: "", isTouched: false, isValid: false, errors: [] },
      sinopsis: { value: "", isTouched: false, isValid: false, errors: [] },
      year_release: { value: 2019, errors: [] },
      gen_id: { value: 1, errors: [] }
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
    const id = null;
    const enable_film = null;
    const upload_date = null;
    const title = this.state.title.value;
    const year_release = this.state.year_release.value;
    const gen_id = parseInt(this.state.gen_id.value, 10);
    const url = this.state.url.value;
    const thumbnail = this.state.thumbnail.value;
    const sinopsis = this.state.sinopsis.value;
    const user_id = this.props.user.user_id;
    console.log(user_id);
    const { uploadNewMovie } = this.props;
    const dataMovie = {
      id,
      enable_film,
      upload_date,
      title,
      year_release,
      gen_id,
      url,
      thumbnail,
      sinopsis,
      user_id
    };
    console.log(dataMovie);
    uploadNewMovie(dataMovie);
  };

  render() {
    const {
      title,
      year_release,
      gen_id,
      url,
      thumbnail,
      sinopsis
    } = this.state;
    const message = this.props.movieTarget.message;
    return (
      <div className="initiaL">
        {message ? <span>${message}</span> : <span />}
        <div className="movieUpload-wrap">
          <NavLink to="/user">
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
              Upload Shortfilm
            </label>
            <input id="tab-2" type="radio" name="tab" className="sign-up" />
            <label htmlFor="tab-2" className="tab" />
            <div className="login-form">
              <div className="sign-in-htm">
                <div className="group">
                  <label htmlFor="user" className="label">
                    title
                  </label>
                  <input
                    id="title"
                    type="text"
                    className="input"
                    name="title"
                    value={title.value}
                    onChange={this.handleFieldChange}
                    onBlur={this.handleSetTouched}
                  />
                  {title.isTouched &&
                    title.errors.length > 0 &&
                    title.errors.map((err, i) => (
                      <span key={i} className="error-message">
                        {err}
                      </span>
                    ))}
                </div>
                <div className="group">
                  <label htmlFor="year_release" className="label">
                    Year
                  </label>
                  <select
                    className="input"
                    htmlFor="year_release"
                    name="year_release"
                    id="year"
                  >
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                  </select>
                </div>
                <div className="group">
                  <label htmlFor="gen_id" className="label">
                    Genre
                  </label>
                  <select
                    className="input"
                    htmlFor="gen_id"
                    name="gen_id"
                    id="genre"
                  >
                    <option value="1">Sci-Fi</option>
                    <option value="2">Fantasy</option>
                    <option value="3">Horror</option>
                    <option value="4">Animacion</option>
                  </select>
                </div>
                <div className="group">
                  <label htmlFor="url" className="label">
                    url
                  </label>
                  <input
                    id="url"
                    type="text"
                    className="input"
                    name="url"
                    value={url.value}
                    onChange={this.handleFieldChange}
                    onBlur={this.handleSetTouched}
                  />
                  {url.isTouched &&
                    url.errors.length > 0 &&
                    url.errors.map((err, i) => (
                      <span key={i} className="error-message">
                        {err}
                      </span>
                    ))}
                </div>
                <div className="group">
                  <label htmlFor="thumbnail" className="label">
                    Thumbnail
                  </label>
                  <input
                    id="thumbnail"
                    type="text"
                    className="input"
                    name="thumbnail"
                    value={thumbnail.value}
                    onChange={this.handleFieldChange}
                    onBlur={this.handleSetTouched}
                  />
                  {thumbnail.isTouched &&
                    thumbnail.errors.length > 0 &&
                    thumbnail.errors.map((err, i) => (
                      <span key={i} className="error-message">
                        {err}
                      </span>
                    ))}
                </div>
                <div className="group">
                  <label htmlFor="sinopsis" className="label">
                    Sinopsis
                  </label>
                  <textarea
                    rows="5"
                    id="sinopsis"
                    type="text"
                    className="input"
                    name="sinopsis"
                    value={sinopsis.value}
                    onChange={this.handleFieldChange}
                    onBlur={this.handleSetTouched}
                  />
                  {sinopsis.isTouched &&
                    sinopsis.errors.length > 0 &&
                    sinopsis.errors.map((err, i) => (
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
                    value="Upload"
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

FormValidatorMovie.propTypes = {
  dataMovie: Proptypes.object,
  uploadNewMovie: Proptypes.func
};

const stateToProps = state => ({
  movieTarget: state.movieManagerReducer.movieTarget,
  user: state.loginReducer.user
});

const dispatchToProps = dispatch => ({
  uploadNewMovie: dataMovie => {
    dispatch(movieManagerAction.uploadNewMovie(dataMovie));
  }
});

export default withRouter(
  connect(
    stateToProps,
    dispatchToProps
  )(FormValidatorMovie)
);
