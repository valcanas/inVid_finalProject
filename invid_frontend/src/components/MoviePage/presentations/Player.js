import React from "react";
import Proptypes from "prop-types";
import "./stylePlayer.css";

const Player = ({ src, title, description, year }) => (
  <React.Fragment>
    <div className="col-12">
      <div className="row justify-content-center">
        <div className="tarjetas bg-dark card rounded col-lg-12 border border-primary" />
        <iframe
          className="adminVideo card-img-top"
          title={title}
          src={src}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          loop
        />
        <div className="container-fluid align-items-center">
          <ul className="align-items-left">
            <li className="title text-left">
              {title} / {year}
            </li>
            <li className="sinopsis text-justify">{description}</li>
          </ul>
        </div>
      </div>
    </div>
  </React.Fragment>
);

Player.propTypes = {
  src: Proptypes.string,
  title: Proptypes.string,
  description: Proptypes.string,
  year: Proptypes.string
};

export default Player;
