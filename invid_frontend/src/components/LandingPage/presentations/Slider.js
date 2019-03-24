import React from "react";
import "./styleSlider.css";
import { NavLink } from "react-router-dom";

const Slider = () => (
  <div className="slider">
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        />
        <li data-target="#carouselExampleIndicators" data-slide-to="1" />
        <li data-target="#carouselExampleIndicators" data-slide-to="2" />
      </ol>
      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active">
          <img
            className="d-block img-fluid fantasy"
            src="https://media3.giphy.com/media/dVreeo27g2cdq/giphy.gif"
            alt="First slide"
          />
          <div className="carousel-caption d-none d-md-block">
            <div className="text">
              <h3 className="title">Be part of the Story</h3>
              <p className="sub-title">
                <b>Share your talent!</b>
              </p>
              <NavLink to="/user/upload">
                <button type="button" className="btn btn-outline-primary">
                  Upload Shortfilm
                </button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="d-block img-fluid fantasy"
            src="https://cdn-images-1.medium.com/max/2600/1*FvCGEcQQd10kGyYLY_P5lA.gif"
            alt="Second slide"
          />
          <div className="carousel-caption d-none d-md-block">
            <div className="text">
              <h3 className="title">Be part of the Story</h3>
              <p className="sub-title">
                <b>Share your talent!</b>
              </p>
              <NavLink to="/user/upload">
                <button type="button" className="btn btn-outline-primary">
                  Upload Shortfilm
                </button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="d-block img-fluid"
            src="https://i.pinimg.com/originals/99/80/81/99808176dbc8f7566085e22cb5ac25eb.gif"
            alt="Third slide"
          />
          <div className="carousel-caption d-none d-md-block">
            <div className="text">
              <h3 className="title">Be part of the Story</h3>
              <p className="sub-title">
                <b>Share your talent!</b>
              </p>
              <NavLink to="/user/upload">
                <button type="button" className="btn btn-outline-primary">
                  Upload Shortfilm
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  </div>
);

export default Slider;
